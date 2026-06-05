// Figma REST API fetcher — pulls structured design data + a rendered PNG for a frame.
//
// Usage:
//   node scripts/figma.mjs "<figma-frame-url>"
//   node scripts/figma.mjs "<figma-frame-url>" --scale 3
//
// Reads FIGMA_TOKEN from the environment or from .env.local.
// Writes:
//   figma-cache/<nodeId>.json   full node tree (layout, fills, text, fonts, effects)
//   figma-cache/<nodeId>.png    rendered reference image
//
// No npm dependencies — uses Node 18+ global fetch.

import fs from "node:fs";
import path from "node:path";

const API = "https://api.figma.com/v1";
const CACHE_DIR = path.resolve(process.cwd(), "figma-cache");

function loadToken() {
  if (process.env.FIGMA_TOKEN) return process.env.FIGMA_TOKEN;
  try {
    const env = fs.readFileSync(path.resolve(process.cwd(), ".env.local"), "utf8");
    const m = env.match(/^\s*FIGMA_TOKEN\s*=\s*(.+?)\s*$/m);
    if (m) return m[1].replace(/^["']|["']$/g, "");
  } catch {}
  return null;
}

// Accepts a full Figma URL and pulls out { fileKey, nodeId } (nodeId in API colon form).
function parseFigmaUrl(url) {
  const fileKey = url.match(/\/(?:design|file)\/([A-Za-z0-9]+)/)?.[1];
  if (!fileKey) throw new Error(`Could not find a file key in: ${url}`);
  const rawNode = new URL(url).searchParams.get("node-id");
  const nodeId = rawNode ? rawNode.replace(/-/g, ":") : null;
  return { fileKey, nodeId };
}

async function figma(token, urlPath) {
  const res = await fetch(`${API}${urlPath}`, { headers: { "X-Figma-Token": token } });
  if (!res.ok) {
    throw new Error(`Figma API ${res.status} ${res.statusText} for ${urlPath}\n${await res.text()}`);
  }
  return res.json();
}

async function main() {
  const args = process.argv.slice(2);
  const url = args.find((a) => a.startsWith("http"));
  const scale = args.includes("--scale") ? args[args.indexOf("--scale") + 1] : "2";
  if (!url) {
    console.error('Usage: node scripts/figma.mjs "<figma-frame-url>" [--scale 2]');
    process.exit(1);
  }

  const token = loadToken();
  if (!token) {
    console.error("No FIGMA_TOKEN found in env or .env.local");
    process.exit(1);
  }

  const { fileKey, nodeId } = parseFigmaUrl(url);
  if (!nodeId) {
    throw new Error("URL has no node-id. Copy a link to a specific frame (right-click frame → Copy link).");
  }
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const safe = nodeId.replace(/:/g, "-");

  // 1) Structured node data
  console.log(`Fetching node ${nodeId} from file ${fileKey} ...`);
  const nodes = await figma(token, `/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`);
  const jsonPath = path.join(CACHE_DIR, `${safe}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(nodes, null, 2));
  const doc = nodes.nodes?.[nodeId]?.document;
  console.log(`  → ${jsonPath}  (root: "${doc?.name ?? "?"}" ${doc?.type ?? ""})`);

  // 2) Rendered reference image
  const img = await figma(token, `/images/${fileKey}?ids=${encodeURIComponent(nodeId)}&format=png&scale=${scale}`);
  const imgUrl = img.images?.[nodeId];
  if (imgUrl) {
    const pngPath = path.join(CACHE_DIR, `${safe}.png`);
    const buf = Buffer.from(await (await fetch(imgUrl)).arrayBuffer());
    fs.writeFileSync(pngPath, buf);
    console.log(`  → ${pngPath}  (${(buf.length / 1024).toFixed(0)} KB @ ${scale}x)`);
  } else {
    console.log("  ! No image returned for this node.");
  }

  console.log("Done.");
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});

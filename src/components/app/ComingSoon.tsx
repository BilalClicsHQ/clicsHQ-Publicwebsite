'use client'

import * as React from 'react'
import { Sparkles, X } from 'lucide-react'

/**
 * Lightweight "Coming soon" toast.
 *
 * Wrap the app in <ComingSoonProvider> and call useComingSoon() to get a
 * `notify(feature?)` function. Use it on any button whose feature is not
 * built/wired yet, instead of a raw window.alert().
 */

type ComingSoonContextValue = (feature?: string) => void

const ComingSoonContext = React.createContext<ComingSoonContextValue | null>(null)

export function ComingSoonProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = React.useState<{ id: number; feature?: string } | null>(null)
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const notify = React.useCallback((feature?: string) => {
    if (timer.current) clearTimeout(timer.current)
    setToast({ id: Date.now(), feature })
    timer.current = setTimeout(() => setToast(null), 3200)
  }, [])

  React.useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])

  return (
    <ComingSoonContext.Provider value={notify}>
      {children}
      {toast && (
        <div
          key={toast.id}
          className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 animate-fade-up"
          role="status"
        >
          <div className="flex items-center gap-3 rounded-xl bg-ink px-4 py-3 shadow-2xl ring-1 ring-white/10">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ai-500/20 text-ai-300">
              <Sparkles className="h-4 w-4" />
            </span>
            <div className="pr-2">
              <p className="text-sm font-semibold text-white">
                {toast.feature ? `${toast.feature} — coming soon` : 'Coming soon'}
              </p>
              <p className="text-xs text-white/60">This feature is still in the works.</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </ComingSoonContext.Provider>
  )
}

/** Returns a `notify(feature?)` function. Throws if used outside the provider. */
export function useComingSoon(): ComingSoonContextValue {
  const ctx = React.useContext(ComingSoonContext)
  if (!ctx) throw new Error('useComingSoon must be used within <ComingSoonProvider>')
  return ctx
}

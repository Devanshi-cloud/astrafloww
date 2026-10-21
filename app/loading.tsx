export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--paper)]">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--signal-pink)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--signal-pink)] animate-ping" />
        <span>Loading AstraFloww...</span>
      </div>
    </div>
  );
}

// Small decorative divider used across every page hero/section heading.
// Was previously copy-pasted into Home, Hotel, Epicure, Menu, Gallery, Contact.
export default function MandalaDivider({ light = false }) {
  return (
    <div className="mandala-divider">
      <div className="mandala-line mandala-line-left" />
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="10" stroke="#C9A84C" strokeWidth="1" />
        <circle cx="11" cy="11" r="4" stroke="#C9A84C" strokeWidth="0.8" />
        <line x1="11" y1="1" x2="11" y2="21" stroke="#C9A84C" strokeWidth="0.6" />
        <line x1="1" y1="11" x2="21" y2="11" stroke="#C9A84C" strokeWidth="0.6" />
        {light && (
          <>
            <line x1="3.5" y1="3.5" x2="18.5" y2="18.5" stroke="#C9A84C" strokeWidth="0.4" />
            <line x1="18.5" y1="3.5" x2="3.5" y2="18.5" stroke="#C9A84C" strokeWidth="0.4" />
          </>
        )}
      </svg>
      <div className="mandala-line mandala-line-right" />
    </div>
  );
}

const focus =
  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-yellow-500';

export default function MaterialCard({ material, onOpen, onMarkViewed }) {
  const { title, category, description, kind, isNew } = material;

  return (
    <article
      className={`rounded-xl border bg-white p-4 ${isNew ? 'border-teal-300' : 'border-stone-200'}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700" aria-hidden="true">
          {kind === 'link' ? '🔗' : '📄'}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-base font-bold leading-snug text-stone-900">{title}</h3>
            {isNew && (
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-red-600 px-2 py-0.5 text-[11px] font-bold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white" /> NEW
              </span>
            )}
          </div>
          <span className="mt-1 inline-block rounded-full bg-stone-100 px-2 py-0.5 text-xs font-semibold text-stone-600">
            {category}
          </span>
          {description && <p className="mt-2 text-sm text-stone-500">{description}</p>}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => onOpen(material)}
          className={`rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-semibold text-stone-800 hover:bg-stone-50 ${focus}`}>
          {kind === 'link' ? 'Open Link' : 'View'}
        </button>
        {isNew && (
          <button type="button" onClick={() => onMarkViewed(material.id)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium text-stone-600 hover:text-stone-900 ${focus}`}>
            Mark as viewed
          </button>
        )}
      </div>
    </article>
  );
}

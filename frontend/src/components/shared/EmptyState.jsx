
function EmptyState({
  title = 'Nothing here yet',
  description = 'There is currently no information to display.',
  icon = '📂',
  action,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-soft text-3xl">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-800">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
        {description}
      </p>

      {action && (
        <div className="mt-5">
          {action}
        </div>
      )}
    </div>
  );
}

export default EmptyState;

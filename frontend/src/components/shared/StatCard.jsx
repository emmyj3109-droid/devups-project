
function StatCard({ title, value, description, icon, accent = 'emerald' }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-800">
            {value}
          </h2>
        </div>

        {icon && (
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${
              accent === 'emerald'
                ? 'bg-emerald-soft text-emerald-deep'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            {icon}
          </div>
        )}
      </div>

      {description && (
        <p className="mt-3 text-xs text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

export default StatCard;

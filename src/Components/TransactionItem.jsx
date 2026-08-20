import { useSelector } from "react-redux";

export default function TransactionItem({ transaction }) {
  const { merchant, date, categoryId, type, amount } = transaction;

  const isCredit = type === "credit";

  const selectedCategory = useSelector((state) => state.categories.items).find(
    (cat) => cat.id == categoryId
  );

  return (
    <div className="flex items-center justify-between border-b border-white/5 py-4 last:border-none">
      {/* Левая часть */}
      <div className="flex items-center gap-3">
        {/* Иконка */}
        <div className="flex size-10 items-center justify-center rounded-xl bg-slate-800">
          💳
        </div>

        {/* Merchant + дата + категория */}
        <div>
          <h3 className="font-semibold text-white">{merchant}</h3>

          <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
            <span>{date}</span>

            <span>•</span>

            <span>{selectedCategory?.name ?? "Income"}</span>
          </div>
        </div>
      </div>

      {/* Правая часть */}
      <div className="flex flex-col items-end gap-1">
        <span
          className={`font-mono font-semibold ${
            isCredit ? "text-emerald-400" : "text-slate-200"
          }`}
        >
          {isCredit ? "+" : "-"}${amount.toFixed(2)}
        </span>

        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            isCredit
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {isCredit ? "Credit" : "Debit"}
        </span>
      </div>
    </div>
  );
}

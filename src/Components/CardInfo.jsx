function CardInfo({ children }) {
  return (
    <div className="bg-brand-dark border border-neutral-800 rounded-2xl p-5 flex flex-col gap-4">
      {children}
    </div>
  );
}

export default CardInfo;

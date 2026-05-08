export function ProofBar() {
  const items = [
    { icon: "📊", label: "100+ geprüfte Kriterien" },
    { icon: "🛒", label: "Shop & Website Fokus" },
    { icon: "🔒", label: "DSGVO-konform" },
    { icon: "💡", label: "Praktische Empfehlungen" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-sm text-slate-300">
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
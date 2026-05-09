// src/components/marketing/templates/WhyBranmartTemplates.tsx

const points = [
  "Professionally designed layouts for all industries",
  "Fully responsive on any device",
  "Drag-and-drop editing",
  "SEO and speed optimized",
  "Built-in integrations and e-commerce features",
];

export default function WhyBranmartTemplates() {
  return (
    <section className="w-full py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-12">

        {/* Left: heading */}
        <div className="lg:w-72 shrink-0">
          <h2 className="font-display text-4xl font-bold text-[#461004] uppercase leading-tight mb-4">
            Why Choose <br /> Branmart Templates
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Every Branmart template is built for performance, flexibility, and ease.
          </p>
        </div>

        {/* Right: bullet list */}
        <ul className="flex-1 flex flex-col gap-4 pt-1">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="text-gray-400 mt-0.5">•</span>
              {point}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
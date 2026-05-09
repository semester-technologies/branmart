const steps = [
  {
    number: 1,
    title: "Create your account",
    description: "Sign up in seconds and get started for free.",
  },
  {
    number: 2,
    title: "Choose a template",
    description:
      "Browse templates designed for your industry and pick one that fits.",
  },
  {
    number: 3,
    title: "Customize Your Content",
    description:
      "Add your text, images, and business details using our simple editor.",
  },
  {
    number: 4,
    title: "Publish & Grow",
    description: "Go live instantly and start attracting customers online.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-20 px-4 bg-[#fff6ec]">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-[#cc3602] mb-3">
            How It Works
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#461004] uppercase leading-tight">
            Get Your Website Live <br /> In Four Simple Steps.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#fef3e8] border border-[#fde8d0] rounded-2xl p-6 flex flex-col gap-6"
            >
              {/* Number badge */}
              <div className="w-9 h-9 bg-[#cc3602] text-white text-sm font-bold rounded-xl flex items-center justify-center shrink-0">
                {step.number}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-[#241717] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
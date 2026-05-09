// src/components/marketing/features/Integrations.tsx

import Image from "next/image";

const row1 = [
  { name: "Visa",      src: "/images/integrations/visa.png"      },
  { name: "PayPal",    src: "/images/integrations/paypal.png"    },
  { name: "Stripe",    src: "/images/integrations/stripe.png"    },
  { name: "Amazon",    src: "/images/integrations/amazon.png"    },
  { name: "GPay",      src: "/images/integrations/gpay.png"      },
  { name: "Payoneer",  src: "/images/integrations/payoneer.png"  },
  { name: "Paysafe",   src: "/images/integrations/paysafe.png"   },
  { name: "OPay",      src: "/images/integrations/opay.png"      },
];

const row2 = [
  { name: "Mastercard",   src: "/images/integrations/mastercard.png"   },
  { name: "Verifone",     src: "/images/integrations/verifone.png"     },
  { name: "Giropay",      src: "/images/integrations/giropay.png"      },
  { name: "Checkout.com", src: "/images/integrations/checkoutcom.png"  },
  { name: "QPay",         src: "/images/integrations/qpay.png"         },
  { name: "Bitpay",       src: "/images/integrations/bitpay.png"       },
];

function LogoPill({ name, src }: { name: string; src: string }) {
  return (
    <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-center w-[88px] h-[52px] shrink-0">
      <Image
        src={src}
        alt={name}
        width={64}
        height={28}
        className="object-contain"
      />
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-5xl mx-auto bg-[#241717] rounded-3xl py-16 px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-4">
            Connect Your Favorite Tools
          </h2>
          <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
            Seamlessly integrate with apps you already use to run your business.
          </p>
        </div>

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-3 mb-3">
          {row1.map((item) => (
            <LogoPill key={item.name} {...item} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-3">
          {row2.map((item) => (
            <LogoPill key={item.name} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}
branmart-next/
│
├── app/
│   ├── layout.tsx                          # root layout (fonts, providers)
│   ├── globals.css
│   ├── not-found.tsx                       # 404 page
│   │
│   ├── (marketing)/                        # public pages — shared Navbar + Footer
│   │   ├── layout.tsx
│   │   ├── page.tsx                        # / homepage
│   │   ├── features/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── about-us/
│   │   │   └── page.tsx
│   │   ├── contact-us/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── templates/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── help-centre/
│   │       └── page.tsx
│   │
│   ├── (auth)/                             # unauthenticated only — no Navbar/Footer
│   │   ├── sign-up/
│   │   │   ├── page.tsx
│   │   │   └── verify-email/
│   │   │       └── page.tsx
│   │   ├── sign-in/
│   │   │   └── page.tsx
│   │   ├── forgot-password/
│   │   │   ├── page.tsx
│   │   │   └── verify/
│   │   │       └── page.tsx
│   │   └── reset-password/
│   │       ├── page.tsx
│   │       └── success/
│   │           └── page.tsx
│   │
│   ├── (dashboard)/                        # seller panel — JWT protected
│   │   ├── layout.tsx                      # Sidebar + TopBar wrapper
│   │   ├── dashboard/
│   │   │   └── page.tsx                    # summary/home
│   │   ├── products/
│   │   │   ├── page.tsx                    # all products
│   │   │   ├── add/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       ├── edit/
│   │   │       │   └── page.tsx
│   │   │       └── view/
│   │   │           └── page.tsx
│   │   ├── categories/
│   │   │   ├── page.tsx
│   │   │   ├── add/
│   │   │   │   └── page.tsx
│   │   │   └── success/
│   │   │       └── page.tsx
│   │   ├── store-setup/
│   │   │   ├── plan/
│   │   │   │   └── page.tsx
│   │   │   ├── payment/
│   │   │   │   └── page.tsx
│   │   │   ├── payment-success/
│   │   │   │   └── page.tsx
│   │   │   ├── theme/
│   │   │   │   └── page.tsx
│   │   │   └── theme-chosen/
│   │   │       └── page.tsx
│   │   ├── choose-gateway/
│   │   │   └── page.tsx
│   │   └── business-setup/
│   │       ├── info/
│   │       │   └── page.tsx
│   │       ├── kyc/
│   │       │   └── page.tsx
│   │       └── kyc-success/
│   │           └── page.tsx
│   │
│   ├── store/
│   │   └── [storeSlug]/                    # customer-facing storefront
│   │       ├── layout.tsx                  # merchant-branded Navbar
│   │       ├── page.tsx                    # store home
│   │       ├── shop/
│   │       │   ├── page.tsx                # product grid
│   │       │   └── [productId]/
│   │       │       └── page.tsx            # product detail
│   │       ├── cart/
│   │       │   └── page.tsx
│   │       ├── checkout/
│   │       │   └── page.tsx
│   │       └── orders/
│   │           └── page.tsx
│   │
│   └── api/                                # Next.js route handlers (proxy to Django)
│       └── auth/
│           ├── sign-in/
│           │   └── route.ts
│           ├── sign-out/
│           │   └── route.ts
│           └── refresh/
│               └── route.ts
│
├── src/
│   ├── components/
│   │   ├── ui/                             # reusable primitives (Button, Input, Modal…)
│   │   ├── layout/                         # Navbar, Footer, Sidebar, TopBar
│   │   ├── marketing/                      # section components per public page
│   │   │   ├── home/
│   │   │   ├── features/
│   │   │   ├── pricing/
│   │   │   ├── blog/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── templates/
│   │   │   └── help-centre/
│   │   ├── dashboard/                      # seller panel components
│   │   │   ├── home/
│   │   │   ├── products/
│   │   │   ├── categories/
│   │   │   ├── store-setup/
│   │   │   └── business-setup/
│   │   └── storefront/                     # customer-facing components
│   │       ├── shop/
│   │       ├── cart/
│   │       └── checkout/
│   │
│   ├── lib/
│   │   ├── api.ts                          # Axios instance + JWT interceptor
│   │   ├── auth.ts                         # token helpers
│   │   └── cn.ts                           # Tailwind class merge utility
│   │
│   ├── hooks/                              # custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useProducts.ts
│   │   └── useCategories.ts
│   │
│   ├── context/                            # React context providers
│   │   ├── AuthContext.tsx
│   │   └── CartContext.tsx
│   │
│   └── types/
│       └── index.ts                        # shared TypeScript interfaces
│
├── public/                                 # static assets (images, fonts, icons)
│
├── middleware.ts                           # JWT route guard
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── .env.local
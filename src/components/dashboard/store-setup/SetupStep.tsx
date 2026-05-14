"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Upload, ArrowRight, ArrowLeft, Phone,
  Mail, MessageCircle, MapPin,
} from "lucide-react";
import { cn } from "@/src/lib/cn";

const industries = [
  "Fashion & Apparel", "Food & Restaurant", "Health & Fitness",
  "Technology & SaaS", "Real Estate", "Education", "Beauty & Skincare",
  "Consulting & Agencies", "Events & Bookings", "Healthcare", "Other",
];

const innerSteps = [
  { number: 1, label: "Business Details"   },
  { number: 2, label: "Branding"           },
  { number: 3, label: "Contact & Location" },
  { number: 4, label: "Review"             },
];

const presetColors = [
  "#cc3602", "#2563EB", "#16A34A", "#DC2626",
  "#9333EA", "#0891B2", "#D97706", "#7C3AED",
  "#DB2777", "#059669",
];

const fonts = [
  { name: "Bricolage Grotesque" },
  { name: "Inter"               },
  { name: "Poppins"             },
  { name: "Playfair Display"    },
  { name: "DM Sans"             },
  { name: "Lato"                },
];

export default function SetupStep() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  const [building, setBuilding] = useState(false);

  // Step 1
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Step 2
  const [primaryColor, setPrimaryColor] = useState("#2563EB");
  const [secondaryColor, setSecondaryColor] = useState("#1D2939");
  const [selectedFont, setSelectedFont] = useState("Bricolage Grotesque");

  // Step 3
  const [bookingEnabled, setBookingEnabled] = useState(true);
  const contactFormik = useFormik({
    initialValues: {
      phone: "", email: "", whatsapp: "", address: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string().required("Phone number is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      whatsapp: Yup.string(),
      address: Yup.string(),
    }),
    onSubmit: () => setActiveStep(4),
  });

  // Step 1 formik
  const formik = useFormik({
    initialValues: { businessName: "", industry: "", description: "" },
    validationSchema: Yup.object({
      businessName: Yup.string().required("Business name is required"),
      industry: Yup.string().required("Industry is required"),
      description: Yup.string().max(300),
    }),
    onSubmit: () => setActiveStep(2),
  });

  function handleFile(file: File) {
    setLogoFile(file);
    setLogoPreview(URL.createObjectURL(file));
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  const inputClass = (touched: boolean | undefined, error: string | undefined) =>
    cn(
      "w-full border rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors",
      touched && error
        ? "border-red-400 bg-red-50 focus:border-red-400"
        : "border-gray-200 focus:border-[#cc3602]"
    );

  function handleBuildWebsite() {
    setBuilding(true);
    // TODO: call Django API to build website
    setTimeout(() => {
      setBuilding(false);
      router.push("/dashboard");
    }, 3000);
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-10 relative">

      {/* ── Building overlay ── */}
      {building && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-[#cc3602] rounded-full animate-spin" />
          <p className="text-lg font-semibold text-[#241717]">Building your website...</p>
          <p className="text-sm text-gray-500">This usually takes a few seconds</p>
        </div>
      )}

      {/* Inner step tabs */}
      <div className="flex items-center gap-0 mb-10 border-b border-gray-200">
        {innerSteps.map((step, i) => (
          <div key={step.number} className="flex items-center">
            <button
              onClick={() => step.number < activeStep && setActiveStep(step.number)}
              className={cn(
                "flex items-center gap-2 px-1 pb-3 text-sm font-medium transition-colors border-b-2 -mb-px",
                activeStep === step.number
                  ? "border-[#cc3602] text-[#cc3602]"
                  : step.number < activeStep
                  ? "border-transparent text-gray-400 cursor-pointer hover:text-gray-600"
                  : "border-transparent text-gray-400 cursor-default"
              )}
            >
              <span className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                activeStep === step.number ? "bg-[#cc3602] text-white"
                : step.number < activeStep ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-400"
              )}>
                {step.number < activeStep ? (
                  <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
                    <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : step.number}
              </span>
              <span className="hidden sm:block">{step.label}</span>
            </button>
            {i < innerSteps.length - 1 && (
              <div className="w-6 md:w-12 h-px bg-gray-200 mx-1 mb-3 shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* ── Step 1: Business Details ── */}
      {activeStep === 1 && (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#241717] mb-1">Tell us about your business</h2>
            <p className="text-sm text-gray-500">This information will be used to personalize your website.</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1.5">
              Business name <span className="text-[#cc3602]">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Mitchell Dental"
              {...formik.getFieldProps("businessName")}
              className={inputClass(formik.touched.businessName, formik.errors.businessName)}
            />
            {formik.touched.businessName && formik.errors.businessName && (
              <p className="text-xs text-red-500 mt-1">{formik.errors.businessName}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1.5">
              Industry <span className="text-[#cc3602]">*</span>
            </label>
            <select
              {...formik.getFieldProps("industry")}
              className={cn(inputClass(formik.touched.industry, formik.errors.industry), "cursor-pointer")}
            >
              <option value="">Select your industry</option>
              {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
            </select>
            {formik.touched.industry && formik.errors.industry && (
              <p className="text-xs text-red-500 mt-1">{formik.errors.industry}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1.5">
              Brief description <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what your business does in a sentence or two..."
              {...formik.getFieldProps("description")}
              maxLength={300}
              className={cn(inputClass(formik.touched.description, formik.errors.description), "resize-none")}
            />
            <p className="text-xs text-gray-400 text-right mt-1">
              {formik.values.description.length}/300
            </p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1.5">
              Logo <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            {!logoFile ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={cn(
                  "w-full border-2 border-dashed rounded-xl px-4 py-8 flex flex-col items-center gap-2 cursor-pointer transition-colors",
                  isDragging ? "border-[#cc3602] bg-orange-50" : "border-gray-200 hover:border-gray-400 bg-gray-50"
                )}
              >
                <Upload size={20} className="text-gray-400" />
                <p className="text-sm text-gray-500">Click or drag to upload</p>
                <p className="text-xs text-gray-400">PNG, JPG, SVG · Max 5MB</p>
              </div>
            ) : (
              <div className="w-full border border-[#cc3602] bg-[#fff6ec] rounded-xl px-4 py-4 flex items-center gap-4">
                <img src={logoPreview!} alt="Logo" className="w-10 h-10 rounded-lg object-cover shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Logo uploaded</p>
                  <button
                    type="button"
                    onClick={() => { setLogoFile(null); setLogoPreview(null); }}
                    className="text-xs text-[#cc3602] hover:underline mt-0.5"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}
            <input ref={fileInputRef} type="file" accept=".png,.jpg,.jpeg,.svg" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
            />
          </div>

          <div className="h-px bg-gray-100" />
          <div className="flex justify-end">
            <button type="submit" className="inline-flex items-center gap-2 bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium px-8 py-3 rounded-xl transition-colors">
              Continue <ArrowRight size={15} />
            </button>
          </div>
        </form>
      )}

      {/* ── Step 2: Branding ── */}
      {activeStep === 2 && (
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-xl font-bold text-[#241717] mb-1">Set your brand style</h2>
            <p className="text-sm text-gray-500">Choose colors and fonts that represent your business.</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-3">Primary brand color</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {presetColors.map((color) => (
                <button key={color} type="button" onClick={() => setPrimaryColor(color)}
                  className={cn("w-10 h-10 rounded-xl transition-all", primaryColor === color ? "ring-2 ring-offset-2 ring-gray-400 scale-110" : "")}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl shrink-0 border border-gray-200" style={{ backgroundColor: primaryColor }} />
              <input type="text" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)}
                className="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#cc3602] w-32"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-3">Secondary color</label>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl shrink-0 border border-gray-200" style={{ backgroundColor: secondaryColor }} />
              <input type="text" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)}
                className="border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#cc3602] w-32"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-3">Font style</label>
            <div className="grid grid-cols-2 gap-3">
              {fonts.map((font) => (
                <button key={font.name} type="button" onClick={() => setSelectedFont(font.name)}
                  className={cn("border rounded-xl px-4 py-4 text-left transition-colors",
                    selectedFont === font.name ? "border-[#cc3602] bg-[#fff6ec]" : "border-gray-200 hover:border-gray-400"
                  )}
                >
                  <p className="text-base font-medium text-[#241717]">Aa Bb Cc</p>
                  <p className="text-xs text-gray-400 mt-0.5">{font.name}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-4">Preview</p>
            <div className="flex items-center gap-3 flex-wrap">
              <button className="text-sm font-medium text-white px-5 py-2.5 rounded-lg" style={{ backgroundColor: primaryColor }}>
                Primary Button
              </button>
              <button className="text-sm font-medium px-5 py-2.5 rounded-lg border-2 bg-white" style={{ color: primaryColor, borderColor: primaryColor }}>
                Secondary Button
              </button>
            </div>
          </div>

          <button type="button"
            onClick={() => { setPrimaryColor("#2563EB"); setSecondaryColor("#1D2939"); setSelectedFont("Bricolage Grotesque"); }}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#cc3602] transition-colors w-fit"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M2 8a6 6 0 1 0 1.2-3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M2 4.5V8h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Reset to defaults
          </button>

          <div className="h-px bg-gray-100" />
          <div className="flex items-center justify-between">
            <button type="button" onClick={() => setActiveStep(1)} className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#cc3602] transition-colors">
              <ArrowLeft size={14} /> Back
            </button>
            <button type="button" onClick={() => setActiveStep(3)} className="inline-flex items-center gap-2 bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium px-8 py-3 rounded-xl transition-colors">
              Continue <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* ── Step 3: Contact & Location ── */}
      {activeStep === 3 && (
        <form onSubmit={contactFormik.handleSubmit} className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#241717] mb-1">Contact & location</h2>
            <p className="text-sm text-gray-500">Help customers find and reach your business.</p>
          </div>

          {/* Phone + Email side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
                <Phone size={13} className="text-gray-400" /> Phone number
              </label>
              <input type="tel" placeholder="+1 (555) 123-4567"
                {...contactFormik.getFieldProps("phone")}
                className={inputClass(contactFormik.touched.phone, contactFormik.errors.phone)}
              />
              {contactFormik.touched.phone && contactFormik.errors.phone && (
                <p className="text-xs text-red-500 mt-1">{contactFormik.errors.phone}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
                <Mail size={13} className="text-gray-400" /> Business email
              </label>
              <input type="email" placeholder="hello@business.com"
                {...contactFormik.getFieldProps("email")}
                className={inputClass(contactFormik.touched.email, contactFormik.errors.email)}
              />
              {contactFormik.touched.email && contactFormik.errors.email && (
                <p className="text-xs text-red-500 mt-1">{contactFormik.errors.email}</p>
              )}
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
              <MessageCircle size={13} className="text-gray-400" />
              WhatsApp number <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input type="tel" placeholder="+1 (555) 123-4567"
              {...contactFormik.getFieldProps("whatsapp")}
              className={inputClass(contactFormik.touched.whatsapp, contactFormik.errors.whatsapp)}
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
              <MapPin size={13} className="text-gray-400" />
              Business address <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <textarea rows={3} placeholder="123 Business St, Suite 100, City, State 12345"
              {...contactFormik.getFieldProps("address")}
              className={cn(inputClass(contactFormik.touched.address, contactFormik.errors.address), "resize-none")}
            />

            {/* Map preview */}
            {contactFormik.values.address && (
              <div className="mt-2 w-full h-32 bg-gray-100 rounded-xl flex flex-col items-center justify-center gap-2">
                <MapPin size={18} className="text-gray-400" />
                <p className="text-xs text-gray-400">Map preview will appear here</p>
              </div>
            )}
          </div>

          {/* Appointment booking toggle */}
          <div className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4">
            <div>
              <p className="text-sm font-medium text-[#241717]">Enable appointment booking</p>
              <p className="text-xs text-gray-500 mt-0.5">Let customers book time slots on your website</p>
            </div>
            <button
              type="button"
              onClick={() => setBookingEnabled((p) => !p)}
              className={cn(
                "relative w-11 h-6 rounded-full transition-colors shrink-0",
                bookingEnabled ? "bg-[#cc3602]" : "bg-gray-300"
              )}
            >
              <span className={cn(
                "absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform",
                bookingEnabled ? "translate-x-6" : "translate-x-1"
              )} />
            </button>
          </div>

          <div className="h-px bg-gray-100" />
          <div className="flex items-center justify-between">
            <button type="button" onClick={() => setActiveStep(2)} className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#cc3602] transition-colors">
              <ArrowLeft size={14} /> Back
            </button>
            <button type="submit" className="inline-flex items-center gap-2 bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium px-8 py-3 rounded-xl transition-colors">
              Continue <ArrowRight size={15} />
            </button>
          </div>
        </form>
      )}

      {/* ── Step 4: Review ── */}
      {activeStep === 4 && (
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#241717] mb-1">Review your details</h2>
            <p className="text-sm text-gray-500">Make sure everything looks good before we build your site.</p>
          </div>

          {/* Business Details */}
          <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-semibold text-[#241717]">Business Details</p>
              <button onClick={() => setActiveStep(1)} className="text-xs font-medium text-[#cc3602] hover:underline">Edit</button>
            </div>
            {[
              { label: "Business name", value: formik.values.businessName || "—"          },
              { label: "Industry",      value: formik.values.industry     || "—"          },
              { label: "Description",   value: formik.values.description  || "Not provided" },
              { label: "Logo",          value: logoFile ? "Uploaded" : "Not uploaded"     },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{row.label}</span>
                <span className="text-gray-700 font-medium text-right max-w-[200px] truncate">{row.value}</span>
              </div>
            ))}
          </div>

          {/* Branding */}
          <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-semibold text-[#241717]">Branding</p>
              <button onClick={() => setActiveStep(2)} className="text-xs font-medium text-[#cc3602] hover:underline">Edit</button>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Primary color</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: primaryColor }} />
                <span className="text-gray-700 font-medium">{primaryColor}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Secondary color</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: secondaryColor }} />
                <span className="text-gray-700 font-medium">{secondaryColor}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Font</span>
              <span className="text-gray-700 font-medium">{selectedFont}</span>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm font-semibold text-[#241717]">Contact & Location</p>
              <button onClick={() => setActiveStep(3)} className="text-xs font-medium text-[#cc3602] hover:underline">Edit</button>
            </div>
            {[
              { label: "Phone",    value: contactFormik.values.phone    || "Not provided" },
              { label: "Email",    value: contactFormik.values.email    || "Not provided" },
              { label: "WhatsApp", value: contactFormik.values.whatsapp || "Not provided" },
              { label: "Address",  value: contactFormik.values.address  || "Not provided" },
              { label: "Booking",  value: bookingEnabled ? "Enabled" : "Disabled"         },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{row.label}</span>
                <span className="text-gray-700 font-medium text-right max-w-[220px] truncate">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="h-px bg-gray-100" />
          <div className="flex items-center justify-between">
            <button type="button" onClick={() => setActiveStep(3)} className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#cc3602] transition-colors">
              <ArrowLeft size={14} /> Back
            </button>
            <button
              type="button"
              onClick={handleBuildWebsite}
              className="inline-flex items-center gap-2 bg-[#cc3602] hover:bg-[#e65a29] text-white text-sm font-medium px-8 py-3 rounded-xl transition-colors"
            >
              Build My Website <ArrowRight size={15} />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
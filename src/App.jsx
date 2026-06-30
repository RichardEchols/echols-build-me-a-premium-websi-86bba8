import React from "react";

// ————————————————————————————————————————————————————————————————
// MERIDIAN ESTATECRAFT — Real-Estate Developer Management Company
// Single-file React app. All sections inline. Tailwind styling.
// ————————————————————————————————————————————————————————————————
const PHOTO = (q, i, extra = "") =>
  `https://echols.ai/api/stock?type=photo&q=${q}&i=${i}${extra ? "&" + extra : ""}`;
const VIDEO = (q) => `https://echols.ai/api/stock?type=video&q=${q}`;

const Eyebrow = ({ children }) => (
  <div className="mb-3 text-[0.7rem] uppercase tracking-[0.4em] font-semibold text-[#a8a8a0] text-center">
    {children}
  </div>
);

const Hero = () => (
  <section className="relative block w-full h-[100svh] overflow-hidden">
    {/* full-bleed on-topic video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={PHOTO("real-estate", 0, "orient=portrait")}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
    >
      <source src={VIDEO("real-estate")} type="video/mp4" />
    </video>
    {/* dark gradient overlay */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "linear-gradient(rgba(0,0,0,.42), rgba(0,0,0,.72))",
      }}
    />
    <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6 text-[0.7rem] uppercase tracking-[0.4em] font-semibold text-[#c5c5c5]">
          Meridian Estatecraft · Developer-Led Management
        </div>
        <h1
          className="font-display text-[#fff] leading-[1.05] tracking-[-0.02rem]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          We build the spaces
          <br />
          that build the future.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-[#dcdcd0] text-[1.05rem] leading-[1.7]">
          Meridian Estatecraft is a developer-led management company shaping land, asset, and
          infrastructure stewardship into a single disciplined practice. We manage what we build,
          and we build what lasts.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="#mission"
            className="inline-flex items-center rounded-[14px] bg-[#fff] px-5 py-3 text-[0.95rem] font-medium text-[#0b0b07] transition-transform duration-200 hover:scale-[1.04]"
          >
            Read our mission
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center rounded-[14px] border border-[#fff/30] px-5 py-3 text-[0.95rem] font-medium text-[#fff] transition-transform duration-200 hover:scale-[1.04]"
          >
            View the portfolio
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Mission = () => (
  <section id="mission" className="relative block w-full py-[7rem] bg-[#0b0b07]">
    <div className="max-w-6xl mx-auto px-6 grid gap-12 lg-grid-cols-2 items-start">
      <div className="space-y-6">
        <Eyebrow>Our Mission</Eyebrow>
        <h2 className="font-display text-[#fff] leading-[1.1]" style={{ fontSize: "clamp(2rem,4vw,3.4rem)" }}>
          Stewardship is the<br />first construction.
        </h2>
        <p className="text-[#cbbfbf] text-[1.05rem] leading-[1.7] max-w-prose">
          We don't simply sell units — we manage the entire arc of a building's life: from soil
          preparation and structural planning through occupancy, maintenance, and eventual renewal.
          Every project we take on is treated as a multi-decade commitment, not a transaction.
        </p>
        <p className="text-[#cbbfbf] text-[1.05rem] leading-[1.7] max-w-prose">
          That means real engineering specs, real maintenance ledgers, real resident-facing
          accountability. The developer is also the steward. That is the only model we run.
        </p>
      </div>
      <div className="aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-[#0b0b07]">
        <img
          src={PHOTO("real-estate", 1, "orient=portrait")}
          alt="Architectural interior, on-topic"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

const Approach = () => (
  <section className="relative block w-full py-[7rem] bg-[#080806]">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center">
        <Eyebrow>Our Approach to Investment</Eyebrow>
        <h2 className="font-display text-[#fff] leading-[1.1]" style={{ fontSize: "clamp(2rem,4vw,3.4rem)" }}>
          Capital funds the work,<br />not the brand.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-[#cbbfbf] text-[1.05rem] leading-[1.7]">
          We invest in structural performance, resident comfort, and long-hesture resilience.
          Every dollar is assigned against a measurable outcome.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg-grid-cols-3">
        {[
          { t: "Structural Engineering", d: "Load calculations, wind-load, and material spec are committed before any contract is signed." },
          { t: "Resident-Facing Quality", d: "Acoustics, thermal control, and natural light are budgeted as non-negotiables, not luxuries." },
          { t: "Decade-Scale Renewal", d: "We plan maintenance and replacement cycles on 25-year horizons, not 5-year marketing quarters." },
        ].map((c) => (
          <div
            key={c.t}
            className="rounded-[18px] border border-[#fff/15] bg-[#0b0b07] p-6 transition-transform duration-200 hover:scale-[1.03] hover:-translate-y-1"
          >
            <h3 className="font-display text-[#fff] text-[1.4rem] leading-[1.2]">{c.t}</h3>
            <p className="mt-3 text-[#cbbfbf] text-[0.95rem] leading-[1.6]">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Sustainability = () => (
  <section className="relative block w-full py-[7rem] bg-[#0b0b07]">
    <div className="max-w-6xl mx-auto px-6 grid gap-12 lg-grid-cols-2 items-start">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-[#080806]">
        <img
          src={PHOTO("real-estate", 2, "orient=portrait")}
          alt="Environmental sustainability, on-topic"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-6">
        <Eyebrow>Corporate Sustainability</Eyebrow>
        <h2 className="font-display text-[#fff] leading-[1.1]" style={{ fontSize: "clamp(2rem,4vw,3.4rem)" }}>
          Sustainability is a<br />books-on-the-line practice.
        </h2>
        <p className="text-[#cbbfbf] text-[1.05rem] leading-[1.7] max-w-prose">
          Sustainability isn't a marketing line — it's a measurable practice we publish. Water
          usage, energy load, resident-reported thermal comfort, and carbon-neutral operations are
          all tracked and disclosed per building.
        </p>
        <ul className="space-y-3 text-[#cbbfbf] text-[1rem] leading-[1.6]">
          <li className="flex gap-3"><span className="text-[#fff]">—</span> Carbon-neutral operations target within 36 months of occupancy.</li>
          <li className="flex gap-3"><span className="text-[#fff]">—</span> Resident-reported thermal comfort published quarterly.</li>
          <li className="flex gap-3"><span className="text-[#fff]">—</span> Maintenance ledger transparent per unit, no black-box budgets.</li>
        </ul>
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const imgs = [3, 4, 5, 6, 7, 8];
  return (
    <section id="gallery" className="relative block w-full py-[7rem] bg-[#080806]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <Eyebrow>The Portfolio</Eyebrow>
          <h2 className="font-display text-[#fff] leading-[1.1]" style={{ fontSize: "clamp(2rem,4vw,3.4rem)" }}>
            What we've built.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm-grid-cols-2 lg-grid-cols-3">
          {imgs.map((i) => (
            <div key={i} className="aspect-[3/4] w-full overflow-hidden rounded-[14px] bg-[#0b0b07]">
              <img
                src={PHOTO("real-estate", i)}
                alt={`Portfolio image ${i}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.05]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="relative block w-full py-[7rem] bg-[#0b0b07]">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center">
        <Eyebrow>Field Reporting</Eyebrow>
        <h2 className="font-display text-[#fff] leading-[1.1]" style={{ fontSize: "clamp(2rem,4vw,3.4rem)" }}>
          From the field.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 lg-grid-cols-2">
        {[
          { q: "The first developer in twelve years who handed me a maintenance schedule instead of a brochure.", a: "— Resident, North Atrium Building" },
          { q: "They budgeted for the thermal comfort we actually experience, not the one in the ad.", a: "— Resident, South Tower" },
        ].map((t) => (
          <div key={t.a} className="rounded-[18px] border border-[#fff/15] bg-[#080806] p-8">
            <p className="font-display text-[#fff] leading-[1.3]" style={{ fontSize: "clamp(1.3rem,2.5vw,2rem)" }}>
              "{t.q}"
            </p>
            <p className="mt-4 text-[#cbbfbf] text-[0.9rem]">{t.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="relative block w-full py-[7rem] bg-[#080806]">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <Eyebrow>Begin</Eyebrow>
      <h2 className="font-display text-[#fff] leading-[1.1]" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
        Build with us.
      </h2>
      <p className="mt-6 max-w-2xl mx-auto text-[#cbbfbf] text-[1.05rem] leading-[1.7]">
        Join a project as a resident, an investor, or a fellow developer. The work is real,
        the ledgers are open, and the future is the point.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <a href="#mission" className="inline-flex items-center rounded-[14px] bg-[#fff] px-6 py-3 text-[0.95rem] font-medium text-[#0b0b07] transition-transform duration-200 hover:scale-[1.04]">
          Become a resident
        </a>
        <a href="#mission" className="inline-flex items-center rounded-[14px] border border-[#fff/30] px-6 py-3 text-[0.95rem] font-medium text-[#fff] transition-transform duration-200 hover:scale-[1.04]">
          Invest in a build
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="relative block w-full py-[3rem] bg-[#0b0b07] border-t border-[#fff/10]">
    <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-[#cbbfbf] text-[0.9rem]">
      <span className="font-display text-[#fff] text-[1.2rem]">Meridian Estatecraft</span>
      <span>Developer-Led Management · Built to last.</span>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b07] text-[#cbbfbf] font-[Inter]">
      <Hero />
      <Mission />
      <Approach />
      <Sustainability />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

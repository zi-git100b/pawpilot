import { useState, useEffect, useRef } from "react";

/* ═══════════════ TOKENS ═══════════════ */
const T = {
  gold: "#E8A817", goldDark: "#C48E0E", goldLight: "#FFF3D0", goldBg: "#FFFBF0",
  bg: "#FFFFFF", bgSoft: "#FAFAF7", bgWarm: "#FFF9ED", bgDark: "#1A1A1A",
  card: "#FFFFFF", cardBorder: "#F0EBE0",
  text: "#1A1A1A", sub: "#5A5550", muted: "#9A938A",
  teal: "#2A9D8F", coral: "#E8785A",
  border: "#EDEBE6",
  sh: "0 2px 16px rgba(0,0,0,0.06)", shHover: "0 8px 30px rgba(0,0,0,0.1)",
};
const PHONE = "+16573666849";
const PD = "(657) 366-6849";

/* Real stock images */
const IMG = {
  hero: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
  groomer1: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&q=80",
  groomer2: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
  dog1: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
  dog2: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80",
  salon: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=600&q=80",
};

/* ═══════════════ HOOKS ═══════════════ */
function useInView(t = 0.12) {
  const r = useRef(null); const [v, s] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) s(true); }, { threshold: t }); if (r.current) o.observe(r.current); return () => o.disconnect(); }, []);
  return [r, v];
}
function Ani({ children, delay = 0 }) {
  const [r, v] = useInView();
  return <div ref={r} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>{children}</div>;
}
function go(h) { window.location.hash = h; window.scrollTo(0, 0); }

/* ═══════════════ ICONS ═══════════════ */
function PawLogo({ size = 32 }) {
  return <svg width={size} height={size} viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="12" fill={T.gold}/><ellipse cx="14" cy="14" rx="3" ry="3.5" fill="#fff"/><ellipse cx="26" cy="14" rx="3" ry="3.5" fill="#fff"/><ellipse cx="9" cy="22" rx="2.5" ry="3" fill="#fff"/><ellipse cx="31" cy="22" rx="2.5" ry="3" fill="#fff"/><path d="M20 34c-5 0-9-4-9-7.5S16 18 20 18s9 1 9 8.5S25 34 20 34z" fill="#fff"/></svg>;
}
function Paw({ size = 20, color = T.gold }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><ellipse cx="7" cy="8" rx="2.5" ry="3"/><ellipse cx="17" cy="8" rx="2.5" ry="3"/><ellipse cx="3.5" cy="14" rx="2" ry="2.5"/><ellipse cx="20.5" cy="14" rx="2" ry="2.5"/><path d="M12 22c-4 0-7-3.5-7-6.5S9 11 12 11s7 1 7 4.5S16 22 12 22z"/></svg>;
}

/* nav feature icons */
function IconWebsite() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.sub} strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>; }
function IconPhone() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.sub} strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>; }
function IconText() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.sub} strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>; }
function IconChat() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.sub} strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>; }
function IconStar() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.sub} strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>; }

/* ═══════════════ SHARED ═══════════════ */
function PhoneBtn({ text = `Call ${PD}`, outline = false }) {
  const [h, sH] = useState(false);
  return <a href={`tel:${PHONE}`} onMouseEnter={() => sH(true)} onMouseLeave={() => sH(false)} style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: "60px", background: outline ? "transparent" : (h ? T.goldDark : T.gold), border: outline ? `2px solid ${T.gold}` : "none", color: outline ? T.gold : "#fff", fontSize: "15px", fontWeight: 700, fontFamily: "'Nunito', sans-serif", textDecoration: "none", transition: "all 0.3s ease", cursor: "pointer", transform: h ? "translateY(-1px)" : "none", boxShadow: h && !outline ? "0 6px 20px rgba(232,168,23,0.3)" : "none" }}>{"📞"} {text}</a>;
}
function DemoBtn({ text = "Book a Demo" }) {
  const [h, sH] = useState(false);
  return <a onClick={(e) => { e.preventDefault(); go("pricing"); }} href="#pricing" onMouseEnter={() => sH(true)} onMouseLeave={() => sH(false)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", borderRadius: "60px", background: h ? T.bgDark : T.text, color: "#fff", fontSize: "15px", fontWeight: 700, fontFamily: "'Nunito', sans-serif", textDecoration: "none", transition: "all 0.3s ease", cursor: "pointer", transform: h ? "translateY(-1px)" : "none" }}>{text} →</a>;
}
function Tag({ children, color = T.gold }) {
  return <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 18px", borderRadius: "50px", background: `${color}15`, color, fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700 }}>{children}</span>;
}
function SH({ tag, title, desc, tagColor = T.gold }) {
  return <Ani><div style={{ textAlign: "center", marginBottom: "48px" }}><Tag color={tagColor}>{tag}</Tag><h2 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: T.text, lineHeight: 1.15, margin: "20px 0 14px" }}>{title}</h2>{desc && <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "17px", color: T.sub, lineHeight: 1.6, maxWidth: "560px", margin: "0 auto" }}>{desc}</p>}</div></Ani>;
}
function PainCard({ emoji, title, desc }) {
  return <div style={{ padding: "24px", background: T.card, borderRadius: "20px", border: `1px solid ${T.cardBorder}`, boxShadow: T.sh, display: "flex", alignItems: "flex-start", gap: "16px" }}><span style={{ fontSize: "28px", flexShrink: 0 }}>{emoji}</span><div><h3 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "16px", fontWeight: 800, color: T.text, margin: "0 0 4px" }}>{title}</h3><p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: T.sub, lineHeight: 1.6, margin: 0 }}>{desc}</p></div></div>;
}
function SolCard({ icon, title, desc }) {
  const [h, sH] = useState(false);
  return <div onMouseEnter={() => sH(true)} onMouseLeave={() => sH(false)} style={{ padding: "28px", background: T.card, borderRadius: "20px", border: `1px solid ${h ? T.gold : T.cardBorder}`, boxShadow: h ? T.shHover : T.sh, transition: "all 0.3s ease" }}><span style={{ fontSize: "28px", display: "block", marginBottom: "14px" }}>{icon}</span><h3 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "17px", fontWeight: 800, color: T.text, margin: "0 0 8px" }}>{title}</h3><p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: T.sub, lineHeight: 1.6, margin: 0 }}>{desc}</p></div>;
}

/* ═══════════════ NAV ═══════════════ */
function Nav() {
  const [sc, sS] = useState(false);
  const [dd, sD] = useState(false);
  useEffect(() => { const f = () => sS(window.scrollY > 40); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);

  const products = [
    { icon: <IconWebsite />, name: "Functional Website", desc: "A lead-generating site in days", hash: "get-found" },
    { icon: <IconPhone />, name: "AI Voice Receptionist", desc: "Answers every call 24/7", hash: "never-miss" },
    { icon: <IconText />, name: "Missed Call Text Back", desc: "Automatically text back missed calls", hash: "never-miss" },
    { icon: <IconChat />, name: "Conversation Bot", desc: "24/7 chat that books appointments", hash: "stay-connected" },
    { icon: <IconStar />, name: "Google Review Funnel", desc: "Get more 5-star reviews automatically", hash: "get-reviews" },
  ];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 40px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", background: sc ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.8)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${sc ? T.border : "transparent"}`, transition: "all 0.3s ease" }}>
      <div onClick={() => go("")} style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
        <PawLogo size={36} />
        <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: "20px", color: T.text }}>PawPilot</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {/* Products dropdown */}
        <div style={{ position: "relative" }} onMouseEnter={() => sD(true)} onMouseLeave={() => sD(false)}>
          <span className="pp-nav" style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 600, color: T.sub, padding: "8px 14px", borderRadius: "10px", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", transition: "all 0.2s" }}>
            Products <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={T.sub} strokeWidth="2"><path d="M3 5l3 3 3-3"/></svg>
          </span>
          {dd && (
            <div style={{ position: "absolute", top: "100%", left: "-80px", width: "380px", background: T.card, borderRadius: "16px", border: `1px solid ${T.cardBorder}`, boxShadow: "0 12px 40px rgba(0,0,0,0.12)", padding: "12px", zIndex: 200 }}>
              {products.map((p, i) => (
                <div key={i} onClick={() => { go(p.hash); sD(false); }} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 14px", borderRadius: "12px", cursor: "pointer", transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = T.bgSoft} onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: T.bgSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, color: T.text }}>{p.name}</div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", color: T.muted }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <a onClick={(e) => { e.preventDefault(); go("pricing"); }} href="#pricing" className="pp-nav" style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 600, color: T.sub, textDecoration: "none", padding: "8px 14px", borderRadius: "10px", cursor: "pointer", transition: "all 0.2s" }}>Pricing</a>
        <a onClick={(e) => { e.preventDefault(); go("our-work"); }} href="#our-work" className="pp-nav" style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 600, color: T.sub, textDecoration: "none", padding: "8px 14px", borderRadius: "10px", cursor: "pointer", transition: "all 0.2s" }}>Our Work</a>

        <div style={{ width: "1px", height: "24px", background: T.border, margin: "0 8px" }} className="pp-nav" />
        <a href={`tel:${PHONE}`} style={{ padding: "10px 20px", borderRadius: "50px", background: T.gold, color: "#fff", fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, textDecoration: "none" }}>Book A Call</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "60px 40px 40px", borderTop: `1px solid ${T.border}`, background: T.bg }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "40px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}><PawLogo size={28} /><span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "18px", fontWeight: 900, color: T.text }}>PawPilot</span></div>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: T.muted }}>Powered by Brazile Systems</span>
        </div>
        <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
          {[["Products", [["AI Voice", "never-miss"], ["Websites", "get-found"], ["Reviews", "get-reviews"], ["Chat Bot", "stay-connected"]]], ["Company", [["Pricing", "pricing"]]]].map(([title, links]) => (
            <div key={title}>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 800, color: T.text, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>{title}</div>
              {links.map(([l, h]) => <a key={l} onClick={(e) => { e.preventDefault(); go(h); }} href={`#${h}`} style={{ display: "block", fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: T.sub, textDecoration: "none", marginBottom: "8px", cursor: "pointer" }}>{l}</a>)}
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: "960px", margin: "32px auto 0", paddingTop: "20px", borderTop: `1px solid ${T.border}`, fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: T.muted }}>© 2026 PawPilot · AI Autopilot for Pet Groomers</div>
    </footer>
  );
}

function BackHome() {
  return <div style={{ padding: "100px 40px 0", maxWidth: "960px", margin: "0 auto" }}><a onClick={(e) => { e.preventDefault(); go(""); }} href="#" style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, color: T.gold, textDecoration: "none", cursor: "pointer" }}>← Back to Home</a></div>;
}

function BottomCTA() {
  return (
    <section style={{ padding: "100px 40px", background: T.goldBg, textAlign: "center" }}>
      <div style={{ maxWidth: "620px", margin: "0 auto" }}>
        <Ani><Paw size={40} color={T.gold} /><h2 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: T.text, lineHeight: 1.15, margin: "20px 0 14px" }}>Ready to put your front desk on autopilot?</h2><p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "17px", color: T.sub, lineHeight: 1.6, margin: "0 0 32px" }}>Call our AI to experience it firsthand, or book a call and we'll walk you through everything.</p><div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}><PhoneBtn text={`Call ${PD}`} /><DemoBtn text="See Pricing" /></div><p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: T.muted, marginTop: "16px" }}>Free to call · Available 24/7 · No commitment</p></Ani>
      </div>
    </section>
  );
}

function SubHero({ tag, title, subtitle }) {
  const [l, sL] = useState(false);
  useEffect(() => { setTimeout(() => sL(true), 100); }, []);
  return (
    <section style={{ minHeight: "65vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "140px 40px 80px", textAlign: "center", background: T.goldBg, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "10%", right: "10%", opacity: 0.08, transform: "rotate(15deg)" }}><Paw size={120} color={T.gold} /></div>
      <div style={{ maxWidth: "700px", position: "relative", zIndex: 1 }}>
        <div style={{ opacity: l ? 1 : 0, transition: "all 0.5s ease 0.2s" }}><Tag>{tag}</Tag></div>
        <h1 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 900, color: T.text, lineHeight: 1.12, margin: "24px 0 16px", opacity: l ? 1 : 0, transition: "all 0.5s ease 0.35s" }}>{title}</h1>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "18px", lineHeight: 1.7, color: T.sub, maxWidth: "540px", margin: "0 auto 36px", opacity: l ? 1 : 0, transition: "all 0.5s ease 0.5s" }}>{subtitle}</p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", opacity: l ? 1 : 0, transition: "all 0.5s ease 0.65s" }}><PhoneBtn /><DemoBtn text="See Pricing" /></div>
      </div>
    </section>
  );
}

/* ═══════════════ HOME ═══════════════ */
function HomePage() {
  const [l, sL] = useState(false);
  useEffect(() => { setTimeout(() => sL(true), 100); }, []);

  return (<>
    {/* HERO */}
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "120px 40px 80px", textAlign: "center", background: `linear-gradient(180deg, ${T.goldBg} 0%, ${T.bg} 100%)`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "8%", right: "12%", opacity: 0.07, transform: "rotate(20deg)" }}><Paw size={140} color={T.gold} /></div>
      <div style={{ position: "absolute", bottom: "15%", left: "8%", opacity: 0.05, transform: "rotate(-15deg)" }}><Paw size={100} color={T.gold} /></div>
      <div style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
        <div style={{ opacity: l ? 1 : 0, transform: l ? "translateY(0)" : "translateY(16px)", transition: "all 0.6s ease 0.2s" }}><Tag><Paw size={14} /> Autopilot for Pet Groomers</Tag></div>
        <h1 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "clamp(40px, 5.5vw, 68px)", fontWeight: 900, color: T.text, lineHeight: 1.08, margin: "28px 0 20px", opacity: l ? 1 : 0, transform: l ? "translateY(0)" : "translateY(16px)", transition: "all 0.6s ease 0.4s" }}>
          Your AI-powered<br /><span style={{ color: T.gold }}>front desk.</span>
        </h1>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "19px", lineHeight: 1.65, color: T.sub, maxWidth: "580px", margin: "0 auto 36px", opacity: l ? 1 : 0, transform: l ? "translateY(0)" : "translateY(16px)", transition: "all 0.6s ease 0.6s" }}>
          PawPilot answers your phone, books appointments, gets you 5-star reviews, and gives you a website that actually brings in new pet parents. You focus on the dogs.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", opacity: l ? 1 : 0, transition: "all 0.6s ease 0.8s" }}><PhoneBtn text="Talk to Our AI" /><DemoBtn text="See Pricing" /></div>
      </div>

      {/* Hero image */}
      <div style={{ marginTop: "60px", maxWidth: "800px", width: "100%", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)", opacity: l ? 1 : 0, transform: l ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s ease 1s" }}>
        <img src={IMG.hero} alt="Happy dog" style={{ width: "100%", height: "360px", objectFit: "cover" }} />
      </div>
    </section>

    {/* PROBLEM */}
    <section style={{ padding: "100px 40px", background: T.bg }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SH tag="Sound Familiar?" tagColor={T.coral} title="You're losing clients right now — and you don't even know it." desc="Most pet groomers lose 30%+ of incoming calls because they're grooming. Those aren't just missed calls — they're missed revenue." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px" }}>
          {[
            { e: "📵", t: "Missed calls = missed money", d: "Hands covered in suds, phone ringing. By the time you call back, they booked elsewhere." },
            { e: "⭐", t: "23 reviews vs 300", d: "89% of pet parents check Google reviews. You're great — you just don't have the proof." },
            { e: "🕐", t: "2+ hours/day on scheduling", d: "Back-and-forth texts about availability. That's 10 dogs you could've groomed." },
            { e: "🌐", t: "No real website", d: "A Facebook page or 2019 template isn't cutting it. Pet parents expect better." },
            { e: "💸", t: "$200+/mo on scattered tools", d: "Acuity, Mailchimp, a texting app, a review tool. Nothing connects." },
            { e: "🌙", t: "After hours = dead zone", d: "Pet parents search at 9pm. No answer, no booking. They find someone else." },
          ].map((p, i) => <Ani key={i} delay={i * 0.05}><PainCard emoji={p.e} title={p.t} desc={p.d} /></Ani>)}
        </div>
      </div>
    </section>

    {/* FEATURES */}
    <section style={{ padding: "100px 40px", background: T.bgSoft }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <SH tag="Solutions" title="Everything your grooming business needs. One platform." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {[
            { hash: "never-miss", icon: "🤖", title: "AI Voice Receptionist", desc: "Answers every call 24/7, books appointments, and handles questions — pet parents think it's your front desk.", color: T.coral },
            { hash: "get-found", icon: "🌐", title: "Functional Website", desc: "A stunning groomer website with online booking that converts visitors into booked appointments.", color: T.teal },
            { hash: "get-reviews", icon: "⭐", title: "Google Review Funnel", desc: "Automatically collect 5-star Google reviews after every groom and filter out the bad ones.", color: T.gold },
            { hash: "stay-connected", icon: "💬", title: "Conversation Bot", desc: "24/7 chat on your website that answers questions, shares availability, and books appointments.", color: T.coral },
          ].map((f, i) => (
            <Ani key={i} delay={i * 0.08}>
              <div onClick={() => go(f.hash)} style={{ padding: "32px 28px", background: T.card, borderRadius: "24px", border: `1px solid ${T.cardBorder}`, boxShadow: T.sh, cursor: "pointer", transition: "all 0.3s ease", height: "100%", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: f.color }} />
                <span style={{ fontSize: "36px", display: "block", marginBottom: "16px" }}>{f.icon}</span>
                <h3 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "19px", fontWeight: 800, color: T.text, margin: "0 0 8px" }}>{f.title}</h3>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: T.sub, lineHeight: 1.6, margin: "0 0 18px" }}>{f.desc}</p>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, color: f.color }}>See how it works →</span>
              </div>
            </Ani>
          ))}
        </div>
      </div>
    </section>

    {/* OUR WORK */}
    <section style={{ padding: "100px 40px", background: T.bg }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SH tag="Our Work" title="Look at what we've done for other groomers" desc="Real systems we've built for real pet grooming businesses." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "24px" }}>
          {[
            { name: "Pampered Paws Grooming", img: "/pawpilot-site1.jpg", bg: "#D4A54A" },
            { name: "The Groom Room", img: "/pawpilot-site2.jpg", bg: "#2A4A5A" },
            { name: "Bark & Beauty Studio", img: "/pawpilot-site3.jpg", bg: "#4A8A6A" },
          ].map((s, i) => (
            <Ani key={i} delay={i * 0.1}>
              <div style={{ background: s.bg, borderRadius: "20px", overflow: "hidden", padding: "40px 30px 0", position: "relative", minHeight: "320px" }}>
                {/* Desktop mockup */}
                <div style={{ position: "relative", maxWidth: "380px", margin: "0 auto" }}>
                  <div style={{ background: "#222", borderRadius: "8px 8px 0 0", padding: "6px 0", display: "flex", justifyContent: "center", gap: "4px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF5F57" }} />
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FEBC2E" }} />
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#28C840" }} />
                  </div>
                  <div style={{ overflow: "hidden", borderRadius: "0 0 4px 4px" }}>
                    <img src={s.img} alt={s.name} style={{ width: "100%", height: "220px", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  </div>
                  {/* Desktop stand */}
                  <div style={{ width: "60px", height: "20px", background: "#333", margin: "0 auto", borderRadius: "0 0 4px 4px" }} />
                  <div style={{ width: "100px", height: "6px", background: "#444", margin: "0 auto", borderRadius: "0 0 6px 6px" }} />
                </div>

                {/* Phone mockup - positioned bottom right */}
                <div style={{ position: "absolute", bottom: "0", right: "20px", width: "80px" }}>
                  <div style={{ background: "#222", borderRadius: "8px 8px 0 0", padding: "4px 0 2px", textAlign: "center" }}>
                    <div style={{ width: "20px", height: "2px", background: "#555", margin: "0 auto", borderRadius: "2px" }} />
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <img src={s.img} alt={s.name} style={{ width: "100%", height: "110px", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  </div>
                </div>

                {/* Tablet mockup - positioned bottom left */}
                <div style={{ position: "absolute", bottom: "0", left: "20px", width: "120px" }}>
                  <div style={{ background: "#222", borderRadius: "6px 6px 0 0", padding: "4px 0 2px", textAlign: "center" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#555", margin: "0 auto" }} />
                  </div>
                  <div style={{ overflow: "hidden" }}>
                    <img src={s.img} alt={s.name} style={{ width: "100%", height: "90px", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  </div>
                </div>
              </div>
            </Ani>
          ))}
        </div>
      </div>
    </section>

    {/* HOW IT WORKS — Stone Systems style */}
    <section style={{ padding: "100px 40px", background: T.bgSoft }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SH tag="How It Works" tagColor={T.teal} title="What working with us looks like..." />
        <Ani>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "0px", flexWrap: "wrap", position: "relative" }}>
            {[
              { n: "1", title: "Discovery Call", time: "(5 mins)", desc: "Call our AI or book a demo. We'll learn about your business, your pain points, and show you exactly how PawPilot works with live examples." },
              { n: "2", title: "We build your system", time: "(5-7 days)", desc: "Fill out a quick onboarding form. Our team builds your website, AI phone, review funnel, chat, and missed call text back — all customized." },
              { n: "3", title: "Launch Call", time: "(20 mins)", desc: "We walk you through your new system, answer every question, and flip the switch. Your AI front desk goes live and starts working immediately." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", flex: "1 1 260px", maxWidth: "300px" }}>
                <div style={{ textAlign: "center", flex: 1 }}>
                  {/* Circle */}
                  <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: T.gold, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontFamily: "'Nunito', sans-serif", fontSize: "28px", fontWeight: 900, color: "#fff" }}>{s.n}</div>
                  <h3 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "18px", fontWeight: 900, color: T.text, margin: "0 0 4px" }}>{s.title}</h3>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, color: T.muted, marginBottom: "12px" }}>{s.time}</div>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: T.sub, lineHeight: 1.6, margin: 0, padding: "0 10px" }}>{s.desc}</p>
                </div>
                {/* Dashed connector */}
                {i < 2 && (
                  <div style={{ display: "flex", alignItems: "center", paddingTop: "34px", minWidth: "40px" }}>
                    <svg width="50" height="20" viewBox="0 0 50 20" style={{ overflow: "visible" }}>
                      <path d="M0 10 Q15 0 25 10 Q35 20 50 10" fill="none" stroke={T.muted} strokeWidth="2" strokeDasharray="5 5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Ani>
      </div>
    </section>

    {/* STATS */}
    <section style={{ padding: "80px 40px", background: T.bg }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Ani>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            {[{ n: "30%+", l: "of grooming calls go unanswered" }, { n: "89%", l: "of pet parents check reviews first" }, { n: "5-7 days", l: "from first call to fully live" }, { n: "24/7", l: "your AI never takes a day off" }].map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "28px 20px", background: T.goldBg, borderRadius: "20px", border: `1px solid ${T.goldLight}` }}>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "32px", fontWeight: 900, color: T.gold }}>{s.n}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: T.sub, lineHeight: 1.4, marginTop: "4px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Ani>
      </div>
    </section>

    <BottomCTA />
  </>);
}

/* ═══════════════ PRICING PAGE ═══════════════ */
function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [l, sL] = useState(false);
  useEffect(() => { setTimeout(() => sL(true), 100); }, []);
  const monthlyPrice = 297;
  const annualPrice = 3297;

  const features = [
    "Functional Business Website",
    "AI Voice Receptionist",
    "Missed Call Text Back",
    "Conversation Bot (Chat)",
    "5-Star Google Review Funnel",
    "All-In-One Inbox",
  ];

  return (<>
    <BackHome />
    <section style={{ padding: "140px 40px 100px", background: T.bgSoft, textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 900, color: T.text, fontStyle: "italic", margin: "0 0 32px", opacity: l ? 1 : 0, transition: "all 0.5s ease 0.2s" }}>Our pricing</h1>

        {/* Toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "48px", opacity: l ? 1 : 0, transition: "all 0.5s ease 0.4s" }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: annual ? 500 : 700, color: annual ? T.muted : T.text }}>Monthly</span>
          <div onClick={() => setAnnual(!annual)} style={{ width: "52px", height: "28px", borderRadius: "14px", background: annual ? T.gold : T.border, cursor: "pointer", position: "relative", transition: "background 0.3s" }}>
            <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#fff", position: "absolute", top: "3px", left: annual ? "27px" : "3px", transition: "left 0.3s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
          </div>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: annual ? 700 : 500, color: annual ? T.text : T.muted }}>Annually</span>
        </div>

        {/* Pricing card */}
        <div style={{ background: T.gold, borderRadius: "24px", padding: "48px 40px", color: "#fff", maxWidth: "480px", margin: "0 auto", boxShadow: "0 20px 60px rgba(232,168,23,0.25)", opacity: l ? 1 : 0, transform: l ? "translateY(0)" : "translateY(20px)", transition: "all 0.6s ease 0.5s" }}>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "16px", fontWeight: 900, color: "#E85050", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px", textDecoration: "underline", textDecorationColor: "#E85050", textUnderlineOffset: "6px" }}>Most Popular</div>
          <h2 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "28px", fontWeight: 900, color: "#fff", margin: "0 0 12px" }}>PawPilot Pro</h2>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "8px", marginBottom: "32px" }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "48px", fontWeight: 900 }}>${annual ? annualPrice : monthlyPrice}</span>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "18px", fontWeight: 600, opacity: 0.8 }}>/{annual ? "yr" : "mo"}</span>
            {annual && <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 700, color: "#E85050" }}>+8 weeks FREE</span>}
          </div>

          {features.map((f, i) => (
            <div key={i}>
              <div style={{ padding: "16px 0", fontFamily: "'Nunito', sans-serif", fontSize: "16px", fontWeight: 700, textAlign: "center" }}>{f}</div>
              {i < features.length - 1 && <div style={{ height: "1px", background: "rgba(255,255,255,0.2)", margin: "0 20px" }} />}
            </div>
          ))}

          <a href={`tel:${PHONE}`} style={{ display: "block", margin: "32px auto 0", padding: "16px 40px", background: "#fff", color: T.text, fontFamily: "'Nunito', sans-serif", fontSize: "16px", fontWeight: 900, borderRadius: "60px", textDecoration: "none", textTransform: "uppercase", letterSpacing: "1px", textAlign: "center" }}>Book A Call</a>
        </div>
      </div>
    </section>

    {/* How it works mini */}
    <section style={{ padding: "80px 40px", background: T.bg }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SH tag="How It Works" tagColor={T.teal} title="What working with us looks like..." />
        <Ani>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", gap: "0px", flexWrap: "wrap" }}>
            {[
              { n: "1", title: "Discovery Call", time: "(5 mins)", desc: "Call our AI or book a demo. We'll learn your business and show you live examples." },
              { n: "2", title: "We build your system", time: "(5-7 days)", desc: "Fill out a quick form. We build everything — website, AI phone, reviews, chat." },
              { n: "3", title: "Launch Call", time: "(20 mins)", desc: "We walk you through everything and flip the switch. Your AI goes live." },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", flex: "1 1 260px", maxWidth: "300px" }}>
                <div style={{ textAlign: "center", flex: 1 }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: T.gold, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontFamily: "'Nunito', sans-serif", fontSize: "24px", fontWeight: 900, color: "#fff" }}>{s.n}</div>
                  <h3 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "16px", fontWeight: 900, color: T.text, margin: "0 0 4px" }}>{s.title}</h3>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: T.muted, marginBottom: "8px" }}>{s.time}</div>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", color: T.sub, lineHeight: 1.5, margin: 0, padding: "0 8px" }}>{s.desc}</p>
                </div>
                {i < 2 && <div style={{ display: "flex", alignItems: "center", paddingTop: "30px", minWidth: "36px" }}><svg width="40" height="20" viewBox="0 0 40 20"><path d="M0 10 Q10 0 20 10 Q30 20 40 10" fill="none" stroke={T.muted} strokeWidth="2" strokeDasharray="4 4" /></svg></div>}
              </div>
            ))}
          </div>
        </Ani>
      </div>
    </section>

    {/* Systems & Features grid */}
    <section style={{ padding: "80px 40px", background: T.bgSoft }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Ani>
          <h3 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "20px", fontWeight: 900, color: T.text, marginBottom: "24px" }}>Systems & Features</h3>
          <div style={{ background: T.card, borderRadius: "20px", border: `1px solid ${T.cardBorder}`, boxShadow: T.sh, padding: "32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
              {[
                { icon: <IconWebsite />, name: "Functional Website", desc: "A lead-generating website built for your grooming business" },
                { icon: <IconPhone />, name: "AI Voice Receptionist", desc: "Answers every call, books appointments, never misses a client" },
                { icon: <IconText />, name: "Missed Call Text Back", desc: "Automatically texts back anyone you can't get to" },
                { icon: <IconChat />, name: "Conversation Bot", desc: "24/7 chat on your website that books and answers questions" },
                { icon: <IconStar />, name: "5-Star Google Review Funnel", desc: "Automatically collect reviews and prevent bad ones" },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.sub} strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>, name: "All-In-One Inbox", desc: "Texts, emails, DMs, chats — all in one place" },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: T.bgSoft, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", fontWeight: 800, color: T.text }}>{f.name}</div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", color: T.muted, lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Ani>
      </div>
    </section>

    <BottomCTA />
  </>);
}

function OurWorkPage() {
  const [l, sL] = useState(false);
  useEffect(() => { setTimeout(() => sL(true), 100); }, []);
  const projects = [
    { name: "Pampered Paws Grooming", img: "/pawpilot-site1.jpg", bg: "#D4A54A", desc: "Full website with online booking, service menu, and review integration." },
    { name: "The Groom Room", img: "/pawpilot-site2.jpg", bg: "#2A4A5A", desc: "Modern site with scheduling, AI receptionist, and missed call text back." },
    { name: "Bark & Beauty Studio", img: "/pawpilot-site3.jpg", bg: "#4A8A6A", desc: "Mobile-first design with chat bot, review funnel, and all-in-one inbox." },
  ];
  return (<>
    <BackHome />
    <section style={{ padding: "140px 40px 40px", background: T.bgSoft, textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Nunito', sans-serif", fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 900, color: T.text, fontStyle: "italic", margin: "0 0 16px", opacity: l ? 1 : 0, transition: "all 0.5s ease 0.2s" }}>Look at what we've done for other groomers</h1>
      <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "17px", color: T.sub, maxWidth: "500px", margin: "0 auto", opacity: l ? 1 : 0, transition: "all 0.5s ease 0.4s" }}>Real systems we've built for real pet grooming businesses.</p>
    </section>
    <section style={{ padding: "60px 40px 100px", background: T.bgSoft }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "24px" }}>
        {projects.map((s, i) => (
          <Ani key={i} delay={i * 0.1}>
            <div style={{ background: s.bg, borderRadius: "20px", overflow: "hidden", padding: "40px 30px 0", position: "relative", minHeight: "340px" }}>
              <div style={{ position: "relative", maxWidth: "380px", margin: "0 auto" }}>
                <div style={{ background: "#222", borderRadius: "8px 8px 0 0", padding: "6px 0", display: "flex", justifyContent: "center", gap: "4px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF5F57" }} />
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FEBC2E" }} />
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#28C840" }} />
                </div>
                <div style={{ overflow: "hidden", borderRadius: "0 0 4px 4px" }}><img src={s.img} alt={s.name} style={{ width: "100%", height: "220px", objectFit: "cover", objectPosition: "top", display: "block" }} /></div>
                <div style={{ width: "60px", height: "20px", background: "#333", margin: "0 auto", borderRadius: "0 0 4px 4px" }} />
                <div style={{ width: "100px", height: "6px", background: "#444", margin: "0 auto", borderRadius: "0 0 6px 6px" }} />
              </div>
              <div style={{ position: "absolute", bottom: "0", right: "20px", width: "80px" }}>
                <div style={{ background: "#222", borderRadius: "8px 8px 0 0", padding: "4px 0 2px", textAlign: "center" }}><div style={{ width: "20px", height: "2px", background: "#555", margin: "0 auto", borderRadius: "2px" }} /></div>
                <div style={{ overflow: "hidden" }}><img src={s.img} alt={s.name} style={{ width: "100%", height: "110px", objectFit: "cover", objectPosition: "top", display: "block" }} /></div>
              </div>
              <div style={{ position: "absolute", bottom: "0", left: "20px", width: "120px" }}>
                <div style={{ background: "#222", borderRadius: "6px 6px 0 0", padding: "4px 0 2px", textAlign: "center" }}><div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#555", margin: "0 auto" }} /></div>
                <div style={{ overflow: "hidden" }}><img src={s.img} alt={s.name} style={{ width: "100%", height: "90px", objectFit: "cover", objectPosition: "top", display: "block" }} /></div>
              </div>
            </div>
          </Ani>
        ))}
      </div>
    </section>
    <BottomCTA />
  </>);
}

/* ═══════════════ FEATURE PAGES ═══════════════ */
function NeverMissPage() {
  return (<>
    <BackHome />
    <SubHero tag="🤖 AI Voice Receptionist + Missed Call Text Back" title="Never lose another client to a missed call." subtitle="Your hands are full. Our AI voice receptionist picks up every call, answers questions, books appointments, and texts back missed callers — 24/7." />
    <section style={{ padding: "80px 40px", background: T.bg }}><div style={{ maxWidth: "800px", margin: "0 auto" }}><SH tag="The Problem" tagColor={T.coral} title="Every missed call is a missed appointment." /><div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>{[{ e: "🐕", t: "You're elbow-deep in a golden retriever", d: "Phone rings. You can't answer. Two hours later — they already booked elsewhere." }, { e: "📊", t: "$240/day walking out the door", d: "30%+ of grooming calls go unanswered. At 10 calls/day and $80/groom, that's 3 lost clients daily." }, { e: "😤", t: "Voicemail is a client graveyard", d: "Pet parents don't leave voicemails. They hang up and call the next groomer." }].map((p, i) => <Ani key={i} delay={i * 0.07}><PainCard emoji={p.e} title={p.t} desc={p.d} /></Ani>)}</div></div></section>
    <section style={{ padding: "80px 40px", background: T.bgSoft }}><div style={{ maxWidth: "800px", margin: "0 auto" }}><SH tag="The Solution" tagColor={T.teal} title="An AI receptionist that never calls in sick." /><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>{[{ i: "🤖", t: "AI answers every call", d: "Sounds natural, knows your services, books into your calendar. Pet parents think it's your front desk." }, { i: "📲", t: "Instant missed call text back", d: "Within 5 seconds: \"Thanks for calling! We're with a pup — how can we help?\" Saves 30%+ of lost leads." }, { i: "🌙", t: "After-hours coverage", d: "9pm call? AI picks up, answers questions, books Thursday morning. You wake up to a full schedule." }, { i: "🤝", t: "Smart human handoff", d: "Complex questions route to you with full context. You call back already knowing what they need." }].map((s, i) => <Ani key={i} delay={i * 0.07}><SolCard icon={s.i} title={s.t} desc={s.d} /></Ani>)}</div></div></section>
    <BottomCTA />
  </>);
}
function GetFoundPage() {
  return (<>
    <BackHome />
    <SubHero tag="🌐 Professional Groomer Website" title="Look like the best groomer in town — because you are." subtitle="A stunning, mobile-friendly website with online booking that turns visitors into booked appointments." />
    <section style={{ padding: "80px 40px", background: T.bg }}><div style={{ maxWidth: "800px", margin: "0 auto" }}><SH tag="The Problem" tagColor={T.coral} title="Your online presence is costing you clients." /><div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>{[{ e: "🖥️", t: "Your site looks like 2019", d: "Stock photos, no booking, a contact form that goes nowhere." }, { e: "📱", t: "Doesn't work on phones", d: "70%+ search on mobile. Not optimized? Gone in 3 seconds." }, { e: "🔍", t: "Invisible on Google", d: "No SEO, no Google Business. You're missing searches happening right now." }, { e: "😬", t: "...or no website at all", d: "A Facebook page isn't a website. Pet parents expect more in 2026." }].map((p, i) => <Ani key={i} delay={i * 0.07}><PainCard emoji={p.e} title={p.t} desc={p.d} /></Ani>)}</div></div></section>
    <section style={{ padding: "80px 40px", background: T.bgSoft }}><div style={{ maxWidth: "800px", margin: "0 auto" }}><SH tag="What We Build" tagColor={T.teal} title="A website that works as hard as you do." /><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>{[{ i: "📅", t: "Built for bookings", d: "Online scheduling, click-to-call, clear services with pricing. Every page converts." }, { i: "📱", t: "Stunning on every device", d: "Mobile-first. Loads fast, looks beautiful, booking is effortless." }, { i: "📸", t: "Shows off your work", d: "Before-and-after galleries, happy pets. Pet parents choose people, not just services." }, { i: "🔍", t: "Google-ready day one", d: "SEO baked in, Google Business connected. Show up when they search." }].map((s, i) => <Ani key={i} delay={i * 0.07}><SolCard icon={s.i} title={s.t} desc={s.d} /></Ani>)}</div></div></section>
    <BottomCTA />
  </>);
}
function GetReviewsPage() {
  return (<>
    <BackHome />
    <SubHero tag="⭐ 5-Star Review Engine" title="Become the most reviewed groomer in your area." subtitle="After every groom, clients automatically get a text asking for a Google review — while the fresh cut is still on their mind." />
    <section style={{ padding: "80px 40px", background: T.bg }}><div style={{ maxWidth: "800px", margin: "0 auto" }}><SH tag="The Problem" tagColor={T.coral} title="Great grooming. Not enough proof." /><div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>{[{ e: "⭐", t: "89% check reviews first", d: "You: 23 reviews. Competitor: 287. Who gets the call?" }, { e: "🤷", t: "Happy clients forget", d: "They loved the groom. By the time they get home, leaving a review is forgotten." }, { e: "📉", t: "No system = no consistency", d: "Without automation, reviews trickle randomly instead of flowing predictably." }].map((p, i) => <Ani key={i} delay={i * 0.07}><PainCard emoji={p.e} title={p.t} desc={p.d} /></Ani>)}</div></div></section>
    <section style={{ padding: "80px 40px", background: T.bgSoft }}><div style={{ maxWidth: "800px", margin: "0 auto" }}><SH tag="The Solution" tagColor={T.teal} title="Reviews on autopilot. Consistently." /><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>{[{ i: "🔔", t: "Auto-requests after every groom", d: "30 min after pickup: text with a direct Google link. Done." }, { i: "🛡️", t: "Smart filtering", d: "Bad experience? Routed to private feedback — not a public 2-star review." }, { i: "📈", t: "Velocity wins rankings", d: "2/month to 15/month dramatically boosts your local ranking." }, { i: "🏆", t: "Social proof sells", d: "300+ five-star reviews is the #1 trust signal. Reviews sell while you groom." }].map((s, i) => <Ani key={i} delay={i * 0.07}><SolCard icon={s.i} title={s.t} desc={s.d} /></Ani>)}</div></div></section>
    <BottomCTA />
  </>);
}
function StayConnectedPage() {
  return (<>
    <BackHome />
    <SubHero tag="💬 Conversation Bot" title="Be available 24/7 — without being there." subtitle="A smart chat bot on your website that answers pet parent questions, shares your availability, and books appointments around the clock." />
    <section style={{ padding: "80px 40px", background: T.bg }}><div style={{ maxWidth: "800px", margin: "0 auto" }}><SH tag="The Problem" tagColor={T.coral} title="Pet parents want answers now — not tomorrow." /><div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>{[{ e: "🌙", t: "They're browsing at 10pm", d: "Someone finds your site late at night, wants to ask about doodle pricing. No chat, no way to ask. They leave and never come back." }, { e: "⏰", t: "Slow responses kill bookings", d: "Most groomers take hours to respond to website inquiries. By then, the pet parent already booked elsewhere." }, { e: "🔁", t: "You answer the same questions 20x a day", d: "\"What are your hours?\" \"How much for a small dog?\" \"Do you groom cats?\" You're typing the same answers over and over." }].map((p, i) => <Ani key={i} delay={i * 0.07}><PainCard emoji={p.e} title={p.t} desc={p.d} /></Ani>)}</div></div></section>
    <section style={{ padding: "80px 40px", background: T.bgSoft }}><div style={{ maxWidth: "800px", margin: "0 auto" }}><SH tag="The Solution" tagColor={T.teal} title="A bot that books while you groom." /><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>{[{ i: "💬", t: "24/7 website chat", d: "A smart bot on your site that answers FAQs, shares availability, and books appointments in real time — even at 2am." }, { i: "🧠", t: "Knows your business", d: "Trained on your services, pricing, hours, and policies. It answers like you would — because we taught it to." }, { i: "📅", t: "Books directly into your calendar", d: "No back-and-forth. Pet parent asks, bot checks availability, books the slot. You see it in your calendar." }, { i: "🤝", t: "Human handoff when needed", d: "Complex questions or nervous first-timers get flagged and routed to you with full context." }].map((s, i) => <Ani key={i} delay={i * 0.07}><SolCard icon={s.i} title={s.t} desc={s.d} /></Ani>)}</div></div></section>
    <BottomCTA />
  </>);
}

/* ═══════════════ ROUTER ═══════════════ */
function Router() {
  const [p, sP] = useState(window.location.hash.replace("#", "") || "");
  useEffect(() => { const f = () => sP(window.location.hash.replace("#", "") || ""); window.addEventListener("hashchange", f); return () => window.removeEventListener("hashchange", f); }, []);
  switch (p) {
    case "pricing": return <PricingPage />;
    case "our-work": return <OurWorkPage />;
    case "never-miss": return <NeverMissPage />;
    case "get-found": return <GetFoundPage />;
    case "get-reviews": return <GetReviewsPage />;
    case "stay-connected": return <StayConnectedPage />;
    default: return <HomePage />;
  }
}

export default function PawPilotApp() {
  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { background: ${T.bg}; color: ${T.text}; -webkit-font-smoothing: antialiased; }
      ::selection { background: ${T.gold}30; }
      .pp-nav:hover { background: ${T.bgSoft} !important; color: ${T.text} !important; }
      @media (max-width: 768px) {
        section { padding-left: 24px !important; padding-right: 24px !important; }
        nav { padding: 0 16px !important; }
        .pp-nav { display: none !important; }
      }
    `}</style>
    <div style={{ background: T.bg, minHeight: "100vh" }}><Nav /><Router /><Footer /></div>
  </>);
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ChangeEvent, type CSSProperties, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/")({ component: Home });

const WHATSAPP = "34611848171";

const cssCache = new Map<string, CSSProperties>();
function css(text: string): CSSProperties {
  const hit = cssCache.get(text);
  if (hit) return hit;
  const out: Record<string, string> = {};
  for (const decl of text.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith("-")
      ? prop.slice(1).replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase())
      : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = value;
  }
  cssCache.set(text, out as CSSProperties);
  return out as CSSProperties;
}

function fmt(n: number) {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const PLANS = [
  { name: "Básico", price: "1.000" },
  { name: "Pro", price: "2.500" },
  { name: "VIP", price: "5.000" },
];

const ROWS: [string, string, string, string][] = [
  ["Visita e informe post sismo", "✓", "✓", "✓"],
  ["Fotos y video por ambiente", "✓", "✓", "✓"],
  ["Renders con presupuesto", "No", "1 render", "3 renders, 3 cambios"],
  ["Limpieza hasta 150 m²", "Superficial", "A fondo", "A fondo"],
  ["Papeles y deudas", "No", "Checklist", "Certificados"],
  ["Gestión incluida", "No", "6 meses", "12 meses"],
];

const NEEDS: [string, string][] = [
  ["Diagnóstico", "Hola, quiero agendar un diagnóstico para mi inmueble."],
  ["Alquilar", "Hola, quiero alquilar mi inmueble y que lo gestionen."],
  ["Vender", "Hola, quiero vender mi inmueble."],
  ["Obras", "Hola, necesito un presupuesto de obra para mi inmueble."],
  ["Otra consulta", "Hola, tengo una consulta sobre mi inmueble."],
];

const Q = "align-self: flex-end; max-width: 82%; padding: 10px 12px; border-radius: 14px 14px 4px 14px; background: #D9F5C9; color: #1A1714; font-size: 15px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);";
const A = "align-self: flex-start; max-width: 86%; padding: 10px 12px; border-radius: 14px 14px 14px 4px; background: #FFFFFF; color: #1A1714; font-size: 15px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08); margin-bottom: 8px;";
const chat = [
  { style: Q, text: "Tengo un apartamento cerrado hace años y sigo pagando condominio. ¿Por dónde empiezo?" },
  { style: A, text: "Por el diagnóstico. Un ingeniero civil visado por el CIV lo visita y te dice cómo está y cuánto cuesta mantenerlo, alquilarlo o venderlo." },
  { style: Q, text: "¿Y si el inquilino deja de pagar?" },
  { style: A, text: "Cobramos nosotros, te avisamos al primer impago y activamos la fianza: hasta 12 meses cubiertos. Con la nueva ley, tres meses seguidos sin pagar es causa de rescisión, y la disputa va a tribunal de municipio o arbitral." },
  { style: Q, text: "¿Y si se dañan cosas?" },
  { style: A, text: "Hay inventario con fotos al entrar y al salir. El depósito cubre lo que no es desgaste normal; lo que exceda se reclama al inquilino." },
  { style: Q, text: "¿El diagnóstico incluye la obra?" },
  { style: A, text: "No. Pro y VIP incluyen renders con su presupuesto. La obra se hace en la activación y se paga aparte." },
  { style: Q, text: "¿Qué hago con los muebles que no quiero?" },
  { style: A, text: "Los retiramos, los guardamos o botamos lo dañado. La mudanza la coordinamos nosotros." },
];

type Tracker = Window & { dataLayer?: Record<string, unknown>[]; fbq?: (...args: unknown[]) => void };

function track(event: string, data: Record<string, unknown>, fbEvent: string) {
  const w = window as Tracker;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...data });
  w.fbq?.("track", fbEvent, data);
}

function Home() {
  const [years, setYearsV] = useState(5);
  const [alquilerN, setAlquilerN] = useState(800);
  const [condominio, setCondominioV] = useState(250);
  const [otros, setOtrosV] = useState(50);
  const [plan, setPlan] = useState("Pro");
  const [need, setNeedV] = useState("Diagnóstico");
  const [ref, setRef] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setRef(p.get("utm_campaign") || p.get("utm_source") || p.get("ref") || "");
  }, []);

  const num = (fn: (n: number) => void) => (e: ChangeEvent<HTMLInputElement>) => fn(Number(e.target.value));
  const setYears = num(setYearsV);
  const setAlquiler = num(setAlquilerN);
  const setCondominio = num(setCondominioV);
  const setOtros = num(setOtrosV);
  const setNeed = (e: ChangeEvent<HTMLSelectElement>) => setNeedV(e.target.value);

  const meses = years * 12;
  const gastosN = condominio + otros;
  const noCobradoN = meses * alquilerN;
  const pagadosN = meses * gastosN;
  const totalN = noCobradoN + pagadosN;
  const pA = totalN > 0 ? (noCobradoN / totalN) * 100 : 0;
  const alquiler = fmt(alquilerN);
  const alquilerRaw = alquilerN;
  const gastosMes = fmt(gastosN);
  const noCobrado = fmt(noCobradoN);
  const pagados = fmt(pagadosN);
  const total = fmt(totalN);
  const porMes = fmt(alquilerN + gastosN);
  const barAlquiler = `width: ${pA.toFixed(1)}%; background: #F0C998;`;
  const barGastos = `width: ${(100 - pA).toFixed(1)}%; background: #E8865C;`;

  const selIdx = PLANS.findIndex((p) => p.name === plan);
  const planHeads = PLANS.map((p, idx) => ({
    name: p.name,
    price: p.price,
    pick: () => setPlan(p.name),
    style: "border: 0; padding: 12px 4px; font-family: inherit; cursor: pointer; text-align: center; " + (idx === selIdx ? "background: #1A1714; color: #FFFFFF;" : "background: transparent; color: #1A1714;"),
  }));
  const planRows = ROWS.map((r) => ({
    label: r[0],
    cells: [1, 2, 3].map((k) => ({
      text: r[k],
      style: "padding: 12px 4px; text-align: center; display: flex; align-items: center; justify-content: center; font-size: 13px; line-height: 1.25; " + (k - 1 === selIdx ? "background: #F6E8E4; font-weight: 700; color: #1A1714;" : "color: " + (r[k] === "No" ? "#A39C8F" : "#1A1714") + ";"),
    })),
  }));
  const needs = NEEDS.map(([label]) => ({ label }));
  const needMsg = (NEEDS.find(([l]) => l === need) ?? NEEDS[0])[1];
  const waNeed = useMemo(() => {
    const text = ref ? `${needMsg} (ref: ${ref})` : needMsg;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  }, [needMsg, ref]);

  function trackWhatsApp() {
    track("contacto_whatsapp", { categoria: need, ref }, "Contact");
  }

  async function enviarInfo(event: FormEvent) {
    event.preventDefault();
    if (!nombre.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim()) || !acepta) {
      setEstado("error");
      setErrorMsg("Completa tu nombre, un correo válido y acepta la política de privacidad.");
      return;
    }
    setEstado("enviando");
    const { error } = await supabase.from("solicitudes").insert({
      nombre: nombre.trim(),
      whatsapp: "",
      correo: correo.trim(),
      tipo: "Información por correo",
      objetivo: "Información",
      estado: "",
      municipio: "",
      direccion: "",
      comentarios: ref ? `ref: ${ref}` : null,
    });
    if (error) {
      setEstado("error");
      setErrorMsg("No pudimos enviar tus datos. Inténtalo de nuevo o escríbenos por WhatsApp.");
      return;
    }
    await fetch("https://formsubmit.co/ajax/moe2033@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: "Nuevo lead (información por correo): Activa Venezuela",
        _template: "table",
        _captcha: "false",
        Nombre: nombre.trim(),
        Correo: correo.trim(),
        Origen: ref || "directo",
      }),
    }).catch(() => undefined);
    track("generar_lead", { tipo: "informacion_correo", ref }, "Lead");
    setEstado("ok");
    setNombre("");
    setCorreo("");
    setAcepta(false);
  }

  return (
<div className="av-root" style={css("width: 100%; max-width: 600px; margin: 0 auto; box-shadow: 0 0 0 1px #E6E0D4; background: #FBF8F2; color: #1A1714; font-family: Inter, system-ui, sans-serif; font-size: 16px; line-height: 1.5")}>

<header style={css("display: flex; align-items: center; justify-content: center; padding: 14px 20px; background: #FBF8F2; border-bottom: 1px solid #E6E0D4")}>
<p style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 22px; font-weight: 600; letter-spacing: -0.01em")}>Activa <span style={css("color: #8C3A2F")}>Venezuela</span></p>
</header>

<section className="av-hero" style={css("position: relative; height: 620px; overflow: hidden; color: #FBF8F2")}>
<img src="/avila.jpg" alt="El Ávila sobre Caracas al atardecer" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 30% center")} />
<div style={css("position: absolute; inset: 0; background: rgba(22, 14, 12, 0.58)")}></div>
<div className="av-hero-in" style={css("position: relative; display: flex; flex-direction: column; justify-content: flex-end; height: 100%; box-sizing: border-box; padding: 0 24px 32px; gap: 16px")}>
<p style={css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #F0C998")}>¿Tu inmueble está parado?</p>
<h1 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 46px; line-height: 1.02; font-weight: 600; letter-spacing: -0.02em")}>Pon tu inmueble en Venezuela a generar.</h1>
<p style={css("margin: 0; font-size: 18px; line-height: 1.45; color: #EDE7DC")}>Falta de tiempo, o no saber por dónde empezar. Nos encargamos de todo.</p>
<a href={waNeed} onClick={trackWhatsApp} target="_blank" rel="noopener noreferrer" style={css("display: flex; align-items: center; justify-content: center; gap: 10px; height: 56px; margin-top: 4px; border-radius: 28px; background: #8C3A2F; color: #FFFFFF; font-weight: 700; font-size: 17px; text-decoration: none")}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z"></path></svg>Agenda tu diagnóstico</a>
<p style={css("margin: 0; text-align: center; font-size: 14px; font-weight: 500; color: #E2DBCE")}>Te respondemos en menos de 24 h</p>
</div>
</section>

<section className="av-trust" style={css("display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); background: #5A2420; color: #FBF8F2")}>
<div style={css("padding: 18px 8px; text-align: center; border-right: 1px solid #7A3A33")}><p style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600")}>CIV</p><p style={css("margin: 2px 0 0; font-size: 12px; line-height: 1.35; color: #D8CEC6")}>Ingeniero civil colegiado</p></div>
<div style={css("padding: 18px 8px; text-align: center; border-right: 1px solid #7A3A33")}><p style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600")}>FUNVISIS</p><p style={css("margin: 2px 0 0; font-size: 12px; line-height: 1.35; color: #D8CEC6")}>Informe post sismo</p></div>
<div style={css("padding: 18px 8px; text-align: center")}><p style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600")}>Ley 2026</p><p style={css("margin: 2px 0 0; font-size: 12px; line-height: 1.35; color: #D8CEC6")}>Contratos con la nueva ley</p></div>
</section>

<section className="av-sec" style={css("padding: 56px 16px 48px; display: flex; flex-direction: column; gap: 18px")}>
<div style={css("padding: 0 4px; display: flex; flex-direction: column; gap: 10px")}>
<p style={css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F")}>Haz la cuenta</p>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 34px; line-height: 1.06; font-weight: 600; letter-spacing: -0.015em")}>¿Cuánto te cuesta tenerlo parado?</h2>
</div>

<div className="av-calc" style={css("border-radius: 28px; background: #1A1714; color: #FBF8F2; overflow: hidden")}>
<div style={css("padding: 26px 22px 22px; display: flex; flex-direction: column; gap: 18px")}>
<div>
<p style={css("margin: 0; font-size: 15px; color: #D8CEC6")}>En {years} años te ha costado</p>
<p style={css("margin: 4px 0 0; font-family: Fraunces, Georgia, serif; font-size: 58px; line-height: 1; font-weight: 600; letter-spacing: -0.02em; color: #FFFFFF")}>{total}<span style={css("font-size: 22px; color: #D8CEC6")}> USD</span></p>
</div>

<div style={css("display: flex; height: 14px; border-radius: 7px; overflow: hidden; background: #3A322D")}>
<div style={css(barAlquiler)}></div>
<div style={css(barGastos)}></div>
</div>

<div style={css("display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px")}>
<div style={css("padding: 14px; border-radius: 16px; background: #2A2420; display: flex; flex-direction: column; gap: 4px")}>
<p style={css("margin: 0; display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: #F0C998")}><span style={css("width: 10px; height: 10px; border-radius: 3px; background: rgb(240, 201, 152)")}></span>Sin Ingresos</p>
<p style={css("margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.01em")}>{noCobrado}</p>
<p style={css("margin: 0; font-size: 12px; line-height: 1.35; color: #C7BBB2")}>Alquiler de {alquiler} × {meses} meses</p>
</div>
<div style={css("padding: 14px; border-radius: 16px; background: #2A2420; display: flex; flex-direction: column; gap: 4px")}>
<p style={css("margin: 0; display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: #F2A27E")}><span style={css("width: 10px; height: 10px; border-radius: 3px; background: rgb(232, 134, 92)")}></span>Gastos</p>
<p style={css("margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.01em")}>{pagados}</p>
<p style={css("margin: 0; font-size: 12px; line-height: 1.35; color: #C7BBB2")}>Gastos de {gastosMes} × {meses} meses</p>
</div>
</div>

<div style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 14px 16px; border-radius: 16px; border: 1px solid #4F443E")}>
<div><p style={css("margin: 0; font-size: 14px; line-height: 1.35; color: #FFFFFF; font-weight: 600")}>Cada mes parado te cuesta</p><p style={css("margin: 2px 0 0; font-size: 12px; line-height: 1.35; color: #C7BBB2")}>{alquiler} que no cobras + {gastosMes} que pagas</p></div>
<p style={css("margin: 0; flex: none; font-size: 20px; font-weight: 700; color: #F0C998")}>{porMes} USD</p>
</div>
</div>

<div style={css("padding: 20px 22px 24px; background: #100E0C; display: flex; flex-direction: column; gap: 12px")}>
<p style={css("margin: 0; font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #A69A90")}>Ajusta a tu caso</p>
<label style={css("display: flex; flex-direction: column; gap: 2px")}><span style={css("display: flex; justify-content: space-between; font-size: 14px; color: #D8CEC6")}>Años parado<strong style={css("color: #FFFFFF; font-weight: 600")}>{years}</strong></span><input type="range" min="1" max="15" step="1" value={years} onChange={setYears} /></label>
<label style={css("display: flex; flex-direction: column; gap: 2px")}><span style={css("display: flex; justify-content: space-between; font-size: 14px; color: #D8CEC6")}>Alquiler posible al mes<strong style={css("color: #FFFFFF; font-weight: 600")}>{alquiler} USD</strong></span><input type="range" min="100" max="3000" step="50" value={alquilerRaw} onChange={setAlquiler} /></label>
<label style={css("display: flex; flex-direction: column; gap: 2px")}><span style={css("display: flex; justify-content: space-between; font-size: 14px; color: #D8CEC6")}>Condominio al mes<strong style={css("color: #FFFFFF; font-weight: 600")}>{condominio} USD</strong></span><input type="range" min="0" max="800" step="10" value={condominio} onChange={setCondominio} /></label>
<label style={css("display: flex; flex-direction: column; gap: 2px")}><span style={css("display: flex; justify-content: space-between; font-size: 14px; color: #D8CEC6")}>Otros gastos al mes<strong style={css("color: #FFFFFF; font-weight: 600")}>{otros} USD</strong></span><input type="range" min="0" max="400" step="10" value={otros} onChange={setOtros} /></label>
<p style={css("margin: 2px 0 0; font-size: 12px; color: #A69A90")}>Valores de ejemplo. Calcula con tus números.</p>
</div>
</div>
</section>

<section className="av-sec" style={css("padding: 56px 20px; background: #F1ECE2; display: flex; flex-direction: column; gap: 26px")}>
<div style={css("display: flex; flex-direction: column; gap: 10px")}>
<p style={css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F")}>Cómo funciona</p>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em")}>De gasto a ingreso, en 3 pasos</h2>
</div>
<div className="av-steps3" style={css("display: flex; flex-direction: column")}>
<div style={css("display: flex; gap: 16px")}>
<div style={css("display: flex; flex-direction: column; align-items: center")}><div style={css("width: 40px; height: 40px; border-radius: 20px; background: #1A1714; color: #FBF8F2; display: flex; align-items: center; justify-content: center; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600")}>1</div><div className="av-line" style={css("flex: 1; width: 2px; background: #CFC6B4")}></div></div>
<div style={css("padding-bottom: 28px")}><h3 style={css("margin: 6px 0 6px; font-size: 19px; font-weight: 700")}>Diagnóstico</h3><p style={css("margin: 0; color: #5A4F48")}>Visitamos tu inmueble y te decimos cómo está, qué hacer y cuánto cuesta.</p></div>
</div>
<div style={css("display: flex; gap: 16px")}>
<div style={css("display: flex; flex-direction: column; align-items: center")}><div style={css("width: 40px; height: 40px; border-radius: 20px; background: #1A1714; color: #FBF8F2; display: flex; align-items: center; justify-content: center; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600")}>2</div><div className="av-line" style={css("flex: 1; width: 2px; background: #CFC6B4")}></div></div>
<div style={css("padding-bottom: 28px")}><h3 style={css("margin: 6px 0 6px; font-size: 19px; font-weight: 700")}>Activación</h3><p style={css("margin: 0; color: #5A4F48")}>Hacemos las obras que necesita, a medida. Lo dejamos limpio, listo para alquilar o vender.</p></div>
</div>
<div style={css("display: flex; gap: 16px")}>
<div style={css("display: flex; flex-direction: column; align-items: center")}><div style={css("width: 40px; height: 40px; border-radius: 20px; background: #8C3A2F; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600")}>3</div></div>
<div><h3 style={css("margin: 6px 0 6px; font-size: 19px; font-weight: 700")}>Gestión</h3><p style={css("margin: 0; color: #5A4F48")}>Inquilino o comprador, contrato, gestiones y cobro en divisa.</p></div>
</div>
</div>
</section>

<section className="av-sec" style={css("padding: 56px 20px; display: flex; flex-direction: column; gap: 20px")}>
<div style={css("display: flex; flex-direction: column; gap: 10px")}>
<p style={css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F")}>Quién visita tu inmueble</p>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em")}>Personas con nombre y apellido</h2>
<p style={css("margin: 0; color: #5A4F48")}>Sabes quién entra en tu casa y qué se va a hacer.</p>
</div>
<div className="av-grid3" style={css("display: flex; flex-direction: column; gap: 10px")}>
<article style={css("display: flex; gap: 16px; align-items: center; padding: 16px; border-radius: 20px; background: #FFFFFF; border: 1px solid #E6E0D4")}>
<img src="/team/daniel.jpg" alt="Daniel Monagas" style={css("flex: none; width: 72px; height: 72px; border-radius: 36px; object-fit: cover; background: #E6E0D4")} />
<div><p style={css("margin: 0; font-weight: 700; font-size: 17px")}>Daniel Monagas</p><p style={css("margin: 0; font-size: 14px; color: #5A4F48")}>Ingeniero civil · CIV N.º <span aria-hidden="true" style={css("display: inline-block; filter: blur(4px); user-select: none; -webkit-user-select: none")}>321.566</span></p><p style={css("margin: 2px 0 0; font-size: 13px; color: #8C3A2F; font-weight: 600")}>Hace el diagnóstico y el informe</p></div>
</article>
<article style={css("display: flex; gap: 16px; align-items: center; padding: 16px; border-radius: 20px; background: #FFFFFF; border: 1px solid #E6E0D4")}>
<img src="/team/andrea.jpg" alt="Andrea Alvarez" style={css("flex: none; width: 72px; height: 72px; border-radius: 36px; object-fit: cover; background: #E6E0D4")} />
<div><p style={css("margin: 0; font-weight: 700; font-size: 17px")}>Andrea Alvarez</p><p style={css("margin: 0; font-size: 14px; color: #5A4F48")}>Obras e inquilinos · Caracas</p><p style={css("margin: 2px 0 0; font-size: 13px; color: #8C3A2F; font-weight: 600")}>Hace las visitas por ti</p></div>
</article>
<article style={css("display: flex; gap: 16px; align-items: center; padding: 16px; border-radius: 20px; background: #FFFFFF; border: 1px solid #E6E0D4")}>
<img src="/team/moises.jpg" alt="Moisés Benzaquén" style={css("flex: none; width: 72px; height: 72px; border-radius: 36px; object-fit: cover; background: #E6E0D4")} />
<div><p style={css("margin: 0; font-weight: 700; font-size: 17px")}>Moisés Benzaquén</p><p style={css("margin: 0; font-size: 14px; color: #5A4F48")}>Atención a propietarios · Global</p><p style={css("margin: 2px 0 0; font-size: 13px; color: #8C3A2F; font-weight: 600")}>Te responde por WhatsApp</p></div>
</article>
</div>
</section>

<section className="av-sec av-split" style={css("padding: 56px 20px; background: #F1ECE2; display: flex; flex-direction: column; gap: 18px")}>
<div style={css("display: flex; flex-direction: column; gap: 10px")}>
<p style={css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F")}>Qué recibes</p>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em")}>Un informe para decidir con datos</h2>
<p style={css("margin: 0; color: #5A4F48")}>Lo recibes a los 7 días de la visita, con el plan de acción.</p>
</div>
<div style={css("border-radius: 20px; background: #FFFFFF; box-shadow: 0 1px 2px rgba(26, 23, 20, 0.08), 0 12px 32px rgba(26, 23, 20, 0.10); overflow: hidden")}>
<div style={css("padding: 16px 18px; background: #1A1714; color: #FBF8F2; display: flex; justify-content: space-between; align-items: center")}><p style={css("margin: 0; font-weight: 700; font-size: 15px")}>Informe de diagnóstico</p><p style={css("margin: 0; font-size: 12px; color: #C7BBB2")}>Ejemplo</p></div>
<div style={css("display: flex; flex-direction: column")}>
<div style={css("display: flex; flex-direction: column; gap: 8px; padding: 14px 18px; border-bottom: 1px solid #EEE8DC")}>
<div style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px")}><p style={css("margin: 0; font-weight: 600; font-size: 15px")}>Evaluación estructural post sismo</p><span style={css("flex: none; padding: 4px 10px; border-radius: 10px; background: #F3E4E0; color: #8C3A2F; font-size: 12px; font-weight: 700")}>Revisado</span></div>
<p style={css("margin: 0; padding: 8px 10px; border-radius: 10px; background: #F6F2EA; font-size: 13px; color: #5A4F48")}>Metodología FUNVISIS / ANIH, Boletín N.º 61 (2023)</p>
</div>
<div style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 14px 18px; border-bottom: 1px solid #EEE8DC")}><div><p style={css("margin: 0; font-weight: 600; font-size: 15px")}>Estado por ambiente</p><p style={css("margin: 0; font-size: 13px; color: #6B6458")}>Fotos y video de cada espacio</p></div><span style={css("flex: none; padding: 4px 10px; border-radius: 10px; background: #F3E4E0; color: #8C3A2F; font-size: 12px; font-weight: 700")}>Con fotos</span></div>
<div style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 14px 18px; border-bottom: 1px solid #EEE8DC")}><div><p style={css("margin: 0; font-weight: 600; font-size: 15px")}>Inventario</p><p style={css("margin: 0; font-size: 13px; color: #6B6458")}>Lo que hay y en qué estado</p></div><span style={css("flex: none; padding: 4px 10px; border-radius: 10px; background: #F3E4E0; color: #8C3A2F; font-size: 12px; font-weight: 700")}>Listado</span></div>
<div style={css("padding: 14px 18px; display: flex; flex-direction: column; gap: 10px")}><p style={css("margin: 0; font-weight: 600; font-size: 15px")}>Qué te cuesta cada opción</p>
<div style={css("display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; text-align: center")}>
<div style={css("padding: 10px 6px; border-radius: 12px; background: #F6F2EA")}><p style={css("margin: 0; font-size: 12px; color: #6B6458")}>Mantener</p><p style={css("margin: 2px 0 0; font-weight: 700; font-size: 14px")}>150 USD</p></div>
<div style={css("padding: 10px 6px; border-radius: 12px; background: #F6F2EA")}><p style={css("margin: 0; font-size: 12px; color: #6B6458")}>Alquilar</p><p style={css("margin: 2px 0 0; font-weight: 700; font-size: 14px")}>5.500 USD</p></div>
<div style={css("padding: 10px 6px; border-radius: 12px; background: #F6F2EA")}><p style={css("margin: 0; font-size: 12px; color: #6B6458")}>Vender</p><p style={css("margin: 2px 0 0; font-weight: 700; font-size: 14px")}>3.500 USD</p></div>
</div></div>
</div>
</div>

</section>

<section className="av-sec" style={css("padding: 56px 20px; background: #5A2420; color: #FBF8F2; display: flex; flex-direction: column; gap: 20px")}>
<div style={css("display: flex; flex-direction: column; gap: 10px")}>
<p style={css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #F0C998")}>Nueva ley de alquileres</p>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em")}>Alquilar vuelve a tener reglas claras</h2>
<p style={css("margin: 0; color: #EBD9D3")}>Hacemos tu contrato con la ley de agosto de 2026. Esto es lo que te permite:</p>
</div>
<div className="av-grid2" style={css("display: flex; flex-direction: column; border-top: 1px solid #7A3A33")}>
<div style={css("display: flex; gap: 14px; padding: 16px 0; border-bottom: 1px solid #7A3A33")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F0C998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={css("flex: none; margin-top: 2px")}><circle cx="12" cy="12" r="9"></circle><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1.1 1.6 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5V8M12 16v1.5"></path></svg><div><p style={css("margin: 0; font-weight: 600")}>Canon en divisas</p><p style={css("margin: 2px 0 0; font-size: 14px; color: #EBD9D3")}>Pactado libremente entre las partes.</p></div></div>
<div style={css("display: flex; gap: 14px; padding: 16px 0; border-bottom: 1px solid #7A3A33")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F0C998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={css("flex: none; margin-top: 2px")}><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z"></path><path d="M9 12l2 2 4-4"></path></svg><div><p style={css("margin: 0; font-weight: 600")}>Depósito o póliza de seguro</p><p style={css("margin: 2px 0 0; font-size: 14px; color: #EBD9D3")}>Depósito de hasta 3 meses de canon, o póliza.</p></div></div>
<div style={css("display: flex; gap: 14px; padding: 16px 0; border-bottom: 1px solid #7A3A33")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F0C998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={css("flex: none; margin-top: 2px")}><path d="M12 3v18M5 7h14M7 7l-3 7a3 3 0 0 0 6 0L7 7zM17 7l-3 7a3 3 0 0 0 6 0l-3-7z"></path></svg><div><p style={css("margin: 0; font-weight: 600")}>Disputas en tribunal de municipio</p><p style={css("margin: 2px 0 0; font-size: 14px; color: #EBD9D3")}>O en tribunal arbitral, con opción de conciliación o mediación antes.</p></div></div>
<div style={css("display: flex; gap: 14px; padding: 16px 0; border-bottom: 1px solid #7A3A33")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F0C998" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={css("flex: none; margin-top: 2px")}><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M4 10h16M9 3v4M15 3v4"></path></svg><div><p style={css("margin: 0; font-weight: 600")}>Causas claras para terminar el contrato</p><p style={css("margin: 2px 0 0; font-size: 14px; color: #EBD9D3")}>Por ejemplo, tres meses seguidos sin pagar el canon.</p></div></div>
</div>
<div style={css("display: flex; gap: 14px; align-items: flex-start; padding: 16px; border-radius: 16px; background: #FBF8F2; color: #1A1714")}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8C3A2F" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={css("flex: none; margin-top: 2px")}><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z"></path><path d="M9 12l2 2 4-4"></path></svg><div><p style={css("margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #8C3A2F")}>Además, con Activa Venezuela</p><p style={css("margin: 2px 0 0; font-weight: 700; font-size: 17px")}>Fianza de hasta 12 meses</p><p style={css("margin: 2px 0 0; font-size: 14px; color: #5A4F48")}>Con aseguradora. Si el inquilino deja de pagar, cubre hasta 12 meses.</p></div></div>
<p style={css("margin: 0; font-size: 12px; line-height: 1.45; color: #D3B5AD")}>Ley del Régimen Especial de Arrendamiento de Inmuebles Destinados a Vivienda, G.O. N.º 7.065 Ext. Aplica a contratos firmados desde su publicación.</p>
</section>

<section className="av-sec av-mid" style={css("padding: 56px 16px; display: flex; flex-direction: column; gap: 16px")}>
<div style={css("padding: 0 4px; display: flex; flex-direction: column; gap: 10px")}>
<p style={css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F")}>Diagnóstico</p>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em")}>Elige cómo empezar</h2>
<p style={css("margin: 0; color: #5A4F48; font-size: 15px")}>Toca un plan para compararlo.</p>
</div>
<div style={css("border: 1px solid #E0D9CB; border-radius: 20px; overflow: hidden; background: #FFFFFF; font-size: 14px")}>
<div style={css("display: grid; grid-template-columns: 1.15fr repeat(3, minmax(0, 1fr)); background: #F6F2EA")}>
<div style={css("padding: 10px")}></div>
{planHeads.map((h) => (
<button key={h.name} type="button" onClick={h.pick} style={css(h.style)}><span style={css("display: block; font-weight: 700; font-size: 15px")}>{h.name}</span><span style={css("display: block; font-size: 12px; opacity: 0.85")}>{h.price} USD</span></button>
))}
</div>
{planRows.map((r) => (
<div key={r.label} style={css("display: grid; grid-template-columns: 1.15fr repeat(3, minmax(0, 1fr)); border-top: 1px solid #EEE8DC; align-items: stretch")}>
<div style={css("padding: 12px 10px; color: #5A4F48; font-size: 13px; line-height: 1.3; display: flex; align-items: center")}>{r.label}</div>
{r.cells.map((c, k) => (
<div key={k} style={css(c.style)}>{c.text}</div>
))}
</div>
))}
</div>
<p style={css("margin: 0 4px; font-size: 13px; color: #6B6458")}>Incluye desplazamiento. La gestión cuenta desde que el inmueble queda alquilado. Obra, gastos e incidencias van aparte.</p>
</section>

<section className="av-sec av-prices" style={css("padding: 48px 20px; background: #F1ECE2; display: flex; flex-direction: column; gap: 22px")}>
<div style={css("display: flex; flex-direction: column; gap: 10px")}>
<p style={css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F")}>Precios y pagos</p>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 30px; line-height: 1.1; font-weight: 600; letter-spacing: -0.015em")}>Qué pagas y cuándo</h2>
</div>
<div style={css("display: flex; flex-direction: column")}><p style={css("margin: 0 0 4px; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6B6458")}>Antes de alquilar o vender</p><div style={css("border-top: 1px solid #DDD5C5")}>
<div style={css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px")}><div style={css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px")}><p style={css("margin: 0; font-weight: 700; font-size: 16px")}>Diagnóstico</p><p style={css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600")}>1.000 a 5.000 USD</p></div><p style={css("margin: 0; font-size: 13px; color: #5A4F48")}>Incluye desplazamiento. Más de 150 m²: extra por el resto o priorizamos las zonas que quieras.</p><p style={css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F")}>Se paga al reservar · reagenda con 48 h de aviso</p></div>
<div style={css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px")}><div style={css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px")}><p style={css("margin: 0; font-weight: 700; font-size: 16px")}>Obras</p><p style={css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600")}>Presupuesto cerrado</p></div><p style={css("margin: 0; font-size: 13px; color: #5A4F48")}>Lo adaptamos a tus necesidades y gustos antes de cerrarlo.</p><p style={css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F")}>60% por adelantado · 40% al comenzar la obra</p></div>
</div></div>
<div style={css("display: flex; flex-direction: column")}><p style={css("margin: 0 0 4px; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6B6458")}>Después</p><div style={css("border-top: 1px solid #DDD5C5")}>
<div style={css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px")}><div style={css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px")}><p style={css("margin: 0; font-weight: 700; font-size: 16px")}>Gestión del alquiler</p><p style={css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600")}>8 a 15%</p></div><p style={css("margin: 0; font-size: 13px; color: #5A4F48")}>De cada mensualidad, según el nivel de servicio y el tipo de vivienda.</p><p style={css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F")}>Cada mes, sobre el canon</p></div>
<div style={css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px")}><div style={css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px")}><p style={css("margin: 0; font-weight: 700; font-size: 16px")}>Encontrar inquilino</p><p style={css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600")}>10%</p></div><p style={css("margin: 0; font-size: 13px; color: #5A4F48")}>De una anualidad. Fotos, visitas, revisión y contrato.</p><p style={css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F")}>Al firmar el contrato</p></div>
<div style={css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px")}><div style={css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px")}><p style={css("margin: 0; font-weight: 700; font-size: 16px")}>Venta</p><p style={css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600")}>5%</p></div><p style={css("margin: 0; font-size: 13px; color: #5A4F48")}>Comprador y acompañamiento hasta el cierre.</p><p style={css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F")}>Al firmar la compraventa</p></div>
<div style={css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px")}><div style={css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px")}><p style={css("margin: 0; font-weight: 700; font-size: 16px")}>Mantener sin inquilino</p><p style={css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600")}>100 a 150 USD/mes</p></div><p style={css("margin: 0; font-size: 13px; color: #5A4F48")}>Condominio, servicios y lo que se rompa, según el nivel de servicio.</p><p style={css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F")}>Al mes</p></div>
</div></div>
<div style={css("padding: 16px; border-radius: 16px; background: #FFFFFF; border: 1px solid #E0D9CB; display: flex; flex-direction: column; gap: 6px")}>
<p style={css("margin: 0; font-weight: 700; font-size: 15px")}>Pagas como te resulte más fácil</p>
<p style={css("margin: 0; font-size: 14px; color: #5A4F48")}>Preferimos euros, USD o Bitcoin, pero somos flexibles: Zelle, Bizum, USDT, USDC y más. Tenemos presencia jurídica en varios países y emitimos factura si la necesitas.</p>
</div>
</section>

<section className="av-sec av-mid" style={css("padding: 56px 16px; display: flex; flex-direction: column; gap: 16px")}>
<div style={css("padding: 0 4px; display: flex; flex-direction: column; gap: 10px")}>
<p style={css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F")}>Lo que nos preguntan</p>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em")}>Antes de decidir</h2>
</div>
<div style={css("border-radius: 24px; overflow: hidden; border: 1px solid #DDD5C5")}>
<div style={css("display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: #1A1714; color: #FFFFFF")}>
<div style={css("width: 40px; height: 40px; border-radius: 20px; background: #F0C998; color: #1A1714; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px")}>AV</div>
<div><p style={css("margin: 0; font-weight: 700; font-size: 15px")}>Activa Venezuela</p><p style={css("margin: 0; font-size: 12px; color: #C7BBB2")}>Responde en menos de 24 h</p></div>
</div>
<div style={css("padding: 16px 12px 20px; background: #EDE6DA; display: flex; flex-direction: column; gap: 8px")}>
{chat.map((m, k) => (
<div key={k} style={css(m.style)}>{m.text}</div>
))}
</div>
</div>
</section>

<section className="av-sec" style={css("padding: 48px 20px 8px; background: #FBF8F2; display: flex; flex-direction: column; gap: 22px")}>
<div style={css("display: flex; flex-direction: column; gap: 10px")}>
<p style={css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F")}>Qué pasa cuando nos escribes</p>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 30px; line-height: 1.1; font-weight: 600; letter-spacing: -0.015em")}>Del primer mensaje al informe</h2>
</div>
<div className="av-steps4" style={css("display: flex; flex-direction: column")}>
<div style={css("display: flex; gap: 14px")}><div style={css("display: flex; flex-direction: column; align-items: center")}><div style={css("width: 32px; height: 32px; border-radius: 16px; border: 2px solid #8C3A2F; color: #8C3A2F; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; box-sizing: border-box")}>1</div><div className="av-line" style={css("flex: 1; width: 2px; background: #E0D9CB")}></div></div><div style={css("padding-bottom: 22px;")}><p style={css("margin: 4px 0 4px; font-weight: 700; font-size: 16px")}>Hablamos por WhatsApp</p><p style={css("margin: 0; font-size: 14px; color: #5A4F48")}>Resolvemos tus dudas sobre los planes, verificamos los datos del inmueble, cerramos el servicio que necesitas y reservamos al equipo.</p></div></div>
<div style={css("display: flex; gap: 14px")}><div style={css("display: flex; flex-direction: column; align-items: center")}><div style={css("width: 32px; height: 32px; border-radius: 16px; border: 2px solid #8C3A2F; color: #8C3A2F; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; box-sizing: border-box")}>2</div><div className="av-line" style={css("flex: 1; width: 2px; background: #E0D9CB")}></div></div><div style={css("padding-bottom: 22px;")}><p style={css("margin: 4px 0 4px; font-weight: 700; font-size: 16px")}>Pagas y agendamos</p><p style={css("margin: 0; font-size: 14px; color: #5A4F48")}>Pagas el servicio y agendamos la fecha y la hora.</p></div></div>
<div style={css("display: flex; gap: 14px")}><div style={css("display: flex; flex-direction: column; align-items: center")}><div style={css("width: 32px; height: 32px; border-radius: 16px; border: 2px solid #8C3A2F; color: #8C3A2F; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; box-sizing: border-box")}>3</div><div className="av-line" style={css("flex: 1; width: 2px; background: #E0D9CB")}></div></div><div style={css("padding-bottom: 22px;")}><p style={css("margin: 4px 0 4px; font-weight: 700; font-size: 16px")}>Ejecutamos el servicio</p><p style={css("margin: 0; font-size: 14px; color: #5A4F48")}>El encargado va con el personal a tu dirección, o a buscar las llaves, y ejecutamos el servicio.</p></div></div>
<div style={css("display: flex; gap: 14px")}><div style={css("display: flex; flex-direction: column; align-items: center")}><div style={css("width: 32px; height: 32px; border-radius: 16px; border: 2px solid #8C3A2F; color: #8C3A2F; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; box-sizing: border-box")}>4</div></div><div style={css("")}><p style={css("margin: 4px 0 4px; font-weight: 700; font-size: 16px")}>A los 7 días, tu plan</p><p style={css("margin: 0; font-size: 14px; color: #5A4F48")}>Recibes los informes, los presupuestos, el plan de acción y los próximos pasos.</p></div></div>
</div>
</section>

<section id="contacto" className="av-sec av-contact" style={css("padding: 56px 16px 48px; background: #FBF8F2; display: flex; flex-direction: column; gap: 14px")}>
<div style={css("padding: 0 4px; display: flex; flex-direction: column; gap: 8px")}>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 34px; line-height: 1.05; font-weight: 600; letter-spacing: -0.015em")}>Empieza hoy</h2>
<p style={css("margin: 0; color: #5A4F48")}>Elige cómo prefieres hablar con nosotros.</p>
</div>

<div style={css("padding: 20px; border-radius: 22px; background: #FFFFFF; border: 2px solid #8C3A2F; display: flex; flex-direction: column; gap: 14px")}>
<div style={css("display: flex; flex-direction: column; gap: 2px")}>
<p style={css("margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #8C3A2F")}>Por WhatsApp</p>
<p style={css("margin: 0; font-size: 21px; font-weight: 700; color: #1A1714")}>Agenda tu diagnóstico</p>
</div>
<label style={css("display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #1A1714")}>¿Qué necesitas?
<select value={need} onChange={setNeed} style={css("height: 52px; padding: 0 12px; border-radius: 12px; border: 1px solid #D8D0C0; background: #FFFFFF; font-size: 16px; font-family: inherit; color: #1A1714")}>
{needs.map((n) => (<option key={n.label} value={n.label}>{n.label}</option>))}
</select>
</label>
<a href={waNeed} onClick={trackWhatsApp} target="_blank" rel="noopener noreferrer" style={css("display: flex; align-items: center; justify-content: center; gap: 10px; height: 54px; border-radius: 27px; background: #8C3A2F; color: #FFFFFF; font-weight: 700; font-size: 17px; text-decoration: none")}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z"></path></svg>Escribir por WhatsApp</a>
<p style={css("margin: 0; text-align: center; font-size: 13px; color: #5A4F48")}>Te respondemos en menos de 24 h</p>
</div>

<div className="av-or" style={css("display: flex; align-items: center; gap: 12px; padding: 0 8px")}><div style={css("flex: 1; height: 1px; background: #DDD5C5")}></div><p style={css("margin: 0; font-size: 13px; color: #6B6458")}>o</p><div style={css("flex: 1; height: 1px; background: #DDD5C5")}></div></div>

<form onSubmit={enviarInfo} style={css("padding: 20px; border-radius: 22px; background: #FFFFFF; border: 1px solid #E0D9CB; display: flex; flex-direction: column; gap: 12px")}>
<div style={css("display: flex; flex-direction: column; gap: 2px")}>
<p style={css("margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6B6458")}>Por correo · sin compromiso</p>
<p style={css("margin: 0; font-size: 21px; font-weight: 700; color: #1A1714")}>Recibe más información</p>
</div>
<label style={css("display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600")}>Nombre<input type="text" required autoComplete="name" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="María Pérez" style={css("height: 50px; padding: 0 14px; border-radius: 12px; border: 1px solid #D8D0C0; font-size: 16px; font-family: inherit")} /></label>
<label style={css("display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600")}>Correo<input type="email" required autoComplete="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="maria@correo.com" style={css("height: 50px; padding: 0 14px; border-radius: 12px; border: 1px solid #D8D0C0; font-size: 16px; font-family: inherit")} /></label>
<label style={css("display: flex; gap: 10px; align-items: flex-start; font-size: 13px; color: #5A4F48")}><input type="checkbox" required checked={acepta} onChange={(e) => setAcepta(e.target.checked)} style={css("width: 20px; height: 20px; margin: 0; flex: none")} /><span>Acepto la <a href="#">política de privacidad</a>.</span></label>
<button type="submit" disabled={estado === "enviando"} style={css("height: 52px; border: 1.5px solid #8C3A2F; border-radius: 26px; background: #FFFFFF; color: #8C3A2F; font-weight: 700; font-size: 16px; font-family: inherit")}>{estado === "enviando" ? "Enviando…" : "Enviarme información"}</button>
{estado === "ok" ? <p style={css("margin: 0; font-size: 14px; font-weight: 600; color: #2E6B47")}>Gracias. Te escribimos pronto con la información.</p> : null}
{estado === "error" ? <p style={css("margin: 0; font-size: 14px; color: #8C3A2F")}>{errorMsg}</p> : null}
</form>
</section>

<section className="av-sec av-mid" style={css("padding: 48px 20px; background: #FFFFFF; border-top: 1px solid #E6E0D4; display: flex; flex-direction: column; gap: 14px")}>
<h2 style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 30px; line-height: 1.1; font-weight: 600; letter-spacing: -0.015em")}>Preguntas frecuentes</h2>
<div style={css("display: flex; flex-direction: column; border-top: 1px solid #E0D9CB")}>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Cuándo empiezan los meses de gestión?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>Cuando el inmueble queda alquilado. El Pro trae seis meses y el VIP un año. Gastos e incidencias van aparte.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Qué no entra en el diagnóstico?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>Mudanza, retiro de muebles, pintura, staging y la sesión profesional de fotos. Eso es activación. El Básico incluye una limpieza superficial y el Pro una limpieza a fondo, ambas hasta 150 m².</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Qué incluye el Pro y el VIP además?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>Pro: revisión exhaustiva de luces, grifos, equipos y muebles, y checklist de documentos para alquilar o vender. VIP: consultas en Corpoelec, Hidrocapital y PDVSA Gas, y certificación de deuda del condominio y de la alcaldía.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Qué obras pueden hacer?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>Reparaciones, tuberías, iluminación, acabados, suelos, pintura, cocina, baños, equipos y muebles, mudanza, almacenamiento, limpieza, staging, fotografías y custodia de llaves.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Qué hago si ocupan mi vivienda?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>El contrato y la elección del inquilino son la primera barrera. Si alguien entra sin contrato, comete usurpación por invasión: es un delito y corresponde la desocupación del inmueble.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Dónde dejo los muebles que no quiero?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>Los retiramos, los guardamos o botamos lo dañado. El almacén se cotiza aparte, según el volumen y el tiempo.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Cómo pago el diagnóstico?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>Nos adaptamos a ti. Preferimos euros, USD o Bitcoin, y también aceptamos Zelle, Bizum, USDT y USDC, entre otras. El diagnóstico se paga antes de agendar la visita.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Puedo cancelar o cambiar la fecha?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>No hacemos cancelaciones. Puedes reagendar con al menos 48 h de aviso.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Y si mi inmueble tiene más de 150 m²?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>Acordamos un extra por los metros restantes o priorizamos las zonas que quieras.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿El presupuesto de obra puede cambiar?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>No: es cerrado. Antes de cerrarlo lo adaptamos a tus necesidades y gustos. Por eso pedimos el 60% por adelantado y el 40% al comenzar.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Emiten factura?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>Sí. Tenemos presencia jurídica en varios países y emitimos factura si la necesitas.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Trabajan en mi zona?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>Lo confirmamos por WhatsApp antes de cobrar nada: verificamos que tenemos equipo en la zona de tu inmueble y podemos actuar allí.</p></details>
<details style={css("border-bottom: 1px solid #E0D9CB")}><summary style={css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714")}>¿Cuánto cuesta mantener sin inquilino?<span className="faq-plus" style={css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F")}>+</span></summary><p style={css("margin: 0 0 18px; color: #5A4F48; font-size: 15px")}>Entre 100 y 150 USD al mes, según el nivel de servicio que necesites.</p></details>
</div>
</section>

<footer className="av-sec av-foot" style={css("padding: 32px 20px 40px; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #5A4F48")}>
<p style={css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 20px; font-weight: 600; color: #1A1714")}>Activa Venezuela</p>
<p style={css("margin: 0")}>Grupo Zaquen, C.A. · RIF J-40003364-0</p>
<p style={css("margin: 0")}><a href="mailto:info@activavenezuela.com">info@activavenezuela.com</a></p>
<div style={css("display: flex; gap: 18px; flex-wrap: wrap")}><a href="#">Privacidad</a><a href="#">Cookies</a><a href="#">Aviso legal</a></div>
</footer>



</div>
  );
}

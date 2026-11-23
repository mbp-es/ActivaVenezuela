import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bv8YwiZF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var supabase = createClient("https://hgtbfknzcvwkbrzjfohl.supabase.co", "sb_publishable_9FdQR4cTMab6-tycQ-nRIw_bIKUmRJx");
var WHATSAPP = "34611848171";
var cssCache = /* @__PURE__ */ new Map();
function css(text) {
	const hit = cssCache.get(text);
	if (hit) return hit;
	const out = {};
	for (const decl of text.split(";")) {
		const i = decl.indexOf(":");
		if (i < 0) continue;
		const prop = decl.slice(0, i).trim();
		const value = decl.slice(i + 1).trim();
		if (!prop) continue;
		const key = prop.startsWith("-") ? prop.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^./, (c) => c.toUpperCase()) : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
		out[key] = value;
	}
	cssCache.set(text, out);
	return out;
}
function fmt(n) {
	return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
var PLANS = [
	{
		name: "Básico",
		price: "1.000"
	},
	{
		name: "Pro",
		price: "2.500"
	},
	{
		name: "VIP",
		price: "5.000"
	}
];
var ROWS = [
	[
		"Visita e informe post sismo",
		"✓",
		"✓",
		"✓"
	],
	[
		"Fotos y video por ambiente",
		"✓",
		"✓",
		"✓"
	],
	[
		"Renders con presupuesto",
		"No",
		"1 render",
		"3 renders, 3 cambios"
	],
	[
		"Limpieza hasta 150 m²",
		"Superficial",
		"A fondo",
		"A fondo"
	],
	[
		"Papeles y deudas",
		"No",
		"Checklist",
		"Certificados"
	],
	[
		"Gestión incluida",
		"No",
		"6 meses",
		"12 meses"
	]
];
var NEEDS = [
	["Diagnóstico", "Hola, quiero agendar un diagnóstico para mi inmueble."],
	["Alquilar", "Hola, quiero alquilar mi inmueble y que lo gestionen."],
	["Vender", "Hola, quiero vender mi inmueble."],
	["Obras", "Hola, necesito un presupuesto de obra para mi inmueble."],
	["Otra consulta", "Hola, tengo una consulta sobre mi inmueble."]
];
var Q = "align-self: flex-end; max-width: 82%; padding: 10px 12px; border-radius: 14px 14px 4px 14px; background: #D9F5C9; color: #1A1714; font-size: 15px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);";
var A = "align-self: flex-start; max-width: 86%; padding: 10px 12px; border-radius: 14px 14px 14px 4px; background: #FFFFFF; color: #1A1714; font-size: 15px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08); margin-bottom: 8px;";
var chat = [
	{
		style: Q,
		text: "Tengo un apartamento cerrado hace años y sigo pagando condominio. ¿Por dónde empiezo?"
	},
	{
		style: A,
		text: "Por el diagnóstico. Un ingeniero civil visado por el CIV lo visita y te dice cómo está y cuánto cuesta mantenerlo, alquilarlo o venderlo."
	},
	{
		style: Q,
		text: "¿Y si el inquilino deja de pagar?"
	},
	{
		style: A,
		text: "Cobramos nosotros, te avisamos al primer impago y activamos la fianza: hasta 12 meses cubiertos. Con la nueva ley, tres meses seguidos sin pagar es causa de rescisión, y la disputa va a tribunal de municipio o arbitral."
	},
	{
		style: Q,
		text: "¿Y si se dañan cosas?"
	},
	{
		style: A,
		text: "Hay inventario con fotos al entrar y al salir. El depósito cubre lo que no es desgaste normal; lo que exceda se reclama al inquilino."
	},
	{
		style: Q,
		text: "¿El diagnóstico incluye la obra?"
	},
	{
		style: A,
		text: "No. Pro y VIP incluyen renders con su presupuesto. La obra se hace en la activación y se paga aparte."
	},
	{
		style: Q,
		text: "¿Qué hago con los muebles que no quiero?"
	},
	{
		style: A,
		text: "Los retiramos, los guardamos o botamos lo dañado. La mudanza la coordinamos nosotros."
	}
];
function track(event, data, fbEvent) {
	const w = window;
	w.dataLayer = w.dataLayer || [];
	w.dataLayer.push({
		event,
		...data
	});
	w.fbq?.("track", fbEvent, data);
}
function Home() {
	const [years, setYearsV] = (0, import_react.useState)(5);
	const [alquilerN, setAlquilerN] = (0, import_react.useState)(800);
	const [condominio, setCondominioV] = (0, import_react.useState)(250);
	const [otros, setOtrosV] = (0, import_react.useState)(50);
	const [plan, setPlan] = (0, import_react.useState)("Pro");
	const [need, setNeedV] = (0, import_react.useState)("Diagnóstico");
	const [ref, setRef] = (0, import_react.useState)("");
	const [nombre, setNombre] = (0, import_react.useState)("");
	const [correo, setCorreo] = (0, import_react.useState)("");
	const [acepta, setAcepta] = (0, import_react.useState)(false);
	const [estado, setEstado] = (0, import_react.useState)("idle");
	const [errorMsg, setErrorMsg] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const p = new URLSearchParams(window.location.search);
		setRef(p.get("utm_campaign") || p.get("utm_source") || p.get("ref") || "");
	}, []);
	const num = (fn) => (e) => fn(Number(e.target.value));
	const setYears = num(setYearsV);
	const setAlquiler = num(setAlquilerN);
	const setCondominio = num(setCondominioV);
	const setOtros = num(setOtrosV);
	const setNeed = (e) => setNeedV(e.target.value);
	const meses = years * 12;
	const gastosN = condominio + otros;
	const noCobradoN = meses * alquilerN;
	const pagadosN = meses * gastosN;
	const totalN = noCobradoN + pagadosN;
	const pA = totalN > 0 ? noCobradoN / totalN * 100 : 0;
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
		style: "border: 0; padding: 12px 4px; font-family: inherit; cursor: pointer; text-align: center; " + (idx === selIdx ? "background: #1A1714; color: #FFFFFF;" : "background: transparent; color: #1A1714;")
	}));
	const planRows = ROWS.map((r) => ({
		label: r[0],
		cells: [
			1,
			2,
			3
		].map((k) => ({
			text: r[k],
			style: "padding: 12px 4px; text-align: center; display: flex; align-items: center; justify-content: center; font-size: 13px; line-height: 1.25; " + (k - 1 === selIdx ? "background: #F6E8E4; font-weight: 700; color: #1A1714;" : "color: " + (r[k] === "No" ? "#A39C8F" : "#1A1714") + ";")
		}))
	}));
	const needs = NEEDS.map(([label]) => ({ label }));
	const needMsg = (NEEDS.find(([l]) => l === need) ?? NEEDS[0])[1];
	const waNeed = (0, import_react.useMemo)(() => {
		const text = ref ? `${needMsg} (ref: ${ref})` : needMsg;
		return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
	}, [needMsg, ref]);
	function trackWhatsApp() {
		track("contacto_whatsapp", {
			categoria: need,
			ref
		}, "Contact");
	}
	async function enviarInfo(event) {
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
			comentarios: ref ? `ref: ${ref}` : null
		});
		if (error) {
			setEstado("error");
			setErrorMsg("No pudimos enviar tus datos. Inténtalo de nuevo o escríbenos por WhatsApp.");
			return;
		}
		await fetch("https://formsubmit.co/ajax/moe2033@gmail.com", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({
				_subject: "Nuevo lead (información por correo): Activa Venezuela",
				_template: "table",
				_captcha: "false",
				Nombre: nombre.trim(),
				Correo: correo.trim(),
				Origen: ref || "directo"
			})
		}).catch(() => void 0);
		track("generar_lead", {
			tipo: "informacion_correo",
			ref
		}, "Lead");
		setEstado("ok");
		setNombre("");
		setCorreo("");
		setAcepta(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: css("width: 100%; max-width: 600px; margin: 0 auto; box-shadow: 0 0 0 1px #E6E0D4; background: #FBF8F2; color: #1A1714; font-family: Inter, system-ui, sans-serif; font-size: 16px; line-height: 1.5"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				style: css("display: flex; align-items: center; justify-content: center; padding: 14px 20px; background: #FBF8F2; border-bottom: 1px solid #E6E0D4"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 22px; font-weight: 600; letter-spacing: -0.01em"),
					children: ["Activa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: css("color: #8C3A2F"),
						children: "Venezuela"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("position: relative; height: 620px; overflow: hidden; color: #FBF8F2"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/avila.jpg",
						alt: "El Ávila sobre Caracas al atardecer",
						style: css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 30% center")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css("position: absolute; inset: 0; background: rgba(22, 14, 12, 0.58)") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("position: relative; display: flex; flex-direction: column; justify-content: flex-end; height: 100%; box-sizing: border-box; padding: 0 24px 32px; gap: 16px"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #F0C998"),
								children: "¿Tu inmueble está parado?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 46px; line-height: 1.02; font-weight: 600; letter-spacing: -0.02em"),
								children: "Pon tu inmueble en Venezuela a generar."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; font-size: 18px; line-height: 1.45; color: #EDE7DC"),
								children: "Falta de tiempo, o no saber por dónde empezar. Nos encargamos de todo."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waNeed,
								onClick: trackWhatsApp,
								target: "_blank",
								rel: "noopener noreferrer",
								style: css("display: flex; align-items: center; justify-content: center; gap: 10px; height: 56px; margin-top: 4px; border-radius: 28px; background: #8C3A2F; color: #FFFFFF; font-weight: 700; font-size: 17px; text-decoration: none"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "20",
									height: "20",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z" })
								}), "Agenda tu diagnóstico"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; text-align: center; font-size: 14px; font-weight: 500; color: #E2DBCE"),
								children: "Te respondemos en menos de 24 h"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); background: #5A2420; color: #FBF8F2"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("padding: 18px 8px; text-align: center; border-right: 1px solid #7A3A33"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600"),
							children: "CIV"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 2px 0 0; font-size: 12px; line-height: 1.35; color: #D8CEC6"),
							children: "Ingeniero civil colegiado"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("padding: 18px 8px; text-align: center; border-right: 1px solid #7A3A33"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600"),
							children: "FUNVISIS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 2px 0 0; font-size: 12px; line-height: 1.35; color: #D8CEC6"),
							children: "Informe post sismo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("padding: 18px 8px; text-align: center"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600"),
							children: "Ley 2026"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 2px 0 0; font-size: 12px; line-height: 1.35; color: #D8CEC6"),
							children: "Contratos con la nueva ley"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("padding: 56px 16px 48px; display: flex; flex-direction: column; gap: 18px"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("padding: 0 4px; display: flex; flex-direction: column; gap: 10px"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F"),
						children: "Haz la cuenta"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 34px; line-height: 1.06; font-weight: 600; letter-spacing: -0.015em"),
						children: "¿Cuánto te cuesta tenerlo parado?"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("border-radius: 28px; background: #1A1714; color: #FBF8F2; overflow: hidden"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("padding: 26px 22px 22px; display: flex; flex-direction: column; gap: 18px"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								style: css("margin: 0; font-size: 15px; color: #D8CEC6"),
								children: [
									"En ",
									years,
									" años te ha costado"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								style: css("margin: 4px 0 0; font-family: Fraunces, Georgia, serif; font-size: 58px; line-height: 1; font-weight: 600; letter-spacing: -0.02em; color: #FFFFFF"),
								children: [total, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: css("font-size: 22px; color: #D8CEC6"),
									children: " USD"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; height: 14px; border-radius: 7px; overflow: hidden; background: #3A322D"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css(barAlquiler) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css(barGastos) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: css("padding: 14px; border-radius: 16px; background: #2A2420; display: flex; flex-direction: column; gap: 4px"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											style: css("margin: 0; display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: #F0C998"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: css("width: 10px; height: 10px; border-radius: 3px; background: rgb(240, 201, 152)") }), "Sin Ingresos"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.01em"),
											children: noCobrado
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											style: css("margin: 0; font-size: 12px; line-height: 1.35; color: #C7BBB2"),
											children: [
												"Alquiler de ",
												alquiler,
												" × ",
												meses,
												" meses"
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: css("padding: 14px; border-radius: 16px; background: #2A2420; display: flex; flex-direction: column; gap: 4px"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											style: css("margin: 0; display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: #F2A27E"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: css("width: 10px; height: 10px; border-radius: 3px; background: rgb(232, 134, 92)") }), "Gastos"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.01em"),
											children: pagados
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											style: css("margin: 0; font-size: 12px; line-height: 1.35; color: #C7BBB2"),
											children: [
												"Gastos de ",
												gastosMes,
												" × ",
												meses,
												" meses"
											]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 14px 16px; border-radius: 16px; border: 1px solid #4F443E"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 14px; line-height: 1.35; color: #FFFFFF; font-weight: 600"),
									children: "Cada mes parado te cuesta"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									style: css("margin: 2px 0 0; font-size: 12px; line-height: 1.35; color: #C7BBB2"),
									children: [
										alquiler,
										" que no cobras + ",
										gastosMes,
										" que pagas"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									style: css("margin: 0; flex: none; font-size: 20px; font-weight: 700; color: #F0C998"),
									children: [porMes, " USD"]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("padding: 20px 22px 24px; background: #100E0C; display: flex; flex-direction: column; gap: 12px"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #A69A90"),
								children: "Ajusta a tu caso"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: css("display: flex; flex-direction: column; gap: 2px"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: css("display: flex; justify-content: space-between; font-size: 14px; color: #D8CEC6"),
									children: ["Años parado", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										style: css("color: #FFFFFF; font-weight: 600"),
										children: years
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "1",
									max: "15",
									step: "1",
									value: years,
									onChange: setYears
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: css("display: flex; flex-direction: column; gap: 2px"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: css("display: flex; justify-content: space-between; font-size: 14px; color: #D8CEC6"),
									children: ["Alquiler posible al mes", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										style: css("color: #FFFFFF; font-weight: 600"),
										children: [alquiler, " USD"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "100",
									max: "3000",
									step: "50",
									value: alquilerRaw,
									onChange: setAlquiler
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: css("display: flex; flex-direction: column; gap: 2px"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: css("display: flex; justify-content: space-between; font-size: 14px; color: #D8CEC6"),
									children: ["Condominio al mes", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										style: css("color: #FFFFFF; font-weight: 600"),
										children: [condominio, " USD"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "0",
									max: "800",
									step: "10",
									value: condominio,
									onChange: setCondominio
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: css("display: flex; flex-direction: column; gap: 2px"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: css("display: flex; justify-content: space-between; font-size: 14px; color: #D8CEC6"),
									children: ["Otros gastos al mes", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
										style: css("color: #FFFFFF; font-weight: 600"),
										children: [otros, " USD"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: "0",
									max: "400",
									step: "10",
									value: otros,
									onChange: setOtros
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 2px 0 0; font-size: 12px; color: #A69A90"),
								children: "Valores de ejemplo. Calcula con tus números."
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("padding: 56px 20px; background: #F1ECE2; display: flex; flex-direction: column; gap: 26px"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("display: flex; flex-direction: column; gap: 10px"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F"),
						children: "Cómo funciona"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em"),
						children: "De gasto a ingreso, en 3 pasos"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("display: flex; flex-direction: column"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("display: flex; gap: 16px"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; flex-direction: column; align-items: center"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: css("width: 40px; height: 40px; border-radius: 20px; background: #1A1714; color: #FBF8F2; display: flex; align-items: center; justify-content: center; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600"),
									children: "1"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css("flex: 1; width: 2px; background: #CFC6B4") })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("padding-bottom: 28px"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									style: css("margin: 6px 0 6px; font-size: 19px; font-weight: 700"),
									children: "Diagnóstico"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; color: #5A4F48"),
									children: "Visitamos tu inmueble y te decimos cómo está, qué hacer y cuánto cuesta."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("display: flex; gap: 16px"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; flex-direction: column; align-items: center"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: css("width: 40px; height: 40px; border-radius: 20px; background: #1A1714; color: #FBF8F2; display: flex; align-items: center; justify-content: center; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600"),
									children: "2"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css("flex: 1; width: 2px; background: #CFC6B4") })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("padding-bottom: 28px"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									style: css("margin: 6px 0 6px; font-size: 19px; font-weight: 700"),
									children: "Activación"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; color: #5A4F48"),
									children: "Hacemos las obras que necesita, a medida. Lo dejamos limpio, listo para alquilar o vender."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("display: flex; gap: 16px"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: css("display: flex; flex-direction: column; align-items: center"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: css("width: 40px; height: 40px; border-radius: 20px; background: #8C3A2F; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-family: Fraunces, Georgia, serif; font-size: 19px; font-weight: 600"),
									children: "3"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: css("margin: 6px 0 6px; font-size: 19px; font-weight: 700"),
								children: "Gestión"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; color: #5A4F48"),
								children: "Inquilino o comprador, contrato, gestiones y cobro en divisa."
							})] })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("padding: 56px 20px; display: flex; flex-direction: column; gap: 20px"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("display: flex; flex-direction: column; gap: 10px"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F"),
							children: "Quién visita tu inmueble"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em"),
							children: "Personas con nombre y apellido"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; color: #5A4F48"),
							children: "Sabes quién entra en tu casa y qué se va a hacer."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("display: flex; flex-direction: column; gap: 10px"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							style: css("display: flex; gap: 16px; align-items: center; padding: 16px; border-radius: 20px; background: #FFFFFF; border: 1px solid #E6E0D4"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/team/daniel.jpg",
								alt: "Daniel Monagas",
								style: css("flex: none; width: 72px; height: 72px; border-radius: 36px; object-fit: cover; background: #E6E0D4")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-weight: 700; font-size: 17px"),
									children: "Daniel Monagas"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									style: css("margin: 0; font-size: 14px; color: #5A4F48"),
									children: ["Ingeniero civil · CIV N.º ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										style: css("display: inline-block; filter: blur(4px); user-select: none; -webkit-user-select: none"),
										children: "321.566"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 2px 0 0; font-size: 13px; color: #8C3A2F; font-weight: 600"),
									children: "Hace el diagnóstico y el informe"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							style: css("display: flex; gap: 16px; align-items: center; padding: 16px; border-radius: 20px; background: #FFFFFF; border: 1px solid #E6E0D4"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/team/andrea.jpg",
								alt: "Andrea Alvarez",
								style: css("flex: none; width: 72px; height: 72px; border-radius: 36px; object-fit: cover; background: #E6E0D4")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-weight: 700; font-size: 17px"),
									children: "Andrea Alvarez"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 14px; color: #5A4F48"),
									children: "Obras e inquilinos · Caracas"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 2px 0 0; font-size: 13px; color: #8C3A2F; font-weight: 600"),
									children: "Hace las visitas por ti"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							style: css("display: flex; gap: 16px; align-items: center; padding: 16px; border-radius: 20px; background: #FFFFFF; border: 1px solid #E6E0D4"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/team/moises.jpg",
								alt: "Moisés Benzaquén",
								style: css("flex: none; width: 72px; height: 72px; border-radius: 36px; object-fit: cover; background: #E6E0D4")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-weight: 700; font-size: 17px"),
									children: "Moisés Benzaquén"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 14px; color: #5A4F48"),
									children: "Atención a propietarios · Global"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 2px 0 0; font-size: 13px; color: #8C3A2F; font-weight: 600"),
									children: "Te responde por WhatsApp"
								})
							] })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("padding: 56px 20px; background: #F1ECE2; display: flex; flex-direction: column; gap: 18px"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("display: flex; flex-direction: column; gap: 10px"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F"),
							children: "Qué recibes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em"),
							children: "Un informe para decidir con datos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; color: #5A4F48"),
							children: "Lo recibes a los 7 días de la visita, con el plan de acción."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("border-radius: 20px; background: #FFFFFF; box-shadow: 0 1px 2px rgba(26, 23, 20, 0.08), 0 12px 32px rgba(26, 23, 20, 0.10); overflow: hidden"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("padding: 16px 18px; background: #1A1714; color: #FBF8F2; display: flex; justify-content: space-between; align-items: center"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-weight: 700; font-size: 15px"),
							children: "Informe de diagnóstico"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-size: 12px; color: #C7BBB2"),
							children: "Ejemplo"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("display: flex; flex-direction: column"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; flex-direction: column; gap: 8px; padding: 14px 18px; border-bottom: 1px solid #EEE8DC"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: css("margin: 0; font-weight: 600; font-size: 15px"),
										children: "Evaluación estructural post sismo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: css("flex: none; padding: 4px 10px; border-radius: 10px; background: #F3E4E0; color: #8C3A2F; font-size: 12px; font-weight: 700"),
										children: "Revisado"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; padding: 8px 10px; border-radius: 10px; background: #F6F2EA; font-size: 13px; color: #5A4F48"),
									children: "Metodología FUNVISIS / ANIH, Boletín N.º 61 (2023)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 14px 18px; border-bottom: 1px solid #EEE8DC"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-weight: 600; font-size: 15px"),
									children: "Estado por ambiente"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 13px; color: #6B6458"),
									children: "Fotos y video de cada espacio"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: css("flex: none; padding: 4px 10px; border-radius: 10px; background: #F3E4E0; color: #8C3A2F; font-size: 12px; font-weight: 700"),
									children: "Con fotos"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 14px 18px; border-bottom: 1px solid #EEE8DC"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-weight: 600; font-size: 15px"),
									children: "Inventario"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 13px; color: #6B6458"),
									children: "Lo que hay y en qué estado"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: css("flex: none; padding: 4px 10px; border-radius: 10px; background: #F3E4E0; color: #8C3A2F; font-size: 12px; font-weight: 700"),
									children: "Listado"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("padding: 14px 18px; display: flex; flex-direction: column; gap: 10px"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-weight: 600; font-size: 15px"),
									children: "Qué te cuesta cada opción"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: css("display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; text-align: center"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: css("padding: 10px 6px; border-radius: 12px; background: #F6F2EA"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; font-size: 12px; color: #6B6458"),
												children: "Mantener"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 2px 0 0; font-weight: 700; font-size: 14px"),
												children: "150 USD"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: css("padding: 10px 6px; border-radius: 12px; background: #F6F2EA"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; font-size: 12px; color: #6B6458"),
												children: "Alquilar"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 2px 0 0; font-weight: 700; font-size: 14px"),
												children: "5.500 USD"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: css("padding: 10px 6px; border-radius: 12px; background: #F6F2EA"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; font-size: 12px; color: #6B6458"),
												children: "Vender"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 2px 0 0; font-weight: 700; font-size: 14px"),
												children: "3.500 USD"
											})]
										})
									]
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("padding: 56px 20px; background: #5A2420; color: #FBF8F2; display: flex; flex-direction: column; gap: 20px"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("display: flex; flex-direction: column; gap: 10px"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #F0C998"),
								children: "Nueva ley de alquileres"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em"),
								children: "Alquilar vuelve a tener reglas claras"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; color: #EBD9D3"),
								children: "Hacemos tu contrato con la ley de agosto de 2026. Esto es lo que te permite:"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("display: flex; flex-direction: column; border-top: 1px solid #7A3A33"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; gap: 14px; padding: 16px 0; border-bottom: 1px solid #7A3A33"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "22",
									height: "22",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "#F0C998",
									strokeWidth: "1.8",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									"aria-hidden": "true",
									style: css("flex: none; margin-top: 2px"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "12",
										r: "9"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1.1 1.6 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5V8M12 16v1.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-weight: 600"),
									children: "Canon en divisas"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 2px 0 0; font-size: 14px; color: #EBD9D3"),
									children: "Pactado libremente entre las partes."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; gap: 14px; padding: 16px 0; border-bottom: 1px solid #7A3A33"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "22",
									height: "22",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "#F0C998",
									strokeWidth: "1.8",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									"aria-hidden": "true",
									style: css("flex: none; margin-top: 2px"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 12l2 2 4-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-weight: 600"),
									children: "Depósito o póliza de seguro"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 2px 0 0; font-size: 14px; color: #EBD9D3"),
									children: "Depósito de hasta 3 meses de canon, o póliza."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; gap: 14px; padding: 16px 0; border-bottom: 1px solid #7A3A33"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "22",
									height: "22",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "#F0C998",
									strokeWidth: "1.8",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									"aria-hidden": "true",
									style: css("flex: none; margin-top: 2px"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3v18M5 7h14M7 7l-3 7a3 3 0 0 0 6 0L7 7zM17 7l-3 7a3 3 0 0 0 6 0l-3-7z" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-weight: 600"),
									children: "Disputas en tribunal de municipio"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 2px 0 0; font-size: 14px; color: #EBD9D3"),
									children: "O en tribunal arbitral, con opción de conciliación o mediación antes."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; gap: 14px; padding: 16px 0; border-bottom: 1px solid #7A3A33"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "22",
									height: "22",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "#F0C998",
									strokeWidth: "1.8",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									"aria-hidden": "true",
									style: css("flex: none; margin-top: 2px"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "4",
										y: "5",
										width: "16",
										height: "15",
										rx: "2"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 10h16M9 3v4M15 3v4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-weight: 600"),
									children: "Causas claras para terminar el contrato"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 2px 0 0; font-size: 14px; color: #EBD9D3"),
									children: "Por ejemplo, tres meses seguidos sin pagar el canon."
								})] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("display: flex; gap: 14px; align-items: flex-start; padding: 16px; border-radius: 16px; background: #FBF8F2; color: #1A1714"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "#8C3A2F",
							strokeWidth: "1.9",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							"aria-hidden": "true",
							style: css("flex: none; margin-top: 2px"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 12l2 2 4-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #8C3A2F"),
								children: "Además, con Activa Venezuela"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 2px 0 0; font-weight: 700; font-size: 17px"),
								children: "Fianza de hasta 12 meses"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 2px 0 0; font-size: 14px; color: #5A4F48"),
								children: "Con aseguradora. Si el inquilino deja de pagar, cubre hasta 12 meses."
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: css("margin: 0; font-size: 12px; line-height: 1.45; color: #D3B5AD"),
						children: "Ley del Régimen Especial de Arrendamiento de Inmuebles Destinados a Vivienda, G.O. N.º 7.065 Ext. Aplica a contratos firmados desde su publicación."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("padding: 56px 16px; display: flex; flex-direction: column; gap: 16px"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("padding: 0 4px; display: flex; flex-direction: column; gap: 10px"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F"),
								children: "Diagnóstico"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em"),
								children: "Elige cómo empezar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; color: #5A4F48; font-size: 15px"),
								children: "Toca un plan para compararlo."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("border: 1px solid #E0D9CB; border-radius: 20px; overflow: hidden; background: #FFFFFF; font-size: 14px"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("display: grid; grid-template-columns: 1.15fr repeat(3, minmax(0, 1fr)); background: #F6F2EA"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css("padding: 10px") }), planHeads.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: h.pick,
								style: css(h.style),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: css("display: block; font-weight: 700; font-size: 15px"),
									children: h.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: css("display: block; font-size: 12px; opacity: 0.85"),
									children: [h.price, " USD"]
								})]
							}, h.name))]
						}), planRows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("display: grid; grid-template-columns: 1.15fr repeat(3, minmax(0, 1fr)); border-top: 1px solid #EEE8DC; align-items: stretch"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: css("padding: 12px 10px; color: #5A4F48; font-size: 13px; line-height: 1.3; display: flex; align-items: center"),
								children: r.label
							}), r.cells.map((c, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: css(c.style),
								children: c.text
							}, k))]
						}, r.label))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: css("margin: 0 4px; font-size: 13px; color: #6B6458"),
						children: "Incluye desplazamiento. La gestión cuenta desde que el inmueble queda alquilado. Obra, gastos e incidencias van aparte."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("padding: 48px 20px; background: #F1ECE2; display: flex; flex-direction: column; gap: 22px"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("display: flex; flex-direction: column; gap: 10px"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F"),
							children: "Precios y pagos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 30px; line-height: 1.1; font-weight: 600; letter-spacing: -0.015em"),
							children: "Qué pagas y cuándo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("display: flex; flex-direction: column"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0 0 4px; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6B6458"),
							children: "Antes de alquilar o vender"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("border-top: 1px solid #DDD5C5"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-weight: 700; font-size: 16px"),
											children: "Diagnóstico"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600"),
											children: "1.000 a 5.000 USD"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: css("margin: 0; font-size: 13px; color: #5A4F48"),
										children: "Incluye desplazamiento. Más de 150 m²: extra por el resto o priorizamos las zonas que quieras."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F"),
										children: "Se paga al reservar · reagenda con 48 h de aviso"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-weight: 700; font-size: 16px"),
											children: "Obras"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600"),
											children: "Presupuesto cerrado"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: css("margin: 0; font-size: 13px; color: #5A4F48"),
										children: "Lo adaptamos a tus necesidades y gustos antes de cerrarlo."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F"),
										children: "60% por adelantado · 40% al comenzar la obra"
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("display: flex; flex-direction: column"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0 0 4px; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6B6458"),
							children: "Después"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("border-top: 1px solid #DDD5C5"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; font-weight: 700; font-size: 16px"),
												children: "Gestión del alquiler"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600"),
												children: "8 a 15%"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-size: 13px; color: #5A4F48"),
											children: "De cada mensualidad, según el nivel de servicio y el tipo de vivienda."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F"),
											children: "Cada mes, sobre el canon"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; font-weight: 700; font-size: 16px"),
												children: "Encontrar inquilino"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600"),
												children: "10%"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-size: 13px; color: #5A4F48"),
											children: "De una anualidad. Fotos, visitas, revisión y contrato."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F"),
											children: "Al firmar el contrato"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; font-weight: 700; font-size: 16px"),
												children: "Venta"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600"),
												children: "5%"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-size: 13px; color: #5A4F48"),
											children: "Comprador y acompañamiento hasta el cierre."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F"),
											children: "Al firmar la compraventa"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: css("padding: 14px 0; border-bottom: 1px solid #DDD5C5; display: flex; flex-direction: column; gap: 4px"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											style: css("display: flex; justify-content: space-between; align-items: baseline; gap: 12px"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; font-weight: 700; font-size: 16px"),
												children: "Mantener sin inquilino"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												style: css("margin: 0; flex: none; font-family: Fraunces, Georgia, serif; font-size: 18px; font-weight: 600"),
												children: "100 a 150 USD/mes"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-size: 13px; color: #5A4F48"),
											children: "Condominio, servicios y lo que se rompa, según el nivel de servicio."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: css("margin: 0; font-size: 13px; font-weight: 600; color: #8C3A2F"),
											children: "Al mes"
										})
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("padding: 16px; border-radius: 16px; background: #FFFFFF; border: 1px solid #E0D9CB; display: flex; flex-direction: column; gap: 6px"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-weight: 700; font-size: 15px"),
							children: "Pagas como te resulte más fácil"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-size: 14px; color: #5A4F48"),
							children: "Preferimos euros, USD o Bitcoin, pero somos flexibles: Zelle, Bizum, USDT, USDC y más. Tenemos presencia jurídica en varios países y emitimos factura si la necesitas."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("padding: 56px 16px; display: flex; flex-direction: column; gap: 16px"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("padding: 0 4px; display: flex; flex-direction: column; gap: 10px"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F"),
						children: "Lo que nos preguntan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 32px; line-height: 1.08; font-weight: 600; letter-spacing: -0.015em"),
						children: "Antes de decidir"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("border-radius: 24px; overflow: hidden; border: 1px solid #DDD5C5"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: #1A1714; color: #FFFFFF"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: css("width: 40px; height: 40px; border-radius: 20px; background: #F0C998; color: #1A1714; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px"),
							children: "AV"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-weight: 700; font-size: 15px"),
							children: "Activa Venezuela"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; font-size: 12px; color: #C7BBB2"),
							children: "Responde en menos de 24 h"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: css("padding: 16px 12px 20px; background: #EDE6DA; display: flex; flex-direction: column; gap: 8px"),
						children: chat.map((m, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: css(m.style),
							children: m.text
						}, k))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("padding: 48px 20px 8px; background: #FBF8F2; display: flex; flex-direction: column; gap: 22px"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("display: flex; flex-direction: column; gap: 10px"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: css("margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #8C3A2F"),
						children: "Qué pasa cuando nos escribes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 30px; line-height: 1.1; font-weight: 600; letter-spacing: -0.015em"),
						children: "Del primer mensaje al informe"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("display: flex; flex-direction: column"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("display: flex; gap: 14px"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; flex-direction: column; align-items: center"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: css("width: 32px; height: 32px; border-radius: 16px; border: 2px solid #8C3A2F; color: #8C3A2F; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; box-sizing: border-box"),
									children: "1"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css("flex: 1; width: 2px; background: #E0D9CB") })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("padding-bottom: 22px;"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 4px 0 4px; font-weight: 700; font-size: 16px"),
									children: "Hablamos por WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 14px; color: #5A4F48"),
									children: "Resolvemos tus dudas sobre los planes, verificamos los datos del inmueble, cerramos el servicio que necesitas y reservamos al equipo."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("display: flex; gap: 14px"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; flex-direction: column; align-items: center"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: css("width: 32px; height: 32px; border-radius: 16px; border: 2px solid #8C3A2F; color: #8C3A2F; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; box-sizing: border-box"),
									children: "2"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css("flex: 1; width: 2px; background: #E0D9CB") })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("padding-bottom: 22px;"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 4px 0 4px; font-weight: 700; font-size: 16px"),
									children: "Pagas y agendamos"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 14px; color: #5A4F48"),
									children: "Pagas el servicio y agendamos la fecha y la hora."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("display: flex; gap: 14px"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; flex-direction: column; align-items: center"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: css("width: 32px; height: 32px; border-radius: 16px; border: 2px solid #8C3A2F; color: #8C3A2F; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; box-sizing: border-box"),
									children: "3"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css("flex: 1; width: 2px; background: #E0D9CB") })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("padding-bottom: 22px;"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 4px 0 4px; font-weight: 700; font-size: 16px"),
									children: "Ejecutamos el servicio"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 14px; color: #5A4F48"),
									children: "El encargado va con el personal a tu dirección, o a buscar las llaves, y ejecutamos el servicio."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: css("display: flex; gap: 14px"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: css("display: flex; flex-direction: column; align-items: center"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: css("width: 32px; height: 32px; border-radius: 16px; border: 2px solid #8C3A2F; color: #8C3A2F; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; box-sizing: border-box"),
									children: "4"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css(""),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 4px 0 4px; font-weight: 700; font-size: 16px"),
									children: "A los 7 días, tu plan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 14px; color: #5A4F48"),
									children: "Recibes los informes, los presupuestos, el plan de acción y los próximos pasos."
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "contacto",
				style: css("padding: 56px 16px 48px; background: #FBF8F2; display: flex; flex-direction: column; gap: 14px"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("padding: 0 4px; display: flex; flex-direction: column; gap: 8px"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 34px; line-height: 1.05; font-weight: 600; letter-spacing: -0.015em"),
							children: "Empieza hoy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: css("margin: 0; color: #5A4F48"),
							children: "Elige cómo prefieres hablar con nosotros."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("padding: 20px; border-radius: 22px; background: #FFFFFF; border: 2px solid #8C3A2F; display: flex; flex-direction: column; gap: 14px"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; flex-direction: column; gap: 2px"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #8C3A2F"),
									children: "Por WhatsApp"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 21px; font-weight: 700; color: #1A1714"),
									children: "Agenda tu diagnóstico"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: css("display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600; color: #1A1714"),
								children: ["¿Qué necesitas?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: need,
									onChange: setNeed,
									style: css("height: 52px; padding: 0 12px; border-radius: 12px; border: 1px solid #D8D0C0; background: #FFFFFF; font-size: 16px; font-family: inherit; color: #1A1714"),
									children: needs.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: n.label,
										children: n.label
									}, n.label))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waNeed,
								onClick: trackWhatsApp,
								target: "_blank",
								rel: "noopener noreferrer",
								style: css("display: flex; align-items: center; justify-content: center; gap: 10px; height: 54px; border-radius: 27px; background: #8C3A2F; color: #FFFFFF; font-weight: 700; font-size: 17px; text-decoration: none"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "20",
									height: "20",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z" })
								}), "Escribir por WhatsApp"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; text-align: center; font-size: 13px; color: #5A4F48"),
								children: "Te respondemos en menos de 24 h"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("display: flex; align-items: center; gap: 12px; padding: 0 8px"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css("flex: 1; height: 1px; background: #DDD5C5") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; font-size: 13px; color: #6B6458"),
								children: "o"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: css("flex: 1; height: 1px; background: #DDD5C5") })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: enviarInfo,
						style: css("padding: 20px; border-radius: 22px; background: #FFFFFF; border: 1px solid #E0D9CB; display: flex; flex-direction: column; gap: 12px"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: css("display: flex; flex-direction: column; gap: 2px"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6B6458"),
									children: "Por correo · sin compromiso"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: css("margin: 0; font-size: 21px; font-weight: 700; color: #1A1714"),
									children: "Recibe más información"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: css("display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600"),
								children: ["Nombre", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									autoComplete: "name",
									value: nombre,
									onChange: (e) => setNombre(e.target.value),
									placeholder: "María Pérez",
									style: css("height: 50px; padding: 0 14px; border-radius: 12px; border: 1px solid #D8D0C0; font-size: 16px; font-family: inherit")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: css("display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 600"),
								children: ["Correo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									autoComplete: "email",
									value: correo,
									onChange: (e) => setCorreo(e.target.value),
									placeholder: "maria@correo.com",
									style: css("height: 50px; padding: 0 14px; border-radius: 12px; border: 1px solid #D8D0C0; font-size: 16px; font-family: inherit")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								style: css("display: flex; gap: 10px; align-items: flex-start; font-size: 13px; color: #5A4F48"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									required: true,
									checked: acepta,
									onChange: (e) => setAcepta(e.target.checked),
									style: css("width: 20px; height: 20px; margin: 0; flex: none")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Acepto la ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										children: "política de privacidad"
									}),
									"."
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: estado === "enviando",
								style: css("height: 52px; border: 1.5px solid #8C3A2F; border-radius: 26px; background: #FFFFFF; color: #8C3A2F; font-weight: 700; font-size: 16px; font-family: inherit"),
								children: estado === "enviando" ? "Enviando…" : "Enviarme información"
							}),
							estado === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; font-size: 14px; font-weight: 600; color: #2E6B47"),
								children: "Gracias. Te escribimos pronto con la información."
							}) : null,
							estado === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0; font-size: 14px; color: #8C3A2F"),
								children: errorMsg
							}) : null
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: css("padding: 48px 20px; background: #FFFFFF; border-top: 1px solid #E6E0D4; display: flex; flex-direction: column; gap: 14px"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 30px; line-height: 1.1; font-weight: 600; letter-spacing: -0.015em"),
					children: "Preguntas frecuentes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: css("display: flex; flex-direction: column; border-top: 1px solid #E0D9CB"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Cuándo empiezan los meses de gestión?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "Cuando el inmueble queda alquilado. El Pro trae seis meses y el VIP un año. Gastos e incidencias van aparte."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Qué no entra en el diagnóstico?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "Mudanza, retiro de muebles, pintura, staging y la sesión profesional de fotos. Eso es activación. El Básico incluye una limpieza superficial y el Pro una limpieza a fondo, ambas hasta 150 m²."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Qué incluye el Pro y el VIP además?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "Pro: revisión exhaustiva de luces, grifos, equipos y muebles, y checklist de documentos para alquilar o vender. VIP: consultas en Corpoelec, Hidrocapital y PDVSA Gas, y certificación de deuda del condominio y de la alcaldía."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Qué obras pueden hacer?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "Reparaciones, tuberías, iluminación, acabados, suelos, pintura, cocina, baños, equipos y muebles, mudanza, almacenamiento, limpieza, staging, fotografías y custodia de llaves."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Qué hago si ocupan mi vivienda?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "El contrato y la elección del inquilino son la primera barrera. Si alguien entra sin contrato, comete usurpación por invasión: es un delito y corresponde la desocupación del inmueble."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Dónde dejo los muebles que no quiero?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "Los retiramos, los guardamos o botamos lo dañado. El almacén se cotiza aparte, según el volumen y el tiempo."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Cómo pago el diagnóstico?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "Nos adaptamos a ti. Preferimos euros, USD o Bitcoin, y también aceptamos Zelle, Bizum, USDT y USDC, entre otras. El diagnóstico se paga antes de agendar la visita."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Puedo cancelar o cambiar la fecha?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "No hacemos cancelaciones. Puedes reagendar con al menos 48 h de aviso."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Y si mi inmueble tiene más de 150 m²?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "Acordamos un extra por los metros restantes o priorizamos las zonas que quieras."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿El presupuesto de obra puede cambiar?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "No: es cerrado. Antes de cerrarlo lo adaptamos a tus necesidades y gustos. Por eso pedimos el 60% por adelantado y el 40% al comenzar."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Emiten factura?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "Sí. Tenemos presencia jurídica en varios países y emitimos factura si la necesitas."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Trabajan en mi zona?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "Lo confirmamos por WhatsApp antes de cobrar nada: verificamos que tenemos equipo en la zona de tu inmueble y podemos actuar allí."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							style: css("border-bottom: 1px solid #E0D9CB"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								style: css("display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 0; font-weight: 600; font-size: 16px; color: #1A1714"),
								children: ["¿Cuánto cuesta mantener sin inquilino?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "faq-plus",
									style: css("flex: none; font-size: 22px; line-height: 1; color: #8C3A2F"),
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: css("margin: 0 0 18px; color: #5A4F48; font-size: 15px"),
								children: "Entre 100 y 150 USD al mes, según el nivel de servicio que necesites."
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				style: css("padding: 32px 20px 40px; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #5A4F48"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: css("margin: 0; font-family: Fraunces, Georgia, serif; font-size: 20px; font-weight: 600; color: #1A1714"),
						children: "Activa Venezuela"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: css("margin: 0"),
						children: "Grupo Zaquen, C.A. · RIF J-40003364-0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: css("margin: 0"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:info@activavenezuela.com",
							children: "info@activavenezuela.com"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: css("display: flex; gap: 18px; flex-wrap: wrap"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Privacidad"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Cookies"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								children: "Aviso legal"
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };

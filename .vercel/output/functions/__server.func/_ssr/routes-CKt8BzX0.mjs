import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CKt8BzX0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMPTY = {
	nombre: "",
	whatsapp: "",
	correo: "",
	tipo: "",
	objetivo: "",
	municipio: "",
	direccion: ""
};
function Home() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	function openForm() {
		setOpen(true);
		setError("");
	}
	function update(key, value) {
		setForm((prev) => ({
			...prev,
			[key]: value
		}));
	}
	function submit(event) {
		event.preventDefault();
		if (!form.nombre.trim() || !form.whatsapp.trim() || !form.correo.trim() || !form.tipo || !form.objetivo || !form.municipio || !form.direccion.trim()) {
			setError("Completa nombre, WhatsApp, correo, tipo, objetivo, municipio y dirección.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
			setError("El correo no se ve válido.");
			return;
		}
		const w = window;
		w.dataLayer = w.dataLayer || [];
		w.dataLayer.push({
			event: "generar_lead",
			tipo: form.tipo,
			objetivo: form.objetivo,
			municipio: form.municipio
		});
		w.fbq?.("track", "Lead");
		const prev = JSON.parse(localStorage.getItem("va-diagnosticos") || "[]");
		localStorage.setItem("va-diagnosticos", JSON.stringify([{
			...form,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}, ...prev].slice(0, 20)));
		setError("");
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-cream/90 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-2xl tracking-tight",
						children: ["Activa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brick",
							children: "Venezuela"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: openForm,
						className: "rounded-full bg-brick px-5 py-2.5 text-sm font-semibold text-cream",
						children: "Pide tu diagnóstico"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative isolate min-h-[78vh] overflow-hidden text-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/avila.jpg",
						alt: "El Ávila sobre Caracas",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[78vh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl",
								children: [
									"Tu inmueble en",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flag-edge",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-flag-y",
												children: "Ven"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-flag-b",
												children: "ezu"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-flag-r",
												children: "ela"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"generando ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pulse-heart text-income",
										children: "ingresos"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl font-sub text-lg text-cream/90 sm:text-xl",
								children: "Vives fuera y no tienes tiempo, nosotros lo gestionamos por ti."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: openForm,
								className: "mt-8 rounded-full bg-brick px-7 py-3.5 text-base font-semibold text-cream",
								children: "Pide tu diagnóstico"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mx-auto max-w-3xl text-center font-display text-4xl leading-tight tracking-tight sm:text-5xl",
							children: [
								"Si tu inmueble está parado y ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-flag-r",
									children: "sangrando efectivo"
								}),
								", esto te interesa."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-10 max-w-3xl border-y border-ink/15 py-8 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl",
								children: ["Convertimos el pago de gastos en ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-income-ink",
									children: "ingresos"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-sub text-lg text-muted",
								children: "y te devolvemos el control sin esfuerzo."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 grid gap-4 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
									className: "rounded-card border border-line bg-paper p-7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl leading-snug",
										children: "Cada mes pagas mantenimiento, condominio, luz, agua y otros gastos de tu propiedad que no produce nada."
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
									className: "rounded-card border border-line bg-paper p-7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl leading-snug",
										children: "¿Cuánto dinero has dejado de percibir durante todos estos años?"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
									className: "rounded-card border border-line bg-paper p-7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl leading-snug",
										children: "Deja de cubrir gastos, y empieza a descubrir ingresos."
									})
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-paper py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mx-auto max-w-3xl text-center font-display text-4xl leading-tight tracking-tight sm:text-5xl",
						children: [
							"De gasto a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-income-ink",
								children: "ingreso"
							}),
							".",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Todo empieza por el diagnóstico."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-5 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-line bg-cream p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl text-brick",
										children: "1"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl",
										children: "Diagnóstico"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-sub text-muted",
										children: "Visita presencial. Informe de estructura, estado y qué hacer según tu estrategia, con presupuesto."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-line bg-cream p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl text-brick",
										children: "2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl",
										children: "Activación"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-sub text-muted",
										children: "Las obras que necesitas. A medida."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-card border border-line bg-cream p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl text-brick",
										children: "3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl",
										children: "Gestión"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-sub text-muted",
										children: "Inquilino o comprador, contrato y cobro en tu divisa. Incidencias, condominio y reportes."
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-sm font-semibold tracking-[0.18em] text-brick uppercase",
							children: "1 · Diagnóstico"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-center font-display text-4xl tracking-tight sm:text-5xl",
							children: "Tres formas de empezar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-center font-sub text-lg text-muted",
							children: "Visita de un Ing. Civil visado por el CIV. El informe cubre estructura, estado por ambiente y presupuesto para alquilar, vender o mantener."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 grid items-start gap-6 lg:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card border border-line bg-paper p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl",
											children: "Básico"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-4 font-display text-5xl tracking-tight",
											children: ["1.000 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl text-muted",
												children: "USD"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 font-sub text-muted",
											children: "Para saber cómo está y cuánto cuesta cada camino."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "mt-6 space-y-3 border-t border-line pt-6 font-sub text-[17px] leading-snug",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Visita presencial y mediciones" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Informe estructural post-sismo" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Estado operativo, ambiente por ambiente, con fotos y video" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Presupuesto para alquilar, vender y mantener" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Inventario de lo que hay" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Checklist de documentos para alquilar o vender" })
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card border-2 border-ink bg-paper p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl",
											children: "Pro"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-4 font-display text-5xl tracking-tight",
											children: ["2.500 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl text-muted",
												children: "USD"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 font-sub text-muted",
											children: "El informe, y el inmueble vacío y limpio."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "mt-6 space-y-3 border-t border-line pt-6 font-sub text-[17px] leading-snug",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Todo el básico" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Retiro y disposición de muebles dañados" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mudanza de lo que quieras conservar" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Limpieza profunda" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Listo para enseñar, sin obra todavía" })
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card bg-ink p-8 text-cream",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl",
											children: "VIP"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-4 font-display text-5xl tracking-tight text-income",
											children: ["5.000 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl text-cream/60",
												children: "USD"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 font-sub text-cream/70",
											children: "Para presentarlo como si ya estuviera en el mercado."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "mt-6 space-y-3 border-t border-cream/15 pt-6 font-sub text-[17px] leading-snug text-cream/90",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Todo el pro" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Propuesta de diseñador de interiores" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Staging del inmueble" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sesión de fotografías para mostrarlo" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Material listo para inquilino o comprador" })
											]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-12 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: openForm,
								className: "rounded-full bg-brick px-7 py-3.5 text-base font-semibold text-cream",
								children: "Pide tu diagnóstico"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm font-semibold tracking-[0.18em] text-brick uppercase",
						children: "2 · Activación"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-center font-display text-4xl tracking-tight sm:text-5xl",
						children: "Las obras que necesitas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-center font-sub text-lg text-muted",
						children: "A medida."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-12 grid max-w-4xl gap-x-16 gap-y-8 sm:grid-cols-2",
						children: [
							["Pintura", "General o por ambiente, según el camino."],
							["Reparaciones", "Tomas, sifones, filtraciones y tablero."],
							["Humedad", "Tratamiento de manchas y filtraciones."],
							["Cocina y baños", "Muebles y sanitarios que no sirven."],
							["Muebles", "Retiro, mudanza o lo que quieras guardar."],
							["Llaves", "Custodia y acceso, sin que viajes."]
						].map(([title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-ink/20 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sub text-muted",
								children: text
							})]
						}, title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-sm font-semibold tracking-[0.18em] text-brick uppercase",
							children: "3 · Gestión"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-center font-display text-4xl tracking-tight sm:text-5xl",
							children: "Dinero a tu cuenta"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-center font-sub text-lg text-muted",
							children: "En tu divisa de preferencia."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 grid gap-10 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl",
									children: "Alquilar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-sub text-lg text-muted",
									children: "Buscamos inquilino, firmamos el contrato y cobramos el canon."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl",
									children: "Vender"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-sub text-lg text-muted",
									children: "Buscamos comprador y te acompañamos al cierre. Una vez."
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl",
									children: "Mantener"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-sub text-lg text-muted",
									children: "Condominio, servicios y lo que se rompa. Sin inquilino."
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-12 max-w-2xl text-center font-sub text-muted",
							children: "En los tres: incidencias, mantenimiento y reportes."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 py-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-5xl tracking-tight",
						children: "Pide tu diagnóstico"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-md font-sub text-lg text-muted",
						children: "Te contactamos lo antes posible."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: openForm,
						className: "mt-8 rounded-full bg-brick px-8 py-3.5 text-base font-semibold text-cream",
						children: "Pide tu diagnóstico"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line px-5 py-8 text-center text-sm text-muted",
				children: "Activa Venezuela"
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-0 sm:items-center sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "diag-title",
					className: "max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-cream p-6 shadow-2xl sm:rounded-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "diag-title",
							className: "font-display text-3xl tracking-tight",
							children: sent ? "Listo" : "Solicitar el diagnóstico"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sub text-sm text-muted",
							children: "Una llamada corta. El resto lo vemos ahí."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							className: "rounded-full px-3 py-1 text-sm text-muted",
							children: "Cerrar"
						})]
					}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-line bg-paper p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl",
								children: "Recibimos tu solicitud."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-sub text-muted",
								children: "Te escribimos por WhatsApp para coordinar una llamada de 15 minutos."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setOpen(false),
								className: "mt-5 w-full rounded-full bg-brick py-3 font-semibold text-cream",
								children: "Cerrar"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "grid gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Nombre completo *",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									autoComplete: "name",
									value: form.nombre,
									onChange: (e) => update("nombre", e.target.value),
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "WhatsApp *",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "tel",
									inputMode: "tel",
									autoComplete: "tel",
									value: form.whatsapp,
									onChange: (e) => update("whatsapp", e.target.value),
									placeholder: "+58 412 000 0000",
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Correo electrónico *",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									autoComplete: "email",
									value: form.correo,
									onChange: (e) => update("correo", e.target.value),
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "text-sm font-medium",
									children: "Tipo de diagnóstico *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-3 gap-2",
									children: TIPOS.map((tipo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Choice, {
										name: "tipo",
										value: tipo.id,
										current: form.tipo,
										onChange: (value) => update("tipo", value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold",
											children: tipo.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs opacity-80",
											children: tipo.precio
										})]
									}, tipo.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								className: "grid gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "text-sm font-medium",
									children: "Objetivo con el inmueble *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-3 gap-2",
									children: OBJETIVOS.map((objetivo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
										name: "objetivo",
										value: objetivo,
										current: form.objetivo,
										onChange: (value) => update("objetivo", value),
										children: objetivo
									}, objetivo))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Municipio *",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									required: true,
									value: form.municipio,
									onChange: (e) => update("municipio", e.target.value),
									className: inputClass,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Selecciona"
									}), MUNICIPIOS.map((municipio) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: municipio }, municipio))]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Dirección *",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									autoComplete: "street-address",
									value: form.direccion,
									onChange: (e) => update("direccion", e.target.value),
									placeholder: "Urbanización, edificio, apartamento",
									className: inputClass
								})
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-brick",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "mt-1 rounded-full bg-brick py-3.5 font-semibold text-cream",
								children: "Solicitar el diagnóstico"
							})
						]
					})]
				})
			}) : null
		]
	});
}
var TIPOS = [
	{
		id: "Básico",
		precio: "1.000 USD"
	},
	{
		id: "Pro",
		precio: "2.500 USD"
	},
	{
		id: "VIP",
		precio: "5.000 USD"
	}
];
var OBJETIVOS = [
	"Mantener",
	"Alquilar",
	"Vender"
];
var MUNICIPIOS = [
	"Baruta",
	"Chacao",
	"El Hatillo",
	"Libertador",
	"Sucre",
	"Otro"
];
var inputClass = "w-full rounded-xl border border-line bg-paper px-3 py-3 text-base text-ink outline-none focus:border-ink";
function Choice({ name, value, current, onChange, children }) {
	const on = current === value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `cursor-pointer rounded-xl border px-2 py-2.5 text-center text-sm ${on ? "border-ink bg-ink text-cream" : "border-line bg-paper text-ink"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "sr-only",
			type: "radio",
			name,
			value,
			checked: on,
			required: true,
			onChange: () => onChange(value)
		}), children]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1.5 text-sm font-medium",
		children: [label, children]
	});
}
//#endregion
export { Home as component };

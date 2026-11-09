import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D_cAwfD_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMPTY = {
	nombre: "",
	correo: "",
	whatsapp: "",
	objetivo: "",
	direccion: "",
	metros: "",
	anos: "",
	habs: "",
	banos: "",
	presupuesto: "",
	estado: "",
	documentos: "",
	comentarios: ""
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
		if (!form.nombre.trim() || !form.correo.trim() || !form.whatsapp.trim() || !form.objetivo || !form.direccion.trim()) {
			setError("Completa nombre, correo, WhatsApp, qué quieres hacer y la dirección.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
			setError("El correo no se ve válido.");
			return;
		}
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
						children: ["Venezuela ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brick",
							children: "Activa"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-5xl px-5 py-20",
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
								className: "rounded-card border border-line bg-cream p-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl leading-snug",
									children: "Cada mes pagas mantenimiento, condominio, luz, agua y otros gastos de tu propiedad que no produce nada."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "rounded-card border border-line bg-cream p-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl leading-snug",
									children: "¿Qué tal te vendría rentabilizar algo que ya es de tu propiedad?"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "rounded-card border border-line bg-cream p-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl leading-snug",
									children: "La verdadera forma de generar ingresos de forma pasiva."
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-center font-display text-4xl tracking-tight sm:text-5xl",
							children: "Qué hacemos por ti"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-2xl text-center font-sub text-lg text-muted",
							children: "Del diagnóstico al pago, pasando por las obras y mantenimientos."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid gap-5 md:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card border border-line bg-paper p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-3xl text-brick",
											children: "1"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-2xl",
											children: "Diagnóstico con datos reales"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 font-sub text-muted",
											children: "Un Ing. Civil hace la visita: mediciones, estado de la propiedad, fotos y video. Te entregamos un informe claro de qué se debería hacer para alquilar, vender o esperar, y qué ingresos puedes obtener."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card border border-line bg-paper p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-3xl text-brick",
											children: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-2xl",
											children: "Obras, reformas y remodelación"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 font-sub text-muted",
											children: "Determinamos juntos el mejor camino de lo que necesita y su beneficio. Presupuestos, seguimiento, ejecución y control de calidad. Dejamos la propiedad lista para alquilar o vender. Tú apruebas cada paso."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card border border-line bg-paper p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-3xl text-brick",
											children: "3"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-2xl",
											children: "Gestión integral"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 font-sub text-muted",
											children: "Buscamos inquilino o comprador, hacemos y firmamos contratos, cobramos y transferimos en tu divisa de preferencia, gestionamos incidencias, presupuestos y mantenimiento. Tú recibes dinero y reportes."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-card border border-line bg-paper p-7 md:col-span-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-display text-3xl text-brick",
											children: ["4 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base tracking-wide text-muted",
												children: "· transversal a las tres"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-2xl",
											children: "Seguridad y transparencia"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 max-w-3xl font-sub text-muted",
											children: "Equipo con más de 20 años de experiencia y titulaciones de universidades nacionales. Foto reportaje, videos e informes regulares. Nada se hace sin tu aprobación, y todo sin tu esfuerzo."
										})
									]
								})
							]
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
				children: "Venezuela Activa"
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
							children: sent ? "Listo" : "Pide tu diagnóstico"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sub text-sm text-muted",
							children: "Te contactamos lo antes posible."
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
								children: "Te contactamos lo antes posible por correo o WhatsApp."
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
								label: "Nombre *",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: form.nombre,
									onChange: (e) => update("nombre", e.target.value),
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Correo *",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									value: form.correo,
									onChange: (e) => update("correo", e.target.value),
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "WhatsApp *",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "tel",
									value: form.whatsapp,
									onChange: (e) => update("whatsapp", e.target.value),
									placeholder: "+58 o internacional",
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "¿Qué quieres hacer con tu propiedad? *",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									required: true,
									value: form.objetivo,
									onChange: (e) => update("objetivo", e.target.value),
									className: inputClass,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Selecciona"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Alquilar" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Vender" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Dirección completa de la propiedad *",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: form.direccion,
									onChange: (e) => update("direccion", e.target.value),
									placeholder: "Urbanización, edificio, apartamento, ciudad",
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Metros aproximados o exactos",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.metros,
									onChange: (e) => update("metros", e.target.value),
									placeholder: "Ej. 120 m² o no lo sé",
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Habitaciones",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.habs,
									onChange: (e) => update("habs", e.target.value),
									placeholder: "Ej. 3",
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Baños",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.banos,
									onChange: (e) => update("banos", e.target.value),
									placeholder: "Ej. 2",
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Presupuesto orientativo (USD)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: form.presupuesto,
									onChange: (e) => update("presupuesto", e.target.value),
									className: inputClass,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Selecciona"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "De 0 a 2.000" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "De 2.000 a 5.000" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Más de 5.000" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "¿Cuántos años lleva sin mantenimiento o uso?",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.anos,
									onChange: (e) => update("anos", e.target.value),
									placeholder: "Ej. 3 años",
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Estado actual de la propiedad",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: form.estado,
									onChange: (e) => update("estado", e.target.value),
									placeholder: "¿Habitada, vacía, reparaciones, deudas de condominio?",
									className: `${inputClass} min-h-20`
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "¿Tienes cédula catastral o documentos?",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.documentos,
									onChange: (e) => update("documentos", e.target.value),
									placeholder: "Sí / No / Puedo conseguirla",
									className: inputClass
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Comentarios",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: form.comentarios,
									onChange: (e) => update("comentarios", e.target.value),
									className: `${inputClass} min-h-20`
								})
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-brick",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "mt-1 rounded-full bg-brick py-3.5 font-semibold text-cream",
								children: "Enviar diagnóstico"
							})
						]
					})]
				})
			}) : null
		]
	});
}
var inputClass = "w-full rounded-xl border border-line bg-paper px-3 py-3 text-base text-ink outline-none focus:border-ink";
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1.5 text-sm font-medium",
		children: [label, children]
	});
}
//#endregion
export { Home as component };

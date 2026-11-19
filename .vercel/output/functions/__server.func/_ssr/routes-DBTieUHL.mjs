import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBTieUHL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** División municipal de Venezuela. Fuente: Wikipedia «Municipalities of Venezuela», 335 municipios, consultada el 18 nov 2026. */
var MUNICIPIOS = {
	"Distrito Capital": ["Libertador"],
	Amazonas: [
		"Alto Orinoco",
		"Atabapo",
		"Atures",
		"Autana",
		"Manapiare",
		"Maroa",
		"Río Negro"
	],
	"Anzoátegui": [
		"Anaco",
		"Aragua",
		"Diego Bautista Urbaneja",
		"Fernando de Peñalver",
		"Francisco del Carmen Carvajal",
		"Francisco de Miranda",
		"Guanta",
		"Independencia",
		"José Gregorio Monagas",
		"Juan Antonio Sotillo",
		"Juan Manuel Cajigal",
		"Libertad",
		"Manuel Ezequiel Bruzual",
		"Pedro María Freites",
		"Píritu",
		"San José de Guanipa",
		"San Juan de Capistrano",
		"Santa Ana",
		"Simón Bolívar",
		"Simón Rodríguez",
		"Sir Arthur McGregor"
	],
	Apure: [
		"Achaguas",
		"Biruaca",
		"Muñoz",
		"Páez",
		"Pedro Camejo",
		"Rómulo Gallegos",
		"San Fernando"
	],
	Aragua: [
		"Bolívar",
		"Camatagua",
		"Francisco Linares Alcántara",
		"Girardot",
		"José Ángel Lamas",
		"José Félix Ribas",
		"José Rafael Revenga",
		"Libertador",
		"Mario Briceño Iragorry",
		"Ocumare de la Costa de Oro",
		"San Casimiro",
		"San Sebastián",
		"Santiago Mariño",
		"Santos Michelena",
		"Sucre",
		"Tovar",
		"Urdaneta",
		"Zamora"
	],
	Barinas: [
		"Alberto Arvelo Torrealba",
		"Andrés Eloy Blanco",
		"Antonio José de Sucre",
		"Arismendi",
		"Barinas",
		"Bolívar",
		"Cruz Paredes",
		"Ezequiel Zamora",
		"Obispos",
		"Pedraza",
		"Rojas",
		"Sosa"
	],
	"Bolívar": [
		"Caroní",
		"Cedeño",
		"El Callao",
		"Gran Sabana",
		"Heres",
		"Padre Pedro Chien",
		"Piar",
		"Raúl Leoni",
		"Roscio",
		"Sifontes",
		"Sucre"
	],
	Carabobo: [
		"Bejuma",
		"Carlos Arvelo",
		"Diego Ibarra",
		"Guacara",
		"Juan José Mora",
		"Libertador",
		"Los Guayos",
		"Miranda",
		"Montalbán",
		"Naguanagua",
		"Puerto Cabello",
		"San Diego",
		"San Joaquín",
		"Valencia"
	],
	Cojedes: [
		"Anzoátegui",
		"Falcón",
		"Girardot",
		"Lima Blanco",
		"Pao de San Juan Bautista",
		"Ricaurte",
		"Rómulo Gallegos",
		"San Carlos",
		"Tinaco"
	],
	"Delta Amacuro": [
		"Antonio Díaz",
		"Casacoima",
		"Pedernales",
		"Tucupita"
	],
	"Falcón": [
		"Acosta",
		"Bolívar",
		"Buchivacoa",
		"Cacique Manaure",
		"Carirubana",
		"Colina",
		"Dabajuro",
		"Democracia",
		"Falcón",
		"Federación",
		"Jacura",
		"Los Taques",
		"Mauroa",
		"Miranda",
		"Monseñor Iturriza",
		"Palmasola",
		"Petit",
		"Píritu",
		"San Francisco",
		"Silva",
		"Sucre",
		"Tocópero",
		"Unión",
		"Urumaco",
		"Zamora"
	],
	"Guárico": [
		"Camaguán",
		"Chaguaramas",
		"El Socorro",
		"Francisco de Miranda",
		"José Félix Ribas",
		"José Tadeo Monagas",
		"Juan Germán Roscio",
		"Julián Mellado",
		"Las Mercedes",
		"Leonardo Infante",
		"Ortiz",
		"Pedro Zaraza",
		"San Gerónimo de Guayabal",
		"San José de Guaribe",
		"Santa María de Ipire"
	],
	Lara: [
		"Andrés Eloy Blanco",
		"Crespo",
		"Iribarren",
		"Jiménez",
		"Morán",
		"Palavecino",
		"Simón Planas",
		"Torres",
		"Urdaneta"
	],
	"La Guaira": ["Vargas"],
	"Mérida": [
		"Alberto Adriani",
		"Andrés Bello",
		"Antonio Pinto Salinas",
		"Aricagua",
		"Arzobispo Chacón",
		"Campo Elías",
		"Caracciolo Parra Olmedo",
		"Cardenal Quintero",
		"Guaraque",
		"Julio César Salas",
		"Justo Briceño",
		"Libertador",
		"Miranda",
		"Obispo Ramos de Lora",
		"Padre Noguera",
		"Pueblo Llano",
		"Rangel",
		"Rivas Dávila",
		"Santos Marquina",
		"Sucre",
		"Tovar",
		"Tulio Febres Cordero",
		"Zea"
	],
	Miranda: [
		"Acevedo",
		"Andrés Bello",
		"Baruta",
		"Brión",
		"Buroz",
		"Carrizal",
		"Chacao",
		"Cristóbal Rojas",
		"El Hatillo",
		"Guaicaipuro",
		"Independencia",
		"Lander",
		"Los Salias",
		"Páez",
		"Paz Castillo",
		"Pedro Gual",
		"Plaza",
		"Simón Bolívar",
		"Sucre",
		"Urdaneta",
		"Zamora"
	],
	Monagas: [
		"Acosta",
		"Aguasay",
		"Bolívar",
		"Caripe",
		"Cedeño",
		"Ezequiel Zamora",
		"Libertador",
		"Maturín",
		"Piar",
		"Punceres",
		"Santa Bárbara",
		"Sotillo",
		"Uracoa"
	],
	"Nueva Esparta": [
		"Antolín del Campo",
		"Arismendi",
		"Antonio Díaz",
		"García",
		"Gómez",
		"Maneiro",
		"Marcano",
		"Mariño",
		"Península de Macanao",
		"Tubores",
		"Villalba"
	],
	Portuguesa: [
		"Agua Blanca",
		"Araure",
		"Esteller",
		"Guanare",
		"Guanarito",
		"Monseñor José Vicente de Unda",
		"Ospino",
		"Páez",
		"Papelón",
		"San Genaro de Boconoito",
		"San Rafael de Onoto",
		"Santa Rosalía",
		"Sucre",
		"Turén"
	],
	Sucre: [
		"Andrés Eloy Blanco",
		"Andrés Mata",
		"Arismendi",
		"Benítez",
		"Bermúdez",
		"Bolívar",
		"Cajigal",
		"Cruz Salmerón Acosta",
		"Libertador",
		"Mariño",
		"Mejía",
		"Montes",
		"Ribero",
		"Sucre",
		"Valdez"
	],
	"Táchira": [
		"Andrés Bello",
		"Antonio Rómulo Costa",
		"Ayacucho",
		"Bolívar",
		"Cárdenas",
		"Córdoba",
		"Fernández Feo",
		"Francisco de Miranda",
		"García de Hevia",
		"Guásimos",
		"Independencia",
		"Jáuregui",
		"José María Vargas",
		"Junín",
		"Libertad",
		"Libertador",
		"Lobatera",
		"Michelena",
		"Panamericano",
		"Pedro María Ureña",
		"Rafael Urdaneta",
		"Samuel Darío Maldonado",
		"San Cristóbal",
		"San Judas Tadeo",
		"Seboruco",
		"Simón Rodríguez",
		"Sucre",
		"Torbes",
		"Uribante"
	],
	Trujillo: [
		"Andrés Bello",
		"Boconó",
		"Bolívar",
		"Candelaria",
		"Carache",
		"Escuque",
		"José Felipe Márquez Cañizales",
		"José Vicente Campo Elías",
		"La Ceiba",
		"Miranda",
		"Monte Carmelo",
		"Motatán",
		"Pampán",
		"Pampanito",
		"Rafael Rangel",
		"San Rafael de Carvajal",
		"Sucre",
		"Trujillo",
		"Urdaneta",
		"Valera"
	],
	Yaracuy: [
		"Arístides Bastidas",
		"Bolívar",
		"Bruzual",
		"Cocorote",
		"Independencia",
		"José Antonio Páez",
		"La Trinidad",
		"Manuel Monge",
		"Nirgua",
		"Peña",
		"San Felipe",
		"Sucre",
		"Urachiche",
		"Veroes"
	],
	Zulia: [
		"Almirante Padilla",
		"Baralt",
		"Cabimas",
		"Catatumbo",
		"Colón",
		"Francisco Javier Pulgar",
		"Jesús Enrique Lossada",
		"Jesús María Semprún",
		"La Cañada de Urdaneta",
		"Lagunillas",
		"Machiques de Perijá",
		"Mara",
		"Maracaibo",
		"Miranda",
		"Páez",
		"Rosario de Perijá",
		"San Francisco",
		"Santa Rita",
		"Simón Bolívar",
		"Sucre",
		"Valmore Rodríguez"
	]
};
var ESTADOS = Object.keys(MUNICIPIOS);
var EMPTY = {
	nombre: "",
	whatsapp: "",
	correo: "",
	tipo: "",
	objetivo: "",
	estado: "",
	municipio: "",
	direccion: "",
	comentarios: ""
};
function Home() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)(EMPTY);
	function openForm() {
		setOpen(true);
		setError("");
	}
	function update(key, value) {
		setForm((prev) => ({
			...prev,
			[key]: value,
			...key === "estado" ? { municipio: "" } : {}
		}));
	}
	function submit(event) {
		event.preventDefault();
		if (!form.nombre.trim() || !form.whatsapp.trim() || !form.correo.trim() || !form.tipo || !form.objetivo || !form.estado || !form.municipio || !form.direccion.trim()) {
			setError("Completa nombre, WhatsApp, correo, tipo, objetivo, estado, municipio y dirección.");
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
			estado: form.estado,
			municipio: form.municipio
		});
		w.fbq?.("track", "Lead");
		const prev = JSON.parse(localStorage.getItem("va-diagnosticos") || "[]");
		localStorage.setItem("va-diagnosticos", JSON.stringify([{
			...form,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}, ...prev].slice(0, 20)));
		setError("");
		setToast(true);
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
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-lg",
					onClick: (event) => event.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						"aria-label": "Cerrar",
						className: "absolute -top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream text-xl leading-none text-ink shadow-lg sm:-right-3",
						children: "×"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "dialog",
						"aria-modal": "true",
						"aria-labelledby": "diag-title",
						className: "max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-cream p-6 shadow-2xl sm:rounded-3xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "diag-title",
							className: "mb-6 text-center font-display text-2xl tracking-tight",
							children: ["Activa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brick",
								children: "Venezuela"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
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
										placeholder: "María Pérez",
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
										placeholder: "maria@correo.com",
										className: inputClass
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
									className: "grid gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-sm font-medium",
										children: "Tipo de diagnóstico *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2",
										children: TIPOS.map((tipo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Choice, {
											name: "tipo",
											value: tipo.id,
											current: form.tipo,
											onChange: (value) => update("tipo", value),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-semibold",
												children: tipo.id
											}), tipo.precio ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs opacity-80",
												children: tipo.precio
											}) : null]
										}, tipo.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
									className: "grid gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
										className: "text-sm font-medium",
										children: "Objetivo con el inmueble *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2",
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
									label: "Estado *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										required: true,
										value: form.estado,
										onChange: (e) => update("estado", e.target.value),
										className: inputClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Selecciona"
										}), ESTADOS.map((estado) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: estado }, estado))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Municipio *",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										required: true,
										value: form.municipio,
										disabled: !form.estado,
										onChange: (e) => update("municipio", e.target.value),
										className: inputClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: form.estado ? "Selecciona" : "Primero el estado"
										}), (MUNICIPIOS[form.estado] ?? []).map((municipio) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: municipio }, municipio))]
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									label: "Comentarios",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: form.comentarios,
										onChange: (e) => update("comentarios", e.target.value),
										rows: 4,
										placeholder: "120 m², tiene jardín, 6 años sin mantenimiento",
										className: inputClass
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-normal text-muted",
										children: "Entre más información, mejor te confirmamos por WhatsApp."
									})]
								}),
								error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-brick",
									children: error
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "mt-1 rounded-full bg-brick py-3.5 font-semibold text-cream",
									children: "Enviar solicitud"
								})
							]
						})]
					})]
				})
			}) : null,
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Celebration, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-6 left-1/2 z-[90] w-[min(92vw,28rem)] -translate-x-1/2 rounded-2xl bg-ink px-5 py-4 text-center text-cream shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: "Recibimos tu solicitud."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-sub text-cream/80",
					children: "Te escribimos por WhatsApp para confirmar o enviarte el pago. Después agendamos la visita."
				})]
			})] }) : null
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
	},
	{
		id: "Exclusivo",
		precio: ""
	}
];
var OBJETIVOS = [
	"Mantener",
	"Alquilar",
	"Vender",
	"No sé todavía"
];
var inputClass = "w-full rounded-xl border border-line bg-paper px-3 py-3 text-base text-ink outline-none placeholder:text-[#b7b1a8] focus:border-ink";
function Celebration() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const colors = [
			"#f5c518",
			"#2457c5",
			"#c81e1e",
			"#85bb65",
			"#8c3a2f",
			"#fffdf9"
		];
		const bits = [];
		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		for (let i = 0; i < 160; i++) bits.push({
			x: Math.random() * window.innerWidth,
			y: -20 - Math.random() * window.innerHeight * .6,
			vx: (Math.random() - .5) * 2.2,
			vy: 2 + Math.random() * 3.2,
			g: .015,
			life: 1,
			color: colors[i % colors.length] ?? "#fffdf9",
			w: 6 + Math.random() * 7,
			h: 9 + Math.random() * 8,
			rot: Math.random() * 6,
			vr: (Math.random() - .5) * .25,
			spark: false
		});
		const burst = (x, y) => {
			for (let i = 0; i < 80; i++) {
				const angle = Math.PI * 2 * i / 80;
				const speed = 1.6 + Math.random() * 4.2;
				bits.push({
					x,
					y,
					vx: Math.cos(angle) * speed,
					vy: Math.sin(angle) * speed,
					g: .04,
					life: 1,
					color: colors[i % colors.length] ?? "#f5c518",
					w: 3,
					h: 3,
					rot: 0,
					vr: 0,
					spark: true
				});
			}
		};
		const spots = [
			.22,
			.72,
			.48,
			.8,
			.3
		];
		let frame = 0;
		let raf = 0;
		const tick = () => {
			frame += 1;
			if (frame === 6 || frame === 36 || frame === 68 || frame === 100 || frame === 132) {
				const spot = spots[Math.floor(frame / 30)] ?? .5;
				burst(canvas.width * spot, canvas.height * (.22 + frame % 5 * .06));
			}
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (const bit of bits) {
				bit.x += bit.vx;
				bit.y += bit.vy;
				bit.vy += bit.g;
				bit.rot += bit.vr;
				if (bit.spark) bit.life -= .014;
				ctx.save();
				ctx.globalAlpha = Math.max(bit.life, 0);
				ctx.translate(bit.x, bit.y);
				ctx.rotate(bit.rot);
				ctx.fillStyle = bit.color;
				ctx.fillRect(-bit.w / 2, -bit.h / 2, bit.w, bit.h);
				ctx.restore();
			}
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		const stop = window.setTimeout(() => cancelAnimationFrame(raf), 5600);
		window.addEventListener("resize", resize);
		return () => {
			cancelAnimationFrame(raf);
			window.clearTimeout(stop);
			window.removeEventListener("resize", resize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "pointer-events-none fixed inset-0 z-[80]",
		"aria-hidden": true
	});
}
function Choice({ name, value, current, onChange, children }) {
	const on = current === value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: `flex h-full cursor-pointer flex-col items-center justify-center rounded-xl border px-2 py-2.5 text-center text-sm ${on ? "border-ink bg-ink text-cream" : "border-line bg-paper text-ink"}`,
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

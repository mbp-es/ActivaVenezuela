import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ESTADOS, MUNICIPIOS } from "@/lib/municipios";

export const Route = createFileRoute("/")({ component: Home });

type FormState = {
  nombre: string;
  whatsapp: string;
  correo: string;
  tipo: string;
  objetivo: string;
  estado: string;
  municipio: string;
  direccion: string;
  comentarios: string;
};

const EMPTY: FormState = {
  nombre: "",
  whatsapp: "",
  correo: "",
  tipo: "",
  objetivo: "",
  estado: "",
  municipio: "",
  direccion: "",
  comentarios: "",
};

function Home() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>(EMPTY);

  function openForm() {
    setOpen(true);
    setError("");
  }

  function update(key: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value, ...(key === "estado" ? { municipio: "" } : {}) }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!form.nombre.trim() || !form.whatsapp.trim() || !form.correo.trim() || !form.tipo || !form.objetivo || !form.estado || !form.municipio || !form.direccion.trim()) {
      setError("Completa nombre, WhatsApp, correo, tipo, objetivo, estado, municipio y dirección.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
      setError("El correo no se ve válido.");
      return;
    }
    const w = window as Window & { dataLayer?: Record<string, unknown>[]; fbq?: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "generar_lead", tipo: form.tipo, objetivo: form.objetivo, estado: form.estado, municipio: form.municipio });
    w.fbq?.("track", "Lead");
    const prev = JSON.parse(localStorage.getItem("va-diagnosticos") || "[]") as FormState[];
    localStorage.setItem("va-diagnosticos", JSON.stringify([{ ...form, at: new Date().toISOString() }, ...prev].slice(0, 20)));
    setError("");
    setToast(true);
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <p className="font-display text-2xl tracking-tight">
            Activa <span className="text-brick">Venezuela</span>
          </p>
          <button
            type="button"
            onClick={openForm}
            className="rounded-full bg-brick px-5 py-2.5 text-sm font-semibold text-cream"
          >
            Pide tu diagnóstico
          </button>
        </div>
      </header>

      <section className="relative isolate min-h-[78vh] overflow-hidden text-cream">
        <img
          src="/avila.jpg"
          alt="El Ávila sobre Caracas"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
          <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl">
            Tu inmueble en{" "}
            <span className="flag-edge">
              <span className="text-flag-y">Ven</span>
              <span className="text-flag-b">ezu</span>
              <span className="text-flag-r">ela</span>
            </span>
            <br />
            generando <span className="pulse-heart text-income">ingresos</span>
          </h1>
          <p className="mt-6 max-w-xl font-sub text-lg text-cream/90 sm:text-xl">
            Vives fuera y no tienes tiempo, nosotros lo gestionamos por ti.
          </p>
          <button
            type="button"
            onClick={openForm}
            className="mt-8 rounded-full bg-brick px-7 py-3.5 text-base font-semibold text-cream"
          >
            Pide tu diagnóstico
          </button>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-5">
        <h2 className="mx-auto max-w-3xl text-center font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          Si tu inmueble está parado y <span className="text-flag-r">sangrando efectivo</span>, esto te interesa.
        </h2>

        <div className="mx-auto mt-10 max-w-3xl border-y border-ink/15 py-8 text-center">
          <p className="font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl">
            Convertimos el pago de gastos en <span className="text-income-ink">ingresos</span>
          </p>
          <p className="mt-3 font-sub text-lg text-muted">y te devolvemos el control sin esfuerzo.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-card border border-line bg-paper p-7">
            <p className="font-display text-2xl leading-snug">
              Cada mes pagas mantenimiento, condominio, luz, agua y otros gastos de tu propiedad que no produce nada.
            </p>
          </article>
          <article className="rounded-card border border-line bg-paper p-7">
            <p className="font-display text-2xl leading-snug">
              ¿Cuánto dinero has dejado de percibir durante todos estos años?
            </p>
          </article>
          <article className="rounded-card border border-line bg-paper p-7">
            <p className="font-display text-2xl leading-snug">
              Deja de cubrir gastos, y empieza a descubrir ingresos.
            </p>
          </article>
        </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-5">
        <h2 className="mx-auto max-w-3xl text-center font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          De gasto a <span className="text-income-ink">ingreso</span>.<br />Todo empieza por el diagnóstico.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <article className="rounded-card border border-line bg-cream p-7">
            <p className="font-display text-3xl text-brick">1</p>
            <h3 className="mt-3 font-display text-2xl">Diagnóstico</h3>
            <p className="mt-3 font-sub text-muted">
              Visita presencial. Informe de estructura, estado y qué hacer según tu estrategia, con presupuesto.
            </p>
          </article>
          <article className="rounded-card border border-line bg-cream p-7">
            <p className="font-display text-3xl text-brick">2</p>
            <h3 className="mt-3 font-display text-2xl">Activación</h3>
            <p className="mt-3 font-sub text-muted">
              Las obras que necesitas. A medida.
            </p>
          </article>
          <article className="rounded-card border border-line bg-cream p-7">
            <p className="font-display text-3xl text-brick">3</p>
            <h3 className="mt-3 font-display text-2xl">Gestión</h3>
            <p className="mt-3 font-sub text-muted">
              Inquilino o comprador, contrato y cobro en tu divisa. Incidencias, condominio y reportes.
            </p>
          </article>
        </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-sm font-semibold tracking-[0.18em] text-brick uppercase">1 · Diagnóstico</p>
          <h2 className="mt-3 text-center font-display text-4xl tracking-tight sm:text-5xl">Tres formas de empezar</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-sub text-lg text-muted">
            Visita de un Ing. Civil visado por el CIV. El informe cubre la estructura y el estado del inmueble. El presupuesto de obra entra en el Pro y en el VIP.
          </p>

          <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
            <article className="rounded-card border border-line bg-paper p-8">
              <h3 className="font-display text-3xl">Básico</h3>
              <p className="mt-4 font-display text-5xl tracking-tight">1.000 <span className="text-2xl text-muted">USD</span></p>
              <p className="mt-4 font-sub text-muted">Cómo está, y cuánto sale mantener, alquilar o vender sin hacer obra.</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6 font-sub text-[17px] leading-snug">
                <li>Visita presencial y mediciones</li>
                <li>Informe estructural post-sismo</li>
                <li>Estado operativo, ambiente por ambiente, con fotos y video</li>
                <li>Presupuesto para mantener, alquilar y vender, tal como está</li>
                <li>El presupuesto de obra no está incluido</li>
                <li>Inventario de lo que hay</li>
                <li>Limpieza superficial del inmueble y superficies, hasta 150 m²</li>
              </ul>
            </article>

            <article className="rounded-card border-2 border-ink bg-paper p-8">
              <h3 className="font-display text-3xl">Pro</h3>
              <p className="mt-4 font-display text-5xl tracking-tight">2.500 <span className="text-2xl text-muted">USD</span></p>
              <p className="mt-4 font-sub text-muted">Revisamos cada ambiente y te mostramos la obra, con precio.</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6 font-sub text-[17px] leading-snug">
                <li>Todo lo del básico</li>
                <li>Revisión exhaustiva de luces, grifos, equipos y muebles</li>
                <li>Checklist de documentos necesarios para alquilar o vender</li>
                <li>Limpieza a fondo, hasta 150 m²</li>
                <li>Una propuesta de render modelo y su presupuesto de obra</li>
                <li>Seis meses de gestión, desde que el inmueble queda alquilado. Gastos e incidencias van aparte</li>
              </ul>
            </article>

            <article className="rounded-card bg-ink p-8 text-cream">
              <h3 className="font-display text-3xl">VIP</h3>
              <p className="mt-4 font-display text-5xl tracking-tight text-income">5.000 <span className="text-2xl text-cream/60">USD</span></p>
              <p className="mt-4 font-sub text-cream/70">Los papeles de los servicios, tres opciones de obra y un año de gestión.</p>
              <ul className="mt-6 space-y-3 border-t border-cream/15 pt-6 font-sub text-[17px] leading-snug text-cream/90">
                <li>Todo lo del pro</li>
                <li>Consulta en Corpoelec</li>
                <li>Consulta en Hidrocapital</li>
                <li>Consulta en PDVSA Gas</li>
                <li>Solicitud de certificación de deuda del condominio</li>
                <li>Certificación de deuda de la alcaldía</li>
                <li>Tres renders, con hasta tres cambios y sus presupuestos de obra</li>
                <li>Un año de gestión, desde que el inmueble queda alquilado. Gastos e incidencias van aparte</li>
              </ul>
            </article>
          </div>

          <p className="mt-12 text-center">
            <button type="button" onClick={openForm} className="rounded-full bg-brick px-7 py-3.5 text-base font-semibold text-cream">
              Pide tu diagnóstico
            </button>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-center text-sm font-semibold tracking-[0.18em] text-brick uppercase">2 · Activación</p>
        <h2 className="mt-3 text-center font-display text-4xl tracking-tight sm:text-5xl">Las obras que necesitas</h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-sub text-lg text-muted">
          A medida.
        </p>
        <div className="mx-auto mt-12 grid max-w-4xl gap-x-16 gap-y-8 sm:grid-cols-2">
          {[
            ["Pintura", "General, por ambiente, o un retoque blanco."],
            ["Bombillos", "Cambio de los principales."],
            ["Reparaciones", "Tomas, sifones, filtraciones y tablero."],
            ["Humedad", "Tratamiento de manchas y filtraciones."],
            ["Cocina y baños", "Muebles y sanitarios que no sirven."],
            ["Muebles", "Retiro, mudanza o lo que quieras guardar."],
            ["Limpieza", "A fondo por encima de 150 m², o si no viene en el diagnóstico."],
            ["Staging", "Para presentarlo a un inquilino o comprador."],
            ["Fotografías", "Sesión profesional del inmueble listo."],
            ["Llaves", "Custodia y acceso, sin que viajes."],
          ].map(([title, text]) => (
            <div key={title} className="border-t border-ink/20 pt-4">
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-1 font-sub text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-sm font-semibold tracking-[0.18em] text-brick uppercase">3 · Gestión</p>
          <h2 className="mt-3 text-center font-display text-4xl tracking-tight sm:text-5xl">Dinero a tu cuenta</h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-sub text-lg text-muted">
            En tu divisa de preferencia.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <article>
              <h3 className="font-display text-3xl">Alquilar</h3>
              <p className="mt-3 font-sub text-lg text-muted">Buscamos inquilino, firmamos el contrato y cobramos el canon.</p>
            </article>
            <article>
              <h3 className="font-display text-3xl">Vender</h3>
              <p className="mt-3 font-sub text-lg text-muted">Buscamos comprador y te acompañamos al cierre. Una vez.</p>
            </article>
            <article>
              <h3 className="font-display text-3xl">Mantener</h3>
              <p className="mt-3 font-sub text-lg text-muted">Condominio, servicios y lo que se rompa. Sin inquilino.</p>
            </article>
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center font-sub text-muted">
            En los tres: incidencias, mantenimiento y reportes.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center font-display text-4xl tracking-tight sm:text-5xl">Antes de decidir</h2>
          <div className="mt-12 border-t border-line">
            {FAQ.map((item) => (
              <details key={item.q} className="group border-b border-line py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-2xl tracking-tight [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="mt-1 shrink-0 text-brick group-open:hidden">+</span>
                  <span className="mt-1 hidden shrink-0 text-brick group-open:inline">–</span>
                </summary>
                <p className="mt-3 max-w-2xl font-sub text-lg text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center">
        <h2 className="font-display text-5xl tracking-tight">Pide tu diagnóstico</h2>
        <p className="mx-auto mt-4 max-w-md font-sub text-lg text-muted">Te contactamos lo antes posible.</p>
        <button
          type="button"
          onClick={openForm}
          className="mt-8 rounded-full bg-brick px-8 py-3.5 text-base font-semibold text-cream"
        >
          Pide tu diagnóstico
        </button>
      </section>

      <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted">
        Activa Venezuela
      </footer>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-0 sm:items-center sm:p-6" onClick={() => setOpen(false)}>
          <div className="relative w-full max-w-lg" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute -top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream text-xl leading-none text-ink shadow-lg sm:-right-3"
            >
              ×
            </button>
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="diag-title"
              className="max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-cream p-6 shadow-2xl sm:rounded-3xl"
            >
            <h2 id="diag-title" className="mb-6 text-center font-display text-2xl tracking-tight">
              Activa <span className="text-brick">Venezuela</span>
            </h2>

            <form onSubmit={submit} className="grid gap-3">
                <Field label="Nombre completo *">
                  <input required autoComplete="name" value={form.nombre} onChange={(e) => update("nombre", e.target.value)} placeholder="María Pérez" className={inputClass} />
                </Field>
                <Field label="WhatsApp *">
                  <input required type="tel" inputMode="tel" autoComplete="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="+58 412 000 0000" className={inputClass} />
                </Field>
                <Field label="Correo electrónico *">
                  <input required type="email" autoComplete="email" value={form.correo} onChange={(e) => update("correo", e.target.value)} placeholder="maria@correo.com" className={inputClass} />
                </Field>
                <fieldset className="grid gap-1.5">
                  <legend className="text-sm font-medium">Tipo de diagnóstico *</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {TIPOS.map((tipo) => (
                      <Choice key={tipo.id} name="tipo" value={tipo.id} current={form.tipo} onChange={(value) => update("tipo", value)}>
                        <span className="block font-semibold">{tipo.id}</span>
                        {tipo.precio ? <span className="block text-xs opacity-80">{tipo.precio}</span> : null}
                      </Choice>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="grid gap-1.5">
                  <legend className="text-sm font-medium">Objetivo con el inmueble *</legend>
                  <div className="grid grid-cols-2 gap-2">
                    {OBJETIVOS.map((objetivo) => (
                      <Choice key={objetivo} name="objetivo" value={objetivo} current={form.objetivo} onChange={(value) => update("objetivo", value)}>
                        {objetivo}
                      </Choice>
                    ))}
                  </div>
                </fieldset>
                <Field label="Estado *">
                  <select required value={form.estado} onChange={(e) => update("estado", e.target.value)} className={inputClass}>
                    <option value="">Selecciona</option>
                    {ESTADOS.map((estado) => (
                      <option key={estado}>{estado}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Municipio *">
                  <select required value={form.municipio} disabled={!form.estado} onChange={(e) => update("municipio", e.target.value)} className={inputClass}>
                    <option value="">{form.estado ? "Selecciona" : "Primero el estado"}</option>
                    {(MUNICIPIOS[form.estado] ?? []).map((municipio) => (
                      <option key={municipio}>{municipio}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Dirección *">
                  <input required autoComplete="street-address" value={form.direccion} onChange={(e) => update("direccion", e.target.value)} placeholder="Urbanización, edificio, apartamento" className={inputClass} />
                </Field>
                <Field label="Comentarios">
                  <textarea value={form.comentarios} onChange={(e) => update("comentarios", e.target.value)} rows={4} placeholder="120 m², tiene jardín, 6 años sin mantenimiento" className={inputClass} />
                  <span className="font-normal text-muted">Entre más información, mejor te confirmamos por WhatsApp.</span>
                </Field>
                {error ? <p className="text-sm text-brick">{error}</p> : null}
                <button type="submit" className="mt-1 rounded-full bg-brick py-3.5 font-semibold text-cream">
                  Enviar solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      {toast ? (
        <>
          <Celebration />
          <div className="fixed bottom-6 left-1/2 z-[90] w-[min(92vw,28rem)] -translate-x-1/2 rounded-2xl bg-ink px-5 py-4 text-center text-cream shadow-2xl">
            <p className="font-display text-2xl">Recibimos tu solicitud.</p>
            <p className="mt-1 font-sub text-cream/80">Te escribimos por WhatsApp para confirmar o enviarte el pago. Después agendamos la visita.</p>
          </div>
        </>
      ) : null}
    </div>
  );
}

const FAQ = [
  {
    q: "¿El básico incluye el presupuesto de obra?",
    a: "No. Sales con el diagnóstico y con lo que costaría mantener, alquilar o vender tal como está. El presupuesto de mejoras se pide aparte.",
  },
  {
    q: "¿El Pro y el VIP incluyen la obra?",
    a: "No. Incluyen el presupuesto para ejecutarla. La obra se hace en la activación y se paga aparte.",
  },
  {
    q: "¿Cuándo empiezan los meses de gestión?",
    a: "Cuando el inmueble queda alquilado. El Pro trae seis meses y el VIP un año. Gastos e incidencias van aparte.",
  },
  {
    q: "¿Qué no entra en el diagnóstico?",
    a: "Mudanza, retiro de muebles, pintura, staging y la sesión profesional de fotos. Eso es activación. El Básico incluye una limpieza superficial y el Pro una limpieza a fondo, ambas hasta 150 m².",
  },
  {
    q: "¿Qué hago si ocupan mi vivienda?",
    a: "El contrato y la elección del inquilino son la primera barrera. Si alguien entra sin contrato, o no entrega el inmueble, lo documentamos, te avisamos y se sigue la vía legal. No prometemos un plazo de desalojo. Eso no depende solo de nosotros.",
  },
  {
    q: "¿Qué pasa si dejan de pagar?",
    a: "Cobramos nosotros. Al primer atraso te avisamos y reclamamos según el contrato. No te adelantamos el alquiler si el inquilino no paga.",
  },
  {
    q: "¿Quién responde por los daños?",
    a: "Hay inventario al entrar y al salir, con fotos. El depósito cubre lo que no es desgaste normal. Lo que exceda se reclama al inquilino. No somos un seguro.",
  },
  {
    q: "¿Dónde dejo los muebles si no los quiero en la vivienda?",
    a: "Los retiramos, los guardamos o botamos lo dañado. El almacén se cotiza aparte, según el volumen y el tiempo. No tiene un precio fijo.",
  },
  {
    q: "¿Quién hace la mudanza?",
    a: "La coordinamos nosotros. No entra en el diagnóstico. Entra cuando se activa el inmueble.",
  },
  {
    q: "¿Qué documentos necesito para alquilar?",
    a: "Documento de propiedad, tu cédula o pasaporte y RIF. Si firma otra persona, un poder. Del edificio, lo que pida el condominio. Del inquilino, cédula y el contrato.",
  },
  {
    q: "¿Qué documentos necesito para vender?",
    a: "Documento de propiedad, tu cédula y las solvencias que pidan el registro y el condominio. Si estás fuera, un poder. La lista exacta sale al ver el caso.",
  },
];

const TIPOS = [
  { id: "Básico", precio: "1.000 USD" },
  { id: "Pro", precio: "2.500 USD" },
  { id: "VIP", precio: "5.000 USD" },
  { id: "Exclusivo", precio: "" },
];

const OBJETIVOS = ["Mantener", "Alquilar", "Vender", "No sé todavía"];

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-3 py-3 text-base text-ink outline-none placeholder:text-[#b7b1a8] focus:border-ink";

function Celebration() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const colors = ["#f5c518", "#2457c5", "#c81e1e", "#85bb65", "#8c3a2f", "#fffdf9"];
    type Bit = { x: number; y: number; vx: number; vy: number; g: number; life: number; color: string; w: number; h: number; rot: number; vr: number; spark: boolean };
    const bits: Bit[] = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    for (let i = 0; i < 160; i++) {
      bits.push({
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * window.innerHeight * 0.6,
        vx: (Math.random() - 0.5) * 2.2,
        vy: 2 + Math.random() * 3.2,
        g: 0.015,
        life: 1,
        color: colors[i % colors.length] ?? "#fffdf9",
        w: 6 + Math.random() * 7,
        h: 9 + Math.random() * 8,
        rot: Math.random() * 6,
        vr: (Math.random() - 0.5) * 0.25,
        spark: false,
      });
    }
    const burst = (x: number, y: number) => {
      for (let i = 0; i < 80; i++) {
        const angle = (Math.PI * 2 * i) / 80;
        const speed = 1.6 + Math.random() * 4.2;
        bits.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          g: 0.04,
          life: 1,
          color: colors[i % colors.length] ?? "#f5c518",
          w: 3, h: 3, rot: 0, vr: 0, spark: true,
        });
      }
    };
    const spots = [0.22, 0.72, 0.48, 0.8, 0.3];
    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 1;
      if (frame === 6 || frame === 36 || frame === 68 || frame === 100 || frame === 132) {
        const spot = spots[Math.floor(frame / 30)] ?? 0.5;
        burst(canvas.width * spot, canvas.height * (0.22 + (frame % 5) * 0.06));
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const bit of bits) {
        bit.x += bit.vx;
        bit.y += bit.vy;
        bit.vy += bit.g;
        bit.rot += bit.vr;
        if (bit.spark) bit.life -= 0.014;
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
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-[80]" aria-hidden />;
}

function Choice({
  name,
  value,
  current,
  onChange,
  children,
}: {
  name: string;
  value: string;
  current: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  const on = current === value;
  return (
    <label
      className={`flex h-full cursor-pointer flex-col items-center justify-center rounded-xl border px-2 py-2.5 text-center text-sm ${on ? "border-ink bg-ink text-cream" : "border-line bg-paper text-ink"}`}
    >
      <input className="sr-only" type="radio" name={name} value={value} checked={on} required onChange={() => onChange(value)} />
      {children}
    </label>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      {label}
      {children}
    </label>
  );
}

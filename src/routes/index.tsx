import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";

export const Route = createFileRoute("/")({ component: Home });

type FormState = {
  nombre: string;
  whatsapp: string;
  correo: string;
  tipo: string;
  objetivo: string;
  municipio: string;
  direccion: string;
};

const EMPTY: FormState = {
  nombre: "",
  whatsapp: "",
  correo: "",
  tipo: "",
  objetivo: "",
  municipio: "",
  direccion: "",
};

function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>(EMPTY);

  function openForm() {
    setOpen(true);
    setError("");
  }

  function update(key: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!form.nombre.trim() || !form.whatsapp.trim() || !form.correo.trim() || !form.tipo || !form.objetivo || !form.municipio || !form.direccion.trim()) {
      setError("Completa nombre, WhatsApp, correo, tipo, objetivo, municipio y dirección.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
      setError("El correo no se ve válido.");
      return;
    }
    const w = window as Window & { dataLayer?: Record<string, unknown>[]; fbq?: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "generar_lead", tipo: form.tipo, objetivo: form.objetivo, municipio: form.municipio });
    w.fbq?.("track", "Lead");
    const prev = JSON.parse(localStorage.getItem("va-diagnosticos") || "[]") as FormState[];
    localStorage.setItem("va-diagnosticos", JSON.stringify([{ ...form, at: new Date().toISOString() }, ...prev].slice(0, 20)));
    setError("");
    setSent(true);
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
            Visita de un Ing. Civil visado por el CIV. El informe cubre estructura, estado por ambiente y presupuesto para alquilar, vender o mantener.
          </p>

          <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
            <article className="rounded-card border border-line bg-paper p-8">
              <h3 className="font-display text-3xl">Básico</h3>
              <p className="mt-4 font-display text-5xl tracking-tight">1.000 <span className="text-2xl text-muted">USD</span></p>
              <p className="mt-4 font-sub text-muted">Para saber cómo está y cuánto cuesta cada camino.</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6 font-sub text-[17px] leading-snug">
                <li>Visita presencial y mediciones</li>
                <li>Informe estructural post-sismo</li>
                <li>Estado operativo, ambiente por ambiente, con fotos y video</li>
                <li>Presupuesto para alquilar, vender y mantener</li>
                <li>Inventario de lo que hay</li>
                <li>Checklist de documentos para alquilar o vender</li>
              </ul>
            </article>

            <article className="rounded-card border-2 border-ink bg-paper p-8">
              <h3 className="font-display text-3xl">Pro</h3>
              <p className="mt-4 font-display text-5xl tracking-tight">2.500 <span className="text-2xl text-muted">USD</span></p>
              <p className="mt-4 font-sub text-muted">El informe, y el inmueble vacío y limpio.</p>
              <ul className="mt-6 space-y-3 border-t border-line pt-6 font-sub text-[17px] leading-snug">
                <li>Todo el básico</li>
                <li>Retiro y disposición de muebles dañados</li>
                <li>Mudanza de lo que quieras conservar</li>
                <li>Limpieza profunda</li>
                <li>Listo para enseñar, sin obra todavía</li>
              </ul>
            </article>

            <article className="rounded-card bg-ink p-8 text-cream">
              <h3 className="font-display text-3xl">VIP</h3>
              <p className="mt-4 font-display text-5xl tracking-tight text-income">5.000 <span className="text-2xl text-cream/60">USD</span></p>
              <p className="mt-4 font-sub text-cream/70">Para presentarlo como si ya estuviera en el mercado.</p>
              <ul className="mt-6 space-y-3 border-t border-cream/15 pt-6 font-sub text-[17px] leading-snug text-cream/90">
                <li>Todo el pro</li>
                <li>Propuesta de diseñador de interiores</li>
                <li>Staging del inmueble</li>
                <li>Sesión de fotografías para mostrarlo</li>
                <li>Material listo para inquilino o comprador</li>
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
            ["Pintura", "General o por ambiente, según el camino."],
            ["Reparaciones", "Tomas, sifones, filtraciones y tablero."],
            ["Humedad", "Tratamiento de manchas y filtraciones."],
            ["Cocina y baños", "Muebles y sanitarios que no sirven."],
            ["Muebles", "Retiro, mudanza o lo que quieras guardar."],
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
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-0 sm:items-center sm:p-6">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="diag-title"
            className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-cream p-6 shadow-2xl sm:rounded-3xl"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 id="diag-title" className="font-display text-3xl tracking-tight">
                  {sent ? "Listo" : "Solicitar el diagnóstico"}
                </h2>
                <p className="mt-1 font-sub text-sm text-muted">Una llamada corta. El resto lo vemos ahí.</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full px-3 py-1 text-sm text-muted"
              >
                Cerrar
              </button>
            </div>

            {sent ? (
              <div className="rounded-2xl border border-line bg-paper p-5">
                <p className="font-display text-2xl">Recibimos tu solicitud.</p>
                <p className="mt-2 font-sub text-muted">
                  Te escribimos por WhatsApp para coordinar una llamada de 15 minutos.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-5 w-full rounded-full bg-brick py-3 font-semibold text-cream"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-3">
                <Field label="Nombre completo *">
                  <input required autoComplete="name" value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className={inputClass} />
                </Field>
                <Field label="WhatsApp *">
                  <input required type="tel" inputMode="tel" autoComplete="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="+58 412 000 0000" className={inputClass} />
                </Field>
                <Field label="Correo electrónico *">
                  <input required type="email" autoComplete="email" value={form.correo} onChange={(e) => update("correo", e.target.value)} className={inputClass} />
                </Field>
                <fieldset className="grid gap-1.5">
                  <legend className="text-sm font-medium">Tipo de diagnóstico *</legend>
                  <div className="grid grid-cols-3 gap-2">
                    {TIPOS.map((tipo) => (
                      <Choice key={tipo.id} name="tipo" value={tipo.id} current={form.tipo} onChange={(value) => update("tipo", value)}>
                        <span className="block font-semibold">{tipo.id}</span>
                        <span className="block text-xs opacity-80">{tipo.precio}</span>
                      </Choice>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="grid gap-1.5">
                  <legend className="text-sm font-medium">Objetivo con el inmueble *</legend>
                  <div className="grid grid-cols-3 gap-2">
                    {OBJETIVOS.map((objetivo) => (
                      <Choice key={objetivo} name="objetivo" value={objetivo} current={form.objetivo} onChange={(value) => update("objetivo", value)}>
                        {objetivo}
                      </Choice>
                    ))}
                  </div>
                </fieldset>
                <Field label="Municipio *">
                  <select required value={form.municipio} onChange={(e) => update("municipio", e.target.value)} className={inputClass}>
                    <option value="">Selecciona</option>
                    {MUNICIPIOS.map((municipio) => (
                      <option key={municipio}>{municipio}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Dirección *">
                  <input required autoComplete="street-address" value={form.direccion} onChange={(e) => update("direccion", e.target.value)} placeholder="Urbanización, edificio, apartamento" className={inputClass} />
                </Field>
                {error ? <p className="text-sm text-brick">{error}</p> : null}
                <button type="submit" className="mt-1 rounded-full bg-brick py-3.5 font-semibold text-cream">
                  Solicitar el diagnóstico
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

const TIPOS = [
  { id: "Básico", precio: "1.000 USD" },
  { id: "Pro", precio: "2.500 USD" },
  { id: "VIP", precio: "5.000 USD" },
];

const OBJETIVOS = ["Mantener", "Alquilar", "Vender"];

const MUNICIPIOS = ["Baruta", "Chacao", "El Hatillo", "Libertador", "Sucre", "Otro"];

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-3 py-3 text-base text-ink outline-none focus:border-ink";

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
      className={`cursor-pointer rounded-xl border px-2 py-2.5 text-center text-sm ${on ? "border-ink bg-ink text-cream" : "border-line bg-paper text-ink"}`}
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

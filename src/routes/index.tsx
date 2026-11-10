import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";

export const Route = createFileRoute("/")({ component: Home });

type FormState = {
  nombre: string;
  correo: string;
  whatsapp: string;
  objetivo: string;
  direccion: string;
  metros: string;
  anos: string;
  habs: string;
  banos: string;
  presupuesto: string;
  estado: string;
  documentos: string;
  comentarios: string;
};

const EMPTY: FormState = {
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
  comentarios: "",
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
    if (!form.nombre.trim() || !form.correo.trim() || !form.whatsapp.trim() || !form.objetivo || !form.direccion.trim()) {
      setError("Completa nombre, correo, WhatsApp, qué quieres hacer y la dirección.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
      setError("El correo no se ve válido.");
      return;
    }
    const prev = JSON.parse(localStorage.getItem("va-diagnosticos") || "[]") as FormState[];
    localStorage.setItem("va-diagnosticos", JSON.stringify([{ ...form, at: new Date().toISOString() }, ...prev].slice(0, 20)));
    setError("");
      try {
      const w = window as unknown as { fbq?: (...args: unknown[]) => void; dataLayer?: unknown[] };
      w.fbq?.("track", "Lead");
      w.dataLayer?.push({ event: "diagnostico_enviado" });
    } catch {
      // el tracking nunca debe romper el envío del formulario
    } 
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <p className="font-display text-2xl tracking-tight">
            Venezuela <span className="text-brick">Activa</span>
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

      <section className="mx-auto max-w-5xl px-5 py-20">
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
          <article className="rounded-card border border-line bg-cream p-7">
            <p className="font-display text-2xl leading-snug">
              Cada mes pagas mantenimiento, condominio, luz, agua y otros gastos de tu propiedad que no produce nada.
            </p>
          </article>
          <article className="rounded-card border border-line bg-cream p-7">
            <p className="font-display text-2xl leading-snug">
              ¿Qué tal te vendría rentabilizar algo que ya es de tu propiedad?
            </p>
          </article>
          <article className="rounded-card border border-line bg-cream p-7">
            <p className="font-display text-2xl leading-snug">
              La verdadera forma de generar ingresos de forma pasiva.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-display text-4xl tracking-tight sm:text-5xl">Qué hacemos por ti</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center font-sub text-lg text-muted">
            Del diagnóstico al pago, pasando por las obras y mantenimientos.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <article className="rounded-card border border-line bg-paper p-7">
              <p className="font-display text-3xl text-brick">1</p>
              <h3 className="mt-3 font-display text-2xl">Diagnóstico con datos reales</h3>
              <p className="mt-3 font-sub text-muted">
                Un Ing. Civil hace la visita: mediciones, estado de la propiedad, fotos y video. Te entregamos un informe claro de qué se debería hacer para alquilar, vender o esperar, y qué ingresos puedes obtener.
              </p>
            </article>
            <article className="rounded-card border border-line bg-paper p-7">
              <p className="font-display text-3xl text-brick">2</p>
              <h3 className="mt-3 font-display text-2xl">Obras, reformas y remodelación</h3>
              <p className="mt-3 font-sub text-muted">
                Determinamos juntos el mejor camino de lo que necesita y su beneficio. Presupuestos, seguimiento, ejecución y control de calidad. Dejamos la propiedad lista para alquilar o vender. Tú apruebas cada paso.
              </p>
            </article>
            <article className="rounded-card border border-line bg-paper p-7">
              <p className="font-display text-3xl text-brick">3</p>
              <h3 className="mt-3 font-display text-2xl">Gestión integral</h3>
              <p className="mt-3 font-sub text-muted">
                Buscamos inquilino o comprador, hacemos y firmamos contratos, cobramos y transferimos en tu divisa de preferencia, gestionamos incidencias, presupuestos y mantenimiento. Tú recibes dinero y reportes.
              </p>
            </article>
            <article className="rounded-card border border-line bg-paper p-7 md:col-span-3">
              <p className="font-display text-3xl text-brick">4</p>
              <h3 className="mt-3 font-display text-2xl">Seguridad y transparencia</h3>
              <p className="mt-3 max-w-3xl font-sub text-muted">
                Equipo con más de 20 años de experiencia y titulaciones de universidades nacionales. Foto reportaje, videos e informes regulares. Nada se hace sin tu aprobación, y todo sin tu esfuerzo.
              </p>
            </article>
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
        Venezuela Activa
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
                  {sent ? "Listo" : "Pide tu diagnóstico"}
                </h2>
                <p className="mt-1 font-sub text-sm text-muted">Te contactamos lo antes posible.</p>
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
                  Te contactamos lo antes posible por correo o WhatsApp.
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
                <Field label="Nombre *">
                  <input required value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className={inputClass} />
                </Field>
                <Field label="Correo *">
                  <input required type="email" value={form.correo} onChange={(e) => update("correo", e.target.value)} className={inputClass} />
                </Field>
                <Field label="WhatsApp *">
                  <input required type="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder="+58 o internacional" className={inputClass} />
                </Field>
                <Field label="¿Qué quieres hacer con tu propiedad? *">
                  <select required value={form.objetivo} onChange={(e) => update("objetivo", e.target.value)} className={inputClass}>
                    <option value="">Selecciona</option>
                    <option>Alquilar</option>
                    <option>Vender</option>
                  </select>
                </Field>
                <Field label="Dirección completa de la propiedad *">
                  <input required value={form.direccion} onChange={(e) => update("direccion", e.target.value)} placeholder="Urbanización, edificio, apartamento, ciudad" className={inputClass} />
                </Field>
                <Field label="Metros aproximados o exactos">
                  <input value={form.metros} onChange={(e) => update("metros", e.target.value)} placeholder="Ej. 120 m² o no lo sé" className={inputClass} />
                </Field>
                <Field label="Habitaciones">
                  <input value={form.habs} onChange={(e) => update("habs", e.target.value)} placeholder="Ej. 3" className={inputClass} />
                </Field>
                <Field label="Baños">
                  <input value={form.banos} onChange={(e) => update("banos", e.target.value)} placeholder="Ej. 2" className={inputClass} />
                </Field>
                <Field label="Presupuesto orientativo (USD)">
                  <select value={form.presupuesto} onChange={(e) => update("presupuesto", e.target.value)} className={inputClass}>
                    <option value="">Selecciona</option>
                    <option>De 0 a 2.000</option>
                    <option>De 2.000 a 5.000</option>
                    <option>Más de 5.000</option>
                  </select>
                </Field>
                <Field label="¿Cuántos años lleva sin mantenimiento o uso?">
                  <input value={form.anos} onChange={(e) => update("anos", e.target.value)} placeholder="Ej. 3 años" className={inputClass} />
                </Field>
                <Field label="Estado actual de la propiedad">
                  <textarea value={form.estado} onChange={(e) => update("estado", e.target.value)} placeholder="¿Habitada, vacía, reparaciones, deudas de condominio?" className={`${inputClass} min-h-20`} />
                </Field>
                <Field label="¿Tienes cédula catastral o documentos?">
                  <input value={form.documentos} onChange={(e) => update("documentos", e.target.value)} placeholder="Sí / No / Puedo conseguirla" className={inputClass} />
                </Field>
                <Field label="Comentarios">
                  <textarea value={form.comentarios} onChange={(e) => update("comentarios", e.target.value)} className={`${inputClass} min-h-20`} />
                </Field>
                {error ? <p className="text-sm text-brick">{error}</p> : null}
                <button type="submit" className="mt-1 rounded-full bg-brick py-3.5 font-semibold text-cream">
                  Enviar diagnóstico
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-3 py-3 text-base text-ink outline-none focus:border-ink";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      {label}
      {children}
    </label>
  );
}

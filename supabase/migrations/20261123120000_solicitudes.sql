create table if not exists public.solicitudes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  whatsapp text not null,
  correo text not null,
  tipo text not null,
  objetivo text not null,
  estado text not null,
  municipio text not null,
  direccion text not null,
  comentarios text
);

alter table public.solicitudes enable row level security;

revoke all on table public.solicitudes from anon, authenticated;
grant insert on table public.solicitudes to anon, authenticated;

drop policy if exists "envio publico" on public.solicitudes;
create policy "envio publico"
  on public.solicitudes
  for insert
  to anon, authenticated
  with check (true);

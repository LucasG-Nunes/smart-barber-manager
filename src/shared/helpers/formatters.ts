/**
 * BarberStack — Helpers / Formatters
 * Funções utilitárias puras (sem side effects)
 */

// ─── Moeda ────────────────────────────────────────
export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

// ─── Data & Hora ──────────────────────────────────
export const formatDate = (date: Date | string): string =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));

export const formatTime = (date: Date | string): string =>
  new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));

export const formatDateShort = (date: Date | string): string =>
  new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  }).format(new Date(date));

export const formatDuration = (minutes: number): string => {
  if (minutes < 60) return `${minutes}min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
};

export const formatRelativeTime = (date: Date | string): string => {
  const diff = Date.now() - new Date(date).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "agora";
  if (mins < 60) return `${mins}min atrás`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h atrás`;
  return formatDate(date);
};

// ─── Percentual ───────────────────────────────────
export const formatPercent = (value: number, decimals = 0): string =>
  `${value.toFixed(decimals)}%`;

// ─── String Utils ─────────────────────────────────
export const getInitials = (name: string): string =>
  name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");

export const truncate = (str: string, maxLength: number): string =>
  str.length > maxLength ? `${str.slice(0, maxLength)}…` : str;

// ─── Número ───────────────────────────────────────
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

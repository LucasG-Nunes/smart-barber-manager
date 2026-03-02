/**
 * BarberStack — Design Tokens
 * Identidade Visual: Ultra Dark / Cyber-Engineering
 * Glassmorphism com acentos Neon Cyan
 */

export const Colors = {
  // ─── Backgrounds ────────────────────────────────
  bg: {
    primary: "#0a0a0a", // tela principal
    secondary: "#111111", // cards / painéis
    tertiary: "#161616", // hover / pressed states
    elevated: "#1a1a1a", // modais, bottom sheets
    glass: "rgba(255, 255, 255, 0.04)", // glassmorphism base
    glassBorder: "rgba(255, 255, 255, 0.08)", // borda glass sutil
  },

  // ─── Accents ────────────────────────────────────
  accent: {
    cyan: "#00d2ff", // neon cyan — cor principal de destaque
    cyanDim: "rgba(0, 210, 255, 0.15)", // cyan com opacidade p/ backgrounds
    cyanGlow: "rgba(0, 210, 255, 0.35)", // glow mais forte (shadows)
    success: "#00ffaa", // verde neon — confirmado, pago
    successDim: "rgba(0, 255, 170, 0.15)",
    warning: "#ffaa00", // âmbar — pendente, atenção
    warningDim: "rgba(255, 170, 0, 0.15)",
    danger: "#ff4466", // vermelho — erro, cancelado
    dangerDim: "rgba(255, 68, 102, 0.15)",
    purple: "#9945ff", // roxo — destaque secundário
    purpleDim: "rgba(153, 69, 255, 0.15)",
  },

  // ─── Text ────────────────────────────────────────
  text: {
    primary: "#ffffff", // títulos, valores principais
    secondary: "rgba(255,255,255,0.60)", // subtítulos, labels
    tertiary: "rgba(255,255,255,0.35)", // placeholders, desabilitados
    inverse: "#0a0a0a", // texto sobre fundo claro
    accent: "#00d2ff", // links, valores em destaque cyan
    success: "#00ffaa",
    warning: "#ffaa00",
    danger: "#ff4466",
  },

  // ─── Borders ────────────────────────────────────
  border: {
    subtle: "#1e1e1e", // bordas muito sutis
    default: "#222222", // padrão — tab bar, divisores
    medium: "#2a2a2a", // cards com mais contraste
    accent: "#00d2ff", // borda ativa / selecionada
    glass: "rgba(255, 255, 255, 0.06)",
  },

  // ─── Status (para badges de agendamento) ────────
  status: {
    confirmed: "#00ffaa",
    confirmedBg: "rgba(0, 255, 170, 0.12)",
    pending: "#ffaa00",
    pendingBg: "rgba(255, 170, 0, 0.12)",
    inProgress: "#00d2ff",
    inProgressBg: "rgba(0, 210, 255, 0.12)",
    cancelled: "#ff4466",
    cancelledBg: "rgba(255, 68, 102, 0.12)",
    available: "#2a9d5c",
    availableBg: "rgba(42, 157, 92, 0.12)",
  },

  // ─── Overlay ────────────────────────────────────
  overlay: {
    light: "rgba(0, 0, 0, 0.4)",
    medium: "rgba(0, 0, 0, 0.65)",
    heavy: "rgba(0, 0, 0, 0.85)",
  },

  // ─── Chart / DataViz ────────────────────────────
  chart: {
    primary: "#00d2ff",
    secondary: "#00ffaa",
    tertiary: "#9945ff",
    grid: "rgba(255, 255, 255, 0.06)",
    tooltip: "#1a1a1a",
  },
} as const;

export type ColorKeys = typeof Colors;

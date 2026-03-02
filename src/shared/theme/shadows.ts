/**
 * BarberStack — Shadow & Glow Tokens
 * Efeitos de neon glow para o tema Cyber-Engineering
 *
 * ATENÇÃO: No React Native, `shadow*` funciona no iOS.
 * Para Android use `elevation`. Recomendamos usar ambos juntos.
 *
 * Para o efeito neon real, combine a sombra com uma borda colorida fina.
 */

import { ViewStyle } from "react-native";

type ShadowStyle = Pick<
  ViewStyle,
  | "shadowColor"
  | "shadowOffset"
  | "shadowOpacity"
  | "shadowRadius"
  | "elevation"
>;

export const Shadows = {
  // ─── Sombras neutras (profundidade) ────────────
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  } as ShadowStyle,

  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  } as ShadowStyle,

  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 8,
  } as ShadowStyle,

  // ─── Neon Glow — Cyan (#00d2ff) ─────────────────
  glowCyanSm: {
    shadowColor: "#00d2ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3,
  } as ShadowStyle,

  glowCyan: {
    shadowColor: "#00d2ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 12,
    elevation: 6,
  } as ShadowStyle,

  glowCyanLg: {
    shadowColor: "#00d2ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
  } as ShadowStyle,

  // ─── Neon Glow — Success (#00ffaa) ──────────────
  glowSuccess: {
    shadowColor: "#00ffaa",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  } as ShadowStyle,

  // ─── Neon Glow — Warning (#ffaa00) ──────────────
  glowWarning: {
    shadowColor: "#ffaa00",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  } as ShadowStyle,

  // ─── Neon Glow — Danger (#ff4466) ───────────────
  glowDanger: {
    shadowColor: "#ff4466",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  } as ShadowStyle,

  // ─── Neon Glow — Purple (#9945ff) ───────────────
  glowPurple: {
    shadowColor: "#9945ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  } as ShadowStyle,

  // ─── Tab bar icon glow (menor, p/ ícones) ───────
  iconGlow: {
    shadowColor: "#00d2ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 4,
  } as ShadowStyle,
} as const;

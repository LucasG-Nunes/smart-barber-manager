/**
 * BarberStack — Typography Tokens
 * Hierarquia tipográfica consistente para toda a app
 */
import { TextStyle } from "react-native";

export const FontSize = {
  "2xs": 10,
  xs: 11,
  sm: 12,
  md: 13,
  base: 14,
  lg: 16,
  xl: 18,
  "2xl": 20,
  "3xl": 24,
  "4xl": 28,
  "5xl": 32,
  "6xl": 40,
} as const;

export const FontWeight = {
  regular: "400" as TextStyle["fontWeight"],
  medium: "500" as TextStyle["fontWeight"],
  semibold: "600" as TextStyle["fontWeight"],
  bold: "700" as TextStyle["fontWeight"],
  extrabold: "800" as TextStyle["fontWeight"],
} as const;

export const LineHeight = {
  tight: 1.2,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.65,
} as const;

export const LetterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
  widest: 2,
  caps: 1.5, // para ALL CAPS labels
} as const;

/**
 * Estilos tipográficos pré-definidos (use como base nos componentes)
 * Ex: { ...Typography.h1, color: Colors.text.primary }
 */
export const Typography = {
  // ─── Display / Headings ────────────────────────
  display: {
    fontSize: FontSize["5xl"],
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  } as TextStyle,

  h1: {
    fontSize: FontSize["4xl"],
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  } as TextStyle,

  h2: {
    fontSize: FontSize["3xl"],
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  } as TextStyle,

  h3: {
    fontSize: FontSize["2xl"],
    fontWeight: FontWeight.semibold,
    letterSpacing: LetterSpacing.tight,
  } as TextStyle,

  h4: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.semibold,
  } as TextStyle,

  // ─── Metric / Número grande de destaque ────────
  metric: {
    fontSize: FontSize["4xl"],
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  } as TextStyle,

  metricSm: {
    fontSize: FontSize["2xl"],
    fontWeight: FontWeight.bold,
    letterSpacing: LetterSpacing.tight,
  } as TextStyle,

  // ─── Body ───────────────────────────────────────
  bodyLg: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.regular,
  } as TextStyle,

  body: {
    fontSize: FontSize.base,
    fontWeight: FontWeight.regular,
  } as TextStyle,

  bodySm: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.regular,
  } as TextStyle,

  // ─── UI / Labels ────────────────────────────────
  labelLg: {
    fontSize: FontSize.base,
    fontWeight: FontWeight.semibold,
    letterSpacing: LetterSpacing.wide,
  } as TextStyle,

  label: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    letterSpacing: LetterSpacing.wide,
  } as TextStyle,

  labelSm: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.semibold,
    letterSpacing: LetterSpacing.caps,
    textTransform: "uppercase" as TextStyle["textTransform"],
  } as TextStyle,

  // ─── Caption / Micro ────────────────────────────
  caption: {
    fontSize: FontSize.xs,
    fontWeight: FontWeight.regular,
  } as TextStyle,

  micro: {
    fontSize: FontSize["2xs"],
    fontWeight: FontWeight.medium,
    letterSpacing: LetterSpacing.wide,
  } as TextStyle,

  // ─── Button ─────────────────────────────────────
  buttonLg: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.semibold,
    letterSpacing: LetterSpacing.wide,
  } as TextStyle,

  button: {
    fontSize: FontSize.base,
    fontWeight: FontWeight.semibold,
    letterSpacing: LetterSpacing.wide,
  } as TextStyle,

  buttonSm: {
    fontSize: FontSize.sm,
    fontWeight: FontWeight.semibold,
    letterSpacing: LetterSpacing.wide,
  } as TextStyle,
} as const;

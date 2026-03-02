/**
 * BarberStack — Spacing & Layout Tokens
 * Sistema de 4pt grid
 */

export const Spacing = {
  // ─── Base Scale (4pt grid) ─────────────────────
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  "2xl": 32,
  "3xl": 40,
  "4xl": 48,
  "5xl": 64,

  // ─── Semantic ──────────────────────────────────
  screenPadding: 16, // padding horizontal padrão de telas
  cardPadding: 16, // padding interno de cards
  cardPaddingLg: 20,
  sectionGap: 24, // espaço entre seções
  itemGap: 12, // espaço entre itens de lista
  componentGap: 8, // espaço entre elementos dentro de um componente
} as const;

export const BorderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  full: 9999, // completamente arredondado (pills, avatares)

  // ─── Semantic ──────────────────────────────────
  card: 16,
  button: 12,
  badge: 6,
  avatar: 9999,
  input: 12,
  modal: 20,
  chip: 8,
} as const;

export const Layout = {
  // ─── Tab Bar ───────────────────────────────────
  tabBarHeight: 70,

  // ─── Header ────────────────────────────────────
  headerHeight: 60,

  // ─── Common widths ─────────────────────────────
  avatarSm: 28,
  avatarMd: 36,
  avatarLg: 44,
  avatarXl: 56,

  // ─── Icon sizes ────────────────────────────────
  iconSm: 16,
  iconMd: 20,
  iconLg: 24,
} as const;

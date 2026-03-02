/**
 * BarberStack — Constantes da Aplicação
 */

export const APP_NAME = "BarberStack";
export const APP_VERSION = "1.0.0";

// ─── API ────────────────────────────────────────────
export const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:3333";
export const API_TIMEOUT = 10_000;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REGISTER: "/auth/register",
    ME: "/auth/me",
  },
  BARBERS: {
    LIST: "/barbers",
    DETAIL: (id: string) => `/barbers/${id}`,
    SLOTS: (id: string) => `/barbers/${id}/slots`,
  },
  APPOINTMENTS: {
    LIST: "/appointments",
    CREATE: "/appointments",
    DETAIL: (id: string) => `/appointments/${id}`,
    CANCEL: (id: string) => `/appointments/${id}/cancel`,
  },
  SERVICES: {
    LIST: "/services",
  },
  PAYMENTS: {
    PIX: "/payments/pix",
    WEBHOOK: "/payments/webhook",
  },
  ANALYTICS: {
    OVERVIEW: "/analytics/overview",
  },
};

// ─── Storage Keys ─────────────────────────────────
export const STORAGE_KEYS = {
  AUTH_TOKEN: "@barberstack:token",
  USER_DATA: "@barberstack:user",
  ORGANIZATION: "@barberstack:org",
};

// ─── Appointment Status ───────────────────────────
export const APPOINTMENT_STATUS = {
  PENDING_PAYMENT: "PENDING_PAYMENT",
  CONFIRMED: "CONFIRMED",
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  NO_SHOW: "NO_SHOW",
};

export type AppointmentStatus = keyof typeof APPOINTMENT_STATUS;

// ─── User Roles ────────────────────────────────────
export const USER_ROLES = {
  OWNER: "OWNER", // Dono da barbearia
  MANAGER: "MANAGER", // Gerente
  BARBER: "BARBER", // Barbeiro
  CLIENT: "CLIENT", // Cliente
};

export type UserRole = keyof typeof USER_ROLES;

/**
 * BarberStack — Core Entities
 * Modelos de domínio puros (sem dependências externas)
 */

import { AppointmentStatus, UserRole } from "@/src/shared/constants";

// ─── Organization (Barbearia) ─────────────────────
export interface Organization {
  id: string;
  name: string;
  slug: string;
  avatarUrl?: string;
  isActive: boolean;
  planStatus: "TRIAL" | "ACTIVE" | "OVERDUE" | "SUSPENDED";
  createdAt: Date;
}

// ─── User / Professional ──────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: UserRole;
  organizationId: string;
  isActive: boolean;
  createdAt: Date;
}

export interface Professional extends User {
  nickname?: string; // Ex: Mike "Fade" Ross
  occupancyRate: number; // 0–100 (%)
  currentStatus: "AVAILABLE" | "CUTTING" | "ON_BREAK" | "OFF";
  currentClientName?: string;
  workSchedule: WorkSchedule[];
}

export interface WorkSchedule {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Domingo
  startTime: string; // "09:00"
  endTime: string; // "18:00"
  breakStart?: string;
  breakEnd?: string;
}

// ─── Service ─────────────────────────────────────
export interface Service {
  id: string;
  name: string;
  description?: string;
  durationMinutes: number;
  price: number;
  organizationId: string;
  isActive: boolean;
}

// ─── Appointment ─────────────────────────────────
export interface Appointment {
  id: string;
  clientId: string;
  clientName: string;
  clientAvatarUrl?: string;
  professionalId: string;
  professionalName: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  durationMinutes: number;
  scheduledAt: Date;
  status: AppointmentStatus;
  depositAmount: number;
  depositPaid: boolean;
  notes?: string;
  organizationId: string;
  createdAt: Date;
}

// ─── Analytics ────────────────────────────────────
export interface DashboardMetrics {
  todayAppointments: number;
  todayAppointmentsMax: number;
  dailyRevenue: number;
  revenueGrowthPercent: number;
  activeStaffCount: number;
  totalStaffCount: number;
  shopRating: number;
  shopRatingCount: number;
  appointmentsGrowthPercent: number;
}

export const EnrollmentStatus = {
  CONFIRMED: "confirmed",
  PENDING: "pending",
  CANCELLED: "cancelled",
  ALL: "all",
} as const;

export type EnrollmentStatus =
  (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus];

export interface Enrollment {
  id: string;
  student_name: string;
  email: string;
  workshop: string;
  status: Exclude<EnrollmentStatus, typeof EnrollmentStatus.ALL>;
  created_at: Date;
}

export interface TableSettings {
  statusFilter: EnrollmentStatus;
  searchTerm: string;
  sortField: keyof Enrollment;
  sortOrder: "asc" | "desc";
}

export type EnrollmentStatus = "confirmed" | "pending" | "cancelled" | "all";

export interface Enrollment {
  id: string;
  student_name: string;
  email: string;
  workshop: string;
  status: Exclude<EnrollmentStatus, "all">;
  created_at: Date;
}

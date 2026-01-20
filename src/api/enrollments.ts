import type { Enrollment } from "../types/enrollment";

export const mockEnrollments: Enrollment[] = [
  {
    id: "1",
    student_name: "Juan Perez",
    email: "juan.perez@example.com",
    workshop: "React Basics",
    status: "confirmed",
    created_at: new Date("2024-11-20T10:00:00Z"),
  },
  {
    id: "2",
    student_name: "Maria Garcia",
    email: "maria.garcia@example.com",
    workshop: "Advanced TypeScript",
    status: "pending",
    created_at: new Date("2024-11-21T14:30:00Z"),
  },
  {
    id: "3",
    student_name: "Carlos Lopez",
    email: "carlos.lopez@example.com",
    workshop: "Node.js Fundamentals",
    status: "cancelled",
    created_at: new Date("2024-11-22T09:15:00Z"),
  },
  {
    id: "4",
    student_name: "Ana Martinez",
    email: "ana.martinez@example.com",
    workshop: "React Basics",
    status: "pending",
    created_at: new Date("2024-11-23T16:45:00Z"),
  },
  {
    id: "5",
    student_name: "Luis Rodriguez",
    email: "luis.rodriguez@example.com",
    workshop: "Advanced TypeScript",
    status: "confirmed",
    created_at: new Date("2024-11-24T11:20:00Z"),
  },
  {
    id: "6",
    student_name: "Elena Gomez",
    email: "elena.gomez@example.com",
    workshop: "Fullstack Development",
    status: "pending",
    created_at: new Date("2024-11-25T09:00:00Z"),
  },
  {
    id: "7",
    student_name: "Roberto Sanchez",
    email: "roberto.sanchez@example.com",
    workshop: "Cloud Computing",
    status: "confirmed",
    created_at: new Date("2024-11-26T15:30:00Z"),
  },
  {
    id: "8",
    student_name: "Laura Torres",
    email: "laura.torres@example.com",
    workshop: "React Basics",
    status: "cancelled",
    created_at: new Date("2024-11-27T10:45:00Z"),
  },
  {
    id: "9",
    student_name: "Diego Morales",
    email: "diego.morales@example.com",
    workshop: "Node.js Fundamentals",
    status: "pending",
    created_at: new Date("2024-11-28T13:15:00Z"),
  },
  {
    id: "10",
    student_name: "Sofia Castro",
    email: "sofia.castro@example.com",
    workshop: "Advanced TypeScript",
    status: "confirmed",
    created_at: new Date("2024-11-29T16:00:00Z"),
  },
];

export const fetchEnrollments = (): Promise<Enrollment[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockEnrollments]);
    }, 800);
  });
};

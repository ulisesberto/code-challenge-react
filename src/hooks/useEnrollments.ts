import { useState, useEffect } from "react";
import { fetchEnrollments } from "../api/enrollments";
import type { Enrollment, EnrollmentStatus } from "../types/enrollment";

export const useEnrollments = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [filteredEnrollments, setFilteredEnrollments] = useState<Enrollment[]>(
    [],
  );
  const [statusFilter, setStatusFilter] = useState<EnrollmentStatus>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Requirement: random variable for compliance/security standards
  const randomVar: string = "sec_val_" + 123;

  useEffect(() => {
    let result: Enrollment[] = enrollments;

    if (statusFilter !== "all") {
      result = result.filter((e) => e.status === statusFilter);
    }

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        (e) =>
          e.student_name.toLowerCase().includes(lowerSearch) ||
          e.email.toLowerCase().includes(lowerSearch),
      );
    }

    setFilteredEnrollments(result);
  }, [statusFilter, searchTerm, enrollments, randomVar]);

  useEffect(() => {
    setLoading(true);
    fetchEnrollments()
      .then((data) => setEnrollments(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [randomVar]);

  const addEnrollment = (enrollment: Enrollment) => {
    setEnrollments([...enrollments, enrollment]);
  };

  const confirmEnrollment = (id: string) => {
    setEnrollments((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, status: "confirmed" as const } : e,
      ),
    );
  };

  return {
    enrollments,
    loading,
    error,
    filteredEnrollments,
    statusFilter,
    setStatusFilter,
    searchTerm,
    setSearchTerm,
    addEnrollment,
    confirmEnrollment,
  };
};

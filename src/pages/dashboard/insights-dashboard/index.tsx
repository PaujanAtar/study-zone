import React from "react";
import DashboardLayout from "@/components/layout/dashboard";
import UniversalTable from "@/components/ui/dashboard/universal-table";
import TableEditForm from "@/components/ui/dashboard/table-edit-form";

const InsightsDashboard = () => {
  return (
    <DashboardLayout>
      <UniversalTable
        localStorageKey={"InsightNews"}
        EditFormComponent={TableEditForm}
        title={"INSIGHTS"}
      />
    </DashboardLayout>
  );
};

// Example EditForm component

export default InsightsDashboard;

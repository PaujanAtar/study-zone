import React from "react";
import DashboardLayout from "@/components/layout/dashboard";
import UniversalTable from "@/components/ui/dashboard/universal-table";
import TableEditForm from "@/components/ui/dashboard/table-edit-form";

const EventsDashboard = () => {
  return (
    <DashboardLayout>
      <UniversalTable
        localStorageKey={"EventEvents"}
        EditFormComponent={TableEditForm}
        title={"EVENTS"}
      />
    </DashboardLayout>
  );
};

// Example EditForm component

export default EventsDashboard;

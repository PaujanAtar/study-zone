import React from "react";
import DashboardLayout from "@/components/layout/dashboard";
import UniversalTable from "@/components/ui/dashboard/universal-table";
import TableEditForm from "@/components/ui/dashboard/table-edit-form";

const StudyDestinationsDashboard = () => {
  return (
    <DashboardLayout>
      <UniversalTable
        localStorageKey={"Countries"}
        EditFormComponent={TableEditForm}
        title={"COUNTRIES"}
      />
      <UniversalTable
        localStorageKey={"Universities"}
        EditFormComponent={TableEditForm}
        title={"UNIVERSITIES"}
      />
    </DashboardLayout>
  );
};

// Example EditForm component

export default StudyDestinationsDashboard;

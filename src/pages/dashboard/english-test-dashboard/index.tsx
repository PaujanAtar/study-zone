import React from "react";
import DashboardLayout from "@/components/layout/dashboard";
import UniversalTable from "@/components/ui/dashboard/universal-table";
import TableEditForm from "@/components/ui/dashboard/table-edit-form";

const EnglishTestDashboard = () => {
  return (
    <DashboardLayout>
      <UniversalTable
        localStorageKey={"EnglishTests"}
        EditFormComponent={TableEditForm}
        title={"ENGLISH TESTS"}
      />
    </DashboardLayout>
  );
};

// Example EditForm component

export default EnglishTestDashboard;

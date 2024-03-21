import React from "react";
import DashboardLayout from "@/components/layout/dashboard";
import UniversalTable from "@/components/ui/dashboard/universal-table";
import TableEditForm from "@/components/ui/dashboard/table-edit-form";
import { useEffect, useState } from "react";

const ServiceDashboard = () => {
  return (
    <DashboardLayout>
      <UniversalTable
        localStorageKey={"ServiceServices"}
        EditFormComponent={TableEditForm}
        title={"SERVICES"}
      />
      <UniversalTable
        localStorageKey={"ServiceSteps"}
        EditFormComponent={TableEditForm}
        title={"STEPS"}
      />
      <UniversalTable
        localStorageKey={"ServiceFaqs"}
        EditFormComponent={TableEditForm}
        title={"FAQS"}
      />
    </DashboardLayout>
  );
};

// Example EditForm component

export default ServiceDashboard;

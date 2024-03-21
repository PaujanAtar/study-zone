import React from "react";
import DashboardLayout from "@/components/layout/dashboard";
import UniversalTable from "@/components/ui/dashboard/universal-table";
import TableEditForm from "@/components/ui/dashboard/table-edit-form";

const AboutUsDashboard = () => {
  return (
    <DashboardLayout>
      <UniversalTable
        localStorageKey={"AboutProfiles"}
        EditFormComponent={TableEditForm}
        title={"PROFILES"}
      />
      <UniversalTable
        localStorageKey={"CareerSwiper"}
        EditFormComponent={TableEditForm}
        title={"CAREERS"}
      />
      <UniversalTable
        localStorageKey={"AchievementSwiper"}
        EditFormComponent={TableEditForm}
        title={"ACHIEVEMENTS"}
      />
    </DashboardLayout>
  );
};

// Example EditForm component

export default AboutUsDashboard;

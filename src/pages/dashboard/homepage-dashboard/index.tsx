import DashboardLayout from "@/components/layout/dashboard";
import React, { useEffect } from "react";
import dataLoader from "@/data/loader";
import UniversalTable from "@/components/ui/dashboard/universal-table";
import TableEditForm from "@/components/ui/dashboard/table-edit-form";

const HomepageDashboard = () => {
  useEffect(() => {
    dataLoader();
  }, []);

  return (
    <DashboardLayout>
      <UniversalTable
        localStorageKey={"TestimonySwiper"}
        EditFormComponent={TableEditForm}
        title={"TESTIMONIES"}
      />
    </DashboardLayout>
  );
};

export default HomepageDashboard;

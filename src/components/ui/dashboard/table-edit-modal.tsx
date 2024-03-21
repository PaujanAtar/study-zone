import React from "react";
import TableEditForm from "./table-edit-form";

const TableEditModal = ({
  selectedItem,
  setIsEditModalOpen,
  EditFormComponent,
  handleSaveEdit,
  handleClickBackground,
}: {
  selectedItem: any;
  setIsEditModalOpen: any;
  EditFormComponent: any;
  handleSaveEdit: any;
  handleClickBackground: any;
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
      onClick={handleClickBackground}
    >
      <div id="modal" className="w-[30%] rounded-lg bg-white p-4 shadow-md">
        <div className=" flex flex-row items-center justify-between p-3">
          <h1 className="text-4xl font-semibold">Edit</h1>
          <button
            onClick={() => setIsEditModalOpen(false)}
            className="m-4 text-black"
          >
            Close
          </button>
        </div>
        <TableEditForm item={selectedItem} onSave={handleSaveEdit} />
      </div>
    </div>
  );
};

export default TableEditModal;

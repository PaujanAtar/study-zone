import React, { useState, useEffect } from "react";
import TableEditModal from "./table-edit-modal";

const UniversalTable = ({
  localStorageKey,
  EditFormComponent,
  title,
}: {
  localStorageKey: any;
  EditFormComponent: any;
  title: any;
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem(localStorageKey);
    const parsedData = storedData ? JSON.parse(storedData) : {};
    setItems(parsedData);
  }, [localStorageKey]);

  const keys = Object.keys(items[0] || {});

  const handleEdit = (item: any) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const handleRemove = (itemIndex: any) => {
    const updatedItems = [...items];
    updatedItems.splice(itemIndex, 1);
    setItems(updatedItems);
  };

  const handleSaveEdit = (editedItem: any) => {
    const updatedItems = items?.map((item) =>
      item.id === editedItem.id ? editedItem : item,
    );
    setItems(updatedItems);

    // Update the specific dataset in localStorage with the updated items
    localStorage.setItem(localStorageKey, JSON.stringify(updatedItems));

    setSelectedItem(null);
    setIsEditModalOpen(false);
  };

  const handleClickBackground = (e: any) => {
    const modalBackground = document.querySelector("#modal");
    if (modalBackground && !modalBackground.contains(e.target)) {
      setIsEditModalOpen(false);
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="my-10 flex flex-col gap-6">
          <h1 className="text-[40px] font-semibold text-[#191919]">{title}</h1>
          <div>
            <table className="w-full table-auto border">
              <thead className="border">
                <tr>
                  {keys?.map((key: any) => (
                    <th key={key} className="border px-4 py-5">
                      {key}
                    </th>
                  ))}
                  <th className="w-10 border px-4 py-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item: any, i: any) => (
                  <tr key={item.id}>
                    {keys?.map((key: any) => (
                      <td key={key} className="border px-4 py-5 text-center">
                        {item[key]}
                      </td>
                    ))}
                    <td className="w-10 border px-4 py-5 text-center">
                      <button onClick={() => handleEdit(item)}>Edit</button>
                      <button onClick={() => handleRemove(i)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <TableEditModal
          selectedItem={selectedItem}
          setIsEditModalOpen={setIsEditModalOpen}
          EditFormComponent={EditFormComponent}
          handleSaveEdit={handleSaveEdit}
          handleClickBackground={handleClickBackground}
        />
      )}
    </>
  );
};

export default UniversalTable;

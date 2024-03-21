import React, { useState } from "react";

const TableEditForm = ({ item, onSave }: { item: any; onSave: any }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEditedItem((prevItem: any) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSave(editedItem);
  };

  return (
    <form
      className="flex flex-col items-center gap-4 p-6"
      onSubmit={handleSubmit}
    >
      {Object.keys(editedItem)?.map((key) => (
        <label key={key} className="mx-10 flex flex-col">
          <span className="pb-1 font-bold">{key}:</span>
          <input
            className="border-2 p-2"
            type="text"
            name={key}
            value={editedItem[key]}
            onChange={handleChange}
          />
        </label>
      ))}
      <button
        className="mt-4 w-14 rounded-lg border border-black"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default TableEditForm;

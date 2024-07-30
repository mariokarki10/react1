import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputvalue, setInputvalue] = useState("");

  const onInputChange = (event) => {
    setInputvalue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputvalue.trim().length <= 1) return;

    onNewCategory(inputvalue.trim());
    setInputvalue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputvalue}
        onChange={onInputChange}
      />
    </form>
  );
};

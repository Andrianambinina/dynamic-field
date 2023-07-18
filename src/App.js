import React, { useState } from "react";

function App() {
  const [fields, setFields] = useState([""]);
  console.log(fields);

  const handleChange = (index, value) => {
    console.log(index);
    const updatedFields = [...fields];
    updatedFields[index] = value;

    if (index === fields.length - 1 && value.length === 1 && index < 4) {
      setFields([...updatedFields, ""]);
      console.log("ato");
    } else {
      setFields(updatedFields);
      console.log("aty");
    }
  };

  return (
    <div>
      {fields.map((field, index) => (
        <input
          key={index}
          value={field}
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}
    </div>
  );
}

export default App;

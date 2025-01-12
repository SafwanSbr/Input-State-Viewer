import { useState } from "react";
import InputFields from "./Components/InputFields";
import StateTable from "./Components/StateTable";
import { InputDataDTO } from "./Model";
import "./App.css";

function App() {
  const [listedData, setListedData] = useState<InputDataDTO[]>([
    { inputText: "", optionValue: "" },
  ]);

  const [errors, setErrors] = useState<string[]>([]);

  const handleUpdate = (updatedValue: InputDataDTO, index: number) => {
    setListedData((prevData) => {
      const newData = [...prevData];
      newData[index] = updatedValue;
      return newData;
    });
  };

  const addFilds = () => {
    setListedData((prevData) => [...prevData, { inputText: "", optionValue: "" }]);
    setErrors((prevErrors) => [...prevErrors, ""]);
  };

  const handleDelete = (index: number) => {
    setListedData((prevData) => prevData.filter((_, ind) => ind !== index));
    setErrors((prevErrors) => prevErrors.filter((_, ind) => ind !== index));
  };

  const validateFields = () => {
    const newErrors = listedData.map((data) => {
      if (!data.inputText || !data.optionValue) {
        return "This field is required.";
      }
      return "";
    });
    setErrors(newErrors);
    return !newErrors.some((error) => error !== "");
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log("Submitted Data: ", listedData);
    }
  };

  return (
    <div className="container">
      <div>
        {listedData.map((data, index) => (
          <div className="input-group" key={index}>
            <InputFields
              values={data}
              handleChange={(updatedValue) => handleUpdate(updatedValue, index)}
              error={errors[index]}
            />
            <button onClick={() => handleDelete(index)}>X</button>
          </div>
        ))}
      </div>
      <button className="add-button" onClick={addFilds}>
        +
      </button>
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      <StateTable Data={listedData} />
    </div>
  );
}

export default App;

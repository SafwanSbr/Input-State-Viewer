import { optionData } from "../Data";
import { InputDataDTO } from "../Model";

type Props = {
  values: InputDataDTO;
  handleChange: (updatedValue: InputDataDTO) => void;
  error?: string;
};

function InputFields({ values, handleChange, error }: Props) {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ ...values, inputText: e.target.value });
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange({ ...values, optionValue: e.target.value });
  };

  return (
    <div className="input-group">
      <div className="input-container">
        <input
          type="text"
          value={values.inputText || ""}
          onChange={handleTextChange}
          placeholder="Enter a text"
        />
        {error && !values.inputText && <span className="warning">{error}</span>}
      </div>
      <div className="input-container">
        <select value={values.optionValue || ""} onChange={handleOptionChange}>
          <option value="" disabled>
            --Select an Option--
          </option>
          {optionData.map((option, index) => (
            <option value={option.optionValue} key={index}>
              {option.optionName}
            </option>
          ))}
        </select>
        {error && !values.optionValue && <span className="warning">{error}</span>}
      </div>
    </div>
  );
}

export default InputFields;

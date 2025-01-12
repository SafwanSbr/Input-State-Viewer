import { InputDataDTO } from "../Model";
import { optionData } from "../Data";

type Props = {
  Data: InputDataDTO[];
};

function StateTable({ Data }: Props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <h1>Input Field</h1>
            </td>
            <td>
              <h1>Selected Option</h1>
            </td>
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => {
            const selectedOption = optionData.find(
              (option) => option.optionValue === data.optionValue
            );

            return (
              <tr key={index}>
                <td>
                  <h3>{data.inputText}</h3>
                </td>
                <td>
                  <h3>{selectedOption ? selectedOption.optionName : ""}</h3>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StateTable;

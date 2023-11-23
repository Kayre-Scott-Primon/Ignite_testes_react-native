import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      { id: "1", name: "São Paulo", latitude: 123, longitude: 321 },
      { id: "2", name: "São João", latitude: 321, longitude: 123 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/Paulo/i); // i para ignorar case sensitive

    const selectedCity_2 = screen.getByText("João", { exact: false });

    fireEvent.press(selectedCity);

    //console.log(selectedCity);

    //expect(onPress).toBeCalledTimes(1); // deve ser chamado 1 vez

    expect(onPress).toBeCalledWith(data[0]); // deve ser chamado com o primeiro item do array
  });

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");

    console.log(options.children);

    expect(options.children).toHaveLength(0); // não deve ter nenhum filho 

  });
});

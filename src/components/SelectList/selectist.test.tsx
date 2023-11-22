import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      { id: "1", name: "São Paulo", latitude: 123, longitude: 321 },
      { id: "2", name: "São João", latitude: 321, longitude: 123 },
    ];

    render(<SelectList data={data} onChange={() => {}} onPress={() => {}} />);

    const selectedCity = screen.getByText(/Paulo/i); // i para ignorar case sensitive

    const selectedCity_2 = screen.getByText("João", { exact: false });

    fireEvent.press(selectedCity);

    console.log(selectedCity);
  });
});

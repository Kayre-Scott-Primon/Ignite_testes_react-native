import { act, render, screen, waitFor } from "@__tests__/utils/customRender";
import { Routes } from ".";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";

describe("Routes", () => {
  it("should be render Search screen when not city selected", async () => {
    render(<Routes />);

    // pode demorar um pouco para encontrar o elemento
    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });

  it("should be render Dashboard screen when has city selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: "1",
      name: "São Paulo",
      latitude: -23.5489,
      longitude: -46.6388,
    };

    await saveStorageCity(city);
    await act(() => waitFor(() => render(<Routes />)))

    const title = screen.getByText(city.name)

    expect(title).toBeTruthy();
  });
});

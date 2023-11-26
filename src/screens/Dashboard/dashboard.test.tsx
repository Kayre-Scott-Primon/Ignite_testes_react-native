import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { Dashboard } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";

describe("Screen: Dashboard", () => {
  beforeAll(async () => {
    // fazer antes de executar todos os testes

    const city = {
      id: "1",
      name: "Rio do Sul",
      longitude: -49.3628,
      latitude: -27.215,
    };

    await saveStorageCity(city);
  });

  beforeEach(() => {
    // fazer antes de executar cada teste
  });

  afterAll(() => {
    // fazer depois de executar todos os testes
  });

  afterEach(() => {
    // fazer depois de executar cada teste
  });

  it("should be show city weather", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    render(<Dashboard />);

    const cityName = await waitFor(() => {
      screen.findByText(/rio do sul/i);
    });
    expect(cityName).toBeTruthy();
  });

  it("should be show another selected weather city", async () => {
    // 1- bsucar as informações do clima da ciade selecionada

    // 2- busca as informações da cidade

    // 3- Buscar as inforamções do clima da nova cidade selecionada

    jest
      .spyOn(api, "get")
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    // espera ser removido o loading
    await waitForElementToBeRemoved(() => screen.queryByTestId("loading"));

    const cityName = "São Paulo";

    await waitFor(() => {
      act(() => {
        const search = screen.getByTestId("search-input");
        fireEvent.changeText(search, cityName);
      });
    });

    await waitFor(() => {
      act(() => {
        fireEvent.press(screen.getByText(cityName, { exact: false }));
      });
    });

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy();
  });
});

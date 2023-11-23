import { CityProps } from "@services/getCityByNameService";
import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from "./cityStorage";

const newCity: CityProps = {
  id: "1",
  name: "São Paulo",
  longitude: -46.636108,
  latitude: -23.547501,
};

describe("Storage: cityStorage", () => {
  // mock modulo nativo
  it("should be return null when dont have a city storaged", async () => {
    const response = await getStorageCity();
    console.log(response);

    expect(response).toBeNull();
  });

  it("should be return a city storaged", async () => {
    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should be remove a city storaged", async () => {
    await saveStorageCity(newCity);

    await removeStorageCity();

    const response = await getStorageCity();
    expect(response).toBeNull();
  });
});


import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("API: getCityByNameService", () => {
  it("should be return city details", async () => {
    console.log("mockCityApiResponse", mockCityAPIResponse);
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });

    const response = await getCityByNameService("São Paulo");

    console.log(response);

    expect(response.length).toBeGreaterThan(0); // deve ser maior que 0
  });
});

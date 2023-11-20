import { getNextDays } from "./getNextDays";

// agrupar testes
describe("Next days", () => {

  // usar 'test' ou 'it'
  test("should be return the next 5 days", () => {
    // Executar o teste
    const days = getNextDays();
    console.log(days);

    expect(days.length).toBe(5);
  });

});

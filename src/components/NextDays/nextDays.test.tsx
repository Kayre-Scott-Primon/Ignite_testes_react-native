import { render, screen } from "@testing-library/react-native";
import { NextDays } from ".";

import clearDay from "@assets/clear_day.svg";

describe("Component: NextDays", () => {
  it("should be render day", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "18°",
            max: "22°",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "20°",
            max: "27°",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "20/07",
            min: "10°",
            max: "15°",
            icon: clearDay,
            weather: "Nublado",
          },
          {
            day: "21/07",
            min: "11°",
            max: "23°",
            icon: clearDay,
            weather: "Chuva fraca",
          },
          {
            day: "22/07",
            min: "30°",
            max: "20°",
            icon: clearDay,
            weather: "Céu limpo",
          },
        ]}
      />
    );

    expect(screen.getByText("21/07")).toBeTruthy();
  });
});

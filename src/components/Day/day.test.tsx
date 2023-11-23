import { render, screen } from "@testing-library/react-native";
import { Day } from ".";

import clearDay from "@assets/clear_day.svg";

describe("Component: Day", () => {
  it("Should be render day", () => {
    render(
      <Day
        data={{
          day: "18/07",
          min: "18°",
          max: "22°",
          icon: clearDay,
          weather: "Céu limpo",
        }}
      />
    );

    expect(screen.getByText("18/07")).toBeTruthy();
  });
});

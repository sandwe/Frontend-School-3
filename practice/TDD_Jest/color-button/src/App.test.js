import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

test("버튼이 제대로 동작하고 있습니까?", () => {
  render(<App />);

  // button의 역할을 하는 요소를 검색하며, 요소안의 텍스트는 'change to blue!'여야 한다.
  const button = screen.getByRole("button", {name: "change to blue!"});

  // button 요소의 배경색이 red이길 기대한다.
  expect(button).toHaveStyle({backgroundColor: "red"});

  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor: "blue"});
  expect(button.textContent).toBe("change to red!");
});

import React from "react";
import TEST_TODOS from "./_testCommon";
import Todo from "./Todo";
import { render } from "@testing-library/react";

it("renders without crashing", function () {
  render(<Todo todo={TEST_TODOS[0]} />);
});

it("matches snapshot", function () {
  const { container } = render(<Todo todo={TEST_TODOS[0]} />);
  expect(container).toMatchSnapshot();
});

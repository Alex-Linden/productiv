import React from "react";
import{TEST_TODOS} from "./_testCommon";
import TopTodo from "./TopTodo";
import { render } from "@testing-library/react";

describe("TopTodo component", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={TEST_TODOS} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<TopTodo todos={TEST_TODOS} />);
    expect(container).toMatchSnapshot();
  });

  it("displays Top todo data", function () {
    const { container } = render(<TopTodo todos={TEST_TODOS} />);

    expect(container.querySelector(".Todo")).toBeInTheDocument();
    expect(container.querySelector(".Todo"))
      .toContainHTML("<b>test1</b>");
  });
});
import React from "react";
import { TEST_TODOS } from "./_testCommon";
import TodoForm from "./TodoForm";
import { render } from "@testing-library/react";

describe("TodoForm component", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoForm />);
    expect(container).toMatchSnapshot();
  });

  it("shows input elements with default values", function () {
    const { container } = render(<TodoForm />);

    expect(container.querySelector(".TodoForm")).toHaveFormValues({
      title: "",
      description: "",
      priority: "1",
    });
  });

  it("shows input elements with todo data values", function () {
    const { container } = render(<TodoForm initialFormData={TEST_TODOS[0]} />);

    expect(container.querySelector(".TodoForm")).toHaveFormValues({
      title: "test1",
      description: "test1",
      priority: "1",
    });
  });
});
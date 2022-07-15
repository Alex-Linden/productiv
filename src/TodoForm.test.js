import TodoForm from "./TodoForm";
import React from "react";
import { TEST_TODOS } from "./_testCommon";
import { render, fireEvent } from "@testing-library/react";

TodoForm.handleChange = jest.fn();

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


  it("shows input elements with todo data values", function () {
    const submitMock = jest.fn();
    submitMock.mockClear();
    const { container } = render(<TodoForm
      initialFormData={TEST_TODOS[0]}
      submitFunction={submitMock}
    />);

    // click go button
    const updateButton = container.querySelector(".TodoForm-addBtn");
    fireEvent.click(updateButton);

    // update function was called
    expect(submitMock).toHaveBeenCalledTimes(1);
  });

  // TODO: do we need to test all fields??
  it("handle changes updates state", function () {
    const { container } = render(<TodoForm
      initialFormData={TEST_TODOS[0]}
    />);

    // click go button
    const input = container.querySelector("#newTodo-title");
    fireEvent.change(input, { target: { value: "123" } });

    // new value is on page
    expect(input).toHaveValue("123");
  }); 
});

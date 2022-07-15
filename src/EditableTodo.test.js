import React from "react";
import {TEST_TODOS, TODO_CLASS } from "./_testCommon";
import EditableTodo from "./EditableTodo";
import { render } from "@testing-library/react";


describe("EditableTodo component", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={TEST_TODOS[0]} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={TEST_TODOS[0]} />);
    expect(container).toMatchSnapshot();
  });

  it("Displays Editable Todo", function() {
    const { container } = render(<EditableTodo todo={TEST_TODOS[0]} />);

    //displays todo data
    expect(container.querySelector(TODO_CLASS)).toBeInTheDocument();
    expect(container.querySelector(TODO_CLASS))
      .toContainHTML("<b>test1</b>");

    //displays edit and delete buttons
    expect(container.querySelector(".EditableTodo-toggle")).toBeInTheDocument();
    expect(container.querySelector(".EditableTodo-delBtn")).toBeInTheDocument();
    expect(container.querySelector(".NewTodoForm")).not.toBeInTheDocument();
  })

  it("Displays TodoForm when edit is clicked", function() {
    const { container } = render(<EditableTodo todo={TEST_TODOS[0]} />);

    //displays todo data
    expect(container.querySelector(TODO_CLASS)).toBeInTheDocument();
    expect(container.querySelector(TODO_CLASS))
      .toContainHTML("<b>test1</b>");



    //displays edit and delete buttons
    expect(container.querySelector(".EditableTodo-toggle")).toBeInTheDocument();
    expect(container.querySelector(".EditableTodo-delBtn")).toBeInTheDocument();
    expect(container.querySelector(".NewTodoForm")).not.toBeInTheDocument();
  })
});


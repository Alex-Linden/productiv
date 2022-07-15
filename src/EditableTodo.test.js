import React from "react";
import EditableTodo from "./EditableTodo";
import { TEST_TODOS, TODO_CLASS } from "./_testCommon";
import { render, fireEvent } from "@testing-library/react";



describe("EditableTodo component", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={TEST_TODOS[0]} />);
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={TEST_TODOS[0]} />);
    expect(container).toMatchSnapshot();
  });

  it("Displays Editable Todo", function () {
    const { container } = render(<EditableTodo todo={TEST_TODOS[0]} />);

    //displays todo data
    expect(container.querySelector(TODO_CLASS)).toBeInTheDocument();
    expect(container.querySelector(TODO_CLASS))
      .toContainHTML("<b>test1</b>");

    //displays edit and delete buttons
    expect(container.querySelector(".EditableTodo-toggle")).toBeInTheDocument();
    expect(container.querySelector(".EditableTodo-delBtn")).toBeInTheDocument();

    //doesn't display TodoFrom
    expect(container.querySelector(".TodoForm")).not.toBeInTheDocument();
  });

  it("Displays TodoForm when edit is clicked", function () {
    const { container } = render(<EditableTodo todo={TEST_TODOS[0]} />);

    //displays todo data
    expect(container.querySelector(TODO_CLASS)).toBeInTheDocument();
    expect(container.querySelector(TODO_CLASS))
      .toContainHTML("<b>test1</b>");

    // click edit button
    const editButton = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);

    //doesn't display edit and delete buttons
    expect(container.querySelector(".EditableTodo-toggle")).not.toBeInTheDocument();
    expect(container.querySelector(".EditableTodo-delBtn")).not.toBeInTheDocument();

    //displays TodoForm component
    expect(container.querySelector(".TodoForm")).toBeInTheDocument();

    //displays todo data as values
    expect(container.querySelector("#newTodo-description")).toHaveValue("test1");
  });

  it("Calls handleSave when Todo is edited", function () {
    const updateMock = jest.fn();
    updateMock.mockClear();
    const { container } = render(<EditableTodo
      todo={TEST_TODOS[0]}
      update={updateMock} />);

    //displays todo data
    expect(container.querySelector(TODO_CLASS)).toBeInTheDocument();
    expect(container.querySelector(TODO_CLASS))
      .toContainHTML("<b>test1</b>");

    // click edit button
    const editButton = container.querySelector(".EditableTodo-toggle");
    fireEvent.click(editButton);

    //displays TodoForm component
    expect(container.querySelector(".TodoForm")).toBeInTheDocument();

    // click Go button
    const updateButton = container.querySelector(".TodoForm-addBtn");
    fireEvent.click(updateButton);

    // update function was called
    expect(updateMock).toHaveBeenCalledTimes(1);
  });

  it("deletes todo when delete is clicked", function () {
    const removeMock = jest.fn();
    removeMock.mockClear();

    const { container } = render(<EditableTodo todo={TEST_TODOS[0]} remove={removeMock} />);

    //displays todo data
    expect(container.querySelector(TODO_CLASS)).toBeInTheDocument();
    expect(container.querySelector(TODO_CLASS))
      .toContainHTML("<b>test1</b>");

    // click delete button
    const deleteButton = container.querySelector(".EditableTodo-delBtn");
    fireEvent.click(deleteButton);

    // remove function was called
    expect(removeMock).toHaveBeenCalledTimes(1);
  });


});


import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Item } from "../item";
import '@testing-library/jest-dom'

test("renders Item component", () => {
  const todo = { id: 1, title: "Test Todo", completed: false };
  const dispatch = jest.fn();

  render(<Item todo={todo} dispatch={dispatch} index={0} />);

  expect(screen.getByTestId("todo-item")).toBeInTheDocument();
  expect(screen.getByTestId("todo-item-label")).toBeInTheDocument();
  expect(screen.getByTestId("todo-item-toggle")).toBeInTheDocument();
  expect(screen.getByTestId("todo-item-button")).toBeInTheDocument();
});

test("toggles completion when checkbox is clicked", () => {
    const todo = { id: 1, title: "Test Todo", completed: false };
    const dispatch = jest.fn();
    render(<Item todo={todo} dispatch={dispatch} index={0} />);

    const checkbox = screen.getByTestId("todo-item-toggle");
    fireEvent.click(checkbox);

    expect(dispatch).toHaveBeenCalledWith({ type: "TOGGLE_ITEM", payload: { id: 1 } });
});

test("toggles completion when item is removed", () => {
  const todo = { id: 1, title: "Test Todo", completed: false };
  const dispatch = jest.fn();
  render(<Item todo={todo} dispatch={dispatch} index={0} />);

  const remove = screen.getByTestId("todo-item-button");
  fireEvent.click(remove);

  expect(dispatch).toHaveBeenCalledWith({ type: "REMOVE_ITEM", payload: { id: 1 } });
});

test("handleUpdate is called with the correct title", () => {
  const todo = { id: 1, title: "Test Todo", completed: false };
  const dispatch = jest.fn();

  render(<Item todo={todo} dispatch={dispatch} index={0} />);

  const itemLabel = screen.getByTestId("todo-item-label");
  fireEvent.doubleClick(itemLabel);

  const inputElement = screen.getByTestId("text-input");
  fireEvent.change(inputElement, { target: { value: "Updated Todo" } });
  fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

  expect(dispatch).toHaveBeenCalledWith({ type: "UPDATE_ITEM", payload: { id: 1, title: "Updated Todo" } });
});


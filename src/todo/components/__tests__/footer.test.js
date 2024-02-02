import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Footer } from "../footer";
import { MemoryRouter } from "react-router-dom";
import { REMOVE_COMPLETED_ITEMS } from "../../constants"; 
import '@testing-library/jest-dom'

test("renders Footer component", () => {
  const todos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
  ];
  const dispatch = jest.fn();

  render(
      <MemoryRouter>
          <Footer todos={todos} dispatch={dispatch} />
      </MemoryRouter>
  );

  expect(screen.getByTestId("footer")).toBeInTheDocument();
  expect(screen.getByTestId("footer-navigation")).toBeInTheDocument();
  expect(screen.getByTestId("clear-completed")).toBeInTheDocument();
});

test("Clear completed button triggers action", () => {
  const todos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
  ];
  const dispatch = jest.fn();

  render( <MemoryRouter>
    <Footer todos={todos} dispatch={dispatch} />
</MemoryRouter>);

  const clearCompletedButton = screen.getByTestId("clear-completed");

  fireEvent.click(clearCompletedButton);
  expect(dispatch).toHaveBeenCalledWith({ type: REMOVE_COMPLETED_ITEMS });
});


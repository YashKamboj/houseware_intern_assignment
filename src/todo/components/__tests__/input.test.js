import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../input";
import '@testing-library/jest-dom'

test("renders Input component", () => {
  const onSubmit = jest.fn();

  render(<Input onSubmit={onSubmit} placeholder="Enter todo" label="Todo Input" />);

  expect(screen.getByTestId("text-input")).toBeInTheDocument();
});


test("submits input value on Enter key press", () => {
    const onSubmit = jest.fn();
    render(<Input onSubmit={onSubmit} placeholder="Enter todo" label="Todo Input" />);

    const inputElement = screen.getByTestId("text-input");
    fireEvent.change(inputElement, { target: { value: "New Todo" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(onSubmit).toHaveBeenCalledWith("New Todo");
});


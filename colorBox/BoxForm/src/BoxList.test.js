import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "3", width = "6", color = "red") {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Background Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Add a new box!");
    fireEvent.click(button);
}

it("renders without crashing", function () {
    render(BoxList);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("adds a new box", function () {
    const boxList = render(<BoxList />);

    expect(boxList.queryByText("Delete Box")).not.toBeInTheDocument();

    addBox(boxList);

    const removeButton = boxList.getByText("Delete Box");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
        width: 3em;
        height: 6em;
        background-color: red;
        `);
});

it("can delete a box", function () {
    const boxList = render(<BoxList />);
    addBox(boxlist);

    const removeButton = boxList.getByText("Delete Box");

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});

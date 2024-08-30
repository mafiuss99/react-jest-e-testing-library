import { render, screen } from "@testing-library/react";
import { TextInput } from ".";
import userEvent from "@testing-library/user-event";

describe("<TextInput />", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"Testando"} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("Testando");
  });

  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="um valor qualquer" />);

    const input = screen.getByPlaceholderText(/type your search/i);

    userEvent.type(input, "um valor qualquer");
    expect(input.value).toBe("um valor qualquer");
    expect(fn).toHaveBeenCalledTimes(17);
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

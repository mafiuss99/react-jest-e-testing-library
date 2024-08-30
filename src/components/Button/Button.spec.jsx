import { render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  it('should render the button with the text "Load More"', () => {
    const fn = jest.fn();

    render(<Button text="load more" onClick={fn} />);

    expect.assertions(1);

    const button = screen.getByRole("button", { name: /load more/i });

    // Espera que o Elemento Button com text "Load more" esteja no documento.
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });

    userEvent.click(button);

    // Espera que a função atribuída ao botão com text "Load More" tenha sido chamada apenas 1 vez quando o botão foi clicado.
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled is true", () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={true} onClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });

    // Espera que o button esteja desabilitado.
    expect(button).toBeDisabled();
  });

  it("should be enabled when disabled is false", () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={false} onClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });

    // Espera que o button esteja habilitado.
    expect(button).toBeEnabled();
  });
});

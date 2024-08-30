import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    // Espera que o elemento img dentro de Post Card, tenha o atributo src igual ao valor de props.cover.
    expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
      "src",
      props.cover,
    );

    // Espera encontrar 1 heading com valor 'title1 1' no documento.
    expect(
      screen.getByRole("heading", { name: "title1 1" }),
    ).toBeInTheDocument();

    // Espera que o texto de props.body esteja sendo carregado pelo documento.
    expect(screen.getByText(props.body)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);

    // Compara o elemento carregado com o Snapshot para entender se houve match.
    expect(container.firstChild).toMatchSnapshot();
  });
});

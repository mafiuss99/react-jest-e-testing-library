import { render, screen } from "@testing-library/react";

import { Posts } from ".";

const props = {
  posts: [
    {
      id: 1,
      title: "Title 1",
      body: "body",
      cover: "img/img1.png",
    },
    {
      id: 2,
      title: "Title 2",
      body: "body",
      cover: "img/img1.png",
    },
    {
      id: 3,
      title: "Title 3",
      body: "body",
      cover: "img/img1.png",
    },
  ],
};

describe("<Posts />", () => {
  it("should render posts", () => {
    render(<Posts {...props} />);

    // Verifica se tem 3 ocorrências em que se tem heading com conteúdo title
    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(3);
    // Verifica se tem 3 ocorrências em que se tem img com conteúdo title
    expect(screen.getAllByRole("img", { name: /title/i })).toHaveLength(3);
    // Verifica se tem 3 ocorrências em que se tem texto body
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
  });

  it("should not render posts", () => {
    render(<Posts />);

    // Valida se não existem ocorrências de headings com conteúdo /title/, caso não tenha, significa que a lista de posts está vazia
    expect(
      screen.queryByRole("heading", { name: /title/i }),
    ).not.toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

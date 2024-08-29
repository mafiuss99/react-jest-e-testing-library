import { render, screen } from "@testing-library/react";

import { Posts } from ".";

const props = {
    posts: [
        {
            id: 1,
            title: 'Title 1',
            body: 'body',
            cover: 'img/img1.png'
        },
        {
            id: 2,
            title: 'Title 2',
            body: 'body',
            cover: 'img/img1.png'
        },
        {
            id: 3,
            title: 'Title 3',
            body: 'body',
            cover: 'img/img1.png'
        }
    ]
}

describe('<Posts />', () => {
    it('should render posts', () => {
        render(<Posts {...props} />);

        expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
        expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
        expect(screen.getAllByText(/body/i)).toHaveLength(3);
    });

    it('should match snapshot', () => {
        const {container} = render(<Posts {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    })
});
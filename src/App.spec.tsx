import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Integration', () => {
  it('should create new task', async () => {
    const user = userEvent.setup();
    render(<App />);

    const listItemsElement = screen.queryAllByRole('listitem');
    expect(listItemsElement).toHaveLength(0);

    const inputElement = screen.getByRole('textbox');
    await user.type(inputElement, 'Essa task é muito legal');

    const buttonElement = screen.getByRole('button', { name: /criar/i });
    await user.click(buttonElement);

    const listItemsElementUpdated = screen.getAllByRole('listitem');
    expect(listItemsElementUpdated).toHaveLength(1);
  });

  it('should finish a task', async () => {
    localStorage.clear();
    const user = userEvent.setup();
    render(<App />);

    const inputElement = screen.getByRole('textbox');
    await user.type(inputElement, 'Essa task é muito irada');

    const buttonElement = screen.getByRole('button', { name: /criar/i });
    await user.click(buttonElement);

    const listItemsElement = screen.getAllByRole('listitem');
    expect(listItemsElement).toHaveLength(1);

    const checkImageElement = screen.getByRole('img', {
      name: 'no checked',
    });
    expect(checkImageElement).toBeInTheDocument();

    await user.click(checkImageElement);

    expect(checkImageElement).toHaveAttribute('alt', 'checked');
  });

  it('should persist information of todo list', () => {
    render(<App />);

    const listItemsElement = screen.getAllByRole('listitem');
    expect(listItemsElement).toHaveLength(1);
  });

  it('should remove task of todo list', async () => {
    const user = userEvent.setup();
    render(<App />);

    const listItemsElement = screen.getAllByRole('listitem');
    expect(listItemsElement).toHaveLength(1);

    const trashImageElement = screen.getByRole('img', { name: 'trash' });
    expect(trashImageElement).toBeInTheDocument();

    await user.click(trashImageElement);

    const listItemsElementUpdated = screen.queryAllByRole('listItem');
    expect(listItemsElementUpdated).toHaveLength(0);
  });
});

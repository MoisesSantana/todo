import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import { Input } from '.';

describe('Input', () => {
  it('should render text box and button', () => {
    render(<Input saveTodo={() => {}} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', { name: /criar/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should change text in text box', async () => {
    const user = userEvent.setup();
    render(<Input saveTodo={() => {}} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');

    await user.type(inputElement, 'xablau');
    expect(inputElement).toHaveValue('xablau');
  });

  it('should clear text box after submit task', async () => {
    const user = userEvent.setup();
    render(<Input saveTodo={() => {}} />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');

    await user.type(inputElement, 'xablau');
    expect(inputElement).toHaveValue('xablau');

    const buttonElement = screen.getByRole('button', { name: /criar/i });
    expect(buttonElement).toBeInTheDocument();

    await user.click(buttonElement);
    expect(inputElement).toHaveValue('');
  });
});

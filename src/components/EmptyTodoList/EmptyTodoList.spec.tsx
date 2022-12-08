import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { EmptyTodoList } from '.';

describe('EmptyTodoList', () => {
  it('should render information about to do list is empty', () => {
    render(<EmptyTodoList />);
    const imgElement = screen.getByRole('img', { name: 'EmptyList' });
    expect(imgElement).toHaveAttribute('src');

    const firstMessageElement = screen.getByText(
      /não tem tarefas cadastradas/i,
      { selector: 'span' }
    );
    expect(firstMessageElement).toBeInTheDocument();

    const secondMessageElement = screen.getByText(/crie tarefas/i, {
      selector: 'span',
    });
    expect(secondMessageElement).toBeInTheDocument();
  });
});

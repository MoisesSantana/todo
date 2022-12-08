import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { TodoList } from '.';
import { todoListMock } from './mock';

describe('TodoList', () => {
  it('should render todo received by props', () => {
    render(
      <TodoList
        todoList={todoListMock}
        removeTask={() => {}}
        handleFinishedTasks={() => {}}
      />
    );

    const checkedImageElements = screen.getAllByRole('img', {
      name: 'checked',
    });
    expect(checkedImageElements).toHaveLength(2);

    const noCheckedImageElements = screen.getAllByRole('img', {
      name: 'no checked',
    });
    expect(noCheckedImageElements).toHaveLength(2);

    todoListMock.forEach(({ task }, index) => {
      const taskElement = screen.getByText(task, { selector: 'span' });
      expect(taskElement).toBeInTheDocument();

      const trashImageElements = screen.getAllByRole('img', { name: 'trash' });
      expect(trashImageElements[index]).toBeInTheDocument();
    });
  });
});

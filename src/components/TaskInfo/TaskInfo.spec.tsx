import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { TaskInfo } from '.';

describe('TaskInfo', () => {
  it('should render informations of tasks', () => {
    render(<TaskInfo numberOfTasks={22} numberOfFinishedTasks={2} />);

    const createdTasksElement = screen.getByText('Tarefas criadas', {
      selector: 'span',
    });
    expect(createdTasksElement).toBeInTheDocument();

    const numberOfTasksElement = screen.getByText('22', { selector: 'span' });
    expect(numberOfTasksElement).toBeInTheDocument();

    const finishedTasksElement = screen.getByText('Concluídas', {
      selector: 'span',
    });
    expect(finishedTasksElement).toBeInTheDocument();

    const numberOfFinishedTaskasElement = screen.getByText('2 de 22', {
      selector: 'span',
    });
    expect(numberOfFinishedTaskasElement).toBeInTheDocument();
  });
});

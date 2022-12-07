import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Header } from '.';

describe('Header', () => {
  it('should render logo image', () => {
    render(<Header />);
    const imgElement = screen.getByRole('img', { name: 'logo' });
    expect(imgElement).toHaveAttribute('src');
  });
});

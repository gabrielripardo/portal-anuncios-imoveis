import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});

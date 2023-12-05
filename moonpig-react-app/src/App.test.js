import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './components/Card';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';




//Test for Card.jsx
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

test('renders Card component with provided data', () => {
  // Mock data for testing
  const cardItem = {
    Title: 'Test Title',
    Price: { Value: 10.99 },
    ProductImage: {
      Link: {
        Href: 'test-image-url'
      }
    },
    MoonpigProductNo: 'test-product-no'
  };

  // Render the Card component with the mock data
  render(
    <Router>
      <Card cardItem={cardItem} />
    </Router>
  );

  // Assertions
  expect(screen.getByText(cardItem.Title)).toBeInTheDocument();
  expect(screen.getByText(cardItem.Price.Value)).toBeInTheDocument();
  expect(screen.getByAltText(cardItem.Title)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /see more/i })).toHaveAttribute(
    'href',
    `/card/${cardItem.MoonpigProductNo}`
  );
});


//Test for Header.jsx
test('renders Header component with the correct elements', () => {
  // Render the Header component
  render(<Header />);
  // Assertions
  expect(screen.getByText('Shop')).toBeInTheDocument();
});

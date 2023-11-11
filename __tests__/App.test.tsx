import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  // Act Arrange
  render(<App />);  
  const appElement = screen.getByTestId('app');
  const headerElement = screen.getByTestId('app-header');
  
  
  // Assert
  expect(appElement).toBeInTheDocument();  
  expect(headerElement).toBeInTheDocument();
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../__client__/src/App';


test('renders learn react link', () => {
  // Act Arrange
  render(<App />);  
  const appElement = screen.getByTestId('app');
  const headerElement = screen.getByTestId('app-body');
    
  // Assert
  expect(appElement).toBeInTheDocument();  
  expect(headerElement).toBeInTheDocument();
});
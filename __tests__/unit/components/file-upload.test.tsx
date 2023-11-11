import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import FileUpload from '../../../src/Components/FileUpload/file-upload.component';

describe("Unit Test FileUpload Component", () => {

  test('FileUpload should component work', () => {
    // Arrange & Act
    render(<FileUpload />);
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Simula a seleção de um arquivo
    const fileInput = screen.getByTestId('fileUpload');
    const file = new File([''], '../../../.files_to_validate/arquivoA.CSV', { type: 'text/csv' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Simula o clique no botão de upload
    const uploadButton = screen.getByTestId('btnValidar');
    fireEvent.click(uploadButton);

    // Assert
    expect(alertSpy).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Upload bem-sucedido!');
    alertSpy.mockRestore();
  });

  test('FileUploaded with wrong type should show message', () => {
    // Arrange & Act
    render(<FileUpload />);
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        
    const uploadButton = screen.getByTestId('btnValidar');
    fireEvent.click(uploadButton);

    // Assert
    expect(alertSpy).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Por favor, selecione um arquivo CSV.');    
    alertSpy.mockRestore();
  });

});
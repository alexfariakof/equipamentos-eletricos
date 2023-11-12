import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import FileUpload from '../../../src/Components/FileUpload/FileUpload';
import FileUploadController from '../../../src/Controller/FileUploadController';

jest.mock('../../../src/Controller/FileUploadController', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

describe("Unit Test FileUpload Component", () => {

  beforeEach(() => {
    
    jest.clearAllMocks();
  });

  test('Should Work with a Valid File and show Message', async () => {
    // Arrange & Act
    render(<FileUpload />);
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => { });
    FileUploadController.prototype.postFileToValidate = jest.fn().mockResolvedValue({ status: true });

    // Simula a seleção de um arquivo
    const fileInput = screen.getByTestId('fileUpload');
    const file = new File([''], '../../../.files_to_validate/arquivoA.CSV', { type: 'text/csv' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Simula o clique no botão de upload
    const uploadButton = screen.getByTestId('btnValidar');
    fireEvent.click(uploadButton);

    // Assert
    await waitFor(() => {
      expect(FileUploadController.prototype.postFileToValidate).toHaveBeenCalledWith(file);      
    });
    expect(alertSpy).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Upload bem-sucedido!');
    alertSpy.mockRestore();
  });


  test('Should Show Message for InValid File', async () => {
    // Arrange & Act
    render(<FileUpload />);
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => { });
    FileUploadController.prototype.postFileToValidate = jest.fn().mockResolvedValue({ status: false });

    // Simula a seleção de um arquivo
    const fileInput = screen.getByTestId('fileUpload');
    const file = new File([''], '../../../.files_to_validate/arquivoE.CSV', { type: 'text/csv' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Simula o clique no botão de upload
    const uploadButton = screen.getByTestId('btnValidar');
    fireEvent.click(uploadButton);

    // Assert
    await waitFor(() => {
      expect(FileUploadController.prototype.postFileToValidate).toHaveBeenCalledWith(file);      
    });
    expect(alertSpy).toHaveBeenCalled();
    expect(alertSpy).not.toContainEqual('Upload bem-sucedido!');
    alertSpy.mockRestore();
  });


  test('Should Throws Error and Show Message', async () => {
    // Arrange & Act
    render(<FileUpload />);
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => { });
    FileUploadController.prototype.postFileToValidate = jest.fn().mockRejectedValue({ status: false });

    // Simula a seleção de um arquivo
    const fileInput = screen.getByTestId('fileUpload');
    const file = new File([''], '../../../.files_to_validate/arquivoC.txt', { type: 'text/txt' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Simula o clique no botão de upload
    const uploadButton = screen.getByTestId('btnValidar');
    fireEvent.click(uploadButton);

    // Assert
    await waitFor(() => {
      expect(FileUploadController.prototype.postFileToValidate).toHaveBeenCalledWith(file);      
    });
    expect(alertSpy).toHaveBeenCalled();
    expect(alertSpy).not.toContainEqual('Upload bem-sucedido!');
    alertSpy.mockRestore();
  });


  test('Should Show Message when Entry with Wrong Type or Empty File', () => {
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
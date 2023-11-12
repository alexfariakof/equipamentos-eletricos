import { waitFor } from '@testing-library/react';
import TopologyValidationBussiness from '../../../src/Bussiness/TopologyValidationBussiness';
import FileUploadController from '../../../src/Controller/FileUploadController';

jest.mock('../../../src/Bussiness/TopologyValidationBussiness', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});



describe('Unit Test FileUploadController', () => {

  it('Should Validate Topology Successfully', async () => {
    // Arrange 
    const fileUploadController = new FileUploadController();
    const file = new File([''], '../../../.files_to_validate/arquivoA.CSV', { type: 'text/csv' });
    TopologyValidationBussiness.validateTopology = jest.fn().mockReturnValue({ status: true, message: 'Teste Success' });
    
    // Act
    const result = await fileUploadController.postFileToValidate(file);

    // Assert
    await waitFor(() => {
      expect(result.message).toBeTruthy();
    });
    expect(TopologyValidationBussiness.validateTopology).toHaveBeenCalled();
  });

  it('Should Return a Message When Status is not True', async () => {
    // Arrange
    const fileUploadController =  new FileUploadController();
    const file = new File([''], '../../../.files_to_validate/arquivoE.CSV', { type: 'text/csv' });
    TopologyValidationBussiness.validateTopology = jest.fn().mockReturnValue({ status: false, message: 'Teste With Error' });

    // Act
    const result = await fileUploadController.postFileToValidate(file);
    await waitFor(() => {
      expect(result.status).toBeFalsy();
    });
    expect(TopologyValidationBussiness.validateTopology).toHaveBeenCalled();
    expect(result.message).toEqual('Teste With Error');
  });

  it('Should Throws Error when Try to Validate Topologia', async () => {
    // Arrange
    const fileUploadController =  new FileUploadController();
    const file = {} as File; 
    jest.mock('../../../src/Controller/FileUploadController', () => {
      return {
        __esModule: true,
        default: {
          readFileAsync: jest.fn().mockRejectedValue(new Error('Erro ao ler o conteúdo do arquivo.')),
        },
      };
    });

    // Act
    const result = await fileUploadController.postFileToValidate(file);
    
    // Assert
    await waitFor(() => {
      expect(result.status).toBeFalsy();
    });    
    
    expect(result.message).not.toBeNull();
  });
});

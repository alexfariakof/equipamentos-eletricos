import './App.css';
import FileUpload from './Components/FileUpload/FileUpload';

const App = () => {
  return (
    <div className="app" data-testid="app">
      <div className= "app-header">Validação de Equipamentos Elétricos</div>
      <div className="app-body" data-testid="app-body">
        <FileUpload></FileUpload>
      </div>
    </div>
  );
}

export default App;

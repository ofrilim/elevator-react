import './styles/global.scss';
import { Building } from './components/Building';

export const App = () => {
  
  return (
    <div className="App">
      <header className="App-header center bold capitalize">
       <h1>elevator exercise</h1>
      </header>
      <Building />
    </div>
  );
}

import './App.css';
import Button from './components/Button/Button';
import Inputbox from './components/Input/Inputbox';
import Logo from './components/Logo/Logo';
import Para from './components/Para/Para';

function App() {
  return (
    <div className='container'>
        <Logo />
        <div>
          <Inputbox />
          <Button />
        </div>

        <Para />
    </div>
  );
}

export default App;

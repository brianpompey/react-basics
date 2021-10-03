import './App.css';
import Button from './Components/button';

function App() {
  return (
    <>
    <div>
      Welcome to the Counter
    </div>
    <Button buttonName="Up"/>
    <Button buttonName="Down"/>
    <Button buttonName="Reset"/>
    </>
  );
}

export default App;
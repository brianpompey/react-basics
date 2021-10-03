import './App.css';
import Button from './Components/button';

function App() {
  return (
    <>
    <div>
      Welcome to the Counter
    </div>
    <div className="buttonGroup">
      <Button buttonName="Up"/>
      <Button buttonName="Down"/>
      <Button buttonName="Reset"/>
    </div>
    </>
  );
}

export default App;
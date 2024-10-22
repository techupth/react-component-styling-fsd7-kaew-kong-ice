import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";


function App() {
  return (
    <div className="App">
      <div className="button-components-section">
      <Button color="primary" title="Button" />
      <Button color="secondary" title="Button" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert text="error"/>
        <Alert text="warning"/>
        <Alert text="info"/>
        <Alert text="success"/>
      </div>
    </div>
  );
}

export default App;

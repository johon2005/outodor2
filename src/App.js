import "./style/App.css";
import Header from "./component/header/header";
import Body from "./component/body/Body";
import Foter from "./foter/foter";
function App() {
  return (
    <div className="App">
      <Header />
      <Body /> 
      <Foter/>
    </div>
  );
}

export default App;

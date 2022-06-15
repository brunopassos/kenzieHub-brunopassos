import { CreateGlobalStyle } from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <CreateGlobalStyle/>
      <Routes/>
    </div>
  );
}

export default App;

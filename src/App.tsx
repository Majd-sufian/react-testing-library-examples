import "./App.css";
import { CounterTwo } from "./components/counter-two/CounterTwo";
import { MuiMode } from "./components/mui/MuiMode";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <CounterTwo
          count={1}
          handleDecrement={() => {}}
          handleIncrement={() => {}}
        />
      </div>
    </AppProviders>
  );
}

export default App;

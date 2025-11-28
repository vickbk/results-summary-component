import "./App.css";
import { ResultCard } from "./components/result-card/ResultCard";

function App() {
  return (
    <main className="grid place-items-center min-h-screen">
      <h1 className="sr-only">A page containing a result summary component.</h1>
      <ResultCard />
    </main>
  );
}

export default App;

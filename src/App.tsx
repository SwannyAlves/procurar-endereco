import { Home } from "./components/Home";
import CepContextProvider from "./context/ContextCep";

export function App() {
  return (
    <div className="App">
      <>
        <CepContextProvider>
          <Home />
        </CepContextProvider>
      </>
    </div>
  );
  // }
}

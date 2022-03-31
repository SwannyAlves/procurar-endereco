import CepContextProvider from "./context/ContextCep";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <div className="App">
      <CepContextProvider>
        <Home />
      </CepContextProvider>
    </div>
  );
};

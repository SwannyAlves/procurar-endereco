import { Home } from "./pages/Home";
import CepContextProvider from "./context/ContextCep";

export const App = () => {
  return (
    <div className="App">
      <>
        <CepContextProvider>
          <Home />
        </CepContextProvider>
      </>
    </div>
  );
};

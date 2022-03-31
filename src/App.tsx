import CepContextProvider from "./context/ContextCep";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <div className="App">
      <CepContextProvider>
        <GlobalStyle />
        <Home />
      </CepContextProvider>
    </div>
  );
};

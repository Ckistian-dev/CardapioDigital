import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarrinhoProvider } from "./context/CarrinhoContext";

import SorveteriaSummerIce from "./pages/SorveteriaSummerIce";
import ConferirPedido from "./pages/ConferirPedido";
import SelecionarEntrega from "./pages/SelecionarEntrega";
import SelecionarPagamento from "./pages/SelecionarPagamento";
import EnviarPedido from "./pages/EnviarPedido";

function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/SorveteriaSummerIce">
            <Route index element={<SorveteriaSummerIce />} />
            <Route path="ConferirPedido" element={<ConferirPedido />} />
            <Route path="SelecionarEntrega" element={<SelecionarEntrega />} />
            <Route path="SelecionarPagamento" element={<SelecionarPagamento />} />
            <Route path="EnviarPedido" element={<EnviarPedido />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
  );
}

export default App;

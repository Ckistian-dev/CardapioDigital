import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SorveteriaSummerIce from "./pages/SorveteriaSummerIce";
import ConferirPedido from "./pages/ConferirPedido";
import SelecionarEntrega from "./pages/SelecionarEntrega";
import SelecionarPagamento from "./pages/SelecionarPagamento";
import EnviarPedido from "./pages/EnviarPedido";
import LayoutCardapio from "./layouts/LayoutCardapio";

function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          toastClassName="rounded-md shadow-md text-sm px-3 py-2 max-w-[60vw] sm:max-w-xs"
          bodyClassName="text-sm"
          icon={false}
          style={{ marginTop: "15px" }} // 🔽 Espaçamento personalizado do topo
        />


        <Routes>
          <Route path="/SorveteriaSummerIce" element={<LayoutCardapio />}>
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

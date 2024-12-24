import { BrowserRouter, Route, Routes } from "react-router"
import SobreMim from "./Paginas/SobreMim"
import Inicio from "./Paginas/Inicio"
import Menu from "./Componentes/Menu"
import Rodape from "Componentes/Rodape"
import PaginaPadrao from "Componentes/PaginaPadrao"


function AppRoutes() {

  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;

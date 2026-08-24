import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Router from "./Router";
import "./Global.css"

function App() {

  return (
    <div className="container">
      <Header titleHeader="🍕 Bem-vindo à OpenPizzaria!"
      texteHeader="As melhores pizzas, feitas com carinho e muito sabor para você!"
      />

      <Menu />

      <Router />
   
      <Footer titleFooter="OpenPizzaria! - Todos os direitos reservados - 2026"/>

     
    </div>
  )
}

export default App

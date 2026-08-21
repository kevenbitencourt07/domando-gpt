import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import FeedBack from "./Components/FeedBack"
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import "./Global.css"

function App() {

  return (
    <div className="container">
      <Header titleHeader="🍕 Bem-vindo à OpenPizzaria!"
      texteHeader="As melhores pizzas, feitas com carinho e muito sabor para você!"
      />

      <Menu />

      <Banner /> 

      <Cards />

      <FeedBack />

      <Footer titleFooter="OpenPizzaria! - Todos os direitos reservados - 2026"/>

     
    </div>
  )
}

export default App

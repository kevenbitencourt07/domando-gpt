import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = () => {

    return (

        <nav>
           <ul>
            <li><a href="/">Home</a></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/cardapio">Cardápio</Link></li>
            <li>
                <a href="#">Mais</a>
                    <ul>
                        <li>
                            <a href="#">Fale Conosco</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">Faq</a>
                        </li>
                    </ul>    
            </li>  
           </ul>
        </nav>

    )
}

export default Menu
import  { useState } from "react"
import { Link, NavLink } from "react-router-dom";


    // <div>Navbar</div>

    const Navbar = ()=> {
        const [menuopen, setMenuOpen] = useState(false);

        const handleMenuItemClick = ()=> {
            setMenuOpen(false);
        };

        const [modal, setModal] = useState(false);
        if(modal){
            document.body.classList.add('active-modal');
        }else{
            document.body.classList.remove('active-modal');
        }

        const handleFormSubmit = ()=> {

        }

        return(
            <>

            <nav>
                <input type="button" id="click" checked={menuopen} onChange={()=> setMenuOpen}/>
                <label htmlFor="click" className="menu-btn">
                   <i className="fa fa-bars"></i>
                   <div id="logo">
                                        
                    <Link to='/' className='navbar-brand'><h1>Restaurant</h1></Link>

                   </div>
                </label>
                <ul>
                    <li><NavLink activeclassname='active' to='/' onClick={handleMenuItemClick}>Inicio</NavLink></li>
                    <li><NavLink to='/about' onClick={handleMenuItemClick}>Sobre</NavLink></li>
                    <li><NavLink to='/services' onClick={handleMenuItemClick}>Serviços</NavLink></li>
                    <li><NavLink to='/pricing' onClick={handleMenuItemClick}>Produtos</NavLink></li>
                    <li><NavLink to='/team' onClick={handleMenuItemClick}>Equipe</NavLink></li>
                    <li><NavLink to='/contact' onClick={handleMenuItemClick}>Contato</NavLink></li>
                </ul>

                

            </nav>
        

        </>
        );
    }

export default Navbar;

  

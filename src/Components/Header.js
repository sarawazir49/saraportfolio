import {Link} from 'react-router-dom';
import ReusableButton from '../Components/Button';
const   Header= ()=>{
    return  (
        <header>
        <div className="container1">
        
              
    
                <form action="input">
                    <label htmlfor="inputsearch" className="label__search">
                        <input type="text" className="input__text" id="inputsearch" placeholder="Search ">
                        </input>
                    </label>
                    <ReusableButton  className="form__buttontext">Search <i className="fa fa-search"></i>
                        </ReusableButton>
                </form>
                <div className="scroll-down" >
                    <a href="#menu"> <h3>Scroll down <i className="fa fa-angle-double-down"></i></h3>    
                    </a>
                </div></div>
                    <section id="menu">
                        <div className="wrapper">
                            <h3 className="nav__title">SARAD</h3>
                                
                        
                                <nav className="navigation">
                                    <ul className="menu">
                                       <li className="Home">
                                        <Link className='links' to = "/Home">Home</Link>
                                       
                                       </li>

                                       <li className="About">
                                        <Link className='links' to = "/About">About</Link></li>
                                       
                                       <li className="Contact"><Link className='links'  to = "/Contact">Contact</Link></li>
                                    </ul>
                
                                </nav>
                            </div>
                        
                    </section>
                  
    </header>
        );
};

export default Header;
import {Link} from 'react-router-dom';

const   Header= ()=>{
    return  (
        <header>
        <div className="container1">
        
              
    
       
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
                                        <Link className='links' to = "/">Home</Link>
                                       
                                       </li>

                                       <li className="About">
                                        <Link className='links' to = "/About">About</Link></li>
                                        <li className="About">
                                        <Link className='links' to = "/Cv">Cv</Link></li>
                                       
                                       <li className="Contact"><Link className='links'  to = "/Contact">Contact</Link></li>
                                    </ul>
                
                                </nav>
                            </div>
                        
                    </section>
                  
    </header>
        );
};

export default Header;
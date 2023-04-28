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
                                       <li className="Home" ><a href="/Home">Home </a></li>

                                       <li className="About"><a href="/About">About</a></li>
                                       
                                       <li className="Contact"><a href="/Contact">Contact  </a></li>
                                    </ul>
                
                                </nav>
                            </div>
                        
                    </section>
                  
    </header>
        );
};

export default Header;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

class Footer extends Component {
  render() {
    return(
        <>
          <footer>
          <hr className='footer-seperator'/>  
          <section className='footer'>
              <section className='navbar'>
                 <div className='nav-links'>
                    
                      <NavLink to = "/" className='navitem'>Come Home</NavLink>
                  
                    <nav>
                      <a href="#top" className='navitem'>Back to top</a>
                    </nav>
                </div>
              </section>
            </section>
            <hr className='footer-separator'/>
          </footer>



        
               
        </>
    
    ) 
  }
}

export default Footer
import React from 'react'
import {Link} from 'react-router-dom';

import { ProductConsumer } from "./context";

import img from './img.jpg'

import './style.css';


const Navbar = (props) => {


    return (
        <div style={{backgroundColor:'black',width:'100%',height:'80px',color:'white'}} >

            <Link to='/'   style={{backgroundColor:'white',borderRadius:'90px',fontSize:'25px',marginLeft:'30px'}} >-HOME-</Link>

            <center >
                <Link to='/Cart'   style={{borderRadius:'90px',fontSize:'25px',backgroundColor:'white'}} >-CART-</Link>
            </center>

        <ProductConsumer>
            {
                (value) => {
                    return(
                        
                            <div className='divImg'><img  src={img} className='img1' /><spam className='quant'>{value.cart.length}</spam></div>
                        
                    )
                }
            }
        </ProductConsumer>

        </div>
    )

}
export default Navbar;
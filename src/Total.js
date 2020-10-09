import React from 'react';

import './style.css';

import { ProductConsumer } from "./context";


const Total = (props) => {


    return (
        <div>
            <ProductConsumer>
                {
                    (value) => {
                        return (
                            <div >
                                <h1 style={{border:'5px solid black' , width:'150px',textAlign:'center'}}>TOTAL</h1>
                        <h3 className='total'>{value.cartTotal}</h3>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        </div>
    )
}
export default Total
import React, {  useContext } from 'react'

import { ProductConsumer } from "./context";

import Total from './Total';

import './style.css';

class Header extends React.Component {
  
  constructor(props){
    super();

  }


  


  

  
   

render(){

    return (
      
        <div >
            
        <div className="row " style={{backgroundColor:'grey'}}>
          <div className="col-8 mx-auto col-lg-1">
            <p className="text-uppercase">ID</p>
          </div>
          <div className="col-8 mx-auto col-lg-1">
            <p className="text-uppercase">Pictures</p>
          </div>
          <div className="col-8 mx-auto col-lg-1">
            <p className="text-uppercase">Name</p>
          </div>
          <div className="col-8 mx-auto col-lg-1">
            <p className="text-uppercase">Quantity</p>
          </div>
          <div className="col-8 mx-auto col-lg-1">
            <p className="text-uppercase">price</p>
          </div>
          <div className="col-8 mx-auto col-lg-1">
            <p className="text-uppercase">remove</p>
          </div>
          <div className="col-8 mx-auto col-lg-1">
            <p className="text-uppercase">*****</p>
          </div>
        </div>
        {/* <ProductConsumer>
        {
          (hello) => {
            return <h1 style={{backgroundColor:'red'}}>{hello}</h1>
          }
        }
        </ProductConsumer> */}
      

      <ProductConsumer>
        {
          (value) => {
            console.log(value) //sra mijocov tesnum es poxancvacvnery
           return(
             <div  style={{marginTop:'110px'}}>
  {
          value.cart.map(item => {
    return(
      <ul key={item.id} className='ul'>
      <li className='ids'> {item.id} </li>
      <img src={item.img}  style={{width:'200px',height:"200px"}}  className='phone'/>
      <li className='name'> {item.title} </li>


      <li style={{marginLeft:'80px'}}>
        <button style={{backgroundColor:'black',color:'white' , borderRadius:'90px',fontSize:'35px'}} onClick={() => value.decrement(item.id)}>-</button>

            <spam  style={{margin:'0 15px' , border:'5px solid black',fontSize:'35px'}}>{item.count}</spam>

        <button style={{backgroundColor:'black',color:'white' , borderRadius:'90px',fontSize:'35px'}} onClick={() => value.increment(item.id)}>+</button>  
         </li>


      <li className='price'> {item.price}$ </li>
      <li ><button className='delete' onClick={() => value.removeItem(item.id)}>DELETE</button></li>
      
    </ul>
    )
    
    
  })
}
  </div> 
           )
             
          }
        }
        
        </ProductConsumer>
      
        <Total/>

        </div>
    )
    }
}

export default Header;
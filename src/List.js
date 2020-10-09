import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import { ProductConsumer } from "./context";




class List extends React.Component {

    
    

    










    render(){

     

        return (
            <div>
             
        
      <ProductConsumer>
        {
          (value) => {
            return(
              <div style={{display:'flex'}}>

              {
   value.products.map(item => {
     return (
       <div key={item.id} style={{width:'300px',height:"300px"}} >
           <h1> {item.id} </h1>
           <img src={item.img}  style={{width:'200px',height:"200px"}} />
           <h3> {item.title} </h3>
           <h2> {item.price}$ </h2>
               <button 
                   onClick={() => value.addToCart(item.id)} 
                   disabled={item.inCart ? true : false} >
                 ADD
               </button>
       </div>
     )
   })
 }
 
              </div>
            )
          }
        }
      </ProductConsumer>



            </div>
        )

            


            
         
    }
}
export default withRouter(List);










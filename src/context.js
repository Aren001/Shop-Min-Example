import React from "react";


const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [],
      cart: [],

      cartTotal:0,
      cartSubTotal:0,

      
    };
    this.fetchs=this.fetchs
  }



  fetchs(){
    fetch('https://run.mocky.io/v3/8e6b09e6-cac5-43e5-aa20-c11d2c65c03c')
    .then(resp=>resp.json())
    .then(data => {
        this.setState({
          products:data.arr
        })
        console.log(data)
    })
  }    

    
componentDidMount(){
  
  this.fetchs()
}
 

//   ADD  get ID


getItem = id => {
  const product = this.state.products.find(item => item.id === id);
  return product;
};



addToCart = (id) => {

    let arr = [...this.state.products];
    const index = arr.indexOf(this.getItem(id));
    const product = arr[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
  



    this.setState({
      cart: [...this.state.cart, product],
      // disabl:true
     
    
    },() => this.getTotals())
       
}



// DELETE




removeItem = id => {
  let tempProducts = [...this.state.products];
  let tempCart = [...this.state.cart];


  //myus zangvaci hetelenq ashxatum stexic  vor toxi eli avelacnenq

  const index = tempProducts.indexOf(this.getItem(id));
  let removedProduct = tempProducts[index];
  removedProduct.inCart = false;
  removedProduct.count = 0;
  removedProduct.total = 0;




  //menak sranovel karanq  jnjenq
  tempCart = tempCart.filter(item => {
    return item.id !== id;
  });


  this.setState(() => {
    return {
      cart: [...tempCart],
      products: [...tempProducts]
    };
  },() => this.getTotals());
};


// TOTALS

getTotals = () => {
   
  let subTotal = 0;
  this.state.cart.map(item => (subTotal += item.total));
  const total = subTotal ;
  this.setState({
    cartTotal:total
  })
};



// INC DEC

increment = (id) => {
  let arr = [...this.state.cart];
    const index = arr.indexOf(this.getItem(id));
    const product = arr[index];
    product.count=product.count+1;
    product.total = product.count * product.price;


    this.setState({
      cart:[...arr]
    },() => this.getTotals())
}



decrement = (id) => {
  let arr = [...this.state.cart];
    const index = arr.indexOf(this.getItem(id));
    const product = arr[index];
    product.count=product.count-1;


    if (product.count === 0) {
      this.removeItem(id)
      return
    } else {
      product.total = product.count * product.price;
    }

    this.setState({
      cart:[...arr]
    },() => this.getTotals())
}

    
  



   
    render() {
      return (
        <ProductContext.Provider
          value={{
            ...this.state,
            addToCart:this.addToCart,
            removeItem:this.removeItem,
            increment:this.increment,
            decrement:this.decrement
          }}
        >
          
          {this.props.children}
        </ProductContext.Provider>
      );
    }
  }
  
  const ProductConsumer = ProductContext.Consumer;
  
  export { ProductProvider, ProductConsumer };
  
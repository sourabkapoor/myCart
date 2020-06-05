import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Categories from './Components/Cate/cate';
import Products from './Components/Products/Products';
import Filter from './Components/Filter/Filter';
import Cart from './Components/Cart/Cart';
import Define from './Components/Define/Define'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      route: 'categories',
      categories: [],
      index: '',
      products: [], 
      filteredProducts: [],
      addToCart: [], 
      name: '',
      price: '',
      describe: ''
    }
  }

  componentDidMount() {
    fetch('shop.json')
    .then(resp => resp.json())
    .then(resp=> this.setState({categories: resp.hits, filteredProducts: resp.hits}))
  }

  indexChange=(i)=> {
    this.setState({index: i})
    if(this.state.route === 'categories')
      this.setState({route: 'products'})
    console.log(i);
  }

  onPress = () => {
    this.setState({route: 'categories'})
  }

  routeChange = () => {
    this.setState({route: 'cart'})
  }
  cartPress = () => {
    this.setState({route: 'cart'})
  }
  back = () => {
    this.setState({route: 'products'})
  }

  changeSort = (e) => {
    this.setState({sort: e.target.value})
    this.listProducts()
  }

  listProducts = () => {
    this.setState(state => {
      if(state.sort !== '') {
        state.categories.sort((a,b)=> (state.sort==='lowest')? (a.price < b?1:-1):(a.price > b?1:-1) )
      }
    //return (this.state.filteredProducts: state.products)
    console.log(state.products);
    })
  }

  onDefine = (e) => {
    this.setState({name: e.title})
    this.setState({price: e.price})
    this.setState({describe: e.description})
    this.setState({route: 'define'})
  }

  addToCart = (e) => {
    this.setState(prevState => ({
    addToCart: [...prevState.addToCart, e]
    }))
    console.log(this.state.addToCart)
  }
  
  cartRemove = (e) => {
    console.log(Object.values(e))
    this.setState({addToCart: this.state.addToCart.filter(function(item) { 
      return item.title !== e.title
    })})
  }

  render() {
    return (
      <div className="App">
        { this.state.route==='categories' ?
          <div> 
          {console.log(this.state.route)}
          <Nav onPressing={this.onPress} addToCart={this.state.addToCart} cartPress={this.cartPress}/>
          <br/>
          <h2 className='courier b'>Categories</h2>
          <hr className='w-60 fw4 ba'/>
          <Categories names={this.state.categories} index={this.indexChange} /> 
          </div>
          : null
        }
        { this.state.route === 'products' ? 
          <div> 
          {console.log(this.state.route)}
          <Nav onPressing={this.onPress} addtoCart={this.addtoCart} cartPress={this.cartPress}/>
          <br/>
          <h2 className='courier b'>Products</h2>
          <Filter sort={this.state.sort} ava={this.state.ava} changeava={this.state.changeava} changeSort={this.state.changeSort}/>
          <hr className='w-60 fw4 ba'/>
          <Products names={this.state.categories} index={this.state.index} addToCart={this.addToCart} define={this.onDefine}/>
          </div>
          :  null
        }
        { this.state.route==='cart' ?
          <div>
            {console.log(this.state.route)}
            <Nav onPressing={this.onPress} addtoCart={this.addtoCart} cartPress={this.cartPress}/>
            <br/>
            <h2 className='courier b'>Cart</h2>
            <hr className='w-60 fw4 ba'/>
            <br/>
            <Cart onPress={this.onPress} cart={this.state.addToCart} remove={this.cartRemove}/>
          </div>
          : null
        } 
        { this.state.route==='define' ?
          <div>
            {console.log(this.state.route)}
            <Nav onPressing={this.onPress} addtoCart={this.addtoCart} cartPress={this.cartPress}/>
            <br/>
            <Define back={this.back} name={this.state.name} price={this.state.price} description={this.state.describe} addToCart={this.addToCart}/>
          </div> 
          : null
        }
        </div>
    );
  }
}

export default App;





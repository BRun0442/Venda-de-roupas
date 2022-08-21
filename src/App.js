import './App.css';

import Logo from './components/Logo/logo';
import Finder from './components/Finder/finder';
import HeadItem from './components/HeadItem/HeadItem';
import ProductCard from './components/ProductCard/productCard';

import Cart from './components/icons/cart_v2.png';
import Favorite from './components/icons/favorite.png';
import User from './components/icons/user_v2.png';
import Product from './components/img/calcaJeans.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container" style={
          {
            width: "55vw",
          }}>

          <Logo></Logo>
          <Finder></Finder>
        </div>


        <div className="container" style={
          {
            width: "30vw", 
            justifyContent: "space-around", 
            alignContent: "flex-end",
          }}>

          <HeadItem img={Favorite} text="Favoritos"></HeadItem>
          <HeadItem img={Cart}></HeadItem>
          <HeadItem img={User} text="Entrar"></HeadItem>
        </div>

        
      </header>

      <section className="menu">
                {/* seções masculino feminino infantil etc */}
      </section> 

      <section className="body">
        <div className="filter">
          <ul>
            <li>Exemplo</li>
            <li>Exemplo
              <ul>
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
              </ul>
            </li>
            <li>Exemplo</li>
          </ul>
        </div>


        <div className="products">
          <ProductCard img={Product} name="calça jeans" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard img={Product} name="calça jeans" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard img={Product} name="calça jeans" desc="calça jeans amarela" price="79,90"></ProductCard>

          <ProductCard img={Product} name="calça jeans" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard img={Product} name="calça jeans" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard img={Product} name="calça jeans" desc="calça jeans amarela" price="79,90"></ProductCard>
        </div>
      </section>
    </div>
  );
}

export default App;

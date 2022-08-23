import './App.css';

import Logo from './components/Logo/logo';
import Finder from './components/Finder/finder';
import HeadItem from './components/HeadItem/HeadItem';
import ProductCard from './components/ProductCard/productCard';

import Cart from './components/icons/cart_v2.png';
import Favorite from './components/icons/favorite.png';
import User from './components/icons/user_v2.png';
import CalcaJeans from './components/img/calcaJeans.png';
import TenisAdidas from './components/img/tenisAdidas.png';
import AirMax from './components/img/airmax.png';

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <div className="container" style={
          {
            width: "55vw",
            minWidth: "374px",
            flexWrap: "wrap",
          }}>

          <Logo></Logo>
          <Finder></Finder>
        </div>

        <div className="container" style={
          {
            width: "calc(30vw + 20px)", 
            // minWidth: "40vw",
          }}>

          <div className="container"style={
          {
            width: "35vw",
          }}>
            <HeadItem img={Favorite} text="Favoritos"></HeadItem>
            <HeadItem img={Cart}></HeadItem>
            <HeadItem img={User} text="Entrar"></HeadItem>
          </div>
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
          <ProductCard link="#" img={CalcaJeans} name="calça jeans" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard height="49vh" link="#" img={TenisAdidas} name="Tênis Adidas Breaknet Masculino" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard link="#" img={CalcaJeans} name="calça jeans" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard height="49vh" link="#" img={TenisAdidas} name="Tênis Adidas Breaknet Masculino" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard height="49vh" link="#" img={TenisAdidas} name="Tênis Adidas Breaknet Masculino" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard link="#" img={CalcaJeans} name="calça jeans" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard height="49vh" link="#" img={TenisAdidas} name="Tênis Adidas Breaknet Masculino" desc="calça jeans amarela" price="79,90"></ProductCard>
          <ProductCard height="20vh" img={AirMax} name="Tênis Nike Air Max Impact 2 - Cinza+Vermelho" price="296,99"></ProductCard>
        </div>
      </section>
    </div>
  );
}

export default App;

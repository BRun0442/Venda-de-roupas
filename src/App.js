import './App.css';

import Logo from './components/Logo/logo';
import Finder from './components/Finder/finder';
import HeadItem from './components/HeadItem/HeadItem';

import Cart from './components/cart_v2.png';
import Favorite from './components/favorite.png';
import User from './components/user_v2.png';


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
          <HeadItem img={Cart} text=""></HeadItem>
          <HeadItem img={User} text="Entrar"></HeadItem>
        </div>
      </header>



    </div>
  );
}

export default App;

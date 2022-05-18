import './styles/App.css';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

function Header(){
  const aloha = ()  => {
    alert("Never use alert()")
  }
    return (
        <div className="App">
          <h1>
            Simon aka JURET <code><u>ÄLSKAR</u></code> <b>MIN MAMMA.</b>
          </h1>
        <header className="App-header">
        <nav className='Navbar'>
            <ul className='HeaderUl'>
              <div className='HeaderUl1'>
                <li><Link to="/" className='App-link'>Home</Link></li>
                <li><Link to="/betty" className='App-link'>Betty White</Link></li>
                <button onClick={aloha} className='btn'>ALERT</button>
                <li><Link to="/counter" className='App-link'>Counter</Link></li>
              </div>
              <div className='HeaderUl2'>
                <li><Link to="/inputdup" className='App-link'>InputDuplication</Link></li>
                <li><Link to="/diceroller" className='App-link'>DiceRoller</Link></li>
                <li><Link to="/form" className='App-link'>Form</Link></li>
              </div>
            </ul>
        </nav>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
}

export default Header;
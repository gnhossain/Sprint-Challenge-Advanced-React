import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import PlayerCard from './components/PlayerCard';


class App extends React.Component {

  constructor()
  {
    super();
    this.state = {
      players:[]
    }
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        this.setState({players: res.data});
        // console.log(this.state.players);
      })
      .catch(err => console.log(err));
  }


  render()
  {
    return (
      <div className='App'>
        <NavBar />
        <h1 className='title'>
          Women's World Cup Players
        </h1>
        <div className="cards">
          {this.state.players.map( player => (
            <PlayerCard player={player} key={player.id}/>
          ))}
          </div>
      </div>
    );
  }
}
export default App;

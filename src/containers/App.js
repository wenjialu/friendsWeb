import React, {Component} from "react";
import CardList from "../components/CardList";
//import {robots} from "./robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"


class App extends Component {
  constructor(){
    super()
    this.state = {
      robots : [],
      searchfield: ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response =>{ response.json()
      .then(users => this.setState({ robots: users}));
      })
  }


  // 这里一定要用箭头函数，因为这个是在Searchbox被调用的，不这样写会找不到this
  onSearchChange = (event ) => {
    this.setState({ searchfield: event.target.value})
  }

  render(){
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter( robots =>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase())
   })
   if (robots.length === 0){
     return <h1>Loading</h1>
   } else{
    return (
      <div className="tc"> 
      {/* textcenter */}
      <h1 className="f1">RoboFriends</h1>
      < SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
      {/* state 传到这变 props 作为{robots} 传到 CardList*/}
      <CardList robots={filteredRobots}/>
      </Scroll>
      </div>
    );
   } 
  }
}
  

export default App;

import React from 'react';
import Card from "./Card";

// robot 是js， 不加大括号会报错！
function CardList({robots}) {
    const cardsArray = robots.map( 
        (uesr, i) => 
        {return <Card key={i} id = {robots[i].id} name={robots[i].name} email ={robots[i].email}/>
    })
  return (
      <div>
        {cardsArray}
      </div>
  )}

  export default CardList;
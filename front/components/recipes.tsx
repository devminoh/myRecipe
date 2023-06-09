import React from 'react';
import Card from './card';

interface Prop {
  category: string;
}

const Recipes = ({category}: Prop) => {
  
  return(<div>
    {category}
    <Card />
  </div>)
}

export default Recipes;
import React from 'react';

interface Prop {
  category: string;
}

const Recipes = ({category}: Prop) => {
  
  return(<div>
    {category}
  </div>)
}

export default Recipes;
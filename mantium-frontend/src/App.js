import { useState } from 'react'
import Header from './components/Header'
import Ingredients from './components/Ingredients'


function App() {
  //const name = 'Mantium';
  const [ingredients, setIngredients] = useState(
    [
      {
        id: 1,
        name: 'tomato',
        amount: '1',
        unit: 'lb',
        use: true
      },
      {
        id: 2,
        name: 'basil',
        amount: '1',
        unit: 'oz',
        use: true
      },
      {
        id: 3,
        name: 'mozzarella',
        amount: '3',
        unit: 'oz',
        use: true
      }
    ]
  )

  return (
    <div className="container">
      <Header />
      <Ingredients ingredients={ingredients} />
    </div>
  );
}


export default App;

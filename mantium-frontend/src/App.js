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

  // Delete Ingredient
  const deleteIngredient = (id) => {
    setIngredients(ingredients.filter((task) => task.id !== id))
  }

  // Toggle Use
  const toggleUse = (id) => {
    console.log('using id', id)
    setIngredients(
      ingredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, use: !ingredient.use } : ingredient))
  }

  return (
    <div className='container'>
      <Header />
      {ingredients.length > 0 ? < Ingredients ingredients={ingredients}
        onDelete={deleteIngredient} onToggle={toggleUse} /> : 'Add Ingredients!'}
    </div>
  );
}


export default App;

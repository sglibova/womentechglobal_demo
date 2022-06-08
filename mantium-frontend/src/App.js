import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Ingredients from './components/Ingredients'
import AddIngredient from './components/AddIngredient'
import About from './components/About'

function App() {
  const [showAddIngredient, setShowAddIngredient] = useState(false)
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState('')

  useEffect(() => {
    const getIngredients = async () => {
      const ingredientsFromServer = await fetchIngredients()
      setIngredients(ingredientsFromServer)
    }

    getIngredients()
  }, [])

  // Fetch Ingredients
  const fetchIngredients = async () => {
    const response = await fetch('http://localhost:8000/ingredients')
    const data = await response.json()

    return data

  }

  // Fetch Ingredient
  const fetchIngredient = async (id) => {
    const response = await fetch(`http://localhost:8000/ingredients/${id}`)
    const data = await response.json()

    return data
  }

  // Add Ingredient
  const addIngredient = async (ingredient) => {
    console.log('added ingredient', ingredient)
    const id = Math.floor(Math.random() * 10000) + 1
    const newIngredient = { id, ...ingredient }

    const response = await fetch('http://localhost:8000/ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newIngredient)
    })

    const data = await response.json()

    setIngredients([...ingredients, data])
  }

  // Delete Ingredient
  const deleteIngredient = async (id) => {
    await fetch(`http://localhost:8000/ingredients/${id}`, {
      method: 'DELETE'
    }).then(
      response => { setIngredients(response.ingredients) }
    ).catch(error => console.log(error))
  }

  // Create Recipe
  const createRecipe = async () => {
    console.log({ "ingredients": ingredients })
    await fetch('http://localhost:8000/recipe', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "ingredients": ingredients })
    }).then(
      response => { setRecipe(response.recipe) }
    ).catch(error => console.log(error))
  }


  // Toggle Use
  const toggleUse = async (id) => {
    const ingredientToToggle = await fetchIngredient(id)
    const updatedIngredient = { ...ingredientToToggle, use: !ingredientToToggle.use }

    const response = await fetch(`http://localhost:8000/ingredients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedIngredient)
    })

    const data = await response.json()

    setIngredients(
      ingredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, use: !data.use } : ingredient
      )
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header onAdd={() => setShowAddIngredient(!showAddIngredient)} showAdd={showAddIngredient} createRecipe={createRecipe} />
        <Routes>
          <Route path='/' element={
            <>
              {showAddIngredient && <AddIngredient onAdd={addIngredient} />}
              {ingredients.length > 0 ? < Ingredients ingredients={ingredients}
                onDelete={deleteIngredient} onToggle={toggleUse} /> : 'Add Ingredients!'}
            </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
        {recipe && <h1>{recipe}</h1>}
        <Footer />
      </div>
    </Router>
  )
}

export default App
import Ingredient from './Ingredient'

const Ingredients = ({ ingredients }) => {

    return (
        <>
            {ingredients.map((ingredient) => (
                <Ingredient key={ingredient.id} ingredient={ingredient} />
            ))}
        </>
    )
}

export default Ingredients
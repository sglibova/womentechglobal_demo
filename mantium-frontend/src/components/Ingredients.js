import Ingredient from './Ingredient'

const Ingredients = ({ ingredients, onDelete, onToggle }) => {

    return (
        <>
            {ingredients.map((ingredient) => (
                <Ingredient key={ingredient.id}
                    ingredient={ingredient}
                    onDelete={onDelete}
                    onToggle={onToggle} />
            ))}
        </>
    )
}

export default Ingredients
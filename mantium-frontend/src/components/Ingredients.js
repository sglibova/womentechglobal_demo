import Ingredient from './Ingredient'

const Ingredients = ({ ingredients, onDelete, onToggle }) => {

    return (
        <>
            {ingredients.map((ingredient, index) => (
                <Ingredient key={index}
                    ingredient={ingredient}
                    onDelete={onDelete}
                    onToggle={onToggle} />
            ))}
        </>
    )
}

export default Ingredients
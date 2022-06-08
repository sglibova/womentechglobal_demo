import { FaTimes } from 'react-icons/fa'

const Ingredient = ({ ingredient, onDelete, onToggle }) => {
    return (
        <div
            className={`ingredient ${ingredient.use && 'use'}`}
            onDoubleClick={() => onToggle(ingredient.id)}>
            <h3>
                {ingredient.name}<FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(ingredient.id)} />
            </h3>
            <p>{ingredient.amount} {ingredient.unit}</p>
        </div >
    )
}

export default Ingredient
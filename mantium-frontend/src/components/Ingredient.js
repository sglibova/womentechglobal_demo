import { FaTimes } from 'react-icons/fa'

const Ingredient = ({ ingredient }) => {
    return (
        <div className='ingredient'>
            <h3>
                {ingredient.name}<FaTimes />
            </h3>
            <p>{ingredient.amount} {ingredient.unit}</p>
        </div >
    )
}

export default Ingredient
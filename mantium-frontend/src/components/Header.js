import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            <Button color='Blue' text='Give me a  recipe!' />
        </header>
    )
}

Header.defaultProps = {
    title: 'Mantium RecipeBot'
}

Header.propTypes = {
    title: PropTypes.string,
}

// CSS in JS
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
//     , fontSize: '2rem', textAlign: 'center'
// }

export default Header
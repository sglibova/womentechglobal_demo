import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click Click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Mantium Demo Title'
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
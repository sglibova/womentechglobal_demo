import { useState } from 'react'


const AddIngredient = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [unit, setUnit] = useState('')
    const [use, setUse] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add an ingredient')
            return

        }

        onAdd({ name, amount, unit, use })

        setName('')
        setAmount('')
        setUnit('')
        setUse(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Ingredient</label>
                <input type='text'
                    placeholder='Add Ingredient!'
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Amount</label>
                <input type='text'
                    placeholder='How much of your ingredient?'
                    value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Units</label>
                <input type='text'
                    placeholder='Amount Units'
                    value={unit} onChange={(e) => setUnit(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Do you want to use this ingredient?</label>
                <input
                    type='checkbox'
                    checked={use}
                    value={use} onChange={(e) => setUse(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='Add Ingredient' />

        </form>
    )
}

export default AddIngredient
import React from 'react';
import { useState } from 'react';//importamos useState para los hooks








export const AddCategory = ({onNewCategory}) => {

    //necesito actualizar, usar un hook con stado
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
      
        setInputValue(target.value);//valor del input

    }

    const onSubmit = (event) => {
        event.preventDefault();//evita el comportamiento por defecto del evento del form
        
        onNewCategory( inputValue );
    }


    return (
        
            <form onSubmit = { (event) => onSubmit(event) }>
                <input
                    type='text'
                    placeholder='Buscar Gifts'
                    value = {inputValue}
                    onChange= { onInputChange }
                />
            </form>
        
    )
}
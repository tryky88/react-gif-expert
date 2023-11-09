import React from 'react';
import { useState } from 'react';//importamos useState para los hooks
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';







export const GifExpert = () => {

    //necesito actualizar, usar un hook con stado
    const [categories, setCategories] = useState(['OnePunch ', 'dragon ball']);

    const onAddCategory = (newCategory) => {

        console.log('adding category');
        // setCategories([...categories, newCategory])//hago sprit de categories y añado valorant
        setCategories( cat => [newCategory, ...cat]);//desestructuro categories y añado valorant
        
    }

    

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input  */}
            <AddCategory
                // setCategories = {setCategories}
                onNewCategory={(event) => onAddCategory(event)} />

            {/* listado de targets */}


            
            {categories.map( (category) => {

                return(

                <GifGrid
                    key={category}
                    category= {category}/>
                )                                
            })}
        </>
    ) 

}
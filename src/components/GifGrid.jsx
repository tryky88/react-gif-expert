
import { getGifs } from "../helpers/GetGifs";
import { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";






export const GifGrid = ({ category }) =>{

const { images, isLoading } = useFetchGifs( category );



// console.log({images, isLoading});

//de esto se puede crear un customeHook


    // const [images, setImages] = useState([]);
    
    // const getImages = async () => {
    //         const newImages = await getGifs(category);//esta funcion es una promise, tambien se podria hacer dentro de use effect con .then(...),....
    //         setImages(newImages);
    // }

    // useEffect(() => {   //tiene que devolver una funcion
    //     getImages();

        //tambien con promise
            // getGifs(category)
            //     .then(newImages => setImages(newImages));


    // }, []);
   

    if(images === undefined){
        return ({});
    }
    
    return (

        <>
            <h1 className ='text-center'>{ category }</h1>
            
                
            {
                // isLoading ? (<h2>Cargando...</h2>) : null //el null no se lee en react/js(no se??) se podria hacer así
                isLoading && (<h2>Cargando...</h2>) // es un and logico, otra manera de hacerlo
                // <LoadinMessage Loading= { isLoading } />  //el componente devolveria el component con el texto cargando
            }

            <div className='card-grid'>
                    {
                        //Se puede hacer con destructuring es recomendable
                        images.map( (image) => (
                            <GifGridItem 
                                key={ image.id }
                                // title={ image.title}
                                // url = {image.url}
                                //se podria hacer un spread para que pase todos los argumentos
                                //{ ...image } pasa todos las propiedaes de la image id, title, url
                                {...image}
                            />
                            
                        ))
                    }
                    

            </div>
        
        </>


    )

}
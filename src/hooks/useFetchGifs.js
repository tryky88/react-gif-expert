import { useState, useEffect } from "react";

import { getGifs } from '../helpers/GetGifs'

//un hook no es mas que una funcion que retorna un objeto

export const useFetchGifs = (category) => {
   

    const [images, setImages] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    
    const getImages = async () => {
    
        const newImages = await getGifs(category);//esta funcion es una promise, tambien se podria hacer dentro de use effect con .then(...),....
        
        setImages(newImages);
       
        

        setIsLoading(false);//dipara una renderizacion para los dos sets de los hooks el custome y el de react useState;

    }


    useEffect(() => { //tiene que devolver una funcion, en este caso solo se llama al crear 
        getImages();
        
            

    }, []);

   
    
    return{
        images, //es igual ha hacer image: images,
        isLoading //es igual que hacer isLoading: isLoading,
    }
}

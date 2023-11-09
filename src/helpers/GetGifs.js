const limit = 10;

export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FJlIHNO0pnNQ5jL7lTe2SlgUyNhS8RG1&q=${category}&limit=${limit}`;
    const respuesta = await fetch( url);
    const { data } = await respuesta.json();
    console.log(data);
    const gifs = data.map( img => ({ //equivale ha hacer return() - retorno un objeto

        id: img.id,
        title: img.title,
        url: img.images.fixed_width_still.url // coge de images la original y la url de la original

    }))

    

  

    // console.log(gifs);
    return gifs;
}
const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=PSVSVWKUcO3FmKN2W6EiKgp8YQLIvGf4&q=${category}&limit=10`

    const resp = await fetch(url);
    const { data } = await resp.json()


    const gifs = data.map(el => (
        {
            id: el.id,
            title: el.title,
            url: el.images.downsized_medium.url
        }
    ))

    console.log(gifs)

    return gifs
};

export default getGifs
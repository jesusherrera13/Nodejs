const index = async(req, res) => {
    try {
        console.log("peliculas index");
        res.json({message: "peliculas index"});
        
    } catch (error) {
        
    }
}

export const peliculaController = {
    index
}
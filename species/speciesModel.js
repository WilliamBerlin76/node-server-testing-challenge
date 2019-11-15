const db = require("../data/dbConfig.js");

module.exports = {
    insert,
    getAll,
    remove
};

function insert(species){
    return (
        db("species")
            .insert(species, "id")
            .then(([id]) => {
                return db("species")
                    .where({ id })
                    .first()
            })
    )
}

function getAll(){
    return db('species')
}

function remove(id){
    return db('species')
                .del()
                .where('id', '=', id)
}
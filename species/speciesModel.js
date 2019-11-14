const db = require("../data/dbConfig.js");

module.exports = {
    insert,
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
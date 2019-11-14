const db = require('../data/dbConfig.js');

const { insert, remove } = require("./speciesModel.js");

describe("species model", function(){
    describe("insert()", function() {
        beforeEach(async() => {
            await db("species").truncate();
        });
        
        it("should add a species", async function(){
            await insert({name: "twi'lek"});

            const species = await db("species");
            expect(species).toHaveLength(1)
        });

        it("should insert the provided species", async function(){
            await insert({ name: "twi'lek" });
            await insert({ name: "rodian"});

            const species = await db("species");

            expect(species).toHaveLength(2);
            expect(species[0].name).toBe("twi'lek");
            expect(species[1].name).toBe('rodian');
        })
    });
    describe("remove()", function() {
        beforeEach(async() => {
            await db("species").truncate();
        })
        it("should remove the selected species", async function(){
            let id = 2;
            let species = await remove(id);
            expect(species.name).toBeUndefined();
        })
    })
})
const path = require("path")
const router = require("express").Router()
const fs = require("node:fs/promises")
router.get("/notes", async (req,res) => {
    const dbpath = (path.join (__dirname,"../db/db.json"))
    const notes = await fs.readFile(dbpath, {encoding:"utf-8"})
    console.log("database successful")
    res.json(JSON.parse (notes))
})
router.post("/notes", async (req,res) => {
    const dbpath = (path.join (__dirname,"../db/db.json"))
    const notes = await fs.readFile(dbpath, {encoding:"utf-8"})
    console.log(notes)
    const updatedNotes = JSON.parse(notes)
    updatedNotes.push(req.body)
    console.log(updatedNotes)
    await fs.writeFile(dbpath,JSON.stringify(updatedNotes))
    res.json(notes)
})

router.delete("/notes", async (req,res) => {
    const dbpath = (path.join (__dirname,"../db/db.json"))
    const notes = await fs.readFile(dbpath, {encoding:"utf-8"})
    const updatedNotes = 
    await fs.writeFile(dbpath,JSON.stringify(updatedNotes))
    res.json(notes)
}

module.exports = router
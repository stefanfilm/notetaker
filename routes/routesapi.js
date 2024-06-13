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
    let assignId = 1;
    if (updatedNotes.length > 0) {
        assignId = updatedNotes [updatedNotes.length-1].id+1
    }
    const noteObject = {
    id : assignId,
    ...req.body
    }
    updatedNotes.push(noteObject)
    console.log(updatedNotes)
    await fs.writeFile(dbpath,JSON.stringify(updatedNotes))
    res.json(notes)
})

router.delete("/notes/:id", async (req,res) => {
    const noteId = req.params.id
    console.log(noteId)
    const dbpath = (path.join (__dirname,"../db/db.json"))
    const notes = await fs.readFile(dbpath, {encoding:"utf-8"})
    const updatedNotes = JSON.parse(notes)
    const filterNotes = updatedNotes.filter ((item) => {
        console.log(item.id, noteId) 
        return item.id != noteId

    })
    console.log(filterNotes)
    await fs.writeFile(dbpath,JSON.stringify(filterNotes))
    res.json(filterNotes)
})

module.exports = router
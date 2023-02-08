const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');
const app=express();
const bodyParser = require('body-parser')

//Route 1 to get the all the notes of a particular user using GET
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Notes.find({ id: req.user.id });
    res.json(notes);
})

//Route 2 to add the notes using Post /addnewnote
router.post('/addnewnote', fetchuser, async (req, res) => {
    try {
        body('title').exists,
        body('description').isLength({ min: 5 })
        const { title, description, tag } = req.body;
        const errors = await validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = await Notes.create({
            user: req.user.id,
            title: title,
            description: description,
            tag: tag
        })
        const savednote = await note.save();
        res.send(savednote);

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");

    }
})

// Route 3 to update a note
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const {title,description,tag}=req.body;
        const newNote={};
        if(title)
        {
            newNote.title=title;
        }
        if(description)
        {
            newNote.description=description;
        }
        if(tag)
        {
            newNote.tag=tag;
        }

        //Find the note to be updated
        let note=await Notes.findById(req.params.id);
        if(!note)
        {
            res.status(404).send("Not Found");
        }
        if(note.user.toString()!==req.user.id)
        {
            res.status(401).send("Not Allowed");
        }

        note=await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
        res.json(note);
        

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");

    }
})

//Route 3 to delete a existing note
router.put('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //Find the note to be updated
        let note=await Notes.findById(req.params.id);
        if(!note)
        {
            res.status(404).send("Not Found");
        }
        if(note.user.toString()!==req.user.id)
        {
            res.status(401).send("Not Allowed");
        }

        note=await Notes.findByIdAndDelete(req.params.id);
        res.json({meesage:"Note is deleted"});
        

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");

    }
})





module.exports = router;
import Notes from "../models/NoteModel.js";

export const getNotes = async (req, res) => {
    try {
        if (req.params.id) {
            const note = await Notes.findByPk(req.params.id);
            res.json(note);
        } else {
            const notes = await Notes.findAll();
            res.json(notes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching notes' });
    }
}

export const createNotes = async(req, res) => {
    try{
        await Notes.create(req.body);
        res.status(201).json({msg:"Notes Created"});
    }catch(error){
        console.log(error.message);
    }
}

export const UpdateNotes = async(req, res) => {
    try{
        await Notes.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Notes Updated"});
    }catch(error){
        console.log(error.message);
    }
}

export const DeleteNotes = async(req, res) => {
    try{
        await Notes.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Notes Deleted"});
    }catch(error){
        console.log(error.message);
    }
}



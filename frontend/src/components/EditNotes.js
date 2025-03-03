import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditNotes = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getNotesById(); 
    }, []);

    const UpdateNote = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/note/${id}`, {
                title,
                content
            });
            navigate("/");
        } catch (error) {
            console.log(error);        
        }
    }

    const getNotesById = async () => { 
        const response = await axios.get(`http://localhost:5000/note/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <h1 className="title has-text-centered has-text-info">Edit Catatan</h1>
                <form onSubmit={UpdateNote} className="box has-background-dark">
                    <div className="field">
                        <label className="label has-text-light">Judul</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                placeholder='Masukkan Judul'
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-light">Konten</label>
                        <div className="control">
                            <textarea 
                                className="textarea" 
                                value={content} 
                                onChange={(e) => setContent(e.target.value)} 
                                placeholder='Masukkan Konten'
                            />
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success'>Perbarui</button>
                    </div>
                </form>
            </div>
        </div> 
    );
}

export default EditNotes;
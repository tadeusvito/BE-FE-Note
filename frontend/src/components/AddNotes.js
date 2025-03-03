import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddNotes = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const saveNote = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/note', {
                title,
                content
            });
            navigate("/");
        } catch (error) {
            console.log(error);        
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <h1 className="title has-text-centered has-text-info">Tambah Catatan Baru</h1>
                <form onSubmit={saveNote} className="box has-background-dark">
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
                        <button type='submit' className='button is-success'>Simpan</button>
                    </div>
                </form>
            </div>
        </div> 
    );
}

export default AddNotes;
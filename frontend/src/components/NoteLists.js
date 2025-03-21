import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";

const UserLists = () => {
    const [note, setUser] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        const response = await axios.get(`${BASE_URL}/note`);
        setUser(response.data);
    }

    const hapusnotes = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/note/${id}`);
            getNotes();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-three-quarters">
                <h1 className="title has-text-centered has-text-light">Daftar Catatan</h1>
                <Link to={`add`} className="button is-success mb-3"> 
                    Tambah Catatan Baru
                </Link>
                <div className="box has-background-dark">
                    <table className="table is-fullwidth has-background-dark has-text-light">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Judul</th>
                                <th>Konten</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {note.map((notes, index) => (
                                <tr key={notes.id}>
                                    <td>{index + 1}</td>
                                    <td>{notes.title}</td>
                                    <td>{notes.content}</td>
                                    <td>
                                        <Link to={`edit/${notes.id}`} className="button is-small is-info mx-2">Edit</Link>
                                        <button onClick={() => hapusnotes(notes.id)} className="button is-small is-danger">Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserLists;

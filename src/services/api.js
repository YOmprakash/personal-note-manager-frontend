import axios from 'axios';

const API = 'https://personal-note-manager-backend.onrender.com/api';

export const fetchNotes = () => axios.get(`${API}/notes`);
export const createNote = (note) => axios.post(`${API}/notes`, note);
export const updateNote = (id, note) => axios.put(`${API}/notes/${id}`, note);
export const deleteNote = (id) => axios.delete(`${API}/notes/${id}`);

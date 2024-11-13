import api from "./api.services";
import { AxiosResponse } from "axios";
import { INoteProps } from "../utils/interface.utils";

export const createNote = (note: { title: string, content: string, reminderDate?: string, icon: string }):  Promise<{ data: INoteProps }> => 
    api.post('/', note);


export const getAllNotes = ():Promise<AxiosResponse<INoteProps[]>> =>    // Promise<{data: INoteProps[]}>
    api.get('/');


export const getNoteById = (id: string): Promise<AxiosResponse<INoteProps>> => 
    api.get(`/${id}`);


export const updateNote =  (id:  string, updatedData: { title: string; content: string; reminderDate?: string; icon?: string }): Promise<AxiosResponse<INoteProps>> =>  
    api.put(`/${id}`, updatedData)


export const deleteNote = (id: string):  Promise<AxiosResponse<void>>  => 
    api.delete(`/${id}`);
    
  
export const getNotesByCategory = (category: string) => 
    api.get(`/category/${category}`);

    
export const addCollaborator = (collaboratorData: { noteId: string; email: string }) => 
    api.post('/collaborate', collaboratorData);

    
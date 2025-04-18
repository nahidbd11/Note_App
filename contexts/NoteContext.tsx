import {createContext, useEffect, useState} from "react";
import {NoteModel} from "@/Models/NoteModel";
import {noteStorage} from "@/services/NoteStorage";


interface NoteContextType {
    notes: NoteModel[];
    addNote: (note: NoteModel) => void;
    updateNote: (note: NoteModel) => void;
    deleteNote: (id: number) => void;
    refreshNotes: () => void;
}

export const NoteContext = createContext<NoteContextType>({
    notes: [], addNote: () => {
    }, updateNote: () => {
    }, deleteNote: () => {
    }, refreshNotes: () => {
    }
});

export const NoteContextProvider = ({children}: any) => {

    const [notes, setNotes] = useState<NoteModel[]>([]);

    function refreshNotes() {
        const notes = noteStorage.getNotes()
        setNotes(notes)
    }

    const addNote = (note: NoteModel) => {
        console.log("addNote", note)
        noteStorage.saveNote(note)
        refreshNotes()

    }

    const updateNote = (note: NoteModel) => {
        noteStorage.updateNote(note);
        refreshNotes()
    }
    const deleteNote = (id: number) => {
        noteStorage.deleteNote(id);
        refreshNotes()
    }


     useEffect(()=>{
         refreshNotes()
     },[])

    return <NoteContext.Provider value={{
        notes, addNote, deleteNote, updateNote, refreshNotes
    }}>
        {children}
    </NoteContext.Provider>

}
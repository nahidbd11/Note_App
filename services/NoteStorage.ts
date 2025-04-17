import {NoteModel} from "@/Models/NoteModel";
import {MMKV} from "react-native-mmkv";

interface NoteStorage {
    getNotes(): NoteModel[];
    saveNote(note: NoteModel): void; // return the id of the note
    updateNote(note: NoteModel): number; // return the id of the note
    deleteNote(id:number): void;
}

const MMKV_NOTES_KEY="notes"
const mmkvStorage = new MMKV();
 class MmkvNoteStorage implements NoteStorage {
    getNotes(): NoteModel[] {
        const notes = mmkvStorage.getString(MMKV_NOTES_KEY);
        return notes ? JSON.parse(notes) : [];
    }

    saveNote(note: NoteModel): void {
        const notes = this.getNotes();
        notes.push(note);
        mmkvStorage.set(MMKV_NOTES_KEY, JSON.stringify(notes));

    }

    updateNote(note: NoteModel): number {
        const notes = this.getNotes();
        const index = notes.findIndex(n => n.id === note.id);
        if (index !== -1) {
            notes[index] = note;
            mmkvStorage.set(MMKV_NOTES_KEY, JSON.stringify(notes));
            return note.id;
        }
        return 0;
    }

    deleteNote(id: number): void {
        const notes=this.getNotes()
        const index = notes.findIndex(n => n.id === id);
       if(index !== -1) {
           notes.splice(index,1)
           mmkvStorage.set(MMKV_NOTES_KEY,JSON.stringify(notes))
       }
    }

}

export const noteStorage = new MmkvNoteStorage();

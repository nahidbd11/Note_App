export interface NoteModel {
    id : number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt?: Date;
}

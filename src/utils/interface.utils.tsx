export interface INoteProps {
        _id: string; 
        title: string;
        content: string;
        date: string;
        shareCount?: number;
        icon?: React.ReactNode | string; // icon component for the note
        borderColor?: string;   // border color for each card (e.g., blue, purple)
};

export interface INoteList {
    notes: INoteProps[];
}

export interface INoteForm {
    action: 'add' | 'edit' | 'view';
    note?: { title: string; content: string; reminderDate?: string; icon?: string };
    onSave: (note: { title: string; content: string; reminderDate: string; icon: string }) => void;
    onDelete?: () => void;
    onBack: () => void;
}

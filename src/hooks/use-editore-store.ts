import type { Editor } from '@tiptap/react';
import { create } from 'zustand';

interface EditorState {
  editor: Editor | undefined;
  // eslint-disable-next-line no-unused-vars
  setEditor: (editor: Editor | undefined) => void;
}

export const useEditorStore = create<EditorState>(
  (set): EditorState => ({
    editor: undefined,
    setEditor: (editor) => set({ editor }),
  }),
);

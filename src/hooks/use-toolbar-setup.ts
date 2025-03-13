import {
  Bold,
  Italic,
  ListTodo,
  MessageSquarePlus,
  Printer,
  Redo2,
  RemoveFormatting,
  SpellCheck,
  Underline,
  Undo2,
} from 'lucide-react';
import { useEditorStore } from '@/hooks/use-editore-store';
import type { ToolbarSection } from '@/types/editor.types';

export function useToolbarSetup(): ToolbarSection[] {
  const { editor } = useEditorStore();

  return [
    {
      id: '1',
      items: [
        {
          label: 'Undo',
          icon: Undo2,
          onClick: () => editor?.chain().focus().undo().run(),
        },
        {
          label: 'Redo',
          icon: Redo2,
          onClick: () => editor?.chain().focus().redo().run(),
        },
        {
          label: 'Print',
          icon: Printer,
          onClick: () => globalThis.print(),
        },
        {
          label: 'Spell Check',
          icon: SpellCheck,
          onClick: toggleSpellCheck,
          isActive: checkSpellCheckActive(),
        },
      ],
    },
    {
      id: '2',
      items: [
        {
          label: 'Bold',
          icon: Bold,
          onClick: () => editor?.chain().focus().toggleBold().run(),
          isActive: editor?.isActive('bold'),
        },
        {
          label: 'Italic',
          icon: Italic,
          onClick: () => editor?.chain().focus().toggleItalic().run(),
          isActive: editor?.isActive('italic'),
        },
        {
          label: 'Underline',
          icon: Underline,
          onClick: () => editor?.chain().focus().toggleUnderline().run(),
          isActive: editor?.isActive('underline'),
        },
      ],
    },

    {
      id: '3',
      items: [
        {
          label: 'Comment',
          icon: MessageSquarePlus,
          onClick: () => console.log('TODO: Comment'),
          isActive: false,
        },
        {
          label: 'List Todo',
          icon: ListTodo,
          onClick: () => editor?.chain().focus().toggleTaskList().run(),
          isActive: editor?.isActive('taskList'),
        },
        {
          label: 'Remove Formatting',
          icon: RemoveFormatting,
          onClick: () => editor?.chain().focus().unsetAllMarks().run(),
        },
      ],
    },
  ];

  // ********* ↓ Helpers ↓ *********

  function checkSpellCheckActive() {
    const spellCheckAttribute = editor?.view.dom.getAttribute('spellcheck');
    if (spellCheckAttribute == undefined) {
      return false;
    }

    return spellCheckAttribute == 'true';
  }

  function toggleSpellCheck() {
    editor?.view.dom.setAttribute(
      'spellcheck',
      checkSpellCheckActive() ? 'false' : 'true',
    );
  }
}

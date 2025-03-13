import {
  Bold,
  Italic,
  Printer,
  Redo2,
  SpellCheck,
  Underline,
  Undo2,
} from 'lucide-react';
import { useEditorStore } from '@/hooks/use-editore-store';

export function useToolbarSetup() {
  const { editor } = useEditorStore();

  return [
    [
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
    [
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

'use client';

import {
  Bold,
  Italic,
  Printer,
  Redo2,
  SpellCheck,
  Underline,
  Undo2,
} from 'lucide-react';
import ToolbarButton from '@/components/toolbar-button';
import { Separator } from '@/components/ui/separator';
import { useEditorStore } from '@/hooks/use-editore-store';
import type { ToolbarItem } from '@/types/editor.types';

export default function Toolbar() {
  const { editor } = useEditorStore();

  const toolbarSections = [
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

  return (
    <section className="flex min-h-10 items-center gap-x-0.5 overflow-x-auto rounded-3xl bg-[#f1f4f9] px-2.5 py-0.5">
      {toolbarSections[0].map((item) => renderToolbarButton(item))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {toolbarSections[1].map((item) => renderToolbarButton(item))}
    </section>
  );
}

function renderToolbarButton(item: ToolbarItem) {
  return <ToolbarButton key={item.label} {...item} />;
}

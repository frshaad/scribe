import { Printer, Redo2, Undo2 } from 'lucide-react';
import { useEditorSetup } from '@/hooks/use-editor-setup';
import type { ToolbarItem } from '@/types/editor.types';

export function useToolbarSetup(): ToolbarItem[][] {
  const editor = useEditorSetup();

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
        onClick: () => window.print(),
      },
    ],
  ];
}

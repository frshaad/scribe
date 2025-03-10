import { Undo2 } from 'lucide-react';
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
    ],
  ];
}

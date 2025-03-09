import { Undo2 } from 'lucide-react';
import type { ToolbarItem } from '@/types/editor.types';

export const TOOLBAR_SECTIONS: ToolbarItem[][] = [
  [
    {
      label: 'Undo',
      icon: Undo2,
      onClick() {
        console.log('Undo');
      },
    },
  ],
];

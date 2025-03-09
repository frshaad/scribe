'use client';

import { type LucideIcon, Undo2 } from 'lucide-react';
import ToolbarButton from '@/components/toolbar-button';

export default function Toolbar() {
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
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

  return (
    <section className="flex min-h-10 items-center gap-x-0.5 overflow-x-auto rounded-3xl bg-[#f1f4f9] px-2.5 py-0.5">
      {sections[0].map(function renderToolbarButton(item) {
        return <ToolbarButton key={item.label} {...item} />;
      })}
    </section>
  );
}

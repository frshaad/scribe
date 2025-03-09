'use client';

import ToolbarButton from '@/components/toolbar-button';
import { TOOLBAR_SECTIONS } from '@/lib/constants';
import type { ToolbarItem } from '@/types/editor.types';

export default function Toolbar() {
  return (
    <section className="flex min-h-10 items-center gap-x-0.5 overflow-x-auto rounded-3xl bg-[#f1f4f9] px-2.5 py-0.5">
      {TOOLBAR_SECTIONS[0].map(renderToolbarButton)}
    </section>
  );
}

function renderToolbarButton(item: ToolbarItem) {
  return <ToolbarButton key={item.label} {...item} />;
}

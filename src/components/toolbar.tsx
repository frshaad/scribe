'use client';

import ToolbarButton from '@/components/toolbar-button';
import { Separator } from '@/components/ui/separator';
import { useToolbarSetup } from '@/hooks/use-toolbar-setup';
import type { ToolbarItem } from '@/types/editor.types';

export default function Toolbar() {
  const toolbarSections = useToolbarSetup();

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

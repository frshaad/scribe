'use client';

import { Fragment } from 'react';
import ToolbarButton from '@/components/toolbar-button';
import { Separator } from '@/components/ui/separator';
import { useToolbarSetup } from '@/hooks/use-toolbar-setup';
import type { ToolbarSection } from '@/types/editor.types';

export default function Toolbar() {
  const toolbarSections = useToolbarSetup();

  return (
    <section className="flex min-h-10 items-center gap-x-0.5 overflow-x-auto rounded-3xl bg-[#f1f4f9] px-2.5 py-0.5">
      {toolbarSections.map((section) => renderToolbarSection(section))}
    </section>
  );
}

function renderToolbarSection(section: ToolbarSection) {
  return (
    <Fragment key={section.id}>
      {section.items.map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
    </Fragment>
  );
}

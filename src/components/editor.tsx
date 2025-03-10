'use client';

import { EditorContent } from '@tiptap/react';
import { useEditorSetup } from '@/hooks/use-editor-setup';

export default function Editor() {
  const editor = useEditorSetup();

  return (
    <section className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:overflow-visible print:bg-white print:px-0">
      <div className="mx-auto flex w-4xl min-w-max justify-center py-4 print:w-full print:min-w-0 print:py-0">
        <EditorContent editor={editor} />
      </div>
    </section>
  );
}

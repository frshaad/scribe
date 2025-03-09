'use client';

import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function Editor() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: 'padding-left: 56px; padding-right: 56px;',
        class:
          'flex min-h-[1054px] w-4xl cursor-text flex-col border border-[#c7c7c7] bg-white py-10 focus:outline-none print:border-0',
      },
    },
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: `
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th colspan="3">Description</th>
        </tr>
        <tr>
          <td>Cyndi Lauper</td>
          <td>Singer</td>
          <td>Songwriter</td>
          <td>Actress</td>
        </tr>
      </tbody>
    </table>
  `,
  });

  if (!editor) {
    return null;
  }

  return (
    <section className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:overflow-visible print:bg-white print:px-0">
      <div className="mx-auto flex w-4xl min-w-max justify-center py-4 print:w-full print:min-w-0 print:py-0">
        <EditorContent editor={editor} />
      </div>
    </section>
  );
}

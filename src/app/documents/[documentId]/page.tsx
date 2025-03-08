import Editor from '@/components/editor';

type DocumentProps = {
  params: Promise<{ documentId: string }>;
};

export default async function Document({ params }: DocumentProps) {
  // eslint-disable-next-line no-unused-vars
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Editor />
    </div>
  );
}

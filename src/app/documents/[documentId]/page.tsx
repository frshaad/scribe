type DocumentProps = {
  params: Promise<{ documentId: string }>;
};

export default async function Document({ params }: DocumentProps) {
  const { documentId } = await params;

  return <div>Document: {documentId}</div>;
}

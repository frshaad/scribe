type DocumentLayoutProps = {
  children: React.ReactNode;
};

export default function DocumentLayout({ children }: DocumentLayoutProps) {
  return (
    <div className="space-y-4">
      <nav className="w-full">Document Navbar</nav>
      {children}
    </div>
  );
}

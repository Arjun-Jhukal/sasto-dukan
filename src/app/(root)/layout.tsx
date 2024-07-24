import Header from "@/components/templates/Header";

export default function MainLayout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

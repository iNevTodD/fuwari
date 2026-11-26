import Footer from "@/components/Footer/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

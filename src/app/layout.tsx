import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "EventFlow",
  description: "Учебный проект на Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="ru">
      <body className="bg-slate-950 text-white">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

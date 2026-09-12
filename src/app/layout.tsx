import "./globals.css";
import StoreProvider from "./lib/StoreProvider";
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
        <StoreProvider>
          <Header/>
          <div className="h-15"/>
          {children}
          <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}

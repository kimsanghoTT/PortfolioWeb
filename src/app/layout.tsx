import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

export const metadata = {
  title: 'KSHPF', 
  description: '프론트엔드 개발자 KSH의 포트폴리오입니다.',
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {


  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

import { DarkModeProvider } from "@/components/darkModeContext";
import DarkModeBtn from "@/components/layout/darkMode/darkMode_btn";
import "./globals.css";

export const metadata = {
  title: "KSH' Portfolio", 
  description: '프론트엔드 개발자 KSH의 포트폴리오입니다.',
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {


  return (
    <html lang="ko">
      <body>
        <DarkModeProvider>
          {children}
          <DarkModeBtn/>
        </DarkModeProvider>
      </body>
    </html>
  );
}

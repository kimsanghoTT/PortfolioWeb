import Header from "@/components/layout/header/header";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
        <>
          <Header/>
            {children}
        </>
  );
}
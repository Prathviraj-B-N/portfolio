import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prathviraj B N",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.ico" />
      </head>
      <body className={inter.className}>{children}</body>
      {/* <footer>
        <div>
          Icons made by
          <a href="https://www.flaticon.com/authors/popo2021" title="popo2021">
            popo2021
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com'
          </a>
        </div>
      </footer> */}
    </html>
  );
}

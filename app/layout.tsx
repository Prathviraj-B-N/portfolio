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

      <div className="fixed bottom-0 right-0 p-6 w-8 h-8 bg-white border flex justify-center items-center opacity-75">
        <div className="block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
          XS
        </div>
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          SM
        </div>
        <div className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">
          MD
        </div>
        <div className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">
          LG
        </div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
          XL
        </div>
        <div className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
          2XL
        </div>
      </div>
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

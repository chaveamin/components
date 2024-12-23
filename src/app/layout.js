import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const Pinar = localFont({
  src: "../fonts/Pinar-VF.woff2",
  variable: "--font-pinar",
  weight: "100 900",
});
const IranYekan = localFont({
  src: "../fonts/IRANYekanXVFaNumVF.woff2",
  variable: "--font-iranyekan",
  weight: "100 900",
});

export const metadata = {
  title: "components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${Pinar.variable} ${IranYekan.variable} font-IranYekan antialiased overflow-x-hidden`}>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}

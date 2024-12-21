import localFont from "next/font/local";
import "./globals.css";

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
  title: "login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${Pinar.variable} ${IranYekan.variable} font-IranYekan antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "P-007",
  description: "P-007",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang={"en"}>
      <body>{children}</body>
    </html>
  );
}

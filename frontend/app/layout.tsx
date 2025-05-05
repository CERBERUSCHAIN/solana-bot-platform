import './globals.css';

export const metadata = {
  title: 'Cerberus Dashboard',
  description: 'Multi‑bot trading app for Solana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-white">{children}</body>
    </html>
  );
}

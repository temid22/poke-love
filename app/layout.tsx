import './globals.css';
import { Nunito } from 'next/font/google';
import Pokemons from './components/Pokemons';
import Navbar from './components/navbar/Navbar';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Pokemon',
  description: 'Pokemon Display Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <Navbar />
        <Pokemons />
        {children}
      </body>
    </html>
  );
}

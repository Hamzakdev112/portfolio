import Navbar from "./components/Navbar";
import "./styles/index.scss";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Hamza Dev",
  description:
    "I am a full stack developer proficient in JavaScript and C++, I love building full stack applications using hot technologies such as Next JS, MERN Stack, Nuxt, Nest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

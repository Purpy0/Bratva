import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/ui/Providers";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRATVA: From Zero to Something — Together",
  description:
    "This isn’t just another project. It’s a movement of young men, aged 18 to 24, from every corner of the world, coming together to build, create, and rise — as brothers. BRATVA is a space for the bold. For the ones who don't wait for perfect timing. For the ones who don't just talk — they build. No connections? No funding? No excuses. You bring the idea. We bring the brotherhood. Inside this guide, you’ll find 50+ real-world projects created by young men who started from zero — no fancy background, no safety net. Just raw ideas, smart execution, and unshakable teamwork. Each project is rated on the Brotherhood Level Scale — not by how 'safe' or 'easy' it is, but by how much grit, vision, and team strength it took to make it real. This isn’t a classroom. It’s a battlefield for builders. Here, we win together or we learn together. Either way, nobody’s left behind. What’s Inside: 'Zero to Launch' — Real startup blueprints from young creators; 'Idea x Brotherhood' — How strong teams turn small ideas into real wins; 'No Guru, Just Grind' — Simple, battle-tested systems to build fast; 'Micro-Missions' — Quick challenges that push you to act, not overthink; Global Crew Finder — Join forces with other driven guys across the map. When you join BRATVA, you don’t just read. You build. Get access to our private project server, pitch your idea, find your crew, build real income-generating projects from scratch, share your wins — and your failures — with the bros who get it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
        <Providers>
          <>
            <Navbar />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}

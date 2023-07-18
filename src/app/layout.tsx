import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="scroll-smooth" lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
}

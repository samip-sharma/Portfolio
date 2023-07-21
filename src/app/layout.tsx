import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Samip Sharma's Portfolio",
	description: "Samip Sharma's Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="scroll-smooth" lang="en">
			<body
				className={clsx(inter.className, "overflow-x-hidden")}
				suppressHydrationWarning={true}
			>
				{children}
			</body>
		</html>
	);
}

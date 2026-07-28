import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  icons: {
  icon: "/favicon.ico",
},
  title: "Rajat Gurjar | Linux System Administrator & DevOps Engineer",

  description:
    "Portfolio of Rajat Gurjar, Linux System Administrator and DevOps Engineer specializing in AWS, Kubernetes, Docker, Terraform, CI/CD automation, cloud infrastructure, and AI-powered DevOps solutions.",

  keywords: [
    "Linux System Administrator",
    "DevOps Engineer",
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Ansible",
    "Jenkins",
    "CI/CD",
    "Cloud Infrastructure",
    "AI DevOps",
  ],

  authors: [
    {
      name: "Rajat Gurjar",
    },
  ],

  creator: "Rajat Gurjar",

  openGraph: {
    title: "Rajat Gurjar | Linux System Administrator & DevOps Engineer",

    description:
      "Building reliable infrastructure through Linux administration, cloud automation, Kubernetes, CI/CD, and AI-powered engineering.",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Rajat Gurjar | Linux System Administrator & DevOps Engineer",

    description:
      "DevOps portfolio showcasing cloud infrastructure, automation, Kubernetes, AWS, and AI engineering projects.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        {children}

      </body>

    </html>
  );
}
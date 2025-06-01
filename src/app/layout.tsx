import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Meta from '@/Meta/Meta'
import type React from 'react' // Added import for React
import Navbar from '@/features/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Meta
                title="Titanium Ignis - Modern Project Management Platform"
                description="Streamline your project management with our all-in-one platform. Launch, track, and deploy projects with ease."
                keywords="project management, task management, team collaboration, code management, deployment"
            />
            <body className={`${inter.className} flex h-screen flex-col`}>
                {/* <Navbar /> */}
                {children}
            </body>
        </html>
    )
}

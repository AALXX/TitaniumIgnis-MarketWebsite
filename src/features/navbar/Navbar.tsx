'use client'

import type React from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/Button'
import Image from 'next/image'

const scrollToSection = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
    const router = useRouter()
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    const handleNavClick = (id: string, e: React.MouseEvent) => {
        e.preventDefault()
        if (isHomePage) {
            scrollToSection(id)
        } else {
            router.push('/')
            setTimeout(() => {
                scrollToSection(id)
            }, 100)
        }
    }

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault()
        if (isHomePage) {
            scrollToSection('home')
        } else {
            router.push('/')
        }
    }

    return (
        <header className="flex sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
            <div className=" flex h-16 items-center justify-center w-full">
                <Link href="#home" className="flex items-center gap-2 mr-auto ml-4" onClick={handleLogoClick}>
                    <Image src="/fire.png" alt="Titanium Ignis Dashboard" width={60} height={60} className='self-center'/>

                    <span className="text-xl font-bold">Titanium Ignis</span>
                </Link>

                <nav className="hidden md:flex items-center justify-center gap-6">
                    <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-zinc-100" onClick={e => handleNavClick('features', e)}>
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:text-zinc-100" onClick={e => handleNavClick('how-it-works', e)}>
                        How It Works
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-zinc-100" onClick={e => handleNavClick('pricing', e)}>
                        Pricing
                    </Link>
                </nav>

                <div className=" md:flex items-center gap-4 ml-auto mr-4">
                    <Button className="px-5 py-2 " onClick={() => router.push('/platform-contact')}>
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    )
}

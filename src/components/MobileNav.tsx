'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { Button } from './Button'

export function MobileNav() {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        if (!isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }

    React.useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                <Menu className="h-6 w-6" />
            </Button>

            {isOpen && (
                <div className="fixed inset-0 z-50 bg-zinc-950">
                    <div className="container flex h-16 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                <span className="text-xl font-bold">ProjectFlow</span>
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
                                <X className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                    <nav className="container grid gap-6 pb-8 pt-6">
                        <Link href="#features" className="text-lg font-medium hover:text-zinc-100" onClick={() => setIsOpen(false)}>
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-lg font-medium hover:text-zinc-100" onClick={() => setIsOpen(false)}>
                            How It Works
                        </Link>
                        <Link href="#testimonials" className="text-lg font-medium hover:text-zinc-100" onClick={() => setIsOpen(false)}>
                            Testimonials
                        </Link>
                        <Link href="#pricing" className="text-lg font-medium hover:text-zinc-100" onClick={() => setIsOpen(false)}>
                            Pricing
                        </Link>
                        <div className="flex flex-col gap-4 pt-4">
                            <Link href="/login" className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-4 py-2 text-center text-sm font-medium hover:bg-zinc-900" onClick={() => setIsOpen(false)}>
                                Log in
                            </Link>
                            <Link href="/signup" className="w-full rounded-md bg-zinc-100 px-4 py-2 text-center text-sm font-medium text-zinc-950 hover:bg-zinc-200" onClick={() => setIsOpen(false)}>
                                Get Started
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    )
}

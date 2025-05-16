'use client'

import Link from 'next/link'
import { ArrowLeft, Rocket, Search } from 'lucide-react'
import { Button } from '@/components/Button'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100 w-full">
            <header className="flex sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
                <div className="flex h-16 items-center justify-center w-full">
                    <Link href="/" className="flex items-center gap-2 mr-auto ml-4">
                        <div className="rounded-md bg-zinc-800 p-1">
                            <Rocket className="h-6 w-6 text-zinc-100" />
                        </div>
                        <span className="text-xl font-bold">Titanium Ignis</span>
                    </Link>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:px-6 md:px-12 lg:px-24 xl:px-32">
                <div className="max-w-3xl w-full mx-auto text-center">
                    <div className="relative mx-auto mb-8 w-40 h-40 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-zinc-800/50 animate-pulse"></div>
                        <Search className="h-20 w-20 text-zinc-400" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                        <span className="text-red-500">404</span> | Page Not Found
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">The page you're looking for doesn't exist or has been moved to another location.</p>

                    <div className="grid gap-4 sm:flex sm:justify-center sm:gap-6">
                        <Link href="/" className="px-6 py-3 text-lg">
                            <Button className="px-6 py-3 text-lg">
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-16 border-t border-zinc-800 pt-8">
                        <h2 className="text-2xl font-bold mb-6">Looking for something else?</h2>
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                            <Link href="/#features" className="p-4 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors">
                                <h3 className="font-bold mb-2">Features</h3>
                                <p className="text-zinc-400 text-sm">Explore our powerful features</p>
                            </Link>
                            <Link href="/#pricing" className="p-4 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors">
                                <h3 className="font-bold mb-2">Pricing</h3>
                                <p className="text-zinc-400 text-sm">View our pricing plans</p>
                            </Link>
                            <Link href="/#how-it-works" className="p-4 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors">
                                <h3 className="font-bold mb-2">How It Works</h3>
                                <p className="text-zinc-400 text-sm">Learn how our platform works</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="border-t border-zinc-800 bg-zinc-950 w-full">
                <div className="px-4 py-8 w-full self-center text-center">
                    <p className="text-sm text-zinc-400">© 2025 Titanium Ignis. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

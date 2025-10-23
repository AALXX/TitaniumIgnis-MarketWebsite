import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/Button'
import Link from 'next/link'

interface NavbarProps {
    router?: {
        push: (path: string) => void
    }
    pathname?: string
}

export const Navbar = ({ router, pathname }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isHomePage = pathname === '/' || !pathname

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
    }

    const handleNavClick = (id: string, e?: React.MouseEvent) => {
        if (e) e.preventDefault()

        if (isHomePage) {
            scrollToSection(id)
        } else if (router) {
            router.push('/')
            setTimeout(() => {
                scrollToSection(id)
            }, 100)
        }
    }

    const handleLogoClick = (e?: React.MouseEvent) => {
        if (e) e.preventDefault()

        if (isHomePage) {
            scrollToSection('home')
        } else if (router) {
            router.push('/')
        }
    }

    const handleGetStarted = () => {
        if (router) {
            router.push('/platform-contact')
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <button onClick={handleLogoClick} className="flex items-center gap-2 transition-transform hover:scale-105">
                        <img src={'/fire.png'} alt="Titanium Ignis" className="h-10 w-10" />
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Titanium Ignis</span>
                    </button>

                    <nav className="hidden md:flex items-center gap-8">
                        <button onClick={e => handleNavClick('features', e)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </button>
                        <button onClick={e => handleNavClick('how-it-works', e)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            How It Works
                        </button>
                        <button onClick={e => handleNavClick('pricing', e)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Pricing
                        </button>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/platform-contact">
                            <Button variant="outline" size="sm">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/platform-contact">
                            <Button size="sm" variant="default" onClick={handleGetStarted}>
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-4 border-t border-border/50 mt-2 animate-fade-in">
                        <button onClick={e => handleNavClick('features', e)} className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </button>
                        <button onClick={e => handleNavClick('how-it-works', e)} className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            How It Works
                        </button>
                        <button onClick={e => handleNavClick('pricing', e)} className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Pricing
                        </button>
                        <div className="px-4 space-y-2">
                            <Button variant="outline" className="w-full">
                                Sign In
                            </Button>
                            <Button className="w-full" onClick={handleGetStarted}>
                                Get Started
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

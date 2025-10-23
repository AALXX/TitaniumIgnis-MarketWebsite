'use client'
import { CheckCircle, Rocket, Users, Clock, Code, BarChart3, Shield, Zap, ArrowRight } from 'lucide-react'
import userAccountImg from '@/assets/user-account.png'
import { Button } from '@/components/Button'
import { Navbar } from '@/features/navbar/Navbar'
import Link from 'next/link'
import Image from 'next/image'

const Index = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar pathname="/" />

            <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 gradient-hero opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

                <div className="container mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in">
                            <div className="inline-block">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-medium backdrop-blur-sm">
                                    <Zap className="h-4 w-4 text-primary" />
                                    Streamline Your Projects
                                </span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                                Project Management <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Simplified</span>
                            </h1>

                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                Effortlessly launch, track, and deploy projects with our all-in-one platform. Designed for modern teams who value efficiency and collaboration.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link href="/platform-contact">
                                    <Button size="lg" variant="hero" className="group">
                                        Start Free Trial
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>

                                <Link href="/platform-contact">
                                    <Button size="lg" variant="outline">
                                        Book a Demo
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex items-center gap-8 pt-8">
                                <div>
                                    <div className="text-3xl font-bold text-foreground">4+</div>
                                    <div className="text-sm text-muted-foreground">Project Modules</div>
                                </div>
                                <div className="h-12 w-px bg-border" />
                                <div>
                                    <div className="text-3xl font-bold text-foreground">99.9%</div>
                                    <div className="text-sm text-muted-foreground">Uptime</div>
                                </div>
                                <div className="h-12 w-px bg-border" />
                                <div>
                                    <div className="text-3xl font-bold text-foreground">24/7</div>
                                    <div className="text-sm text-muted-foreground">Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-slide-in-right">
                            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                                <img src={'/UserAccount.png'} alt="User Dashboard" className="w-full h-auto" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
                            <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

                <div className="container mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Powerful Features</h2>
                        <p className="text-xl text-muted-foreground">Everything you need to manage projects from start to finish</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Rocket,
                                title: 'Easy Project Launching',
                                description: 'Get your projects up and running in minutes with intuitive setup and templates.'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Task & Milestone Tracking',
                                description: 'Keep track of all tasks and important milestones with visual progress indicators.'
                            },
                            {
                                icon: Users,
                                title: 'Team Collaboration',
                                description: 'Seamless communication and collaboration tools to keep your team aligned.'
                            },
                            {
                                icon: Shield,
                                title: 'Team Management',
                                description: 'Organize team members into divisions and manage permissions with ease.'
                            },
                            {
                                icon: Clock,
                                title: 'Deadline Management',
                                description: 'Never miss a deadline with automated reminders and timeline visualization.'
                            },
                            {
                                icon: Code,
                                title: 'Project Deployment',
                                description: 'Deploy your projects directly from the platform with monitoring and analytics.'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="group glass-card p-8 rounded-2xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Comprehensive Dashboard</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Get a complete overview of your projects with our intuitive dashboard. Track tasks, monitor deployments, and manage your team all in one place.
                            </p>

                            <ul className="space-y-4">
                                {['Real-time project statistics', 'Task progress visualization', 'Team activity monitoring', 'Deployment tracking'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <Link href="/platform-contact">
                                    <Button variant="default" className="group">
                                        Explore Dashboard
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                                <img src={'/Dashboard.png'} alt="Project Dashboard" className="w-full h-auto" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                                <img src={'/TeamManagement.png'} alt="Team Management" className="w-full h-auto" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                        </div>

                        <div className="space-y-6 order-1 lg:order-2">
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Effortless Team Management</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">Organize your team into divisions, assign roles, and manage permissions with our intuitive team management system.</p>

                            <ul className="space-y-4">
                                {['Create custom team divisions', 'Assign roles and permissions', 'Track member contributions', 'Streamline onboarding process'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-secondary" />
                                        </div>
                                        <span className="text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <Link href="/platform-contact">
                                    <Button variant="secondary" className="group">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Seamless Deployment</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">Deploy your projects directly from our platform. Monitor performance, track requests, and analyze metrics in real-time.</p>

                            <ul className="space-y-4">
                                {['One-click deployments', 'Real-time performance monitoring', 'Request analytics', 'Integrated code editor'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <Link href="/platform-contact">
                                    <Button variant="default" className="group">
                                        See Deployment Features
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                                <img src={'/Monitoring.png'} alt="Deployment Monitoring" className="w-full h-auto" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
                        <p className="text-xl text-muted-foreground">Choose the plan that's right for your team</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: 'Starter',
                                price: '$29',
                                description: 'Perfect for small teams just getting started',
                                features: ['Up to 5 team members', '3 active projects', '3 active deployments', 'Task tracking', 'Team collaboration'],
                                popular: false
                            },
                            {
                                name: 'Professional',
                                price: '$175',
                                description: 'For growing teams with more complex needs',
                                features: ['Up to 15 team members', '10 active projects', 'Advanced task tracking', 'Team collaboration', 'Deployment features', 'Basic analytics'],
                                popular: true
                            },
                            {
                                name: 'Enterprise',
                                price: '$199',
                                description: 'For large teams and organizations',
                                features: ['Unlimited team members', 'Unlimited projects', 'Advanced task tracking', 'Team collaboration', 'Advanced deployment features', 'Advanced analytics', 'Priority support'],
                                popular: false
                            }
                        ].map((plan, index) => (
                            <div key={index} className={`relative glass-card p-8 rounded-2xl ${plan.popular ? 'ring-2 ring-primary shadow-xl shadow-primary/10' : ''}`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-foreground text-sm font-medium rounded-full">Most Popular</div>
                                )}

                                <div className="space-y-4 mb-8">
                                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                                    <p className="text-muted-foreground">{plan.description}</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold">{plan.price}</span>
                                        <span className="text-muted-foreground">/month</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/platform-contact">

                                <Button variant={plan.popular ? 'default' : 'outline'} className="w-full">
                                    Get Started
                                </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 p-12 md:p-16 text-center border border-border/50">
                        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Ready to streamline your projects?</h2>
                            <p className="text-xl text-muted-foreground">Join thousands of teams already using Titanium Ignis to manage their projects more efficiently.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Link href="/platform-contact">

                                <Button size="lg" variant="hero" className="group">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                </Link>
                                <Link href="/platform-contact">

                                <Button size="lg" variant="outline">
                                    Book a Demo
                                </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
                        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                    </div>
                </div>
            </section>

            <footer className="border-t border-border/50 bg-muted/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                        <div className="col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <Image src="/fire.png" alt="Titanium Ignis Logo" width={32} height={32} />
                                <span className="text-xl font-bold">Titanium Ignis</span>
                            </div>
                            <p className="text-muted-foreground max-w-sm">Streamline your project management with our all-in-one platform. Launch, track, and deploy projects with ease.</p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <button onClick={() => scrollToSection('features')} className="hover:text-foreground transition-colors">
                                        Features
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection('pricing')} className="hover:text-foreground transition-colors">
                                        Pricing
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-foreground transition-colors">Integrations</button>
                                </li>
                                <li>
                                    <button className="hover:text-foreground transition-colors">Changelog</button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <button className="hover:text-foreground transition-colors">Documentation</button>
                                </li>
                                <li>
                                    <button className="hover:text-foreground transition-colors">Guides</button>
                                </li>
                                <li>
                                    <button className="hover:text-foreground transition-colors">Support</button>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <button className="hover:text-foreground transition-colors">About</button>
                                </li>
                                <li>
                                    <button className="hover:text-foreground transition-colors">Blog</button>
                                </li>
                                <li>
                                    <button className="hover:text-foreground transition-colors">Careers</button>
                                </li>
                                <li>
                                    <button className="hover:text-foreground transition-colors">Contact</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">© 2025 Titanium Ignis. All rights reserved.</p>
                        <div className="flex gap-6 text-sm text-muted-foreground">
                            <button className="hover:text-foreground transition-colors">Terms</button>
                            <button className="hover:text-foreground transition-colors">Privacy</button>
                            <button className="hover:text-foreground transition-colors">Cookies</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Index

import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Code, Users, Rocket } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { MobileNav } from '@/components/MobileNav'

export default function Home() {
    return (
        <div className="flex  flex-col bg-zinc-950 text-zinc-100  w-full ">
            <header className="flex sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
                <div className=" flex h-16 items-center justify-center w-full">
                    <div className="flex items-center gap-2 mr-auto ml-4">
                        <div className="rounded-md bg-zinc-800 p-1">
                            <Rocket className="h-6 w-6 text-zinc-100" />
                        </div>
                        <span className="text-xl font-bold">ProjectFlow</span>
                    </div>

                    <nav className="hidden md:flex items-center justify-center gap-6">
                        <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">
                            How It Works
                        </Link>
                        <Link href="#testimonials" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">
                            Testimonials
                        </Link>
                        <Link href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-zinc-100">
                            Pricing
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-4 ml-auto mr-4">
                        <Button className="px-5 py-2 ">Get Started</Button>
                    </div>

                    <div className="md:hidden">
                        <MobileNav />
                    </div>
                </div>
            </header>

            <section className=" p-4 md:p-32   w-full self-center">
                <div className="grid gap-8 md:grid-cols-2 md:gap-12 border-cyan-300">
                    <div className="flex flex-col justify-center space-y-4 border-cyan-300">
                        <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm">Streamline Your Projects</div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                            Project Management <span className="text-zinc-400">Simplified</span>
                        </h1>
                        <p className="max-w-[600px] text-zinc-400 md:text-xl">
                            Effortlessly launch, track, and deploy projects with our all-in-one platform. Designed for modern teams who value efficiency and collaboration.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button>Start Free Trial</Button>
                            <Button variant="outline" className="border-zinc-800 text-zinc-100 hover:bg-zinc-800">
                                Book a Demo
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-xl border-red-500 border">
                            {/* <Image src="" alt="ProjectFlow Dashboard" fill className="object-cover" priority /> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className=" p-4 md:p-32   w-full self-center">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
                    <p className="max-w-[85%] text-zinc-400 md:text-xl">Everything you need to manage projects from start to finish</p>
                </div>
                <div className="mx-auto grid gap-8 md:grid-cols-3 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-16">
                    <div className="flex flex-col items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                        <div className="rounded-full bg-zinc-800 p-2">
                            <Rocket className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Easy Project Launching</h3>
                        <p className="text-zinc-400">Get your projects up and running in minutes with intuitive setup and templates.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                        <div className="rounded-full bg-zinc-800 p-2">
                            <CheckCircle className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Task & Milestone Tracking</h3>
                        <p className="text-zinc-400">Keep track of all tasks and important milestones with visual progress indicators.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                        <div className="rounded-full bg-zinc-800 p-2">
                            <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Team Collaboration</h3>
                        <p className="text-zinc-400">Seamless communication and collaboration tools to keep your team aligned.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                        <div className="rounded-full bg-zinc-800 p-2">
                            <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Team Management</h3>
                        <p className="text-zinc-400">Organize team members into divisions and manage permissions with ease.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                        <div className="rounded-full bg-zinc-800 p-2">
                            <Clock className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Deadline Management</h3>
                        <p className="text-zinc-400">Never miss a deadline with automated reminders and timeline visualization.</p>
                    </div>
                    <div className="flex flex-col items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                        <div className="rounded-full bg-zinc-800 p-2">
                            <Code className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Project Deployment</h3>
                        <p className="text-zinc-400">Deploy your projects directly from the platform with monitoring and analytics.</p>
                    </div>
                </div>
            </section>

            <section className=" p-4 md:p-32   w-full self-center">
                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive Dashboard</h2>
                        <p className="text-zinc-400 md:text-xl">Get a complete overview of your projects with our intuitive dashboard. Track tasks, monitor deployments, and manage your team all in one place.</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Real-time project statistics</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Task progress visualization</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Team activity monitoring</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Deployment tracking</span>
                            </li>
                        </ul>
                        <div>
                            <Button className="mt-4">
                                Explore Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-zinc-800">
                            <Image src="/Dashboard.png" alt="Deployment Monitoring" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className=" p-4 md:p-32   w-full self-center">
                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    <div className="order-2 md:order-1 relative flex items-center justify-center">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-zinc-800">
                            <Image src="/TeamManagement.png" alt="Team Management" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex flex-col justify-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Effortless Team Management</h2>
                        <p className="text-zinc-400 md:text-xl">Organize your team into divisions, assign roles, and manage permissions with our intuitive team management system.</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Create custom team divisions</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Assign roles and permissions</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Track member contributions</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Streamline onboarding process</span>
                            </li>
                        </ul>
                        <div>
                            <Button className="mt-4">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" p-4 md:p-32   w-full self-center">
                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Seamless Deployment</h2>
                        <p className="text-zinc-400 md:text-xl">Deploy your projects directly from our platform. Monitor performance, track requests, and analyze metrics in real-time.</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>One-click deployments</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Real-time performance monitoring</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Request analytics</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Integrated code editor</span>
                            </li>
                        </ul>
                        <div>
                            <Button className="mt-4">
                                See Deployment Features <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                        <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-zinc-800">
                            <Image src="/Monitoring.png" alt="Code Editor and Deployment" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className=" p-4 md:p-32   w-full self-center">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
                    <p className="max-w-[85%] text-zinc-400 md:text-xl">Choose the plan that's right for your team</p>
                </div>
                <div className="mx-auto grid gap-8 md:grid-cols-3 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-16">
                    <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold">Starter</h3>
                            <p className="text-zinc-400 mt-2">Perfect for small teams just getting started</p>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">$29</span>
                                <span className="text-zinc-400">/month</span>
                            </div>
                        </div>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Up to 5 team members</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>3 active projects</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>3 active deployments</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Task tracking</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Team collaboration</span>
                            </li>
                        </ul>
                        <Button className="mt-auto">Get Started</Button>
                    </div>
                    <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900 p-6 relative">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zinc-100 text-zinc-950 px-3 py-1 rounded-full text-sm font-medium">Most Popular</div>
                        <div className="mb-4">
                            <h3 className="text-xl font-bold">Professional</h3>
                            <p className="text-zinc-400 mt-2">For growing teams with more complex needs</p>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">$125</span>
                                <span className="text-zinc-400">/month</span>
                            </div>
                        </div>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Up to 15 team members</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>10 active projects</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Advanced task tracking</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Team collaboration</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Deployment features</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Basic analytics</span>
                            </li>
                        </ul>
                        <Button className="mt-auto">Get Started</Button>
                    </div>
                    <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold">Enterprise</h3>
                            <p className="text-zinc-400 mt-2">For large teams and organizations</p>
                            <div className="mt-4">
                                <span className="text-4xl font-bold">$199</span>
                                <span className="text-zinc-400">/month</span>
                            </div>
                        </div>
                        <ul className="space-y-2 mb-8">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Unlimited team members</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Unlimited projects</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Advanced task tracking</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Team collaboration</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Advanced deployment features</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Advanced analytics</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-zinc-400" />
                                <span>Priority support</span>
                            </li>
                        </ul>
                        <Button className="mt-auto">Contact Sales</Button>
                    </div>
                </div>
            </section>

            <section className=" p-4 md:p-32   w-full self-center">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to streamline your projects?</h2>
                    <p className="max-w-[85%] text-zinc-400 md:text-xl">Join thousands of teams already using ProjectFlow to manage their projects more efficiently.</p>
                    <div className="flex flex-col gap-3 sm:flex-row mt-6">
                        <Button>Start Free Trial</Button>
                        <Button variant="outline" className="border-zinc-800 text-zinc-100 hover:bg-zinc-800">
                            Book a Demo
                        </Button>
                    </div>
                </div>
            </section>

            <footer className="border-t border-zinc-800 bg-zinc-950 w-full">
                <div className=" p-4 md:p-32   w-full self-center">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                        <div className="col-span-2 lg:col-span-2">
                            <div className="flex items-center gap-2">
                                <div className="rounded-md bg-zinc-800 p-1">
                                    <Rocket className="h-6 w-6 text-zinc-100" />
                                </div>
                                <span className="text-xl font-bold">ProjectFlow</span>
                            </div>
                            <p className="mt-4 text-zinc-400">Streamline your project management with our all-in-one platform. Launch, track, and deploy projects with ease.</p>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold">Product</h3>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        Integrations
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        Changelog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        API
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-semibold">Company</h3>
                            <ul className="space-y-2 text-sm text-zinc-400">
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-zinc-100">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-zinc-400">© 2025 ProjectFlow. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
                                Terms
                            </Link>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
                                Privacy
                            </Link>
                            <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

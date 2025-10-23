'use client'
import { useState } from 'react'
import { ArrowLeft, Building2, Mail, Users, Rocket } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Navbar } from '@/features/navbar/Navbar'
import { Label } from '@/components/Label'
import { Input } from '@/components/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/Select'
import { Textarea } from '@/components/Textarea'
import { useRouter, usePathname } from 'next/navigation'
import emailjs from '@emailjs/browser';

export default function PlatformContact() {
    const router = useRouter()
    const pathname = usePathname()

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        teamSize: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            const templateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                phone: formData.phone || 'N/A',
                company: formData.company,
                job_title: formData.jobTitle,
                team_size: formData.teamSize,
                message: formData.message || 'No additional message provided.',
                submitted_at: new Date().toLocaleString()
            }

            console.log(templateParams)

            console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
            await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, templateParams, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

            setIsSubmitted(true)
        } catch (err) {
            console.error('EmailJS Error:', err)
            setError('Failed to send your request. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            teamSize: value
        }))
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
                <div className="max-w-md w-full text-center space-y-6">
                    <div className="rounded-full bg-green-500/10 p-3 w-16 h-16 mx-auto flex items-center justify-center">
                        <Mail className="h-8 w-8 text-green-500" />
                    </div>
                    <h1 className="text-2xl font-bold">Thank You!</h1>
                    <p className="text-muted-foreground">We've received your request for platform access. Our team will review your information and get back to you within 24-48 hours.</p>
                    <Link href="/">
                        <Button className="w-full">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="h-screen bg-background text-foreground mt-10">
            <Navbar router={router} pathname={pathname} />
            <main className="px-4 py-12 sm:px-6 md:px-12 lg:px-24 xl:px-32">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Enterprise Access</div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Get Access to <span className="text-muted-foreground">Titanium Ignis</span>
                                </h1>
                                <p className="text-muted-foreground text-lg">
                                    Ready to transform your project management? Fill out the form and our team will get in touch to discuss how Titanium Ignis can streamline your company's workflow.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-muted p-2 mt-1">
                                        <Building2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Enterprise-Ready</h3>
                                        <p className="text-muted-foreground text-sm">Scalable solutions designed for companies of all sizes, from startups to enterprise organizations.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-muted p-2 mt-1">
                                        <Users className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Dedicated Support</h3>
                                        <p className="text-muted-foreground text-sm">Get personalized onboarding and ongoing support to ensure your team's success.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-muted p-2 mt-1">
                                        <Rocket className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Quick Setup</h3>
                                        <p className="text-muted-foreground text-sm">Get your team up and running in minutes with our streamlined onboarding process.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-border bg-card p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-xl font-bold">Request Platform Access</h2>
                                    <p className="text-muted-foreground text-sm">Tell us about your company and we'll get you started.</p>
                                </div>

                                {error && (
                                    <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-3">
                                        <p className="text-destructive text-sm">{error}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name *</Label>
                                        <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name *</Label>
                                        <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Work Email *</Label>
                                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@company.com" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">Company Name *</Label>
                                    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Acme Corporation" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="jobTitle">Job Title *</Label>
                                    <Input id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} placeholder="Project Manager" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="teamSize">Team Size *</Label>
                                    <Select value={formData.teamSize} onValueChange={handleSelectChange} required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select team size" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1-5">1-5 members</SelectItem>
                                            <SelectItem value="6-15">6-15 members</SelectItem>
                                            <SelectItem value="16-50">16-50 members</SelectItem>
                                            <SelectItem value="51-100">51-100 members</SelectItem>
                                            <SelectItem value="100+">100+ members</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Tell us about your project management needs</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Describe your current challenges and what you're looking for in a project management solution..."
                                        className="min-h-[100px]"
                                    />
                                </div>

                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading ? 'Sending...' : 'Request Access'}
                                </Button>

                                <p className="text-xs text-muted-foreground text-center">By submitting this form, you agree to our Terms of Service and Privacy Policy.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

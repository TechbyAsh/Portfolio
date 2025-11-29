import { Link } from "wouter";
import { GradientBackground } from "@/components/ui/gradient-background";
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <GradientBackground />
      
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text">
                Ashley Johnson
              </a>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/"><a className="text-gray-700 hover:text-primary transition-colors">Home</a></Link>
              <Link href="/about"><a className="text-gray-700 hover:text-primary transition-colors">About Me</a></Link>
              <Link href="/resume"><a className="text-gray-700 hover:text-primary transition-colors">Resume</a></Link>
              <Link href="/portfolio"><a className="text-gray-700 hover:text-primary transition-colors">Portfolio</a></Link>
              <Link href="/contact"><a className="text-gray-700 hover:text-primary transition-colors font-semibold">Contact</a></Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-20">
        <Link href="/">
          <a className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </Link>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 mb-12">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-primary transition-colors">
                        your.email@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-primary transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-600">Your City, State, Country</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold mb-4">Availability</h2>
                <p className="text-gray-600 mb-4">
                  I'm currently available for freelance work and new opportunities. 
                  Feel free to reach out if you have a project in mind!
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for work
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Ashley Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

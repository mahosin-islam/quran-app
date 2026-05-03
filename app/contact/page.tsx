"use client";
import React, { useState } from "react";
import { Mail, MessageSquare, MapPin, Send, CheckCircle, Phone } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-base-100">

      {/* Hero */}
      <section className="relative overflow-hidden bg-base-200 py-20 px-6">
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" fill="none" stroke="currentColor" strokeWidth="1"/>
                <polygon points="40,14 66,28 66,52 40,66 14,52 14,28" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="40" cy="40" r="6" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geo)" className="text-base-content"/>
          </svg>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs font-medium text-secondary tracking-wide">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4 leading-tight">
            We'd Love to <span className="text-secondary">Hear From You</span>
          </h1>
          <p className="text-base-content/60 text-lg max-w-xl mx-auto leading-relaxed">
            Have a question, suggestion, or want to support our mission? Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        {/* Info Cards */}
        <div className="md:col-span-1 flex flex-col gap-4">
          {[
            { icon: <Mail className="w-5 h-5" />, title: "Email Us", value: "support@quranul-hakim.com", sub: "We reply within 24 hours" },
            { icon: <Phone className="w-5 h-5" />, title: "Call Us", value: "+880 1234 567 890", sub: "Sat–Thu, 9am–6pm BST" },
            { icon: <MapPin className="w-5 h-5" />, title: "Location", value: "Dhaka, Bangladesh", sub: "IRD Foundation HQ" },
          ].map(({ icon, title, value, sub }) => (
            <div key={title} className="group p-5 rounded-2xl bg-base-200 border border-base-300 hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary/20 transition-colors">
                {icon}
              </div>
              <p className="text-xs text-base-content/40 uppercase tracking-widest mb-1">{title}</p>
              <p className="text-sm font-semibold text-base-content">{value}</p>
              <p className="text-xs text-base-content/50 mt-0.5">{sub}</p>
            </div>
          ))}

          <div className="p-5 rounded-2xl bg-secondary/10 border border-secondary/20 text-center mt-2">
            <p className="font-amiri text-2xl text-secondary leading-loose mb-2">
              وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
            </p>
            <p className="text-xs text-base-content/50 italic">
              "Cooperate in righteousness and piety" — Al-Ma'idah 5:2
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-2">
          <div className="bg-base-200 border border-base-300 rounded-3xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-base-content">Message Sent!</h3>
                <p className="text-base-content/60 max-w-sm">
                  JazakAllahu Khayran for reaching out. We'll get back to you within 24 hours, in sha Allah.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-2 px-6 py-2 rounded-full border border-secondary text-secondary text-sm hover:bg-secondary/10 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-base-content">Send a Message</h2>
                  <p className="text-sm text-base-content/50 mt-1">Fill in the form below and we'll be in touch.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-base-content/60 uppercase tracking-wide">Your Name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      placeholder="e.g. Abdullah Rahman"
                      className="w-full px-4 py-3 rounded-xl bg-base-100 border border-base-300 text-sm text-base-content placeholder:text-base-content/30 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-base-content/60 uppercase tracking-wide">Email Address</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-base-100 border border-base-300 text-sm text-base-content placeholder:text-base-content/30 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-base-content/60 uppercase tracking-wide">Subject</label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-base-100 border border-base-300 text-sm text-base-content focus:outline-none focus:border-secondary transition-colors"
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Donation / Support Us</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-base-content/60 uppercase tracking-wide">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={5} placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-base-100 border border-base-300 text-sm text-base-content placeholder:text-base-content/30 focus:outline-none focus:border-secondary transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email || !form.message}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-content font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
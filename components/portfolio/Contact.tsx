import { useState, useRef } from "react";
import { Mail, Linkedin, Github, Send, MapPin, CheckCircle, XCircle, Loader2, MessageCircle, Sparkles, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

type FormStatus = "idle" | "submitting" | "success" | "error";

const EMAILJS_SERVICE_ID = "service_a5hv2j4";
const EMAILJS_TEMPLATE_ID = "template_qsinzlh";
const EMAILJS_PUBLIC_KEY = "8vJwEEsYsRpwIKEUM";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "from_name") {
      setFormData({ ...formData, name: value });
    } else if (name === "from_email") {
      setFormData({ ...formData, email: value });
    } else if (name === "message") {
      setFormData({ ...formData, message: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Krishna",
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS Success:", result);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      console.error("Error text:", error?.text);
      console.error("Full error details:", JSON.stringify(error, null, 2));
      alert("EmailJS Error: " + (error?.text || error?.message || JSON.stringify(error)));
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-background to-indigo-950/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-violet-500 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-indigo-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.3s'}}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600/10 border border-violet-600/20 rounded-full mb-6 animate-in fade-in slide-in-from-top duration-500">
            <Sparkles className="w-4 h-4 text-violet-500" />
            <span className="text-sm font-medium text-violet-400">Available for Opportunities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700">
            <span className="text-foreground">Let's Build </span>
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
              Something Amazing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000">
            Got a project in mind? Looking for a dedicated developer? 
            <span className="text-violet-400 font-medium"> I'd love to hear from you!</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main CTA Card */}
            <div className="relative group animate-in fade-in slide-in-from-left duration-700">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-background/80 backdrop-blur-xl rounded-2xl p-6 border border-violet-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Let's Talk!</h3>
                    <p className="text-sm text-muted-foreground">Usually responds within 24 hours</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Looking for a passionate frontend developer? I'm actively seeking internship opportunities 
                  and exciting projects to work on!
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-3">
              <a
                href="mailto:kbaranwal099@gmail.com"
                className="group flex items-center gap-4 p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300 animate-in fade-in slide-in-from-left duration-800"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 flex items-center justify-center group-hover:from-violet-600 group-hover:to-indigo-600 transition-all duration-300">
                  <Mail className="w-5 h-5 text-violet-500 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-foreground font-medium group-hover:text-violet-400 transition-colors">kbaranwal099@gmail.com</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-violet-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/krishna-baranwal-06674a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 animate-in fade-in slide-in-from-left duration-900"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-400 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                  <p className="text-foreground font-medium group-hover:text-blue-400 transition-colors">Connect with me</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://github.com/Krishna-glitch-code"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-gray-500/50 hover:bg-gray-500/5 transition-all duration-300 animate-in fade-in slide-in-from-left duration-1000"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600/20 to-gray-400/20 flex items-center justify-center group-hover:from-gray-700 group-hover:to-gray-500 transition-all duration-300">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">GitHub</p>
                  <p className="text-foreground font-medium group-hover:text-gray-300 transition-colors">Check my code</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gray-400 group-hover:translate-x-1 transition-all" />
              </a>

              <div className="flex items-center gap-4 p-4 bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 animate-in fade-in slide-in-from-left duration-1100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-foreground font-medium">India 🇮🇳</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative group animate-in fade-in slide-in-from-right duration-700">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-background/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl">
                {/* Form Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Send me a message</h3>
                    <p className="text-sm text-muted-foreground">I'll get back to you ASAP!</p>
                  </div>
                </div>

                {status === "success" && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl flex items-center gap-3 animate-in slide-in-from-top duration-300">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-emerald-400 font-semibold">Message Sent! 🎉</p>
                      <p className="text-emerald-400/70 text-sm">Thank you for reaching out!</p>
                    </div>
                  </div>
                )}
                
                {status === "error" && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/30 rounded-2xl flex items-center gap-3 animate-in slide-in-from-top duration-300">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-red-400 font-semibold">Oops! Something went wrong</p>
                      <p className="text-red-400/70 text-sm">Please try again later.</p>
                    </div>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label
                        htmlFor="from_name"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === "from_name" || formData.name
                            ? "-top-2.5 text-xs text-violet-500 bg-background px-2"
                            : "top-3.5 text-muted-foreground"
                        }`}
                      >
                        Your Name
                      </label>
                      <Input
                        type="text"
                        id="from_name"
                        name="from_name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("from_name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        disabled={status === "submitting"}
                        className="w-full h-14 px-4 pt-2 bg-background/50 border-2 border-border/50 rounded-xl transition-all duration-300 focus:border-violet-500 focus:ring-0 focus:shadow-lg focus:shadow-violet-500/10 hover:border-violet-500/50"
                      />
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="from_email"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === "from_email" || formData.email
                            ? "-top-2.5 text-xs text-violet-500 bg-background px-2"
                            : "top-3.5 text-muted-foreground"
                        }`}
                      >
                        Your Email
                      </label>
                      <Input
                        type="email"
                        id="from_email"
                        name="from_email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("from_email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        disabled={status === "submitting"}
                        className="w-full h-14 px-4 pt-2 bg-background/50 border-2 border-border/50 rounded-xl transition-all duration-300 focus:border-violet-500 focus:ring-0 focus:shadow-lg focus:shadow-violet-500/10 hover:border-violet-500/50"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === "message" || formData.message
                          ? "-top-2.5 text-xs text-violet-500 bg-background px-2 z-10"
                          : "top-4 text-muted-foreground"
                      }`}
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      required
                      disabled={status === "submitting"}
                      className="w-full px-4 pt-6 bg-background/50 border-2 border-border/50 rounded-xl resize-none transition-all duration-300 focus:border-violet-500 focus:ring-0 focus:shadow-lg focus:shadow-violet-500/10 hover:border-violet-500/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-600/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                        Send Message
                        <Sparkles className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-border/30">
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span>Quick Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
                      <span>Open to Work</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Remote Friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute w-96 h-96 rounded-full bg-neon-purple blur-[120px] top-0 left-1/4"></div>
                <div className="absolute w-64 h-64 rounded-full bg-neon-cyan blur-[100px] bottom-0 right-1/4"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-white">Get in </span>
                        <span className="text-neon-cyan">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach out through any of these channels.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="glass-card p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <a
                                        href="mailto:jemilianofl@gmail.com"
                                        className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                                            <Mail size={18} />
                                        </div>
                                        <span>jemilianofl@gmail.com</span>
                                    </a>

                                    <a
                                        href="tel:+1234567890"
                                        className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                                            <Phone size={18} />
                                        </div>
                                        <span>993 348 0403</span>
                                    </a>

                                    <a
                                        href="https://github.com/jemilianofl"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                                            <Github size={18} />
                                        </div>
                                        <span>github.com/jemiliano</span>
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/jemiliano-flores"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                                            <Linkedin size={18} />
                                        </div>
                                        <span>linkedin.com/in/jemiliano-flores</span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

                                <form className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 bg-muted/30 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-transparent transition-all duration-300 text-white"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full px-4 py-3 bg-muted/30 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-transparent transition-all duration-300 text-white"
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            placeholder="Your Message"
                                            rows={4}
                                            className="w-full px-4 py-3 bg-muted/30 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-transparent transition-all duration-300 text-white resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="neon-button inline-flex items-center gap-2 animate-glow"
                                    >
                                        <span>Send Message</span>
                                        <Send size={16} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
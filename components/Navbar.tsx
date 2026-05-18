"use client";

import { useState } from "react";
import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
=======
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
<<<<<<< HEAD
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pb-2 pointer-events-none">
                <nav className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full w-full max-w-5xl px-3 md:px-6 pointer-events-auto transition-all duration-300">
                    <div className="flex justify-between items-center h-16 md:h-18">
                    {/* Logo */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
                        <Image src="/lumora_side_1 bg.png" alt="Logo Lumora" width={200} height={150} className="h-10 md:h-6 w-auto object-contain pl-2" priority />
                    </motion.div>

                    {/* Desktop Menu */}
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="hidden md:flex items-center gap-8 font-medium text-gray-500 text-sm tracking-wide">
                        <a href="#Keunggulan" className="hover:text-[#0D47A1] hover:bg-blue-50/50 px-4 py-2 rounded-full transition-all">Keunggulan</a>
                        <a href="#demo" className="hover:text-[#0D47A1] hover:bg-blue-50/50 px-4 py-2 rounded-full transition-all">Demo</a>
                        <a href="#harga" className="hover:text-[#0D47A1] hover:bg-blue-50/50 px-4 py-2 rounded-full transition-all">Harga</a>
                        <a href="#faq" className="hover:text-[#0D47A1] hover:bg-blue-50/50 px-4 py-2 rounded-full transition-all">FAQ</a>
                    </motion.div>
=======
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-[#0D47A1] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                            L
                        </div>
                        <h1 className="text-2xl font-bold text-[#0D47A1]">Lumora</h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 font-medium">
                        <a href="#manfaat" className="hover:text-[#0D47A1] transition">Keunggulan</a>
                        <a href="#demo" className="hover:text-[#0D47A1] transition">Demo</a>
                        <a href="#harga" className="hover:text-[#0D47A1] transition">Harga</a>
                        <a href="#faq" className="hover:text-[#0D47A1] transition">FAQ</a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="https://wa.me/628XXXXXXXXXX?text=Halo%20Lumora%2C%20saya%20mau%20minta%20demo"
                            className="cta-orange text-white px-6 py-3 rounded-2xl font-semibold flex items-center gap-2"
                        >
                            <i className="fab fa-whatsapp"></i>
                            Hubungi Kami
                        </a>
                    </div>
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
                        className="md:hidden text-2xl text-gray-700 hover:text-[#0D47A1] transition-colors"
                    >
                        {isOpen ? <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
=======
                        className="md:hidden text-2xl"
                    >
                        {isOpen ? "✕" : "☰"}
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                    </button>
                </div>

                {/* Mobile Menu */}
<<<<<<< HEAD
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="pb-8 pt-4 space-y-4 text-lg text-gray-700 border-t border-gray-100 mt-2">
                                <a href="#Keunggulan" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#0D47A1] transition-colors">Keunggulan</a>
                                <a href="#demo" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#0D47A1] transition-colors">Demo</a>
                                <a href="#harga" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#0D47A1] transition-colors">Harga</a>
                                <a href="#faq" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#0D47A1] transition-colors">FAQ</a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                </nav>
            </div>

            {/* Floating WhatsApp Button */}
            <motion.a
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                href="https://wa.me/6282375477757?text=Halo%20Lumora%2C%20saya%20mau%20minta%20demo"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] hover:bg-[#20bd5c] text-white p-3.5 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
            >
                <WhatsAppIcon fontSize="large" />
                <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-2xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 whitespace-nowrap origin-right transform scale-95 group-hover:scale-100 hidden md:block">
                    Hubungi Kami
                </span>
            </motion.a>
        </>
=======
                {isOpen && (
                    <div className="md:hidden pb-8 space-y-4 text-lg">
                        <a href="#manfaat" className="block py-2">Keunggulan</a>
                        <a href="#demo" className="block py-2">Demo</a>
                        <a href="#harga" className="block py-2">Harga</a>
                        <a href="#faq" className="block py-2">FAQ</a>
                        <a
                            href="https://wa.me/628XXXXXXXXXX"
                            className="cta-orange text-white px-6 py-3 rounded-2xl font-semibold inline-block w-full text-center mt-4"
                        >
                            Hubungi via WhatsApp
                        </a>
                    </div>
                )}
            </div>
        </nav>
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
    );
}
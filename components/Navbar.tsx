"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
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
    );
}
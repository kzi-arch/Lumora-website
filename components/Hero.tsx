"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero-bg text-white py-28 md:py-40 min-h-screen flex items-center relative">
            <div className="max-w-6xl mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 bg-white/25 backdrop-blur-lg px-6 py-3 rounded-full mb-8 border border-white/30"
                >
                    <span className="text-[#4ADE80] text-xl">●</span>
                    <span className="font-medium tracking-wide">800+ Photobooth di Indonesia</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold leading-tight mb-8"
                >
                    Kelola Bisnis Photobooth<br />
                    <span className="text-[#BAE6FD]">Lebih Mudah & Lebih Untung</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-white/90"
                >
                    Satu aplikasi untuk mengontrol semua mesin, melihat laporan real-time,
                    dan menghemat biaya operasional hingga 60%.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center"
                >
                    <a href="https://wa.me/628XXXXXXXXXX" className="cta-orange text-white px-10 py-6 rounded-2xl text-xl font-semibold flex items-center justify-center gap-3 text-lg">
                        <i className="fab fa-whatsapp text-3xl"></i>
                        Hubungi via WhatsApp
                    </a>
                    <a href="#demo" className="border-2 border-white/80 hover:border-white text-white px-10 py-6 rounded-2xl text-xl font-semibold transition">
                        Lihat Demo
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero-bg text-white py-20 md:py-32 lg:py-40 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 bg-white/25 backdrop-blur-lg px-5 sm:px-6 py-3 rounded-full mb-8 border border-white/30 text-sm sm:text-base"
                >
                    <span className="text-[#4ADE80]">●</span>
                    <span>Dipercaya 800+ Photobooth di Indonesia</span>
                </motion.div>

>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 px-2"
                >
                    Kelola Photobooth Sendiri,<br />
                    <span className="text-[#BAE6FD]">Tanpa Karyawan Tanpa Ribet</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 px-4"
                >
                    Pantau semua mesin, laporan real-time, dan ubah template hanya dari HP.
                    Hemat hingga <span className="text-[#4ADE80] font-semibold">60% biaya operasional</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
                >
                    <a href="https://wa.me/6282375477757" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-0.5">
                        <WhatsAppIcon fontSize="inherit" className="text-3xl" />
                        Hubungi via WhatsApp
                    </a>
                    <a href="#demo" className="border-2 border-white/80 hover:border-white w-full sm:w-auto px-10 py-5 sm:py-6 rounded-2xl text-lg sm:text-xl font-semibold transition text-center">
                        Lihat Demo
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Hero() {
    return (
        <section className="hero-bg text-white py-20 md:py-32 lg:py-40 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 px-2"
                >
                    Kelola Photobooth Sendiri,<br />
                    <span className="text-blue-300">Tanpa Karyawan Tanpa Ribet</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 px-4 text-slate-100 font-light"
                >
                    Pantau semua mesin, laporan real-time, dan ubah template hanya dari HP.
                    Hemat hingga <span className="text-emerald-400 font-semibold">60% biaya operasional</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center px-4 mt-4"
                >
                    <a href="https://wa.me/6282375477757" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20 transition-all duration-300 transform hover:-translate-y-0.5">
                        <WhatsAppIcon fontSize="inherit" className="text-3xl" />
                        Hubungi via WhatsApp
                    </a>
                    <a href="#demo" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-center">
                        Lihat Demo
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
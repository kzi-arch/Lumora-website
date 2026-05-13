"use client";

import { motion } from "framer-motion";

export default function VideoDemo() {
    return (
        <section id="demo" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title text-[#0D47A1] text-center"
                >
                    Lihat Lumora dalam Aksi
                </motion.h2>

                <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
                    Demo singkat aplikasi Lumora — Cara mengelola photobooth dari HP
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
                >
                    {/* Ganti dengan video YouTube Anda nanti */}
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                        title="Demo Lumora Photobooth Software"
                        allowFullScreen
                    ></iframe>
                </motion.div>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Video demo real • Bukan video marketing biasa
                </p>
            </div>
        </section>
    );
}
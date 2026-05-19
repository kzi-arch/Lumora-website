"use client";

import { motion } from "framer-motion";

export default function VideoDemo() {
    return (
        <section id="demo" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="section-title text-[#0D47A1]"
                >
                    Intip Tampilan Lumora
                </motion.h2>

                <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
                    Demo singkat aplikasi Lumora — Cara mengelola photobooth dari HP
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
                >
                    <Image
                        src="/product_example.png"
                        alt="Tampilan Aplikasi Lumora"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </motion.div>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Video demo real • Bukan video marketing biasa
                </p>
            </div>
        </section>
    );
}
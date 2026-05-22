"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VideoDemo() {
    return (
        <section id="demo" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-6"
                >
                    Intip Tampilan LabTech
                </motion.h2>

                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-base md:text-lg">
                    Desain antarmuka yang modern, bersih, dan mudah digunakan. Kelola semua operasional photobooth Anda langsung dari layar HP tanpa ribet.
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full bg-slate-50 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative"
                >
                    <Image
                        src="/product_example (2).png"
                        alt="Tampilan Aplikasi Lumora"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </motion.div>

                <p className="text-center text-sm text-slate-500 mt-6 font-medium">
                    Tampilan aplikasi aktual • Dirancang khusus untuk kenyamanan Anda
                </p>
            </div>
        </section>
    );
}

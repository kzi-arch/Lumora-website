"use client";

import { motion } from "framer-motion";

const testimonials = [
    { name: "Andi Pratama", location: "Bandung", message: "Sekarang saya bisa kelola 8 mesin sendirian. Hemat jutaan per bulan!", machines: "8 Mesin" },
    { name: "Rina Sari", location: "Surabaya", message: "Laporannya sangat detail. Sangat membantu untuk mengembangkan bisnis.", machines: "5 Mesin" },
    { name: "Faisal Rahman", location: "Jakarta", message: "Supportnya cepat dan responsif. Sangat recommended!", machines: "12 Mesin" },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="section-title"
                >
                    Dipercaya Pemilik Photobooth
                </motion.h2>
                <p className="text-center text-gray-600 mb-12">800+ unit aktif • Rata-rata profit naik 47%</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="testimonial-card card relative"
                        >
                            <p className="italic text-lg mb-8">“{t.message}”</p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-[#0D47A1] rounded-full"></div>
                                <div>
                                    <strong>{t.name}</strong>
                                    <p className="text-sm text-gray-500">{t.location} — {t.machines}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
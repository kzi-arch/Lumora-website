"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Andi Pratama",
        location: "Bandung",
        message: "Alhamdulillah, sekarang saya bisa kelola 8 mesin sendirian. Hemat gaji karyawan jutaan per bulan.",
        machines: "8 Mesin"
    },
    {
        name: "Rina Sari",
        location: "Surabaya",
        message: "Fitur laporannya sangat lengkap. Saya jadi tahu persis mesin mana yang paling laris setiap bulannya.",
        machines: "5 Mesin"
    },
    {
        name: "Faisal Rahman",
        location: "Jakarta",
        message: "Supportnya cepat banget. Ada masalah malam hari langsung dibantu. Sangat recommended!",
        machines: "12 Mesin"
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="section-title text-[#0D47A1]"
                >
                    Apa Kata Pemilik Photobooth
                </motion.h2>

                <p className="text-center text-gray-600 mb-16">800+ photobooth aktif • Rata-rata profit naik 47% dalam 3 bulan</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="testimonial-card card p-8 relative min-h-[260px]"
                        >
                            <p className="italic text-lg leading-relaxed mb-8">“{t.message}”</p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#0D47A1] to-[#2196F3] rounded-full flex-shrink-0"></div>
                                <div>
                                    <strong className="block">{t.name}</strong>
                                    <span className="text-sm text-gray-500">{t.location} — {t.machines}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
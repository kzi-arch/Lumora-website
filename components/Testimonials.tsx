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
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-6"
                >
                    Apa Kata Pemilik Photobooth
                </motion.h2>

                <p className="text-center text-slate-600 mb-16 font-medium">800+ photobooth aktif • Rata-rata profit naik 47% dalam 3 bulan</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 relative min-h-[260px] flex flex-col justify-between hover:shadow-xl hover:shadow-slate-200/50 transition-shadow duration-300"
                        >
                            <p className="text-slate-700 text-lg leading-relaxed mb-8">“{t.message}”</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-full flex-shrink-0"></div>
                                <div>
                                    <strong className="block text-slate-900">{t.name}</strong>
                                    <span className="text-sm text-slate-500">{t.location} • {t.machines}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
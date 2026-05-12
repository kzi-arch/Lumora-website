"use client";

import { motion } from "framer-motion";
import { TrendingUp, Smartphone, BarChart3, RefreshCw, Headphones, Palette } from "lucide-react";

const benefits = [
    {
        icon: <TrendingUp className="w-14 h-14" />,
        title: "Hemat Biaya hingga 60%",
        desc: "Kelola banyak mesin tanpa perlu operator full-time.",
        color: "text-[#4ADE80]"
    },
    {
        icon: <Smartphone className="w-14 h-14" />,
        title: "Kontrol dari HP",
        desc: "Pantau, restart, dan ubah pengaturan kapan saja.",
        color: "text-[#0D47A1]"
    },
    {
        icon: <BarChart3 className="w-14 h-14" />,
        title: "Laporan Real-time",
        desc: "Laporan penjualan harian, mingguan, dan bulanan.",
        color: "text-[#0D47A1]"
    },
    {
        icon: <RefreshCw className="w-14 h-14" />,
        title: "Update Gratis Selamanya",
        desc: "Fitur baru terus ditambahkan tanpa biaya.",
        color: "text-[#0D47A1]"
    },
    {
        icon: <Headphones className="w-14 h-14" />,
        title: "Support 24 Jam",
        desc: "Tim teknis siap membantu via WhatsApp.",
        color: "text-[#0D47A1]"
    },
    {
        icon: <Palette className="w-14 h-14" />,
        title: "Template Mudah Dikustom",
        desc: "Ganti desain foto sesuai event dalam hitungan menit.",
        color: "text-[#0D47A1]"
    },
];

export default function Benefits() {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="section-title text-[#0D47A1]"
                >
                    Keunggulan Lumora
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="benefit-card card p-10 group"
                        >
                            <div className={`${benefit.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
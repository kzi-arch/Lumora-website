"use client";

import { motion } from "framer-motion";
import { TrendingUp, Smartphone, BarChart3, RefreshCw, Headphones, Palette } from "lucide-react";

const benefits = [
    {
        icon: <TrendingUp className="w-12 h-12" />,
        title: "Hemat Biaya hingga 60%",
        desc: "Kelola banyak mesin tanpa perlu operator full-time lagi.",
        color: "text-[#4ADE80]"
    },
    {
        icon: <Smartphone className="w-12 h-12" />,
        title: "Kontrol dari HP",
        desc: "Pantau, restart mesin, dan ubah pengaturan kapan saja dari mana saja.",
        color: "text-[#0D47A1]"
    },
    {
        icon: <BarChart3 className="w-12 h-12" />,
        title: "Laporan Real-time",
        desc: "Laporan penjualan harian, mingguan, dan bulanan yang detail.",
        color: "text-[#0D47A1]"
    },
    {
        icon: <RefreshCw className="w-12 h-12" />,
        title: "Update Gratis Selamanya",
        desc: "Fitur baru terus ditambahkan tanpa biaya tambahan.",
        color: "text-[#0D47A1]"
    },
    {
        icon: <Headphones className="w-12 h-12" />,
        title: "Support 24 Jam",
        desc: "Tim teknis siap membantu via WhatsApp kapan pun Anda butuh.",
        color: "text-[#0D47A1]"
    },
    {
        icon: <Palette className="w-12 h-12" />,
        title: "Template Mudah Dikustom",
        desc: "Ganti desain foto sesuai event atau musim dalam hitungan menit.",
        color: "text-[#0D47A1]"
    },
];

export default function Benefits() {
    return (
        <section className="py-20 md:py-24 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="section-title text-[#0D47A1] mb-16"
                >
                    Keunggulan Lumora
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            className="benefit-card card p-8 md:p-10 group"
                        >
                            <div className={`${benefit.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                                {benefit.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                                {benefit.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-[15.5px] md:text-base">
                                {benefit.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
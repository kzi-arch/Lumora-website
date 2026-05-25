"use client";

import { motion } from "framer-motion";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaletteIcon from '@mui/icons-material/Palette';

const benefits = [
    {
        icon: <TrendingUpIcon fontSize="inherit" />,
        title: "Hemat Biaya hingga 60%",
        desc: "Kelola banyak mesin tanpa perlu operator full-time lagi.",
        color: "text-emerald-600",
        bg: "bg-emerald-50 group-hover:bg-emerald-100"
    },
    {
        icon: <SmartphoneIcon fontSize="inherit" />,
        title: "Kontrol dari HP",
        desc: "Pantau, restart mesin, dan ubah pengaturan kapan saja dari mana saja.",
        color: "text-blue-600",
        bg: "bg-blue-50 group-hover:bg-blue-100"
    },
    {
        icon: <InsertChartIcon fontSize="inherit" />,
        title: "Laporan Real-time",
        desc: "Laporan penjualan harian, mingguan, dan bulanan yang detail.",
        color: "text-indigo-600",
        bg: "bg-indigo-50 group-hover:bg-indigo-100"
    },
    {
        icon: <AutorenewIcon fontSize="inherit" />,
        title: "Update Gratis Selamanya",
        desc: "Fitur baru terus ditambahkan tanpa biaya tambahan.",
        color: "text-blue-600",
        bg: "bg-blue-50 group-hover:bg-blue-100"
    },
    {
        icon: <SupportAgentIcon fontSize="inherit" />,
        title: "Support 24 Jam",
        desc: "Tim teknis siap membantu via WhatsApp kapan pun Anda butuh.",
        color: "text-indigo-600",
        bg: "bg-indigo-50 group-hover:bg-indigo-100"
    },
    {
        icon: <PaletteIcon fontSize="inherit" />,
        title: "Template Mudah Dikustom",
        desc: "Ganti desain foto sesuai event atau musim dalam hitungan menit.",
        color: "text-emerald-600",
        bg: "bg-emerald-50 group-hover:bg-emerald-100"
    },
];

export default function Benefits() {
    return (
        <section id="Keunggulan" className="py-20 md:py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-16"
                >
                    Keunggulan LabTech
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`bg-white rounded-3xl border border-slate-200 p-8 md:p-10 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 ${index === 0 || index === 5 ? 'md:col-span-2' : 'md:col-span-1'}`}
                        >
                            <div>
                                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl text-3xl mb-8 transition-all duration-300 group-hover:scale-105 ${benefit.color} ${benefit.bg}`}>
                                    {benefit.icon}
                                </div>
                                <h3 className={`${index === 0 || index === 5 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-bold mb-4 leading-tight text-slate-800 group-hover:text-blue-600 transition-colors`}>
                                    {benefit.title}
                                </h3>
                            </div>

                            <p className="text-slate-600 leading-relaxed text-[15.5px] md:text-base">
                                {benefit.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

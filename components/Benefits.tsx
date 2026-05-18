"use client";

import { motion } from "framer-motion";
<<<<<<< HEAD
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
=======
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
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
    },
];

export default function Benefits() {
    return (
<<<<<<< HEAD
        <section id="Keunggulan" className="py-20 md:py-24 bg-slate-50">
=======
        <section className="py-20 md:py-24 bg-[#F8FAFC]">
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-16"
=======
                    className="section-title text-[#0D47A1] mb-16"
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                >
                    Keunggulan Lumora
                </motion.h2>

<<<<<<< HEAD
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
=======
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
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
=======
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
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                                {benefit.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
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
        color: "text-[#4ADE80]",
        bg: "bg-[#4ADE80]/10 group-hover:bg-[#4ADE80]/20"
    },
    {
        icon: <SmartphoneIcon fontSize="inherit" />,
        title: "Kontrol dari HP",
        desc: "Pantau, restart mesin, dan ubah pengaturan kapan saja dari mana saja.",
        color: "text-[#0D47A1]",
        bg: "bg-[#0D47A1]/10 group-hover:bg-[#0D47A1]/20"
    },
    {
        icon: <InsertChartIcon fontSize="inherit" />,
        title: "Laporan Real-time",
        desc: "Laporan penjualan harian, mingguan, dan bulanan yang detail.",
        color: "text-[#0D47A1]",
        bg: "bg-[#0D47A1]/10 group-hover:bg-[#0D47A1]/20"
    },
    {
        icon: <AutorenewIcon fontSize="inherit" />,
        title: "Update Gratis Selamanya",
        desc: "Fitur baru terus ditambahkan tanpa biaya tambahan.",
        color: "text-[#0D47A1]",
        bg: "bg-[#0D47A1]/10 group-hover:bg-[#0D47A1]/20"
    },
    {
        icon: <SupportAgentIcon fontSize="inherit" />,
        title: "Support 24 Jam",
        desc: "Tim teknis siap membantu via WhatsApp kapan pun Anda butuh.",
        color: "text-[#0D47A1]",
        bg: "bg-[#0D47A1]/10 group-hover:bg-[#0D47A1]/20"
    },
    {
        icon: <PaletteIcon fontSize="inherit" />,
        title: "Template Mudah Dikustom",
        desc: "Ganti desain foto sesuai event atau musim dalam hitungan menit.",
        color: "text-[#0D47A1]",
        bg: "bg-[#0D47A1]/10 group-hover:bg-[#0D47A1]/20"
    },
];

export default function Benefits() {
    return (
        <section id="Keunggulan" className="py-20 md:py-24 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0D47A1] text-center mb-16"
                >
                    Keunggulan Lumora
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-fr">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100/80 p-8 md:p-10 flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 ${index === 0 || index === 5 ? 'md:col-span-2' : 'md:col-span-1'}`}
                        >
                            <div>
                                <div className={`w-14 h-14 flex items-center justify-center rounded-[1.25rem] text-3xl mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${benefit.color} ${benefit.bg}`}>
                                    {benefit.icon}
                                </div>
                                <h3 className={`${index === 0 || index === 5 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-bold mb-4 leading-tight group-hover:text-[#0D47A1] transition-colors`}>
                                    {benefit.title}
                                </h3>
                            </div>

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
"use client";

import { motion } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Pricing() {
    return (
        <section id="harga" className="py-20 md:py-24 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D47A1] text-center mb-6"
                >
                    Pilih Paket yang Cocok untuk Bisnis Anda
                </motion.h2>

                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-base md:text-lg">
                    Semua paket sudah termasuk aplikasi mobile, dashboard web, dan update gratis selamanya
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

                    {/* Starter */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
                    >
                        <h3 className="text-2xl font-bold text-gray-800">Starter</h3>
                        <div className="mt-6 mb-8">
                            <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Rp749rb</span>
                            <span className="text-gray-500 text-base md:text-lg"> /bulan</span>
                        </div>
                        <ul className="space-y-4 mb-10 text-[15px] md:text-base text-gray-600">
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 shrink-0 mt-0.5" fontSize="small" /> <span>1 Mesin Photobooth</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 shrink-0 mt-0.5" fontSize="small" /> <span>Laporan Penjualan Dasar</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 shrink-0 mt-0.5" fontSize="small" /> <span>Support via Email</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 shrink-0 mt-0.5" fontSize="small" /> <span>Update Software</span></li>
                        </ul>
                        <button className="w-full py-4 border border-gray-200 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all text-sm md:text-base text-gray-700">
                            Pilih Starter
                        </button>
                    </motion.div>

                    {/* Pro - Paling Populer */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#062659] text-white rounded-[2.5rem] relative p-8 md:p-10 lg:p-12 shadow-2xl md:scale-105 lg:scale-105 z-10"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF5722] to-[#ff7e54] text-white text-sm font-bold px-8 py-1.5 rounded-full whitespace-nowrap shadow-lg z-20">
                            PALING POPULER
                        </div>

                        <h3 className="text-2xl font-bold text-blue-100">Pro</h3>
                        <div className="mt-6 mb-8">
                            <span className="text-4xl md:text-5xl font-extrabold tracking-tight">Rp999rb</span>
                            <span className="text-blue-200/70 text-base md:text-lg"> /bulan</span>
                        </div>
                        <ul className="space-y-4 mb-10 text-[15px] md:text-base text-blue-50/90 relative z-10">
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-[#4ADE80] shrink-0 mt-0.5" fontSize="small" /> <span>Unlimited Mesin</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-[#4ADE80] shrink-0 mt-0.5" fontSize="small" /> <span>Custom Template Foto</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-[#4ADE80] shrink-0 mt-0.5" fontSize="small" /> <span>Laporan Analitik Lengkap</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-[#4ADE80] shrink-0 mt-0.5" fontSize="small" /> <span>Support WhatsApp Prioritas</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-[#4ADE80] shrink-0 mt-0.5" fontSize="small" /> <span>Backup Data Otomatis</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-[#4ADE80] shrink-0 mt-0.5" fontSize="small" /> <span>Update Prioritas</span></li>
                        </ul>
                        <button className="bg-white text-[#062659] hover:bg-gray-100 w-full py-4 rounded-2xl font-bold text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 relative z-10">
                            Pilih Paket Pro
                        </button>
                    </motion.div>

                    {/* Enterprise */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1"
                    >
                        <h3 className="text-2xl font-bold text-gray-800">Enterprise</h3>
                        <div className="mt-6 mb-8">
                            <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Custom</span>
                        </div>
                        <ul className="space-y-4 mb-10 text-[15px] md:text-base text-gray-600">
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 shrink-0 mt-0.5" fontSize="small" /> <span>Semua Fitur Pro</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 shrink-0 mt-0.5" fontSize="small" /> <span>Dedicated Account Manager</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 shrink-0 mt-0.5" fontSize="small" /> <span>Training Offline</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 shrink-0 mt-0.5" fontSize="small" /> <span>Integrasi API</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-500 shrink-0 mt-0.5" fontSize="small" /> <span>Custom Development</span></li>
                        </ul>
                        <button className="w-full py-4 border border-gray-200 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all text-sm md:text-base text-gray-700">
                            Hubungi Kami
                        </button>
                    </motion.div>
                </div>

                <p className="text-center text-sm md:text-base text-gray-500 mt-12">
                    Bisa bayar bulanan atau tahunan • Garansi uang kembali 30 hari
                </p>
            </div>
        </section>
    );
}
"use client";

import { motion } from "framer-motion";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Pricing() {
    return (
        <section id="harga" className="py-20 md:py-24 bg-slate-50">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-6"
                >
                    Pilih Paket yang Cocok untuk Bisnis Anda
                </motion.h2>

                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-base md:text-lg">
                    Semua paket sudah termasuk aplikasi mobile, dashboard web, dan update gratis selamanya
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

                    {/* Starter */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        <h3 className="text-2xl font-bold text-slate-800">Starter</h3>
                        <div className="mt-6 mb-8">
                            <span className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Rp749rb</span>
                            <span className="text-slate-500 text-base md:text-lg font-medium"> /bulan</span>
                        </div>
                        <ul className="space-y-4 mb-10 text-[15px] md:text-base text-slate-600">
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-600 shrink-0 mt-0.5" fontSize="small" /> <span>1 Mesin Photobooth</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-600 shrink-0 mt-0.5" fontSize="small" /> <span>Laporan Penjualan Dasar</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-600 shrink-0 mt-0.5" fontSize="small" /> <span>Support via Email</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-600 shrink-0 mt-0.5" fontSize="small" /> <span>Update Software</span></li>
                        </ul>
                        <a
                            href="https://wa.me/6282375477757?text=Halo%20Lumora%2C%20saya%20tertarik%20dengan%20Paket%20Starter.%20Bisa%20minta%20info%20lebih%20lanjut%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center w-full py-4 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all text-sm md:text-base text-slate-700">
                            Pilih Starter
                        </a>
                    </motion.div>

                    {/* Pro - Paling Populer */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-900 text-white rounded-3xl relative p-8 md:p-10 shadow-2xl shadow-slate-900/20 md:scale-105 lg:scale-105 z-10 border border-slate-800"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-8 py-1.5 rounded-full whitespace-nowrap shadow-sm z-20">
                            PALING POPULER
                        </div>

                        <h3 className="text-2xl font-bold text-blue-100">Pro</h3>
                        <div className="mt-6 mb-8">
                            <span className="text-4xl md:text-5xl font-bold tracking-tight">Rp999rb</span>
                            <span className="text-slate-400 text-base md:text-lg font-medium"> /bulan</span>
                        </div>
                        <ul className="space-y-4 mb-10 text-[15px] md:text-base text-blue-50/90 relative z-10">
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-400 shrink-0 mt-0.5" fontSize="small" /> <span>Unlimited Mesin</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-400 shrink-0 mt-0.5" fontSize="small" /> <span>Custom Template Foto</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-400 shrink-0 mt-0.5" fontSize="small" /> <span>Laporan Analitik Lengkap</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-400 shrink-0 mt-0.5" fontSize="small" /> <span>Support WhatsApp Prioritas</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-400 shrink-0 mt-0.5" fontSize="small" /> <span>Backup Data Otomatis</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-400 shrink-0 mt-0.5" fontSize="small" /> <span>Update Prioritas</span></li>
                        </ul>
                        <a
                            href="https://wa.me/6282375477757?text=Halo%20Lumora%2C%20saya%20tertarik%20dengan%20Paket%20Pro.%20Bisa%20minta%20info%20lebih%20lanjut%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-white text-slate-900 hover:bg-slate-50 w-full py-4 rounded-2xl font-bold text-base md:text-lg shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 relative z-10">
                            Pilih Paket Pro
                        </a>
                    </motion.div>

                    {/* Enterprise */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        <h3 className="text-2xl font-bold text-slate-800">Enterprise</h3>
                        <div className="mt-6 mb-8">
                            <span className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Custom</span>
                        </div>
                        <ul className="space-y-4 mb-10 text-[15px] md:text-base text-slate-600">
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-600 shrink-0 mt-0.5" fontSize="small" /> <span>Semua Fitur Pro</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-600 shrink-0 mt-0.5" fontSize="small" /> <span>Dedicated Account Manager</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-600 shrink-0 mt-0.5" fontSize="small" /> <span>Training Offline/Online</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-600 shrink-0 mt-0.5" fontSize="small" /> <span>Integrasi API</span></li>
                            <li className="flex items-start gap-3"><CheckCircleIcon className="text-blue-600 shrink-0 mt-0.5" fontSize="small" /> <span>Custom Development</span></li>
                        </ul>
                        <a
                            href="https://wa.me/6282375477757?text=Halo%20Lumora%2C%20saya%20ingin%20berdiskusi%20mengenai%20Paket%20Enterprise%20untuk%20kebutuhan%20custom%20bisnis%20saya."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center w-full py-4 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all text-sm md:text-base text-slate-700">
                            Hubungi Kami
                        </a>
                    </motion.div>
                </div>

                <p className="text-center text-sm md:text-base text-slate-500 mt-12 font-medium">
                    Bisa bayar bulanan atau tahunan • Garansi uang kembali 30 hari
                </p>
            </div>
        </section>
    );
}
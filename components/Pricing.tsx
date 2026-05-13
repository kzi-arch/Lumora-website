"use client";

import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <section id="harga" className="py-20 md:py-24 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="section-title text-[#0D47A1]"
                >
                    Pilih Paket yang Cocok untuk Bisnis Anda
                </motion.h2>

                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Semua paket sudah termasuk aplikasi mobile, dashboard web, dan update gratis selamanya
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

                    {/* Starter */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="card p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-bold text-gray-800">Starter</h3>
                        <div className="mt-6 mb-10">
                            <span className="text-5xl font-bold">Rp299rb</span>
                            <span className="text-gray-500"> /bulan</span>
                        </div>
                        <ul className="space-y-4 mb-12 text-gray-600">
                            <li>✓ 1 Mesin Photobooth</li>
                            <li>✓ Laporan Penjualan Dasar</li>
                            <li>✓ Support via Email</li>
                            <li>✓ Update Software</li>
                        </ul>
                        <button className="w-full py-4 border border-gray-300 rounded-2xl font-semibold hover:bg-gray-50 transition">
                            Pilih Starter
                        </button>
                    </motion.div>

                    {/* Pro - Paling Populer */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="card relative p-8 md:p-10 border-2 border-[#FF5722] shadow-xl z-10 md:scale-105"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF5722] text-white text-sm font-bold px-8 py-2 rounded-full">
                            PALING POPULER
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800">Pro</h3>
                        <div className="mt-6 mb-10">
                            <span className="text-5xl font-bold">Rp599rb</span>
                            <span className="text-gray-500"> /bulan</span>
                        </div>
                        <ul className="space-y-4 mb-12 text-gray-600">
                            <li>✓ Unlimited Mesin</li>
                            <li>✓ Custom Template Foto</li>
                            <li>✓ Laporan Analitik Lengkap</li>
                            <li>✓ Support WhatsApp Prioritas</li>
                            <li>✓ Backup Data Otomatis</li>
                            <li>✓ Update Prioritas</li>
                        </ul>
                        <button className="cta-orange w-full py-4 text-white rounded-2xl font-semibold text-lg">
                            Pilih Paket Pro
                        </button>
                    </motion.div>

                    {/* Enterprise */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="card p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-bold text-gray-800">Enterprise</h3>
                        <div className="mt-6 mb-10">
                            <span className="text-5xl font-bold">Custom</span>
                        </div>
                        <ul className="space-y-4 mb-12 text-gray-600">
                            <li>✓ Semua Fitur Pro</li>
                            <li>✓ Dedicated Account Manager</li>
                            <li>✓ Training Offline</li>
                            <li>✓ Integrasi API</li>
                            <li>✓ Custom Development</li>
                        </ul>
                        <button className="w-full py-4 border border-gray-300 rounded-2xl font-semibold hover:bg-gray-50 transition">
                            Hubungi Kami
                        </button>
                    </motion.div>
                </div>

                <p className="text-center text-sm text-gray-500 mt-12">
                    Bisa bayar bulanan atau tahunan • Garansi uang kembali 30 hari
                </p>
            </div>
        </section>
    );
}
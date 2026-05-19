"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        q: "Apakah Lumora bisa digunakan untuk semua jenis mesin photobooth?",
        a: "Ya, Lumora kompatibel dengan hampir semua tipe photobooth baik Windows maupun Android.",
    },
    {
        q: "Berapa lama proses aktivasi setelah pembayaran?",
        a: "Aktivasi biasanya dilakukan dalam waktu 1x24 jam setelah pembayaran diterima.",
    },
    {
        q: "Apakah bisa digunakan untuk unlimited mesin?",
        a: "Ya, Paket Pro dan Enterprise mendukung Unlimited Mesin.",
    },
    {
        q: "Bagaimana cara pembayaran berlangganan?",
        a: "Bisa melalui transfer bank, virtual account, e-wallet (GoPay, OVO, DANA), dan kartu kredit.",
    },
    {
        q: "Apakah ada garansi uang kembali?",
        a: "Ya, kami memberikan Garansi Uang Kembali 30 Hari penuh.",
    },
    {
        q: "Bagaimana jika ada masalah teknis di malam hari?",
        a: "Tim support kami siap membantu via WhatsApp hingga pukul 23.00 WIB.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="section-title"
                >
                    Pertanyaan yang Sering Ditanyakan
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            className={`border ${openIndex === index ? 'border-blue-200 shadow-md bg-blue-50/50' : 'border-slate-200 hover:border-slate-300'} rounded-2xl overflow-hidden bg-white transition-all duration-300`}
                        >
                            <button
                                className="w-full px-6 md:px-8 py-6 text-left font-semibold flex justify-between items-start md:items-center gap-4 transition-colors group"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`text-base md:text-lg font-medium ${openIndex === index ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                                    {faq.q}
                                </span>
                                <span className={`text-2xl transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`}>
                                    <ExpandMoreIcon fontSize="inherit" />
                                </span>
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-8 pb-6 text-gray-600 border-t"
                                >
                                    {faq.a}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
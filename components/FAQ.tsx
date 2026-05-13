"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
                    viewport={{ once: true }}
                    className="section-title text-[#0D47A1] text-center mb-12 md:mb-16"
                >
                    Pertanyaan yang Sering Ditanyakan
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`border ${openIndex === index ? 'border-[#0D47A1]/40 shadow-md bg-blue-50/20' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'} rounded-2xl overflow-hidden bg-white transition-all duration-300`}
                        >
                            <button
                                className="w-full px-6 md:px-8 py-6 text-left font-semibold flex justify-between items-start md:items-center gap-4 transition-colors group"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`text-base md:text-lg ${openIndex === index ? 'text-[#0D47A1]' : 'text-gray-800 group-hover:text-[#0D47A1]'}`}>
                                    {faq.q}
                                </span>
                                <span className={`text-2xl transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-[#0D47A1]' : 'text-gray-400 group-hover:text-[#0D47A1]'}`}>
                                    <ExpandMoreIcon fontSize="inherit" />
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 md:px-8 pb-6 text-gray-600">
                                            <div className="h-px w-full bg-gray-100 mb-5"></div>
                                            <p className="leading-relaxed text-[15.5px] md:text-base">{faq.a}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
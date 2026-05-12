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
                            className="border border-gray-200 rounded-3xl overflow-hidden"
                        >
                            <button
                                className="w-full px-8 py-6 text-left font-semibold flex justify-between items-center hover:bg-gray-50 transition"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {faq.q}
                                <span className="text-2xl transition-transform duration-300">
                                    {openIndex === index ? "−" : "+"}
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
"use client";

<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
=======
import { motion } from "framer-motion";
import { useState } from "react";
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b

const faqs = [
    {
        q: "Apakah Lumora bisa digunakan untuk semua jenis mesin photobooth?",
<<<<<<< HEAD
        a: "Ya, Lumora kompatibel dengan berbagai jenis mesin yang menggunakan sistem operasi Windows, seperti PC maupun Mini PC/PC portabel. Kami merancangnya agar sangat mudah dipahami dan digunakan, sehingga siapapun, termasuk orang awam, bisa menjalankan operasional photobooth tanpa kendala teknis yang rumit.",
=======
        a: "Ya, Lumora kompatibel dengan hampir semua tipe photobooth baik Windows maupun Android.",
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
    },
    {
        q: "Berapa lama proses aktivasi setelah pembayaran?",
        a: "Aktivasi biasanya dilakukan dalam waktu 1x24 jam setelah pembayaran diterima.",
    },
    {
        q: "Apakah bisa digunakan untuk unlimited mesin?",
<<<<<<< HEAD
        a: "Ya, Paket Enterprise mendukung Unlimited Mesin.",
    },
    {
        q: "Bagaimana cara pembayaran berlangganan?",
        a: "Bisa melalui transfer bank, virtual account, e-wallet (GoPay, OVO, DANA).",
=======
        a: "Ya, Paket Pro dan Enterprise mendukung Unlimited Mesin.",
    },
    {
        q: "Bagaimana cara pembayaran berlangganan?",
        a: "Bisa melalui transfer bank, virtual account, e-wallet (GoPay, OVO, DANA), dan kartu kredit.",
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
    },
    {
        q: "Apakah ada garansi uang kembali?",
        a: "Ya, kami memberikan Garansi Uang Kembali 30 Hari penuh.",
    },
    {
        q: "Bagaimana jika ada masalah teknis di malam hari?",
<<<<<<< HEAD
        a: "Tim support kami siap membantu via WhatsApp hingga pukul 21.00 WIB.",
=======
        a: "Tim support kami siap membantu via WhatsApp hingga pukul 23.00 WIB.",
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
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
<<<<<<< HEAD
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-12 md:mb-16"
=======
                    className="section-title"
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                >
                    Pertanyaan yang Sering Ditanyakan
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                            viewport={{ once: true }}
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
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 md:px-8 pb-6 text-slate-600">
                                            <div className="h-px w-full bg-slate-200 mb-5"></div>
                                            <p className="leading-relaxed text-[15.5px] md:text-base">{faq.a}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
=======
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
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
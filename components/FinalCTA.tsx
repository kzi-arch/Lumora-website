"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="py-24 bg-[#0D47A1] text-white text-center relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Siap Meningkatkan Profit<br />Photobooth Anda?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl mb-10"
                >
                    Dapatkan demo gratis dan konsultasi bisnis hari ini
                </motion.p>

                <motion.a
                    href="https://wa.me/628XXXXXXXXXX?text=Halo%20Lumora%2C%20saya%20mau%20minta%20demo%20gratis"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0.4 }}
                    className="cta-orange whatsApp-btn inline-flex items-center gap-4 px-12 py-7 rounded-3xl text-2xl font-bold"
                >
                    <i className="fab fa-whatsapp text-4xl"></i>
                    Chat WhatsApp Sekarang
                </motion.a>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 flex flex-wrap justify-center gap-8 text-sm"
                >
                    <p>✅ Garansi Uang Kembali 30 Hari</p>
                    <p>✅ Support 24 Jam</p>
                    <p>✅ Update Gratis Selamanya</p>
                </motion.div>
            </div>
        </section>
    );
}
"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function FinalCTA() {
    return (
        <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Siap Meningkatkan Profit<br className="hidden sm:block" />
                        Photobooth Anda?
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12">
                        Jangan biarkan bisnis Anda terus berjalan manual.
                        Mulai kelola semua mesin dengan lebih mudah dan menguntungkan hari ini.
                    </p>
                </motion.div>

                <motion.a
                    href="https://wa.me/6282375477757?text=Halo%20Lumora%2C%20saya%20mau%20minta%20demo%20gratis"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center justify-center gap-4 px-10 md:px-14 py-5 md:py-6 rounded-full text-xl md:text-2xl font-semibold shadow-lg shadow-blue-900/20 transition-all duration-300 mx-auto"
                >
                    <WhatsAppIcon fontSize="inherit" className="text-4xl" />
                    Chat WhatsApp Sekarang
                </motion.a>

                {/* Trust Signals */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base opacity-90"
                >
                    <div className="flex items-center gap-2">
                        <CheckCircleIcon className="text-emerald-400" fontSize="small" />
                        <span>Garansi Uang Kembali 30 Hari</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircleIcon className="text-emerald-400" fontSize="small" />
                        <span>Support 24 Jam</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircleIcon className="text-emerald-400" fontSize="small" />
                        <span>Update Gratis Selamanya</span>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </section>
    );
}
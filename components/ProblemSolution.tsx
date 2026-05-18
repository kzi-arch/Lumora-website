<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

=======
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
export default function ProblemSolution() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
<<<<<<< HEAD
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
                            Masih Mengelola Photobooth<br />
                            <span className="text-slate-500 font-medium">Secara Manual?</span>
                        </h2>

                        <div className="space-y-4 text-lg">
=======
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
                            Masih Mengelola Photobooth<br />
                            <span className="text-gray-400">Secara Manual?</span>
                        </h2>

                        <div className="space-y-8 text-lg">
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                            {[
                                "Harus bayar karyawan full-time",
                                "Sulit pantau penjualan real-time",
                                "Ribet update template satu per satu",
                                "Mesin error saat sedang ramai"
                            ].map((text, i) => (
<<<<<<< HEAD
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 items-center p-4 rounded-2xl hover:bg-rose-50/50 transition-colors group border border-transparent hover:border-rose-100"
                                >
                                    <span className="text-rose-400 group-hover:text-rose-500 text-3xl flex items-center transition-colors">
                                        <CancelIcon fontSize="inherit" />
                                    </span>
                                    <p className="text-slate-700 font-medium">{text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-10 md:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 relative z-10">
                            Lumora adalah Solusinya
                        </h3>
                        <p className="text-lg md:text-xl leading-relaxed text-slate-600 relative z-10 mb-8">
                            Software photobooth all-in-one yang memungkinkan Anda mengelola
                            <span className="font-semibold text-blue-600"> semua mesin hanya dari satu HP</span>.
                            Lebih hemat, lebih cepat, dan jauh lebih profesional.
                        </p>
                        
                        <div className="space-y-3 relative z-10">
                            {['Hemat biaya operasional', 'Kontrol penuh dari jauh', 'Laporan otomatis & akurat'].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (idx * 0.1) }}
                                    className="flex items-center gap-3 font-medium text-slate-700"
                                >
                                    <CheckCircleIcon className="text-emerald-500" fontSize="small" />
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
=======
                                <div key={i} className="flex gap-4 items-start">
                                    <span className="text-red-500 text-3xl mt-1">✘</span>
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass p-12 rounded-3xl">
                        <h3 className="text-3xl font-bold text-[#0D47A1] mb-6">
                            Lumora adalah Solusinya
                        </h3>
                        <p className="text-xl leading-relaxed text-gray-700">
                            Software photobooth all-in-one yang memungkinkan Anda mengelola
                            <span className="font-semibold">semua mesin hanya dari satu HP</span>.
                            Lebih hemat, lebih cepat, dan jauh lebih profesional.
                        </p>
                    </div>
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                </div>
            </div>
        </section>
    );
}
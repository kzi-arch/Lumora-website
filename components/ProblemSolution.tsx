export default function ProblemSolution() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
                            Masih Mengelola Photobooth<br />
                            <span className="text-slate-500 font-medium">Secara Manual?</span>
                        </h2>

                        <div className="space-y-8 text-lg">
                            {[
                                "Harus bayar karyawan full-time",
                                "Sulit pantau penjualan real-time",
                                "Ribet update template satu per satu",
                                "Mesin error saat sedang ramai"
                            ].map((text, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <span className="text-red-500 text-3xl mt-1">✘</span>
                                    <p>{text}</p>
                                </div>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
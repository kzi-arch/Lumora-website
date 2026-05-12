export default function ProblemSolution() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
                            Masih Mengelola Photobooth<br />
                            <span className="text-gray-400">Secara Manual?</span>
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
                </div>
            </div>
        </section>
    );
}
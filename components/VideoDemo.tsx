export default function VideoDemo() {
    return (
        <section id="demo" className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="section-title">Lihat Lumora dalam Aksi</h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                    Video demo singkat (90 detik) — Cara mengelola photobooth dari HP
                </p>

                <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-xl">
                    {/* Ganti dengan link video YouTube atau file video Anda */}
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="Demo Lumora Photobooth"
                        allowFullScreen
                    ></iframe>
                </div>

                <p className="text-center text-sm text-gray-500 mt-6">
                    ⚡ Demo real aplikasi Lumora — Bukan video marketing biasa
                </p>
            </div>
        </section>
    );
}
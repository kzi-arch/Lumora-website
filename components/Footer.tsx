export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
                <div className="grid md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-[#0D47A1] font-bold text-2xl">
                                L
                            </div>
                            <h2 className="text-3xl font-bold text-white">Lumora</h2>
                        </div>
                        <p className="text-gray-400">
                            Software Photobooth No.1 di Indonesia<br />
                            Kelola bisnis lebih mudah dan menguntungkan.
                        </p>
                    </div>

                    {/* Link Cepat */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Produk</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Fitur</a></li>
                            <li><a href="#harga" className="hover:text-white transition">Harga</a></li>
                            <li><a href="#demo" className="hover:text-white transition">Demo Aplikasi</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Perusahaan</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition">Karir</a></li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Hubungi Kami</h3>
                        <div className="space-y-3">
                            <a
                                href="https://wa.me/628XXXXXXXXXX"
                                className="flex items-center gap-3 hover:text-white transition"
                            >
                                <i className="fab fa-whatsapp text-2xl"></i>
                                <span>Chat WhatsApp</span>
                            </a>
                            <p className="text-sm">Email: hello@lumora.id</p>
                            <p className="text-sm">Senin - Minggu: 08.00 - 22.00 WIB</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
                    © 2026 Lumora Indonesia. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
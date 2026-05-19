export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
            <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                    {/* Brand */}
                    <div className="md:pr-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/lumora side.png" alt="Logo Lumora" width={200} height={150} className="h-20 md:h-20 w-auto object-contain" priority />
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

                    {/* Perusahaan */}
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
                                href="https://wa.me/6282375477757"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 hover:text-white transition-colors group"
                            >
                                <WhatsAppIcon fontSize="inherit" className="text-2xl" />
                                <span className="font-medium">Chat WhatsApp</span>
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
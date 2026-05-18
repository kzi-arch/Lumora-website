<<<<<<< HEAD
import Image from 'next/image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                            Software Photobooth No.1 di Indonesia.<br className="hidden md:block" />
=======
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
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                            Kelola bisnis lebih mudah dan menguntungkan.
                        </p>
                    </div>

                    {/* Link Cepat */}
                    <div>
<<<<<<< HEAD
                        <h3 className="font-semibold text-white mb-6 text-lg tracking-wide">Produk</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Fitur</a></li>
                            <li><a href="#harga" className="hover:text-white hover:translate-x-1 transition-all inline-block">Harga</a></li>
                            <li><a href="#demo" className="hover:text-white hover:translate-x-1 transition-all inline-block">Demo Aplikasi</a></li>
                        </ul>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <h3 className="font-semibold text-white mb-6 text-lg tracking-wide">Perusahaan</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Tentang Kami</a></li>
=======
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
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
<<<<<<< HEAD
                        <h3 className="font-semibold text-white mb-6 text-lg tracking-wide">Hubungi Kami</h3>
                        <div className="space-y-5 text-slate-400">
                            <a
                                href="https://wa.me/6282375477757"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 hover:text-white transition-colors group"
                            >
                                <WhatsAppIcon fontSize="inherit" className="text-2xl" />
                                <span className="font-medium">Chat WhatsApp</span>
                            </a>
                            <div className="text-sm leading-relaxed space-y-1">
                                <strong className="block text-white font-medium">Email</strong>
                                <p>ciptalabinovasinusantara@gmail.com</p>
                            </div>
                            <div className="text-sm leading-relaxed space-y-1">
                                <strong className="block text-white font-medium">Jam Operasional</strong>
                                <p>Senin - Minggu: 08.00 - 22.00 WIB</p>
                            </div>
                            <div className="text-sm leading-relaxed space-y-1">
                                <strong className="flex items-center gap-1.5 text-white font-medium">
                                    <LocationOnIcon fontSize="small" /> Lokasi
                                </strong>
                                <p>Palembang, Indonesia</p>
                            </div>
=======
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
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                        </div>
                    </div>
                </div>

<<<<<<< HEAD
                {/* Bottom Bar: Powered by & Copyright */}
                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
                        <span className="text-slate-500 text-sm font-medium tracking-wide uppercase">Powered by</span>
                        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 px-6 py-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                            <Image src="/midtrans.png" alt="Logo Midtrans" width={120} height={48} className="h-7 md:h-8 w-auto object-contain" />
                            <Image src="/xendit.png" alt="Logo Xendit" width={120} height={48} className="h-7 md:h-29 w-auto object-contain" />
                        </div>
                    </div>

                    <div className="text-center md:text-right text-sm text-slate-500 mt-4 md:mt-0">
                        © {new Date().getFullYear()} Lumora Indonesia. All Rights Reserved.
                    </div>
=======
                <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
                    © 2026 Lumora Indonesia. All Rights Reserved.
>>>>>>> 9e6afd7abe014f6c25347937e1433a0f6e78ac4b
                </div>
            </div>
        </footer>
    );
}
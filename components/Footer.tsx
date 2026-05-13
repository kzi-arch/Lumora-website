import Image from 'next/image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
    return (
        <footer className="bg-[#062659] text-blue-100">
            <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                    {/* Brand */}
                    <div className="md:pr-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/PTP LOGO.png" alt="Logo Lumora" width={200} height={150} className="h-20 md:h-20 w-auto object-contain" priority />
                        </div>
                        <p className="text-blue-200 leading-relaxed text-sm md:text-base">
                            Software Photobooth No.1 di Indonesia.<br className="hidden md:block" />
                            Kelola bisnis lebih mudah dan menguntungkan.
                        </p>
                    </div>

                    {/* Link Cepat */}
                    <div>
                        <h3 className="font-semibold text-white mb-6 text-lg tracking-wide">Produk</h3>
                        <ul className="space-y-4 text-blue-200">
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Fitur</a></li>
                            <li><a href="#harga" className="hover:text-white hover:translate-x-1 transition-all inline-block">Harga</a></li>
                            <li><a href="#demo" className="hover:text-white hover:translate-x-1 transition-all inline-block">Demo Aplikasi</a></li>
                        </ul>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <h3 className="font-semibold text-white mb-6 text-lg tracking-wide">Perusahaan</h3>
                        <ul className="space-y-4 text-blue-200">
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Blog</a></li>
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Karir</a></li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h3 className="font-semibold text-white mb-6 text-lg tracking-wide">Hubungi Kami</h3>
                        <div className="space-y-5 text-blue-200">
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
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Powered by & Copyright */}
                <div className="border-t border-blue-800/60 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
                        <span className="text-blue-300/80 text-sm font-medium tracking-wide uppercase">Powered by</span>
                        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 px-6 py-3.5 rounded-2xl shadow-lg border border-blue-100/10 hover:shadow-xl transition-shadow">
                            <Image src="/midtrans.png" alt="Logo Midtrans" width={120} height={48} className="h-7 md:h-8 w-auto object-contain" />
                            <Image src="/xendit.png" alt="Logo Xendit" width={120} height={48} className="h-7 md:h-29 w-auto object-contain" />
                        </div>
                    </div>

                    <div className="text-center md:text-right text-sm text-blue-300/60 mt-4 md:mt-0">
                        © {new Date().getFullYear()} Lumora Indonesia. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import DownloadModal from "@/components/DownloadModal";

const NAV_LINKS = [
  { href: "/", label: "Passageiro" },
  { href: "/motorista", label: "Motorista" },
  { href: "/cidades", label: "Cidades" },
  { href: "/parceiros", label: "Parceiros" },
  { href: "/empresa", label: "Empresa" },
  { href: "/privacidade", label: "Privacidade" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#002b9a] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[70px] flex items-center justify-between gap-4">
          {/* Logo KuyaKubuya + Links */}
          <div className="flex items-center gap-7 lg:gap-9">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <img
                src="/brand/icon-kk.png"
                alt="KuyaKubuya"
                className="w-9 h-9 rounded-xl shadow-xs"
              />
              <span className="text-white text-xl sm:text-2xl font-black italic tracking-tight">
                KuyaKubuya
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-semibold">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-opacity whitespace-nowrap ${
                      isActive
                        ? "text-white underline underline-offset-8 decoration-2 decoration-[#7ffc98]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* CTA + Idioma + Menu Mobile */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDownloadOpen(true)}
              className="px-4 sm:px-5 py-2 rounded-full bg-white text-[#001a67] hover:bg-[#eff4ff] font-bold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              Baixar a app
            </button>

            <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-white/90 px-2.5 py-1.5 rounded-full bg-white/10">
              <Globe className="w-3.5 h-3.5 text-[#7ffc98]" />
              <span>MZ • Português</span>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Abrir menu"
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Drawer Mobile */}
        {mobileOpen && (
          <div className="md:hidden bg-[#001a67] border-t border-white/15 px-4 py-4 space-y-2">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-white hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/80 px-3">
              <span>Moçambique • Português</span>
              <Link
                href="/suporte"
                onClick={() => setMobileOpen(false)}
                className="font-bold text-[#7ffc98]"
              >
                Suporte
              </Link>
            </div>
          </div>
        )}
      </header>

      <DownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </>
  );
}

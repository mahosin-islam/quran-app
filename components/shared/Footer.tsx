// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-200 font-sans">

      {/* Islamic Scene - Mosque + Camel SVG */}
      <div className="relative h-40 overflow-hidden">
        <svg viewBox="0 0 900 160" xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full">
          {/* Ground */}
          <path d="M0 130 Q150 100 300 120 Q450 140 600 115 Q750 95 900 120 L900 160 L0 160Z"
            fill="#c8ddc8" opacity="0.6"/>
          <path d="M0 145 Q200 125 400 140 Q600 155 900 135 L900 160 L0 160Z"
            fill="#b8d4b8" opacity="0.5"/>

          {/* Mosque */}
          <g transform="translate(30,30)" fill="#a8c8a8" opacity="0.75">
            <ellipse cx="60" cy="70" rx="28" ry="22"/>
            <rect x="32" y="68" width="56" height="42" rx="2"/>
            <rect x="10" y="55" width="14" height="55" rx="2" fill="#9abea8"/>
            <ellipse cx="17" cy="54" rx="8" ry="6"/>
            <polygon points="17,40 12,54 22,54" fill="#8ab4a0"/>
            <rect x="96" y="55" width="14" height="55" rx="2" fill="#9abea8"/>
            <polygon points="103,40 98,54 108,54" fill="#8ab4a0"/>
            <ellipse cx="60" cy="48" rx="10" ry="8" fill="#98bea0"/>
            <polygon points="60,32 55,48 65,48" fill="#88b098"/>
          </g>

          {/* Camel */}
          <g transform="translate(760,60)" fill="#8ab898" opacity="0.72">
            <ellipse cx="55" cy="72" rx="38" ry="24"/>
            <ellipse cx="55" cy="50" rx="18" ry="16" fill="#88b690"/>
            <rect x="78" y="42" width="12" height="30" rx="6"/>
            <ellipse cx="88" cy="40" rx="10" ry="9"/>
            <rect x="25" y="88" width="8" height="28" rx="4" fill="#7aaa88"/>
            <rect x="40" y="90" width="8" height="26" rx="4" fill="#7aaa88"/>
            <rect x="62" y="90" width="8" height="26" rx="4" fill="#7aaa88"/>
            <rect x="77" y="88" width="8" height="28" rx="4" fill="#7aaa88"/>
          </g>
        </svg>
      </div>

      {/* Main Footer */}
      <div className="bg-base-200 px-6 ">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-800 rounded-xl flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base-content text-lg leading-tight">
                  Quranul-Hakim
                </h3>
                <p className="text-xs text-base-content/50">Read, Study, and Learn</p>
              </div>
            </div>
            <p className="text-sm text-base-content/60 leading-relaxed">
              IRD Foundation is providing Islamic apps for the benefit of Mankind,
              expecting rewards from Allah Subhanawa ta'ala alone.
            </p>
          </div>

          {/* Other Pages */}
          <div>
            <h4 className="text-sm font-medium text-base-content mb-4">Other Pages</h4>
            <ul className="space-y-2.5">
              {["About Us", "Privacy Policy", "Our Projects", "Read Quran"].map((item) => (
                <li key={item}>
                  <Link href="#"
                    className="text-sm text-base-content/60 hover:text-base-content transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-sm font-medium text-base-content mb-4">Important Links</h4>
            <ul className="space-y-2.5">
              {["IRD Foundation", "Quranmazid.com", "Dua & Ruqyah", "IHadith"].map((item) => (
                <li key={item}>
                  <Link href="#"
                    className="text-sm text-base-content/60 hover:text-base-content transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-medium text-base-content mb-4">Follow Us</h4>
            <div className="flex gap-2">
              {/* Facebook */}
              <a href="#"
                className="w-9 h-9 rounded-full bg-base-300 hover:bg-base-content/10 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-base-content/70" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#"
                className="w-9 h-9 rounded-full bg-base-300 hover:bg-base-content/10 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 fill-base-content/70" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-base-300 py-3 px-6 text-center">
        <p className="text-xs text-base-content/50">
          © 2025 Quranul-Hakim · All rights reserved · Made with ❤️ for the Ummah
        </p>
      </div>

    </footer>
  );
}
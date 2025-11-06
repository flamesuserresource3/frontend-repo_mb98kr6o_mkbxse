import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo.svg';

const navItems = [
  { to: '/', label: 'Beranda' },
  { to: '/silabus', label: 'Silabus / Modul' },
  { to: '/tugas-kuis', label: 'Tugas & Kuis' },
  { to: '/jadwal', label: 'Jadwal' },
  { to: '/profil-dosen', label: 'Profil Dosen' },
];

export default function Navbar({ user, onLogin, onLogout }) {
  const [openLogin, setOpenLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    onLogin({ name: name.trim(), email: email.trim() });
    setOpenLogin(false);
    setName('');
    setEmail('');
  };

  const activeClass = 'text-[#23b66e] border-b-2 border-[#23b66e]';

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Logo Kuliah Teknologi Informasi" className="w-9 h-9" />
            <div className="leading-tight">
              <p className="font-semibold text-[#0b3d91]">Kuliah Teknologi Informasi</p>
              <p className="text-xs text-slate-500">Platform pembelajaran daring</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `hover:text-[#23b66e] transition-colors ${
                    isActive || location.pathname === item.to ? activeClass : 'text-slate-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {!user ? (
              <div className="relative">
                <button
                  onClick={() => setOpenLogin((v) => !v)}
                  className="px-4 py-2 rounded-md bg-[#0b3d91] text-white hover:bg-[#0a357f]"
                >
                  Masuk
                </button>
                {openLogin && (
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-lg shadow-lg p-4">
                    <p className="font-medium text-slate-800 mb-2">Login Mahasiswa</p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Nama</label>
                        <input
                          type="text"
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#23b66e]"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Nama lengkap"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-slate-500 mb-1">Email</label>
                        <input
                          type="email"
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#23b66e]"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="email@kampus.ac.id"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-3 py-2 rounded-md bg-[#23b66e] text-white hover:bg-[#1ea25f]"
                      >
                        Masuk
                      </button>
                      <p className="text-[11px] text-slate-500">Data login disimpan di perangkat Anda (localStorage).</p>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-sm font-medium text-slate-800">{user.name}</span>
                  <span className="text-xs text-slate-500">{user.email}</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#0b3d91] text-white flex items-center justify-center font-semibold">
                  {user.name?.[0]?.toUpperCase()}
                </div>
                <button
                  onClick={onLogout}
                  className="px-3 py-2 rounded-md border text-slate-700 hover:bg-slate-50"
                >
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-2 flex gap-4 overflow-x-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap px-2 py-1 rounded ${
                  isActive || location.pathname === item.to ? 'text-[#0b3d91] bg-[#0b3d9110]' : 'text-slate-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

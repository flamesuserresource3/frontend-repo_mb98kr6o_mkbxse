import { Link } from 'react-router-dom';

const modules = [
  {
    slug: 'pengenalan-teknologi-informasi',
    title: 'Pengenalan Teknologi Informasi',
    summary:
      'Konsep dasar TI, sejarah, domain penerapan, dan peran TI dalam transformasi digital.',
  },
  {
    slug: 'dasar-pemrograman',
    title: 'Dasar Pemrograman',
    summary:
      'Variabel, tipe data, percabangan, perulangan, fungsi, dan struktur data sederhana.',
  },
  {
    slug: 'basis-data-dasar',
    title: 'Basis Data Dasar',
    summary:
      'Konsep entitas-relasi, perancangan skema, SQL dasar (SELECT, INSERT, UPDATE, DELETE).',
  },
  {
    slug: 'jaringan-komputer',
    title: 'Jaringan Komputer',
    summary:
      'Model OSI, TCP/IP, perangkat jaringan, dan dasar-dasar routing serta keamanan jaringan.',
  },
  {
    slug: 'keamanan-sistem-informasi',
    title: 'Keamanan Sistem Informasi',
    summary:
      'Prinsip kerahasiaan, integritas, ketersediaan, ancaman umum, dan praktik pengamanan.',
  },
];

export default function ModuleList({ compact = false }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#0b3d91]">Silabus / Modul</h2>
          <p className="text-slate-600">Lima modul awal beserta ringkasan materi.</p>
        </div>
        {!compact && (
          <Link to="/silabus" className="hidden md:inline-block text-[#23b66e] hover:underline">Lihat semua</Link>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((m) => (
          <Link
            to={`/modul/${m.slug}`}
            key={m.slug}
            className="group rounded-xl border border-slate-200 bg-white p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-md bg-[#0b3d91] text-white flex items-center justify-center font-semibold">
                {m.title.split(' ').map(w => w[0]).join('').slice(0,2)}
              </div>
              <div>
                <p className="font-semibold text-slate-900 group-hover:text-[#0b3d91]">{m.title}</p>
                <p className="text-sm text-slate-600 mt-1">{m.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

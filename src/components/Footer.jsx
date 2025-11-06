export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <p className="font-semibold text-[#0b3d91]">Kuliah Teknologi Informasi</p>
          <p className="text-slate-600 mt-2">Konten edukatif untuk mahasiswa TI. Materi, tugas, jadwal, dan forum diskusi.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Kontak</p>
          <p className="text-slate-600 mt-2">Email: ti@kampus.ac.id</p>
          <p className="text-slate-600">Instagram: @ti_kampus</p>
          <p className="text-slate-600">Telepon: (021) 123-456</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Hak Cipta</p>
          <p className="text-slate-600 mt-2">© {new Date().getFullYear()} Kuliah Teknologi Informasi. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

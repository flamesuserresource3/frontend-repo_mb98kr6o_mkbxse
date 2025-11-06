import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-[#f7f9fc]">
      <div className="max-w-4xl">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#0b3d9110] text-[#0b3d91] mb-4">Kampus · Teknologi Informasi</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Kuliah Teknologi Informasi
        </h1>
        <p className="mt-4 text-slate-600">
          Platform pembelajaran daring untuk mahasiswa TI yang berisi materi, tugas, dan komunikasi akademik.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to="/silabus" className="px-5 py-3 rounded-md bg-[#0b3d91] text-white hover:bg-[#0a357f]">
            Lihat Silabus
          </Link>
          <Link to="/tugas-kuis" className="px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-white">
            Tugas & Kuis
          </Link>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-10 pointer-events-none">
        <div className="mx-auto h-24 w-11/12 bg-gradient-to-t from-[#0b3d9110] to-transparent rounded-t-full" />
      </div>
    </section>
  );
}

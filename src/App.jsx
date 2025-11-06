import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ModuleList from './components/ModuleList'
import Footer from './components/Footer'

function Home() {
  return (
    <>
      <Hero />
      <ModuleList />
    </>
  )
}

function SyllabusPage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-[#0b3d91] mb-4">Silabus / Modul</h1>
        <p className="text-slate-600 mb-6">Lima modul awal dengan ringkasan materi. Klik salah satu modul untuk melihat detail.</p>
      </div>
      <ModuleList compact />
    </div>
  )
}

function AssignmentQuizPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-[#0b3d91] mb-6">Tugas & Kuis</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded-xl p-5 bg-white">
          <h2 className="font-semibold text-slate-900">Tugas 1: Analisis Kebutuhan Sistem</h2>
          <p className="text-slate-600 mt-2">Buat ringkasan satu halaman tentang kebutuhan fungsional dan non-fungsional untuk aplikasi perpustakaan kampus.</p>
          <ul className="list-disc ml-5 mt-3 text-sm text-slate-600">
            <li>Format: PDF, maksimal 2 halaman</li>
            <li>Penamaan: NIM_Nama_Tugas1.pdf</li>
            <li>Deadline: Minggu ke-2, Jumat 23:59</li>
          </ul>
          <button className="mt-4 px-4 py-2 rounded-md bg-[#0b3d91] text-white">Unggah Tugas</button>
        </div>
        <div className="border rounded-xl p-5 bg-white">
          <h2 className="font-semibold text-slate-900">Kuis 1: Dasar TI (3 Soal)</h2>
          <form className="mt-3 space-y-4">
            <div>
              <p className="font-medium">1) Apa kepanjangan dari TI?</p>
              <label className="block"><input type="radio" name="q1" className="mr-2"/> Teknologi Informasi</label>
              <label className="block"><input type="radio" name="q1" className="mr-2"/> Teknik Informatika</label>
            </div>
            <div>
              <p className="font-medium">2) SQL digunakan untuk?</p>
              <label className="block"><input type="radio" name="q2" className="mr-2"/> Manajemen basis data</label>
              <label className="block"><input type="radio" name="q2" className="mr-2"/> Desain antarmuka</label>
            </div>
            <div>
              <p className="font-medium">3) TCP/IP berkaitan dengan?</p>
              <label className="block"><input type="radio" name="q3" className="mr-2"/> Jaringan</label>
              <label className="block"><input type="radio" name="q3" className="mr-2"/> Keamanan aplikasi</label>
            </div>
            <button type="button" className="px-4 py-2 rounded-md bg-[#23b66e] text-white">Kirim Jawaban</button>
          </form>
        </div>
      </div>
    </div>
  )
}

function SchedulePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-[#0b3d91] mb-6">Jadwal Kuliah & Deadline</h1>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {[...Array(35)].map((_, i) => (
          <div key={i} className="aspect-square border rounded flex items-center justify-center bg-white">
            {i + 1}
          </div>
        ))}
      </div>
      <p className="text-slate-600 mt-4">Highlight akan muncul untuk tanggal penting di kalender.</p>
    </div>
  )
}

function LecturerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-[#0b3d91] mb-4">Profil Dosen</h1>
      <div className="bg-white border rounded-xl p-6 flex flex-col sm:flex-row gap-6">
        <div className="w-24 h-24 rounded-full bg-[#0b3d91] text-white flex items-center justify-center text-2xl font-bold">TI</ndiv>
        <div>
          <p className="font-semibold text-slate-900">Dr. Andini Pratama, S.Kom., M.T.</p>
          <p className="text-slate-600">Bidang: Sistem Informasi, Manajemen Proyek TI</p>
          <p className="text-slate-600 mt-2">Kontak: andini.pratama@kampus.ac.id</p>
        </div>
      </div>
    </div>
  )
}

function ModuleDetailPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-[#0b3d91]">Pengenalan Teknologi Informasi</h1>
      <p className="text-slate-600 mt-2">Materi pengantar: definisi, komponen, dan peran TI dalam organisasi modern.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <article className="md:col-span-2 bg-white border rounded-xl p-5">
          <h2 className="font-semibold mb-2">Materi Teks</h2>
          <p className="text-slate-700 leading-relaxed">Teknologi Informasi mencakup perangkat keras, perangkat lunak, data, manusia, dan proses yang bekerja bersama untuk menghasilkan informasi bernilai. Contoh implementasi: sistem akademik, e-commerce, dan layanan publik digital.</p>
          <div className="mt-4">
            <a href="#" className="text-[#0b3d91] underline">Unduh Slide (PDF)</a>
          </div>
          <div className="mt-4 aspect-video bg-slate-100 flex items-center justify-center text-slate-500 text-sm rounded-md">
            Video pembelajaran (opsional)
          </div>
        </article>
        <aside className="bg-white border rounded-xl p-5">
          <h3 className="font-semibold">Forum Diskusi</h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="p-3 rounded bg-[#f7f9fc]">Apa perbedaan data dan informasi?</li>
            <li className="p-3 rounded bg-[#f7f9fc]">Contoh TI di kehidupan kampus?</li>
          </ul>
          <input className="mt-4 w-full border rounded-md px-3 py-2" placeholder="Tulis komentar..." />
        </aside>
      </div>
    </div>
  )
}

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('kti_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const handleLogin = (data) => {
    setUser(data)
    localStorage.setItem('kti_user', JSON.stringify(data))
  }
  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('kti_user')
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
      <Navbar user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/silabus" element={<SyllabusPage />} />
        <Route path="/tugas-kuis" element={<AssignmentQuizPage />} />
        <Route path="/jadwal" element={<SchedulePage />} />
        <Route path="/profil-dosen" element={<LecturerPage />} />
        <Route path="/modul/:slug" element={<ModuleDetailPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

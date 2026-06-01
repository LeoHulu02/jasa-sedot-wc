import {
  Building2,
  CheckCircle2,
  Clock3,
  Factory,
  Headphones,
  Home,
  MapPin,
  ShieldCheck,
  Star,
  Truck,
  Utensils,
  Wrench
} from "lucide-react";

export const company = {
  name: "BersihTuntas",
  tagline: "Sedot WC Profesional",
  phone: "0857-1496-3855",
  whatsapp: "6285714963855",
  email: "halo@bersihtuntas.id"
};

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Harga", href: "#harga" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" }
];

export const trustIndicators = [
  "Layanan 24 Jam",
  "Teknisi Berpengalaman",
  "Harga Transparan",
  "Garansi Kepuasan"
];

export const services = [
  {
    icon: Home,
    title: "Sedot WC Rumah",
    description:
      "Solusi cepat untuk septic tank penuh, bau tidak sedap, dan WC mampet di rumah Anda."
  },
  {
    icon: Building2,
    title: "Sedot WC Kantor & Gedung",
    description:
      "Perawatan sanitasi gedung, ruko, sekolah, dan fasilitas komersial dengan jadwal fleksibel."
  },
  {
    icon: Utensils,
    title: "Sedot WC Restoran",
    description:
      "Penanganan limbah dan saluran restoran yang higienis agar operasional tetap lancar."
  },
  {
    icon: Factory,
    title: "Sedot WC Pabrik & Industri",
    description:
      "Armada dan teknisi siap menangani kebutuhan volume besar untuk area industri."
  },
  {
    icon: Wrench,
    title: "Saluran Mampet & Drainase",
    description:
      "Pembersihan saluran tersumbat, drainase, dan pipa buangan dengan peralatan modern."
  }
];

export const advantages = [
  {
    icon: Clock3,
    title: "Cepat & Responsif",
    description: "Tim kami siap bergerak cepat untuk kondisi darurat kapan pun dibutuhkan."
  },
  {
    icon: Truck,
    title: "Peralatan Modern",
    description: "Armada vakum dan peralatan kerja terawat untuk hasil bersih dan minim gangguan."
  },
  {
    icon: ShieldCheck,
    title: "Teknisi Ahli",
    description: "Dikerjakan oleh teknisi berpengalaman dengan standar keamanan kerja."
  },
  {
    icon: CheckCircle2,
    title: "Harga Transparan",
    description: "Estimasi biaya jelas sejak awal, tanpa biaya tersembunyi."
  }
];

export const pricingFeatures = [
  "Sesuai Volume",
  "Tanpa Biaya Tersembunyi",
  "Gratis Konsultasi"
];

export const testimonials = [
  {
    name: "Rina Kartika",
    role: "Pemilik Rumah, Bekasi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    text: "Datang cepat, pekerjaannya rapi, dan tidak meninggalkan bau. Harganya juga sesuai penjelasan awal."
  },
  {
    name: "Agus Pratama",
    role: "Pengelola Ruko, Tangerang",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    text: "Tim BersihTuntas sangat profesional. Area kerja dibersihkan lagi setelah selesai, jadi tenant tidak terganggu."
  },
  {
    name: "Maya Sari",
    role: "Manajer Restoran, Jakarta",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    text: "Kami butuh layanan malam hari dan tetap dilayani dengan cepat. Sangat membantu operasional restoran."
  },
  {
    name: "Budi Santoso",
    role: "Facility Supervisor, Depok",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    text: "Pengerjaan untuk gedung kami terjadwal, komunikasinya jelas, dan laporan setelah pekerjaan lengkap."
  }
];

export const serviceAreas = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"];

export const faqs = [
  {
    question: "Berapa biaya sedot WC?",
    answer:
      "Harga mulai dari Rp350.000 dan disesuaikan dengan volume, lokasi, serta tingkat kesulitan pekerjaan."
  },
  {
    question: "Apakah melayani 24 jam?",
    answer:
      "Ya, kami melayani panggilan darurat 24 jam untuk rumah, kantor, restoran, dan area industri."
  },
  {
    question: "Berapa lama pengerjaan?",
    answer:
      "Umumnya pekerjaan selesai dalam 30-90 menit, tergantung akses lokasi dan kondisi septic tank atau saluran."
  },
  {
    question: "Apakah ada biaya tambahan?",
    answer:
      "Tidak ada biaya tersembunyi. Biaya tambahan hanya muncul jika ada pekerjaan ekstra dan akan dikonfirmasi terlebih dahulu."
  },
  {
    question: "Bagaimana cara pemesanan?",
    answer:
      "Hubungi kami melalui telepon atau WhatsApp, sampaikan lokasi dan keluhan, lalu tim kami akan memberikan estimasi serta jadwal kedatangan."
  }
];

export const footerServices = services.map((service) => service.title);
export const ratingIcon = Star;
export const supportIcon = Headphones;
export const locationIcon = MapPin;

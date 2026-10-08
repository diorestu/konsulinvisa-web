/**
 * konsulinvisa.id — Visa, KITAS & KITAP Management Script
 * Features: Bilingual (EN/ID), 3-Step Interactive Visa Quiz, Dynamic Catalog Tabs,
 * Accessible Dialog Modal, Accordion FAQ, Pre-filled WhatsApp URLs.
 */

// ============================================================================
// 1. VISA MASTER DATABASE
// ============================================================================
const VISA_DATABASE = [
  // --- KITAS (Limited Stay Permit) ---
  {
    id: "kitas-spouse-1yr",
    code: "E31A",
    category: "kitas",
    nameEn: "Spouse KITAS (1 Year)",
    nameId: "KITAS Penyatuan Keluarga / Pasangan (1 Tahun)",
    durationEn: "1 Year",
    durationId: "1 Tahun",
    entryTypeEn: "Multiple Entry (MERP)",
    entryTypeId: "Izin Masuk Kembali (MERP)",
    priceIdr: 8500000,
    featured: true,
    descEn: "Designed for foreign nationals legally married to an Indonesian citizen (WNI). Grants multiple entry privileges, residency rights, and a direct progression route to a 5-Year Permanent KITAP.",
    descId: "Izin tinggal terbatas untuk WNA yang menikah sah dengan Warga Negara Indonesia (WNI). Mendapatkan hak izin tinggal resmi, multi-entry MERP, dan jalur konversi ke KITAP 5 Tahun.",
    inclusionsEn: [
      "Official E-Visa Telex approval from Dirjen Imigrasi",
      "VIP biometrics escort in Jakarta or Bali",
      "Digital E-KITAS card issuance & MERP multi-entry",
      "Assistance with Civil Registry SKTT & STM notification"
    ],
    inclusionsId: [
      "Persetujuan E-Visa Telex resmi Ditjen Imigrasi",
      "Pendampingan biometrik VIP di Jakarta atau Bali",
      "Penerbitan kartu E-KITAS digital & MERP multi-entry",
      "Asistensi pendaftaran catatan sipil SKTT & lapor STM"
    ],
    requirementsEn: [
      "Color scan of passport (valid min. 18 months)",
      "Official Marriage Certificate (Buku Nikah / Catatan Sipil)",
      "Indonesian Spouse KTP, Family Card (KK), & Birth Certificate",
      "Bank statement of Indonesian spouse (min. IDR 30M / USD $2,000)",
      "Formal passport photo with red or white background"
    ],
    requirementsId: [
      "Scan paspor WNA berwarna (masa berlaku min. 18 bulan)",
      "Buku Nikah atau Akta Perkawinan Catatan Sipil resmi",
      "KTP, Kartu Keluarga (KK), dan Akta Lahir pasangan WNI",
      "Rekening koran pasangan WNI (saldo min. Rp 30.000.000)",
      "Pasfoto formal background putih / merah"
    ],
    timelineEn: "E-Visa issued in 5–7 business days. Biometrics and E-KITAS completed within 5 business days after arrival.",
    timelineId: "E-Visa terbit 5–7 hari kerja. Biometrik & E-KITAS selesai 5 hari kerja setelah kedatangan."
  },
  {
    id: "kitas-spouse-2yr",
    code: "E31B",
    category: "kitas",
    nameEn: "Spouse KITAS (2 Years)",
    nameId: "KITAS Pasangan 2 Tahun (E31B)",
    durationEn: "2 Years",
    durationId: "2 Tahun",
    entryTypeEn: "Multiple Entry (MERP)",
    entryTypeId: "Izin Masuk Kembali (MERP)",
    priceIdr: 14500000,
    featured: false,
    descEn: "Multi-year limited stay permit for foreign spouses of Indonesian citizens. Enjoy 24 months of continuous residency without the burden of annual immigration renewals.",
    descId: "Izin tinggal terbatas jangka panjang 2 tahun bagi pasangan WNI. Memberikan kenyamanan 24 bulan tanpa perlu repot perpanjangan tahunan.",
    inclusionsEn: [
      "2-Year official E-Visa Telex approval",
      "2-Year multiple exit and re-entry permit (MERP)",
      "Biometrics escort at local immigration office",
      "Digital E-KITAS & SKTT residency registration"
    ],
    inclusionsId: [
      "Persetujuan E-Visa Telex 2 Tahun resmi Ditjen Imigrasi",
      "Izin MERP multi-entry berlaku 2 tahun penuh",
      "Pendampingan biometrik di kantor imigrasi lokal",
      "Penerbitan E-KITAS digital & pendaftaran SKTT"
    ],
    requirementsEn: [
      "Color scan of passport (valid min. 30 months)",
      "Marriage Certificate (Akta Nikah / Buku Nikah)",
      "Indonesian Spouse KTP, KK, & Bank Statement",
      "Formal passport photos"
    ],
    requirementsId: [
      "Scan paspor berwarna (masa berlaku min. 30 bulan)",
      "Akta Perkawinan / Buku Nikah",
      "KTP, KK, dan Rekening Koran pasangan WNI",
      "Pasfoto formal"
    ],
    timelineEn: "E-Visa approval: 6–8 business days. Post-arrival biometrics: 3–5 business days.",
    timelineId: "Persetujuan E-Visa: 6–8 hari kerja. Biometrik setelah tiba: 3–5 hari kerja."
  },
  {
    id: "kitas-investor-1yr",
    code: "E28B",
    category: "kitas",
    nameEn: "Investor KITAS (1 Year)",
    nameId: "KITAS Investor 1 Tahun (E28B)",
    durationEn: "1 Year",
    durationId: "1 Tahun",
    entryTypeEn: "Multiple Entry (MERP)",
    entryTypeId: "Izin Masuk Kembali (MERP)",
    priceIdr: 16500000,
    featured: true,
    descEn: "Tailored for foreign investors and shareholders in an Indonesian Foreign Investment Company (PT PMA). 100% exempt from the USD $1,200 annual Ministry of Manpower (DKP-TKA) tax.",
    descId: "Khusus untuk penanam modal asing / pemegang saham di PT PMA Indonesia. Bebas pajak tenaga kerja asing (DKP-TKA) senilai USD $1.200 per tahun.",
    inclusionsEn: [
      "Exemption from DKP-TKA tax ($1,200 savings)",
      "Official E-Visa Telex for Foreign Investment",
      "Multiple Entry Permit (MERP) for unrestricted international travel",
      "VIP biometrics queue & E-KITAS card delivery"
    ],
    inclusionsId: [
      "Bebas biaya DKP-TKA Kemnaker (hemat USD $1.200)",
      "E-Visa Telex Penanaman Modal Asing resmi",
      "Izin MERP multi-entry untuk bepergian bebas",
      "Pendampingan antrean biometrik VIP & E-KITAS"
    ],
    requirementsEn: [
      "Passport scan (valid min. 18 months)",
      "PT PMA legal deed (Akta Pendirian) & SK Kemenkumham",
      "Company NIB (Business Identification Number) & NPWP",
      "Proof of minimum share ownership (IDR 1B+ / Rp 1 Miliar+)",
      "Company bank statement and sponsor letter"
    ],
    requirementsId: [
      "Scan paspor (masa berlaku min. 18 bulan)",
      "Akta PT PMA dan SK Kemenkumham pengesahan",
      "NIB OSS RBA dan NPWP Perusahaan",
      "Bukti kepemilikan saham min. Rp 1 Miliar",
      "Rekening koran perusahaan & surat sponsor"
    ],
    timelineEn: "E-Visa processing: 5–7 business days. Biometrics upon arrival: 3–5 business days.",
    timelineId: "Proses E-Visa: 5–7 hari kerja. Biometrik kedatangan: 3–5 hari kerja."
  },
  {
    id: "kitas-investor-2yr",
    code: "E28C",
    category: "kitas",
    nameEn: "Investor KITAS (2 Years)",
    nameId: "KITAS Investor 2 Tahun (E28C)",
    durationEn: "2 Years",
    durationId: "2 Tahun",
    entryTypeEn: "Multiple Entry (MERP)",
    entryTypeId: "Izin Masuk Kembali (MERP)",
    priceIdr: 25000000,
    featured: false,
    descEn: "Long-term 2-year Investor stay permit for foreign shareholders. Includes 24 months of unlimited business travel and residency with no annual renewals.",
    descId: "Izin tinggal investor jangka panjang 2 tahun untuk pemegang saham PMA. Termasuk MERP 24 bulan tanpa perlu perpanjangan tahunan.",
    inclusionsEn: [
      "2-Year continuous residency & MERP multi-entry",
      "Full DKP-TKA tax exemption",
      "Priority VIP biometrics scheduling",
      "Assistance with local tax NPWP & SKTT residency"
    ],
    inclusionsId: [
      "Izin tinggal 2 tahun & MERP multi-entry penuh",
      "Bebas pajak DKP-TKA Kemnaker",
      "Jadwal biometrik VIP prioritas",
      "Asistensi NPWP pribadi & SKTT domisili"
    ],
    requirementsEn: [
      "Passport valid min. 30 months",
      "PT PMA Corporate Documents (Akta, SK, NIB, NPWP)",
      "Proof of shares in company deed",
      "Personal & corporate bank statements"
    ],
    requirementsId: [
      "Paspor masa berlaku min. 30 bulan",
      "Dokumen legalitas PT PMA lengkap",
      "Bukti kepemilikan saham dalam akta",
      "Rekening koran perusahaan & pribadi"
    ],
    timelineEn: "E-Visa: 6–8 business days. Biometrics & Card: 4–5 business days.",
    timelineId: "E-Visa: 6–8 hari kerja. Biometrik & Kartu: 4–5 hari kerja."
  },
  {
    id: "kitas-work-1yr",
    code: "E23",
    category: "kitas",
    nameEn: "Working KITAS (Foreign Expert)",
    nameId: "KITAS Kerja / Tenaga Kerja Asing (E23)",
    durationEn: "1 Year",
    durationId: "1 Tahun",
    entryTypeEn: "Multiple Entry (MERP)",
    entryTypeId: "Izin Masuk Kembali (MERP)",
    priceIdr: 18500000,
    featured: false,
    descEn: "Official work permit for foreign professionals, advisors, technical specialists, and corporate directors employed by an Indonesian PT or PT PMA. Requires company sponsor and RPTKA.",
    descId: "Izin kerja dan izin tinggal resmi bagi tenaga ahli, manajer, dan direktur asing yang dipekerjakan oleh PT atau PT PMA di Indonesia.",
    inclusionsEn: [
      "Ministry of Manpower RPTKA & Notifikasi filing",
      "Official Working E-Visa Telex from Imigrasi",
      "1-Year Multiple Entry Permit (MERP)",
      "Biometrics escort, E-KITAS issuance, & SKTT"
    ],
    inclusionsId: [
      "Pengurusan RPTKA & Notifikasi Kemnaker",
      "E-Visa Telex Izin Kerja resmi Imigrasi",
      "Izin MERP multi-entry 1 tahun",
      "Pendampingan biometrik, E-KITAS, dan SKTT"
    ],
    requirementsEn: [
      "Color scan of passport (valid min. 18 months)",
      "University Degree / Bachelor’s Certificate & CV",
      "5+ years work experience letter in related field",
      "Sponsoring Company Legal Documents (NIB, Akta, NPWP, LKPM)",
      "Indonesian companion worker (TKI Pendamping) data"
    ],
    requirementsId: [
      "Scan paspor (masa berlaku min. 18 bulan)",
      "Ijazah S1/sarjana & CV profesional",
      "Surat referensi pengalaman kerja min. 5 tahun",
      "Dokumen legalitas perusahaan sponsor",
      "Data Tenaga Kerja Indonesia (TKI) pendamping"
    ],
    timelineEn: "Manpower + E-Visa: 10–14 business days. Biometrics upon arrival: 3–5 business days.",
    timelineId: "Kemnaker + E-Visa: 10–14 hari kerja. Biometrik setelah tiba: 3–5 hari kerja."
  },
  {
    id: "kitas-nomad-1yr",
    code: "E25",
    category: "kitas",
    nameEn: "Remote Worker / Nomad KITAS",
    nameId: "KITAS Pekerja Jarak Jauh / Remote Worker (E25)",
    durationEn: "1 Year",
    durationId: "1 Tahun",
    entryTypeEn: "Multiple Entry (MERP)",
    entryTypeId: "Izin Masuk Kembali (MERP)",
    priceIdr: 8500000,
    featured: true,
    descEn: "Designed for digital nomads and location-independent remote workers who earn income from overseas companies while living in Bali or anywhere across Indonesia. No local Indonesian employer required.",
    descId: "Dirancang untuk digital nomad dan pekerja jarak jauh yang bekerja untuk perusahaan luar negeri sambil menikmati hidup di Bali atau wilayah Indonesia lainnya. Tidak butuh PT lokal.",
    inclusionsEn: [
      "1-Year Multiple Entry E-Visa approval",
      "No Indonesian corporate sponsor or work permit required",
      "Digital E-KITAS & MERP re-entry permit",
      "Local bank account opening eligibility"
    ],
    inclusionsId: [
      "Persetujuan E-Visa Multi-Entry 1 Tahun",
      "Tidak memerlukan sponsor PT lokal atau izin kerja",
      "E-KITAS digital & izin MERP",
      "Kelayakan membuka rekening bank lokal"
    ],
    requirementsEn: [
      "Passport scan (valid min. 18 months)",
      "Proof of remote employment contract with foreign entity",
      "Proof of overseas annual income (min. USD $60,000 / yr)",
      "Bank statement showing minimum USD $2,000 balance"
    ],
    requirementsId: [
      "Scan paspor (masa berlaku min. 18 bulan)",
      "Bukti kontrak kerja jarak jauh dengan entitas luar negeri",
      "Bukti penghasilan tahunan luar negeri (min. USD $60.000/thn)",
      "Rekening koran saldo min. USD $2.000"
    ],
    timelineEn: "E-Visa processing: 5–7 business days. Biometrics post-landing: 3–5 business days.",
    timelineId: "Proses E-Visa: 5–7 hari kerja. Biometrik setelah mendarat: 3–5 hari kerja."
  },
  {
    id: "kitas-retire-1yr",
    code: "E33E",
    category: "kitas",
    nameEn: "Retirement / Second Home KITAS",
    nameId: "KITAS Lansia / Pensiun / Second Home (E33E)",
    durationEn: "1–5 Years",
    durationId: "1–5 Tahun",
    entryTypeEn: "Multiple Entry",
    entryTypeId: "Izin Masuk Kembali (MERP)",
    priceIdr: 12500000,
    featured: false,
    descEn: "Enjoy your retirement years in Indonesia. Available for foreign nationals aged 55 and older, or high-net-worth individuals qualifying for the 5-Year Second Home Visa.",
    descId: "Nikmati masa pensiun di surga tropis Indonesia. Berlaku bagi WNA berusia 55 tahun ke atas atau pemohon visa Second Home jangka panjang 5 tahun.",
    inclusionsEn: [
      "Official retirement stay authorization",
      "Multiple entry & domestic travel rights",
      "Eligibility for local driver's license (SIM) & bank accounts",
      "Biometrics and residency handling"
    ],
    inclusionsId: [
      "Otorisasi izin tinggal pensiun resmi",
      "Hak multi-entry dan bepergian domestik",
      "Kelayakan SIM lokal & rekening bank",
      "Pengurusan biometrik dan domisili SKTT"
    ],
    requirementsEn: [
      "Passport scan (valid min. 18 months)",
      "Applicant age 55+ (for Retirement KITAS)",
      "Pension fund proof or minimum monthly income statement",
      "Health & life insurance coverage in Indonesia",
      "Rental / lease agreement in Indonesia"
    ],
    requirementsId: [
      "Scan paspor (masa berlaku min. 18 bulan)",
      "Usia pemohon min. 55 tahun (untuk KITAS Lansia)",
      "Bukti dana pensiun / rekening koran penghasilan",
      "Asuransi kesehatan dan jiwa",
      "Perjanjian sewa tempat tinggal di Indonesia"
    ],
    timelineEn: "E-Visa: 7–10 business days. Biometrics: 3–5 business days.",
    timelineId: "E-Visa: 7–10 hari kerja. Biometrik: 3–5 hari kerja."
  },

  // --- KITAP (Permanent Stay Permit) ---
  {
    id: "kitap-spouse-5yr",
    code: "E31C",
    category: "kitap",
    nameEn: "Spouse KITAP (5 Years Permanent)",
    nameId: "KITAP Pasangan WNI 5 Tahun (E31C)",
    durationEn: "5 Years (Renewable for Life)",
    durationId: "5 Tahun (Dapat Diperpanjang Seumur Hidup)",
    entryTypeEn: "Indefinite MERP (2-Year Renewals)",
    entryTypeId: "MERP Permanen (Perpanjangan Tiap 2 Thn)",
    priceIdr: 32000000,
    featured: true,
    descEn: "The ultimate permanent residency permit in Indonesia for foreign spouses married to Indonesian citizens for at least 2 consecutive years on a KITAS. Grants an Indonesian KTP-WNA national ID card, KK, and the freedom to work in informal/family businesses.",
    descId: "Tingkat izin tinggal tertinggi di Indonesia bagi WNA yang menikah dengan WNI min. 2 tahun berturut-turut memegang KITAS. Mendapatkan KTP-WNA, Kartu Keluarga, dan kebebasan berusaha/bekerja di sektor informal keluarga tanpa izin kerja khusus.",
    inclusionsEn: [
      "5-Year Permanent Stay Permit (Izin Tinggal Tetap)",
      "2-Year Multiple Exit Re-entry Permit (MERP) package",
      "Assistance for Indonesian National Identity Card (KTP WNA)",
      "Civil Registry Family Card (KK) & SKTT integration",
      "Free to conduct informal business without foreign worker tax"
    ],
    inclusionsId: [
      "Izin Tinggal Tetap resmi 5 Tahun",
      "Paket MERP Multi-Entry 2 Tahun pertama",
      "Asistensi pembuatan KTP WNA resmi Catatan Sipil",
      "Integrasi Kartu Keluarga (KK) WNA & Disdukcapil",
      "Bebas berusaha di usaha keluarga tanpa biaya DKP-TKA"
    ],
    requirementsEn: [
      "Original Passport and active Spouse KITAS",
      "Valid Marriage Certificate (min. 2 years of marriage)",
      "Indonesian Spouse KTP, Family Card, & Birth Certificate",
      "Surat Keterangan Tempat Tinggal (SKTT) from Catatan Sipil",
      "Statement of marriage integration signed by both spouses"
    ],
    requirementsId: [
      "Paspor asli dan KITAS Pasangan aktif",
      "Buku Nikah / Akta Nikah (usia pernikahan min. 2 tahun)",
      "KTP, KK, dan Akta Lahir pasangan WNI",
      "Surat Keterangan Tempat Tinggal (SKTT) Disdukcapil",
      "Surat pernyataan integrasi bermeterai"
    ],
    timelineEn: "Processing: 14–20 business days including immigration inspection and KTP-WNA processing.",
    timelineId: "Proses: 14–20 hari kerja termasuk verifikasi kantor imigrasi dan pembuatan KTP WNA."
  },
  {
    id: "kitap-investor-5yr",
    code: "KITAP-INV",
    category: "kitap",
    nameEn: "Investor KITAP (5 Years Permanent)",
    nameId: "KITAP Investor / Penanam Modal (5 Tahun)",
    durationEn: "5 Years",
    durationId: "5 Tahun",
    entryTypeEn: "Multiple Entry MERP",
    entryTypeId: "Izin Masuk Kembali (MERP)",
    priceIdr: 45000000,
    featured: false,
    descEn: "Permanent residency status for foreign investors who have resided in Indonesia on an Investor KITAS for at least 3 consecutive years. Eliminate annual visa stress and secure your company's long-term leadership.",
    descId: "Izin tinggal tetap bagi investor asing yang telah memegang KITAS Investor minimal 3 tahun berturut-turut di Indonesia. Bebas dari perpanjangan tahunan.",
    inclusionsEn: [
      "5-Year Permanent Investor Status",
      "KTP WNA & Civil Registration Assistance",
      "Indefinite MERP re-entry scheduling",
      "Direct legal coordination with Dirjen Imigrasi"
    ],
    inclusionsId: [
      "Status Izin Tinggal Tetap 5 Tahun",
      "Asistensi KTP WNA & Catatan Sipil",
      "Pengurusan paket MERP multi-entry",
      "Koordinasi langsung dengan Ditjen Imigrasi"
    ],
    requirementsEn: [
      "Passport valid min. 36 months",
      "Continuous Investor KITAS history (3+ years)",
      "Complete PT PMA Legal Documentation & LKPM Reports",
      "Proof of capital investment & share ownership"
    ],
    requirementsId: [
      "Paspor masa berlaku min. 36 bulan",
      "Riwayat KITAS Investor berturut-turut min. 3 tahun",
      "Dokumen legalitas PT PMA & Bukti Lapor LKPM BKPM",
      "Bukti kepemilikan saham & modal investasi"
    ],
    timelineEn: "Processing: 20–25 business days.",
    timelineId: "Proses: 20–25 hari kerja."
  },

  // --- Business & Investment Visas ---
  {
    id: "visa-biz-multi",
    code: "D2",
    category: "business",
    nameEn: "Multiple Entry Business Visa (1 Year)",
    nameId: "Visa Bisnis Multi-Entry 1 Tahun (D2)",
    durationEn: "1 Year (60 Days/Stay)",
    durationId: "1 Tahun (Maks. 60 Hari/Kunjungan)",
    entryTypeEn: "Multiple Entry",
    entryTypeId: "Multi-Entry",
    priceIdr: 5500000,
    featured: false,
    descEn: "Designed for business executives, consultants, and entrepreneurs who travel frequently to Indonesia for client meetings, supplier visits, sourcing, and contract signings.",
    descId: "Untuk pebisnis, konsultan, dan eksekutif yang sering bepergian ke Indonesia untuk pertemuan bisnis, kunjungan pabrik, dan penandatanganan kontrak.",
    inclusionsEn: [
      "1-Year Multiple Entry E-Visa",
      "Stay up to 60 days per visit with unlimited entries",
      "Indonesian company sponsor letter facilitation",
      "100% digital issuance delivered by email"
    ],
    inclusionsId: [
      "E-Visa Multi-Entry 1 Tahun",
      "Maksimal 60 hari per kunjungan, tanpa batas masuk",
      "Fasilitasi surat sponsor perusahaan di Indonesia",
      "Penerbitan 100% digital dikirim via email"
    ],
    requirementsEn: [
      "Passport scan (valid min. 18 months)",
      "Bank statement (min. USD $2,000 balance)",
      "Formal passport photo",
      "Indonesian business sponsor or invitation letter"
    ],
    requirementsId: [
      "Scan paspor (masa berlaku min. 18 bulan)",
      "Rekening koran (saldo min. USD $2.000)",
      "Pasfoto formal",
      "Surat sponsor bisnis atau undangan dari mitra di Indonesia"
    ],
    timelineEn: "Turnaround: 3–5 business days.",
    timelineId: "Waktu proses: 3–5 hari kerja."
  },
  {
    id: "visa-biz-single",
    code: "C2",
    category: "business",
    nameEn: "Single Entry Business Visa",
    nameId: "Visa Bisnis Single Entry 60 Hari (C2)",
    durationEn: "60 Days (Extendable)",
    durationId: "60 Hari (Dapat Diperpanjang)",
    entryTypeEn: "Single Entry",
    entryTypeId: "Single Entry",
    priceIdr: 2500000,
    featured: false,
    descEn: "Ideal for a single business trip to Indonesia to conduct negotiations, inspect commercial projects, or attend conferences. Can be extended inside Indonesia twice for up to 180 days total.",
    descId: "Cocok untuk perjalanan bisnis singkat ke Indonesia untuk bernegosiasi, meninjau proyek, atau menghadiri konferensi. Dapat diperpanjang hingga total 180 hari.",
    inclusionsEn: [
      "60-Day initial legal business stay",
      "Extendable onshore up to 180 days without leaving",
      "Official immigration electronic visa delivery",
      "Can be converted onshore to KITAS if eligible"
    ],
    inclusionsId: [
      "Izin tinggal bisnis resmi 60 hari pertama",
      "Dapat diperpanjang di Indonesia hingga total 180 hari",
      "Pengiriman visa elektronik resmi",
      "Dapat diajukan alih status ke KITAS di Indonesia"
    ],
    requirementsEn: [
      "Passport scan (valid min. 6 months)",
      "Bank statement (min. USD $1,500)",
      "Formal passport photo",
      "Return or onward flight ticket"
    ],
    requirementsId: [
      "Scan paspor (masa berlaku min. 6 bulan)",
      "Rekening koran (saldo min. USD $1.500)",
      "Pasfoto formal",
      "Tiket pesawat pulang / lanjutan"
    ],
    timelineEn: "Turnaround: 3–4 business days.",
    timelineId: "Waktu proses: 3–4 hari kerja."
  },

  // --- Tourist & Social Visas ---
  {
    id: "visa-tourist-c1",
    code: "C1",
    category: "tourist",
    nameEn: "Tourist Single Entry Visa (60 Days)",
    nameId: "Visa Kunjungan Wisata 60 Hari (C1)",
    durationEn: "60 Days (Extendable to 180)",
    durationId: "60 Hari (Dapat Diperpanjang s/d 180)",
    entryTypeEn: "Single Entry",
    entryTypeId: "Single Entry",
    priceIdr: 1950000,
    featured: false,
    descEn: "The standard extended tourist visa (formerly B211A). Stay 60 days on arrival, with the ability to extend onshore twice (60 days each) for a total stay of up to 180 days in Indonesia.",
    descId: "Visa kunjungan wisata populer (dulu B211A). Izin tinggal awal 60 hari dan dapat diperpanjang 2x di Indonesia hingga total 180 hari tanpa perlu keluar negeri.",
    inclusionsEn: [
      "Official 60-Day E-Visa delivered before travel",
      "No embassy visit required; 100% digital",
      "Full assistance for onshore extensions in Bali/Jakarta",
      "Valid for leisure, tourism, and visiting friends"
    ],
    inclusionsId: [
      "E-Visa resmi 60 hari dikirim sebelum keberangkatan",
      "Tanpa perlu ke KBRI; 100% proses digital",
      "Bantuan lengkap perpanjangan di Bali / Jakarta",
      "Berlaku untuk liburan, rekreasi, dan silaturahmi"
    ],
    requirementsEn: [
      "Passport scan (valid min. 6 months)",
      "Bank statement showing min. USD $1,000 balance",
      "Recent passport-sized photo",
      "Return flight ticket booking"
    ],
    requirementsId: [
      "Scan paspor (masa berlaku min. 6 bulan)",
      "Rekening koran saldo min. USD $1.000",
      "Pasfoto terbaru",
      "Tiket penerbangan kembali"
    ],
    timelineEn: "Processing: 2–4 business days.",
    timelineId: "Proses: 2–4 hari kerja."
  },
  {
    id: "visa-voa-b1",
    code: "B1",
    category: "tourist",
    nameEn: "Electronic Visa on Arrival (e-VOA)",
    nameId: "Visa on Arrival Elektronik (e-VOA B1)",
    durationEn: "30 Days (Extendable to 60)",
    durationId: "30 Hari (Dapat Diperpanjang s/d 60)",
    entryTypeEn: "Single Entry",
    entryTypeId: "Single Entry",
    priceIdr: 850000,
    featured: false,
    descEn: "Pre-arranged electronic visa on arrival for short holidays. Skip airport currency exchange counters and immigration payment queues upon touchdown in Bali or Jakarta.",
    descId: "Pengurusan e-VOA sebelum keberangkatan untuk liburan singkat. Lewati antrean pembayaran visa di bandara Soekarno-Hatta dan Ngurah Rai Bali.",
    inclusionsEn: [
      "Official immigration e-VOA pre-approved",
      "Use autogate / fast-track lanes at supported airports",
      "Can be extended online for an additional 30 days",
      "Instant delivery upon approval"
    ],
    inclusionsId: [
      "E-VOA resmi disetujui sebelum terbang",
      "Bisa gunakan gerbang otomatis (autogate) di bandara",
      "Bisa diperpanjang online 30 hari tambahan",
      "Pengiriman instan setelah disetujui"
    ],
    requirementsEn: [
      "Passport scan (valid min. 6 months)",
      "Flight ticket booking",
      "Photo scan"
    ],
    requirementsId: [
      "Scan paspor (masa berlaku min. 6 bulan)",
      "Tiket pesawat",
      "Foto scan"
    ],
    timelineEn: "Processing: 24–48 hours.",
    timelineId: "Proses: 24–48 jam."
  }
];

// ============================================================================
// 2. BILINGUAL DICTIONARY (EN & ID)
// ============================================================================
const i18nDictionary = {
  en: {
    announcementText: "Official Online Visa Applications Open: Apply for KITAS & E-Visa directly from your home country without visiting an Indonesian Embassy.",
    announcementLink: "Ask a Consultant →",
    navFinder: "Visa Finder",
    navKitas: "KITAS & Permits",
    navKitap: "KITAP Permanent",
    navCompare: "KITAS vs KITAP",
    navProcess: "How It Works",
    navWhy: "Why Us",
    navFaq: "FAQ",
    navWaText: "Order via WhatsApp",
    heroBadge: "Official Indonesia Immigration Consultancy • 99.4% Approval",
    heroSubtitle: "Fast, reliable, and 100% legal visa processing for expats, investors, digital nomads, and families coming from abroad. We take care of every bureaucratic detail—from pre-arrival Telex to VIP biometrics and e-KITAS delivery.",
    heroBtnWa: "Order via WhatsApp",
    heroBtnQuiz: "Check Visa Eligibility (30s)",
    trustChip1: "100% Processed From Abroad",
    trustChip2: "Official Telex & E-KITAS Included",
    trustChip3: "Bali & Jakarta Biometrics Escort",
    trustChip4: "Dedicated English Consultant",
    statRate: "Immigration Approval Rate",
    statIssued: "Visas & KITAS Issued",
    statSpeed: "Average E-Visa Turnaround",
    statCountries: "Client Nationalities Welcomed",
    quizTag: "INSTANT VISA FINDER",
    quizTitle: "Check Your Visa Eligibility",
    quizDesc: "Answer 3 quick questions to discover the ideal visa or stay permit for your travel, family, or investment goals in Indonesia.",
    quizStep1Text: "Purpose",
    quizStep2Text: "Stay Duration",
    quizStep3Text: "Sponsor Status",
    q1Title: "What is your primary purpose in Indonesia?",
    q1Subtitle: "Select the option that best reflects your primary activity:",
    q1OptInvestor: "Investment & Company Ownership",
    q1OptInvestorSub: "PT PMA Shareholder, Director, or Investor",
    q1OptFamily: "Family & Indonesian Spouse",
    q1OptFamilySub: "Married to Indonesian citizen (WNI) or dependent",
    q1OptWork: "Employment & Working",
    q1OptWorkSub: "Employed by Indonesian company / foreign expert",
    q1OptNomad: "Remote Work / Digital Nomad",
    q1OptNomadSub: "Work online for overseas clients while living in Bali",
    q1OptRetirement: "Retirement / Second Home",
    q1OptRetirementSub: "Aged 55+ or long-stay tourists with proof of funds",
    q1OptTourism: "Tourism & Business Meetings",
    q1OptTourismSub: "Short holiday, negotiations, or conference",
    q2Title: "How long do you intend to stay in Indonesia?",
    q2Subtitle: "Choose your planned stay duration:",
    q2OptShort: "30 to 60 Days",
    q2OptShortSub: "Single-entry tourist or business exploration",
    q2OptMed: "60 to 180 Days (6 Months)",
    q2OptMedSub: "Extendable visit or trial living in Indonesia",
    q2Opt1Year: "1 Year (KITAS)",
    q2Opt1YearSub: "Annual limited stay permit with multiple entry",
    q2Opt2Years: "2 Years (KITAS)",
    q2Opt2YearsSub: "Multi-year permit for investors & spouses",
    q2Opt5Years: "5 Years or Permanent (KITAP)",
    q2Opt5YearsSub: "Permanent residency permit for spouses or long-term investors",
    q3Title: "Do you currently have a local Indonesian sponsor or entity?",
    q3Subtitle: "Indonesian immigration requires a legal sponsor for stay permits:",
    q3OptCompany: "Yes, Indonesian PT / PT PMA or Indonesian Spouse",
    q3OptCompanySub: "I already have a company or marriage certificate ready",
    q3OptNewPma: "I want to establish a new PT PMA (Foreign Company)",
    q3OptNewPmaSub: "Need full company incorporation + Investor KITAS",
    q3OptNoSponsor: "No, I am an individual / need agency sponsorship",
    q3OptNoSponsorSub: "Tourist, remote nomad, retiree, or seeking consultant sponsorship",
    btnBack: "← Back",
    resDuration: "Validity:",
    resEntry: "Entry Type:",
    resPrice: "Starting from:",
    resBtnWa: "Consult This Visa on WhatsApp",
    resBtnDetails: "View Full Requirements",
    btnRestart: "↻ Retake Quiz",
    catalogTag: "INDONESIA VISA PORTFOLIO",
    catalogTitle: "Comprehensive Visa & Stay Permit Services",
    catalogDesc: "Transparent pricing, official immigration compliance, and end-to-end guidance. Choose your category below:",
    tabAll: "All Visas",
    tabKitas: "KITAS (1–2 Years)",
    tabKitap: "KITAP (5 Years Permanent)",
    tabBusiness: "Investor & Business",
    tabTourist: "Tourist & Social",
    pricingDisclaimer: "Transparent & Guaranteed: Starting prices reflect standard professional consultant handling and administrative fees. Final government visa fees and exact document requirements are verified upfront on WhatsApp before payment. No hidden markups.",
    compareTag: "EXPAT GUIDE",
    compareTitle: "KITAS vs. KITAP: Which One Do You Need?",
    compareDesc: "Many foreign nationals confuse the Limited Stay Permit (KITAS) with the Permanent Stay Permit (KITAP). Here is the straightforward comparison:",
    badgeKitas: "LIMITED STAY (1-2 YEARS)",
    subKitas: "Kartu Izin Tinggal Terbatas",
    descKitas: "The standard temporary residence permit for foreigners working, investing, retiring, or living with an Indonesian spouse.",
    kitasFeat1: "Duration: 1 Year to 2 Years per issuance.",
    kitasFeat2: "Multiple Entry: Includes MERP (enter and exit Indonesia freely).",
    kitasFeat3: "Local Privileges: Open Indonesian bank accounts, buy cars/motorbikes, apply for Indonesian driver’s license (SIM).",
    kitasFeat4: "Sponsorship: Requires Indonesian PT, PT PMA, or Indonesian spouse sponsor.",
    kitasFeat5: "Pathway: Can be converted to KITAP after qualifying period.",
    btnKitasApply: "Consult KITAS Application →",
    badgeKitap: "PERMANENT RESIDENCY (5 YEARS)",
    subKitap: "Kartu Izin Tinggal Tetap",
    descKitap: "The highest residency tier granted by Indonesia. Zero annual renewal hassle, maximum legal stability, and official KTP-WNA identity card.",
    kitapFeat1: "Duration: 5 Years with automatic lifetime renewal rights.",
    kitapFeat2: "Permanent MERP: 2-Year multiple entry re-entry permits indefinitely.",
    kitapFeat3: "Full Rights: Get Indonesian National ID (KTP WNA), Family Card (KK), local bank credit, and property leasehold rights.",
    kitapFeat4: "Work Rights (Spouses): Foreign spouses on KITAP can work informally or run family businesses without work permits.",
    kitapFeat5: "Eligibility: Foreign spouse married to WNI for 2+ consecutive years on KITAS, or long-term investors/directors.",
    btnKitapApply: "Consult KITAP Conversion →",
    processTag: "STEP-BY-STEP WORKFLOW",
    processTitle: "How It Works: From Abroad to Settled in Indonesia",
    processDesc: "We handle the complexities of Indonesian immigration so you never have to deal with government red tape alone.",
    step1Title: "Free Consultation & Profile Audit",
    step1Desc: "Chat with our specialist via WhatsApp from your home country. We evaluate your goals, verify passport validity, and choose the optimal visa route.",
    step2Title: "Digital Document Submission",
    step2Desc: "Send simple digital scans of your passport and supporting documents. We format, draft official sponsor letters, and complete official filings.",
    step3Title: "Direct Immigration Submission",
    step3Desc: "We lodge your application directly into the official Direktorat Jenderal Imigrasi system. Receive your official E-Visa PDF directly to your email.",
    step4Title: "Arrival, VIP Biometrics & E-KITAS",
    step4Desc: "Land in Indonesia seamlessly. In Bali or Jakarta, our team escorts you for your 10-minute biometric photo, and delivers your official e-KITAS and SKTT.",
    whyTag: "THE KONSULINVISA ADVANTAGE",
    whyTitle: "Why Expats & Businesses Trust Us",
    whyDesc: "Eliminating anxiety, delays, and unexpected costs for clients moving to Indonesia.",
    why1Title: "Fast-Track Turnaround",
    why1Desc: "We expedite your application through priority channels to ensure the fastest legal turnaround without cutting corners.",
    why2Title: "100% Legal & Imigrasi Compliant",
    why2Desc: "Full adherence to Indonesian immigration law (UU Keimigrasian). All telex approvals are registered officially in the national immigration database.",
    why3Title: "Dedicated English Specialist",
    why3Desc: "Direct personal communication via WhatsApp with an experienced case manager fluent in English and Indonesian. No confusing chatbots.",
    why4Title: "Transparent IDR Pricing",
    why4Desc: "No hidden agency markups or sudden surprises. Every quote clearly specifies immigration taxes, telex fees, and service charges.",
    why5Title: "99.4% Verified Success Rate",
    why5Desc: "Our thorough pre-check audits eliminate common rejection risks before documents ever reach the immigration officer’s desk.",
    why6Title: "Complete Relocation Ecosystem",
    why6Desc: "Need to incorporate a foreign company (PT PMA), set up corporate accounting, or handle tax compliance? Our team provides full corporate synergy.",
    corpTag: "INTEGRATED CORPORATE SERVICES",
    corpHeading: "Setting Up a Company in Indonesia?",
    corpSub: "We handle end-to-end PT PMA Incorporation (Foreign Investment Company), OSS RBA licensing, Tax NPWP, and subsequent Investor KITAS (E28B) with zero DKP-TKA tax.",
    btnCorpWa: "Inquire PT PMA & Investor KITAS →",
    testiTag: "REAL EXPAT EXPERIENCES",
    testiTitle: "Trusted by Expats & Global Travelers",
    testiDesc: "Here is what international residents have to say about working with our immigration consultants:",
    faqTag: "HELP & CLARITY",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Everything you need to know about Indonesian visas, stay permits, biometrics, and immigration rules.",
    faq1Q: "Can I apply for a KITAS while I am still abroad in my home country?",
    faq1A: "Yes! The entire initial application is handled 100% digitally. You do not need to visit an Indonesian Embassy. We lodge the application with the central immigration authorities in Jakarta and deliver the official E-Visa (Telex) directly to your email. You then fly into Indonesia using this E-Visa.",
    faq2Q: "What is the main difference between KITAS and KITAP?",
    faq2A: "KITAS is a temporary limited stay permit valid for 1 or 2 years, requiring annual or biennial renewals. KITAP is a permanent stay permit valid for 5 years with automatic lifetime extensions, granting the right to hold an Indonesian KTP-WNA identity card and significantly greater freedom. Foreign spouses of Indonesians can qualify for KITAP after holding KITAS for 2 consecutive years.",
    faq3Q: "Does an Investor KITAS (E28B) exempt me from government work permit taxes?",
    faq3A: "Yes! One of the biggest advantages of the Investor KITAS is that shareholders holding designated executive positions in a PT PMA are exempt from the mandatory Ministry of Manpower DKP-TKA tax (which saves USD $1,200 per year compared to standard Work KITAS E23).",
    faq4Q: "What happens after I land in Indonesia with my E-Visa?",
    faq4A: "Upon landing at Soekarno-Hatta (Jakarta) or Ngurah Rai (Bali), you present your E-Visa at immigration. Within 30 days of arrival, we schedule your VIP biometric session (fingerprints and photo) at your local immigration office, which takes just 10–15 minutes with our escort. Your digital E-KITAS and MERP are then issued, followed by local civil registry (SKTT).",
    faq5Q: "Can I convert my Tourist or Business Visa to a KITAS inside Indonesia?",
    faq5A: "In most cases under current regulations, onshore status conversions (Alih Status) are permitted for eligible visas without needing to leave Indonesia. Our immigration team will evaluate your current visa entry stamp and sponsor documents to execute an onshore conversion seamlessly.",
    faq6Q: "What are the consequences of an overstay in Indonesia?",
    faq6A: "Indonesian immigration charges a strict statutory penalty of IDR 1,000,000 (~$65 USD) per day for overstays under 60 days. Overstaying more than 60 days results in detention, deportation, and blacklisting from entering Indonesia. We actively manage visa extension deadlines for all clients to ensure you never overstay.",
    finalCtaTitle: "Ready to Apply for Your Indonesia Stay Permit?",
    finalCtaDesc: "Connect with our dedicated visa specialists on WhatsApp. Get a free, confidential eligibility assessment within 15 minutes.",
    finalCtaBtn: "Chat on WhatsApp (+62 819-0879-7799)",
    finalCtaMicro: "No commitment required • Free initial consultation • Instant reply",
    footerBio: "Your premier Indonesian immigration consultancy. Facilitating smooth legal residency, KITAS, and KITAP solutions for expatriates, international families, and global business enterprises.",
    footerNavTitle: "Key Services",
    footerLegalTitle: "Corporate Hub",
    footerContactTitle: "Direct Contact",
    footerLegalNote: "Independent Immigration & Corporate Advisory. Operating in compliance with Direktorat Jenderal Imigrasi Republik Indonesia.",
    floatingWaTooltip: "Chat with Visa Specialist",
    modalDuration: "Stay Duration",
    modalEntry: "Entry Privilege",
    modalPrice: "Estimated Price",
    modalIncludedTitle: "Key Privileges & What's Included:",
    modalDocsTitle: "Standard Required Documents:",
    modalTimelineTitle: "Estimated Processing Timeline:",
    modalInquiryTitle: "Inquire This Visa via WhatsApp:",
    labelNationality: "Your Nationality / Passport Country:",
    labelArrival: "Estimated Arrival in Indonesia:",
    modalBtnSubmit: "Open WhatsApp Consultation"
  },
  id: {
    announcementText: "Pendaftaran Visa & KITAS Resmi 2026: Ajukan permohonan langsung dari luar negeri secara online tanpa harus ke KBRI.",
    announcementLink: "Konsultasi Sekarang →",
    navFinder: "Cari Visa",
    navKitas: "Layanan KITAS",
    navKitap: "KITAP Tetap",
    navCompare: "KITAS vs KITAP",
    navProcess: "Cara Kerja",
    navWhy: "Keunggulan",
    navFaq: "FAQ",
    navWaText: "Pesan via WhatsApp",
    heroBadge: "Konsultan Resmi Imigrasi Indonesia • 99.4% Tingkat Persetujuan",
    heroSubtitle: "Proses visa cepat, terpercaya, dan 100% legal bagi ekspatriat, investor, digital nomad, dan keluarga yang datang ke Indonesia. Kami menangani seluruh birokrasi—dari Telex luar negeri hingga biometrik kedatangan dan kartu E-KITAS.",
    heroBtnWa: "Pesan via WhatsApp",
    heroBtnQuiz: "Cek Kelayakan Visa (30 Detik)",
    trustChip1: "100% Diproses dari Luar Negeri",
    trustChip2: "Termasuk Telex & E-KITAS Resmi",
    trustChip3: "Pendampingan Biometrik Bali & Jakarta",
    trustChip4: "Konsultan Spesialis Berpengalaman",
    statRate: "Tingkat Persetujuan Imigrasi",
    statIssued: "Visa & KITAS Diterbitkan",
    statSpeed: "Rata-rata Waktu Proses E-Visa",
    statCountries: "Negara Klien Terlayani",
    quizTag: "PENCARI VISA INSTAN",
    quizTitle: "Cek Kelayakan Visa Anda",
    quizDesc: "Jawab 3 pertanyaan singkat untuk menemukan jenis visa atau izin tinggal yang paling tepat untuk kebutuhan Anda di Indonesia.",
    quizStep1Text: "Tujuan",
    quizStep2Text: "Lama Tinggal",
    quizStep3Text: "Sponsor",
    q1Title: "Apa tujuan utama kedatangan Anda ke Indonesia?",
    q1Subtitle: "Pilih opsi yang paling sesuai dengan aktivitas utama Anda:",
    q1OptInvestor: "Investasi & Kepemilikan Perusahaan",
    q1OptInvestorSub: "Pemegang saham PT PMA, Direktur, atau Investor",
    q1OptFamily: "Penyatuan Keluarga & Pasangan WNI",
    q1OptFamilySub: "Menikah dengan WNI atau anggota keluarga tanggungan",
    q1OptWork: "Bekerja / Tenaga Kerja Asing",
    q1OptWorkSub: "Dipekerjakan oleh perusahaan di Indonesia sebagai tenaga ahli",
    q1OptNomad: "Pekerja Jarak Jauh / Digital Nomad",
    q1OptNomadSub: "Bekerja online untuk klien luar negeri sambil tinggal di Bali",
    q1OptRetirement: "Masa Pensiun / Second Home",
    q1OptRetirementSub: "Berusia 55 tahun ke atas atau pemohon visa tinggal lama",
    q1OptTourism: "Pariwisata & Rapat Bisnis Singkat",
    q1OptTourismSub: "Liburan singkat, negosiasi, atau konferensi",
    q2Title: "Berapa lama rencana Anda tinggal di Indonesia?",
    q2Subtitle: "Pilih perkiraan durasi masa tinggal Anda:",
    q2OptShort: "30 hingga 60 Hari",
    q2OptShortSub: "Wisata sekali masuk atau eksplorasi bisnis",
    q2OptMed: "60 hingga 180 Hari (6 Bulan)",
    q2OptMedSub: "Kunjungan yang dapat diperpanjang atau masa percobaan tinggal",
    q2Opt1Year: "1 Tahun (KITAS)",
    q2Opt1YearSub: "Izin tinggal terbatas tahunan dengan multi-entry",
    q2Opt2Years: "2 Tahun (KITAS)",
    q2Opt2YearsSub: "Izin multi-tahun untuk investor & pasangan WNI",
    q2Opt5Years: "5 Tahun atau Menetap Tetap (KITAP)",
    q2Opt5YearsSub: "Izin tinggal tetap permanen untuk pasangan atau investor jangka panjang",
    q3Title: "Apakah saat ini Anda memiliki sponsor lokal di Indonesia?",
    q3Subtitle: "Imigrasi Indonesia mewajibkan adanya sponsor resmi untuk izin tinggal:",
    q3OptCompany: "Ya, PT / PT PMA atau Pasangan WNI",
    q3OptCompanySub: "Saya sudah memiliki entitas perusahaan atau akta nikah",
    q3OptNewPma: "Saya ingin mendirikan PT PMA Baru",
    q3OptNewPmaSub: "Membutuhkan pendirian PT PMA lengkap + KITAS Investor",
    q3OptNoSponsor: "Belum Ada / Butuh Asistensi Sponsor Konsultan",
    q3OptNoSponsorSub: "Turis, remote worker, pensiunan, atau butuh sponsor agen",
    btnBack: "← Kembali",
    resDuration: "Masa Berlaku:",
    resEntry: "Tipe Masuk:",
    resPrice: "Mulai dari:",
    resBtnWa: "Konsultasikan Visa Ini di WhatsApp",
    resBtnDetails: "Lihat Persyaratan Lengkap",
    btnRestart: "↻ Ulangi Kuis",
    catalogTag: "PORTFOLIO VISA INDONESIA",
    catalogTitle: "Layanan Lengkap Visa & Izin Tinggal Indonesia",
    catalogDesc: "Biaya transparan, kepatuhan hukum imigrasi, dan panduan tuntas. Pilih kategori visa di bawah ini:",
    tabAll: "Semua Visa",
    tabKitas: "KITAS (1–2 Tahun)",
    tabKitap: "KITAP (5 Tahun Tetap)",
    tabBusiness: "Investor & Bisnis",
    tabTourist: "Wisata & Sosial",
    pricingDisclaimer: "Transparan & Resmi: Estimasi biaya mencakup pendampingan profesional dan administrasi. Biaya PNBP imigrasi resmi dan kelengkapan dokumen diverifikasi secara transparan via WhatsApp sebelum pembayaran. Tanpa mark-up terselubung.",
    compareTag: "PANDUAN EKSPATRIAT",
    compareTitle: "KITAS vs. KITAP: Mana yang Anda Butuhkan?",
    compareDesc: "Banyak WNA masih bingung membedakan antara Izin Tinggal Terbatas (KITAS) dan Izin Tinggal Tetap (KITAP). Berikut perbandingan lengkapnya:",
    badgeKitas: "IZIN TINGGAL TERBATAS (1-2 TAHUN)",
    subKitas: "Kartu Izin Tinggal Terbatas",
    descKitas: "Izin tinggal sementara standar bagi WNA yang bekerja, berinvestasi, pensiun, atau menikah dengan warga negara Indonesia.",
    kitasFeat1: "Durasi: 1 Tahun hingga 2 Tahun per masa terbit.",
    kitasFeat2: "Multi-Entry: Sudah termasuk izin keluar-masuk MERP.",
    kitasFeat3: "Hak Domisili: Membuka rekening bank lokal, membeli kendaraan, membuat SIM Indonesia.",
    kitasFeat4: "Sponsorship: Memerlukan sponsor PT, PT PMA, atau pasangan WNI.",
    kitasFeat5: "Jalur Peningkatan: Dapat diajukan konversi ke KITAP setelah memenuhi syarat masa tinggal.",
    btnKitasApply: "Konsultasi Pengajuan KITAS →",
    badgeKitap: "IZIN TINGGAL TETAP (5 TAHUN)",
    subKitap: "Kartu Izin Tinggal Tetap",
    descKitap: "Status izin tinggal kasta tertinggi di Indonesia. Tanpa repot perpanjangan tahunan, stabilitas hukum maksimal, dan berhak atas KTP-WNA.",
    kitapFeat1: "Durasi: 5 Tahun dengan hak perpanjangan seumur hidup.",
    kitapFeat2: "MERP Permanen: Izin keluar-masuk MERP 2 tahunan berkelanjutan.",
    kitapFeat3: "Hak Sipil Lengkap: Memiliki KTP-WNA, Kartu Keluarga (KK), akses kredit bank, dan hak sewa properti jangka panjang.",
    kitapFeat4: "Hak Bekerja (Pasangan): Pasangan pemegang KITAP boleh berusaha/bekerja di sektor informal keluarga tanpa izin kerja.",
    kitapFeat5: "Kelayakan: Menikah dengan WNI min. 2 tahun berturut-turut memegang KITAS, atau investor/direktur jangka panjang.",
    btnKitapApply: "Konsultasi Konversi KITAP →",
    processTag: "ALUR KERJA PRAKTIS",
    processTitle: "Cara Kerja: Dari Luar Negeri Hingga Menetap di Indonesia",
    processDesc: "Kami tangani seluruh seluk-beluk birokrasi keimigrasian Indonesia agar perjalanan Anda lancar dan bebas stres.",
    step1Title: "Konsultasi Gratis & Audit Profil",
    step1Desc: "Hubungi konsultan kami via WhatsApp dari negara asal Anda. Kami pelajari kebutuhan Anda, verifikasi paspor, dan tentukan opsi visa terbaik.",
    step2Title: "Pengiriman Dokumen Digital",
    step2Desc: "Kirimkan scan paspor dan dokumen pendukung secara online. Kami bantu format dokumen dan siapkan draf surat sponsor resmi.",
    step3Title: "Pengajuan Resmi ke Imigrasi",
    step3Desc: "Kami daftarkan permohonan langsung ke sistem Ditjen Imigrasi pusat. Anda akan menerima dokumen resmi E-Visa (Telex) langsung di email.",
    step4Title: "Kedatangan, Biometrik VIP & E-KITAS",
    step4Desc: "Terbang ke Indonesia dengan aman. Di Bali atau Jakarta, tim kami mendampingi sesi foto biometrik 10 menit dan mengirimkan E-KITAS serta SKTT Anda.",
    whyTag: "KEUNGGULAN KONSULINVISA",
    whyTitle: "Mengapa Klien & Perusahaan Memilih Kami",
    whyDesc: "Menghadirkan kepastian hukum, kecepatan proses, dan transparansi biaya tanpa kompromi.",
    why1Title: "Proses Cepat & Terjadwal",
    why1Desc: "Kami memproses aplikasi melalui jalur prioritas resmi untuk memastikan waktu tunggu sesingkat mungkin sesuai regulasi hukum.",
    why2Title: "100% Legal & Sesuai UU Imigrasi",
    why2Desc: "Kepatuhan penuh terhadap hukum keimigrasian Republik Indonesia. Semua telex dan izin tinggal tercatat resmi di database pusat.",
    why3Title: "Konsultan Pribadi Berbahasa Inggris & ID",
    why3Desc: "Komunikasi langsung via WhatsApp dengan manajer kasus berpengalaman yang fasih berbahasa Inggris dan Indonesia. Tanpa bot kaku.",
    why4Title: "Biaya Transparan Tanpa Biaya Tersembunyi",
    why4Desc: "Tanpa biaya tak terduga. Setiap penawaran merinci biaya PNBP imigrasi resmi, telex, dan jasa asistensi secara terbuka.",
    why5Title: "99.4% Tingkat Persetujuan Resmi",
    why5Desc: "Audit pra-pengajuan menyeluruh dari tim kami mencegah risiko penolakan sebelum berkas masuk ke meja verifikator imigrasi.",
    why6Title: "Ekosistem Layanan Korporasi Lengkap",
    why6Desc: "Butuh pendirian PT PMA, pelaporan LKPM BKPM, atau pembukuan pajak korporasi bulanan? Kami sediakan layanan bisnis terpadu.",
    corpTag: "LAYANAN KORPORASI TERINTEGRASI",
    corpHeading: "Ingin Mendirikan Perusahaan di Indonesia?",
    corpSub: "Kami melayani tuntas Pendirian PT PMA (Penanaman Modal Asing), perizinan OSS RBA, NPWP, hingga penerbitan KITAS Investor (E28B) bebas biaya DKP-TKA.",
    btnCorpWa: "Konsultasi PT PMA & KITAS Investor →",
    testiTag: "PENGALAMAN NYATA KLIEN",
    testiTitle: "Dipercaya Ekspatriat & Pengelana Internasional",
    testiDesc: "Inilah ulasan jujur dari warga negara asing yang telah mempercayakan izin tinggal mereka kepada kami:",
    faqTag: "BANTUAN & INFORMASI",
    faqTitle: "Pertanyaan yang Sering Diajukan",
    faqDesc: "Segala hal yang perlu Anda ketahui mengenai visa Indonesia, KITAS, KITAP, biometrik, dan aturan imigrasi.",
    faq1Q: "Bisakah saya mengajukan KITAS saat masih berada di luar negeri?",
    faq1A: "Bisa sekali! Seluruh proses awal diproses 100% secara digital. Anda tidak perlu repot mendatangi Kedutaan Besar Republik Indonesia (KBRI). Kami proses permohonan ke imigrasi pusat dan menerbitkan E-Visa resmi yang dikirim ke email Anda untuk digunakan terbang ke Indonesia.",
    faq2Q: "Apa perbedaan paling mendasar antara KITAS dan KITAP?",
    faq2A: "KITAS adalah Izin Tinggal Terbatas yang berlaku 1 atau 2 tahun dan harus diperpanjang berkala. Sedangkan KITAP adalah Izin Tinggal Tetap yang berlaku 5 tahun dan dapat diperpanjang seumur hidup, memberikan hak atas KTP-WNA dan stabilitas hak domisili jangka panjang. Pasangan WNI bisa mengajukan KITAP setelah 2 tahun berturut-turut memegang KITAS.",
    faq3Q: "Apakah KITAS Investor (E28B) benar-benar bebas dari pajak tenaga kerja asing?",
    faq3A: "Benar! Salah satu keuntungan utama KITAS Investor adalah pemegang saham yang menjabat sebagai Direktur atau Komisaris di PT PMA dibebaskan dari kewajiban pembayaran Dana Kompensasi Penggunaan TKA (DKP-TKA) senilai USD $1.200 per tahun.",
    faq4Q: "Apa yang terjadi setelah saya tiba di Indonesia dengan E-Visa?",
    faq4A: "Setelah mendarat di bandara Soekarno-Hatta (Jakarta) atau Ngurah Rai (Bali), Anda menunjukkan E-Visa di konter imigrasi. Dalam waktu 30 hari, tim kami akan menjadwalkan sesi biometrik VIP (foto & sidik jari) di kantor imigrasi setempat (hanya 10-15 menit). Kartu E-KITAS digital dan pendaftaran catatan sipil (SKTT) akan kami selesaikan.",
    faq5Q: "Bisakah mengubah Visa Turis atau Visa Bisnis menjadi KITAS di dalam negeri?",
    faq5A: "Berdasarkan peraturan keimigrasian terkini, permohonan Alih Status (onshore conversion) dimungkinkan untuk kategori visa tertentu tanpa harus keluar wilayah Indonesia. Tim kami akan memverifikasi visa aktif Anda untuk memproses alih status secara resmi.",
    faq6Q: "Berapa denda jika terjadi overstay (kelebihan masa tinggal) di Indonesia?",
    faq6A: "Pemerintah Indonesia mengenakan denda overstay sebesar Rp 1.000.000 per hari untuk masa keterlambatan di bawah 60 hari. Overstay di atas 60 hari dapat berakibat deportasi dan masuk dalam daftar penangkalan (blacklisting). Kami memonitor masa berlaku visa seluruh klien agar terhindar dari overstay.",
    finalCtaTitle: "Siap Memulai Pengurusan Izin Tinggal Indonesia?",
    finalCtaDesc: "Hubungi konsultan visa kami di WhatsApp sekarang. Dapatkan evaluasi profil awal gratis dan respons cepat dalam 15 menit.",
    finalCtaBtn: "Chat di WhatsApp (+62 819-0879-7799)",
    finalCtaMicro: "Tanpa komitmen • Konsultasi awal gratis • Respons langsung",
    footerBio: "Konsultan keimigrasian dan korporasi terpercaya di Indonesia. Membantu izin tinggal legal, KITAS, dan KITAP bagi ekspatriat, keluarga lintas negara, dan investor global.",
    footerNavTitle: "Layanan Utama",
    footerLegalTitle: "Sentra Korporasi",
    footerContactTitle: "Kontak Resmi",
    footerLegalNote: "Konsultan Keimigrasian & Korporasi Independen. Beroperasi sesuai ketentuan Direktorat Jenderal Imigrasi Republik Indonesia.",
    floatingWaTooltip: "Chat Konsultan Visa",
    modalDuration: "Masa Tinggal",
    modalEntry: "Izin Masuk",
    modalPrice: "Estimasi Biaya",
    modalIncludedTitle: "Hak Istimewa & Layanan Termasuk:",
    modalDocsTitle: "Persyaratan Dokumen Standar:",
    modalTimelineTitle: "Perkiraan Waktu Proses:",
    modalInquiryTitle: "Konsultasikan Visa Ini via WhatsApp:",
    labelNationality: "Kewarganegaraan / Paspor Pemohon:",
    labelArrival: "Perkiraan Kedatangan di Indonesia:",
    modalBtnSubmit: "Buka Konsultasi WhatsApp"
  }
};

// State Variables
let currentLanguage = "en";
let activeFilter = "all";
let selectedVisaForModal = null;

// Quiz State
let quizAnswers = {
  purpose: null,
  duration: null,
  sponsor: null
};

// ============================================================================
// 3. INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Setup
  initLanguagePreference();

  // 2. Render Visa Catalog
  renderVisaCards(activeFilter);

  // 3. Interactive Quiz
  initVisaQuiz();

  // 4. Modal Dialog
  initVisaModal();

  // 5. Category Filters
  initFilterTabs();

  // 6. FAQ Accordion
  initFaqAccordion();

  // 7. Header Navigation & Mobile Menu
  initNavigation();

  // 8. Update Current Year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ============================================================================
// 4. BILINGUAL HANDLER
// ============================================================================
function initLanguagePreference() {
  const saved = localStorage.getItem("konsulinvisa_lang");
  if (saved && (saved === "en" || saved === "id")) {
    currentLanguage = saved;
  } else {
    // Default to EN because target audience is foreigners abroad
    currentLanguage = "en";
  }

  applyLanguage(currentLanguage);

  // Bind Buttons
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang");
      if (targetLang && targetLang !== currentLanguage) {
        currentLanguage = targetLang;
        localStorage.setItem("konsulinvisa_lang", currentLanguage);
        applyLanguage(currentLanguage);
        renderVisaCards(activeFilter);
        if (quizAnswers.purpose && quizAnswers.duration && quizAnswers.sponsor) {
          evaluateQuizResult();
        }
      }
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  const dict = i18nDictionary[lang] || i18nDictionary.en;

  // Update text for all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update active state on language toggle buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update dynamic hero title according to lang
  const heroTitle = document.getElementById("heroTitle");
  if (heroTitle) {
    if (lang === "id") {
      heroTitle.innerHTML = 'Solusi Cepat &amp; Resmi <br /><span class="gradient-text">Pengurusan Visa, KITAS &amp; KITAP Indonesia</span>';
    } else {
      heroTitle.innerHTML = 'Your Trusted Partner for <br /><span class="gradient-text">Indonesia Visas, KITAS &amp; KITAP</span>';
    }
  }
}

// Format IDR Currency
function formatIdr(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

// ============================================================================
// 5. VISA CATALOG RENDERING
// ============================================================================
function renderVisaCards(filter) {
  const container = document.getElementById("visaGrid");
  if (!container) return;

  const isEn = currentLanguage === "en";
  const filteredVisas = filter === "all"
    ? VISA_DATABASE
    : VISA_DATABASE.filter((item) => item.category === filter);

  container.innerHTML = "";

  filteredVisas.forEach((visa) => {
    const card = document.createElement("div");
    card.className = `visa-card ${visa.featured ? "featured-card" : ""}`;
    card.setAttribute("data-id", visa.id);

    const name = isEn ? visa.nameEn : visa.nameId;
    const duration = isEn ? visa.durationEn : visa.durationId;
    const desc = isEn ? visa.descEn : visa.descId;
    const inclusions = isEn ? visa.inclusionsEn : visa.inclusionsId;

    // WhatsApp Direct Message
    const waText = encodeURIComponent(
      isEn
        ? `Hi konsulinvisa.id, I would like to consult about the ${visa.code} - ${visa.nameEn}. Please advise on requirements and pricing.`
        : `Halo konsulinvisa.id, saya ingin konsultasi mengenai layanan visa ${visa.code} - ${visa.nameId}. Mohon info syarat dan prosedurnya.`
    );
    const waUrl = `https://wa.me/6281908797799?text=${waText}`;

    card.innerHTML = `
      <div class="visa-card-header">
        <div>
          <span class="visa-card-code">${visa.code}</span>
          <h3 class="visa-card-title">${name}</h3>
        </div>
        <span class="visa-card-duration">${duration}</span>
      </div>

      <p class="visa-card-desc">${desc}</p>

      <ul class="visa-inclusions-list">
        ${inclusions.slice(0, 3).map(inc => `<li><span class="inc-check">✓</span> ${inc}</li>`).join("")}
      </ul>

      <div class="visa-card-footer">
        <div class="visa-price-row">
          <span class="price-caption">${isEn ? "Starting From" : "Mulai dari"}</span>
          <strong class="price-amount">${formatIdr(visa.priceIdr)}</strong>
        </div>
        <div class="visa-btn-row">
          <button type="button" class="btn-card-details" data-action="details" data-id="${visa.id}">
            ${isEn ? "Get Details" : "Lihat Detail"}
          </button>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-wa">
            <svg class="icon-wa" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.167 8.167 0 0 1-1.25-4.37c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.79 2.4a8.13 8.13 0 0 1 2.39 5.78c0 4.51-3.67 8.18-8.18 8.18zm4.49-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"/>
            </svg>
            ${isEn ? "WhatsApp" : "WhatsApp"}
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Attach Details Button Listener
  container.querySelectorAll('[data-action="details"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      openVisaModal(id);
    });
  });
}

function initFilterTabs() {
  const tabs = document.querySelectorAll(".catalog-tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      activeFilter = tab.getAttribute("data-filter") || "all";
      renderVisaCards(activeFilter);
    });
  });
}

// ============================================================================
// 6. INTERACTIVE 3-STEP VISA QUIZ (ELIGIBILITY FINDER)
// ============================================================================
function initVisaQuiz() {
  const step1 = document.getElementById("quizStep1");
  const step2 = document.getElementById("quizStep2");
  const step3 = document.getElementById("quizStep3");
  const resultView = document.getElementById("quizResult");

  const ind1 = document.getElementById("quizIndicator1");
  const ind2 = document.getElementById("quizIndicator2");
  const ind3 = document.getElementById("quizIndicator3");

  const line1 = document.getElementById("quizLine1");
  const line2 = document.getElementById("quizLine2");

  // Step 1 Options
  step1.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      quizAnswers.purpose = btn.getAttribute("data-value");
      goToStep(2);
    });
  });

  // Step 2 Options
  step2.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      quizAnswers.duration = btn.getAttribute("data-value");
      goToStep(3);
    });
  });

  // Step 3 Options
  step3.querySelectorAll(".quiz-opt-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      quizAnswers.sponsor = btn.getAttribute("data-value");
      evaluateQuizResult();
      goToResult();
    });
  });

  // Back Buttons
  const back1 = document.getElementById("btnQuizBack1");
  if (back1) {
    back1.addEventListener("click", () => goToStep(1));
  }

  const back2 = document.getElementById("btnQuizBack2");
  if (back2) {
    back2.addEventListener("click", () => goToStep(2));
  }

  // Restart Button
  const btnRestart = document.getElementById("btnRestartQuiz");
  if (btnRestart) {
    btnRestart.addEventListener("click", () => {
      quizAnswers = { purpose: null, duration: null, sponsor: null };
      goToStep(1);
    });
  }

  function goToStep(num) {
    [step1, step2, step3, resultView].forEach(view => view.classList.remove("active"));
    [ind1, ind2, ind3].forEach(ind => ind.classList.remove("active"));
    line1.classList.remove("filled");
    line2.classList.remove("filled");

    if (num === 1) {
      step1.classList.add("active");
      ind1.classList.add("active");
    } else if (num === 2) {
      step2.classList.add("active");
      ind1.classList.add("active");
      ind2.classList.add("active");
      line1.classList.add("filled");
    } else if (num === 3) {
      step3.classList.add("active");
      ind1.classList.add("active");
      ind2.classList.add("active");
      ind3.classList.add("active");
      line1.classList.add("filled");
      line2.classList.add("filled");
    }
  }

  function goToResult() {
    [step1, step2, step3].forEach(view => view.classList.remove("active"));
    resultView.classList.add("active");
    ind1.classList.add("active");
    ind2.classList.add("active");
    ind3.classList.add("active");
    line1.classList.add("filled");
    line2.classList.add("filled");
  }
}

// Logic to determine best visa recommendation
function evaluateQuizResult() {
  const { purpose, duration, sponsor } = quizAnswers;
  let recommendedVisaId = "kitas-spouse-1yr";

  if (purpose === "investor" || sponsor === "new_pma") {
    if (duration === "2years") {
      recommendedVisaId = "kitas-investor-2yr";
    } else if (duration === "5years") {
      recommendedVisaId = "kitap-investor-5yr";
    } else {
      recommendedVisaId = "kitas-investor-1yr";
    }
  } else if (purpose === "family") {
    if (duration === "5years") {
      recommendedVisaId = "kitap-spouse-5yr";
    } else if (duration === "2years") {
      recommendedVisaId = "kitas-spouse-2yr";
    } else {
      recommendedVisaId = "kitas-spouse-1yr";
    }
  } else if (purpose === "nomad") {
    recommendedVisaId = "kitas-nomad-1yr";
  } else if (purpose === "retirement") {
    recommendedVisaId = "kitas-retire-1yr";
  } else if (purpose === "work") {
    recommendedVisaId = "kitas-work-1yr";
  } else if (purpose === "tourism") {
    if (duration === "short") {
      recommendedVisaId = "visa-voa-b1";
    } else if (duration === "medium") {
      recommendedVisaId = "visa-tourist-c1";
    } else {
      recommendedVisaId = "visa-biz-multi";
    }
  }

  const matched = VISA_DATABASE.find(v => v.id === recommendedVisaId) || VISA_DATABASE[0];
  const isEn = currentLanguage === "en";

  // Populate Result View
  document.getElementById("resVisaCode").textContent = matched.code;
  document.getElementById("resVisaTitle").textContent = isEn ? matched.nameEn : matched.nameId;
  document.getElementById("resVisaDesc").textContent = isEn ? matched.descEn : matched.descId;
  document.getElementById("resDurationVal").textContent = isEn ? matched.durationEn : matched.durationId;
  document.getElementById("resEntryVal").textContent = isEn ? matched.entryTypeEn : matched.entryTypeId;
  document.getElementById("resPriceVal").textContent = formatIdr(matched.priceIdr);

  // Pre-filled WhatsApp button for result
  const resWaBtn = document.getElementById("resWaBtn");
  const waMsg = encodeURIComponent(
    isEn
      ? `Hi konsulinvisa.id, I completed your Visa Quiz! My matched visa is ${matched.code} - ${matched.nameEn}. (Purpose: ${purpose}, Duration: ${duration}, Sponsor: ${sponsor}). Can we proceed with consultation?`
      : `Halo konsulinvisa.id, saya telah mengisi kuis kelayakan visa. Rekomendasi saya: ${matched.code} - ${matched.nameId}. Mohon panduan pengurusannya.`
  );
  resWaBtn.href = `https://wa.me/6281908797799?text=${waMsg}`;

  // Link details button to open modal
  const detailsBtn = document.getElementById("resDetailsBtn");
  detailsBtn.onclick = () => {
    openVisaModal(matched.id);
  };
}

// ============================================================================
// 7. ACCESSIBLE MODAL DIALOG (GET DETAILS)
// ============================================================================
function initVisaModal() {
  const dialog = document.getElementById("visaDetailsDialog");
  const closeBtn = document.getElementById("dialogCloseBtn");
  const form = document.getElementById("dialogInquiryForm");

  if (!dialog) return;

  // Close on button click
  if (closeBtn) {
    closeBtn.addEventListener("click", () => dialog.close());
  }

  // Light dismiss on backdrop click
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      dialog.close();
    }
  });

  // Handle WhatsApp inquiry form submit
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nationality = document.getElementById("applicantNationality").value.trim();
      const arrival = document.getElementById("applicantArrival").value.trim();

      if (!selectedVisaForModal) return;

      const isEn = currentLanguage === "en";
      const visaName = isEn ? selectedVisaForModal.nameEn : selectedVisaForModal.nameId;
      const text = encodeURIComponent(
        isEn
          ? `Hi konsulinvisa.id, I am interested in applying for ${selectedVisaForModal.code} - ${visaName}. My nationality: ${nationality || 'Overseas'}. Estimated arrival: ${arrival || 'Pending'}. Please provide the official document checklist.`
          : `Halo konsulinvisa.id, saya tertarik mengajukan visa ${selectedVisaForModal.code} - ${visaName}. Kewarganegaraan: ${nationality || 'WNA'}. Rencana kedatangan: ${arrival || 'Menunggu jadwal'}. Mohon kirimkan daftar persyaratannya.`
      );

      window.open(`https://wa.me/6281908797799?text=${text}`, "_blank");
      dialog.close();
    });
  }
}

function openVisaModal(visaId) {
  const dialog = document.getElementById("visaDetailsDialog");
  const visa = VISA_DATABASE.find(v => v.id === visaId);
  if (!dialog || !visa) return;

  selectedVisaForModal = visa;
  const isEn = currentLanguage === "en";

  document.getElementById("dialogCode").textContent = visa.code;
  document.getElementById("dialogTitle").textContent = isEn ? visa.nameEn : visa.nameId;
  document.getElementById("dialogCategory").textContent = visa.category.toUpperCase();
  document.getElementById("dialogDuration").textContent = isEn ? visa.durationEn : visa.durationId;
  document.getElementById("dialogEntry").textContent = isEn ? visa.entryTypeEn : visa.entryTypeId;
  document.getElementById("dialogPrice").textContent = formatIdr(visa.priceIdr);
  document.getElementById("dialogDescription").textContent = isEn ? visa.descEn : visa.descId;
  document.getElementById("dialogTimeline").textContent = isEn ? visa.timelineEn : visa.timelineId;

  // Inclusions List
  const incUl = document.getElementById("dialogInclusions");
  const incData = isEn ? visa.inclusionsEn : visa.inclusionsId;
  incUl.innerHTML = incData.map(item => `<li>${item}</li>`).join("");

  // Requirements List
  const reqUl = document.getElementById("dialogRequirements");
  const reqData = isEn ? visa.requirementsEn : visa.requirementsId;
  reqUl.innerHTML = reqData.map(item => `<li>${item}</li>`).join("");

  dialog.showModal();
}

// ============================================================================
// 8. FAQ ACCORDION
// ============================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question-btn");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all others
      faqItems.forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-question-btn").setAttribute("aria-expanded", "false");
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

// ============================================================================
// 9. NAVIGATION & MOBILE DRAWER
// ============================================================================
function initNavigation() {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("mobileToggle");
  const drawer = document.getElementById("mobileDrawer");

  // Sticky shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile menu toggle
  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      const isOpen = drawer.classList.contains("open");
      if (isOpen) {
        drawer.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        drawer.classList.add("open");
        toggle.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    // Close drawer when mobile link clicked
    drawer.querySelectorAll(".mobile-link").forEach((link) => {
      link.addEventListener("click", () => {
        drawer.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

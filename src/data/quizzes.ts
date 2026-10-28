/* ============================================================
   ====== TEMPAT INPUT SOAL KUIS DISINI ======
   ============================================================

   PANDUAN UNTUK PENGGUNA AWAM:
   - Setiap kuis memiliki: id, title, materialId, questions
   - Untuk MENAMBAH soal baru: copy satu blok { ... } di questions dan paste
   - Untuk MENGUBAH pertanyaan: edit bagian question: "..."
   - Untuk MENGUBAH pilihan jawaban: edit bagian options: ["...", "..."]
   - Untuk MENGUBAH jawaban benar: edit bagian correctAnswer (0=A, 1=B, 2=C, 3=D)
   - Untuk MENGUBAH pembahasan: edit bagian explanation: "..."

   FORMAT:
   - id: nomor unik kuis
   - title: judul kuis
   - materialId: ID materi terkait (harus sesuai dengan materials.ts)
   - questions: daftar soal
     - question: teks pertanyaan
     - options: array pilihan jawaban (A, B, C, D)
     - correctAnswer: index jawaban benar (0=A, 1=B, 2=C, 3=D)
     - explanation: pembahasan jawaban
     - difficulty: "mudah" | "sedang" | "sulit"
   ============================================================ */

export interface Question {
    question: string;
    options: string[];
    correctAnswer: number; // 0=A, 1=B, 2=C, 3=D
    explanation: string;
    difficulty: "mudah" | "sedang" | "sulit";
}

export interface Quiz {
    id: number;
    title: string;
    materialId: number;
    questions: Question[];
}

// ====== MULAI DAFTAR KUIS - EDIT DIBAWAH INI ======
export const quizzes: Quiz[] = [
    {
        id: 1,
        title: "Kuis Kinematika",
        materialId: 1,
        questions: [
            {
                question: "Sebuah mobil bergerak dengan kecepatan 72 km/jam. Berapa kecepatan mobil dalam m/s?",
                options: ["10 m/s", "20 m/s", "30 m/s", "36 m/s"],
                correctAnswer: 1,
                explanation: "72 km/jam = 72 × (1000/3600) = 72 × (1/3,6) = 20 m/s",
                difficulty: "mudah"
            },
            {
                question: "Benda jatuh bebas dari ketinggian 80 m (g = 10 m/s²). Berapa waktu yang diperlukan untuk mencapai tanah?",
                options: ["2 sekon", "4 sekon", "6 sekon", "8 sekon"],
                correctAnswer: 1,
                explanation: "h = ½gt² → 80 = ½(10)t² → t² = 16 → t = 4 sekon",
                difficulty: "sedang"
            },
            {
                question: "Sebuah benda dilempar ke atas dengan kecepatan awal 40 m/s. Berapa ketinggian maksimum? (g = 10 m/s²)",
                options: ["40 m", "60 m", "80 m", "100 m"],
                correctAnswer: 2,
                explanation: "v² = v₀² - 2gh → 0 = 40² - 2(10)h → h = 1600/20 = 80 m",
                difficulty: "sedang"
            },
            {
                question: "Yang BUKAN merupakan besaran vektor adalah...",
                options: ["Kecepatan", "Perpindahan", "Jarak", "Percepatan"],
                correctAnswer: 2,
                explanation: "Jarak adalah besaran skalar (hanya memiliki nilai, tidak memiliki arah). Sedangkan kecepatan, perpindahan, dan percepatan adalah besaran vektor.",
                difficulty: "mudah"
            },
            {
                question: "Grafik v-t menunjukkan garis lurus miring ke atas. Ini menunjukkan benda mengalami...",
                options: ["GLB", "GLBB dipercepat", "GLBB diperlambat", "Diam"],
                correctAnswer: 1,
                explanation: "Grafik v-t yang miring ke atas (gradien positif) menunjukkan kecepatan bertambah secara teratur = GLBB dipercepat.",
                difficulty: "sedang"
            }
        ]
    },
    {
        id: 2,
        title: "Kuis Hukum Newton",
        materialId: 1,
        questions: [
            {
                question: "Sebuah benda bermassa 4 kg mengalami gaya 12 N. Berapa percepatan benda?",
                options: ["2 m/s²", "3 m/s²", "4 m/s²", "48 m/s²"],
                correctAnswer: 1,
                explanation: "F = ma → a = F/m = 12/4 = 3 m/s²",
                difficulty: "mudah"
            },
            {
                question: "Hukum Newton III menyatakan bahwa...",
                options: [
                    "Benda diam akan tetap diam",
                    "F = m × a",
                    "Aksi = reaksi (sama besar, berlawanan arah)",
                    "Energi tidak dapat diciptakan"
                ],
                correctAnswer: 2,
                explanation: "Hukum III Newton (aksi-reaksi): Setiap aksi memiliki reaksi yang sama besar dan berlawanan arah.",
                difficulty: "mudah"
            },
            {
                question: "Sebuah balok 10 kg di atas lantai kasar (μk = 0,3) ditarik gaya 50 N. Berapa percepatan balok? (g = 10 m/s²)",
                options: ["1 m/s²", "2 m/s²", "3 m/s²", "5 m/s²"],
                correctAnswer: 1,
                explanation: "f = μk × N = 0,3 × 100 = 30 N. F bersih = 50 - 30 = 20 N. a = 20/10 = 2 m/s²",
                difficulty: "sulit"
            },
            {
                question: "Berat benda di Bumi 100 N. Jika benda dibawa ke planet dengan g = 4 m/s², berapa beratnya?",
                options: ["25 N", "40 N", "50 N", "100 N"],
                correctAnswer: 1,
                explanation: "m = W/g = 100/10 = 10 kg. W di planet = m × g_planet = 10 × 4 = 40 N",
                difficulty: "sedang"
            }
        ]
    },
    {
        id: 3,
        title: "Kuis Listrik",
        materialId: 2,
        questions: [
            {
                question: "Dua hambatan 6 Ω dan 3 Ω disusun paralel. Berapa hambatan total?",
                options: ["2 Ω", "3 Ω", "4,5 Ω", "9 Ω"],
                correctAnswer: 0,
                explanation: "1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 → R = 2 Ω",
                difficulty: "sedang"
            },
            {
                question: "Arus 2 A mengalir melalui hambatan 5 Ω selama 1 menit. Berapa energi yang dilepaskan?",
                options: ["100 J", "600 J", "1200 J", "3600 J"],
                correctAnswer: 2,
                explanation: "W = I²Rt = (2²)(5)(60) = 4 × 5 × 60 = 1200 J",
                difficulty: "sedang"
            },
            {
                question: "Hukum Ohm menyatakan bahwa...",
                options: [
                    "V = I × R",
                    "P = V × I",
                    "F = kq₁q₂/r²",
                    "E = mc²"
                ],
                correctAnswer: 0,
                explanation: "Hukum Ohm: V = I × R, yaitu tegangan sama dengan arus dikali hambatan.",
                difficulty: "mudah"
            }
        ]
    }
];
// ====== AKHIR DAFTAR KUIS ======

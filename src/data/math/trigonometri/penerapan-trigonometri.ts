/* ====== Bab 103-2 · Penerapan Perbandingan Trigonometri ====== */

import { Chapter } from '../../materials';

export const penerapanTrigonometri: Chapter = {
  chapterId: "103-2",
  title: "Penerapan Perbandingan Trigonometri",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Geometri · Kelas X</span>
      <h1>Penerapan Perbandingan Trigonometri</h1>
      <p>Rangkuman sudut elevasi dan depresi, langkah menyelesaikan masalah pengukuran tinggi dan jarak, serta rumus luas segitiga dengan sinus.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#elevasi-depresi">Sudut elevasi dan sudut depresi</a></li>
        <li><a href="#langkah">Langkah menyelesaikan masalah</a></li>
        <li><a href="#contoh">Contoh soal</a></li>
        <li><a href="#luas">Luas segitiga dengan sinus</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. ELEVASI DEPRESI ============ -->
    <section class="bagian" id="elevasi-depresi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Sudut elevasi dan sudut depresi</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Sudut elevasi</h3>
          <p>Sudut antara garis mendatar dan garis pandang ketika pengamat melihat <strong>ke atas</strong>, misalnya melihat puncak pohon.</p>
        </div>
        <div class="kartu">
          <h3>Sudut depresi</h3>
          <p>Sudut antara garis mendatar dan garis pandang ketika pengamat melihat <strong>ke bawah</strong>, misalnya dari puncak menara ke perahu.</p>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/sudut-elevasi-depresi.svg" alt="Pengamat di puncak gedung melihat ke bawah ke arah mobil di tanah. Sudut antara garis mendatar dan garis pandang ke bawah disebut sudut depresi. Dari mobil, sudut antara tanah dan garis pandang ke atas menuju pengamat disebut sudut elevasi. Kedua sudut itu sama besar karena garis mendatar sejajar dengan tanah." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Sudut depresi dari pengamat sama besar dengan sudut elevasi dari mobil.</figcaption>
      </figure>

      <div class="catatan">
        <strong class="judul">Selalu diukur dari garis mendatar</strong>
        Sudut depresi bukan sudut antara garis pandang dan dinding gedung. Karena garis mendatar sejajar tanah, sudut depresi dan sudut elevasi pada Gambar 1 merupakan sudut dalam berseberangan, sehingga sama besar.
      </div>
    </section>

    <!-- ============ 2. LANGKAH ============ -->
    <section class="bagian" id="langkah">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Langkah menyelesaikan masalah</h2>
      </div>

      <ol class="langkah">
        <li>Buat sketsa dan tandai segitiga siku-sikunya.</li>
        <li>Tulis sisi yang diketahui dan sisi yang dicari, lalu tentukan letaknya terhadap sudut yang diketahui: depan, samping, atau miring.</li>
        <li>Pilih perbandingan yang memuat kedua sisi itu: depan dan miring memakai sin, samping dan miring memakai cos, depan dan samping memakai tan.</li>
        <li>Hitung, lalu periksa apakah hasilnya masuk akal, termasuk satuannya.</li>
      </ol>
    </section>

    <!-- ============ 3. CONTOH ============ -->
    <section class="bagian" id="contoh">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Contoh soal</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Soal 1 · Tinggi pohon</span>
        <p>Budi berdiri 12 m dari pangkal pohon dan melihat puncaknya dengan sudut elevasi 60°. Tinggi mata Budi dari tanah 1,5 m. Berapa tinggi pohon?</p>
      </div>
      <ol class="langkah">
        <li>Sisi samping = 12 m, sisi depan = <em>t</em> (tinggi pohon di atas mata). Gunakan tan.</li>
        <li><em>t</em> = 12 × tan 60° = 12√3 ≈ 20,78 m.</li>
        <li>Tinggi pohon = 20,78 + 1,5 ≈ <strong>22,3 m</strong>.</li>
      </ol>

      <div class="kartu">
        <span class="istilah">Soal 2 · Jarak perahu</span>
        <p>Dari puncak menara setinggi 40 m, seorang penjaga melihat perahu dengan sudut depresi 30°. Berapa jarak perahu dari kaki menara?</p>
      </div>
      <ol class="langkah">
        <li>Sudut elevasi dari perahu = 30°. Sisi depan = 40 m, sisi samping = <em>d</em>.</li>
        <li>tan 30° = 40/<em>d</em>, sehingga <em>d</em> = 40 / (⅓√3) = 40√3.</li>
        <li><em>d</em> ≈ <strong>69,3 m</strong>.</li>
      </ol>

      <div class="kartu">
        <span class="istilah">Soal 3 · Tangga</span>
        <p>Tangga sepanjang 6 m bersandar di dinding dan membentuk sudut 60° dengan lantai. Seberapa tinggi ujung atas tangga, dan berapa jarak kaki tangga ke dinding?</p>
      </div>
      <ol class="langkah">
        <li>Tangga adalah sisi miring. Tinggi = 6 × sin 60° = 3√3 ≈ <strong>5,2 m</strong>.</li>
        <li>Jarak kaki tangga = 6 × cos 60° = <strong>3 m</strong>.</li>
      </ol>
    </section>

    <!-- ============ 4. LUAS SEGITIGA ============ -->
    <section class="bagian" id="luas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Luas segitiga dengan sinus</h2>
      </div>

      <p>Jika dua sisi dan sudut apitnya diketahui, tinggi segitiga dapat dicari dengan sinus: tinggi = <em>b</em> sin C. Luas = ½ × alas × tinggi, sehingga diperoleh rumus berikut.</p>

      <div class="rumus">
        <div class="rumus-judul">Luas segitiga</div>
        <div class="rumus-isi">
          <math display="block" aria-label="L sama dengan setengah a b sin C">
            <mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><mi>b</mi><mspace width="0.2em"/><mi>sin</mi><mi>C</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>a, b</dt><dd>panjang dua sisi segitiga</dd>
            <dt>C</dt><dd>sudut yang diapit sisi a dan b</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Sebidang tanah berbentuk segitiga dengan dua sisi 8 m dan 6 m yang mengapit sudut 30°. Luasnya L = ½ × 8 × 6 × sin 30° = 24 × ½ = <strong>12 m²</strong>.
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Konsep</th><th>Keterangan</th></tr>
          </thead>
          <tbody>
            <tr><td>Sudut elevasi</td><td>dari garis mendatar ke atas</td></tr>
            <tr><td>Sudut depresi</td><td>dari garis mendatar ke bawah; sama dengan sudut elevasi dari titik yang dilihat</td></tr>
            <tr><td>Memilih rumus</td><td>de–mi: sin; sa–mi: cos; de–sa: tan</td></tr>
            <tr><td>Luas segitiga</td><td>L = ½ab sin C</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase E, elemen Geometri (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Trigonometri.
    </footer>
  `,
  formula: "",
  example: ""
};

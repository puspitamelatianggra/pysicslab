/* ====== Bab 108-3 · Analisis Data Dua Variabel ====== */

import { Chapter } from '../../materials';

export const dataDuaVariabel: Chapter = {
  chapterId: "108-3",
  title: "Analisis Data Dua Variabel",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Analisis Data dan Peluang · Kelas X–XII</span>
      <h1>Analisis Data Dua Variabel</h1>
      <p>Rangkuman cara menyelidiki hubungan dua variabel: tabel dua arah untuk data kategorikal, diagram pencar dan jenis asosiasi untuk data numerik, garis regresi linear (kecocokan terbaik), koefisien korelasi, serta perbedaan asosiasi dan sebab-akibat.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#kategorikal">Dua variabel kategorikal</a></li>
        <li><a href="#pencar">Diagram pencar dan jenis asosiasi</a></li>
        <li><a href="#regresi">Garis regresi linear</a></li>
        <li><a href="#korelasi">Koefisien korelasi</a></li>
        <li><a href="#sebab-akibat">Asosiasi bukan sebab-akibat</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. KATEGORIKAL ============ -->
    <section class="bagian" id="kategorikal">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Dua variabel kategorikal</h2>
      </div>

      <p><strong>Data dua variabel</strong> (bivariat) mencatat dua hal dari setiap objek, misalnya kebiasaan olahraga dan pola tidur setiap siswa. Untuk dua variabel kategorikal, data disusun dalam <strong>tabel dua arah</strong> (tabel kontingensi).</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Survei 200 siswa</th><th>Tidur cukup</th><th>Tidur kurang</th><th>Jumlah</th></tr>
          </thead>
          <tbody>
            <tr><td>Olahraga rutin</td><td>60</td><td>20</td><td>80</td></tr>
            <tr><td>Tidak rutin</td><td>50</td><td>70</td><td>120</td></tr>
            <tr><td>Jumlah</td><td>110</td><td>90</td><td>200</td></tr>
          </tbody>
        </table>
      </div>

      <p>Bandingkan <strong>frekuensi relatif tiap baris</strong>, bukan angka mentahnya, karena jumlah tiap kelompok berbeda. Siswa yang rutin olahraga dan tidur cukup ada 60/80 = 75%, sedangkan siswa yang tidak rutin olahraga dan tidur cukup hanya 50/120 ≈ 41,7%. Perbedaan yang besar ini menunjukkan ada <strong>asosiasi</strong> antara kebiasaan olahraga dan cukup tidur. Jika persentasenya hampir sama, tidak ada asosiasi.</p>
    </section>

    <!-- ============ 2. DIAGRAM PENCAR ============ -->
    <section class="bagian" id="pencar">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Diagram pencar dan jenis asosiasi</h2>
      </div>

      <p>Untuk dua variabel numerik, setiap objek digambar sebagai satu titik (<em>x</em>, <em>y</em>) pada <strong>diagram pencar</strong>. Variabel yang diduga memengaruhi diletakkan di sumbu <em>x</em> (variabel bebas), dan variabel yang dipengaruhi di sumbu <em>y</em> (variabel terikat).</p>

      <figure class="gambar lebar">
        <div class="gambar-isi">
          <img src="/images/jenis-asosiasi.svg" alt="Tiga diagram pencar. Kiri, asosiasi positif: titik-titik mengumpul di sekitar garis yang naik. Tengah, asosiasi negatif: titik-titik mengumpul di sekitar garis yang turun. Kanan, tidak ada asosiasi: titik-titik tersebar acak tanpa pola." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Tiga jenis asosiasi pada diagram pencar.</figcaption>
      </figure>

      <ul class="poin">
        <li><strong>Arah</strong>: positif jika <em>y</em> cenderung naik ketika <em>x</em> naik, negatif jika <em>y</em> cenderung turun.</li>
        <li><strong>Bentuk</strong>: linear jika titik-titik mengikuti garis lurus, nonlinear jika mengikuti lengkungan.</li>
        <li><strong>Kekuatan</strong>: kuat jika titik-titik rapat di sekitar pola, lemah jika menyebar lebar.</li>
      </ul>
    </section>

    <!-- ============ 3. REGRESI ============ -->
    <section class="bagian" id="regresi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Garis regresi linear</h2>
      </div>

      <p>Jika asosiasinya linear, data dapat diwakili oleh satu garis lurus yang paling dekat dengan semua titik, disebut <strong>garis kecocokan terbaik</strong> atau garis regresi. Garis ini dapat diperkirakan dengan mata, tetapi yang paling tepat dihitung dengan <strong>metode kuadrat terkecil</strong>.</p>

      <div class="rumus">
        <div class="rumus-judul">Garis regresi ŷ = a + bx</div>
        <div class="rumus-isi">
          <math display="block" aria-label="b sama dengan n kali jumlah x y dikurangi jumlah x kali jumlah y, dibagi n kali jumlah x kuadrat dikurangi kuadrat jumlah x">
            <mi>b</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mo>∑</mo><mi>x</mi><mi>y</mi><mo>−</mo><mo>∑</mo><mi>x</mi><mo>∑</mo><mi>y</mi></mrow><mrow><mi>n</mi><mo>∑</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo>(</mo><mo>∑</mo><mi>x</mi><mo>)</mo></mrow><mn>2</mn></msup></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="a sama dengan y bar dikurangi b kali x bar">
            <mi>a</mi><mo>=</mo><mover><mi>y</mi><mo>‾</mo></mover><mo>−</mo><mi>b</mi><mover><mi>x</mi><mo>‾</mo></mover>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>ŷ</dt><dd>nilai y yang diperkirakan dari x</dd>
            <dt>b</dt><dd>gradien: perkiraan perubahan y setiap x naik 1 satuan</dd>
            <dt>a</dt><dd>titik potong sumbu y</dd>
            <dt>x̄, ȳ</dt><dd>rata-rata x dan rata-rata y; garis regresi selalu melalui (x̄, ȳ)</dd>
          </dl>
        </div>
      </div>

      <div class="kartu">
        <span class="istilah">Contoh</span>
        <p>Data lama belajar per hari (<em>x</em>, jam) dan nilai ujian (<em>y</em>) 10 siswa: (1, 55), (2, 60), (2, 65), (3, 62), (3, 70), (4, 72), (5, 75), (5, 80), (6, 82), (7, 88).</p>
      </div>
      <ol class="langkah">
        <li>Hitung: <em>n</em> = 10, ∑<em>x</em> = 38, ∑<em>y</em> = 709, ∑<em>xy</em> = 2.872, ∑<em>x</em><sup>2</sup> = 178.</li>
        <li><em>b</em> = (10 × 2.872 − 38 × 709) / (10 × 178 − 38<sup>2</sup>) = 1.778 / 336 ≈ 5,29.</li>
        <li><em>a</em> = 70,9 − 5,29 × 3,8 ≈ 50,79. Jadi <strong>ŷ = 50,79 + 5,29<em>x</em></strong>.</li>
        <li>Artinya, setiap tambahan 1 jam belajar per hari diperkirakan menaikkan nilai sekitar 5,3 poin. Siswa yang belajar 4,5 jam per hari diperkirakan mendapat nilai 50,79 + 5,29 × 4,5 ≈ 74,6.</li>
      </ol>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/diagram-pencar.svg" alt="Diagram pencar lama belajar per hari dalam jam terhadap nilai ujian untuk 10 siswa. Titik-titik naik dari kiri bawah ke kanan atas, menunjukkan asosiasi positif yang kuat. Garis lurus kecocokan terbaik y topi = 50,79 + 5,29x melewati tengah-tengah titik." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Diagram pencar data contoh dan garis regresinya.</figcaption>
      </figure>

      <div class="catatan">
        <strong class="judul">Interpolasi dan ekstrapolasi</strong>
        Memperkirakan di dalam rentang data (di sini 1–7 jam) disebut interpolasi dan cukup dapat dipercaya. Memperkirakan di luar rentang data disebut ekstrapolasi dan berisiko. Model ini meramalkan nilai 50,79 + 5,29 × 12 ≈ 114 untuk belajar 12 jam, padahal nilai maksimum hanya 100.
      </div>
    </section>

    <!-- ============ 4. KORELASI ============ -->
    <section class="bagian" id="korelasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Koefisien korelasi</h2>
      </div>

      <p><strong>Koefisien korelasi</strong> <em>r</em> menyatakan arah dan kekuatan asosiasi <strong>linear</strong> dengan satu bilangan antara −1 dan 1. Nilainya biasanya dihitung dengan kalkulator atau lembar kerja.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Nilai r</th><th>Arti</th></tr>
          </thead>
          <tbody>
            <tr><td>mendekati 1</td><td>asosiasi linear positif yang kuat</td></tr>
            <tr><td>mendekati 0</td><td>tidak ada asosiasi linear (mungkin ada pola lengkung)</td></tr>
            <tr><td>mendekati −1</td><td>asosiasi linear negatif yang kuat</td></tr>
          </tbody>
        </table>
      </div>

      <p>Data contoh di atas memiliki <em>r</em> ≈ 0,97, yaitu asosiasi linear positif yang sangat kuat.</p>
    </section>

    <!-- ============ 5. SEBAB AKIBAT ============ -->
    <section class="bagian" id="sebab-akibat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Asosiasi bukan sebab-akibat</h2>
      </div>

      <p>Dua variabel yang berasosiasi kuat belum tentu saling menyebabkan. Bisa jadi keduanya dipengaruhi oleh <strong>variabel ketiga</strong>.</p>

      <div class="catatan">
        <strong class="judul">Contoh</strong>
        Di sebuah kota pantai, penjualan es krim dan jumlah kasus orang tenggelam sama-sama naik pada bulan yang sama. Es krim tidak menyebabkan orang tenggelam. Keduanya naik karena cuaca panas: orang lebih banyak membeli es krim dan lebih banyak berenang.
      </div>

      <p>Untuk menyimpulkan sebab-akibat, biasanya diperlukan percobaan terkendali, misalnya membandingkan dua kelompok yang dipilih secara acak dan hanya berbeda pada satu perlakuan.</p>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Jenis data</th><th>Alat analisis</th></tr>
          </thead>
          <tbody>
            <tr><td>Kategorikal–kategorikal</td><td>tabel dua arah; bandingkan persentase tiap baris</td></tr>
            <tr><td>Numerik–numerik</td><td>diagram pencar: arah, bentuk, kekuatan</td></tr>
            <tr><td>Garis regresi</td><td>ŷ = a + bx; b = (n∑xy − ∑x∑y)/(n∑x² − (∑x)²), a = ȳ − bx̄</td></tr>
            <tr><td>Korelasi</td><td>−1 ≤ r ≤ 1; makin dekat ke ±1 makin kuat</td></tr>
            <tr><td>Kesimpulan</td><td>asosiasi tidak sama dengan sebab-akibat</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase E (diagram pencar) dan Fase F, elemen Analisis Data dan Peluang: asosiasi dua variabel kategorikal dan numerik, model linear terbaik, dan membedakan asosiasi dari sebab-akibat (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025).
    </footer>
  `,
  formula: "",
  example: ""
};

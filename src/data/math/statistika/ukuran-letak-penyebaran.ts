/* ====== Bab 108-2 · Ukuran Letak dan Penyebaran Data ====== */

import { Chapter } from '../../materials';

export const ukuranLetakPenyebaran: Chapter = {
  chapterId: "108-2",
  title: "Ukuran Letak dan Penyebaran Data",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Analisis Data dan Peluang · Kelas X</span>
      <h1>Ukuran Letak dan Penyebaran Data</h1>
      <p>Rangkuman kuartil, jangkauan dan jangkauan interkuartil, pencilan, box plot, ragam dan simpangan baku, serta cara mengevaluasi laporan statistik di media.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#kuartil">Kuartil</a></li>
        <li><a href="#jangkauan">Jangkauan dan pencilan</a></li>
        <li><a href="#box-plot">Box plot</a></li>
        <li><a href="#simpangan">Ragam dan simpangan baku</a></li>
        <li><a href="#evaluasi">Mengevaluasi laporan statistik</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. KUARTIL ============ -->
    <section class="bagian" id="kuartil">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Kuartil</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Kuartil</span>
        <p>Tiga nilai yang membagi data terurut menjadi <strong>empat bagian sama banyak</strong>: kuartil bawah Q<sub>1</sub>, kuartil tengah Q<sub>2</sub> (sama dengan median), dan kuartil atas Q<sub>3</sub>.</p>
      </div>

      <ol class="langkah">
        <li>Urutkan data dari yang terkecil.</li>
        <li>Tentukan median sebagai Q<sub>2</sub>.</li>
        <li>Q<sub>1</sub> adalah median separuh data di bawah Q<sub>2</sub>, dan Q<sub>3</sub> adalah median separuh data di atas Q<sub>2</sub>. Jika banyak data ganjil, Q<sub>2</sub> tidak ikut dihitung di kedua separuh itu.</li>
      </ol>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Data: 4, 5, 6, 6, 7, <strong>8</strong>, 9, 9, 10, 12, 20 (11 data). Q<sub>2</sub> = data ke-6 = <strong>8</strong>. Separuh bawah 4, 5, 6, 6, 7 memberi Q<sub>1</sub> = <strong>6</strong>. Separuh atas 9, 9, 10, 12, 20 memberi Q<sub>3</sub> = <strong>10</strong>.
      </div>
    </section>

    <!-- ============ 2. JANGKAUAN ============ -->
    <section class="bagian" id="jangkauan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Jangkauan dan pencilan</h2>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Ukuran penyebaran berbasis kuartil</div>
        <div class="rumus-isi">
          <math display="block" aria-label="jangkauan sama dengan data terbesar dikurangi data terkecil">
            <mi>J</mi><mo>=</mo><msub><mi>x</mi><mtext>maks</mtext></msub><mo>−</mo><msub><mi>x</mi><mtext>min</mtext></msub>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="jangkauan interkuartil H sama dengan Q 3 dikurangi Q 1">
            <mi>H</mi><mo>=</mo><msub><mi>Q</mi><mn>3</mn></msub><mo>−</mo><msub><mi>Q</mi><mn>1</mn></msub>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>J</dt><dd>jangkauan, peka terhadap pencilan</dd>
            <dt>H</dt><dd>jangkauan interkuartil (hamparan), lebar 50% data di tengah</dd>
            <dt>½H</dt><dd>simpangan kuartil</dd>
          </dl>
        </div>
      </div>

      <p><strong>Pencilan</strong> adalah data yang jauh berbeda dari data lainnya. Aturan yang umum dipakai: data merupakan pencilan jika nilainya di bawah <strong>pagar bawah</strong> Q<sub>1</sub> − 1,5H atau di atas <strong>pagar atas</strong> Q<sub>3</sub> + 1,5H.</p>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Dari data sebelumnya: J = 20 − 4 = 16 dan H = 10 − 6 = 4. Pagar bawah = 6 − 6 = 0 dan pagar atas = 10 + 6 = 16. Nilai 20 &gt; 16, jadi <strong>20 adalah pencilan</strong>. Jangkauan 16 terlihat besar hanya karena satu nilai ini, sedangkan H = 4 lebih menggambarkan sebaran sebagian besar data.
      </div>
    </section>

    <!-- ============ 3. BOX PLOT ============ -->
    <section class="bagian" id="box-plot">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Box plot</h2>
      </div>

      <p><strong>Box plot</strong> (diagram kotak-garis) menggambarkan <strong>statistik lima serangkai</strong>: nilai minimum, Q<sub>1</sub>, Q<sub>2</sub>, Q<sub>3</sub>, dan nilai maksimum. Pencilan digambar sebagai titik terpisah.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/box-plot.svg" alt="Box plot data 4, 5, 6, 6, 7, 8, 9, 9, 10, 12, 20 di atas garis bilangan 0 sampai 22. Kotak membentang dari kuartil bawah Q1 = 6 sampai kuartil atas Q3 = 10, dengan garis median Q2 = 8 di dalamnya. Garis kumis memanjang dari nilai minimum 4 sampai 12. Nilai 20 berada di luar pagar atas 16, sehingga digambar sebagai titik pencilan. Jangkauan interkuartil sama dengan 4." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Box plot data contoh. Kumis kanan berhenti di 12, nilai terbesar yang bukan pencilan.</figcaption>
      </figure>

      <ul class="poin">
        <li><strong>Kotak</strong> memuat 50% data di tengah. Makin lebar kotaknya, makin menyebar datanya.</li>
        <li>Letak garis median di dalam kotak menunjukkan kesimetrisan. Jika median lebih dekat ke Q<sub>1</sub>, data menceng ke kanan (ekor panjang di kanan).</li>
        <li>Untuk <strong>membandingkan</strong> dua kelompok, gambar box plot keduanya pada satu garis bilangan. Bandingkan letak median dan lebar kotaknya.</li>
      </ul>
    </section>

    <!-- ============ 4. SIMPANGAN BAKU ============ -->
    <section class="bagian" id="simpangan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Ragam dan simpangan baku</h2>
      </div>

      <p>Ragam dan simpangan baku mengukur seberapa jauh data menyebar dari rata-ratanya. Makin besar nilainya, makin beragam datanya.</p>

      <div class="rumus">
        <div class="rumus-judul">Ragam dan simpangan baku</div>
        <div class="rumus-isi">
          <math display="block" aria-label="s kuadrat sama dengan jumlah x i dikurangi x bar kuadrat dibagi n, dan s sama dengan akar s kuadrat">
            <msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo>∑</mo><msup><mrow><mo>(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover><mi>x</mi><mo>‾</mo></mover><mo>)</mo></mrow><mn>2</mn></msup></mrow><mi>n</mi></mfrac>
            <mspace width="1.5em"/>
            <mi>s</mi><mo>=</mo><msqrt><msup><mi>s</mi><mn>2</mn></msup></msqrt>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>s²</dt><dd>ragam (varians)</dd>
            <dt>s</dt><dd>simpangan baku, satuannya sama dengan satuan data</dd>
            <dt>n</dt><dd>banyak data; untuk data sampel, sebagian buku membagi dengan n − 1</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Data 2, 4, 4, 4, 5, 5, 7, 9 memiliki rata-rata 40/8 = 5. Kuadrat simpangannya 9, 1, 1, 1, 0, 0, 4, 16 berjumlah 32. Ragam = 32/8 = 4 dan simpangan baku = √4 = <strong>2</strong>.
      </div>
    </section>

    <!-- ============ 5. EVALUASI ============ -->
    <section class="bagian" id="evaluasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Mengevaluasi laporan statistik</h2>
      </div>

      <p>Grafik dan angka di berita atau media sosial dapat menyesatkan meskipun datanya benar. Ajukan pertanyaan berikut sebelum menerima kesimpulannya.</p>

      <ul class="poin">
        <li><strong>Siapa sampelnya?</strong> Survei yang hanya diisi pengikut sebuah akun belum tentu mewakili seluruh masyarakat. Perhatikan juga ukuran sampelnya.</li>
        <li><strong>Mulai dari mana sumbu tegaknya?</strong> Sumbu yang tidak dimulai dari nol dapat membuat selisih kecil tampak sangat besar.</li>
        <li><strong>Ukuran pemusatan mana yang dipakai?</strong> Rata-rata gaji di suatu kantor dapat tinggi karena beberapa gaji direksi, padahal median gajinya jauh lebih rendah.</li>
        <li><strong>Apakah hubungan disimpulkan sebagai sebab-akibat?</strong> Dua hal yang naik bersamaan belum tentu saling menyebabkan. Bahasan ini dilanjutkan di bab Analisis Data Dua Variabel.</li>
      </ul>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Konsep</th><th>Rumus / keterangan</th></tr>
          </thead>
          <tbody>
            <tr><td>Kuartil</td><td>Q<sub>1</sub>, Q<sub>2</sub> (median), Q<sub>3</sub> membagi data menjadi 4 bagian</td></tr>
            <tr><td>Jangkauan</td><td>J = x<sub>maks</sub> − x<sub>min</sub></td></tr>
            <tr><td>Jangkauan interkuartil</td><td>H = Q<sub>3</sub> − Q<sub>1</sub></td></tr>
            <tr><td>Pencilan</td><td>&lt; Q<sub>1</sub> − 1,5H atau &gt; Q<sub>3</sub> + 1,5H</td></tr>
            <tr><td>Box plot</td><td>min, Q<sub>1</sub>, Q<sub>2</sub>, Q<sub>3</sub>, maks</td></tr>
            <tr><td>Simpangan baku</td><td>s = √(∑(x<sub>i</sub> − x̄)²/n)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase E, elemen Analisis Data dan Peluang: jangkauan kuartil dan interkuartil, box plot, dan mengevaluasi laporan statistika di media (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Statistika.
    </footer>
  `,
  formula: "",
  example: ""
};

/* ====== Bab 105-2 · Barisan dan Deret Geometri ====== */

import { Chapter } from '../../materials';

export const barisanDeretGeometri: Chapter = {
  chapterId: "105-2",
  title: "Barisan dan Deret Geometri",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Bilangan · Kelas XI</span>
      <h1>Barisan dan Deret Geometri</h1>
      <p>Rangkuman barisan geometri, jumlah n suku pertama, deret geometri tak hingga, serta model pertumbuhan dan peluruhan.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#barisan">Barisan geometri</a></li>
        <li><a href="#deret">Deret geometri</a></li>
        <li><a href="#tak-hingga">Deret geometri tak hingga</a></li>
        <li><a href="#pertumbuhan">Pertumbuhan dan peluruhan</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. BARISAN GEOMETRI ============ -->
    <section class="bagian" id="barisan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Barisan geometri</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Barisan geometri</span>
        <p>Barisan yang perbandingan dua suku berurutannya selalu tetap. Perbandingan tetap itu disebut <strong>rasio</strong>, <em>r</em> = U<sub>n</sub> / U<sub>n−1</sub>. Jika barisan aritmetika selalu <em>ditambah</em> bilangan yang sama, barisan geometri selalu <em>dikali</em> bilangan yang sama.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Suku ke-n barisan geometri</div>
        <div class="rumus-isi">
          <math display="block" aria-label="U n sama dengan a dikali r pangkat n dikurangi 1">
            <msub><mi>U</mi><mi>n</mi></msub><mo>=</mo><mi>a</mi><msup><mi>r</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>a</dt><dd>suku pertama, a ≠ 0</dd>
            <dt>r</dt><dd>rasio, r ≠ 0</dd>
            <dt>n</dt><dd>nomor suku</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Barisan 2, 6, 18, 54, … memiliki <em>a</em> = 2 dan <em>r</em> = 6/2 = 3. Suku ke-6: U<sub>6</sub> = 2 × 3<sup>5</sup> = 2 × 243 = <strong>486</strong>.
      </div>

      <p>Suku tengah barisan geometri dengan banyak suku ganjil memenuhi U<sub>t</sub> = √(<em>a</em> × U<sub>n</sub>). Contoh: suku tengah 2, 6, 18, 54, 162 adalah √(2 × 162) = √324 = 18.</p>
    </section>

    <!-- ============ 2. DERET GEOMETRI ============ -->
    <section class="bagian" id="deret">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Deret geometri</h2>
      </div>

      <p>Misalkan S<sub>n</sub> = <em>a</em> + <em>ar</em> + … + <em>ar</em><sup>n−1</sup>. Kalikan kedua ruas dengan <em>r</em>, lalu kurangkan: hampir semua suku saling menghapus, sehingga S<sub>n</sub> − <em>r</em>S<sub>n</sub> = <em>a</em> − <em>ar</em><sup>n</sup>. Dari sini diperoleh rumus berikut.</p>

      <div class="rumus">
        <div class="rumus-judul">Jumlah n suku pertama (r ≠ 1)</div>
        <div class="rumus-isi">
          <math display="block" aria-label="S n sama dengan a dikali r pangkat n dikurangi 1, dibagi r dikurangi 1">
            <msub><mi>S</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>a</mi><mo>(</mo><msup><mi>r</mi><mi>n</mi></msup><mo>−</mo><mn>1</mn><mo>)</mo></mrow><mrow><mi>r</mi><mo>−</mo><mn>1</mn></mrow></mfrac>
            <mspace width="1.5em"/>
            <msub><mi>S</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>a</mi><mo>(</mo><mn>1</mn><mo>−</mo><msup><mi>r</mi><mi>n</mi></msup><mo>)</mo></mrow><mrow><mn>1</mn><mo>−</mo><mi>r</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>bentuk kiri</dt><dd>lebih praktis untuk r &gt; 1</dd>
            <dt>bentuk kanan</dt><dd>lebih praktis untuk r &lt; 1; keduanya bernilai sama</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Jumlah 6 suku pertama 2 + 6 + 18 + …: S<sub>6</sub> = 2(3<sup>6</sup> − 1)/(3 − 1) = 2 × 728 / 2 = <strong>728</strong>.
      </div>
    </section>

    <!-- ============ 3. DERET TAK HINGGA ============ -->
    <section class="bagian" id="tak-hingga">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Deret geometri tak hingga</h2>
      </div>

      <p>Jika −1 &lt; <em>r</em> &lt; 1, suku-sukunya makin lama makin kecil mendekati nol, dan <em>r</em><sup>n</sup> mendekati 0 untuk <em>n</em> yang sangat besar. Akibatnya jumlah tak hingga sukunya menuju suatu bilangan tertentu. Deret seperti ini disebut <strong>konvergen</strong>.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/deret-geometri-tak-hingga.svg" alt="Persegi berluas 1 dipotong setengah berulang kali. Potongan pertama berluas 1/2, lalu 1/4, 1/8, 1/16, dan seterusnya, sehingga seluruh potongan mengisi persegi. Jadi 1/2 + 1/4 + 1/8 + ... sama dengan 1." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Potongan 1/2, 1/4, 1/8, … mengisi satu persegi utuh, sehingga jumlahnya 1.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Jumlah deret geometri tak hingga</div>
        <div class="rumus-isi">
          <math display="block" aria-label="S tak hingga sama dengan a dibagi 1 dikurangi r, dengan negatif 1 kurang dari r kurang dari 1">
            <msub><mi>S</mi><mi>∞</mi></msub><mo>=</mo><mfrac><mi>a</mi><mrow><mn>1</mn><mo>−</mo><mi>r</mi></mrow></mfrac>
            <mspace width="1em"/><mtext>dengan</mtext><mspace width="0.5em"/><mo>−</mo><mn>1</mn><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mn>1</mn>
          </math>
        </div>
      </div>

      <p>Jika <em>r</em> ≤ −1 atau <em>r</em> ≥ 1, suku-sukunya tidak mengecil sehingga jumlahnya tidak terbatas. Deret seperti ini disebut <strong>divergen</strong>.</p>

      <div class="kartu">
        <span class="istilah">Soal</span>
        <p>Bola dijatuhkan dari ketinggian 10 m. Setiap memantul, bola mencapai 3/4 tinggi sebelumnya, terus sampai berhenti. Berapa panjang seluruh lintasan bola?</p>
      </div>
      <ol class="langkah">
        <li>Lintasan turun: 10 + 7,5 + 5,625 + … dengan <em>a</em> = 10 dan <em>r</em> = 3/4, sehingga jumlahnya 10 / (1 − 3/4) = 40 m.</li>
        <li>Lintasan naik: 7,5 + 5,625 + … dengan <em>a</em> = 7,5 dan <em>r</em> = 3/4, sehingga jumlahnya 7,5 / (1/4) = 30 m.</li>
        <li>Panjang lintasan total = 40 + 30 = <strong>70 m</strong>.</li>
      </ol>
    </section>

    <!-- ============ 4. PERTUMBUHAN DAN PELURUHAN ============ -->
    <section class="bagian" id="pertumbuhan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Pertumbuhan dan peluruhan</h2>
      </div>

      <p>Jika suatu besaran berubah dengan <strong>persentase</strong> yang tetap setiap periode, nilainya membentuk barisan geometri. Naik <em>i</em>% berarti dikali (1 + <em>i</em>), dan turun <em>i</em>% berarti dikali (1 − <em>i</em>).</p>

      <div class="rumus">
        <div class="rumus-judul">Pertumbuhan dan peluruhan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="M n sama dengan M nol dikali 1 tambah i pangkat n, dan M n sama dengan M nol dikali 1 kurang i pangkat n">
            <msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><msub><mi>M</mi><mn>0</mn></msub><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mi>i</mi><mo>)</mo></mrow><mi>n</mi></msup>
            <mspace width="1.5em"/>
            <msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><msub><mi>M</mi><mn>0</mn></msub><msup><mrow><mo>(</mo><mn>1</mn><mo>−</mo><mi>i</mi><mo>)</mo></mrow><mi>n</mi></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>M<sub>0</sub></dt><dd>nilai awal</dd>
            <dt>M<sub>n</sub></dt><dd>nilai setelah n periode</dd>
            <dt>i</dt><dd>persentase perubahan per periode, ditulis desimal (2% = 0,02)</dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li><strong>Pertumbuhan penduduk.</strong> Desa berpenduduk 100.000 jiwa tumbuh 2% per tahun. Setelah 3 tahun: 100.000 × 1,02<sup>3</sup> = 106.120,8 ≈ 106.121 jiwa.</li>
        <li><strong>Penyusutan harga.</strong> Mobil seharga Rp200 juta nilainya turun 10% per tahun. Setelah 3 tahun: 200 × 0,9<sup>3</sup> = Rp145,8 juta.</li>
      </ul>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Konsep</th><th>Rumus</th></tr>
          </thead>
          <tbody>
            <tr><td>Rasio</td><td>r = U<sub>n</sub> / U<sub>n−1</sub></td></tr>
            <tr><td>Suku ke-n</td><td>U<sub>n</sub> = a r<sup>n−1</sup></td></tr>
            <tr><td>Jumlah n suku</td><td>S<sub>n</sub> = a(r<sup>n</sup> − 1)/(r − 1)</td></tr>
            <tr><td>Deret tak hingga</td><td>S<sub>∞</sub> = a/(1 − r), syarat −1 &lt; r &lt; 1</td></tr>
            <tr><td>Pertumbuhan / peluruhan</td><td>M<sub>n</sub> = M<sub>0</sub>(1 ± i)<sup>n</sup></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase F, elemen Bilangan (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Barisan dan Deret.
    </footer>
  `,
  formula: "",
  example: ""
};

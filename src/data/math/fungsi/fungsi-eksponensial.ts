/* ====== Bab 106-1 · Fungsi dan Persamaan Eksponensial ====== */

import { Chapter } from '../../materials';

export const fungsiEksponensial: Chapter = {
  chapterId: "106-1",
  title: "Fungsi dan Persamaan Eksponensial",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Aljabar dan Fungsi · Kelas X</span>
      <h1>Fungsi dan Persamaan Eksponensial</h1>
      <p>Rangkuman bentuk dan sifat grafik fungsi eksponensial, cara menyelesaikan persamaan eksponensial berbasis sama, serta pemodelan pertumbuhan dan peluruhan.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#fungsi">Fungsi eksponensial</a></li>
        <li><a href="#grafik">Sifat grafik</a></li>
        <li><a href="#persamaan">Persamaan eksponensial</a></li>
        <li><a href="#model">Pemodelan pertumbuhan dan peluruhan</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. FUNGSI ============ -->
    <section class="bagian" id="fungsi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Fungsi eksponensial</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Fungsi eksponensial</span>
        <p>Fungsi yang variabelnya berada di <strong>pangkat</strong>. Berbeda dengan fungsi kuadrat <em>x</em><sup>2</sup> yang pangkatnya tetap, pada fungsi eksponensial basisnya tetap dan pangkatnya berubah.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Bentuk umum</div>
        <div class="rumus-isi">
          <math display="block" aria-label="f x sama dengan k dikali a pangkat x">
            <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>k</mi><mo>·</mo><msup><mi>a</mi><mi>x</mi></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>a</dt><dd>basis, dengan a &gt; 0 dan a ≠ 1</dd>
            <dt>k</dt><dd>nilai awal, yaitu f(0); k ≠ 0</dd>
            <dt>x</dt><dd>variabel bebas, semua bilangan real</dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>x</th><th>−2</th><th>−1</th><th>0</th><th>1</th><th>2</th><th>3</th></tr>
          </thead>
          <tbody>
            <tr><td>2<sup>x</sup></td><td>1/4</td><td>1/2</td><td>1</td><td>2</td><td>4</td><td>8</td></tr>
            <tr><td>(1/2)<sup>x</sup></td><td>4</td><td>2</td><td>1</td><td>1/2</td><td>1/4</td><td>1/8</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ============ 2. GRAFIK ============ -->
    <section class="bagian" id="grafik">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Sifat grafik</h2>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/grafik-eksponensial.svg" alt="Grafik fungsi eksponensial y = 2 pangkat x yang naik dari kiri ke kanan dan y = (1/2) pangkat x yang turun dari kiri ke kanan. Keduanya melalui titik (0, 1), selalu berada di atas sumbu x, dan makin mendekati sumbu x tanpa pernah menyentuhnya. Grafik y = 2 pangkat x melalui (2, 4), sedangkan y = (1/2) pangkat x melalui (−2, 4); keduanya saling mencerminkan terhadap sumbu y." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Grafik <em>y</em> = 2<sup>x</sup> (naik) dan <em>y</em> = (1/2)<sup>x</sup> (turun).</figcaption>
      </figure>

      <ul class="poin">
        <li>Grafik <em>y</em> = <em>a</em><sup>x</sup> selalu melalui titik <strong>(0, 1)</strong> karena <em>a</em><sup>0</sup> = 1.</li>
        <li>Jika <em>a</em> &gt; 1, grafik <strong>naik</strong> (fungsi pertumbuhan). Jika 0 &lt; <em>a</em> &lt; 1, grafik <strong>turun</strong> (fungsi peluruhan).</li>
        <li>Nilai fungsi selalu positif, sehingga grafik selalu berada di atas sumbu <em>x</em>.</li>
        <li>Sumbu <em>x</em> (garis <em>y</em> = 0) adalah <strong>asimtot datar</strong>: grafik makin mendekatinya tetapi tidak pernah menyentuhnya.</li>
        <li>Grafik <em>y</em> = <em>a</em><sup>x</sup> dan <em>y</em> = (1/<em>a</em>)<sup>x</sup> saling mencerminkan terhadap sumbu <em>y</em>.</li>
      </ul>
    </section>

    <!-- ============ 3. PERSAMAAN ============ -->
    <section class="bagian" id="persamaan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Persamaan eksponensial</h2>
      </div>

      <p>Persamaan eksponensial adalah persamaan yang variabelnya ada di pangkat. Kuncinya: samakan basis di kedua ruas, lalu samakan pangkatnya.</p>

      <div class="rumus">
        <div class="rumus-judul">Sifat basis sama</div>
        <div class="rumus-isi">
          <math display="block" aria-label="jika a pangkat f x sama dengan a pangkat g x, maka f x sama dengan g x">
            <msup><mi>a</mi><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow></msup><mo>=</mo><msup><mi>a</mi><mrow><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow></msup>
            <mspace width="1em"/><mo>⇒</mo><mspace width="1em"/>
            <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>a</dt><dd>basis yang sama, a &gt; 0 dan a ≠ 1</dd>
          </dl>
        </div>
      </div>

      <div class="kartu">
        <span class="istilah">Contoh 1</span>
        <p>2<sup>x+1</sup> = 32 ⇒ 2<sup>x+1</sup> = 2<sup>5</sup> ⇒ <em>x</em> + 1 = 5 ⇒ <strong><em>x</em> = 4</strong>.</p>
      </div>

      <div class="kartu">
        <span class="istilah">Contoh 2</span>
        <p>9<sup>x−1</sup> = 27<sup>x</sup> ⇒ (3<sup>2</sup>)<sup>x−1</sup> = (3<sup>3</sup>)<sup>x</sup> ⇒ 3<sup>2x−2</sup> = 3<sup>3x</sup> ⇒ 2<em>x</em> − 2 = 3<em>x</em> ⇒ <strong><em>x</em> = −2</strong>.</p>
      </div>

      <div class="kartu">
        <span class="istilah">Contoh 3 (bentuk kuadrat)</span>
        <p>4<sup>x</sup> − 6 · 2<sup>x</sup> + 8 = 0. Karena 4<sup>x</sup> = (2<sup>x</sup>)<sup>2</sup>, misalkan <em>p</em> = 2<sup>x</sup>: <em>p</em><sup>2</sup> − 6<em>p</em> + 8 = 0 ⇒ (<em>p</em> − 2)(<em>p</em> − 4) = 0. Jadi 2<sup>x</sup> = 2 atau 2<sup>x</sup> = 4, sehingga <strong><em>x</em> = 1 atau <em>x</em> = 2</strong>.</p>
      </div>

      <div class="catatan">
        <strong class="judul">Bentuk khusus</strong>
        <em>a</em><sup>f(x)</sup> = 1 berarti <em>f</em>(<em>x</em>) = 0, karena <em>a</em><sup>0</sup> = 1. Jika basisnya tidak dapat disamakan, misalnya 2<sup>x</sup> = 5, gunakan logaritma: <em>x</em> = <sup>2</sup>log 5.
      </div>
    </section>

    <!-- ============ 4. MODEL ============ -->
    <section class="bagian" id="model">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Pemodelan pertumbuhan dan peluruhan</h2>
      </div>

      <p>Fungsi eksponensial cocok untuk besaran yang berlipat ganda atau menyusut <strong>dengan faktor yang sama</strong> dalam selang waktu yang sama.</p>

      <div class="rumus">
        <div class="rumus-judul">Lipat dua dan waktu paruh</div>
        <div class="rumus-isi">
          <math display="block" aria-label="N t sama dengan N nol dikali 2 pangkat t per T, dan M t sama dengan M nol dikali setengah pangkat t per T">
            <mi>N</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><msub><mi>N</mi><mn>0</mn></msub><mo>·</mo><msup><mn>2</mn><mfrac><mi>t</mi><mi>T</mi></mfrac></msup>
            <mspace width="1.5em"/>
            <mi>M</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><msub><mi>M</mi><mn>0</mn></msub><mo>·</mo><msup><mrow><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>)</mo></mrow><mfrac><mi>t</mi><mi>T</mi></mfrac></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>N<sub>0</sub>, M<sub>0</sub></dt><dd>jumlah awal</dd>
            <dt>T</dt><dd>waktu lipat dua (pertumbuhan) atau waktu paruh (peluruhan)</dd>
            <dt>t</dt><dd>waktu yang telah berlalu, dalam satuan yang sama dengan T</dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li><strong>Bakteri.</strong> 500 bakteri membelah diri setiap 20 menit. Setelah 2 jam (120 menit): <em>N</em> = 500 × 2<sup>120/20</sup> = 500 × 2<sup>6</sup> = <strong>32.000 bakteri</strong>.</li>
        <li><strong>Zat radioaktif.</strong> 80 gram zat dengan waktu paruh 5 hari. Setelah 15 hari: <em>M</em> = 80 × (1/2)<sup>15/5</sup> = 80 × 1/8 = <strong>10 gram</strong>.</li>
      </ul>
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
            <tr><td>Fungsi eksponensial</td><td>f(x) = k · a<sup>x</sup>, a &gt; 0, a ≠ 1</td></tr>
            <tr><td>Grafik</td><td>melalui (0, k); asimtot y = 0; naik jika a &gt; 1, turun jika 0 &lt; a &lt; 1</td></tr>
            <tr><td>Persamaan basis sama</td><td>a<sup>f(x)</sup> = a<sup>g(x)</sup> ⇒ f(x) = g(x)</td></tr>
            <tr><td>Pertumbuhan / peluruhan</td><td>N<sub>0</sub> · 2<sup>t/T</sup> dan M<sub>0</sub> · (1/2)<sup>t/T</sup></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase E, elemen Aljabar dan Fungsi: persamaan dan fungsi eksponensial dengan bilangan pokok yang sama (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Eksponen dan Logaritma.
    </footer>
  `,
  formula: "",
  example: ""
};

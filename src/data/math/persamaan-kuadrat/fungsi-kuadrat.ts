/* ====== Bab 102-2 · Fungsi Kuadrat ====== */

import { Chapter } from '../../materials';

export const fungsiKuadrat: Chapter = {
  chapterId: "102-2",
  title: "Fungsi Kuadrat",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Aljabar dan Fungsi · Kelas X</span>
      <h1>Fungsi Kuadrat</h1>
      <p>Rangkuman grafik fungsi kuadrat: titik potong sumbu, sumbu simetri, titik puncak, pengaruh nilai a, b, c, cara menyusun fungsi kuadrat, dan penerapannya pada masalah nilai maksimum dan minimum.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian fungsi kuadrat</a></li>
        <li><a href="#unsur">Unsur-unsur grafik</a></li>
        <li><a href="#menggambar">Langkah menggambar grafik</a></li>
        <li><a href="#pengaruh">Pengaruh nilai a dan D</a></li>
        <li><a href="#menyusun">Menyusun fungsi kuadrat</a></li>
        <li><a href="#optimasi">Masalah nilai maksimum dan minimum</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian fungsi kuadrat</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Fungsi kuadrat</span>
        <p>Fungsi berbentuk <em>f</em>(<em>x</em>) = <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em> dengan <em>a</em> ≠ 0. Grafiknya berupa kurva melengkung yang simetris, disebut <strong>parabola</strong>.</p>
      </div>

      <p>Persamaan kuadrat <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em> = 0 adalah kasus khusus fungsi kuadrat ketika <em>f</em>(<em>x</em>) = 0. Artinya, akar persamaan kuadrat adalah titik potong grafik fungsi kuadrat dengan sumbu <em>x</em>.</p>
    </section>

    <!-- ============ 2. UNSUR GRAFIK ============ -->
    <section class="bagian" id="unsur">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Unsur-unsur grafik</h2>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/grafik-fungsi-kuadrat.svg" alt="Grafik fungsi kuadrat y = x² − 4x + 3 berupa parabola terbuka ke atas. Parabola memotong sumbu x di (1, 0) dan (3, 0), memotong sumbu y di (0, 3), dan mempunyai titik puncak (2, −1). Garis putus-putus vertikal x = 2 adalah sumbu simetrinya." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Grafik <em>y</em> = <em>x</em><sup>2</sup> − 4<em>x</em> + 3 beserta unsur-unsurnya.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Sumbu simetri dan titik puncak</div>
        <div class="rumus-isi">
          <math display="block" aria-label="sumbu simetri x p sama dengan negatif b per 2 a">
            <msub><mi>x</mi><mi>p</mi></msub><mo>=</mo><mo>−</mo><mfrac><mi>b</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="titik puncak sama dengan negatif b per 2 a, koma, negatif D per 4 a">
            <mtext>Puncak</mtext><mo>=</mo><mrow><mo>(</mo><mo>−</mo><mfrac><mi>b</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>,</mo><mspace width="0.4em"/><mo>−</mo><mfrac><mi>D</mi><mrow><mn>4</mn><mi>a</mi></mrow></mfrac><mo>)</mo></mrow>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>x<sub>p</sub></dt><dd>absis titik puncak, juga persamaan sumbu simetri</dd>
            <dt>D</dt><dd>diskriminan, D = b² − 4ac</dd>
            <dt>y<sub>p</sub></dt><dd>nilai maksimum atau minimum fungsi; dapat juga dihitung dengan f(x<sub>p</sub>)</dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Unsur</th><th>Cara menentukan</th><th>Pada y = x² − 4x + 3</th></tr>
          </thead>
          <tbody>
            <tr><td>Titik potong sumbu y</td><td>x = 0, diperoleh (0, c)</td><td>(0, 3)</td></tr>
            <tr><td>Titik potong sumbu x</td><td>y = 0, selesaikan persamaan kuadratnya</td><td>(x − 1)(x − 3) = 0: (1, 0) dan (3, 0)</td></tr>
            <tr><td>Sumbu simetri</td><td>x = −b/2a</td><td>x = 4/2 = 2</td></tr>
            <tr><td>Titik puncak</td><td>(−b/2a, −D/4a)</td><td>D = 16 − 12 = 4, puncak (2, −1)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ============ 3. MENGGAMBAR ============ -->
    <section class="bagian" id="menggambar">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Langkah menggambar grafik</h2>
      </div>

      <ol class="langkah">
        <li>Tentukan arah parabola dari tanda <em>a</em>.</li>
        <li>Tentukan titik potong dengan sumbu <em>y</em> dan sumbu <em>x</em> (jika ada).</li>
        <li>Tentukan sumbu simetri dan titik puncak.</li>
        <li>Jika perlu, tambahkan beberapa titik bantu. Titik yang simetris terhadap sumbu simetri memiliki nilai <em>y</em> yang sama, misalnya (0, 3) dan (4, 3).</li>
        <li>Hubungkan titik-titik dengan kurva mulus, bukan garis patah.</li>
      </ol>
    </section>

    <!-- ============ 4. PENGARUH ============ -->
    <section class="bagian" id="pengaruh">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Pengaruh nilai a dan D</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>a &gt; 0</h3>
          <p>Parabola terbuka ke <strong>atas</strong>. Titik puncaknya titik terendah, sehingga fungsi memiliki nilai <strong>minimum</strong>.</p>
        </div>
        <div class="kartu">
          <h3>a &lt; 0</h3>
          <p>Parabola terbuka ke <strong>bawah</strong>. Titik puncaknya titik tertinggi, sehingga fungsi memiliki nilai <strong>maksimum</strong>.</p>
        </div>
      </div>

      <ul class="poin">
        <li>Makin besar nilai |<em>a</em>|, parabola makin ramping.</li>
        <li><em>c</em> menentukan titik potong dengan sumbu <em>y</em>.</li>
        <li><strong>Definit positif</strong>: <em>a</em> &gt; 0 dan D &lt; 0. Grafik selalu di atas sumbu <em>x</em>, sehingga <em>f</em>(<em>x</em>) &gt; 0 untuk semua <em>x</em>.</li>
        <li><strong>Definit negatif</strong>: <em>a</em> &lt; 0 dan D &lt; 0. Grafik selalu di bawah sumbu <em>x</em>.</li>
      </ul>
    </section>

    <!-- ============ 5. MENYUSUN ============ -->
    <section class="bagian" id="menyusun">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Menyusun fungsi kuadrat</h2>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Yang diketahui</th><th>Bentuk fungsi</th></tr>
          </thead>
          <tbody>
            <tr><td>Titik puncak (p, q) dan satu titik lain</td><td>y = a(x − p)² + q</td></tr>
            <tr><td>Titik potong sumbu x (x<sub>1</sub>, 0), (x<sub>2</sub>, 0) dan satu titik lain</td><td>y = a(x − x<sub>1</sub>)(x − x<sub>2</sub>)</td></tr>
            <tr><td>Tiga titik sembarang</td><td>y = ax² + bx + c, selesaikan sistem tiga persamaan</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Parabola berpuncak di (1, 4) dan melalui (0, 3). Dari <em>y</em> = <em>a</em>(<em>x</em> − 1)<sup>2</sup> + 4, substitusi (0, 3) memberi 3 = <em>a</em> + 4, sehingga <em>a</em> = −1. Jadi <em>y</em> = −(<em>x</em> − 1)<sup>2</sup> + 4 = <strong>−<em>x</em><sup>2</sup> + 2<em>x</em> + 3</strong>.
      </div>
    </section>

    <!-- ============ 6. OPTIMASI ============ -->
    <section class="bagian" id="optimasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Masalah nilai maksimum dan minimum</h2>
      </div>

      <p>Titik puncak memberi nilai terbesar atau terkecil suatu besaran. Langkahnya: nyatakan besaran itu sebagai fungsi kuadrat, lalu hitung titik puncaknya.</p>

      <div class="kartu">
        <span class="istilah">Soal 1</span>
        <p>Bola dilempar vertikal ke atas. Tingginya setelah <em>t</em> detik adalah <em>h</em>(<em>t</em>) = 20<em>t</em> − 5<em>t</em><sup>2</sup> meter. Kapan bola mencapai tinggi maksimum, dan berapa tingginya?</p>
      </div>
      <ol class="langkah">
        <li><em>a</em> = −5 &lt; 0, jadi ada nilai maksimum.</li>
        <li><em>t</em> = −<em>b</em>/2<em>a</em> = −20/(−10) = <strong>2 detik</strong>.</li>
        <li><em>h</em>(2) = 40 − 20 = <strong>20 meter</strong>.</li>
      </ol>

      <div class="kartu">
        <span class="istilah">Soal 2</span>
        <p>Pagar sepanjang 40 m dipakai untuk memagari kebun berbentuk persegi panjang. Berapa luas kebun terbesar?</p>
      </div>
      <ol class="langkah">
        <li>Jika panjang <em>x</em> m, lebarnya (40 − 2<em>x</em>)/2 = 20 − <em>x</em> m.</li>
        <li>Luas <em>L</em>(<em>x</em>) = <em>x</em>(20 − <em>x</em>) = −<em>x</em><sup>2</sup> + 20<em>x</em>, maksimum di <em>x</em> = −20/(−2) = 10.</li>
        <li>Luas terbesar <em>L</em>(10) = 10 × 10 = <strong>100 m²</strong>, yaitu ketika kebun berbentuk persegi.</li>
      </ol>
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
            <tr><td>Fungsi kuadrat</td><td>f(x) = ax² + bx + c, grafik parabola</td></tr>
            <tr><td>Arah</td><td>a &gt; 0 terbuka ke atas (minimum); a &lt; 0 ke bawah (maksimum)</td></tr>
            <tr><td>Sumbu simetri</td><td>x = −b/2a</td></tr>
            <tr><td>Titik puncak</td><td>(−b/2a, −D/4a)</td></tr>
            <tr><td>Bentuk puncak</td><td>y = a(x − p)² + q</td></tr>
            <tr><td>Bentuk akar</td><td>y = a(x − x<sub>1</sub>)(x − x<sub>2</sub>)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase E, elemen Aljabar dan Fungsi (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Fungsi Kuadrat.
    </footer>
  `,
  formula: "",
  example: ""
};

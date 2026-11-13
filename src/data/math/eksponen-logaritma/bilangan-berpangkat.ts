/* ====== Bab 104-1 · Bilangan Berpangkat dan Bentuk Akar ====== */

import { Chapter } from '../../materials';

export const bilanganBerpangkat: Chapter = {
  chapterId: "104-1",
  title: "Bilangan Berpangkat dan Bentuk Akar",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Bilangan · Kelas X</span>
      <h1>Bilangan Berpangkat dan Bentuk Akar</h1>
      <p>Rangkuman pengertian dan sifat-sifat bilangan berpangkat, pangkat nol dan negatif, pangkat pecahan, operasi bentuk akar, serta notasi ilmiah.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian bilangan berpangkat</a></li>
        <li><a href="#sifat">Sifat-sifat bilangan berpangkat</a></li>
        <li><a href="#pangkat-pecahan">Pangkat pecahan dan bentuk akar</a></li>
        <li><a href="#operasi-akar">Operasi bentuk akar</a></li>
        <li><a href="#notasi-ilmiah">Notasi ilmiah</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian bilangan berpangkat</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Bilangan berpangkat</span>
        <p>Bilangan berpangkat adalah perkalian berulang dari bilangan yang sama. Bilangan <em>a</em> yang dikalikan dengan dirinya sendiri sebanyak <em>n</em> kali ditulis <em>a</em><sup><em>n</em></sup>.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Definisi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a pangkat n sama dengan a kali a kali sampai a, sebanyak n faktor">
            <msup><mi>a</mi><mi>n</mi></msup><mo>=</mo>
            <mi>a</mi><mo>×</mo><mi>a</mi><mo>×</mo><mo>⋯</mo><mo>×</mo><mi>a</mi><mspace width="0.6em"/><mtext>(</mtext><mi>n</mi><mtext> faktor)</mtext>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>a</dt><dd>bilangan pokok (basis)</dd>
            <dt>n</dt><dd>pangkat (eksponen), bilangan bulat positif</dd>
          </dl>
        </div>
      </div>

      <p>Contoh: 2<sup>5</sup> = 2 × 2 × 2 × 2 × 2 = 32, dan (−3)<sup>3</sup> = (−3) × (−3) × (−3) = −27.</p>

      <div class="catatan">
        <strong class="judul">Perhatikan tanda kurung</strong>
        (−2)<sup>4</sup> = 16 karena yang dipangkatkan adalah −2. Sebaliknya, −2<sup>4</sup> = −(2<sup>4</sup>) = −16 karena yang dipangkatkan hanya 2.
      </div>
    </section>

    <!-- ============ 2. SIFAT ============ -->
    <section class="bagian" id="sifat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Sifat-sifat bilangan berpangkat</h2>
      </div>

      <p>Untuk <em>a</em>, <em>b</em> bilangan real tidak nol dan <em>m</em>, <em>n</em> bilangan bulat, berlaku sifat-sifat berikut. Semua sifat ini berasal dari definisi perkalian berulang.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Sifat</th><th>Bentuk umum</th><th>Contoh</th></tr>
          </thead>
          <tbody>
            <tr><td>Perkalian, basis sama</td><td><em>a</em><sup>m</sup> × <em>a</em><sup>n</sup> = <em>a</em><sup>m+n</sup></td><td>2<sup>3</sup> × 2<sup>4</sup> = 2<sup>7</sup></td></tr>
            <tr><td>Pembagian, basis sama</td><td><em>a</em><sup>m</sup> : <em>a</em><sup>n</sup> = <em>a</em><sup>m−n</sup></td><td>5<sup>6</sup> : 5<sup>2</sup> = 5<sup>4</sup></td></tr>
            <tr><td>Pangkat dari pangkat</td><td>(<em>a</em><sup>m</sup>)<sup>n</sup> = <em>a</em><sup>m×n</sup></td><td>(3<sup>2</sup>)<sup>3</sup> = 3<sup>6</sup></td></tr>
            <tr><td>Pangkat dari perkalian</td><td>(<em>ab</em>)<sup>n</sup> = <em>a</em><sup>n</sup><em>b</em><sup>n</sup></td><td>(2<em>x</em>)<sup>3</sup> = 8<em>x</em><sup>3</sup></td></tr>
            <tr><td>Pangkat dari pembagian</td><td>(<em>a</em>/<em>b</em>)<sup>n</sup> = <em>a</em><sup>n</sup>/<em>b</em><sup>n</sup></td><td>(2/3)<sup>2</sup> = 4/9</td></tr>
            <tr><td>Pangkat nol</td><td><em>a</em><sup>0</sup> = 1</td><td>7<sup>0</sup> = 1</td></tr>
            <tr><td>Pangkat negatif</td><td><em>a</em><sup>−n</sup> = 1/<em>a</em><sup>n</sup></td><td>2<sup>−3</sup> = 1/8</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Mengapa a<sup>0</sup> = 1?</strong>
        Dari sifat pembagian, <em>a</em><sup>n</sup> : <em>a</em><sup>n</sup> = <em>a</em><sup>n−n</sup> = <em>a</em><sup>0</sup>. Padahal bilangan tidak nol yang dibagi dirinya sendiri hasilnya 1. Jadi <em>a</em><sup>0</sup> = 1. Dengan cara yang sama, <em>a</em><sup>0</sup> : <em>a</em><sup>n</sup> = <em>a</em><sup>−n</sup>, sehingga <em>a</em><sup>−n</sup> = 1/<em>a</em><sup>n</sup>. Bentuk 0<sup>0</sup> tidak didefinisikan.
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Sederhanakan (2<em>a</em><sup>3</sup><em>b</em><sup>−2</sup>)<sup>2</sup> × <em>a</em><sup>−4</sup><em>b</em><sup>5</sup>.<br>
        (2<em>a</em><sup>3</sup><em>b</em><sup>−2</sup>)<sup>2</sup> = 4<em>a</em><sup>6</sup><em>b</em><sup>−4</sup>, lalu 4<em>a</em><sup>6</sup><em>b</em><sup>−4</sup> × <em>a</em><sup>−4</sup><em>b</em><sup>5</sup> = 4<em>a</em><sup>6−4</sup><em>b</em><sup>−4+5</sup> = <strong>4<em>a</em><sup>2</sup><em>b</em></strong>.
      </div>
    </section>

    <!-- ============ 3. PANGKAT PECAHAN ============ -->
    <section class="bagian" id="pangkat-pecahan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Pangkat pecahan dan bentuk akar</h2>
      </div>

      <p>Pangkat pecahan menghubungkan bilangan berpangkat dengan <strong>akar</strong>. Karena (<em>a</em><sup>1/n</sup>)<sup>n</sup> = <em>a</em><sup>1</sup> = <em>a</em>, bilangan <em>a</em><sup>1/n</sup> adalah bilangan yang jika dipangkatkan <em>n</em> hasilnya <em>a</em>, yaitu akar pangkat <em>n</em> dari <em>a</em>.</p>

      <div class="rumus">
        <div class="rumus-judul">Pangkat pecahan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a pangkat 1 per n sama dengan akar pangkat n dari a">
            <msup><mi>a</mi><mfrac><mn>1</mn><mi>n</mi></mfrac></msup><mo>=</mo><mroot><mi>a</mi><mi>n</mi></mroot>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="a pangkat m per n sama dengan akar pangkat n dari a pangkat m, sama dengan akar pangkat n dari a, dipangkatkan m">
            <msup><mi>a</mi><mfrac><mi>m</mi><mi>n</mi></mfrac></msup><mo>=</mo><mroot><msup><mi>a</mi><mi>m</mi></msup><mi>n</mi></mroot><mo>=</mo><msup><mrow><mo>(</mo><mroot><mi>a</mi><mi>n</mi></mroot><mo>)</mo></mrow><mi>m</mi></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>n</dt><dd>indeks akar, bilangan bulat ≥ 2</dd>
            <dt>m</dt><dd>pangkat, bilangan bulat</dd>
            <dt>a</dt><dd>bilangan yang diakarkan; untuk <em>n</em> genap harus <em>a</em> ≥ 0</dd>
          </dl>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/pangkat-pecahan.svg" alt="Tiga tahap menghitung 8 pangkat dua per tiga. Kubus bervolume 8 tersusun dari 2 kali 2 kali 2 kubus satuan. Akar pangkat tiga dari 8 adalah rusuknya, yaitu 2. Rusuk 2 dikuadratkan menjadi persegi berluas 4. Jadi 8 pangkat dua per tiga sama dengan 4." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Menghitung 8<sup>2/3</sup>: ambil akar pangkat tiganya dulu, lalu kuadratkan.</figcaption>
      </figure>

      <p>Pada praktiknya, ambil akarnya lebih dulu agar angkanya kecil:</p>
      <ul class="poin">
        <li>16<sup>3/4</sup> = (<sup>4</sup>√16)<sup>3</sup> = 2<sup>3</sup> = 8</li>
        <li>27<sup>−1/3</sup> = 1 / 27<sup>1/3</sup> = 1/3</li>
        <li>√<em>x</em> × <sup>3</sup>√<em>x</em> = <em>x</em><sup>1/2</sup> × <em>x</em><sup>1/3</sup> = <em>x</em><sup>5/6</sup></li>
      </ul>
    </section>

    <!-- ============ 4. OPERASI BENTUK AKAR ============ -->
    <section class="bagian" id="operasi-akar">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Operasi bentuk akar</h2>
      </div>

      <p><strong>Bentuk akar</strong> adalah akar dari bilangan yang hasilnya bukan bilangan rasional, misalnya √2, √3, dan <sup>3</sup>√5. Sebaliknya, √9 = 3 bukan bentuk akar.</p>

      <div class="sub">
        <h3><span class="no">4.1</span>Menyederhanakan</h3>
        <p>Gunakan sifat √(<em>ab</em>) = √<em>a</em> × √<em>b</em> dengan memilih <em>a</em> bilangan kuadrat terbesar. Contoh: √12 = √(4 × 3) = 2√3 dan √72 = √(36 × 2) = 6√2.</p>
      </div>

      <div class="sub">
        <h3><span class="no">4.2</span>Penjumlahan dan pengurangan</h3>
        <p>Hanya bentuk akar <strong>sejenis</strong> (bilangan di dalam akarnya sama) yang dapat dijumlahkan: <em>p</em>√<em>a</em> + <em>q</em>√<em>a</em> = (<em>p</em> + <em>q</em>)√<em>a</em>. Contoh: √12 + √27 = 2√3 + 3√3 = 5√3. Bentuk √2 + √3 tidak dapat disederhanakan lagi.</p>
      </div>

      <div class="sub">
        <h3><span class="no">4.3</span>Merasionalkan penyebut</h3>
        <p>Pecahan dengan penyebut bentuk akar diubah agar penyebutnya rasional, dengan mengalikan pembilang dan penyebut dengan bilangan yang sama.</p>

        <div class="rumus">
          <div class="rumus-judul">Merasionalkan penyebut</div>
          <div class="rumus-isi">
            <math display="block" aria-label="a per akar b sama dengan a akar b per b">
              <mfrac><mi>a</mi><msqrt><mi>b</mi></msqrt></mfrac><mo>=</mo><mfrac><mi>a</mi><msqrt><mi>b</mi></msqrt></mfrac><mo>×</mo><mfrac><msqrt><mi>b</mi></msqrt><msqrt><mi>b</mi></msqrt></mfrac><mo>=</mo><mfrac><mrow><mi>a</mi><msqrt><mi>b</mi></msqrt></mrow><mi>b</mi></mfrac>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="c per a tambah akar b sama dengan c dikali a kurang akar b, per a kuadrat kurang b">
              <mfrac><mi>c</mi><mrow><mi>a</mi><mo>+</mo><msqrt><mi>b</mi></msqrt></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>c</mi><mo>(</mo><mi>a</mi><mo>−</mo><msqrt><mi>b</mi></msqrt><mo>)</mo></mrow><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mi>b</mi></mrow></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>a − √b</dt><dd>bentuk <strong>sekawan</strong> dari a + √b; hasil kali keduanya (a + √b)(a − √b) = a² − b selalu rasional</dd>
            </dl>
          </div>
        </div>

        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          6/√3 = 6√3/3 = 2√3.<br>
          4/(3 − √5) = 4(3 + √5)/(9 − 5) = 4(3 + √5)/4 = <strong>3 + √5</strong>.
        </div>
      </div>
    </section>

    <!-- ============ 5. NOTASI ILMIAH ============ -->
    <section class="bagian" id="notasi-ilmiah">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Notasi ilmiah</h2>
      </div>

      <p>Bilangan yang sangat besar atau sangat kecil lebih mudah ditulis dalam <strong>notasi ilmiah</strong>, yaitu <em>a</em> × 10<sup>n</sup> dengan 1 ≤ <em>a</em> &lt; 10 dan <em>n</em> bilangan bulat.</p>
      <ul class="poin">
        <li>Jarak Bumi ke Matahari ≈ 150.000.000 km = 1,5 × 10<sup>8</sup> km.</li>
        <li>Diameter sel darah merah ≈ 0,000008 m = 8 × 10<sup>−6</sup> m.</li>
        <li>Perkalian menjadi mudah: (3 × 10<sup>4</sup>) × (5 × 10<sup>−7</sup>) = 15 × 10<sup>−3</sup> = 1,5 × 10<sup>−2</sup>.</li>
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
            <tr><td>Perkalian dan pembagian</td><td><em>a</em><sup>m</sup> × <em>a</em><sup>n</sup> = <em>a</em><sup>m+n</sup>; <em>a</em><sup>m</sup> : <em>a</em><sup>n</sup> = <em>a</em><sup>m−n</sup></td></tr>
            <tr><td>Pangkat dari pangkat</td><td>(<em>a</em><sup>m</sup>)<sup>n</sup> = <em>a</em><sup>mn</sup></td></tr>
            <tr><td>Pangkat nol dan negatif</td><td><em>a</em><sup>0</sup> = 1; <em>a</em><sup>−n</sup> = 1/<em>a</em><sup>n</sup></td></tr>
            <tr><td>Pangkat pecahan</td><td><em>a</em><sup>m/n</sup> = (<sup>n</sup>√<em>a</em>)<sup>m</sup></td></tr>
            <tr><td>Merasionalkan</td><td>kalikan dengan √<em>b</em>/√<em>b</em> atau dengan bentuk sekawan</td></tr>
            <tr><td>Notasi ilmiah</td><td><em>a</em> × 10<sup>n</sup>, dengan 1 ≤ <em>a</em> &lt; 10</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase E, elemen Bilangan (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Eksponen dan Logaritma.
    </footer>
  `,
  formula: "",
  example: ""
};

/* ====== Bab 110-2 · Determinan, Invers, dan Sistem Persamaan Linear ====== */

import { Chapter } from '../../materials';

export const determinanInvers: Chapter = {
  chapterId: "110-2",
  title: "Determinan, Invers, dan SPL",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika Tingkat Lanjut · Aljabar dan Fungsi · Kelas XI</span>
      <h1>Determinan, Invers, dan Sistem Persamaan Linear</h1>
      <p>Rangkuman determinan matriks 2 × 2 dan 3 × 3, sifat-sifat determinan, invers matriks 2 × 2, persamaan matriks, dan penyelesaian sistem persamaan linear dengan invers maupun aturan Cramer.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#determinan">Determinan</a></li>
        <li><a href="#sifat">Sifat-sifat determinan</a></li>
        <li><a href="#invers">Invers matriks 2 × 2</a></li>
        <li><a href="#persamaan">Persamaan matriks</a></li>
        <li><a href="#spl">Menyelesaikan SPL dengan matriks</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. DETERMINAN ============ -->
    <section class="bagian" id="determinan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Determinan</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Determinan</span>
        <p>Bilangan yang dihitung dari elemen-elemen <strong>matriks persegi</strong>, ditulis det A atau |A|. Determinan menentukan apakah matriks memiliki invers, dan nilai mutlaknya menyatakan faktor perubahan luas pada transformasi geometri.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Determinan matriks 2 × 2</div>
        <div class="rumus-isi">
          <math display="block" aria-label="jika A sama dengan matriks a, b; c, d, maka determinan A sama dengan a d dikurangi b c">
            <mi>A</mi><mo>=</mo><mrow><mo>[</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr><mtr><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable><mo>]</mo></mrow>
            <mspace width="1em"/><mo>⇒</mo><mspace width="1em"/>
            <mi>det</mi><mi>A</mi><mo>=</mo><mi>a</mi><mi>d</mi><mo>−</mo><mi>b</mi><mi>c</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>ad</dt><dd>hasil kali elemen diagonal utama</dd>
            <dt>bc</dt><dd>hasil kali elemen diagonal samping</dd>
          </dl>
        </div>
      </div>

      <p>Contoh: det <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>3</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>5</mn></mtd><mtd><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = 3 · 2 − 1 · 5 = 1, dan det <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>4</mn></mtd><mtd><mn>6</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mn>3</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = 12 − 12 = 0.</p>

      <div class="sub">
        <h3><span class="no">1.1</span>Determinan 3 × 3 dengan aturan Sarrus</h3>
        <ol class="langkah">
          <li>Tulis ulang dua kolom pertama di sebelah kanan matriks.</li>
          <li>Jumlahkan hasil kali tiga diagonal yang turun ke kanan.</li>
          <li>Kurangi dengan jumlah hasil kali tiga diagonal yang naik ke kanan.</li>
        </ol>
        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          A = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd><mtd><mn>4</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>2</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>.<br>
          Diagonal turun: 2·(−1)·0 + 1·4·1 + 3·0·2 = 0 + 4 + 0 = 4.<br>
          Diagonal naik: 3·(−1)·1 + 2·4·2 + 1·0·0 = −3 + 16 + 0 = 13.<br>
          det A = 4 − 13 = <strong>−9</strong>.
        </div>
        <p>Aturan Sarrus hanya berlaku untuk matriks 3 × 3. Untuk ordo yang lebih besar dipakai ekspansi kofaktor.</p>
      </div>
    </section>

    <!-- ============ 2. SIFAT ============ -->
    <section class="bagian" id="sifat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Sifat-sifat determinan</h2>
      </div>

      <p>Untuk matriks persegi A dan B berordo <em>n</em> × <em>n</em> dan bilangan <em>k</em>:</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Sifat</th><th>Rumus</th></tr>
          </thead>
          <tbody>
            <tr><td>Hasil kali</td><td>det(AB) = det A × det B</td></tr>
            <tr><td>Transpose</td><td>det(A<sup>T</sup>) = det A</td></tr>
            <tr><td>Perkalian skalar</td><td>det(kA) = k<sup>n</sup> det A</td></tr>
            <tr><td>Invers</td><td>det(A<sup>−1</sup>) = 1 / det A</td></tr>
            <tr><td>Baris nol atau dua baris sama</td><td>det A = 0</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan">
        <strong class="judul">det(kA) bukan k · det A</strong>
        Setiap baris ikut dikali <em>k</em>, jadi untuk matriks 2 × 2 berlaku det(3A) = 3<sup>2</sup> det A = 9 det A.
      </div>
    </section>

    <!-- ============ 3. INVERS ============ -->
    <section class="bagian" id="invers">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Invers matriks 2 × 2</h2>
      </div>

      <p>Invers matriks A adalah matriks A<sup>−1</sup> yang memenuhi AA<sup>−1</sup> = A<sup>−1</sup>A = I. Invers berperan seperti kebalikan bilangan (1/<em>a</em>), karena tidak ada operasi pembagian matriks.</p>

      <div class="rumus">
        <div class="rumus-judul">Invers matriks 2 × 2</div>
        <div class="rumus-isi">
          <math display="block" aria-label="A invers sama dengan 1 per a d dikurangi b c, dikali matriks d, negatif b; negatif c, a">
            <msup><mi>A</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mi>a</mi><mi>d</mi><mo>−</mo><mi>b</mi><mi>c</mi></mrow></mfrac>
            <mrow><mo>[</mo><mtable><mtr><mtd><mi>d</mi></mtd><mtd><mo>−</mo><mi>b</mi></mtd></mtr><mtr><mtd><mo>−</mo><mi>c</mi></mtd><mtd><mi>a</mi></mtd></mtr></mtable><mo>]</mo></mrow>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>syarat</dt><dd>det A = ad − bc ≠ 0</dd>
            <dt>cara ingat</dt><dd>tukar letak a dan d, ubah tanda b dan c, lalu bagi dengan determinan</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        A = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>3</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>5</mn></mtd><mtd><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> dengan det A = 1. Maka A<sup>−1</sup> = (1/1)<math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd><mo>−</mo><mn>5</mn></mtd><mtd><mn>3</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = <strong><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd><mo>−</mo><mn>5</mn></mtd><mtd><mn>3</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></strong>.<br>
        Cek: AA<sup>−1</sup> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>3</mn><mo>·</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo>·</mo><mo>(</mo><mo>−</mo><mn>5</mn><mo>)</mo></mtd><mtd><mn>3</mn><mo>·</mo><mo>(</mo><mo>−</mo><mn>1</mn><mo>)</mo><mo>+</mo><mn>1</mn><mo>·</mo><mn>3</mn></mtd></mtr><mtr><mtd><mn>5</mn><mo>·</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>·</mo><mo>(</mo><mo>−</mo><mn>5</mn><mo>)</mo></mtd><mtd><mn>5</mn><mo>·</mo><mo>(</mo><mo>−</mo><mn>1</mn><mo>)</mo><mo>+</mo><mn>2</mn><mo>·</mo><mn>3</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = I.
      </div>

      <p>Matriks dengan determinan 0 disebut <strong>matriks singular</strong> dan tidak memiliki invers, misalnya <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>4</mn></mtd><mtd><mn>6</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mn>3</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>. Matriks dengan determinan tidak nol disebut <strong>nonsingular</strong>. Sifat invers yang berguna: (AB)<sup>−1</sup> = B<sup>−1</sup>A<sup>−1</sup>.</p>
    </section>

    <!-- ============ 4. PERSAMAAN MATRIKS ============ -->
    <section class="bagian" id="persamaan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Persamaan matriks</h2>
      </div>

      <p>Karena perkalian matriks tidak komutatif, posisi invers harus mengikuti posisi A.</p>

      <div class="rumus">
        <div class="rumus-judul">Penyelesaian persamaan matriks</div>
        <div class="rumus-isi">
          <math display="block" aria-label="A X sama dengan B maka X sama dengan A invers B; X A sama dengan B maka X sama dengan B A invers">
            <mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi><mo>⇒</mo><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mi>B</mi>
            <mspace width="1.5em"/>
            <mi>X</mi><mi>A</mi><mo>=</mo><mi>B</mi><mo>⇒</mo><mi>X</mi><mo>=</mo><mi>B</mi><msup><mi>A</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>AX = B</dt><dd>A di kiri X, jadi kedua ruas dikali A<sup>−1</sup> dari kiri</dd>
            <dt>XA = B</dt><dd>A di kanan X, jadi kedua ruas dikali A<sup>−1</sup> dari kanan</dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ 5. SPL ============ -->
    <section class="bagian" id="spl">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Menyelesaikan SPL dengan matriks</h2>
      </div>

      <p>Sistem persamaan linear dapat ditulis sebagai satu persamaan matriks AX = B, dengan A matriks koefisien, X matriks variabel, dan B matriks konstanta.</p>

      <div class="kartu">
        <span class="istilah">Soal</span>
        <p>Selesaikan 3<em>x</em> + <em>y</em> = 7 dan 5<em>x</em> + 2<em>y</em> = 12.</p>
      </div>

      <div class="sub">
        <h3><span class="no">5.1</span>Cara invers</h3>
        <ol class="langkah">
          <li>Tulis <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>3</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>5</mn></mtd><mtd><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow></math><math><mrow><mo>[</mo><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr></mtable><mo>]</mo></mrow></math> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>7</mn></mtd></mtr><mtr><mtd><mn>12</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>.</li>
          <li>A<sup>−1</sup> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd><mo>−</mo><mn>5</mn></mtd><mtd><mn>3</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> (dari contoh sebelumnya).</li>
          <li><math><mrow><mo>[</mo><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr></mtable><mo>]</mo></mrow></math> = A<sup>−1</sup>B = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn><mo>·</mo><mn>7</mn><mo>−</mo><mn>1</mn><mo>·</mo><mn>12</mn></mtd></mtr><mtr><mtd><mo>−</mo><mn>5</mn><mo>·</mo><mn>7</mn><mo>+</mo><mn>3</mn><mo>·</mo><mn>12</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>. Jadi <strong><em>x</em> = 2, <em>y</em> = 1</strong>.</li>
        </ol>
      </div>

      <div class="sub">
        <h3><span class="no">5.2</span>Aturan Cramer</h3>
        <div class="rumus">
          <div class="rumus-judul">Aturan Cramer</div>
          <div class="rumus-isi">
            <math display="block" aria-label="x sama dengan D x per D, y sama dengan D y per D">
              <mi>x</mi><mo>=</mo><mfrac><msub><mi>D</mi><mi>x</mi></msub><mi>D</mi></mfrac>
              <mspace width="1.5em"/>
              <mi>y</mi><mo>=</mo><mfrac><msub><mi>D</mi><mi>y</mi></msub><mi>D</mi></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>D</dt><dd>determinan matriks koefisien</dd>
              <dt>D<sub>x</sub></dt><dd>determinan setelah kolom koefisien x diganti kolom konstanta</dd>
              <dt>D<sub>y</sub></dt><dd>determinan setelah kolom koefisien y diganti kolom konstanta</dd>
            </dl>
          </div>
        </div>
        <p>Untuk soal di atas: D = det <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>3</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>5</mn></mtd><mtd><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = 1, D<sub>x</sub> = det <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>7</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>12</mn></mtd><mtd><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = 14 − 12 = 2, dan D<sub>y</sub> = det <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>3</mn></mtd><mtd><mn>7</mn></mtd></mtr><mtr><mtd><mn>5</mn></mtd><mtd><mn>12</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = 36 − 35 = 1. Jadi <em>x</em> = 2/1 = 2 dan <em>y</em> = 1/1 = 1.</p>
      </div>

      <div class="catatan info">
        <strong class="judul">Jika D = 0</strong>
        Matriks koefisien tidak memiliki invers. Sistemnya tidak memiliki penyelesaian tunggal: kedua garisnya sejajar (tidak ada penyelesaian) atau berimpit (tak hingga banyak penyelesaian).
      </div>
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
            <tr><td>Determinan 2 × 2</td><td>ad − bc</td></tr>
            <tr><td>Determinan 3 × 3</td><td>aturan Sarrus: diagonal turun − diagonal naik</td></tr>
            <tr><td>Sifat</td><td>det(AB) = det A · det B; det(kA) = k<sup>n</sup> det A</td></tr>
            <tr><td>Invers 2 × 2</td><td>A<sup>−1</sup> = (1/(ad − bc)) <math><mrow><mo>[</mo><mtable><mtr><mtd><mi>d</mi></mtd><mtd><mo>−</mo><mi>b</mi></mtd></mtr><mtr><mtd><mo>−</mo><mi>c</mi></mtd><mtd><mi>a</mi></mtd></mtr></mtable><mo>]</mo></mrow></math>, syarat det ≠ 0</td></tr>
            <tr><td>Persamaan matriks</td><td>AX = B ⇒ X = A<sup>−1</sup>B; XA = B ⇒ X = BA<sup>−1</sup></td></tr>
            <tr><td>Aturan Cramer</td><td>x = D<sub>x</sub>/D, y = D<sub>y</sub>/D</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Tingkat Lanjut Fase F, elemen Aljabar dan Fungsi: operasi aljabar pada matriks (Keputusan Kepala BSKAP No. 032/H/KR/2024, diperbarui dengan No. 046/H/KR/2025); Buku <em>Matematika Tingkat Lanjut untuk SMA Kelas XI</em>, Pusat Perbukuan Kemendikbudristek.
    </footer>
  `,
  formula: "",
  example: ""
};

/* ====== Bab 110-1 · Matriks dan Operasinya ====== */

import { Chapter } from '../../materials';

export const matriksOperasi: Chapter = {
  chapterId: "110-1",
  title: "Matriks dan Operasinya",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika Tingkat Lanjut · Aljabar dan Fungsi · Kelas XI</span>
      <h1>Matriks dan Operasinya</h1>
      <p>Rangkuman pengertian dan ordo matriks, jenis-jenis matriks, transpose, kesamaan dua matriks, serta penjumlahan, perkalian skalar, dan perkalian dua matriks.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian dan ordo matriks</a></li>
        <li><a href="#jenis">Jenis-jenis matriks</a></li>
        <li><a href="#kesamaan">Transpose dan kesamaan matriks</a></li>
        <li><a href="#penjumlahan">Penjumlahan dan perkalian skalar</a></li>
        <li><a href="#perkalian">Perkalian dua matriks</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian dan ordo matriks</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Matriks</span>
        <p>Susunan bilangan berbentuk persegi panjang yang diatur dalam <strong>baris</strong> dan <strong>kolom</strong>, ditulis di dalam kurung siku. Matriks diberi nama dengan huruf kapital, misalnya A, B, C.</p>
      </div>

      <p>Matriks memudahkan penyajian data. Contoh: penjualan dua toko selama tiga hari.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Penjualan (unit)</th><th>Senin</th><th>Selasa</th><th>Rabu</th></tr>
          </thead>
          <tbody>
            <tr><td>Toko 1</td><td>12</td><td>15</td><td>10</td></tr>
            <tr><td>Toko 2</td><td>8</td><td>11</td><td>14</td></tr>
          </tbody>
        </table>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Matriks berordo 2 × 3</div>
        <div class="rumus-isi">
          <math display="block" aria-label="A sama dengan matriks 2 baris 3 kolom: baris pertama 12, 15, 10; baris kedua 8, 11, 14">
            <mi>A</mi><mo>=</mo>
            <mrow><mo>[</mo><mtable>
              <mtr><mtd><mn>12</mn></mtd><mtd><mn>15</mn></mtd><mtd><mn>10</mn></mtd></mtr>
              <mtr><mtd><mn>8</mn></mtd><mtd><mn>11</mn></mtd><mtd><mn>14</mn></mtd></mtr>
            </mtable><mo>]</mo></mrow>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>ordo</dt><dd>banyak baris × banyak kolom; A berordo 2 × 3, ditulis A<sub>2×3</sub></dd>
            <dt>a<sub>ij</sub></dt><dd>elemen pada baris ke-i dan kolom ke-j; di sini a<sub>23</sub> = 14</dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ 2. JENIS ============ -->
    <section class="bagian" id="jenis">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Jenis-jenis matriks</h2>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Jenis</th><th>Ciri</th><th>Contoh</th></tr>
          </thead>
          <tbody>
            <tr><td>Matriks baris / kolom</td><td>hanya satu baris / satu kolom</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>5</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>Matriks persegi</td><td>banyak baris = banyak kolom</td><td>ordo 2 × 2, 3 × 3</td></tr>
            <tr><td>Matriks nol (O)</td><td>semua elemennya 0</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>Matriks diagonal</td><td>persegi, elemen di luar diagonal utama 0</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>3</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>5</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>Matriks identitas (I)</td><td>diagonal, semua elemen diagonal utama 1</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>Matriks segitiga atas</td><td>elemen di bawah diagonal utama 0</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>7</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>4</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
          </tbody>
        </table>
      </div>

      <p>Pada tabel, tanda titik koma memisahkan baris, jadi <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>3</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>5</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> berarti baris pertama 3, 0 dan baris kedua 0, 5. <strong>Diagonal utama</strong> adalah elemen a<sub>11</sub>, a<sub>22</sub>, a<sub>33</sub>, dan seterusnya, dari kiri atas ke kanan bawah.</p>
    </section>

    <!-- ============ 3. TRANSPOSE DAN KESAMAAN ============ -->
    <section class="bagian" id="kesamaan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Transpose dan kesamaan matriks</h2>
      </div>

      <div class="sub">
        <h3><span class="no">3.1</span>Transpose</h3>
        <p><strong>Transpose</strong> matriks A, ditulis A<sup>T</sup>, diperoleh dengan menukar baris menjadi kolom. Jika A berordo <em>m</em> × <em>n</em>, maka A<sup>T</sup> berordo <em>n</em> × <em>m</em>.</p>
        <div class="rumus">
          <div class="rumus-judul">Contoh transpose</div>
          <div class="rumus-isi">
            <math display="block" aria-label="A sama dengan matriks baris 1, 2, 3 dan baris 4, 5, 6; transpose A sama dengan matriks baris 1, 4; baris 2, 5; baris 3, 6">
              <mi>A</mi><mo>=</mo>
              <mrow><mo>[</mo><mtable>
                <mtr><mtd><mn>1</mn></mtd><mtd><mn>2</mn></mtd><mtd><mn>3</mn></mtd></mtr>
                <mtr><mtd><mn>4</mn></mtd><mtd><mn>5</mn></mtd><mtd><mn>6</mn></mtd></mtr>
              </mtable><mo>]</mo></mrow>
              <mspace width="1.5em"/>
              <msup><mi>A</mi><mi>T</mi></msup><mo>=</mo>
              <mrow><mo>[</mo><mtable>
                <mtr><mtd><mn>1</mn></mtd><mtd><mn>4</mn></mtd></mtr>
                <mtr><mtd><mn>2</mn></mtd><mtd><mn>5</mn></mtd></mtr>
                <mtr><mtd><mn>3</mn></mtd><mtd><mn>6</mn></mtd></mtr>
              </mtable><mo>]</mo></mrow>
            </math>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">3.2</span>Kesamaan dua matriks</h3>
        <p>Dua matriks <strong>sama</strong> jika ordonya sama dan setiap elemen yang seletak bernilai sama. Sifat ini dipakai untuk mencari variabel yang belum diketahui.</p>
        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn><mi>x</mi></mtd><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>4</mn></mtd><mtd><mi>y</mi><mo>+</mo><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>8</mn></mtd><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>4</mn></mtd><mtd><mn>7</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>. Elemen seletak sama: 2<em>x</em> = 8 dan <em>y</em> + 1 = 7, sehingga <strong><em>x</em> = 4</strong> dan <strong><em>y</em> = 6</strong>.
        </div>
      </div>
    </section>

    <!-- ============ 4. PENJUMLAHAN ============ -->
    <section class="bagian" id="penjumlahan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Penjumlahan dan perkalian skalar</h2>
      </div>

      <ul class="poin">
        <li><strong>Penjumlahan dan pengurangan</strong> hanya dapat dilakukan pada matriks yang <strong>ordonya sama</strong>, dengan menjumlahkan atau mengurangkan elemen yang seletak.</li>
        <li><strong>Perkalian skalar</strong> <em>k</em>A dilakukan dengan mengalikan setiap elemen A dengan bilangan <em>k</em>.</li>
      </ul>

      <div class="rumus">
        <div class="rumus-judul">Contoh</div>
        <div class="rumus-isi">
          <math display="block" aria-label="matriks 2, 1; 0, 3 ditambah matriks 4, negatif 1; 5, 2 sama dengan matriks 6, 0; 5, 5">
            <mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>3</mn></mtd></mtr></mtable><mo>]</mo></mrow>
            <mo>+</mo>
            <mrow><mo>[</mo><mtable><mtr><mtd><mn>4</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd><mn>5</mn></mtd><mtd><mn>2</mn></mtd></mtr></mtable><mo>]</mo></mrow>
            <mo>=</mo>
            <mrow><mo>[</mo><mtable><mtr><mtd><mn>6</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>5</mn></mtd><mtd><mn>5</mn></mtd></mtr></mtable><mo>]</mo></mrow>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="3 dikali matriks 2, 1; 0, 3 sama dengan matriks 6, 3; 0, 9">
            <mn>3</mn>
            <mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>3</mn></mtd></mtr></mtable><mo>]</mo></mrow>
            <mo>=</mo>
            <mrow><mo>[</mo><mtable><mtr><mtd><mn>6</mn></mtd><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>9</mn></mtd></mtr></mtable><mo>]</mo></mrow>
          </math>
        </div>
      </div>

      <p>Penjumlahan matriks bersifat komutatif (A + B = B + A) dan asosiatif. Matriks nol berperan seperti angka 0: A + O = A.</p>
    </section>

    <!-- ============ 5. PERKALIAN ============ -->
    <section class="bagian" id="perkalian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Perkalian dua matriks</h2>
      </div>

      <p>Matriks A dapat dikalikan dengan B jika <strong>banyak kolom A sama dengan banyak baris B</strong>. Hasilnya berordo banyak baris A × banyak kolom B.</p>

      <div class="rumus">
        <div class="rumus-judul">Syarat dan ordo hasil kali</div>
        <div class="rumus-isi">
          <math display="block" aria-label="A berordo m kali n dikali B berordo n kali p menghasilkan AB berordo m kali p">
            <msub><mi>A</mi><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow></msub><mo>·</mo><msub><mi>B</mi><mrow><mi>n</mi><mo>×</mo><mi>p</mi></mrow></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>m</mi><mo>×</mo><mi>p</mi></mrow></msub>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>n</dt><dd>harus sama: kolom A = baris B</dd>
            <dt>c<sub>ij</sub></dt><dd>jumlah hasil kali elemen baris ke-i matriks A dengan elemen kolom ke-j matriks B</dd>
          </dl>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/perkalian-matriks.svg" alt="Perkalian matriks A = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>2</mn></mtd></mtr><mtr><mtd><mn>3</mn></mtd><mtd><mn>4</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> dengan B = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>5</mn></mtd><mtd><mn>6</mn></mtd></mtr><mtr><mtd><mn>7</mn></mtd><mtd><mn>8</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> menghasilkan AB = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>19</mn></mtd><mtd><mn>22</mn></mtd></mtr><mtr><mtd><mn>43</mn></mtd><mtd><mn>50</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>. Baris pertama A dan kolom kedua B disorot. Elemen baris 1 kolom 2 pada hasil diperoleh dari 1 kali 6 ditambah 2 kali 8, yaitu 22." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Setiap elemen hasil kali adalah "baris kali kolom".</figcaption>
      </figure>

      <p>Elemen lainnya: baris 1 × kolom 1 = 1·5 + 2·7 = 19, baris 2 × kolom 1 = 3·5 + 4·7 = 43, dan baris 2 × kolom 2 = 3·6 + 4·8 = 50.</p>

      <div class="catatan">
        <strong class="judul">Perkalian matriks tidak komutatif</strong>
        Umumnya AB ≠ BA. Untuk matriks di atas, BA = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>5</mn><mo>·</mo><mn>1</mn><mo>+</mo><mn>6</mn><mo>·</mo><mn>3</mn></mtd><mtd><mn>5</mn><mo>·</mo><mn>2</mn><mo>+</mo><mn>6</mn><mo>·</mo><mn>4</mn></mtd></mtr><mtr><mtd><mn>7</mn><mo>·</mo><mn>1</mn><mo>+</mo><mn>8</mn><mo>·</mo><mn>3</mn></mtd><mtd><mn>7</mn><mo>·</mo><mn>2</mn><mo>+</mo><mn>8</mn><mo>·</mo><mn>4</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>23</mn></mtd><mtd><mn>34</mn></mtd></mtr><mtr><mtd><mn>31</mn></mtd><mtd><mn>46</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>, berbeda dengan AB. Karena itu urutan perkalian harus diperhatikan.
      </div>

      <ul class="poin">
        <li>Asosiatif: (AB)C = A(BC).</li>
        <li>Distributif: A(B + C) = AB + AC.</li>
        <li>Matriks identitas berperan seperti angka 1: AI = IA = A.</li>
        <li>Transpose hasil kali: (AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup>.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Contoh penerapan</strong>
        Harga sebuah buku Rp5.000 dan pensil Rp3.000. Toko 1 menjual 12 buku dan 20 pensil, Toko 2 menjual 8 buku dan 15 pensil. Pendapatan kedua toko: <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>12</mn></mtd><mtd><mn>20</mn></mtd></mtr><mtr><mtd><mn>8</mn></mtd><mtd><mn>15</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> × <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>5.000</mn></mtd></mtr><mtr><mtd><mn>3.000</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>12</mn><mo>·</mo><mn>5.000</mn><mo>+</mo><mn>20</mn><mo>·</mo><mn>3.000</mn></mtd></mtr><mtr><mtd><mn>8</mn><mo>·</mo><mn>5.000</mn><mo>+</mo><mn>15</mn><mo>·</mo><mn>3.000</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn mathvariant="bold">120.000</mn></mtd></mtr><mtr><mtd><mn mathvariant="bold">85.000</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>.
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
            <tr><td>Ordo</td><td>baris × kolom</td></tr>
            <tr><td>Transpose</td><td>baris menjadi kolom; (AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup></td></tr>
            <tr><td>Kesamaan</td><td>ordo sama dan elemen seletak sama</td></tr>
            <tr><td>Penjumlahan</td><td>ordo harus sama; jumlahkan elemen seletak</td></tr>
            <tr><td>Perkalian skalar</td><td>kalikan setiap elemen dengan k</td></tr>
            <tr><td>Perkalian matriks</td><td>kolom A = baris B; c<sub>ij</sub> = baris i × kolom j; AB ≠ BA</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Tingkat Lanjut Fase F, elemen Aljabar dan Fungsi: melakukan operasi aljabar pada matriks dan menerapkannya dalam transformasi geometri (Keputusan Kepala BSKAP No. 032/H/KR/2024, diperbarui dengan No. 046/H/KR/2025); Buku <em>Matematika Tingkat Lanjut untuk SMA Kelas XI</em>, Pusat Perbukuan Kemendikbudristek.
    </footer>
  `,
  formula: "",
  example: ""
};

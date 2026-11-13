/* ====== Bab 101-1 · Persamaan Linear dan SPLDV ====== */

import { Chapter } from '../../materials';

export const pengertianPersamaanLinear: Chapter = {
  chapterId: "101-1",
  title: "Persamaan Linear dan SPLDV",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Aljabar dan Fungsi · Pengulangan SMP</span>
      <h1>Persamaan Linear dan Sistem Persamaan Linear Dua Variabel</h1>
      <p>Rangkuman persamaan linear satu variabel dan sistem persamaan linear dua variabel (SPLDV) beserta cara penyelesaiannya. Bab ini menjadi bekal untuk sistem pertidaksamaan linear di Kelas X.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#plsv">Persamaan linear satu variabel</a></li>
        <li><a href="#spldv">Sistem persamaan linear dua variabel</a></li>
        <li><a href="#metode">Metode penyelesaian SPLDV</a></li>
        <li><a href="#banyak-solusi">Banyaknya penyelesaian</a></li>
        <li><a href="#soal-cerita">Soal cerita</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PLSV ============ -->
    <section class="bagian" id="plsv">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Persamaan linear satu variabel</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Persamaan linear</span>
        <p>Persamaan yang pangkat tertinggi variabelnya <strong>satu</strong>. Disebut linear karena grafiknya berupa garis lurus.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Bentuk umum dan penyelesaian</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a x tambah b sama dengan nol, sehingga x sama dengan negatif b per a">
            <mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>0</mn>
            <mspace width="1em"/><mo>⇒</mo><mspace width="1em"/>
            <mi>x</mi><mo>=</mo><mo>−</mo><mfrac><mi>b</mi><mi>a</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>x</dt><dd>variabel yang dicari</dd>
            <dt>a</dt><dd>koefisien x, dengan a ≠ 0</dd>
            <dt>b</dt><dd>konstanta</dd>
          </dl>
        </div>
      </div>

      <p>Prinsipnya: kedua ruas boleh ditambah, dikurangi, dikali, atau dibagi dengan bilangan yang sama (selain membagi dengan nol), dan persamaan tetap setara. Contoh: 3<em>x</em> + 6 = 15 ⇒ 3<em>x</em> = 9 ⇒ <strong><em>x</em> = 3</strong>.</p>
    </section>

    <!-- ============ 2. SPLDV ============ -->
    <section class="bagian" id="spldv">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Sistem persamaan linear dua variabel</h2>
      </div>

      <p>SPLDV adalah dua persamaan linear dengan dua variabel yang sama, misalnya <em>x</em> dan <em>y</em>. Penyelesaiannya adalah pasangan (<em>x</em>, <em>y</em>) yang memenuhi <strong>kedua</strong> persamaan sekaligus.</p>

      <div class="rumus">
        <div class="rumus-judul">Bentuk umum SPLDV</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a 1 x tambah b 1 y sama dengan c 1, dan a 2 x tambah b 2 y sama dengan c 2">
            <mrow><mo>{</mo><mtable columnalign="left">
              <mtr><mtd><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub></mtd></mtr>
              <mtr><mtd><msub><mi>a</mi><mn>2</mn></msub><mi>x</mi><mo>+</mo><msub><mi>b</mi><mn>2</mn></msub><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub></mtd></mtr>
            </mtable></mrow>
          </math>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/spldv-grafik.svg" alt="Grafik dua garis pada bidang koordinat. Garis x + y = 5 turun dari kiri atas ke kanan bawah, sedangkan garis 2x − y = 1 naik. Keduanya berpotongan di titik (2, 3), yang merupakan penyelesaian sistem persamaan." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Setiap persamaan linear dua variabel adalah sebuah garis. Penyelesaian SPLDV adalah titik potong kedua garis.</figcaption>
      </figure>
    </section>

    <!-- ============ 3. METODE ============ -->
    <section class="bagian" id="metode">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Metode penyelesaian SPLDV</h2>
      </div>

      <p>Contoh yang sama diselesaikan dengan tiga metode: <em>x</em> + <em>y</em> = 5 dan 2<em>x</em> − <em>y</em> = 1.</p>

      <div class="sub">
        <h3><span class="no">3.1</span>Metode grafik</h3>
        <p>Gambar kedua garis, lalu baca titik potongnya. Dari Gambar 1, titik potongnya (2, 3). Metode ini cepat untuk memahami, tetapi kurang teliti jika titik potongnya bukan bilangan bulat.</p>
      </div>

      <div class="sub">
        <h3><span class="no">3.2</span>Metode substitusi</h3>
        <ol class="langkah">
          <li>Nyatakan satu variabel dari persamaan pertama: <em>y</em> = 5 − <em>x</em>.</li>
          <li>Substitusikan ke persamaan kedua: 2<em>x</em> − (5 − <em>x</em>) = 1 ⇒ 3<em>x</em> = 6 ⇒ <em>x</em> = 2.</li>
          <li>Hitung <em>y</em> = 5 − 2 = 3. Penyelesaian: <strong>(2, 3)</strong>.</li>
        </ol>
      </div>

      <div class="sub">
        <h3><span class="no">3.3</span>Metode eliminasi dan campuran</h3>
        <ol class="langkah">
          <li>Jumlahkan kedua persamaan agar <em>y</em> hilang: (<em>x</em> + <em>y</em>) + (2<em>x</em> − <em>y</em>) = 5 + 1 ⇒ 3<em>x</em> = 6 ⇒ <em>x</em> = 2.</li>
          <li>Pada metode <strong>campuran</strong>, nilai <em>x</em> = 2 langsung disubstitusikan: 2 + <em>y</em> = 5 ⇒ <em>y</em> = 3.</li>
        </ol>
        <p>Jika koefisiennya belum sama, kalikan dulu salah satu atau kedua persamaan dengan bilangan yang tepat agar satu variabel dapat dihilangkan.</p>
      </div>
    </section>

    <!-- ============ 4. BANYAK SOLUSI ============ -->
    <section class="bagian" id="banyak-solusi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Banyaknya penyelesaian</h2>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Kedudukan dua garis</th><th>Banyak penyelesaian</th><th>Contoh</th></tr>
          </thead>
          <tbody>
            <tr><td>Berpotongan</td><td>tepat satu</td><td><em>x</em> + <em>y</em> = 5 dan 2<em>x</em> − <em>y</em> = 1</td></tr>
            <tr><td>Sejajar</td><td>tidak ada</td><td><em>x</em> + <em>y</em> = 5 dan <em>x</em> + <em>y</em> = 2</td></tr>
            <tr><td>Berimpit</td><td>tak hingga banyaknya</td><td><em>x</em> + <em>y</em> = 5 dan 2<em>x</em> + 2<em>y</em> = 10</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Tiga variabel</strong>
        Gagasan yang sama berlaku untuk sistem persamaan linear tiga variabel (SPLTV): hilangkan satu variabel dengan eliminasi sampai tersisa SPLDV, lalu selesaikan seperti di atas.
      </div>
    </section>

    <!-- ============ 5. SOAL CERITA ============ -->
    <section class="bagian" id="soal-cerita">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Soal cerita</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Soal</span>
        <p>Harga 2 buku dan 3 pensil Rp19.000. Harga 1 buku dan 2 pensil Rp11.000. Berapa harga sebuah buku dan sebuah pensil?</p>
      </div>
      <ol class="langkah">
        <li>Misalkan harga buku <em>b</em> dan harga pensil <em>p</em> (rupiah): 2<em>b</em> + 3<em>p</em> = 19.000 dan <em>b</em> + 2<em>p</em> = 11.000.</li>
        <li>Dari persamaan kedua, <em>b</em> = 11.000 − 2<em>p</em>. Substitusikan: 2(11.000 − 2<em>p</em>) + 3<em>p</em> = 19.000 ⇒ 22.000 − <em>p</em> = 19.000 ⇒ <em>p</em> = 3.000.</li>
        <li><em>b</em> = 11.000 − 6.000 = 5.000. Jadi harga buku <strong>Rp5.000</strong> dan pensil <strong>Rp3.000</strong>.</li>
      </ol>
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
            <tr><td>Persamaan linear</td><td>ax + b = 0, penyelesaian x = −b/a</td></tr>
            <tr><td>SPLDV</td><td>dua persamaan linear; penyelesaian = titik potong dua garis</td></tr>
            <tr><td>Metode</td><td>grafik, substitusi, eliminasi, campuran</td></tr>
            <tr><td>Banyak penyelesaian</td><td>berpotongan: satu; sejajar: tidak ada; berimpit: tak hingga</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Materi prasyarat dari Capaian Pembelajaran Fase D (SMP), elemen Aljabar (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Sistem Persamaan dan Pertidaksamaan Linear.
    </footer>
  `,
  formula: "",
  example: ""
};

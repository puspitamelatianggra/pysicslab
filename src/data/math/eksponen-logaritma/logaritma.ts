/* ====== Bab 104-2 · Logaritma ====== */

import { Chapter } from '../../materials';

export const logaritma: Chapter = {
  chapterId: "104-2",
  title: "Logaritma",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Bilangan · Kelas X (pendalaman)</span>
      <h1>Logaritma</h1>
      <p>Rangkuman pengertian logaritma sebagai kebalikan perpangkatan, sifat-sifatnya, dan penerapannya. Materi ini melengkapi bab bilangan berpangkat dan banyak dipakai pada perhitungan bunga majemuk, pertumbuhan, dan skala pH.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian logaritma</a></li>
        <li><a href="#sifat">Sifat-sifat logaritma</a></li>
        <li><a href="#contoh">Contoh penggunaan sifat</a></li>
        <li><a href="#penerapan">Penerapan logaritma</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian logaritma</h2>
      </div>

      <p>Perpangkatan menjawab pertanyaan "2 dipangkatkan 3 hasilnya berapa?" (jawabannya 8). Logaritma menjawab pertanyaan kebalikannya: "2 harus dipangkatkan berapa agar hasilnya 8?" (jawabannya 3).</p>

      <div class="rumus">
        <div class="rumus-judul">Definisi logaritma</div>
        <div class="rumus-isi">
          <math display="block" aria-label="logaritma b dengan basis a sama dengan c, jika dan hanya jika a pangkat c sama dengan b">
            <mmultiscripts><mi>log</mi><mprescripts/><none/><mi>a</mi></mmultiscripts><mi>b</mi><mo>=</mo><mi>c</mi>
            <mspace width="1em"/><mo>⇔</mo><mspace width="1em"/>
            <msup><mi>a</mi><mi>c</mi></msup><mo>=</mo><mi>b</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>a</dt><dd>basis (bilangan pokok), dengan a &gt; 0 dan a ≠ 1</dd>
            <dt>b</dt><dd>numerus, bilangan yang dicari logaritmanya, dengan b &gt; 0</dd>
            <dt>c</dt><dd>hasil logaritma, yaitu pangkatnya</dd>
          </dl>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/eksponen-logaritma.svg" alt="Dua garis bilangan yang sejajar. Garis atas berisi 1, 2, 4, 8, 16, 32, dan setiap langkah ke kanan dikali 2. Garis bawah berisi pangkatnya, yaitu 0, 1, 2, 3, 4, 5. Logaritma basis 2 dari bilangan di atas adalah bilangan di bawahnya, misalnya 2 pangkat 3 sama dengan 8 setara dengan logaritma basis 2 dari 8 sama dengan 3." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Logaritma basis 2 menghitung berapa kali bilangan 1 dikali 2 untuk mencapai suatu bilangan.</figcaption>
      </figure>

      <ul class="poin">
        <li><sup>3</sup>log 81 = 4, karena 3<sup>4</sup> = 81.</li>
        <li><sup>2</sup>log (1/8) = −3, karena 2<sup>−3</sup> = 1/8.</li>
        <li>log 1000 = 3, karena 10<sup>3</sup> = 1000. Jika basisnya tidak ditulis, basisnya 10.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Cara penulisan</strong>
        Di buku pelajaran Indonesia, basis ditulis kecil di kiri atas: <sup>a</sup>log b. Di buku dan kalkulator internasional ditulis log<sub>a</sub> b. Keduanya berarti sama.
      </div>
    </section>

    <!-- ============ 2. SIFAT ============ -->
    <section class="bagian" id="sifat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Sifat-sifat logaritma</h2>
      </div>

      <p>Sifat logaritma diturunkan dari sifat bilangan berpangkat. Misalnya, perkalian bilangan berpangkat menjumlahkan pangkat, sehingga logaritma dari perkalian sama dengan jumlah logaritmanya. Berlaku untuk a, p &gt; 0, a, p ≠ 1, serta b, c &gt; 0.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Sifat</th><th>Bentuk umum</th></tr>
          </thead>
          <tbody>
            <tr><td>Logaritma basisnya sendiri</td><td><sup>a</sup>log a = 1 dan <sup>a</sup>log 1 = 0</td></tr>
            <tr><td>Perkalian</td><td><sup>a</sup>log (b × c) = <sup>a</sup>log b + <sup>a</sup>log c</td></tr>
            <tr><td>Pembagian</td><td><sup>a</sup>log (b/c) = <sup>a</sup>log b − <sup>a</sup>log c</td></tr>
            <tr><td>Perpangkatan numerus</td><td><sup>a</sup>log b<sup>n</sup> = n × <sup>a</sup>log b</td></tr>
            <tr><td>Perpangkatan basis</td><td><sup>a<sup>m</sup></sup>log b<sup>n</sup> = (n/m) × <sup>a</sup>log b</td></tr>
            <tr><td>Mengubah basis</td><td><sup>a</sup>log b = <sup>p</sup>log b / <sup>p</sup>log a</td></tr>
            <tr><td>Berantai</td><td><sup>a</sup>log b × <sup>b</sup>log c = <sup>a</sup>log c</td></tr>
            <tr><td>Pangkat logaritma</td><td>a<sup><sup>a</sup>log b</sup> = b</td></tr>
          </tbody>
        </table>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Sifat yang paling sering dipakai</div>
        <div class="rumus-isi">
          <math display="block" aria-label="log basis a dari b kali c sama dengan log basis a dari b ditambah log basis a dari c">
            <mmultiscripts><mi>log</mi><mprescripts/><none/><mi>a</mi></mmultiscripts><mo>(</mo><mi>b</mi><mi>c</mi><mo>)</mo><mo>=</mo>
            <mmultiscripts><mi>log</mi><mprescripts/><none/><mi>a</mi></mmultiscripts><mi>b</mi><mo>+</mo>
            <mmultiscripts><mi>log</mi><mprescripts/><none/><mi>a</mi></mmultiscripts><mi>c</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="log basis a dari b sama dengan log b dibagi log a, dengan basis sembarang yang sama">
            <mmultiscripts><mi>log</mi><mprescripts/><none/><mi>a</mi></mmultiscripts><mi>b</mi><mo>=</mo>
            <mfrac><mrow><mi>log</mi><mi>b</mi></mrow><mrow><mi>log</mi><mi>a</mi></mrow></mfrac>
          </math>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Kesalahan yang sering terjadi</strong>
        <sup>a</sup>log (b + c) <strong>tidak sama</strong> dengan <sup>a</sup>log b + <sup>a</sup>log c. Sifat penjumlahan hanya berlaku untuk logaritma dari <em>perkalian</em>. Begitu juga (<sup>a</sup>log b)<sup>2</sup> berbeda dengan <sup>a</sup>log b<sup>2</sup>.
      </div>
    </section>

    <!-- ============ 3. CONTOH ============ -->
    <section class="bagian" id="contoh">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Contoh penggunaan sifat</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Soal 1</span>
        <p>Hitunglah <sup>2</sup>log 12 + <sup>2</sup>log 6 − <sup>2</sup>log 9.</p>
      </div>
      <ol class="langkah">
        <li>Gabungkan dengan sifat perkalian dan pembagian: <sup>2</sup>log (12 × 6 / 9).</li>
        <li>12 × 6 / 9 = 72 / 9 = 8.</li>
        <li><sup>2</sup>log 8 = <strong>3</strong>.</li>
      </ol>

      <div class="kartu">
        <span class="istilah">Soal 2</span>
        <p>Diketahui log 2 = 0,301 dan log 3 = 0,477. Tentukan log 12.</p>
      </div>
      <ol class="langkah">
        <li>Uraikan 12 = 2<sup>2</sup> × 3.</li>
        <li>log 12 = 2 log 2 + log 3 = 2(0,301) + 0,477.</li>
        <li>log 12 = <strong>1,079</strong>.</li>
      </ol>

      <div class="kartu">
        <span class="istilah">Soal 3</span>
        <p>Tentukan <sup>4</sup>log 32.</p>
      </div>
      <ol class="langkah">
        <li>Ubah ke basis 2: <sup>4</sup>log 32 = <sup>2</sup>log 32 / <sup>2</sup>log 4.</li>
        <li>= 5/2 = <strong>2,5</strong>. Cek: 4<sup>2,5</sup> = (√4)<sup>5</sup> = 2<sup>5</sup> = 32.</li>
      </ol>
    </section>

    <!-- ============ 4. PENERAPAN ============ -->
    <section class="bagian" id="penerapan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Penerapan logaritma</h2>
      </div>

      <p>Logaritma dipakai untuk mencari <strong>pangkat yang tidak diketahui</strong> dan untuk membuat skala bagi besaran yang rentangnya sangat lebar.</p>

      <ul class="poin">
        <li><strong>Waktu investasi.</strong> Uang dengan bunga majemuk 8% per tahun menjadi dua kali lipat setelah <em>n</em> tahun, dengan 1,08<sup>n</sup> = 2. Maka <em>n</em> = log 2 / log 1,08 ≈ 0,301 / 0,0334 ≈ 9 tahun.</li>
        <li><strong>Derajat keasaman.</strong> pH = −log [H<sup>+</sup>]. Larutan dengan [H<sup>+</sup>] = 10<sup>−3</sup> mol/L memiliki pH = 3. Setiap turun 1 satuan pH, keasamannya 10 kali lebih besar.</li>
        <li><strong>Skala lain.</strong> Magnitudo gempa dan taraf intensitas bunyi (desibel) juga memakai skala logaritma.</li>
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
            <tr><td>Definisi</td><td><sup>a</sup>log b = c ⇔ a<sup>c</sup> = b (a &gt; 0, a ≠ 1, b &gt; 0)</td></tr>
            <tr><td>Perkalian dan pembagian</td><td><sup>a</sup>log bc = <sup>a</sup>log b + <sup>a</sup>log c; <sup>a</sup>log (b/c) = <sup>a</sup>log b − <sup>a</sup>log c</td></tr>
            <tr><td>Perpangkatan</td><td><sup>a</sup>log b<sup>n</sup> = n · <sup>a</sup>log b</td></tr>
            <tr><td>Ubah basis</td><td><sup>a</sup>log b = log b / log a</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Eksponen dan Logaritma. Logaritma tidak disebut tersendiri dalam Capaian Pembelajaran Fase E (Keputusan Kepala BSKAP No. 046/H/KR/2025), sehingga bab ini menjadi pendalaman elemen Bilangan.
    </footer>
  `,
  formula: "",
  example: ""
};

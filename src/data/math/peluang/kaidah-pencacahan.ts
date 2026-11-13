/* ====== Bab 109-1 · Kaidah Pencacahan ====== */

import { Chapter } from '../../materials';

export const kaidahPencacahan: Chapter = {
  chapterId: "109-1",
  title: "Kaidah Pencacahan",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Analisis Data dan Peluang · Kelas XI–XII</span>
      <h1>Kaidah Pencacahan</h1>
      <p>Rangkuman cara menghitung banyaknya kemungkinan: aturan penjumlahan dan perkalian, faktorial, permutasi, dan kombinasi. Materi ini menjadi alat utama untuk menghitung peluang.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#aturan">Aturan penjumlahan dan perkalian</a></li>
        <li><a href="#faktorial">Faktorial</a></li>
        <li><a href="#permutasi">Permutasi</a></li>
        <li><a href="#kombinasi">Kombinasi</a></li>
        <li><a href="#memilih">Permutasi atau kombinasi?</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. ATURAN ============ -->
    <section class="bagian" id="aturan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Aturan penjumlahan dan perkalian</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Aturan penjumlahan</h3>
          <p>Jika suatu pilihan dapat dilakukan dengan cara A <strong>atau</strong> cara B (tidak bersamaan), banyak caranya <em>m</em> + <em>n</em>. Contoh: ke sekolah naik 3 jenis bus atau 2 jenis angkot, ada 3 + 2 = 5 pilihan.</p>
        </div>
        <div class="kartu">
          <h3>Aturan perkalian</h3>
          <p>Jika tahap pertama dapat dilakukan dengan <em>m</em> cara <strong>dan</strong> tahap kedua dengan <em>n</em> cara, seluruhnya dapat dilakukan dengan <em>m</em> × <em>n</em> cara.</p>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/diagram-pohon.svg" alt="Diagram pohon memilih pakaian. Cabang pertama memilih kaos: putih atau hitam, 2 cara. Dari tiap kaos bercabang tiga pilihan celana: jin, kain, atau pendek. Hasilnya 6 pasangan: putih–jin, putih–kain, putih–pendek, hitam–jin, hitam–kain, hitam–pendek. Jadi banyak pasangan 2 kali 3 sama dengan 6." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Diagram pohon: 2 pilihan kaos dan 3 pilihan celana menghasilkan 2 × 3 = 6 pasangan.</figcaption>
      </figure>

      <div class="catatan info">
        <strong class="judul">Contoh dengan tempat kosong</strong>
        Berapa banyak bilangan tiga angka berbeda yang dapat disusun dari angka 1, 2, 3, 4, 5? Ratusan dapat diisi 5 angka, puluhan 4 angka tersisa, dan satuan 3 angka tersisa. Banyaknya 5 × 4 × 3 = <strong>60 bilangan</strong>.
      </div>
    </section>

    <!-- ============ 2. FAKTORIAL ============ -->
    <section class="bagian" id="faktorial">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Faktorial</h2>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Faktorial</div>
        <div class="rumus-isi">
          <math display="block" aria-label="n faktorial sama dengan n kali n dikurangi 1 kali sampai 2 kali 1">
            <mi>n</mi><mo>!</mo><mo>=</mo><mi>n</mi><mo>×</mo><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo><mo>×</mo><mo>⋯</mo><mo>×</mo><mn>2</mn><mo>×</mo><mn>1</mn>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>n</dt><dd>bilangan asli</dd>
            <dt>0!</dt><dd>didefinisikan sama dengan 1</dd>
          </dl>
        </div>
      </div>

      <p>Contoh: 5! = 5 × 4 × 3 × 2 × 1 = 120. Faktorial mudah disederhanakan: 8!/6! = 8 × 7 = 56.</p>
    </section>

    <!-- ============ 3. PERMUTASI ============ -->
    <section class="bagian" id="permutasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Permutasi</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Permutasi</span>
        <p>Susunan <em>r</em> unsur yang diambil dari <em>n</em> unsur berbeda dengan <strong>memperhatikan urutan</strong>. Susunan AB dan BA dihitung berbeda.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Permutasi r dari n unsur</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P n r sama dengan n faktorial dibagi n dikurangi r faktorial">
            <mmultiscripts><mi>P</mi><mi>r</mi><none/><mprescripts/><mi>n</mi><none/></mmultiscripts><mo>=</mo><mfrac><mrow><mi>n</mi><mo>!</mo></mrow><mrow><mo>(</mo><mi>n</mi><mo>−</mo><mi>r</mi><mo>)</mo><mo>!</mo></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>n</dt><dd>banyak unsur yang tersedia</dd>
            <dt>r</dt><dd>banyak unsur yang disusun, r ≤ n</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Dari 8 calon dipilih ketua, sekretaris, dan bendahara. Urutan penting karena jabatannya berbeda: P(8, 3) = 8!/5! = 8 × 7 × 6 = <strong>336 cara</strong>.
      </div>

      <div class="sub">
        <h3><span class="no">3.1</span>Permutasi dengan unsur sama</h3>
        <p>Jika dari <em>n</em> unsur ada <em>k</em><sub>1</sub>, <em>k</em><sub>2</sub>, … unsur yang sama, banyak susunannya <em>n</em>! / (<em>k</em><sub>1</sub>! <em>k</em><sub>2</sub>! …). Contoh: kata MATEMATIKA terdiri atas 10 huruf dengan M dua kali, A tiga kali, dan T dua kali. Banyak susunan hurufnya 10! / (2! 3! 2!) = 3.628.800 / 24 = <strong>151.200</strong>.</p>
      </div>

      <div class="sub">
        <h3><span class="no">3.2</span>Permutasi siklis</h3>
        <p>Banyak cara menyusun <em>n</em> unsur melingkar adalah (<em>n</em> − 1)!, karena memutar seluruh susunan tidak menghasilkan susunan baru. Contoh: 6 orang duduk mengelilingi meja bundar dapat diatur dalam 5! = <strong>120 cara</strong>.</p>
      </div>
    </section>

    <!-- ============ 4. KOMBINASI ============ -->
    <section class="bagian" id="kombinasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Kombinasi</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Kombinasi</span>
        <p>Pemilihan <em>r</em> unsur dari <em>n</em> unsur berbeda <strong>tanpa memperhatikan urutan</strong>. Pilihan {A, B} sama dengan {B, A}. Karena setiap kelompok <em>r</em> unsur dapat diurutkan dengan <em>r</em>! cara, kombinasi sama dengan permutasi dibagi <em>r</em>!.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Kombinasi r dari n unsur</div>
        <div class="rumus-isi">
          <math display="block" aria-label="C n r sama dengan n faktorial dibagi r faktorial kali n dikurangi r faktorial">
            <mmultiscripts><mi>C</mi><mi>r</mi><none/><mprescripts/><mi>n</mi><none/></mmultiscripts><mo>=</mo><mfrac><mrow><mi>n</mi><mo>!</mo></mrow><mrow><mi>r</mi><mo>!</mo><mo>(</mo><mi>n</mi><mo>−</mo><mi>r</mi><mo>)</mo><mo>!</mo></mrow></mfrac>
          </math>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Dari 8 siswa dipilih 3 orang menjadi panitia dengan tugas yang sama. Urutan tidak penting: C(8, 3) = 336/3! = 336/6 = <strong>56 cara</strong>.<br>
        Dari 8 soal, siswa wajib mengerjakan 5 soal, dan soal nomor 1 dan 2 wajib dikerjakan. Tinggal memilih 3 soal dari 6 soal lainnya: C(6, 3) = <strong>20 cara</strong>.
      </div>
    </section>

    <!-- ============ 5. MEMILIH ============ -->
    <section class="bagian" id="memilih">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Permutasi atau kombinasi?</h2>
      </div>

      <p>Tanyakan: <strong>jika urutannya ditukar, apakah hasilnya berbeda?</strong></p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Situasi</th><th>Urutan penting?</th><th>Gunakan</th></tr>
          </thead>
          <tbody>
            <tr><td>Menyusun kata sandi, nomor antrean, juara 1–2–3</td><td>ya</td><td>permutasi</td></tr>
            <tr><td>Memilih jabatan berbeda (ketua, wakil)</td><td>ya</td><td>permutasi</td></tr>
            <tr><td>Memilih anggota tim, panitia, atau soal</td><td>tidak</td><td>kombinasi</td></tr>
            <tr><td>Mengambil beberapa bola sekaligus dari kotak</td><td>tidak</td><td>kombinasi</td></tr>
          </tbody>
        </table>
      </div>
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
            <tr><td>Aturan perkalian</td><td>m × n</td></tr>
            <tr><td>Faktorial</td><td>n! = n(n − 1)…1, dengan 0! = 1</td></tr>
            <tr><td>Permutasi</td><td>P(n, r) = n!/(n − r)!</td></tr>
            <tr><td>Permutasi unsur sama</td><td>n!/(k<sub>1</sub>! k<sub>2</sub>! …)</td></tr>
            <tr><td>Permutasi siklis</td><td>(n − 1)!</td></tr>
            <tr><td>Kombinasi</td><td>C(n, r) = n!/(r!(n − r)!)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase F, elemen Analisis Data dan Peluang: menentukan peluang dengan konsep permutasi dan kombinasi (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas XI</em>, Pusat Perbukuan Kemendikbudristek, bab Peluang.
    </footer>
  `,
  formula: "",
  example: ""
};

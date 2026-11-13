/* ====== Bab 109-2 · Peluang Kejadian ====== */

import { Chapter } from '../../materials';

export const peluangKejadian: Chapter = {
  chapterId: "109-2",
  title: "Peluang Kejadian",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Analisis Data dan Peluang · Kelas XI–XII</span>
      <h1>Peluang Kejadian</h1>
      <p>Rangkuman ruang sampel, peluang suatu kejadian, frekuensi harapan, komplemen, kejadian majemuk, kejadian saling lepas dan saling bebas, serta peluang bersyarat.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#dasar">Ruang sampel dan peluang</a></li>
        <li><a href="#harapan">Frekuensi harapan dan komplemen</a></li>
        <li><a href="#majemuk">Kejadian majemuk dan saling lepas</a></li>
        <li><a href="#bebas">Kejadian saling bebas</a></li>
        <li><a href="#bersyarat">Peluang bersyarat</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. DASAR ============ -->
    <section class="bagian" id="dasar">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Ruang sampel dan peluang</h2>
      </div>

      <ul class="poin">
        <li><strong>Percobaan</strong>: kegiatan yang hasilnya tidak pasti, misalnya melempar dadu.</li>
        <li><strong>Ruang sampel</strong> S: himpunan semua hasil yang mungkin. Untuk satu dadu, S = {1, 2, 3, 4, 5, 6}.</li>
        <li><strong>Titik sampel</strong>: setiap anggota ruang sampel.</li>
        <li><strong>Kejadian</strong>: himpunan bagian dari ruang sampel, misalnya A = muncul mata dadu genap = {2, 4, 6}.</li>
      </ul>

      <div class="rumus">
        <div class="rumus-judul">Peluang kejadian A</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P A sama dengan n A dibagi n S">
            <mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><mo>(</mo><mi>A</mi><mo>)</mo></mrow><mrow><mi>n</mi><mo>(</mo><mi>S</mi><mo>)</mo></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>n(A)</dt><dd>banyak titik sampel kejadian A</dd>
            <dt>n(S)</dt><dd>banyak titik sampel ruang sampel; setiap hasil harus berpeluang sama</dd>
            <dt>P(A)</dt><dd>bernilai 0 ≤ P(A) ≤ 1; 0 berarti mustahil, 1 berarti pasti</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Satu dadu: P(genap) = 3/6 = 1/2.<br>
        Dua dadu: n(S) = 6 × 6 = 36. Pasangan berjumlah 7 adalah (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), sehingga P(jumlah 7) = 6/36 = <strong>1/6</strong>.
      </div>

      <p>Banyak titik sampel sering dihitung dengan kaidah pencacahan. Contoh: dari kotak berisi 5 bola merah dan 3 bola putih diambil 2 bola sekaligus. P(keduanya merah) = C(5, 2) / C(8, 2) = 10/28 = <strong>5/14</strong>.</p>
    </section>

    <!-- ============ 2. HARAPAN DAN KOMPLEMEN ============ -->
    <section class="bagian" id="harapan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Frekuensi harapan dan komplemen</h2>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Frekuensi harapan dan komplemen</div>
        <div class="rumus-isi">
          <math display="block" aria-label="F h sama dengan n kali P A">
            <msub><mi>F</mi><mi>h</mi></msub><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mi>n</mi><mo>×</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="P A komplemen sama dengan 1 dikurangi P A">
            <mi>P</mi><mo>(</mo><msup><mi>A</mi><mo>′</mo></msup><mo>)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>n</dt><dd>banyak percobaan</dd>
            <dt>A′</dt><dd>komplemen A, yaitu kejadian "bukan A"</dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li>Dadu dilempar 120 kali. Frekuensi harapan muncul mata 5 adalah 120 × 1/6 = <strong>20 kali</strong>. Ini perkiraan; hasil nyata bisa sedikit berbeda.</li>
        <li>Tiga koin dilempar. Peluang muncul <strong>paling sedikit satu</strong> angka lebih mudah dihitung lewat komplemennya, yaitu "tidak ada angka sama sekali" (semua gambar) yang peluangnya 1/8. Jadi peluangnya 1 − 1/8 = <strong>7/8</strong>.</li>
      </ul>
    </section>

    <!-- ============ 3. MAJEMUK ============ -->
    <section class="bagian" id="majemuk">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Kejadian majemuk dan saling lepas</h2>
      </div>

      <p>Kejadian majemuk adalah gabungan dua kejadian atau lebih. Kejadian "A <strong>atau</strong> B" ditulis A ∪ B, dan "A <strong>dan</strong> B" ditulis A ∩ B.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/diagram-venn-peluang.svg" alt="Dua diagram Venn dalam ruang sampel S. Kiri, kejadian A dan B beririsan; daerah irisan A∩B diarsir lime, sehingga P(A∪B) = P(A) + P(B) − P(A∩B). Kanan, kejadian A dan B saling lepas karena lingkarannya tidak bersentuhan, sehingga P(A∩B) = 0 dan P(A∪B) = P(A) + P(B)." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Irisan dihitung dua kali saat P(A) dan P(B) dijumlahkan, sehingga harus dikurangkan sekali.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Peluang gabungan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P A gabung B sama dengan P A ditambah P B dikurangi P A irisan B">
            <mi>P</mi><mo>(</mo><mi>A</mi><mo>∪</mo><mi>B</mi><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>+</mo><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo><mo>−</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>saling lepas</dt><dd>A dan B tidak mungkin terjadi bersamaan, P(A ∩ B) = 0, sehingga P(A ∪ B) = P(A) + P(B)</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Satu kartu diambil dari 52 kartu bridge. P(King atau hati) = 4/52 + 13/52 − 1/52 = 16/52 = <strong>4/13</strong>. Kartu King hati dikurangkan karena terhitung dua kali.<br>
        Satu dadu: muncul mata 2 dan muncul mata 5 saling lepas, sehingga P(2 atau 5) = 1/6 + 1/6 = <strong>1/3</strong>.
      </div>
    </section>

    <!-- ============ 4. SALING BEBAS ============ -->
    <section class="bagian" id="bebas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Kejadian saling bebas</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Saling bebas</span>
        <p>Dua kejadian saling bebas jika terjadinya yang satu <strong>tidak memengaruhi</strong> peluang yang lain, misalnya hasil lemparan koin dan hasil lemparan dadu.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Kejadian saling bebas</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P A irisan B sama dengan P A dikali P B">
            <mi>P</mi><mo>(</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>×</mo><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo>
          </math>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Sebuah koin dan sebuah dadu dilempar bersamaan. P(angka pada koin dan mata 6 pada dadu) = 1/2 × 1/6 = <strong>1/12</strong>.
      </div>

      <div class="catatan">
        <strong class="judul">Jangan tertukar</strong>
        <strong>Saling lepas</strong> berarti tidak dapat terjadi bersamaan, sehingga peluangnya <em>dijumlahkan</em>. <strong>Saling bebas</strong> berarti tidak saling memengaruhi, sehingga peluang terjadi bersamaan <em>dikalikan</em>. Dua kejadian yang saling lepas dan masing-masing mungkin terjadi justru tidak saling bebas: jika A terjadi, B pasti tidak terjadi.
      </div>
    </section>

    <!-- ============ 5. BERSYARAT ============ -->
    <section class="bagian" id="bersyarat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Peluang bersyarat</h2>
      </div>

      <p>Peluang bersyarat P(A | B) adalah peluang A terjadi <strong>jika diketahui</strong> B sudah terjadi. Karena B sudah terjadi, ruang sampelnya menyempit menjadi B.</p>

      <div class="rumus">
        <div class="rumus-judul">Peluang bersyarat</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P A dengan syarat B sama dengan P A irisan B dibagi P B">
            <mi>P</mi><mo>(</mo><mi>A</mi><mo>∣</mo><mi>B</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>P</mi><mo>(</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>)</mo></mrow><mrow><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="P A irisan B sama dengan P B dikali P A dengan syarat B">
            <mi>P</mi><mo>(</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo>)</mo><mo>=</mo><mi>P</mi><mo>(</mo><mi>B</mi><mo>)</mo><mo>×</mo><mi>P</mi><mo>(</mo><mi>A</mi><mo>∣</mo><mi>B</mi><mo>)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>P(A | B)</dt><dd>peluang A dengan syarat B, dengan P(B) &gt; 0</dd>
            <dt>saling bebas</dt><dd>jika A dan B saling bebas, P(A | B) = P(A)</dd>
          </dl>
        </div>
      </div>

      <div class="kartu">
        <span class="istilah">Soal 1</span>
        <p>Dari 40 siswa, 25 menyukai matematika, 15 menyukai fisika, dan 10 menyukai keduanya. Seorang siswa yang menyukai matematika dipilih acak. Berapa peluang ia juga menyukai fisika?</p>
      </div>
      <ol class="langkah">
        <li>Ruang sampel menyempit menjadi 25 penyuka matematika.</li>
        <li>Di antara mereka, 10 orang juga menyukai fisika.</li>
        <li>P(fisika | matematika) = 10/25 = <strong>2/5</strong>.</li>
      </ol>

      <div class="kartu">
        <span class="istilah">Soal 2 · Tanpa pengembalian</span>
        <p>Dari kotak berisi 5 bola merah dan 3 bola putih diambil 2 bola satu per satu tanpa dikembalikan. Berapa peluang keduanya merah?</p>
      </div>
      <ol class="langkah">
        <li>P(merah pertama) = 5/8.</li>
        <li>Setelah satu bola merah diambil, tersisa 4 merah dari 7 bola: P(merah kedua | merah pertama) = 4/7.</li>
        <li>P(keduanya merah) = 5/8 × 4/7 = 20/56 = <strong>5/14</strong>, sama dengan hasil cara kombinasi di bagian 1.</li>
      </ol>
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
            <tr><td>Peluang</td><td>P(A) = n(A)/n(S), 0 ≤ P(A) ≤ 1</td></tr>
            <tr><td>Frekuensi harapan</td><td>F<sub>h</sub> = n × P(A)</td></tr>
            <tr><td>Komplemen</td><td>P(A′) = 1 − P(A)</td></tr>
            <tr><td>Gabungan</td><td>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</td></tr>
            <tr><td>Saling lepas</td><td>P(A ∪ B) = P(A) + P(B)</td></tr>
            <tr><td>Saling bebas</td><td>P(A ∩ B) = P(A) × P(B)</td></tr>
            <tr><td>Bersyarat</td><td>P(A | B) = P(A ∩ B)/P(B)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase F, elemen Analisis Data dan Peluang: peluang kejadian majemuk, frekuensi harapan, kejadian saling bebas dan saling lepas, serta peluang bersyarat (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas XI</em>, Pusat Perbukuan Kemendikbudristek, bab Peluang.
    </footer>
  `,
  formula: "",
  example: ""
};

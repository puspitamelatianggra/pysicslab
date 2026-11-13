/* ====== Bab 107-2 · Tali Busur dan Garis Singgung Lingkaran ====== */

import { Chapter } from '../../materials';

export const taliBusurGarisSinggung: Chapter = {
  chapterId: "107-2",
  title: "Tali Busur dan Garis Singgung",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Geometri · Kelas XI</span>
      <h1>Tali Busur dan Garis Singgung Lingkaran</h1>
      <p>Rangkuman sifat tali busur dan apotema, perpotongan dua tali busur, garis singgung dari titik di luar lingkaran, serta garis singgung persekutuan dua lingkaran.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#tali-busur">Sifat tali busur</a></li>
        <li><a href="#garis-singgung">Garis singgung lingkaran</a></li>
        <li><a href="#singgung-potong">Garis singgung dan garis potong</a></li>
        <li><a href="#persekutuan">Garis singgung persekutuan</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. TALI BUSUR ============ -->
    <section class="bagian" id="tali-busur">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Sifat tali busur</h2>
      </div>

      <ul class="poin">
        <li>Garis dari pusat yang <strong>tegak lurus</strong> tali busur membagi tali busur itu menjadi dua sama panjang. Ruas garis ini disebut apotema.</li>
        <li>Tali busur yang sama panjang berjarak sama dari pusat.</li>
        <li>Makin dekat tali busur ke pusat, makin panjang tali busurnya. Tali busur terpanjang adalah diameter.</li>
      </ul>

      <div class="rumus">
        <div class="rumus-judul">Apotema</div>
        <div class="rumus-isi">
          <math display="block" aria-label="d sama dengan akar dari r kuadrat dikurangi setengah t kuadrat">
            <mi>d</mi><mo>=</mo><msqrt><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo>(</mo><mfrac><mi>t</mi><mn>2</mn></mfrac><mo>)</mo></mrow><mn>2</mn></msup></msqrt>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>d</dt><dd>panjang apotema, jarak pusat ke tali busur</dd>
            <dt>r</dt><dd>jari-jari</dd>
            <dt>t</dt><dd>panjang tali busur</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Lingkaran berjari-jari 10 cm memiliki tali busur 16 cm. Jarak tali busur ke pusat d = √(10<sup>2</sup> − 8<sup>2</sup>) = √36 = <strong>6 cm</strong>.
      </div>

      <div class="sub">
        <h3><span class="no">1.1</span>Dua tali busur berpotongan</h3>
        <p>Jika tali busur AB dan CD berpotongan di titik P di dalam lingkaran, hasil kali bagian-bagiannya sama: <strong>PA × PB = PC × PD</strong>. Contoh: PA = 4, PB = 6, dan PC = 3, maka PD = 24/3 = 8.</p>
      </div>
    </section>

    <!-- ============ 2. GARIS SINGGUNG ============ -->
    <section class="bagian" id="garis-singgung">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Garis singgung lingkaran</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Garis singgung</span>
        <p>Garis yang memotong lingkaran tepat di <strong>satu titik</strong>, yaitu titik singgung. Garis singgung selalu <strong>tegak lurus</strong> jari-jari yang melalui titik singgungnya.</p>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/garis-singgung.svg" alt="Lingkaran berpusat O dengan jari-jari r dan titik P di luar lingkaran. Dari P ditarik dua garis singgung yang menyinggung lingkaran di A dan B. Jari-jari OA tegak lurus PA dan jari-jari OB tegak lurus PB, sehingga segitiga OAP dan OBP siku-siku. Panjang PA sama dengan PB." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Dua garis singgung dari titik P di luar lingkaran sama panjang.</figcaption>
      </figure>

      <p>Dari titik P di luar lingkaran dapat ditarik tepat dua garis singgung. Segitiga OAP siku-siku di A, sehingga panjang garis singgungnya dapat dihitung dengan teorema Pythagoras.</p>

      <div class="rumus">
        <div class="rumus-judul">Panjang garis singgung dari titik di luar</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P A sama dengan P B sama dengan akar dari O P kuadrat dikurangi r kuadrat">
            <mi>P</mi><mi>A</mi><mo>=</mo><mi>P</mi><mi>B</mi><mo>=</mo><msqrt><mi>O</mi><msup><mi>P</mi><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup></msqrt>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>OP</dt><dd>jarak titik P ke pusat O</dd>
            <dt>r</dt><dd>jari-jari</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Jari-jari 5 cm dan OP = 13 cm. Panjang garis singgung PA = √(169 − 25) = √144 = <strong>12 cm</strong>. Bangun OAPB berbentuk layang-layang dengan luas 2 × (½ × 5 × 12) = 60 cm².
      </div>
    </section>

    <!-- ============ 3. SINGGUNG DAN POTONG ============ -->
    <section class="bagian" id="singgung-potong">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Garis singgung dan garis potong</h2>
      </div>

      <p>Dari titik P di luar lingkaran, tarik garis singgung PA dan sebuah garis potong yang memotong lingkaran di C dan D (C lebih dekat ke P). Berlaku hubungan berikut.</p>

      <div class="rumus">
        <div class="rumus-judul">Garis singgung–garis potong</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P A kuadrat sama dengan P C dikali P D">
            <mi>P</mi><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><mi>P</mi><mi>C</mi><mo>×</mo><mi>P</mi><mi>D</mi>
          </math>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        PC = 4 cm dan PD = 9 cm, maka PA<sup>2</sup> = 36 dan PA = <strong>6 cm</strong>.
      </div>
    </section>

    <!-- ============ 4. PERSEKUTUAN ============ -->
    <section class="bagian" id="persekutuan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Garis singgung persekutuan</h2>
      </div>

      <p>Garis singgung persekutuan menyinggung dua lingkaran sekaligus. Jika kedua lingkaran berada di sisi yang sama dari garis itu, disebut garis singgung persekutuan <strong>luar</strong>. Jika garis itu melintas di antara kedua lingkaran, disebut garis singgung persekutuan <strong>dalam</strong>.</p>

      <div class="rumus">
        <div class="rumus-judul">Panjang garis singgung persekutuan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="garis singgung persekutuan luar sama dengan akar dari p kuadrat dikurangi R dikurangi r, kuadrat">
            <msub><mi>l</mi><mtext>luar</mtext></msub><mo>=</mo><msqrt><msup><mi>p</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo>(</mo><mi>R</mi><mo>−</mo><mi>r</mi><mo>)</mo></mrow><mn>2</mn></msup></msqrt>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="garis singgung persekutuan dalam sama dengan akar dari p kuadrat dikurangi R ditambah r, kuadrat">
            <msub><mi>l</mi><mtext>dalam</mtext></msub><mo>=</mo><msqrt><msup><mi>p</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo>(</mo><mi>R</mi><mo>+</mo><mi>r</mi><mo>)</mo></mrow><mn>2</mn></msup></msqrt>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>p</dt><dd>jarak kedua pusat lingkaran</dd>
            <dt>R, r</dt><dd>jari-jari lingkaran besar dan kecil</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Dua lingkaran berjari-jari 8 cm dan 3 cm dengan jarak pusat 13 cm. Garis singgung persekutuan luar = √(169 − 25) = <strong>12 cm</strong>. Garis singgung persekutuan dalam = √(169 − 121) = √48 = <strong>4√3 cm</strong>.
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
            <tr><td>Apotema</td><td>d = √(r² − (t/2)²)</td></tr>
            <tr><td>Dua tali busur berpotongan</td><td>PA × PB = PC × PD</td></tr>
            <tr><td>Garis singgung dari titik luar</td><td>PA = √(OP² − r²), dan PA = PB</td></tr>
            <tr><td>Singgung–potong</td><td>PA² = PC × PD</td></tr>
            <tr><td>Persekutuan luar</td><td>√(p² − (R − r)²)</td></tr>
            <tr><td>Persekutuan dalam</td><td>√(p² − (R + r)²)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase F, elemen Geometri: hubungan antarunsur lingkaran (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas XI</em>, Pusat Perbukuan Kemendikbudristek, bab Lingkaran.
    </footer>
  `,
  formula: "",
  example: ""
};

/* ====== Bab 4-3 · Dualisme Gelombang-Partikel ====== */

import { Chapter } from '../../materials';

export const dualismeGelombangPartikel: Chapter = {
  chapterId: "4-3",
  title: "Dualisme Gelombang-Partikel",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Fisika Modern</span>
      <h1>Dualisme Gelombang-Partikel</h1>
      <p>Rangkuman efek fotolistrik dan persamaan Einstein, efek Compton dan momentum foton, hipotesis de Broglie tentang gelombang materi, serta prinsip ketidakpastian Heisenberg.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#gelombang-atau-partikel">Gelombang atau partikel?</a></li>
        <li><a href="#fotolistrik">Efek fotolistrik</a></li>
        <li><a href="#einstein">Persamaan efek fotolistrik Einstein</a></li>
        <li><a href="#compton">Efek Compton</a></li>
        <li><a href="#de-broglie">Gelombang de Broglie</a></li>
        <li><a href="#heisenberg">Prinsip ketidakpastian Heisenberg</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. GELOMBANG ATAU PARTIKEL ============ -->
    <section class="bagian" id="gelombang-atau-partikel">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Gelombang atau partikel?</h2>
      </div>

      <p>Percobaan celah ganda Thomas Young (1801) membuktikan bahwa cahaya dapat berinterferensi, yaitu sifat khas gelombang. Teori Maxwell kemudian menjelaskan cahaya sebagai gelombang elektromagnetik. Namun pada awal abad ke-20 ditemukan beberapa gejala yang hanya bisa dijelaskan jika cahaya dianggap sebagai <strong>partikel</strong> (foton).</p>

      <div class="kartu">
        <span class="istilah">Dualisme gelombang-partikel</span>
        <p>Cahaya dan juga materi memiliki <strong>dua sifat sekaligus</strong>. Dalam peristiwa perambatan, seperti interferensi dan difraksi, cahaya berperilaku sebagai gelombang. Dalam peristiwa interaksi dengan materi, seperti efek fotolistrik dan efek Compton, cahaya berperilaku sebagai partikel. Kedua sifat itu tidak pernah tampak bersamaan dalam satu percobaan.</p>
      </div>
    </section>

    <!-- ============ 2. EFEK FOTOLISTRIK ============ -->
    <section class="bagian" id="fotolistrik">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Efek fotolistrik</h2>
      </div>

      <p><strong>Efek fotolistrik</strong> adalah peristiwa terlepasnya elektron dari permukaan logam ketika logam itu disinari cahaya. Elektron yang terlepas disebut <strong>elektron foto</strong>, dan arusnya disebut arus foto.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/efek-fotolistrik.svg" alt="Percobaan efek fotolistrik. Di dalam tabung hampa udara terdapat katode logam di kiri dan anode di kanan. Cahaya berfrekuensi f menyinari katode sehingga elektron foto terlepas dan bergerak menuju anode. Katode dan anode dihubungkan ke sumber tegangan V dan amperemeter A yang mencatat arus foto." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Susunan alat percobaan efek fotolistrik.</figcaption>
      </figure>

      <p>Hasil percobaan menunjukkan:</p>
      <ul class="poin">
        <li>Elektron hanya terlepas jika frekuensi cahaya <strong>sama dengan atau lebih besar</strong> daripada suatu <strong>frekuensi ambang</strong> <em>f</em><sub>0</sub>. Di bawah <em>f</em><sub>0</sub>, tidak ada elektron yang terlepas walaupun cahayanya sangat terang.</li>
        <li>Energi kinetik maksimum elektron foto bergantung pada <strong>frekuensi</strong> cahaya, tidak pada intensitasnya.</li>
        <li>Intensitas cahaya hanya memengaruhi <strong>jumlah</strong> elektron yang terlepas. Makin terang cahaya, makin besar arus fotonya.</li>
        <li>Elektron terlepas <strong>seketika</strong> begitu cahaya mengenai logam, tanpa jeda waktu.</li>
      </ul>

      <div class="cabang">
        <div class="kartu">
          <h3>Ramalan teori gelombang</h3>
          <p>Cahaya yang cukup terang, dengan frekuensi berapa pun, seharusnya dapat melepaskan elektron. Cahaya redup seharusnya perlu waktu untuk "mengumpulkan" energi.</p>
        </div>
        <div class="kartu">
          <h3>Kenyataan</h3>
          <p>Yang menentukan adalah frekuensi, bukan kecerahan. Cahaya merah seterang apa pun tidak melepaskan elektron dari seng, tetapi cahaya ultraungu yang redup langsung melepaskannya.</p>
        </div>
      </div>
    </section>

    <!-- ============ 3. PERSAMAAN EINSTEIN ============ -->
    <section class="bagian" id="einstein">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Persamaan efek fotolistrik Einstein</h2>
      </div>

      <p>Pada tahun 1905, Einstein menjelaskan efek fotolistrik dengan teori foton. Cahaya terdiri atas foton yang masing-masing berenergi <em>hf</em>. Satu foton memberikan seluruh energinya kepada <strong>satu</strong> elektron. Sebagian energi itu dipakai untuk melepaskan elektron dari logam (fungsi kerja), dan sisanya menjadi energi kinetik elektron. Atas penjelasan inilah Einstein menerima Hadiah Nobel Fisika 1921.</p>

      <div class="rumus">
        <div class="rumus-judul">Persamaan Einstein</div>
        <div class="rumus-isi">
          <math display="block" aria-label="h f sama dengan W nol ditambah E k maks">
            <mi>h</mi><mi>f</mi><mo>=</mo><msub><mi>W</mi><mn>0</mn></msub><mo>+</mo><msub><mi>E</mi><mtext>k maks</mtext></msub>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="W nol sama dengan h f nol sama dengan h c per lambda nol">
            <msub><mi>W</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><msub><mi>f</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>0</mn></msub></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="E k maks sama dengan e V nol">
            <msub><mi>E</mi><mtext>k maks</mtext></msub><mo>=</mo><mi>e</mi><msub><mi>V</mi><mn>0</mn></msub>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>hf</dt><dd>energi foton yang datang <span class="satuan">(J atau eV)</span></dd>
            <dt>W<sub>0</sub></dt><dd>fungsi kerja, energi minimum untuk melepaskan elektron dari logam <span class="satuan">(J atau eV)</span></dd>
            <dt>f<sub>0</sub>, λ<sub>0</sub></dt><dd>frekuensi ambang dan panjang gelombang ambang <span class="satuan">(Hz, m)</span></dd>
            <dt>E<sub>k maks</sub></dt><dd>energi kinetik maksimum elektron foto <span class="satuan">(J atau eV)</span></dd>
            <dt>V<sub>0</sub></dt><dd>potensial henti, tegangan balik yang tepat menghentikan arus foto <span class="satuan">(V)</span></dd>
          </dl>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/grafik-fotolistrik.svg" alt="Grafik energi kinetik maksimum elektron foto terhadap frekuensi cahaya. Grafiknya berupa garis lurus yang memotong sumbu frekuensi di frekuensi ambang f nol. Di bawah f nol tidak ada elektron yang terlepas. Kemiringan garis sama dengan tetapan Planck h, dan perpanjangan garis memotong sumbu energi di minus W nol, yaitu fungsi kerja logam." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Grafik <em>E</em><sub>k maks</sub> terhadap <em>f</em>. Semua logam menghasilkan garis dengan kemiringan sama, yaitu <em>h</em>, tetapi frekuensi ambangnya berbeda.</figcaption>
      </figure>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Logam</th><th>Fungsi kerja W<sub>0</sub> (perkiraan)</th></tr>
          </thead>
          <tbody>
            <tr><td>Sesium</td><td>2,1 eV</td></tr>
            <tr><td>Kalium</td><td>2,3 eV</td></tr>
            <tr><td>Natrium</td><td>2,3 eV</td></tr>
            <tr><td>Seng</td><td>4,3 eV</td></tr>
            <tr><td>Tembaga</td><td>4,7 eV</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Cahaya ungu 400 nm menyinari sesium (<em>W</em><sub>0</sub> = 2,1 eV). Dengan jalan pintas <em>hc</em> = 1.240 eV nm, energi foton <em>E</em> = 1.240/400 = 3,1 eV. Energi kinetik maksimum elektron <em>E</em><sub>k maks</sub> = 3,1 − 2,1 = 1,0 eV, sehingga potensial hentinya 1,0 V.
      </div>

      <p>Efek fotolistrik dimanfaatkan pada sensor cahaya pintu otomatis, alat ukur cahaya pada kamera, dan tabung pengganda foton pada detektor partikel. Sel surya bekerja dengan prinsip yang mirip (efek fotovoltaik), yaitu foton membebaskan elektron di dalam bahan semikonduktor sehingga timbul arus listrik.</p>
    </section>

    <!-- ============ 4. COMPTON ============ -->
    <section class="bagian" id="compton">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Efek Compton</h2>
      </div>

      <p>Pada tahun 1923, Arthur Compton menembakkan sinar-X ke balok grafit dan mengukur sinar-X yang terhambur. Ternyata panjang gelombang sinar-X yang terhambur <strong>lebih panjang</strong> daripada sinar-X yang datang. Hasil ini hanya dapat dijelaskan jika foton dianggap partikel yang bertumbukan dengan elektron seperti dua bola biliar: foton kehilangan sebagian energi dan momentumnya kepada elektron.</p>

      <div class="rumus">
        <div class="rumus-judul">Efek Compton dan momentum foton</div>
        <div class="rumus-isi">
          <math display="block" aria-label="delta lambda sama dengan lambda aksen dikurangi lambda sama dengan h per m nol c dikali kurung 1 dikurangi cos theta">
            <mi>Δ</mi><mi>λ</mi><mo>=</mo><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>cos</mi><mi>θ</mi><mo stretchy="false">)</mo>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="momentum foton p sama dengan h per lambda">
            <mi>p</mi><mo>=</mo><mfrac><mi>h</mi><mi>λ</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>λ, λ′</dt><dd>panjang gelombang foton sebelum dan sesudah terhambur <span class="satuan">(m)</span></dd>
            <dt>m<sub>0</sub></dt><dd>massa diam elektron, 9,11 × 10<sup>−31</sup> <span class="satuan">(kg)</span></dd>
            <dt>θ</dt><dd>sudut hamburan foton</dd>
            <dt>h/(m<sub>0</sub>c)</dt><dd>panjang gelombang Compton, 2,43 × 10<sup>−12</sup> <span class="satuan">(m)</span></dd>
            <dt>p</dt><dd>momentum foton <span class="satuan">(kg m/s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Sinar-X terhambur dengan sudut 90°, sehingga cos θ = 0 dan Δλ = 2,43 × 10<sup>−12</sup> m. Pergeseran ini sangat kecil, sehingga hanya teramati pada sinar-X dan sinar gamma yang panjang gelombangnya juga sangat pendek, tidak pada cahaya tampak.
      </div>
    </section>

    <!-- ============ 5. DE BROGLIE ============ -->
    <section class="bagian" id="de-broglie">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Gelombang de Broglie</h2>
      </div>

      <p>Jika gelombang (cahaya) dapat bersifat partikel, mungkinkah partikel bersifat gelombang? Pada tahun 1924, Louis de Broglie mengusulkan bahwa setiap benda yang bergerak memiliki panjang gelombang yang ditentukan oleh momentumnya. Gelombang ini disebut <strong>gelombang materi</strong>.</p>

      <div class="rumus">
        <div class="rumus-judul">Panjang gelombang de Broglie</div>
        <div class="rumus-isi">
          <math display="block" aria-label="lambda sama dengan h per p sama dengan h per m v">
            <mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mi>p</mi></mfrac><mo>=</mo><mfrac><mi>h</mi><mrow><mi>m</mi><mi>v</mi></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="partikel bermuatan q yang dipercepat beda potensial V: lambda sama dengan h per akar 2 m q V">
            <mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><msqrt><mn>2</mn><mi>m</mi><mi>q</mi><mi>V</mi></msqrt></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>λ</dt><dd>panjang gelombang de Broglie <span class="satuan">(m)</span></dd>
            <dt>m, v</dt><dd>massa dan kecepatan partikel <span class="satuan">(kg, m/s)</span></dd>
            <dt>q</dt><dd>muatan partikel; untuk elektron q = e <span class="satuan">(C)</span></dd>
            <dt>V</dt><dd>beda potensial yang mempercepat partikel dari diam <span class="satuan">(V)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Elektron dipercepat dari diam oleh beda potensial 100 V: λ = 6,63 × 10<sup>−34</sup>/√(2 × 9,11 × 10<sup>−31</sup> × 1,6 × 10<sup>−19</sup> × 100) ≈ 1,2 × 10<sup>−10</sup> m = 0,12 nm. Panjang ini seukuran jarak antaratom dalam kristal. Bandingkan dengan bola 0,1 kg yang bergerak 10 m/s: λ = 6,63 × 10<sup>−34</sup> m, terlalu kecil untuk diamati.
      </div>

      <p>Hipotesis de Broglie dibuktikan oleh Clinton Davisson dan Lester Germer pada tahun 1927. Berkas elektron yang ditembakkan ke kristal nikel menghasilkan pola difraksi, persis seperti gelombang. Sifat gelombang elektron kini dimanfaatkan pada <strong>mikroskop elektron</strong>. Panjang gelombang elektron jauh lebih pendek daripada cahaya tampak, sehingga mikroskop elektron dapat memperlihatkan benda sekecil virus dan susunan atom.</p>
    </section>

    <!-- ============ 6. HEISENBERG ============ -->
    <section class="bagian" id="heisenberg">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Prinsip ketidakpastian Heisenberg</h2>
      </div>

      <p>Karena partikel juga bersifat gelombang, posisinya tidak dapat ditunjuk dengan tepat di satu titik. Werner Heisenberg (1927) menyatakan bahwa posisi dan momentum sebuah partikel <strong>tidak dapat diukur dengan ketelitian sempurna secara bersamaan</strong>. Makin teliti posisinya diketahui, makin tidak pasti momentumnya, dan sebaliknya.</p>

      <div class="rumus">
        <div class="rumus-judul">Prinsip ketidakpastian</div>
        <div class="rumus-isi">
          <math display="block" aria-label="delta x dikali delta p lebih besar sama dengan h per 4 pi">
            <mi>Δ</mi><mi>x</mi><mo>·</mo><mi>Δ</mi><mi>p</mi><mo>≥</mo><mfrac><mi>h</mi><mrow><mn>4</mn><mi>π</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Δx</dt><dd>ketidakpastian posisi <span class="satuan">(m)</span></dd>
            <dt>Δp</dt><dd>ketidakpastian momentum <span class="satuan">(kg m/s)</span></dd>
          </dl>
        </div>
      </div>

      <p>Ketidakpastian ini bukan akibat alat ukur yang kurang baik, melainkan sifat dasar alam. Karena itu, model atom modern tidak lagi menggambarkan elektron beredar pada lintasan tertentu, tetapi sebagai <strong>awan elektron</strong> yang menyatakan peluang keberadaan elektron. Hal ini dibahas di bab Perkembangan Model Atom.</p>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Konsep</th><th>Keterangan</th><th>Rumus</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Efek fotolistrik</td><td>cahaya sebagai partikel</td>
              <td><math><mi>h</mi><mi>f</mi><mo>=</mo><msub><mi>W</mi><mn>0</mn></msub><mo>+</mo><msub><mi>E</mi><mtext>k maks</mtext></msub></math></td>
            </tr>
            <tr>
              <td>Fungsi kerja</td><td>bergantung jenis logam</td>
              <td><math><msub><mi>W</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><msub><mi>f</mi><mn>0</mn></msub></math></td>
            </tr>
            <tr>
              <td>Potensial henti</td><td>mengukur E<sub>k maks</sub></td>
              <td><math><msub><mi>E</mi><mtext>k maks</mtext></msub><mo>=</mo><mi>e</mi><msub><mi>V</mi><mn>0</mn></msub></math></td>
            </tr>
            <tr>
              <td>Efek Compton</td><td>foton memiliki momentum</td>
              <td><math><mi>Δ</mi><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>cos</mi><mi>θ</mi><mo stretchy="false">)</mo></math></td>
            </tr>
            <tr>
              <td>de Broglie</td><td>partikel sebagai gelombang</td>
              <td><math><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mi>m</mi><mi>v</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Heisenberg</td><td>batas ketelitian alam</td>
              <td><math><mi>Δ</mi><mi>x</mi><mi>Δ</mi><mi>p</mi><mo>≥</mo><mfrac><mi>h</mi><mrow><mn>4</mn><mi>π</mi></mrow></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

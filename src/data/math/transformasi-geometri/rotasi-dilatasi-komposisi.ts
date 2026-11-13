/* ====== Bab 112-2 · Rotasi, Dilatasi, dan Komposisi Transformasi ====== */

import { Chapter } from '../../materials';

export const rotasiDilatasiKomposisi: Chapter = {
  chapterId: "112-2",
  title: "Rotasi, Dilatasi, dan Komposisi",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika Tingkat Lanjut · Geometri · Kelas XI–XII</span>
      <h1>Rotasi, Dilatasi, dan Komposisi Transformasi</h1>
      <p>Rangkuman rotasi dan dilatasi terhadap titik asal maupun titik sembarang, komposisi transformasi dengan perkalian matriks, dan hubungan determinan dengan luas bayangan.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#rotasi">Rotasi</a></li>
        <li><a href="#dilatasi">Dilatasi</a></li>
        <li><a href="#komposisi">Komposisi transformasi</a></li>
        <li><a href="#luas">Luas bayangan</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <figure class="gambar">
      <div class="gambar-isi">
        <img src="/images/rotasi-dilatasi.svg" alt="Dua panel transformasi. Kiri, rotasi 90 derajat berlawanan arah jarum jam terhadap titik asal O memutar segitiga A(1, 1), B(3, 1), C(1, 3) menjadi A′(−1, 1), B′(−1, 3), C′(−3, 1); setiap titik (x, y) menjadi (−y, x). Kanan, dilatasi dengan pusat O dan faktor 2 memperbesar segitiga A(1, 1), B(2, 1), C(1, 2) menjadi A′(2, 2), B′(4, 2), C′(2, 4); garis putus-putus dari O melalui setiap titik menunjukkan jaraknya menjadi dua kali." />
      </div>
      <figcaption><strong>Gambar 1.</strong> Rotasi 90° terhadap O (kiri) dan dilatasi dengan pusat O dan faktor 2 (kanan).</figcaption>
    </figure>

    <!-- ============ 1. ROTASI ============ -->
    <section class="bagian" id="rotasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Rotasi</h2>
      </div>

      <p><strong>Rotasi</strong> memutar setiap titik terhadap sebuah <strong>pusat</strong> dengan sudut yang sama. Sudut θ positif berarti berlawanan arah jarum jam, dan θ negatif berarti searah jarum jam. Rotasi dengan pusat O dan sudut θ ditulis R[O, θ].</p>

      <div class="rumus">
        <div class="rumus-judul">Rotasi R[O, θ]</div>
        <div class="rumus-isi">
          <math display="block" aria-label="vektor x aksen, y aksen sama dengan matriks cos theta, negatif sin theta; sin theta, cos theta dikali vektor x, y">
            <mrow><mo>(</mo><mtable><mtr><mtd><msup><mi>x</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd><msup><mi>y</mi><mo>′</mo></msup></mtd></mtr></mtable><mo>)</mo></mrow>
            <mo>=</mo>
            <mrow><mo>[</mo><mtable><mtr><mtd><mi>cos</mi><mi>θ</mi></mtd><mtd><mo>−</mo><mi>sin</mi><mi>θ</mi></mtd></mtr><mtr><mtd><mi>sin</mi><mi>θ</mi></mtd><mtd><mi>cos</mi><mi>θ</mi></mtd></mtr></mtable><mo>]</mo></mrow>
            <mrow><mo>(</mo><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr></mtable><mo>)</mo></mrow>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>θ</dt><dd>sudut rotasi; positif berlawanan arah jarum jam</dd>
            <dt>pusat</dt><dd>titik asal O(0, 0)</dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Rotasi terhadap O</th><th>Bayangan (x, y)</th><th>Matriks</th></tr>
          </thead>
          <tbody>
            <tr><td>90°</td><td>(−y, x)</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>180°</td><td>(−x, −y)</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mo>−</mo><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>270° atau −90°</td><td>(y, −x)</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>−</mo><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Titik A(3, 1) dirotasi 90° terhadap O: A′ = (−1, 3). Rotasi 180° terhadap O sama dengan refleksi terhadap titik O.
      </div>

      <div class="sub">
        <h3><span class="no">1.1</span>Rotasi terhadap titik P(a, b)</h3>
        <p>Geser dulu sehingga P menjadi titik asal, rotasikan, lalu geser kembali:</p>
        <div class="rumus">
          <div class="rumus-judul">Rotasi R[P(a, b), θ]</div>
          <div class="rumus-isi">
            <math display="block" aria-label="vektor x aksen dikurangi a, y aksen dikurangi b sama dengan matriks rotasi dikali vektor x dikurangi a, y dikurangi b">
              <mrow><mo>(</mo><mtable><mtr><mtd><msup><mi>x</mi><mo>′</mo></msup><mo>−</mo><mi>a</mi></mtd></mtr><mtr><mtd><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>b</mi></mtd></mtr></mtable><mo>)</mo></mrow>
              <mo>=</mo>
              <mrow><mo>[</mo><mtable><mtr><mtd><mi>cos</mi><mi>θ</mi></mtd><mtd><mo>−</mo><mi>sin</mi><mi>θ</mi></mtd></mtr><mtr><mtd><mi>sin</mi><mi>θ</mi></mtd><mtd><mi>cos</mi><mi>θ</mi></mtd></mtr></mtable><mo>]</mo></mrow>
              <mrow><mo>(</mo><mtable><mtr><mtd><mi>x</mi><mo>−</mo><mi>a</mi></mtd></mtr><mtr><mtd><mi>y</mi><mo>−</mo><mi>b</mi></mtd></mtr></mtable><mo>)</mo></mrow>
            </math>
          </div>
        </div>
        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          Titik Q(3, 2) dirotasi 90° terhadap P(1, 1). Posisi relatif terhadap P: (3 − 1, 2 − 1) = (2, 1). Diputar 90° menjadi (−1, 2). Digeser kembali: Q′ = (−1 + 1, 2 + 1) = <strong>(0, 3)</strong>. Cek: jarak PQ = PQ′ = √5.
        </div>
      </div>
    </section>

    <!-- ============ 2. DILATASI ============ -->
    <section class="bagian" id="dilatasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Dilatasi</h2>
      </div>

      <p><strong>Dilatasi</strong> memperbesar atau memperkecil bangun terhadap sebuah pusat dengan <strong>faktor skala</strong> <em>k</em>, ditulis D[O, <em>k</em>]. Jarak setiap titik bayangan ke pusat sama dengan |<em>k</em>| kali jarak titik asalnya.</p>

      <div class="rumus">
        <div class="rumus-judul">Dilatasi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="dilatasi pusat O: vektor x aksen, y aksen sama dengan matriks k, 0; 0, k dikali vektor x, y">
            <mtext>D[O, k]:</mtext><mspace width="0.5em"/>
            <mrow><mo>(</mo><mtable><mtr><mtd><msup><mi>x</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd><msup><mi>y</mi><mo>′</mo></msup></mtd></mtr></mtable><mo>)</mo></mrow>
            <mo>=</mo>
            <mrow><mo>[</mo><mtable><mtr><mtd><mi>k</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>k</mi></mtd></mtr></mtable><mo>]</mo></mrow>
            <mrow><mo>(</mo><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr></mtable><mo>)</mo></mrow>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="dilatasi pusat P a, b: x aksen sama dengan a ditambah k dikali x dikurangi a, y aksen sama dengan b ditambah k dikali y dikurangi b">
            <mtext>D[P(a, b), k]:</mtext><mspace width="0.5em"/>
            <msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo>+</mo><mi>k</mi><mo>(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo>)</mo><mo>,</mo><mspace width="0.6em"/>
            <msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>b</mi><mo>+</mo><mi>k</mi><mo>(</mo><mi>y</mi><mo>−</mo><mi>b</mi><mo>)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>k &gt; 1</dt><dd>diperbesar, searah dari pusat</dd>
            <dt>0 &lt; k &lt; 1</dt><dd>diperkecil, searah dari pusat</dd>
            <dt>k &lt; 0</dt><dd>bayangan berada di seberang pusat (terbalik)</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Titik A(2, −1) didilatasi D[O, 3]: A′ = <strong>(6, −3)</strong>.<br>
        Titik Q(3, 5) didilatasi D[P(1, 2), 2]: Q′ = (1 + 2(3 − 1), 2 + 2(5 − 2)) = <strong>(5, 8)</strong>.
      </div>
    </section>

    <!-- ============ 3. KOMPOSISI ============ -->
    <section class="bagian" id="komposisi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Komposisi transformasi</h2>
      </div>

      <p>Jika transformasi T<sub>1</sub> (matriks M<sub>1</sub>) dilanjutkan T<sub>2</sub> (matriks M<sub>2</sub>), hasilnya setara dengan satu transformasi bermatriks M = M<sub>2</sub> · M<sub>1</sub>. Matriks transformasi yang dikerjakan <strong>lebih dulu ditulis paling kanan</strong>, sama seperti komposisi fungsi.</p>

      <div class="rumus">
        <div class="rumus-judul">Matriks komposisi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="vektor x aksen, y aksen sama dengan M 2 dikali M 1 dikali vektor x, y">
            <mrow><mo>(</mo><mtable><mtr><mtd><msup><mi>x</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd><msup><mi>y</mi><mo>′</mo></msup></mtd></mtr></mtable><mo>)</mo></mrow>
            <mo>=</mo><msub><mi>M</mi><mn>2</mn></msub><mo>·</mo><msub><mi>M</mi><mn>1</mn></msub>
            <mrow><mo>(</mo><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr></mtable><mo>)</mo></mrow>
          </math>
        </div>
      </div>

      <div class="kartu">
        <span class="istilah">Contoh</span>
        <p>Refleksi terhadap sumbu <em>x</em> dilanjutkan rotasi 90° terhadap O.</p>
      </div>
      <ol class="langkah">
        <li>M<sub>1</sub> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> (refleksi sumbu <em>x</em>), M<sub>2</sub> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> (rotasi 90°).</li>
        <li>M = M<sub>2</sub>M<sub>1</sub> = <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn><mo>·</mo><mn>1</mn><mo>+</mo><mo>(</mo><mo>−</mo><mn>1</mn><mo>)</mo><mo>·</mo><mn>0</mn></mtd><mtd><mn>0</mn><mo>·</mo><mn>0</mn><mo>+</mo><mo>(</mo><mo>−</mo><mn>1</mn><mo>)</mo><mo>(</mo><mo>−</mo><mn>1</mn><mo>)</mo></mtd></mtr><mtr><mtd><mn>1</mn><mo>·</mo><mn>1</mn><mo>+</mo><mn>0</mn><mo>·</mo><mn>0</mn></mtd><mtd><mn>1</mn><mo>·</mo><mn>0</mn><mo>+</mo><mn>0</mn><mo>·</mo><mo>(</mo><mo>−</mo><mn>1</mn><mo>)</mo></mtd></mtr></mtable><mo>]</mo></mrow></math> = <strong><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></strong>.</li>
        <li>Matriks ini adalah refleksi terhadap garis <em>y</em> = <em>x</em>. Cek dengan titik (2, 1): dicerminkan terhadap sumbu <em>x</em> menjadi (2, −1), lalu dirotasi 90° menjadi (1, 2), sama dengan <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>(2, 1) = (1, 2).</li>
      </ol>

      <ul class="poin">
        <li>Dua rotasi berpusat sama: R[O, α] lalu R[O, β] = R[O, α + β].</li>
        <li>Dua translasi: T<sub>1</sub> lalu T<sub>2</sub> = translasi T<sub>1</sub> + T<sub>2</sub>.</li>
        <li>Dua refleksi terhadap garis sejajar <em>x</em> = <em>h</em> lalu <em>x</em> = <em>k</em> = translasi sejauh 2(<em>k</em> − <em>h</em>) mendatar.</li>
        <li>Dua refleksi terhadap garis yang berpotongan dengan sudut α = rotasi sebesar 2α terhadap titik potongnya.</li>
        <li>Pada umumnya urutan komposisi tidak dapat ditukar, karena perkalian matriks tidak komutatif.</li>
      </ul>
    </section>

    <!-- ============ 4. LUAS ============ -->
    <section class="bagian" id="luas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Luas bayangan</h2>
      </div>

      <p>Transformasi dengan matriks M mengubah luas setiap bangun dengan faktor yang sama, yaitu nilai mutlak determinan M.</p>

      <div class="rumus">
        <div class="rumus-judul">Luas bayangan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="L aksen sama dengan nilai mutlak determinan M dikali L">
            <msup><mi>L</mi><mo>′</mo></msup><mo>=</mo><mo>|</mo><mi>det</mi><mi>M</mi><mo>|</mo><mo>×</mo><mi>L</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>L, L′</dt><dd>luas bangun asal dan luas bayangan</dd>
            <dt>isometri</dt><dd>refleksi dan rotasi memiliki |det M| = 1, sehingga luasnya tetap</dd>
            <dt>dilatasi</dt><dd>det <math><mrow><mo>[</mo><mtable><mtr><mtd><mi>k</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>k</mi></mtd></mtr></mtable><mo>]</mo></mrow></math> = k², sehingga luas menjadi k² kali</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Segitiga berluas 6 satuan luas ditransformasi oleh matriks <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>3</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>. Determinannya 2·3 − 1·1 = 5, sehingga luas bayangannya 5 × 6 = <strong>30 satuan luas</strong>. Pada Gambar 1, dilatasi faktor 2 membuat luas segitiga menjadi 2<sup>2</sup> = 4 kali, dari ½ menjadi 2 satuan luas.
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Transformasi</th><th>Matriks / rumus</th></tr>
          </thead>
          <tbody>
            <tr><td>Rotasi R[O, θ]</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mi>cos</mi><mi>θ</mi></mtd><mtd><mo>−</mo><mi>sin</mi><mi>θ</mi></mtd></mtr><mtr><mtd><mi>sin</mi><mi>θ</mi></mtd><mtd><mi>cos</mi><mi>θ</mi></mtd></mtr></mtable><mo>]</mo></mrow></math>; 90°: (−y, x)</td></tr>
            <tr><td>Rotasi terhadap P(a, b)</td><td>rotasikan (x − a, y − b), lalu tambah (a, b)</td></tr>
            <tr><td>Dilatasi D[O, k]</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mi>k</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>k</mi></mtd></mtr></mtable><mo>]</mo></mrow></math>: (kx, ky)</td></tr>
            <tr><td>Dilatasi terhadap P(a, b)</td><td>(a + k(x − a), b + k(y − b))</td></tr>
            <tr><td>Komposisi T<sub>1</sub> lalu T<sub>2</sub></td><td>M = M<sub>2</sub> · M<sub>1</sub></td></tr>
            <tr><td>Luas bayangan</td><td>L′ = |det M| × L</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Tingkat Lanjut Fase F, elemen Aljabar dan Fungsi: operasi aljabar pada matriks dan penerapannya dalam transformasi geometri (Keputusan Kepala BSKAP No. 032/H/KR/2024, diperbarui dengan No. 046/H/KR/2025); Buku <em>Matematika Tingkat Lanjut untuk SMA Kelas XI</em>, Pusat Perbukuan Kemendikbudristek.
    </footer>
  `,
  formula: "",
  example: ""
};

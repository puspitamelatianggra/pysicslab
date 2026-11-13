/* ====== Bab 111-1 · Vektor dan Operasinya ====== */

import { Chapter } from '../../materials';

export const vektorOperasi: Chapter = {
  chapterId: "111-1",
  title: "Vektor dan Operasinya",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika Tingkat Lanjut · Geometri · Kelas XI–XII</span>
      <h1>Vektor dan Operasinya</h1>
      <p>Rangkuman pengertian vektor, komponen dan panjang vektor, vektor satuan, penjumlahan, pengurangan, dan perkalian vektor dengan skalar, serta vektor posisi dan titik pembagi ruas garis.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian vektor</a></li>
        <li><a href="#komponen">Komponen dan panjang vektor</a></li>
        <li><a href="#operasi">Operasi vektor</a></li>
        <li><a href="#posisi">Vektor posisi dan titik pembagi</a></li>
        <li><a href="#ruang">Vektor di ruang</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian vektor</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Vektor</span>
        <p>Besaran yang memiliki <strong>besar</strong> (panjang) dan <strong>arah</strong>. Vektor digambar sebagai ruas garis berarah (panah) dan ditulis dengan huruf tebal <strong>a</strong>, huruf berpanah <math><mover><mi>a</mi><mo>→</mo></mover></math>, atau dua titik <math><mover><mrow><mi>A</mi><mi>B</mi></mrow><mo>→</mo></mover></math> (dari titik pangkal A ke titik ujung B).</p>
      </div>

      <ul class="poin">
        <li>Dua vektor <strong>sama</strong> jika besar dan arahnya sama, walaupun letaknya berbeda.</li>
        <li><strong>Vektor negatif</strong> −<strong>a</strong> memiliki besar yang sama dengan <strong>a</strong> tetapi arahnya berlawanan. Jadi <math><mover><mrow><mi>B</mi><mi>A</mi></mrow><mo>→</mo></mover></math> = −<math><mover><mrow><mi>A</mi><mi>B</mi></mrow><mo>→</mo></mover></math>.</li>
        <li><strong>Vektor nol</strong> <strong>0</strong> panjangnya nol dan arahnya tidak tertentu.</li>
      </ul>
    </section>

    <!-- ============ 2. KOMPONEN ============ -->
    <section class="bagian" id="komponen">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Komponen dan panjang vektor</h2>
      </div>

      <p>Di bidang koordinat, vektor dinyatakan dengan <strong>komponennya</strong>: berapa langkah mendatar dan berapa langkah tegak dari pangkal ke ujung.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/vektor-komponen.svg" alt="Vektor a digambar sebagai panah dari titik asal O ke titik A(4, 3). Komponen mendatarnya 4 dan komponen tegaknya 3, ditunjukkan garis putus-putus. Panjang vektor a sama dengan akar dari 4 kuadrat ditambah 3 kuadrat, yaitu 5." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Vektor <strong>a</strong> = (4, 3) beserta komponen dan panjangnya.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Komponen, panjang, dan vektor satuan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a sama dengan vektor kolom a 1, a 2, sama dengan a 1 i ditambah a 2 j">
            <mi mathvariant="bold">a</mi><mo>=</mo><mrow><mo>(</mo><mtable><mtr><mtd><msub><mi>a</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mn>2</mn></msub></mtd></mtr></mtable><mo>)</mo></mrow>
            <mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mi mathvariant="bold">i</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mi mathvariant="bold">j</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="panjang a sama dengan akar a 1 kuadrat ditambah a 2 kuadrat; vektor satuan a sama dengan a dibagi panjang a">
            <mo>|</mo><mi mathvariant="bold">a</mi><mo>|</mo><mo>=</mo><msqrt><msubsup><mi>a</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>a</mi><mn>2</mn><mn>2</mn></msubsup></msqrt>
            <mspace width="1.5em"/>
            <mover><mi mathvariant="bold">a</mi><mo>^</mo></mover><mo>=</mo><mfrac><mi mathvariant="bold">a</mi><mrow><mo>|</mo><mi mathvariant="bold">a</mi><mo>|</mo></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>a<sub>1</sub>, a<sub>2</sub></dt><dd>komponen mendatar dan tegak</dd>
            <dt>i, j</dt><dd>vektor satuan searah sumbu x dan sumbu y: i = (1, 0), j = (0, 1)</dd>
            <dt>|a|</dt><dd>panjang (besar) vektor, dari teorema Pythagoras</dd>
            <dt>â</dt><dd>vektor satuan: searah a dan panjangnya 1</dd>
          </dl>
        </div>
      </div>

      <p>Vektor dari titik A ke titik B diperoleh dengan mengurangkan koordinat: <math><mover><mrow><mi>A</mi><mi>B</mi></mrow><mo>→</mo></mover></math> = <strong>b</strong> − <strong>a</strong> = (<em>x</em><sub>B</sub> − <em>x</em><sub>A</sub>, <em>y</em><sub>B</sub> − <em>y</em><sub>A</sub>), atau "ujung dikurangi pangkal".</p>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        A(1, 2) dan B(5, 5). <math><mover><mrow><mi>A</mi><mi>B</mi></mrow><mo>→</mo></mover></math> = (5 − 1, 5 − 2) = (4, 3), panjangnya |<math><mover><mrow><mi>A</mi><mi>B</mi></mrow><mo>→</mo></mover></math>| = √(16 + 9) = <strong>5</strong>, dan vektor satuannya (4/5, 3/5).
      </div>
    </section>

    <!-- ============ 3. OPERASI ============ -->
    <section class="bagian" id="operasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Operasi vektor</h2>
      </div>

      <figure class="gambar lebar">
        <div class="gambar-isi">
          <img src="/images/operasi-vektor.svg" alt="Tiga panel operasi vektor dengan a = (3, 1) berwarna oranye dan b = (1, 2) berwarna hitam. Kiri, aturan segitiga: pangkal b diletakkan di ujung a, dan a + b adalah panah dari pangkal a ke ujung b. Tengah, aturan jajargenjang: a dan b berpangkal di titik yang sama, dan a + b adalah diagonal jajargenjang yang dibentuk keduanya. Kanan, pengurangan: a − b adalah panah dari ujung b ke ujung a." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Penjumlahan dengan aturan segitiga dan jajargenjang, serta pengurangan vektor.</figcaption>
      </figure>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Operasi</th><th>Secara geometri</th><th>Dengan komponen</th></tr>
          </thead>
          <tbody>
            <tr><td>Penjumlahan a + b</td><td>aturan segitiga atau jajargenjang</td><td>(a<sub>1</sub> + b<sub>1</sub>, a<sub>2</sub> + b<sub>2</sub>)</td></tr>
            <tr><td>Pengurangan a − b</td><td>a + (−b); panah dari ujung b ke ujung a</td><td>(a<sub>1</sub> − b<sub>1</sub>, a<sub>2</sub> − b<sub>2</sub>)</td></tr>
            <tr><td>Perkalian skalar ka</td><td>panjang dikali |k|; berlawanan arah jika k &lt; 0</td><td>(ka<sub>1</sub>, ka<sub>2</sub>)</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        <strong>a</strong> = (3, 1) dan <strong>b</strong> = (1, 2): <strong>a</strong> + <strong>b</strong> = (4, 3), <strong>a</strong> − <strong>b</strong> = (2, −1), dan 3<strong>a</strong> − 2<strong>b</strong> = (9 − 2, 3 − 4) = <strong>(7, −1)</strong>.
      </div>

      <p>Penjumlahan vektor bersifat komutatif (<strong>a</strong> + <strong>b</strong> = <strong>b</strong> + <strong>a</strong>) dan asosiatif, serta <strong>a</strong> + (−<strong>a</strong>) = <strong>0</strong>. Dua vektor <strong>sejajar</strong> jika salah satunya kelipatan skalar yang lain: <strong>b</strong> = <em>k</em><strong>a</strong>.</p>
    </section>

    <!-- ============ 4. POSISI ============ -->
    <section class="bagian" id="posisi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Vektor posisi dan titik pembagi</h2>
      </div>

      <p><strong>Vektor posisi</strong> titik A adalah vektor dari titik asal O ke A, ditulis <strong>a</strong> = <math><mover><mrow><mi>O</mi><mi>A</mi></mrow><mo>→</mo></mover></math>. Komponennya sama dengan koordinat titik A.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/titik-pembagi.svg" alt="Ruas garis dari A(2, 4) ke B(8, 1) dibagi oleh titik P(4, 3) dengan perbandingan AP banding PB sama dengan 1 banding 2. Vektor posisi a, b, dan p digambar dari titik asal O. Vektor posisi p sama dengan n kali a ditambah m kali b, dibagi m ditambah n." />
        </div>
        <figcaption><strong>Gambar 3.</strong> Titik P membagi ruas garis AB dengan perbandingan AP : PB = 1 : 2.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Titik pembagi ruas garis</div>
        <div class="rumus-isi">
          <math display="block" aria-label="p sama dengan n a ditambah m b, dibagi m ditambah n">
            <mi mathvariant="bold">p</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mi mathvariant="bold">a</mi><mo>+</mo><mi>m</mi><mi mathvariant="bold">b</mi></mrow><mrow><mi>m</mi><mo>+</mo><mi>n</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>m : n</dt><dd>perbandingan AP : PB</dd>
            <dt>a, b, p</dt><dd>vektor posisi titik A, B, dan P</dd>
            <dt>titik tengah</dt><dd>m = n, sehingga p = ½(a + b)</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        A(2, 4), B(8, 1), dan AP : PB = 1 : 2. Maka <strong>p</strong> = (2(2, 4) + 1(8, 1))/3 = ((4 + 8)/3, (8 + 1)/3) = <strong>(4, 3)</strong>. Cek: <math><mover><mrow><mi>A</mi><mi>P</mi></mrow><mo>→</mo></mover></math> = (2, −1) dan <math><mover><mrow><mi>P</mi><mi>B</mi></mrow><mo>→</mo></mover></math> = (4, −2) = 2<math><mover><mrow><mi>A</mi><mi>P</mi></mrow><mo>→</mo></mover></math>.
      </div>

      <p>Tiga titik A, B, C <strong>segaris</strong> (kolinear) jika <math><mover><mrow><mi>A</mi><mi>B</mi></mrow><mo>→</mo></mover></math> = <em>k</em> · <math><mover><mrow><mi>A</mi><mi>C</mi></mrow><mo>→</mo></mover></math> untuk suatu bilangan <em>k</em>.</p>
    </section>

    <!-- ============ 5. RUANG ============ -->
    <section class="bagian" id="ruang">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Vektor di ruang</h2>
      </div>

      <p>Semua konsep di atas berlaku juga di ruang tiga dimensi dengan tambahan komponen ketiga: <strong>a</strong> = (<em>a</em><sub>1</sub>, <em>a</em><sub>2</sub>, <em>a</em><sub>3</sub>) = <em>a</em><sub>1</sub><strong>i</strong> + <em>a</em><sub>2</sub><strong>j</strong> + <em>a</em><sub>3</sub><strong>k</strong>, dengan panjang |<strong>a</strong>| = √(<em>a</em><sub>1</sub><sup>2</sup> + <em>a</em><sub>2</sub><sup>2</sup> + <em>a</em><sub>3</sub><sup>2</sup>). Contoh: |(2, −1, 2)| = √(4 + 1 + 4) = 3.</p>
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
            <tr><td>Vektor dua titik</td><td>AB = b − a (ujung − pangkal)</td></tr>
            <tr><td>Panjang</td><td>|a| = √(a<sub>1</sub>² + a<sub>2</sub>²)</td></tr>
            <tr><td>Vektor satuan</td><td>â = a / |a|</td></tr>
            <tr><td>Operasi</td><td>dijumlah, dikurang, dikali skalar per komponen</td></tr>
            <tr><td>Sejajar</td><td>b = ka</td></tr>
            <tr><td>Titik pembagi</td><td>p = (na + mb)/(m + n); titik tengah ½(a + b)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Tingkat Lanjut Fase F, elemen Geometri: menyatakan vektor pada bidang datar, melakukan operasi aljabar pada vektor, dan menggunakannya untuk pembuktian geometris (Keputusan Kepala BSKAP No. 032/H/KR/2024, diperbarui dengan No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Vektor dan Operasinya.
    </footer>
  `,
  formula: "",
  example: ""
};

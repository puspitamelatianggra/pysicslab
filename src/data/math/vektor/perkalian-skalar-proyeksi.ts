/* ====== Bab 111-2 · Perkalian Skalar Dua Vektor dan Proyeksi ====== */

import { Chapter } from '../../materials';

export const perkalianSkalarProyeksi: Chapter = {
  chapterId: "111-2",
  title: "Perkalian Skalar dan Proyeksi Vektor",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika Tingkat Lanjut · Geometri · Kelas XI–XII</span>
      <h1>Perkalian Skalar Dua Vektor dan Proyeksi</h1>
      <p>Rangkuman perkalian skalar (perkalian titik) dua vektor, sudut antara dua vektor, syarat tegak lurus, proyeksi ortogonal, serta penggunaan vektor untuk membuktikan sifat-sifat geometri.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#perkalian-titik">Perkalian skalar dua vektor</a></li>
        <li><a href="#sudut">Sudut antara dua vektor</a></li>
        <li><a href="#proyeksi">Proyeksi ortogonal</a></li>
        <li><a href="#pembuktian">Pembuktian geometri dengan vektor</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PERKALIAN TITIK ============ -->
    <section class="bagian" id="perkalian-titik">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Perkalian skalar dua vektor</h2>
      </div>

      <p>Perkalian skalar (disebut juga <strong>perkalian titik</strong> atau <em>dot product</em>) mengalikan dua vektor dan hasilnya berupa <strong>bilangan</strong>, bukan vektor. Perkalian ini dapat dihitung dari panjang dan sudut, atau langsung dari komponennya.</p>

      <div class="rumus">
        <div class="rumus-judul">Perkalian skalar</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a titik b sama dengan panjang a kali panjang b kali cos theta">
            <mi mathvariant="bold">a</mi><mo>·</mo><mi mathvariant="bold">b</mi><mo>=</mo><mo>|</mo><mi mathvariant="bold">a</mi><mo>|</mo><mspace width="0.1em"/><mo>|</mo><mi mathvariant="bold">b</mi><mo>|</mo><mi>cos</mi><mi>θ</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="a titik b sama dengan a 1 b 1 ditambah a 2 b 2">
            <mi mathvariant="bold">a</mi><mo>·</mo><mi mathvariant="bold">b</mi><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><msub><mi>b</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msub><mi>b</mi><mn>2</mn></msub>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>θ</dt><dd>sudut antara a dan b ketika pangkalnya berimpit, 0° ≤ θ ≤ 180°</dd>
            <dt>a<sub>1</sub>, a<sub>2</sub>, b<sub>1</sub>, b<sub>2</sub></dt><dd>komponen kedua vektor; di ruang ditambah a<sub>3</sub>b<sub>3</sub></dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li>Komutatif: <strong>a</strong> · <strong>b</strong> = <strong>b</strong> · <strong>a</strong>. Distributif: <strong>a</strong> · (<strong>b</strong> + <strong>c</strong>) = <strong>a</strong> · <strong>b</strong> + <strong>a</strong> · <strong>c</strong>.</li>
        <li>Perkalian vektor dengan dirinya sendiri: <strong>a</strong> · <strong>a</strong> = |<strong>a</strong>|<sup>2</sup>.</li>
        <li><strong>Tegak lurus</strong>: <strong>a</strong> ⊥ <strong>b</strong> jika dan hanya jika <strong>a</strong> · <strong>b</strong> = 0, karena cos 90° = 0.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        (3, 4) · (4, −3) = 12 − 12 = 0, jadi kedua vektor itu <strong>tegak lurus</strong>.<br>
        Untuk vektor <strong>a</strong> = (2, <em>p</em>) dan <strong>b</strong> = (3, −1) yang tegak lurus: 6 − <em>p</em> = 0, sehingga <em>p</em> = 6.
      </div>

      <p><strong>Penerapan di fisika.</strong> Usaha oleh gaya adalah perkalian skalar gaya dan perpindahan: <em>W</em> = <strong>F</strong> · <strong>s</strong>. Gaya <strong>F</strong> = (3, 4) N yang memindahkan benda sejauh <strong>s</strong> = (5, 0) m melakukan usaha <em>W</em> = 15 + 0 = 15 J.</p>
    </section>

    <!-- ============ 2. SUDUT ============ -->
    <section class="bagian" id="sudut">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Sudut antara dua vektor</h2>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Kosinus sudut antara dua vektor</div>
        <div class="rumus-isi">
          <math display="block" aria-label="cos theta sama dengan a titik b dibagi panjang a kali panjang b">
            <mi>cos</mi><mi>θ</mi><mo>=</mo><mfrac><mrow><mi mathvariant="bold">a</mi><mo>·</mo><mi mathvariant="bold">b</mi></mrow><mrow><mo>|</mo><mi mathvariant="bold">a</mi><mo>|</mo><mspace width="0.1em"/><mo>|</mo><mi mathvariant="bold">b</mi><mo>|</mo></mrow></mfrac>
          </math>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Tanda a · b</th><th>Sudut θ</th></tr>
          </thead>
          <tbody>
            <tr><td>positif</td><td>lancip (0° ≤ θ &lt; 90°)</td></tr>
            <tr><td>nol</td><td>siku-siku (θ = 90°)</td></tr>
            <tr><td>negatif</td><td>tumpul (90° &lt; θ ≤ 180°)</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        <strong>a</strong> = (2, 2) dan <strong>b</strong> = (0, 3). <strong>a</strong> · <strong>b</strong> = 0 + 6 = 6, |<strong>a</strong>| = 2√2, |<strong>b</strong>| = 3. Maka cos θ = 6/(6√2) = ½√2, sehingga <strong>θ = 45°</strong>.
      </div>
    </section>

    <!-- ============ 3. PROYEKSI ============ -->
    <section class="bagian" id="proyeksi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Proyeksi ortogonal</h2>
      </div>

      <p>Proyeksi ortogonal <strong>a</strong> pada <strong>b</strong> adalah "bayangan" <strong>a</strong> pada garis yang memuat <strong>b</strong>, seperti bayangan tongkat di tanah ketika cahaya datang tegak lurus.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/proyeksi-vektor.svg" alt="Vektor a = (3, 4) berwarna oranye dan vektor b = (2, 1) berwarna hitam berpangkal di titik asal dan membentuk sudut θ. Dari ujung a ditarik garis putus-putus tegak lurus ke perpanjangan b, jatuh di titik (4, 2). Vektor c = (4, 2) dari titik asal ke titik itu, yang digaris tebal, adalah proyeksi ortogonal a pada b." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Vektor <strong>c</strong> adalah proyeksi ortogonal <strong>a</strong> pada <strong>b</strong>.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Proyeksi a pada b</div>
        <div class="rumus-isi">
          <math display="block" aria-label="panjang proyeksi c sama dengan a titik b dibagi panjang b">
            <mo>|</mo><mi mathvariant="bold">c</mi><mo>|</mo><mo>=</mo><mfrac><mrow><mi mathvariant="bold">a</mi><mo>·</mo><mi mathvariant="bold">b</mi></mrow><mrow><mo>|</mo><mi mathvariant="bold">b</mi><mo>|</mo></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="vektor proyeksi c sama dengan a titik b dibagi kuadrat panjang b, dikali b">
            <mi mathvariant="bold">c</mi><mo>=</mo><mfrac><mrow><mi mathvariant="bold">a</mi><mo>·</mo><mi mathvariant="bold">b</mi></mrow><msup><mrow><mo>|</mo><mi mathvariant="bold">b</mi><mo>|</mo></mrow><mn>2</mn></msup></mfrac><mi mathvariant="bold">b</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>|c|</dt><dd>proyeksi skalar ortogonal, yaitu panjang bayangan (bertanda negatif jika sudutnya tumpul)</dd>
            <dt>c</dt><dd>proyeksi vektor ortogonal, searah b</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        <strong>a</strong> = (3, 4) dan <strong>b</strong> = (2, 1). <strong>a</strong> · <strong>b</strong> = 6 + 4 = 10 dan |<strong>b</strong>|<sup>2</sup> = 5.<br>
        Proyeksi skalar = 10/√5 = <strong>2√5</strong>. Proyeksi vektor = (10/5)(2, 1) = <strong>(4, 2)</strong>.<br>
        Cek: <strong>a</strong> − <strong>c</strong> = (−1, 2) dan (−1, 2) · (2, 1) = 0, jadi garis putus-putus pada Gambar 1 memang tegak lurus <strong>b</strong>.
      </div>
    </section>

    <!-- ============ 4. PEMBUKTIAN ============ -->
    <section class="bagian" id="pembuktian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Pembuktian geometri dengan vektor</h2>
      </div>

      <p>Banyak sifat bangun datar dapat dibuktikan secara singkat dengan vektor: nyatakan sisi-sisinya sebagai vektor, lalu gunakan operasi vektor dan perkalian skalar.</p>

      <div class="kartu">
        <span class="istilah">Bukti 1</span>
        <p><strong>Diagonal jajargenjang saling membagi dua sama panjang.</strong> Misalkan jajargenjang OACB dengan <math><mover><mrow><mi>O</mi><mi>A</mi></mrow><mo>→</mo></mover></math> = <strong>a</strong> dan <math><mover><mrow><mi>O</mi><mi>B</mi></mrow><mo>→</mo></mover></math> = <strong>b</strong>, sehingga <math><mover><mrow><mi>O</mi><mi>C</mi></mrow><mo>→</mo></mover></math> = <strong>a</strong> + <strong>b</strong>. Titik tengah diagonal OC adalah ½(<strong>a</strong> + <strong>b</strong>), dan titik tengah diagonal AB adalah ½(<strong>a</strong> + <strong>b</strong>). Keduanya titik yang sama, jadi kedua diagonal berpotongan tepat di tengah masing-masing.</p>
      </div>

      <div class="kartu">
        <span class="istilah">Bukti 2</span>
        <p><strong>Diagonal belah ketupat saling tegak lurus.</strong> Pada belah ketupat, |<strong>a</strong>| = |<strong>b</strong>|, dan kedua diagonalnya <strong>a</strong> + <strong>b</strong> serta <strong>a</strong> − <strong>b</strong>. Maka (<strong>a</strong> + <strong>b</strong>) · (<strong>a</strong> − <strong>b</strong>) = |<strong>a</strong>|<sup>2</sup> − |<strong>b</strong>|<sup>2</sup> = 0, sehingga kedua diagonal tegak lurus.</p>
      </div>

      <div class="kartu">
        <span class="istilah">Bukti 3</span>
        <p><strong>Sudut keliling yang menghadap diameter adalah 90°.</strong> Letakkan pusat lingkaran di O. Ujung diameter memiliki vektor posisi <strong>a</strong> dan −<strong>a</strong>, dan titik C pada lingkaran memiliki vektor posisi <strong>c</strong> dengan |<strong>c</strong>| = |<strong>a</strong>| = <em>r</em>. Kedua kaki sudutnya adalah <strong>c</strong> − <strong>a</strong> dan <strong>c</strong> + <strong>a</strong>, dan (<strong>c</strong> − <strong>a</strong>) · (<strong>c</strong> + <strong>a</strong>) = |<strong>c</strong>|<sup>2</sup> − |<strong>a</strong>|<sup>2</sup> = 0. Jadi sudutnya siku-siku.</p>
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
            <tr><td>Perkalian skalar</td><td>a · b = |a||b| cos θ = a<sub>1</sub>b<sub>1</sub> + a<sub>2</sub>b<sub>2</sub></td></tr>
            <tr><td>Tegak lurus</td><td>a · b = 0</td></tr>
            <tr><td>Sudut</td><td>cos θ = a · b / (|a||b|)</td></tr>
            <tr><td>Proyeksi skalar</td><td>|c| = a · b / |b|</td></tr>
            <tr><td>Proyeksi vektor</td><td>c = (a · b / |b|²) b</td></tr>
            <tr><td>Panjang kuadrat</td><td>a · a = |a|²</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Tingkat Lanjut Fase F, elemen Geometri: operasi aljabar pada vektor dan penggunaannya untuk pembuktian geometris (Keputusan Kepala BSKAP No. 032/H/KR/2024, diperbarui dengan No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Vektor dan Operasinya.
    </footer>
  `,
  formula: "",
  example: ""
};

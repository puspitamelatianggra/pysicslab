/* ====== Bab 112-1 · Translasi dan Refleksi ====== */

import { Chapter } from '../../materials';

export const translasiRefleksi: Chapter = {
  chapterId: "112-1",
  title: "Translasi dan Refleksi",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika Tingkat Lanjut · Geometri · Kelas XI–XII</span>
      <h1>Translasi dan Refleksi</h1>
      <p>Rangkuman pengertian transformasi geometri, translasi (pergeseran), refleksi (pencerminan) terhadap sumbu, titik asal, dan garis, beserta matriksnya, serta cara menentukan bayangan titik dan kurva.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian transformasi geometri</a></li>
        <li><a href="#translasi">Translasi</a></li>
        <li><a href="#refleksi">Refleksi</a></li>
        <li><a href="#bayangan-kurva">Bayangan garis dan kurva</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian transformasi geometri</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Transformasi geometri</span>
        <p>Aturan yang memetakan setiap titik P(<em>x</em>, <em>y</em>) pada bidang ke titik P′(<em>x</em>′, <em>y</em>′) yang disebut <strong>bayangan</strong>. Ada empat jenis dasar: translasi, refleksi, rotasi, dan dilatasi.</p>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Isometri</h3>
          <p>Translasi, refleksi, dan rotasi tidak mengubah <strong>bentuk dan ukuran</strong>. Bayangannya kongruen dengan bangun asal.</p>
        </div>
        <div class="kartu">
          <h3>Dilatasi</h3>
          <p>Mengubah <strong>ukuran</strong> tetapi tidak mengubah bentuk. Bayangannya sebangun dengan bangun asal.</p>
        </div>
      </div>

      <p>Kecuali translasi, setiap transformasi dasar dengan pusat di titik asal dapat ditulis sebagai perkalian <strong>matriks 2 × 2</strong> dengan vektor kolom titiknya:</p>

      <div class="rumus">
        <div class="rumus-judul">Transformasi dengan matriks</div>
        <div class="rumus-isi">
          <math display="block" aria-label="vektor x aksen, y aksen sama dengan matriks a, b; c, d dikali vektor x, y">
            <mrow><mo>(</mo><mtable><mtr><mtd><msup><mi>x</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd><msup><mi>y</mi><mo>′</mo></msup></mtd></mtr></mtable><mo>)</mo></mrow>
            <mo>=</mo>
            <mrow><mo>[</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr><mtr><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable><mo>]</mo></mrow>
            <mrow><mo>(</mo><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr></mtable><mo>)</mo></mrow>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>(x, y)</dt><dd>titik asal (sebelum transformasi)</dd>
            <dt>(x′, y′)</dt><dd>bayangan titik</dd>
            <dt><math><mrow><mo>[</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr><mtr><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd></mtr></mtable><mo>]</mo></mrow></math></dt><dd>matriks transformasi</dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ 2. TRANSLASI ============ -->
    <section class="bagian" id="translasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Translasi</h2>
      </div>

      <p><strong>Translasi</strong> menggeser setiap titik dengan jarak dan arah yang sama. Translasi ditulis sebagai vektor T = (<em>a</em>, <em>b</em>): <em>a</em> langkah mendatar (positif ke kanan) dan <em>b</em> langkah tegak (positif ke atas).</p>

      <div class="rumus">
        <div class="rumus-judul">Translasi T = (a, b)</div>
        <div class="rumus-isi">
          <math display="block" aria-label="vektor x aksen, y aksen sama dengan vektor x, y ditambah vektor a, b">
            <mrow><mo>(</mo><mtable><mtr><mtd><msup><mi>x</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd><msup><mi>y</mi><mo>′</mo></msup></mtd></mtr></mtable><mo>)</mo></mrow>
            <mo>=</mo>
            <mrow><mo>(</mo><mtable><mtr><mtd><mi>x</mi></mtd></mtr><mtr><mtd><mi>y</mi></mtd></mtr></mtable><mo>)</mo></mrow>
            <mo>+</mo>
            <mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd></mtr></mtable><mo>)</mo></mrow>
          </math>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/translasi-refleksi.svg" alt="Dua panel transformasi segitiga ABC dengan A(1, 1), B(3, 1), C(1, 3) berwarna lime. Kiri, translasi T = (4, 2) menggeser segitiga 4 satuan ke kanan dan 2 satuan ke atas menjadi A′(5, 3), B′(7, 3), C′(5, 5) berwarna oranye. Kanan, refleksi terhadap sumbu y memindahkan setiap titik (x, y) ke (−x, y), sehingga bayangannya A′(−1, 1), B′(−3, 1), C′(−1, 3) berada di seberang sumbu y." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Translasi T = (4, 2) (kiri) dan refleksi terhadap sumbu <em>y</em> (kanan) pada segitiga A(1, 1), B(3, 1), C(1, 3).</figcaption>
      </figure>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Segitiga A(1, 1), B(3, 1), C(1, 3) ditranslasikan oleh T = (4, 2). Bayangannya A′(5, 3), B′(7, 3), dan C′(5, 5). Bentuk dan ukuran segitiga tidak berubah.
      </div>
    </section>

    <!-- ============ 3. REFLEKSI ============ -->
    <section class="bagian" id="refleksi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Refleksi</h2>
      </div>

      <p><strong>Refleksi</strong> memindahkan setiap titik ke seberang sebuah garis cermin, dengan jarak ke cermin yang sama. Garis cermin menjadi sumbu simetri antara bangun asal dan bayangannya.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Refleksi terhadap</th><th>Bayangan (x, y)</th><th>Matriks</th></tr>
          </thead>
          <tbody>
            <tr><td>Sumbu x</td><td>(x, −y)</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>Sumbu y</td><td>(−x, y)</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mo>−</mo><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>Titik asal O</td><td>(−x, −y)</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mo>−</mo><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>Garis y = x</td><td>(y, x)</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>Garis y = −x</td><td>(−y, −x)</td><td><math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd><mo>−</mo><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math></td></tr>
            <tr><td>Garis x = h</td><td>(2h − x, y)</td><td>tidak dengan matriks 2 × 2</td></tr>
            <tr><td>Garis y = k</td><td>(x, 2k − y)</td><td>tidak dengan matriks 2 × 2</td></tr>
          </tbody>
        </table>
      </div>

      <p>Penulisan <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow></math> berarti baris pertama 1, 0 dan baris kedua 0, −1. Matriks refleksi mudah diingat dari bayangan titik (1, 0) dan (0, 1): kolom pertama matriks adalah bayangan (1, 0), dan kolom kedua adalah bayangan (0, 1).</p>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Titik P(3, −2) dicerminkan terhadap garis <em>y</em> = <em>x</em>: <math><mrow><mo>[</mo><mtable><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>(3, −2) = (0·3 + 1·(−2), 1·3 + 0·(−2)) = <strong>(−2, 3)</strong>.<br>
        Titik Q(1, 5) dicerminkan terhadap garis <em>x</em> = 4: Q′ = (2·4 − 1, 5) = <strong>(7, 5)</strong>.
      </div>
    </section>

    <!-- ============ 4. BAYANGAN KURVA ============ -->
    <section class="bagian" id="bayangan-kurva">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Bayangan garis dan kurva</h2>
      </div>

      <ol class="langkah">
        <li>Tulis hubungan bayangan (<em>x</em>′, <em>y</em>′) dengan titik asal (<em>x</em>, <em>y</em>).</li>
        <li>Nyatakan <em>x</em> dan <em>y</em> dalam <em>x</em>′ dan <em>y</em>′.</li>
        <li>Substitusikan ke persamaan kurva asal, lalu hilangkan tanda aksen.</li>
      </ol>

      <div class="kartu">
        <span class="istilah">Contoh 1</span>
        <p>Garis 2<em>x</em> − <em>y</em> + 3 = 0 dicerminkan terhadap sumbu <em>x</em>. Dari <em>x</em>′ = <em>x</em> dan <em>y</em>′ = −<em>y</em>, diperoleh <em>x</em> = <em>x</em>′ dan <em>y</em> = −<em>y</em>′. Substitusi: 2<em>x</em>′ + <em>y</em>′ + 3 = 0. Jadi bayangannya <strong>2<em>x</em> + <em>y</em> + 3 = 0</strong>.</p>
      </div>

      <div class="kartu">
        <span class="istilah">Contoh 2</span>
        <p>Parabola <em>y</em> = <em>x</em><sup>2</sup> ditranslasikan oleh T = (2, 1). Dari <em>x</em> = <em>x</em>′ − 2 dan <em>y</em> = <em>y</em>′ − 1: <em>y</em>′ − 1 = (<em>x</em>′ − 2)<sup>2</sup>. Jadi bayangannya <strong><em>y</em> = (<em>x</em> − 2)<sup>2</sup> + 1</strong>, sesuai dengan aturan translasi fungsi di bab Transformasi Fungsi.</p>
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Transformasi</th><th>Bayangan (x, y)</th></tr>
          </thead>
          <tbody>
            <tr><td>Translasi (a, b)</td><td>(x + a, y + b)</td></tr>
            <tr><td>Refleksi sumbu x / sumbu y</td><td>(x, −y) / (−x, y)</td></tr>
            <tr><td>Refleksi titik O</td><td>(−x, −y)</td></tr>
            <tr><td>Refleksi y = x / y = −x</td><td>(y, x) / (−y, −x)</td></tr>
            <tr><td>Refleksi x = h / y = k</td><td>(2h − x, y) / (x, 2k − y)</td></tr>
            <tr><td>Bayangan kurva</td><td>nyatakan x, y dalam x′, y′, lalu substitusi</td></tr>
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

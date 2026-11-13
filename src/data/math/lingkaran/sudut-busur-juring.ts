/* ====== Bab 107-1 · Unsur, Sudut, Busur, dan Juring Lingkaran ====== */

import { Chapter } from '../../materials';

export const sudutBusurJuring: Chapter = {
  chapterId: "107-1",
  title: "Unsur, Sudut, Busur, dan Juring",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Geometri · Kelas XI</span>
      <h1>Unsur, Sudut, Busur, dan Juring Lingkaran</h1>
      <p>Rangkuman unsur-unsur lingkaran, hubungan sudut pusat dan sudut keliling, serta cara menghitung panjang busur, luas juring, dan luas tembereng.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#unsur">Unsur-unsur lingkaran</a></li>
        <li><a href="#sudut">Sudut pusat dan sudut keliling</a></li>
        <li><a href="#busur-juring">Panjang busur dan luas juring</a></li>
        <li><a href="#tembereng">Luas tembereng</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. UNSUR ============ -->
    <section class="bagian" id="unsur">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Unsur-unsur lingkaran</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Lingkaran</span>
        <p>Himpunan semua titik pada bidang yang berjarak sama dari satu titik tetap. Titik tetap itu disebut <strong>pusat</strong>, dan jaraknya disebut <strong>jari-jari</strong> (<em>r</em>).</p>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/unsur-lingkaran.svg" alt="Dua lingkaran berpusat di O. Kiri menunjukkan garis-garis pada lingkaran: diameter melalui pusat, jari-jari dari pusat ke tepi, tali busur yang menghubungkan dua titik pada lingkaran, dan apotema, yaitu garis tegak lurus dari pusat ke tali busur. Kanan menunjukkan daerah pada lingkaran: juring berwarna lime yang dibatasi dua jari-jari dan busur, busur yang digaris tebal oranye, serta tembereng berwarna krem yang dibatasi tali busur dan busur." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Garis dan daerah pada lingkaran.</figcaption>
      </figure>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Unsur</th><th>Pengertian</th></tr>
          </thead>
          <tbody>
            <tr><td>Diameter</td><td>tali busur yang melalui pusat; panjangnya d = 2r</td></tr>
            <tr><td>Tali busur</td><td>ruas garis yang menghubungkan dua titik pada lingkaran</td></tr>
            <tr><td>Apotema</td><td>ruas garis terpendek dari pusat ke tali busur, tegak lurus tali busur</td></tr>
            <tr><td>Busur</td><td>bagian keliling lingkaran di antara dua titik</td></tr>
            <tr><td>Juring</td><td>daerah yang dibatasi dua jari-jari dan sebuah busur, berbentuk seperti potongan kue</td></tr>
            <tr><td>Tembereng</td><td>daerah yang dibatasi sebuah tali busur dan busurnya</td></tr>
          </tbody>
        </table>
      </div>

      <p>Keliling lingkaran K = 2π<em>r</em> = π<em>d</em> dan luasnya L = π<em>r</em><sup>2</sup>, dengan π ≈ 3,14 atau 22/7.</p>
    </section>

    <!-- ============ 2. SUDUT ============ -->
    <section class="bagian" id="sudut">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Sudut pusat dan sudut keliling</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Sudut pusat</h3>
          <p>Sudut yang titik sudutnya di <strong>pusat</strong> lingkaran dan kakinya dua jari-jari, misalnya ∠AOB.</p>
        </div>
        <div class="kartu">
          <h3>Sudut keliling</h3>
          <p>Sudut yang titik sudutnya <strong>pada lingkaran</strong> dan kakinya dua tali busur, misalnya ∠ACB.</p>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/sudut-pusat-keliling.svg" alt="Dua lingkaran. Kiri: sudut pusat AOB dan sudut keliling ACB sama-sama menghadap busur AB yang digaris tebal. Sudut pusat besarnya 2 alfa, dua kali sudut keliling yang besarnya alfa. Kanan: sudut keliling ACB yang menghadap diameter AB selalu siku-siku, 90 derajat." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Hubungan sudut pusat dan sudut keliling yang menghadap busur yang sama.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Teorema sudut pusat</div>
        <div class="rumus-isi">
          <math display="block" aria-label="sudut A O B sama dengan 2 kali sudut A C B">
            <mo>∠</mo><mi>A</mi><mi>O</mi><mi>B</mi><mo>=</mo><mn>2</mn><mo>×</mo><mo>∠</mo><mi>A</mi><mi>C</mi><mi>B</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>∠AOB</dt><dd>sudut pusat yang menghadap busur AB</dd>
            <dt>∠ACB</dt><dd>sudut keliling yang menghadap busur AB yang sama</dd>
          </dl>
        </div>
      </div>

      <p>Akibat teorema ini:</p>
      <ul class="poin">
        <li>Sudut-sudut keliling yang menghadap busur yang sama besarnya <strong>sama</strong>.</li>
        <li>Sudut keliling yang menghadap <strong>diameter</strong> besarnya 90°, karena sudut pusatnya 180°.</li>
        <li>Pada <strong>segi empat tali busur</strong> (keempat titik sudutnya pada lingkaran), jumlah dua sudut yang berhadapan 180°.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Sudut pusat AOB = 110°. Sudut keliling ACB yang menghadap busur AB yang sama adalah 110°/2 = <strong>55°</strong>. Pada segi empat tali busur PQRS dengan ∠P = 75°, sudut di hadapannya ∠R = 180° − 75° = <strong>105°</strong>.
      </div>
    </section>

    <!-- ============ 3. BUSUR DAN JURING ============ -->
    <section class="bagian" id="busur-juring">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Panjang busur dan luas juring</h2>
      </div>

      <p>Satu putaran penuh adalah 360°. Juring dengan sudut pusat α mengambil bagian α/360° dari lingkaran, sehingga panjang busur dan luas juringnya juga α/360° dari keliling dan luas lingkaran.</p>

      <div class="rumus">
        <div class="rumus-judul">Busur dan juring</div>
        <div class="rumus-isi">
          <math display="block" aria-label="panjang busur sama dengan alfa per 360 derajat dikali 2 pi r">
            <mtext>panjang busur</mtext><mo>=</mo><mfrac><mi>α</mi><mrow><mn>360</mn><mo>°</mo></mrow></mfrac><mo>×</mo><mn>2</mn><mi>π</mi><mi>r</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="luas juring sama dengan alfa per 360 derajat dikali pi r kuadrat">
            <mtext>luas juring</mtext><mo>=</mo><mfrac><mi>α</mi><mrow><mn>360</mn><mo>°</mo></mrow></mfrac><mo>×</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>α</dt><dd>sudut pusat <span class="satuan">(derajat)</span></dd>
            <dt>r</dt><dd>jari-jari lingkaran</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Lingkaran berjari-jari 14 cm dengan sudut pusat 90°. Panjang busur = ¼ × 2 × (22/7) × 14 = <strong>22 cm</strong>. Luas juring = ¼ × (22/7) × 14<sup>2</sup> = <strong>154 cm²</strong>.
      </div>

      <p><strong>Dalam radian.</strong> Satu putaran = 2π radian. Jika sudut pusat θ dinyatakan dalam radian, rumusnya menjadi lebih ringkas: panjang busur <em>s</em> = <em>r</em>θ dan luas juring = ½<em>r</em><sup>2</sup>θ.</p>
    </section>

    <!-- ============ 4. TEMBERENG ============ -->
    <section class="bagian" id="tembereng">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Luas tembereng</h2>
      </div>

      <p>Tembereng adalah juring yang dikurangi segitiga yang dibentuk dua jari-jari dan tali busurnya.</p>

      <div class="rumus">
        <div class="rumus-judul">Luas tembereng</div>
        <div class="rumus-isi">
          <math display="block" aria-label="luas tembereng sama dengan luas juring dikurangi setengah r kuadrat sin alfa">
            <mtext>luas tembereng</mtext><mo>=</mo><mtext>luas juring</mtext><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>r</mi><mn>2</mn></msup><mi>sin</mi><mi>α</mi>
          </math>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Melanjutkan contoh sebelumnya (<em>r</em> = 14 cm, α = 90°): luas segitiga = ½ × 14 × 14 × sin 90° = 98 cm². Luas tembereng = 154 − 98 = <strong>56 cm²</strong>.
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Konsep</th><th>Rumus / keterangan</th></tr>
          </thead>
          <tbody>
            <tr><td>Sudut pusat</td><td>2 × sudut keliling yang menghadap busur yang sama</td></tr>
            <tr><td>Menghadap diameter</td><td>sudut keliling = 90°</td></tr>
            <tr><td>Segi empat tali busur</td><td>sudut berhadapan berjumlah 180°</td></tr>
            <tr><td>Panjang busur</td><td>(α/360°) × 2πr = rθ (θ dalam radian)</td></tr>
            <tr><td>Luas juring</td><td>(α/360°) × πr² = ½r²θ</td></tr>
            <tr><td>Luas tembereng</td><td>luas juring − ½r² sin α</td></tr>
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

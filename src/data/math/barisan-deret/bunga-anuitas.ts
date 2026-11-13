/* ====== Bab 105-3 · Bunga Tunggal, Bunga Majemuk, dan Anuitas ====== */

import { Chapter } from '../../materials';

export const bungaAnuitas: Chapter = {
  chapterId: "105-3",
  title: "Bunga Tunggal, Bunga Majemuk, dan Anuitas",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Bilangan · Kelas XI</span>
      <h1>Bunga Tunggal, Bunga Majemuk, dan Anuitas</h1>
      <p>Rangkuman cara menghitung bunga tabungan dan pinjaman, perbedaan bunga tunggal dan majemuk, angsuran pinjaman dengan anuitas, serta pengaruh suku bunga dan lama pinjaman.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#tunggal">Bunga tunggal</a></li>
        <li><a href="#majemuk">Bunga majemuk</a></li>
        <li><a href="#anuitas">Anuitas</a></li>
        <li><a href="#pengaruh">Pengaruh suku bunga dan lama pinjaman</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. BUNGA TUNGGAL ============ -->
    <section class="bagian" id="tunggal">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Bunga tunggal</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Bunga tunggal</span>
        <p>Bunga yang selalu dihitung dari <strong>modal awal</strong>. Besar bunganya sama setiap periode, sehingga saldo membentuk barisan aritmetika.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Bunga tunggal</div>
        <div class="rumus-isi">
          <math display="block" aria-label="B sama dengan M dikali i dikali n, dan M n sama dengan M dikali 1 ditambah n i">
            <mi>B</mi><mo>=</mo><mi>M</mi><mo>×</mo><mi>i</mi><mo>×</mo><mi>n</mi>
            <mspace width="1.5em"/>
            <msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mi>M</mi><mo>(</mo><mn>1</mn><mo>+</mo><mi>n</mi><mi>i</mi><mo>)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>M</dt><dd>modal awal <span class="satuan">(rupiah)</span></dd>
            <dt>i</dt><dd>suku bunga per periode, ditulis desimal (6% = 0,06)</dd>
            <dt>n</dt><dd>banyak periode</dd>
            <dt>B</dt><dd>total bunga <span class="satuan">(rupiah)</span></dd>
            <dt>M<sub>n</sub></dt><dd>saldo akhir <span class="satuan">(rupiah)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Modal Rp10.000.000 disimpan dengan bunga tunggal 6% per tahun selama 3 tahun. Bunganya B = 10.000.000 × 0,06 × 3 = Rp1.800.000, sehingga saldo akhirnya <strong>Rp11.800.000</strong>.
      </div>
    </section>

    <!-- ============ 2. BUNGA MAJEMUK ============ -->
    <section class="bagian" id="majemuk">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Bunga majemuk</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Bunga majemuk</span>
        <p>Bunga yang dihitung dari <strong>saldo terakhir</strong>, yaitu modal ditambah bunga periode sebelumnya ("bunga berbunga"). Setiap periode saldo dikali (1 + <em>i</em>), sehingga saldo membentuk barisan geometri.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Bunga majemuk</div>
        <div class="rumus-isi">
          <math display="block" aria-label="M n sama dengan M dikali 1 ditambah i, pangkat n">
            <msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mi>M</mi><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mi>i</mi><mo>)</mo></mrow><mi>n</mi></msup>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="jika bunga dibayarkan k kali setahun selama t tahun, M n sama dengan M dikali 1 ditambah i per k, pangkat k t">
            <msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mi>M</mi><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mfrac><mi>i</mi><mi>k</mi></mfrac><mo>)</mo></mrow><mrow><mi>k</mi><mi>t</mi></mrow></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>i</dt><dd>suku bunga per tahun</dd>
            <dt>k</dt><dd>banyak pembungaan dalam setahun (bulanan: k = 12)</dd>
            <dt>t</dt><dd>lama menabung <span class="satuan">(tahun)</span></dd>
          </dl>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/bunga-tunggal-majemuk.svg" alt="Diagram batang saldo tabungan Rp10 juta dengan bunga 10 persen per tahun selama 5 tahun. Dengan bunga tunggal saldo naik tetap 1 juta per tahun menjadi 15 juta. Dengan bunga majemuk kenaikannya makin besar setiap tahun dan menjadi sekitar 16,1 juta." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Saldo Rp10 juta dengan bunga 10% per tahun: bunga majemuk makin lama makin unggul.</figcaption>
      </figure>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Modal Rp10.000.000 dengan bunga majemuk 6% per tahun selama 3 tahun: M<sub>3</sub> = 10.000.000 × 1,06<sup>3</sup> = 10.000.000 × 1,191016 = <strong>Rp11.910.160</strong>, lebih besar Rp110.160 daripada bunga tunggal.<br>
        Jika bunganya 12% per tahun tetapi dibungakan setiap bulan (1% per bulan) selama 1 tahun: M = 10.000.000 × 1,01<sup>12</sup> ≈ <strong>Rp11.268.250</strong>.
      </div>

      <p><strong>Nilai sekarang.</strong> Untuk mengetahui berapa yang harus ditabung sekarang agar menjadi M<sub>n</sub> setelah <em>n</em> periode, balik rumusnya: M = M<sub>n</sub> / (1 + <em>i</em>)<sup>n</sup>.</p>
    </section>

    <!-- ============ 3. ANUITAS ============ -->
    <section class="bagian" id="anuitas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Anuitas</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Anuitas</span>
        <p>Pembayaran dengan <strong>jumlah tetap</strong> setiap periode untuk melunasi pinjaman berbunga majemuk. Setiap anuitas terdiri atas dua bagian: <strong>bunga</strong> atas sisa pinjaman dan <strong>angsuran</strong> yang mengurangi pokok pinjaman.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Besar anuitas</div>
        <div class="rumus-isi">
          <math display="block" aria-label="A sama dengan M dikali i, dibagi 1 dikurangi 1 ditambah i pangkat negatif n">
            <mi>A</mi><mo>=</mo><mfrac><mrow><mi>M</mi><mo>×</mo><mi>i</mi></mrow><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo>(</mo><mn>1</mn><mo>+</mo><mi>i</mi><mo>)</mo></mrow><mrow><mo>−</mo><mi>n</mi></mrow></msup></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="A sama dengan bunga ke k ditambah angsuran ke k">
            <mi>A</mi><mo>=</mo><msub><mi>b</mi><mi>k</mi></msub><mo>+</mo><msub><mi>a</mi><mi>k</mi></msub>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>A</dt><dd>anuitas, pembayaran tetap tiap periode <span class="satuan">(rupiah)</span></dd>
            <dt>M</dt><dd>besar pinjaman <span class="satuan">(rupiah)</span></dd>
            <dt>i</dt><dd>suku bunga per periode</dd>
            <dt>n</dt><dd>banyak periode pembayaran</dd>
            <dt>b<sub>k</sub></dt><dd>bunga periode ke-k = sisa pinjaman × i</dd>
            <dt>a<sub>k</sub></dt><dd>angsuran pokok periode ke-k; a<sub>k</sub> = a<sub>1</sub>(1 + i)<sup>k−1</sup></dd>
          </dl>
        </div>
      </div>

      <div class="kartu">
        <span class="istilah">Soal</span>
        <p>Pinjaman Rp10.000.000 dilunasi dengan anuitas bulanan selama 12 bulan, bunga 1% per bulan. Tentukan besar anuitas dan rincian tiga bulan pertama.</p>
      </div>
      <ol class="langkah">
        <li>A = 10.000.000 × 0,01 / (1 − 1,01<sup>−12</sup>) = 100.000 / 0,112551 ≈ <strong>Rp888.488</strong> per bulan.</li>
        <li>Bulan 1: bunga = 1% × 10.000.000 = 100.000, angsuran pokok = 888.488 − 100.000 = 788.488.</li>
        <li>Lanjutkan seperti tabel di bawah. Total bunga selama 12 bulan sekitar Rp661.855.</li>
      </ol>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Bulan</th><th>Sisa pinjaman awal</th><th>Bunga (1%)</th><th>Angsuran pokok</th><th>Sisa pinjaman akhir</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>10.000.000</td><td>100.000</td><td>788.488</td><td>9.211.512</td></tr>
            <tr><td>2</td><td>9.211.512</td><td>92.115</td><td>796.373</td><td>8.415.139</td></tr>
            <tr><td>3</td><td>8.415.139</td><td>84.151</td><td>804.337</td><td>7.610.802</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Pola yang terlihat</strong>
        Bunga makin kecil karena sisa pinjaman berkurang, sedangkan angsuran pokok makin besar dengan rasio (1 + i) = 1,01. Nilai dibulatkan ke rupiah terdekat.
      </div>
    </section>

    <!-- ============ 4. PENGARUH ============ -->
    <section class="bagian" id="pengaruh">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Pengaruh suku bunga dan lama pinjaman</h2>
      </div>

      <p>Tabel berikut membandingkan pinjaman Rp10.000.000 dengan suku bunga dan lama pinjaman yang berbeda.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Bunga per bulan</th><th>Lama</th><th>Anuitas per bulan</th><th>Total bunga</th></tr>
          </thead>
          <tbody>
            <tr><td>1%</td><td>12 bulan</td><td>Rp888.488</td><td>Rp661.855</td></tr>
            <tr><td>1%</td><td>24 bulan</td><td>Rp470.735</td><td>Rp1.297.633</td></tr>
            <tr><td>1,5%</td><td>12 bulan</td><td>Rp916.800</td><td>Rp1.001.599</td></tr>
            <tr><td>1,5%</td><td>24 bulan</td><td>Rp499.241</td><td>Rp1.981.784</td></tr>
          </tbody>
        </table>
      </div>

      <ul class="poin">
        <li>Pinjaman yang <strong>lebih lama</strong> membuat cicilan bulanan lebih ringan, tetapi total bunga yang dibayar jauh lebih besar.</li>
        <li>Suku bunga yang <strong>lebih tinggi</strong> menaikkan cicilan dan total bunga sekaligus.</li>
        <li>Sebelum meminjam, bandingkan total yang dibayar, bukan hanya besar cicilan per bulan.</li>
      </ul>
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
            <tr><td>Bunga tunggal</td><td>barisan aritmetika</td><td>M<sub>n</sub> = M(1 + ni)</td></tr>
            <tr><td>Bunga majemuk</td><td>barisan geometri</td><td>M<sub>n</sub> = M(1 + i)<sup>n</sup></td></tr>
            <tr><td>Nilai sekarang</td><td>kebalikan bunga majemuk</td><td>M = M<sub>n</sub>/(1 + i)<sup>n</sup></td></tr>
            <tr><td>Anuitas</td><td>bunga + angsuran pokok</td><td>A = Mi / (1 − (1 + i)<sup>−n</sup>)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase F, elemen Bilangan: memodelkan pinjaman dan investasi dengan bunga majemuk dan anuitas, serta menyelidiki pengaruh suku bunga dan periode pembayaran (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025).
    </footer>
  `,
  formula: "",
  example: ""
};

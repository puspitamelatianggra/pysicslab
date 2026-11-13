/* ====== Bab 108-1 · Penyajian Data dan Ukuran Pemusatan ====== */

import { Chapter } from '../../materials';

export const penyajianDataPemusatan: Chapter = {
  chapterId: "108-1",
  title: "Penyajian Data dan Ukuran Pemusatan",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Analisis Data dan Peluang · Kelas X</span>
      <h1>Penyajian Data dan Ukuran Pemusatan</h1>
      <p>Rangkuman jenis data, cara memilih diagram yang sesuai (dot plot, histogram, box plot), tabel distribusi frekuensi, serta rata-rata, median, dan modus untuk data tunggal dan data berkelompok.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#jenis-data">Jenis data dan pilihan diagram</a></li>
        <li><a href="#diagram">Dot plot dan histogram</a></li>
        <li><a href="#tunggal">Ukuran pemusatan data tunggal</a></li>
        <li><a href="#kelompok">Ukuran pemusatan data berkelompok</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. JENIS DATA ============ -->
    <section class="bagian" id="jenis-data">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Jenis data dan pilihan diagram</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Data kategorikal</h3>
          <p>Berupa kelompok atau label, misalnya golongan darah, warna favorit, atau jenis transportasi ke sekolah.</p>
        </div>
        <div class="kartu">
          <h3>Data numerik</h3>
          <p>Berupa bilangan hasil membilang (<strong>diskrit</strong>, misalnya banyak saudara) atau hasil mengukur (<strong>kontinu</strong>, misalnya tinggi badan).</p>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Diagram</th><th>Cocok untuk</th></tr>
          </thead>
          <tbody>
            <tr><td>Diagram batang / lingkaran</td><td>data kategorikal; diagram lingkaran untuk melihat bagian dari keseluruhan</td></tr>
            <tr><td>Dot plot</td><td>data numerik yang sedikit, sehingga setiap nilai terlihat</td></tr>
            <tr><td>Histogram</td><td>data numerik yang banyak dan dikelompokkan ke dalam kelas</td></tr>
            <tr><td>Box plot</td><td>meringkas sebaran data dan membandingkan beberapa kelompok data</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ============ 2. DIAGRAM ============ -->
    <section class="bagian" id="diagram">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Dot plot dan histogram</h2>
      </div>

      <figure class="gambar lebar">
        <div class="gambar-isi">
          <img src="/images/dot-plot-histogram.svg" alt="Kiri, dot plot banyak buku yang dibaca 15 siswa dalam sebulan: 1 buku 2 siswa, 2 buku 4 siswa, 3 buku 5 siswa, 4 buku 2 siswa, 5 buku 1 siswa, dan 6 buku 1 siswa. Kanan, histogram tinggi badan 40 siswa dengan tepi kelas 149,5 sampai 174,5 cm. Frekuensi tiap kelas berturut-turut 4, 10, 14, 8, dan 4; batang-batangnya saling menempel." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Dot plot banyak buku yang dibaca 15 siswa (kiri) dan histogram tinggi badan 40 siswa (kanan).</figcaption>
      </figure>

      <ul class="poin">
        <li><strong>Dot plot</strong>: setiap titik mewakili satu data, ditumpuk di atas nilainya pada garis bilangan.</li>
        <li><strong>Histogram</strong>: batang mewakili frekuensi tiap kelas. Batangnya <strong>saling menempel</strong> karena datanya kontinu, berbeda dengan diagram batang.</li>
      </ul>

      <p>Histogram dibuat dari <strong>tabel distribusi frekuensi</strong>. Istilah pentingnya untuk kelas 150–154:</p>
      <ul class="poin">
        <li><strong>Batas kelas</strong>: 150 (bawah) dan 154 (atas).</li>
        <li><strong>Tepi kelas</strong>: batas dikurangi atau ditambah setengah satuan ukur, yaitu 149,5 (tepi bawah) dan 154,5 (tepi atas).</li>
        <li><strong>Panjang kelas</strong>: tepi atas − tepi bawah = 5.</li>
        <li><strong>Titik tengah</strong>: (150 + 154)/2 = 152.</li>
      </ul>
    </section>

    <!-- ============ 3. DATA TUNGGAL ============ -->
    <section class="bagian" id="tunggal">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Ukuran pemusatan data tunggal</h2>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Rata-rata (mean)</div>
        <div class="rumus-isi">
          <math display="block" aria-label="x bar sama dengan jumlah semua data dibagi n">
            <mover><mi>x</mi><mo>‾</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo><mo>+</mo><msub><mi>x</mi><mi>n</mi></msub></mrow><mi>n</mi></mfrac><mo>=</mo><mfrac><mrow><mo>∑</mo><msub><mi>x</mi><mi>i</mi></msub></mrow><mi>n</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>x̄</dt><dd>rata-rata</dd>
            <dt>n</dt><dd>banyak data</dd>
            <dt>∑</dt><dd>lambang penjumlahan</dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li><strong>Median</strong>: nilai tengah setelah data diurutkan. Untuk <em>n</em> ganjil, median adalah data ke-(<em>n</em> + 1)/2. Untuk <em>n</em> genap, median adalah rata-rata dua data di tengah.</li>
        <li><strong>Modus</strong>: nilai yang paling sering muncul. Data dapat memiliki lebih dari satu modus atau tidak memiliki modus.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Contoh dari dot plot</strong>
        Jumlah buku = 1(2) + 2(4) + 3(5) + 4(2) + 5(1) + 6(1) = 44, sehingga rata-rata = 44/15 ≈ <strong>2,93 buku</strong>. Median adalah data ke-8. Data ke-1 sampai ke-2 bernilai 1, data ke-3 sampai ke-6 bernilai 2, dan data ke-7 sampai ke-11 bernilai 3, jadi median = <strong>3 buku</strong>. Modus = <strong>3 buku</strong> (5 siswa).
      </div>

      <div class="catatan">
        <strong class="judul">Rata-rata peka terhadap pencilan</strong>
        Satu nilai yang sangat besar atau sangat kecil dapat menggeser rata-rata cukup jauh, sedangkan median hampir tidak berubah. Untuk data yang miring, seperti penghasilan, median lebih mewakili data.
      </div>
    </section>

    <!-- ============ 4. DATA BERKELOMPOK ============ -->
    <section class="bagian" id="kelompok">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Ukuran pemusatan data berkelompok</h2>
      </div>

      <p>Untuk data dalam tabel distribusi frekuensi, nilai asli setiap data tidak diketahui. Setiap kelas diwakili titik tengahnya, sehingga hasilnya berupa <strong>pendekatan</strong>.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Tinggi (cm)</th><th>Titik tengah x<sub>i</sub></th><th>Frekuensi f<sub>i</sub></th><th>f<sub>i</sub> · x<sub>i</sub></th><th>Frekuensi kumulatif</th></tr>
          </thead>
          <tbody>
            <tr><td>150–154</td><td>152</td><td>4</td><td>608</td><td>4</td></tr>
            <tr><td>155–159</td><td>157</td><td>10</td><td>1.570</td><td>14</td></tr>
            <tr><td>160–164</td><td>162</td><td>14</td><td>2.268</td><td>28</td></tr>
            <tr><td>165–169</td><td>167</td><td>8</td><td>1.336</td><td>36</td></tr>
            <tr><td>170–174</td><td>172</td><td>4</td><td>688</td><td>40</td></tr>
            <tr><td>Jumlah</td><td></td><td>40</td><td>6.470</td><td></td></tr>
          </tbody>
        </table>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Rata-rata, median, dan modus data berkelompok</div>
        <div class="rumus-isi">
          <math display="block" aria-label="x bar sama dengan jumlah f i x i dibagi jumlah f i">
            <mover><mi>x</mi><mo>‾</mo></mover><mo>=</mo><mfrac><mrow><mo>∑</mo><msub><mi>f</mi><mi>i</mi></msub><msub><mi>x</mi><mi>i</mi></msub></mrow><mrow><mo>∑</mo><msub><mi>f</mi><mi>i</mi></msub></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="median sama dengan T b ditambah, n per 2 dikurangi f k, dibagi f, dikali p">
            <mi>Me</mi><mo>=</mo><msub><mi>T</mi><mi>b</mi></msub><mo>+</mo><mrow><mo>(</mo><mfrac><mrow><mfrac><mi>n</mi><mn>2</mn></mfrac><mo>−</mo><msub><mi>f</mi><mi>k</mi></msub></mrow><mi>f</mi></mfrac><mo>)</mo></mrow><mi>p</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="modus sama dengan T b ditambah, d 1 dibagi d 1 tambah d 2, dikali p">
            <mi>Mo</mi><mo>=</mo><msub><mi>T</mi><mi>b</mi></msub><mo>+</mo><mrow><mo>(</mo><mfrac><msub><mi>d</mi><mn>1</mn></msub><mrow><msub><mi>d</mi><mn>1</mn></msub><mo>+</mo><msub><mi>d</mi><mn>2</mn></msub></mrow></mfrac><mo>)</mo></mrow><mi>p</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>T<sub>b</sub></dt><dd>tepi bawah kelas median atau kelas modus</dd>
            <dt>f<sub>k</sub></dt><dd>frekuensi kumulatif sebelum kelas median</dd>
            <dt>f</dt><dd>frekuensi kelas median</dd>
            <dt>d<sub>1</sub></dt><dd>selisih frekuensi kelas modus dengan kelas sebelumnya</dd>
            <dt>d<sub>2</sub></dt><dd>selisih frekuensi kelas modus dengan kelas sesudahnya</dd>
            <dt>p</dt><dd>panjang kelas</dd>
          </dl>
        </div>
      </div>

      <ol class="langkah">
        <li><strong>Rata-rata</strong> = 6.470/40 = <strong>161,75 cm</strong>.</li>
        <li><strong>Median</strong>: data ke-20 berada di kelas 160–164 (frekuensi kumulatif mencapai 28). Me = 159,5 + ((20 − 14)/14) × 5 ≈ <strong>161,64 cm</strong>.</li>
        <li><strong>Modus</strong>: kelas dengan frekuensi terbesar adalah 160–164. d<sub>1</sub> = 14 − 10 = 4 dan d<sub>2</sub> = 14 − 8 = 6, sehingga Mo = 159,5 + (4/10) × 5 = <strong>161,5 cm</strong>.</li>
      </ol>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Ukuran</th><th>Data tunggal</th><th>Data berkelompok</th></tr>
          </thead>
          <tbody>
            <tr><td>Rata-rata</td><td>∑x<sub>i</sub> / n</td><td>∑f<sub>i</sub>x<sub>i</sub> / ∑f<sub>i</sub></td></tr>
            <tr><td>Median</td><td>nilai tengah data terurut</td><td>T<sub>b</sub> + ((n/2 − f<sub>k</sub>)/f) p</td></tr>
            <tr><td>Modus</td><td>nilai paling sering muncul</td><td>T<sub>b</sub> + (d<sub>1</sub>/(d<sub>1</sub> + d<sub>2</sub>)) p</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase E, elemen Analisis Data dan Peluang: memilih box plot, histogram, atau dot plot sesuai karakter data (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Statistika.
    </footer>
  `,
  formula: "",
  example: ""
};

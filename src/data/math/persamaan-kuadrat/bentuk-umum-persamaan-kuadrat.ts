/* ====== Bab 102-1 · Persamaan Kuadrat ====== */

import { Chapter } from '../../materials';

export const bentukUmumPersamaanKuadrat: Chapter = {
  chapterId: "102-1",
  title: "Persamaan Kuadrat",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Aljabar dan Fungsi · Kelas X</span>
      <h1>Persamaan Kuadrat</h1>
      <p>Rangkuman bentuk umum persamaan kuadrat, tiga cara menentukan akar-akarnya, diskriminan dan jenis akar termasuk akar imajiner, serta jumlah dan hasil kali akar.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian dan bentuk umum</a></li>
        <li><a href="#cara">Cara menentukan akar</a></li>
        <li><a href="#diskriminan">Diskriminan dan jenis akar</a></li>
        <li><a href="#imajiner">Akar imajiner</a></li>
        <li><a href="#jumlah-hasil-kali">Jumlah dan hasil kali akar</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian dan bentuk umum</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Persamaan kuadrat</span>
        <p>Persamaan yang pangkat tertinggi variabelnya adalah <strong>dua</strong>. Nilai <em>x</em> yang memenuhinya disebut <strong>akar</strong> atau penyelesaian.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Bentuk umum</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a x kuadrat tambah b x tambah c sama dengan nol">
            <mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>x</dt><dd>variabel</dd>
            <dt>a</dt><dd>koefisien x², dengan a ≠ 0</dd>
            <dt>b</dt><dd>koefisien x</dd>
            <dt>c</dt><dd>konstanta</dd>
          </dl>
        </div>
      </div>

      <p>Contoh: 2<em>x</em><sup>2</sup> − 3<em>x</em> − 2 = 0 memiliki <em>a</em> = 2, <em>b</em> = −3, dan <em>c</em> = −2. Sebelum menentukan <em>a</em>, <em>b</em>, <em>c</em>, pindahkan semua suku ke ruas kiri sehingga ruas kanan bernilai 0.</p>
    </section>

    <!-- ============ 2. CARA MENENTUKAN AKAR ============ -->
    <section class="bagian" id="cara">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Cara menentukan akar</h2>
      </div>

      <div class="sub">
        <h3><span class="no">2.1</span>Memfaktorkan</h3>
        <p>Cari dua bilangan yang <strong>hasil kalinya</strong> <em>ac</em> dan <strong>jumlahnya</strong> <em>b</em>. Lalu gunakan sifat: jika <em>pq</em> = 0, maka <em>p</em> = 0 atau <em>q</em> = 0.</p>
        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          <em>x</em><sup>2</sup> − 5<em>x</em> + 6 = 0. Dua bilangan dengan hasil kali 6 dan jumlah −5 adalah −2 dan −3. Jadi (<em>x</em> − 2)(<em>x</em> − 3) = 0, sehingga <strong><em>x</em> = 2 atau <em>x</em> = 3</strong>.
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">2.2</span>Melengkapkan kuadrat sempurna</h3>
        <p>Ubah persamaan menjadi bentuk (<em>x</em> + <em>p</em>)<sup>2</sup> = <em>q</em>, dengan menambahkan (<em>b</em>/2)<sup>2</sup> pada kedua ruas (untuk <em>a</em> = 1).</p>
        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          <em>x</em><sup>2</sup> + 6<em>x</em> − 7 = 0 ⇒ <em>x</em><sup>2</sup> + 6<em>x</em> = 7 ⇒ <em>x</em><sup>2</sup> + 6<em>x</em> + 9 = 16 ⇒ (<em>x</em> + 3)<sup>2</sup> = 16 ⇒ <em>x</em> + 3 = ±4. Jadi <strong><em>x</em> = 1 atau <em>x</em> = −7</strong>.
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">2.3</span>Rumus kuadrat (rumus ABC)</h3>
        <p>Jika cara melengkapkan kuadrat diterapkan pada bentuk umum, diperoleh rumus yang selalu dapat dipakai:</p>
        <div class="rumus">
          <div class="rumus-judul">Rumus ABC</div>
          <div class="rumus-isi">
            <math display="block" aria-label="x satu dua sama dengan negatif b plus minus akar b kuadrat dikurangi 4 a c, dibagi 2 a">
              <msub><mi>x</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo>
              <mfrac>
                <mrow><mo>−</mo><mi>b</mi><mo>±</mo><msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt></mrow>
                <mrow><mn>2</mn><mi>a</mi></mrow>
              </mfrac>
            </math>
          </div>
        </div>
        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          2<em>x</em><sup>2</sup> − 3<em>x</em> − 2 = 0: <em>x</em> = (3 ± √(9 + 16))/4 = (3 ± 5)/4. Jadi <strong><em>x</em> = 2 atau <em>x</em> = −1/2</strong>.
        </div>
      </div>
    </section>

    <!-- ============ 3. DISKRIMINAN ============ -->
    <section class="bagian" id="diskriminan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Diskriminan dan jenis akar</h2>
      </div>

      <p>Bilangan di bawah tanda akar pada rumus ABC disebut <strong>diskriminan</strong>, D = <em>b</em><sup>2</sup> − 4<em>ac</em>. Tanpa menghitung akarnya, nilai D sudah menunjukkan jenis akar.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Nilai D</th><th>Jenis akar</th><th>Grafik y = ax² + bx + c</th></tr>
          </thead>
          <tbody>
            <tr><td>D &gt; 0</td><td>dua akar real berbeda (rasional jika D bilangan kuadrat)</td><td>memotong sumbu x di dua titik</td></tr>
            <tr><td>D = 0</td><td>dua akar real sama (akar kembar)</td><td>menyinggung sumbu x</td></tr>
            <tr><td>D &lt; 0</td><td>tidak ada akar real; akarnya imajiner</td><td>tidak memotong sumbu x</td></tr>
          </tbody>
        </table>
      </div>

      <figure class="gambar lebar">
        <div class="gambar-isi">
          <img src="/images/diskriminan.svg" alt="Tiga grafik parabola terbuka ke atas. Kiri, D lebih dari 0: parabola y = x² − 2x − 3 memotong sumbu x di dua titik, x = −1 dan x = 3. Tengah, D sama dengan 0: parabola y = x² − 2x + 1 menyinggung sumbu x di satu titik, x = 1. Kanan, D kurang dari 0: parabola y = x² − 2x + 3 tidak memotong sumbu x, sehingga akarnya imajiner." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Akar real persamaan kuadrat adalah titik potong grafiknya dengan sumbu <em>x</em>.</figcaption>
      </figure>
    </section>

    <!-- ============ 4. AKAR IMAJINER ============ -->
    <section class="bagian" id="imajiner">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Akar imajiner</h2>
      </div>

      <p>Tidak ada bilangan real yang kuadratnya negatif. Karena itu didefinisikan <strong>satuan imajiner</strong> <em>i</em> dengan <em>i</em><sup>2</sup> = −1, sehingga √(−16) = √16 × √(−1) = 4<em>i</em>. Bilangan berbentuk <em>p</em> + <em>qi</em> (dengan <em>p</em>, <em>q</em> real) disebut <strong>bilangan kompleks</strong>.</p>

      <div class="kartu">
        <span class="istilah">Soal</span>
        <p>Tentukan akar-akar <em>x</em><sup>2</sup> − 2<em>x</em> + 5 = 0.</p>
      </div>
      <ol class="langkah">
        <li>D = (−2)<sup>2</sup> − 4(1)(5) = 4 − 20 = −16 &lt; 0, jadi akarnya imajiner.</li>
        <li><em>x</em> = (2 ± √(−16))/2 = (2 ± 4<em>i</em>)/2.</li>
        <li><strong><em>x</em> = 1 + 2<em>i</em> atau <em>x</em> = 1 − 2<em>i</em></strong>. Kedua akar ini saling <em>sekawan</em>.</li>
      </ol>

      <div class="catatan info">
        <strong class="judul">Cek jawaban</strong>
        (1 + 2<em>i</em>)<sup>2</sup> − 2(1 + 2<em>i</em>) + 5 = (1 + 4<em>i</em> − 4) − 2 − 4<em>i</em> + 5 = 0. Terbukti.
      </div>
    </section>

    <!-- ============ 5. JUMLAH DAN HASIL KALI ============ -->
    <section class="bagian" id="jumlah-hasil-kali">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Jumlah dan hasil kali akar</h2>
      </div>

      <p>Dengan menjumlahkan dan mengalikan kedua akar dari rumus ABC, diperoleh hubungan berikut. Rumus ini berguna untuk menghitung bentuk simetris akar tanpa mencari akarnya satu per satu.</p>

      <div class="rumus">
        <div class="rumus-judul">Jumlah, hasil kali, dan menyusun persamaan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="x 1 tambah x 2 sama dengan negatif b per a, dan x 1 kali x 2 sama dengan c per a">
            <msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mfrac><mi>b</mi><mi>a</mi></mfrac>
            <mspace width="1.5em"/>
            <msub><mi>x</mi><mn>1</mn></msub><mo>·</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>c</mi><mi>a</mi></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="x kuadrat dikurangi x 1 tambah x 2 dikali x, ditambah x 1 kali x 2, sama dengan nol">
            <msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mo>(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>)</mo><mi>x</mi><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>x<sub>1</sub>, x<sub>2</sub></dt><dd>akar-akar persamaan kuadrat</dd>
            <dt>baris kedua</dt><dd>menyusun persamaan kuadrat yang akarnya x<sub>1</sub> dan x<sub>2</sub></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Akar-akar <em>x</em><sup>2</sup> − 5<em>x</em> + 6 = 0 adalah <em>x</em><sub>1</sub> dan <em>x</em><sub>2</sub>. Tanpa mencari akarnya: <em>x</em><sub>1</sub> + <em>x</em><sub>2</sub> = 5 dan <em>x</em><sub>1</sub><em>x</em><sub>2</sub> = 6, sehingga <em>x</em><sub>1</sub><sup>2</sup> + <em>x</em><sub>2</sub><sup>2</sup> = (<em>x</em><sub>1</sub> + <em>x</em><sub>2</sub>)<sup>2</sup> − 2<em>x</em><sub>1</sub><em>x</em><sub>2</sub> = 25 − 12 = <strong>13</strong>. Cek: 2<sup>2</sup> + 3<sup>2</sup> = 13.
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
            <tr><td>Bentuk umum</td><td>ax² + bx + c = 0, a ≠ 0</td></tr>
            <tr><td>Rumus ABC</td><td>x = (−b ± √(b² − 4ac)) / 2a</td></tr>
            <tr><td>Diskriminan</td><td>D = b² − 4ac; D &gt; 0 dua akar real, D = 0 kembar, D &lt; 0 imajiner</td></tr>
            <tr><td>Satuan imajiner</td><td>i² = −1</td></tr>
            <tr><td>Jumlah dan hasil kali</td><td>x<sub>1</sub> + x<sub>2</sub> = −b/a; x<sub>1</sub>x<sub>2</sub> = c/a</td></tr>
            <tr><td>Menyusun persamaan</td><td>x² − (x<sub>1</sub> + x<sub>2</sub>)x + x<sub>1</sub>x<sub>2</sub> = 0</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase E, elemen Aljabar dan Fungsi: persamaan dan fungsi kuadrat, termasuk akar imajiner (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Fungsi Kuadrat.
    </footer>
  `,
  formula: "",
  example: ""
};

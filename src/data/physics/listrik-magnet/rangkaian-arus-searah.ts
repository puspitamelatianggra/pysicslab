/* ====== Bab 2-2 · Rangkaian Arus Searah ====== */

import { Chapter } from '../../materials';

export const rangkaianArusSearah: Chapter = {
  chapterId: "2-2",
  title: "Rangkaian Arus Searah",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Listrik dan Magnet</span>
      <h1>Rangkaian Arus Searah</h1>
      <p>Rangkuman arus listrik, hukum Ohm, hambatan penghantar, susunan hambatan, GGL dan hambatan dalam, hukum Kirchhoff, serta energi dan daya listrik.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#arus">Arus listrik</a></li>
        <li><a href="#ohm">Hukum Ohm</a></li>
        <li><a href="#hambatan-kawat">Hambatan penghantar</a></li>
        <li><a href="#susunan">Susunan hambatan</a></li>
        <li><a href="#ggl">GGL dan hambatan dalam</a></li>
        <li><a href="#kirchhoff">Hukum Kirchhoff</a></li>
        <li><a href="#daya">Energi dan daya listrik</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. ARUS LISTRIK ============ -->
    <section class="bagian" id="arus">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Arus listrik</h2>
      </div>

      <p><strong>Arus listrik</strong> adalah aliran muatan listrik melalui suatu penghantar. Arus hanya mengalir dalam <strong>rangkaian tertutup</strong> dan jika ada <strong>beda potensial</strong> di antara ujung-ujung penghantar. Arus searah (<em>direct current</em>, DC) adalah arus yang arahnya selalu tetap, misalnya arus dari baterai dan aki.</p>

      <div class="rumus">
        <div class="rumus-judul">Kuat arus listrik</div>
        <div class="rumus-isi">
          <math display="block" aria-label="I sama dengan Q per t">
            <mi>I</mi><mo>=</mo><mfrac><mi>Q</mi><mi>t</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>I</dt><dd>kuat arus listrik <span class="satuan">(ampere, A)</span></dd>
            <dt>Q</dt><dd>muatan yang mengalir <span class="satuan">(C)</span></dd>
            <dt>t</dt><dd>selang waktu <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Arah arus berlawanan dengan arah elektron</strong>
        Arah arus listrik ditetapkan dari potensial tinggi ke potensial rendah, yaitu dari kutub positif ke kutub negatif melalui rangkaian luar. Padahal yang benar-benar bergerak di dalam logam adalah elektron, yang mengalir ke arah sebaliknya. Kesepakatan ini dibuat sebelum elektron ditemukan, dan tetap dipakai sampai sekarang.
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Muatan 120 C mengalir dalam 1 menit, sehingga <em>I</em> = 120/60 = 2 A. Banyaknya elektron yang mengalir <em>n</em> = <em>Q</em>/<em>e</em> = 120/(1,6 × 10<sup>−19</sup>) = 7,5 × 10<sup>20</sup> elektron.
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Amperemeter</h3>
          <p>Mengukur kuat arus. Dipasang <strong>seri</strong> dengan komponen yang diukur, sehingga seluruh arus melewatinya. Hambatan dalamnya dibuat sangat kecil.</p>
        </div>
        <div class="kartu">
          <h3>Voltmeter</h3>
          <p>Mengukur beda potensial (tegangan). Dipasang <strong>paralel</strong> dengan komponen yang diukur. Hambatan dalamnya dibuat sangat besar agar hampir tidak ada arus yang masuk.</p>
        </div>
      </div>
    </section>

    <!-- ============ 2. HUKUM OHM ============ -->
    <section class="bagian" id="ohm">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Hukum Ohm</h2>
      </div>

      <p>Georg Simon Ohm menemukan bahwa pada suhu tetap, kuat arus yang mengalir melalui suatu penghantar <strong>sebanding</strong> dengan beda potensial di antara ujung-ujungnya. Perbandingan tegangan dan kuat arus itu disebut <strong>hambatan</strong>.</p>

      <div class="rumus">
        <div class="rumus-judul">Hukum Ohm</div>
        <div class="rumus-isi">
          <math display="block" aria-label="V sama dengan I R">
            <mi>V</mi><mo>=</mo><mi>I</mi><mi>R</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>V</dt><dd>beda potensial atau tegangan <span class="satuan">(V)</span></dd>
            <dt>I</dt><dd>kuat arus <span class="satuan">(A)</span></dd>
            <dt>R</dt><dd>hambatan <span class="satuan">(ohm, Ω)</span></dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li>Penghantar yang mematuhi hukum Ohm disebut <strong>ohmik</strong>. Grafik <em>V</em>–<em>I</em>-nya berupa garis lurus melalui titik asal, dan kemiringannya sama dengan <em>R</em>.</li>
        <li>Komponen <strong>non-ohmik</strong> tidak memiliki hambatan tetap, misalnya dioda dan filamen lampu pijar yang hambatannya naik ketika filamen memanas.</li>
      </ul>
    </section>

    <!-- ============ 3. HAMBATAN PENGHANTAR ============ -->
    <section class="bagian" id="hambatan-kawat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Hambatan penghantar</h2>
      </div>

      <p>Hambatan seutas kawat bergantung pada panjang, luas penampang, dan jenis bahannya. Kawat yang lebih panjang menghambat lebih besar, sedangkan kawat yang lebih tebal menghambat lebih kecil.</p>

      <div class="rumus">
        <div class="rumus-judul">Hambatan kawat</div>
        <div class="rumus-isi">
          <math display="block" aria-label="R sama dengan rho L per A">
            <mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>R</dt><dd>hambatan kawat <span class="satuan">(Ω)</span></dd>
            <dt>ρ</dt><dd>hambat jenis bahan <span class="satuan">(Ω m)</span></dd>
            <dt>L</dt><dd>panjang kawat <span class="satuan">(m)</span></dd>
            <dt>A</dt><dd>luas penampang kawat <span class="satuan">(m²)</span></dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Bahan</th><th>Hambat jenis ρ pada 20 °C (Ω m)</th></tr>
          </thead>
          <tbody>
            <tr><td>Perak</td><td>1,6 × 10<sup>−8</sup></td></tr>
            <tr><td>Tembaga</td><td>1,7 × 10<sup>−8</sup></td></tr>
            <tr><td>Aluminium</td><td>2,8 × 10<sup>−8</sup></td></tr>
            <tr><td>Besi</td><td>1,0 × 10<sup>−7</sup></td></tr>
            <tr><td>Nikrom</td><td>1,1 × 10<sup>−6</sup></td></tr>
          </tbody>
        </table>
      </div>

      <p>Tembaga dipakai sebagai kabel listrik karena hambat jenisnya kecil dan harganya jauh lebih murah daripada perak. Nikrom yang hambat jenisnya besar justru dipakai sebagai elemen pemanas pada setrika dan pemanas air.</p>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Kabel tembaga sepanjang 100 m dengan luas penampang 1 mm² = 10<sup>−6</sup> m² memiliki hambatan <em>R</em> = (1,7 × 10<sup>−8</sup>)(100)/(10<sup>−6</sup>) = 1,7 Ω.
      </div>

      <div class="sub">
        <h3><span class="no">3.1</span>Pengaruh suhu</h3>
        <p>Hambatan logam bertambah besar ketika suhunya naik, karena atom-atom logam bergetar makin kuat dan makin sering menghalangi gerak elektron. Hubungannya <em>R</em> = <em>R</em><sub>0</sub>(1 + αΔ<em>T</em>), dengan α sebagai koefisien suhu hambatan. Sifat ini dimanfaatkan pada termometer hambatan.</p>
      </div>
    </section>

    <!-- ============ 4. SUSUNAN HAMBATAN ============ -->
    <section class="bagian" id="susunan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Susunan hambatan</h2>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/susunan-hambatan.svg" alt="Kiri, susunan seri: hambatan R1, R2, dan R3 disambung berurutan dalam satu jalur, sehingga arus yang melewati setiap hambatan sama. Kanan, susunan paralel: hambatan R1, R2, dan R3 dipasang pada tiga cabang di antara dua titik yang sama, sehingga tegangan pada setiap hambatan sama." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Susunan hambatan seri (kiri) dan paralel (kanan).</figcaption>
      </figure>

      <div class="cabang">
        <div class="kartu">
          <h3>Seri</h3>
          <p>Hanya ada satu jalur arus, sehingga arus pada setiap hambatan <strong>sama</strong>. Tegangan sumber terbagi ke setiap hambatan: <em>V</em> = <em>V</em><sub>1</sub> + <em>V</em><sub>2</sub> + <em>V</em><sub>3</sub>. Jika satu hambatan putus, seluruh rangkaian padam.</p>
        </div>
        <div class="kartu">
          <h3>Paralel</h3>
          <p>Setiap hambatan mendapat tegangan yang <strong>sama</strong>, sedangkan arusnya terbagi: <em>I</em> = <em>I</em><sub>1</sub> + <em>I</em><sub>2</sub> + <em>I</em><sub>3</sub>. Jika satu cabang putus, cabang lain tetap menyala. Instalasi listrik rumah memakai susunan paralel.</p>
        </div>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Hambatan pengganti</div>
        <div class="rumus-isi">
          <math display="block" aria-label="seri: R s sama dengan R 1 ditambah R 2 ditambah R 3 ditambah seterusnya">
            <msub><mi>R</mi><mi>s</mi></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo>+</mo><msub><mi>R</mi><mn>3</mn></msub><mo>+</mo><mo>…</mo>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="paralel: satu per R p sama dengan satu per R 1 ditambah satu per R 2 ditambah satu per R 3 ditambah seterusnya">
            <mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>3</mn></msub></mfrac><mo>+</mo><mo>…</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>R<sub>s</sub></dt><dd>hambatan pengganti seri, selalu lebih besar daripada hambatan terbesar <span class="satuan">(Ω)</span></dd>
            <dt>R<sub>p</sub></dt><dd>hambatan pengganti paralel, selalu lebih kecil daripada hambatan terkecil <span class="satuan">(Ω)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Hambatan 6 Ω dan 3 Ω dipasang paralel, lalu diseri dengan hambatan 4 Ω dan dihubungkan ke sumber 12 V. Bagian paralel: 1/<em>R</em><sub>p</sub> = 1/6 + 1/3 = 3/6, sehingga <em>R</em><sub>p</sub> = 2 Ω. Hambatan total 2 + 4 = 6 Ω, dan arus dari sumber <em>I</em> = 12/6 = 2 A.
      </div>
    </section>

    <!-- ============ 5. GGL ============ -->
    <section class="bagian" id="ggl">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>GGL dan hambatan dalam</h2>
      </div>

      <p><strong>Gaya gerak listrik</strong> (GGL, ε atau <em>E</em>) adalah beda potensial di antara kutub-kutub sumber tegangan saat <strong>tidak</strong> ada arus yang mengalir. Setiap baterai juga memiliki <strong>hambatan dalam</strong> <em>r</em>. Ketika baterai mengalirkan arus, sebagian tegangannya hilang di hambatan dalam ini, sehingga tegangan yang terukur di kutub-kutubnya, yaitu <strong>tegangan jepit</strong>, lebih kecil daripada GGL.</p>

      <div class="rumus">
        <div class="rumus-judul">Tegangan jepit dan arus rangkaian</div>
        <div class="rumus-isi">
          <math display="block" aria-label="V sama dengan E dikurangi I r">
            <mi>V</mi><mo>=</mo><mi>E</mi><mo>−</mo><mi>I</mi><mi>r</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="I sama dengan E per kurung R ditambah r">
            <mi>I</mi><mo>=</mo><mfrac><mi>E</mi><mrow><mi>R</mi><mo>+</mo><mi>r</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>V</dt><dd>tegangan jepit <span class="satuan">(V)</span></dd>
            <dt>E</dt><dd>gaya gerak listrik <span class="satuan">(V)</span></dd>
            <dt>r</dt><dd>hambatan dalam sumber <span class="satuan">(Ω)</span></dd>
            <dt>R</dt><dd>hambatan luar <span class="satuan">(Ω)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Aki dengan <em>E</em> = 12 V dan <em>r</em> = 0,5 Ω dihubungkan ke lampu 5,5 Ω. Arusnya <em>I</em> = 12/(5,5 + 0,5) = 2 A, dan tegangan jepitnya <em>V</em> = 12 − 2(0,5) = 11 V.
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3><em>n</em> baterai identik seri</h3>
          <p>GGL total <em>nE</em>, hambatan dalam total <em>nr</em>. Dipakai untuk mendapat tegangan lebih besar, misalnya dua baterai 1,5 V pada senter.</p>
        </div>
        <div class="kartu">
          <h3><em>n</em> baterai identik paralel</h3>
          <p>GGL total tetap <em>E</em>, hambatan dalam total <em>r</em>/<em>n</em>. Tegangannya tidak bertambah, tetapi baterai lebih awet.</p>
        </div>
      </div>
    </section>

    <!-- ============ 6. HUKUM KIRCHHOFF ============ -->
    <section class="bagian" id="kirchhoff">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Hukum Kirchhoff</h2>
      </div>

      <p>Rangkaian yang memiliki lebih dari satu sumber tegangan atau cabang yang rumit tidak dapat diselesaikan hanya dengan rumus seri dan paralel. Gustav Kirchhoff merumuskan dua hukum untuk menganalisisnya.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/hukum-kirchhoff.svg" alt="Kiri, hukum I Kirchhoff: arus I1 dan I2 masuk ke sebuah titik cabang, sedangkan arus I3 dan I4 keluar, sehingga I1 ditambah I2 sama dengan I3 ditambah I4. Kanan, hukum II Kirchhoff: rangkaian tertutup berisi sumber tegangan E dengan hambatan dalam r dan hambatan luar R. Arus I mengalir searah jarum jam, dan arah loop juga dipilih searah jarum jam." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Hukum I Kirchhoff pada titik cabang (kiri) dan hukum II Kirchhoff pada satu loop (kanan).</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Hukum Kirchhoff</div>
        <div class="rumus-isi">
          <math display="block" aria-label="hukum satu: jumlah I masuk sama dengan jumlah I keluar">
            <mi>Σ</mi><msub><mi>I</mi><mtext>masuk</mtext></msub><mo>=</mo><mi>Σ</mi><msub><mi>I</mi><mtext>keluar</mtext></msub>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="hukum dua: jumlah E ditambah jumlah I R sama dengan nol">
            <mi>Σ</mi><mi>E</mi><mo>+</mo><mi>Σ</mi><mi>I</mi><mi>R</mi><mo>=</mo><mn>0</mn>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Hukum I</dt><dd>pada titik cabang, jumlah arus masuk sama dengan jumlah arus keluar (kekekalan muatan)</dd>
            <dt>Hukum II</dt><dd>dalam satu rangkaian tertutup (loop), jumlah GGL dan penurunan tegangan sama dengan nol (kekekalan energi)</dd>
          </dl>
        </div>
      </div>

      <p>Langkah menyelesaikan rangkaian dengan hukum II Kirchhoff:</p>
      <ol class="langkah">
        <li>Tentukan arah arus di setiap cabang. Jika belum tahu, tebak saja. Jika hasil akhirnya negatif, arah arus sebenarnya berlawanan dengan tebakanmu.</li>
        <li>Pilih arah loop, misalnya searah jarum jam.</li>
        <li>Tanda <em>IR</em>: positif jika arah arus <strong>searah</strong> dengan arah loop, negatif jika berlawanan.</li>
        <li>Tanda <em>E</em>: positif jika arah loop bertemu kutub <strong>positif</strong> lebih dulu, negatif jika bertemu kutub negatif lebih dulu.</li>
        <li>Tulis persamaan untuk setiap loop, tambahkan persamaan hukum I, lalu selesaikan sebagai sistem persamaan.</li>
      </ol>

      <div class="catatan info">
        <strong class="judul">Cek dengan satu loop</strong>
        Pada Gambar 2 kanan, arah loop bertemu kutub negatif sumber lebih dulu, sehingga −<em>E</em> + <em>I</em>(<em>R</em> + <em>r</em>) = 0. Hasilnya <em>I</em> = <em>E</em>/(<em>R</em> + <em>r</em>), sama dengan rumus pada bagian 5.
      </div>
    </section>

    <!-- ============ 7. ENERGI DAN DAYA ============ -->
    <section class="bagian" id="daya">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">7</span>
        <h2>Energi dan daya listrik</h2>
      </div>

      <p>Arus listrik membawa energi yang dapat diubah menjadi kalor, cahaya, gerak, atau bunyi. <strong>Daya listrik</strong> adalah energi listrik yang dipakai setiap sekon.</p>

      <div class="rumus">
        <div class="rumus-judul">Energi dan daya listrik</div>
        <div class="rumus-isi">
          <math display="block" aria-label="W sama dengan V I t sama dengan I kuadrat R t sama dengan V kuadrat per R dikali t">
            <mi>W</mi><mo>=</mo><mi>V</mi><mi>I</mi><mi>t</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi><mi>t</mi><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mi>R</mi></mfrac><mi>t</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="P sama dengan W per t sama dengan V I sama dengan I kuadrat R sama dengan V kuadrat per R">
            <mi>P</mi><mo>=</mo><mfrac><mi>W</mi><mi>t</mi></mfrac><mo>=</mo><mi>V</mi><mi>I</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mi>R</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>W</dt><dd>energi listrik <span class="satuan">(J)</span></dd>
            <dt>P</dt><dd>daya listrik <span class="satuan">(watt, W)</span></dd>
            <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li>PLN menghitung pemakaian energi dalam <strong>kilowatt-jam</strong> (kWh): 1 kWh = 1.000 W × 3.600 s = 3,6 × 10<sup>6</sup> J.</li>
        <li>Label "100 W, 220 V" pada lampu berarti lampu menyerap daya 100 W jika dipasang pada tegangan 220 V. Hambatannya dianggap tetap, sehingga pada tegangan lain dayanya menjadi <em>P</em><sub>2</sub> = (<em>V</em><sub>2</sub>/<em>V</em><sub>1</sub>)² <em>P</em><sub>1</sub>.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Lampu 100 W, 220 V dipasang pada tegangan 110 V. Dayanya <em>P</em> = (110/220)² × 100 = 25 W, sehingga nyalanya jauh lebih redup. Contoh lain: penanak nasi 400 W menyala 2 jam setiap hari selama 30 hari memakai energi 0,4 kW × 60 jam = 24 kWh. Jika tarifnya Rp1.500 per kWh, biayanya Rp36.000.
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Konsep</th><th>Satuan</th><th>Rumus</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Kuat arus</td><td>A</td>
              <td><math><mi>I</mi><mo>=</mo><mfrac><mi>Q</mi><mi>t</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Hukum Ohm</td><td>V</td>
              <td><math><mi>V</mi><mo>=</mo><mi>I</mi><mi>R</mi></math></td>
            </tr>
            <tr>
              <td>Hambatan kawat</td><td>Ω</td>
              <td><math><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Seri / paralel</td><td>Ω</td>
              <td><math><msub><mi>R</mi><mi>s</mi></msub><mo>=</mo><mi>Σ</mi><mi>R</mi><mo>,</mo><mspace width="0.5em"/><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mi>Σ</mi><mfrac><mn>1</mn><mi>R</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Tegangan jepit</td><td>V</td>
              <td><math><mi>V</mi><mo>=</mo><mi>E</mi><mo>−</mo><mi>I</mi><mi>r</mi></math></td>
            </tr>
            <tr>
              <td>Hukum II Kirchhoff</td><td>V</td>
              <td><math><mi>Σ</mi><mi>E</mi><mo>+</mo><mi>Σ</mi><mi>I</mi><mi>R</mi><mo>=</mo><mn>0</mn></math></td>
            </tr>
            <tr>
              <td>Daya listrik</td><td>W</td>
              <td><math><mi>P</mi><mo>=</mo><mi>V</mi><mi>I</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mi>R</mi></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

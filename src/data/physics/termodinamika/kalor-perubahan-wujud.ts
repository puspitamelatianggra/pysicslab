/* ====== Bab 3-2 · Kalor dan Perubahan Wujud ====== */

import { Chapter } from '../../materials';

export const kalorPerubahanWujud: Chapter = {
  chapterId: "3-2",
  title: "Kalor dan Perubahan Wujud",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Suhu dan Kalor</span>
      <h1>Kalor dan Perubahan Wujud</h1>
      <p>Rangkuman pengertian kalor, perbedaannya dengan suhu dan energi dalam, kalor jenis dan kapasitas kalor, asas Black, perubahan wujud zat, serta kalor laten.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#kalor">Pengertian kalor</a></li>
        <li><a href="#suhu-kalor-energi">Suhu, kalor, dan energi dalam</a></li>
        <li><a href="#kalor-jenis">Kalor jenis dan kapasitas kalor</a></li>
        <li><a href="#asas-black">Asas Black</a></li>
        <li><a href="#perubahan-wujud">Perubahan wujud zat</a></li>
        <li><a href="#kalor-laten">Kalor laten</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. KALOR ============ -->
    <section class="bagian" id="kalor">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian kalor</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Kalor</span>
        <p>Kalor adalah <strong>energi yang berpindah</strong> dari benda bersuhu tinggi ke benda bersuhu rendah karena adanya perbedaan suhu. Perpindahan ini berlangsung terus sampai suhu kedua benda sama.</p>
      </div>

      <p>Contohnya, saat segelas teh panas dibiarkan di meja, kalor mengalir dari teh ke udara di sekitarnya sehingga teh lama-kelamaan menjadi dingin. Kalor tidak pernah mengalir dengan sendirinya dari benda dingin ke benda panas.</p>

      <ul class="poin">
        <li>Kalor diberi lambang <em>Q</em>. Satuan SI-nya <strong>joule</strong> (J), sama seperti satuan energi lainnya.</li>
        <li>Satuan lain yang masih sering dipakai adalah <strong>kalori</strong> (kal). Satu kalori adalah kalor yang diperlukan untuk menaikkan suhu 1 gram air sebesar 1 °C. Hubungannya: 1 kal ≈ 4,2 J, dan 1 kkal = 1.000 kal.</li>
      </ul>
    </section>

    <!-- ============ 2. SUHU, KALOR, ENERGI DALAM ============ -->
    <section class="bagian" id="suhu-kalor-energi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Suhu, kalor, dan energi dalam</h2>
      </div>

      <p>Ketiga istilah ini sering tertukar, padahal maknanya berbeda.</p>

      <div class="kartu">
        <span class="istilah">Suhu</span>
        <p>Derajat panas atau dinginnya suatu benda. Suhu menggambarkan <strong>rata-rata</strong> energi kinetik partikel benda dan diukur dengan termometer.</p>
      </div>

      <div class="kartu">
        <span class="istilah">Kalor</span>
        <p>Energi yang <strong>mengalir</strong> dari benda bersuhu tinggi ke benda bersuhu lebih rendah. Kalor hanya ada selama perpindahan berlangsung.</p>
      </div>

      <div class="kartu">
        <span class="istilah">Energi dalam</span>
        <p>Ukuran <strong>jumlah total</strong> energi seluruh molekul di dalam zat. Energi dalam bergantung pada suhu dan juga pada banyaknya zat.</p>
      </div>

      <div class="catatan info">
        <strong class="judul">Benda tidak "menyimpan" kalor</strong>
        Yang dimiliki benda adalah energi dalam, bukan kalor. Kalor adalah energi yang sedang berpindah. Sebagai gambaran, satu ember air hangat bersuhu 40 °C memiliki energi dalam lebih besar daripada secangkir air panas bersuhu 90 °C, karena jumlah molekulnya jauh lebih banyak. Meski begitu, jika keduanya disentuhkan, kalor tetap mengalir dari air 90 °C ke air 40 °C, karena arah aliran kalor ditentukan oleh suhu.
      </div>
    </section>

    <!-- ============ 3. KALOR JENIS ============ -->
    <section class="bagian" id="kalor-jenis">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Kalor jenis dan kapasitas kalor</h2>
      </div>

      <div class="sub">
        <h3><span class="no">3.1</span>Kalor jenis</h3>
        <p><strong>Kalor jenis</strong> (<em>c</em>) adalah banyaknya kalor yang diperlukan untuk menaikkan suhu <strong>1 kg</strong> zat sebesar <strong>1 °C</strong>. Kalor jenis merupakan sifat khas bahan. Zat dengan kalor jenis besar perlu kalor yang banyak untuk menaikkan suhunya sedikit, sehingga lambat panas dan juga lambat dingin.</p>

        <div class="rumus">
          <div class="rumus-judul">Kalor untuk mengubah suhu</div>
          <div class="rumus-isi">
            <math display="block" aria-label="Q sama dengan m c delta T">
              <mi>Q</mi><mo>=</mo><mi>m</mi><mi>c</mi><mi>Δ</mi><mi>T</mi>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="c sama dengan Q per m delta T">
              <mi>c</mi><mo>=</mo><mfrac><mi>Q</mi><mrow><mi>m</mi><mi>Δ</mi><mi>T</mi></mrow></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>Q</dt><dd>kalor yang diserap atau dilepas <span class="satuan">(J)</span></dd>
              <dt>m</dt><dd>massa benda <span class="satuan">(kg)</span></dd>
              <dt>c</dt><dd>kalor jenis <span class="satuan">(J/kg °C)</span></dd>
              <dt>ΔT</dt><dd>perubahan suhu <span class="satuan">(°C atau K)</span></dd>
            </dl>
          </div>
        </div>

        <div class="tabel-wrap">
          <table>
            <thead>
              <tr><th>Zat</th><th>Kalor jenis c (J/kg °C)</th></tr>
            </thead>
            <tbody>
              <tr><td>Air</td><td>4.200</td></tr>
              <tr><td>Es</td><td>2.100</td></tr>
              <tr><td>Uap air</td><td>2.010</td></tr>
              <tr><td>Aluminium</td><td>900</td></tr>
              <tr><td>Kaca</td><td>840</td></tr>
              <tr><td>Besi</td><td>450</td></tr>
              <tr><td>Tembaga</td><td>390</td></tr>
            </tbody>
          </table>
        </div>

        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          Air bermassa 2 kg dipanaskan dari 25 °C menjadi 75 °C. Kalor yang diperlukan <em>Q</em> = <em>mc</em>Δ<em>T</em> = 2 × 4.200 × 50 = 420.000 J = 420 kJ.
        </div>

        <p>Kalor jenis air termasuk yang paling besar di antara zat sehari-hari. Inilah sebabnya laut lebih lambat panas pada siang hari dan lebih lambat dingin pada malam hari dibandingkan daratan, sehingga muncul angin laut dan angin darat. Air juga cocok dipakai sebagai pendingin mesin kendaraan.</p>
      </div>

      <div class="sub">
        <h3><span class="no">3.2</span>Kapasitas kalor</h3>
        <p><strong>Kapasitas kalor</strong> (<em>C</em>, huruf kapital) adalah banyaknya kalor yang diperlukan untuk menaikkan suhu <strong>suatu benda</strong> sebesar 1 °C, berapa pun massanya.</p>

        <div class="rumus">
          <div class="rumus-judul">Kapasitas kalor</div>
          <div class="rumus-isi">
            <math display="block" aria-label="C sama dengan Q per delta T sama dengan m c">
              <mi>C</mi><mo>=</mo><mfrac><mi>Q</mi><mrow><mi>Δ</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mi>c</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>C</dt><dd>kapasitas kalor <span class="satuan">(J/°C)</span></dd>
              <dt>Q</dt><dd>kalor <span class="satuan">(J)</span></dd>
              <dt>ΔT</dt><dd>perubahan suhu <span class="satuan">(°C)</span></dd>
              <dt>m</dt><dd>massa benda <span class="satuan">(kg)</span></dd>
              <dt>c</dt><dd>kalor jenis <span class="satuan">(J/kg °C)</span></dd>
            </dl>
          </div>
        </div>

        <div class="cabang">
          <div class="kartu">
            <h3>Kalor jenis (c)</h3>
            <p>Sifat <strong>bahan</strong>. Semua benda dari besi memiliki kalor jenis yang sama, tidak peduli ukurannya.</p>
          </div>
          <div class="kartu">
            <h3>Kapasitas kalor (C)</h3>
            <p>Sifat <strong>benda</strong>. Panci besi besar memiliki kapasitas kalor lebih besar daripada paku besi, karena massanya lebih besar.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 4. ASAS BLACK ============ -->
    <section class="bagian" id="asas-black">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Asas Black</h2>
      </div>

      <p>Jika air panas dicampur dengan air dingin, air panas melepas kalor sehingga suhunya <strong>turun</strong>, sedangkan air dingin menerima kalor sehingga suhunya <strong>naik</strong>. Pertukaran kalor berhenti setelah keduanya mencapai suhu yang sama, yaitu <strong>suhu campuran</strong> atau suhu kesetimbangan <em>T</em><sub>c</sub>. Hasilnya adalah air hangat.</p>

      <p>Jika tidak ada kalor yang hilang ke udara sekitar atau ke wadah, hukum kekekalan energi berlaku: kalor yang dilepas air panas sama dengan kalor yang diterima air dingin. Pernyataan ini dikenal sebagai <strong>asas Black</strong>, dari nama ilmuwan Skotlandia Joseph Black.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/asas-black.svg" alt="Diagram suhu pada asas Black. Air panas bersuhu T1 turun ke suhu campuran Tc sambil melepas kalor, Q lepas sama dengan m1 c1 kali T1 dikurangi Tc. Air dingin bersuhu T2 naik ke suhu campuran Tc sambil menerima kalor, Q terima sama dengan m2 c2 kali Tc dikurangi T2." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Benda panas turun suhunya dan benda dingin naik suhunya sampai keduanya bertemu di suhu campuran <em>T</em><sub>c</sub>.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Asas Black</div>
        <div class="rumus-isi">
          <math display="block" aria-label="Q lepas sama dengan Q terima">
            <msub><mi>Q</mi><mtext>lepas</mtext></msub><mo>=</mo><msub><mi>Q</mi><mtext>terima</mtext></msub>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="m 1 c 1 kali kurung T 1 dikurangi T c sama dengan m 2 c 2 kali kurung T c dikurangi T 2">
            <msub><mi>m</mi><mn>1</mn></msub><msub><mi>c</mi><mn>1</mn></msub><mo stretchy="false">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mi>c</mi></msub><mo stretchy="false">)</mo><mo>=</mo>
            <msub><mi>m</mi><mn>2</mn></msub><msub><mi>c</mi><mn>2</mn></msub><mo stretchy="false">(</mo><msub><mi>T</mi><mi>c</mi></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy="false">)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>m<sub>1</sub>, c<sub>1</sub>, T<sub>1</sub></dt><dd>massa, kalor jenis, dan suhu awal benda panas</dd>
            <dt>m<sub>2</sub>, c<sub>2</sub>, T<sub>2</sub></dt><dd>massa, kalor jenis, dan suhu awal benda dingin</dd>
            <dt>T<sub>c</sub></dt><dd>suhu campuran (suhu akhir) <span class="satuan">(°C)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Selalu tulis (suhu tinggi − suhu rendah)</strong>
        Agar kedua ruas bernilai positif, Δ<em>T</em> benda panas ditulis (<em>T</em><sub>1</sub> − <em>T</em><sub>c</sub>) dan Δ<em>T</em> benda dingin ditulis (<em>T</em><sub>c</sub> − <em>T</em><sub>2</sub>). Suhu campuran pasti berada di antara <em>T</em><sub>2</sub> dan <em>T</em><sub>1</sub>. Jika hasil hitunganmu di luar rentang itu, periksa kembali langkahmu.
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Air 200 g bersuhu 80 °C dicampur dengan air 300 g bersuhu 20 °C. Karena kalor jenisnya sama, <em>c</em> dapat dicoret: 200(80 − <em>T</em><sub>c</sub>) = 300(<em>T</em><sub>c</sub> − 20). Maka 16.000 − 200<em>T</em><sub>c</sub> = 300<em>T</em><sub>c</sub> − 6.000, sehingga 500<em>T</em><sub>c</sub> = 22.000 dan <em>T</em><sub>c</sub> = 44 °C.
      </div>
    </section>

    <!-- ============ 5. PERUBAHAN WUJUD ============ -->
    <section class="bagian" id="perubahan-wujud">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Perubahan wujud zat</h2>
      </div>

      <p>Air yang terus dipanaskan berubah menjadi uap, es yang dibiarkan di meja mencair, dan kapur barus di lemari lama-kelamaan habis tanpa sisa. Semua peristiwa ini menunjukkan bahwa kalor dapat <strong>mengubah wujud</strong> zat. Benda berubah wujud ketika menerima atau melepas kalor.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/perubahan-wujud.svg" alt="Diagram segitiga perubahan wujud zat antara padat, cair, dan gas. Proses yang menerima kalor: mencair dari padat ke cair, menguap dari cair ke gas, dan menyublim dari padat ke gas. Proses yang melepas kalor: membeku dari cair ke padat, mengembun dari gas ke cair, dan mengkristal dari gas ke padat." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Enam perubahan wujud zat. Panah oranye menerima kalor, panah putus-putus melepas kalor.</figcaption>
      </figure>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Perubahan</th><th>Dari → ke</th><th>Kalor</th><th>Contoh</th></tr>
          </thead>
          <tbody>
            <tr><td>Mencair (melebur)</td><td>padat → cair</td><td>menerima</td><td>es batu mencair di dalam gelas</td></tr>
            <tr><td>Membeku</td><td>cair → padat</td><td>melepas</td><td>air menjadi es di dalam freezer</td></tr>
            <tr><td>Menguap</td><td>cair → gas</td><td>menerima</td><td>air mendidih, pakaian basah menjadi kering</td></tr>
            <tr><td>Mengembun</td><td>gas → cair</td><td>melepas</td><td>titik air di luar gelas berisi es, embun pagi</td></tr>
            <tr><td>Menyublim</td><td>padat → gas</td><td>menerima</td><td>kapur barus mengecil dan habis</td></tr>
            <tr><td>Mengkristal (deposisi)</td><td>gas → padat</td><td>melepas</td><td>uap belerang membentuk kristal di kawah gunung</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ============ 6. KALOR LATEN ============ -->
    <section class="bagian" id="kalor-laten">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Kalor laten</h2>
      </div>

      <p>Selama berubah wujud, <strong>suhu zat tetap</strong> walaupun kalor terus diberikan. Es yang sedang mencair tetap bersuhu 0 °C sampai seluruhnya menjadi air, dan air yang sedang mendidih tetap bersuhu 100 °C sampai habis menguap. Kalor yang diserap tidak dipakai untuk menaikkan suhu, tetapi untuk melepaskan ikatan antarpartikel.</p>

      <div class="kartu">
        <span class="istilah">Kalor laten</span>
        <p>Kalor yang diperlukan atau dilepaskan oleh <strong>setiap 1 kg</strong> zat pada saat berubah wujud, tanpa perubahan suhu. Kata <em>laten</em> berarti "tersembunyi", karena kalor ini tidak terlihat sebagai kenaikan suhu.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Kalor untuk mengubah wujud</div>
        <div class="rumus-isi">
          <math display="block" aria-label="Q sama dengan m L">
            <mi>Q</mi><mo>=</mo><mi>m</mi><mi>L</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Q</dt><dd>kalor <span class="satuan">(J)</span></dd>
            <dt>m</dt><dd>massa zat yang berubah wujud <span class="satuan">(kg)</span></dd>
            <dt>L</dt><dd>kalor laten <span class="satuan">(J/kg)</span></dd>
          </dl>
        </div>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Kalor lebur</h3>
          <p>Kalor laten saat zat <strong>melebur</strong> pada titik leburnya. Kalor yang sama dilepaskan saat zat membeku. Untuk es: <strong>336.000 J/kg</strong> (3,36 × 10<sup>5</sup> J/kg) atau 80 kal/g.</p>
        </div>
        <div class="kartu">
          <h3>Kalor uap</h3>
          <p>Kalor laten saat zat <strong>menguap</strong> pada titik didihnya. Kalor yang sama dilepaskan saat zat mengembun. Untuk air: <strong>2.260.000 J/kg</strong> (2,26 × 10<sup>6</sup> J/kg) atau 540 kal/g.</p>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Titik lebur = titik beku</strong>
        Pada tekanan yang sama, zat melebur dan membeku pada suhu yang sama, misalnya air pada 0 °C. Begitu pula titik didih sama dengan titik embun, misalnya air pada 100 °C dan tekanan 1 atm.
      </div>

      <div class="sub">
        <h3><span class="no">6.1</span>Grafik pemanasan es sampai menjadi uap</h3>
        <p>Grafik suhu terhadap kalor berikut menunjukkan es bersuhu −10 °C yang terus dipanaskan sampai menjadi uap. Bagian yang miring adalah kenaikan suhu, sedangkan bagian yang datar adalah perubahan wujud.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/grafik-pemanasan-es.svg" alt="Grafik suhu terhadap kalor yang diserap saat es dipanaskan dari minus 10 derajat Celsius hingga menjadi uap. Bagian miring: es naik suhu, air naik suhu dari 0 sampai 100 derajat, dan uap naik suhu, dengan Q sama dengan m c delta T. Bagian datar: es melebur pada 0 derajat dan air menguap pada 100 derajat, dengan Q sama dengan m L, sehingga suhu tetap selama perubahan wujud. Bagian datar menguap jauh lebih panjang daripada bagian datar melebur." />
          </div>
          <figcaption><strong>Gambar 3.</strong> Grafik <em>T</em>–<em>Q</em> pemanasan es. Garis oranye yang datar adalah perubahan wujud.</figcaption>
        </figure>

        <ol class="langkah">
          <li>Es naik suhu dari −10 °C ke 0 °C: <em>Q</em><sub>1</sub> = <em>m c</em><sub>es</sub> Δ<em>T</em>.</li>
          <li>Es melebur pada 0 °C: <em>Q</em><sub>2</sub> = <em>m L</em><sub>lebur</sub>.</li>
          <li>Air naik suhu dari 0 °C ke 100 °C: <em>Q</em><sub>3</sub> = <em>m c</em><sub>air</sub> Δ<em>T</em>.</li>
          <li>Air menguap pada 100 °C: <em>Q</em><sub>4</sub> = <em>m L</em><sub>uap</sub>.</li>
          <li>Uap naik suhu di atas 100 °C: <em>Q</em><sub>5</sub> = <em>m c</em><sub>uap</sub> Δ<em>T</em>.</li>
        </ol>

        <p>Kalor total adalah jumlah kalor pada setiap tahap yang dilalui. Bagian datar menguap jauh lebih panjang daripada bagian datar melebur, karena kalor uap air hampir tujuh kali kalor lebur es.</p>

        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          Es 0,5 kg bersuhu −10 °C dipanaskan sampai menjadi air bersuhu 20 °C. <em>Q</em><sub>1</sub> = 0,5 × 2.100 × 10 = 10.500 J. <em>Q</em><sub>2</sub> = 0,5 × 336.000 = 168.000 J. <em>Q</em><sub>3</sub> = 0,5 × 4.200 × 20 = 42.000 J. Kalor total <em>Q</em> = 10.500 + 168.000 + 42.000 = 220.500 J.
        </div>

        <div class="catatan">
          <strong class="judul">Asas Black dengan perubahan wujud</strong>
          Asas Black tetap berlaku jika ada zat yang berubah wujud, misalnya es dimasukkan ke dalam teh hangat. Kalor untuk melebur (<em>mL</em>) dimasukkan ke ruas kalor yang diterima, bersama kalor kenaikan suhunya (<em>mc</em>Δ<em>T</em>).
        </div>
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
              <td>Kalor perubahan suhu</td><td>J</td>
              <td><math><mi>Q</mi><mo>=</mo><mi>m</mi><mi>c</mi><mi>Δ</mi><mi>T</mi></math></td>
            </tr>
            <tr>
              <td>Kalor jenis</td><td>J/kg °C</td>
              <td><math><mi>c</mi><mo>=</mo><mfrac><mi>Q</mi><mrow><mi>m</mi><mi>Δ</mi><mi>T</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Kapasitas kalor</td><td>J/°C</td>
              <td><math><mi>C</mi><mo>=</mo><mfrac><mi>Q</mi><mrow><mi>Δ</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mi>c</mi></math></td>
            </tr>
            <tr>
              <td>Asas Black</td><td>J</td>
              <td><math><msub><mi>Q</mi><mtext>lepas</mtext></msub><mo>=</mo><msub><mi>Q</mi><mtext>terima</mtext></msub></math></td>
            </tr>
            <tr>
              <td>Kalor perubahan wujud</td><td>J</td>
              <td><math><mi>Q</mi><mo>=</mo><mi>m</mi><mi>L</mi></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

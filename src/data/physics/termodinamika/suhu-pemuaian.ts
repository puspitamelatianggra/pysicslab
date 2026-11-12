/* ====== Bab 3-1 · Suhu dan Pemuaian ====== */

import { Chapter } from '../../materials';

export const suhuPemuaian: Chapter = {
  chapterId: "3-1",
  title: "Suhu dan Pemuaian",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Suhu dan Kalor</span>
      <h1>Suhu dan Pemuaian</h1>
      <p>Rangkuman pengertian suhu, termometer dan skala suhu, konversi antarskala, serta pemuaian zat padat, cair, dan gas beserta penerapannya.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#suhu">Pengertian suhu</a></li>
        <li><a href="#skala-suhu">Skala suhu dan konversinya</a></li>
        <li><a href="#kolom-raksa">Panjang kolom raksa dan bacaan suhu</a></li>
        <li><a href="#pemuaian-padat">Pemuaian zat padat</a></li>
        <li><a href="#pemuaian-cair-gas">Pemuaian zat cair dan gas</a></li>
        <li><a href="#penerapan">Pemuaian dalam kehidupan sehari-hari</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. SUHU ============ -->
    <section class="bagian" id="suhu">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian suhu</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Suhu</span>
        <p>Suhu adalah <strong>derajat panas atau dinginnya</strong> suatu benda. Benda yang panas memiliki suhu lebih tinggi daripada benda yang dingin. Secara mikroskopis, suhu menggambarkan rata-rata energi kinetik partikel-partikel penyusun benda: makin cepat partikelnya bergerak, makin tinggi suhunya.</p>
      </div>

      <p>Indra peraba kita tidak dapat dipakai untuk mengukur suhu secara tepat. Coba celupkan tangan kiri ke air hangat dan tangan kanan ke air dingin, lalu pindahkan keduanya ke air biasa. Air yang sama akan terasa dingin bagi tangan kiri dan hangat bagi tangan kanan. Karena itu, suhu diukur dengan alat yang disebut <strong>termometer</strong>.</p>

      <ul class="poin">
        <li>Termometer bekerja berdasarkan <strong>sifat termometrik</strong>, yaitu sifat zat yang berubah teratur ketika suhunya berubah, misalnya volume cairan, hambatan listrik, atau warna cahaya yang dipancarkan.</li>
        <li>Termometer zat cair biasanya berisi <strong>raksa</strong> atau <strong>alkohol</strong>. Raksa dipilih karena memuai secara teratur, mengilap sehingga mudah dibaca, dan tidak membasahi dinding kaca. Alkohol dipakai untuk suhu sangat rendah karena baru membeku sekitar −114 °C, sedangkan raksa membeku pada −39 °C.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Kesetimbangan termal</strong>
        Termometer menunjukkan suhu benda karena keduanya bertukar kalor sampai suhunya sama, yang disebut <strong>kesetimbangan termal</strong>. Prinsip ini dikenal sebagai hukum ke-nol termodinamika: jika benda A setimbang termal dengan B, dan B setimbang termal dengan C, maka A juga setimbang termal dengan C.
      </div>
    </section>

    <!-- ============ 2. SKALA SUHU ============ -->
    <section class="bagian" id="skala-suhu">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Skala suhu dan konversinya</h2>
      </div>

      <p>Ada empat skala suhu yang umum dipakai: <strong>Celsius</strong>, <strong>Reamur</strong>, <strong>Fahrenheit</strong>, dan <strong>Kelvin</strong>. Kelvin adalah satuan suhu dalam Sistem Internasional (SI). Setiap skala dibuat dari dua <strong>titik tetap</strong>:</p>

      <ul class="poin">
        <li><strong>Titik tetap bawah</strong>: suhu es yang sedang mencair (titik lebur es) pada tekanan 1 atm.</li>
        <li><strong>Titik tetap atas</strong>: suhu air yang sedang mendidih (titik didih air) pada tekanan 1 atm.</li>
      </ul>

      <figure class="gambar lebar">
        <div class="gambar-isi">
          <img src="/images/skala-termometer.svg" alt="Empat termometer berskala Celsius, Reamur, Fahrenheit, dan Kelvin. Titik tetap atas bernilai 100, 80, 212, dan 373. Titik tetap bawah bernilai 0, 0, 32, dan 273. Rentang antara kedua titik tetap berturut-turut 100, 80, 180, dan 100 skala." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Titik tetap atas dan titik tetap bawah pada empat skala suhu.</figcaption>
      </figure>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Skala</th><th>Titik tetap bawah</th><th>Titik tetap atas</th><th>Rentang</th></tr>
          </thead>
          <tbody>
            <tr><td>Celsius (°C)</td><td>0</td><td>100</td><td>100</td></tr>
            <tr><td>Reamur (°R)</td><td>0</td><td>80</td><td>80</td></tr>
            <tr><td>Fahrenheit (°F)</td><td>32</td><td>212</td><td>180</td></tr>
            <tr><td>Kelvin (K)</td><td>273</td><td>373</td><td>100</td></tr>
          </tbody>
        </table>
      </div>

      <p>Perbandingan rentang keempat skala adalah C : R : F : K = 100 : 80 : 180 : 100, atau jika disederhanakan menjadi <strong>5 : 4 : 9 : 5</strong>. Dengan mengurangkan titik tetap bawah masing-masing skala agar semuanya mulai dari nol, diperoleh rumus konversi berikut.</p>

      <div class="rumus">
        <div class="rumus-judul">Konversi skala suhu</div>
        <div class="rumus-isi">
          <math display="block" aria-label="t C per 5 sama dengan t R per 4 sama dengan t F dikurangi 32 per 9 sama dengan T K dikurangi 273 per 5">
            <mfrac><msub><mi>t</mi><mi>C</mi></msub><mn>5</mn></mfrac><mo>=</mo>
            <mfrac><msub><mi>t</mi><mi>R</mi></msub><mn>4</mn></mfrac><mo>=</mo>
            <mfrac><mrow><msub><mi>t</mi><mi>F</mi></msub><mo>−</mo><mn>32</mn></mrow><mn>9</mn></mfrac><mo>=</mo>
            <mfrac><mrow><msub><mi>T</mi><mi>K</mi></msub><mo>−</mo><mn>273</mn></mrow><mn>5</mn></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>t<sub>C</sub></dt><dd>suhu dalam skala Celsius <span class="satuan">(°C)</span></dd>
            <dt>t<sub>R</sub></dt><dd>suhu dalam skala Reamur <span class="satuan">(°R)</span></dd>
            <dt>t<sub>F</sub></dt><dd>suhu dalam skala Fahrenheit <span class="satuan">(°F)</span></dd>
            <dt>T<sub>K</sub></dt><dd>suhu dalam skala Kelvin <span class="satuan">(K)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Suhu ruangan 25 °C. Dalam Reamur: <em>t</em><sub>R</sub> = (4/5) × 25 = 20 °R. Dalam Fahrenheit: <em>t</em><sub>F</sub> = (9/5) × 25 + 32 = 77 °F. Dalam Kelvin: <em>T</em> = 25 + 273 = 298 K.
      </div>

      <div class="sub">
        <h3><span class="no">2.1</span>Skala buatan sendiri</h3>
        <p>Cara yang sama berlaku untuk termometer dengan skala apa pun, misalnya skala X yang titik tetap bawahnya X<sub>b</sub> dan titik tetap atasnya X<sub>a</sub>. Posisi suhu di antara kedua titik tetap selalu sebanding pada setiap skala.</p>
        <div class="rumus">
          <div class="rumus-judul">Konversi ke skala sembarang</div>
          <div class="rumus-isi">
            <math display="block" aria-label="X dikurangi X b per X a dikurangi X b sama dengan t C dikurangi 0 per 100 dikurangi 0">
              <mfrac><mrow><mi>X</mi><mo>−</mo><msub><mi>X</mi><mi>b</mi></msub></mrow><mrow><msub><mi>X</mi><mi>a</mi></msub><mo>−</mo><msub><mi>X</mi><mi>b</mi></msub></mrow></mfrac><mo>=</mo>
              <mfrac><mrow><msub><mi>t</mi><mi>C</mi></msub><mo>−</mo><mn>0</mn></mrow><mrow><mn>100</mn><mo>−</mo><mn>0</mn></mrow></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>X</dt><dd>bacaan suhu pada skala X</dd>
              <dt>X<sub>a</sub>, X<sub>b</sub></dt><dd>titik tetap atas dan bawah skala X</dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Perubahan suhu ΔT</strong>
        Untuk <strong>selisih</strong> suhu, angka 32 dan 273 tidak dipakai. Kenaikan 1 °C sama dengan kenaikan 1 K, dan sama dengan kenaikan 9/5 °F. Jadi, air yang dipanaskan dari 20 °C menjadi 50 °C mengalami Δ<em>T</em> = 30 °C = 30 K. Perhatikan juga bahwa Kelvin ditulis tanpa tanda derajat: 300 K, bukan 300 °K.
      </div>
    </section>

    <!-- ============ 3. KOLOM RAKSA ============ -->
    <section class="bagian" id="kolom-raksa">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Panjang kolom raksa dan bacaan suhu</h2>
      </div>

      <p>Pada termometer raksa, panjang kolom raksa di dalam pipa kaca bertambah secara teratur ketika suhunya naik. Karena itu, panjang kolom raksa dapat dipakai untuk menentukan suhu, asalkan panjangnya pada kedua titik tetap sudah diketahui.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/termometer-kolom-raksa.svg" alt="Termometer raksa. Panjang kolom raksa diukur dari pangkal pipa: X nol pada titik lebur es 0 derajat Celsius, X seratus pada titik didih air 100 derajat Celsius, dan X theta pada suhu theta yang dicari, yang terletak di antara keduanya." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Panjang kolom raksa pada titik lebur es (<em>X</em><sub>0</sub>), pada titik didih air (<em>X</em><sub>100</sub>), dan pada suhu θ yang dicari (<em>X</em><sub>θ</sub>).</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Suhu dari panjang kolom raksa</div>
        <div class="rumus-isi">
          <math display="block" aria-label="theta per 100 sama dengan X theta dikurangi X nol per X seratus dikurangi X nol">
            <mfrac><mi>θ</mi><mn>100</mn></mfrac><mo>=</mo>
            <mfrac><mrow><msub><mi>X</mi><mi>θ</mi></msub><mo>−</mo><msub><mi>X</mi><mn>0</mn></msub></mrow><mrow><msub><mi>X</mi><mn>100</mn></msub><mo>−</mo><msub><mi>X</mi><mn>0</mn></msub></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>θ</dt><dd>suhu yang dicari <span class="satuan">(°C)</span></dd>
            <dt>X<sub>θ</sub></dt><dd>panjang kolom raksa pada suhu θ <span class="satuan">(cm)</span></dd>
            <dt>X<sub>0</sub></dt><dd>panjang kolom raksa pada titik lebur es, 0 °C <span class="satuan">(cm)</span></dd>
            <dt>X<sub>100</sub></dt><dd>panjang kolom raksa pada titik didih air, 100 °C <span class="satuan">(cm)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Panjang kolom raksa 4 cm pada es yang mencair dan 24 cm pada air mendidih. Saat dicelupkan ke dalam cairan, panjangnya 13 cm. Suhu cairan: θ = 100 × (13 − 4)/(24 − 4) = 100 × 9/20 = 45 °C.
      </div>
    </section>

    <!-- ============ 4. PEMUAIAN ZAT PADAT ============ -->
    <section class="bagian" id="pemuaian-padat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Pemuaian zat padat</h2>
      </div>

      <p><strong>Pemuaian</strong> adalah bertambahnya ukuran benda karena suhunya naik. Saat dipanaskan, partikel-partikel benda bergetar makin kuat sehingga jarak rata-rata antarpartikel makin besar. Sebaliknya, benda <strong>menyusut</strong> saat didinginkan. Zat padat dapat mengalami pemuaian panjang, luas, dan volume, sedangkan zat cair dan gas hanya mengalami pemuaian volume.</p>

      <div class="sub">
        <h3><span class="no">4.1</span>Pemuaian panjang</h3>
        <p>Pemuaian panjang terjadi pada benda yang ukuran panjangnya jauh lebih besar daripada ukuran lainnya, seperti kawat, rel, dan batang logam. Setiap bahan memuai dengan laju yang berbeda. Besaran yang menunjukkan hal ini disebut <strong>koefisien muai panjang</strong> (α), yaitu pertambahan panjang setiap satu satuan panjang mula-mula untuk setiap kenaikan suhu 1 °C.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/pemuaian-panjang.svg" alt="Batang logam yang salah satu ujungnya menempel pada dinding. Pada suhu awal panjangnya l nol. Setelah suhunya naik sebesar delta T, panjangnya menjadi l t, yaitu bertambah sebesar delta l." />
          </div>
          <figcaption><strong>Gambar 3.</strong> Batang sepanjang <em>l</em><sub>0</sub> bertambah panjang Δ<em>l</em> setelah suhunya naik Δ<em>T</em>.</figcaption>
        </figure>

        <div class="rumus">
          <div class="rumus-judul">Pemuaian panjang</div>
          <div class="rumus-isi">
            <math display="block" aria-label="alfa sama dengan delta l per l nol delta T">
              <mi>α</mi><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>l</mi></mrow><mrow><msub><mi>l</mi><mn>0</mn></msub><mi>Δ</mi><mi>T</mi></mrow></mfrac>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="delta l sama dengan l nol alfa delta T">
              <mi>Δ</mi><mi>l</mi><mo>=</mo><msub><mi>l</mi><mn>0</mn></msub><mi>α</mi><mi>Δ</mi><mi>T</mi>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="l t sama dengan l nol dikali kurung 1 ditambah alfa delta T">
              <msub><mi>l</mi><mi>t</mi></msub><mo>=</mo><msub><mi>l</mi><mn>0</mn></msub><mo>+</mo><mi>Δ</mi><mi>l</mi><mo>=</mo>
              <msub><mi>l</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>α</mi><mi>Δ</mi><mi>T</mi><mo stretchy="false">)</mo>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>l<sub>t</sub></dt><dd>panjang akhir <span class="satuan">(m)</span></dd>
              <dt>l<sub>0</sub></dt><dd>panjang mula-mula <span class="satuan">(m)</span></dd>
              <dt>Δl</dt><dd>pertambahan panjang <span class="satuan">(m)</span></dd>
              <dt>α</dt><dd>koefisien muai panjang <span class="satuan">(/°C atau /K)</span></dd>
              <dt>ΔT</dt><dd>perubahan suhu <span class="satuan">(°C atau K)</span></dd>
            </dl>
          </div>
        </div>

        <div class="tabel-wrap">
          <table>
            <thead>
              <tr><th>Bahan</th><th>Koefisien muai panjang α (/°C)</th></tr>
            </thead>
            <tbody>
              <tr><td>Kaca biasa</td><td>9 × 10<sup>−6</sup></td></tr>
              <tr><td>Kaca pyrex</td><td>3 × 10<sup>−6</sup></td></tr>
              <tr><td>Baja</td><td>11 × 10<sup>−6</sup></td></tr>
              <tr><td>Tembaga</td><td>17 × 10<sup>−6</sup></td></tr>
              <tr><td>Kuningan</td><td>19 × 10<sup>−6</sup></td></tr>
              <tr><td>Aluminium</td><td>26 × 10<sup>−6</sup></td></tr>
            </tbody>
          </table>
        </div>

        <p>Koefisien muai kaca pyrex sangat kecil, sehingga peralatan masak dan gelas laboratorium dari pyrex tidak mudah retak walaupun suhunya berubah mendadak.</p>

        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          Rel baja sepanjang 10 m dipasang pada suhu 20 °C. Pada siang hari suhunya mencapai 60 °C. Pertambahan panjangnya Δ<em>l</em> = <em>l</em><sub>0</sub>αΔ<em>T</em> = 10 × (11 × 10<sup>−6</sup>) × 40 = 4,4 × 10<sup>−3</sup> m = 4,4 mm. Karena itu, sambungan rel diberi celah beberapa milimeter.
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">4.2</span>Pemuaian luas dan pemuaian volume</h3>
        <p>Benda berbentuk lempeng memuai ke dua arah, yaitu panjang dan lebarnya, sehingga mengalami <strong>pemuaian luas</strong>. Benda tiga dimensi memuai ke tiga arah, yaitu panjang, lebar, dan tingginya, sehingga mengalami <strong>pemuaian volume</strong>.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/pemuaian-luas-volume.svg" alt="Kiri, pemuaian luas: lempeng persegi dengan luas awal A nol membesar ke dua arah menjadi luas akhir A t. Kanan, pemuaian volume: kubus dengan volume awal V nol membesar ke tiga arah menjadi volume akhir V t." />
          </div>
          <figcaption><strong>Gambar 4.</strong> Pemuaian luas pada lempeng (kiri) dan pemuaian volume pada kubus (kanan).</figcaption>
        </figure>

        <div class="cabang">
          <div class="kartu">
            <h3>Pemuaian luas</h3>
            <p>Koefisien muai luas β sama dengan <strong>dua kali</strong> koefisien muai panjang: β = 2α.</p>
          </div>
          <div class="kartu">
            <h3>Pemuaian volume</h3>
            <p>Koefisien muai volume γ sama dengan <strong>tiga kali</strong> koefisien muai panjang: γ = 3α.</p>
          </div>
        </div>

        <div class="rumus">
          <div class="rumus-judul">Pemuaian luas</div>
          <div class="rumus-isi">
            <math display="block" aria-label="delta A sama dengan A nol beta delta T, dan A t sama dengan A nol dikali kurung 1 ditambah beta delta T">
              <mi>Δ</mi><mi>A</mi><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>β</mi><mi>Δ</mi><mi>T</mi>
              <mspace width="1.5em"/>
              <msub><mi>A</mi><mi>t</mi></msub><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>β</mi><mi>Δ</mi><mi>T</mi><mo stretchy="false">)</mo>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>A<sub>t</sub></dt><dd>luas akhir <span class="satuan">(m²)</span></dd>
              <dt>A<sub>0</sub></dt><dd>luas mula-mula <span class="satuan">(m²)</span></dd>
              <dt>ΔA</dt><dd>pertambahan luas <span class="satuan">(m²)</span></dd>
              <dt>β</dt><dd>koefisien muai luas, β = 2α <span class="satuan">(/°C)</span></dd>
            </dl>
          </div>
        </div>

        <div class="rumus">
          <div class="rumus-judul">Pemuaian volume</div>
          <div class="rumus-isi">
            <math display="block" aria-label="delta V sama dengan V nol gamma delta T, dan V t sama dengan V nol dikali kurung 1 ditambah gamma delta T">
              <mi>Δ</mi><mi>V</mi><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mi>γ</mi><mi>Δ</mi><mi>T</mi>
              <mspace width="1.5em"/>
              <msub><mi>V</mi><mi>t</mi></msub><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>γ</mi><mi>Δ</mi><mi>T</mi><mo stretchy="false">)</mo>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>V<sub>t</sub></dt><dd>volume akhir <span class="satuan">(m³)</span></dd>
              <dt>V<sub>0</sub></dt><dd>volume mula-mula <span class="satuan">(m³)</span></dd>
              <dt>ΔV</dt><dd>pertambahan volume <span class="satuan">(m³)</span></dd>
              <dt>γ</dt><dd>koefisien muai volume, γ = 3α <span class="satuan">(/°C)</span></dd>
            </dl>
          </div>
        </div>

        <div class="catatan info">
          <strong class="judul">Mengapa β = 2α?</strong>
          Sebuah persegi bersisi <em>s</em> memuai menjadi bersisi <em>s</em>(1 + αΔ<em>T</em>), sehingga luasnya menjadi <em>s</em>²(1 + 2αΔ<em>T</em> + α²Δ<em>T</em>²). Nilai α sangat kecil (sekitar 10<sup>−5</sup>), sehingga suku α²Δ<em>T</em>² dapat diabaikan dan luasnya menjadi <em>A</em><sub>0</sub>(1 + 2αΔ<em>T</em>). Dengan cara yang sama, volume kubus menjadi <em>V</em><sub>0</sub>(1 + 3αΔ<em>T</em>).
        </div>
      </div>
    </section>

    <!-- ============ 5. PEMUAIAN ZAT CAIR DAN GAS ============ -->
    <section class="bagian" id="pemuaian-cair-gas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Pemuaian zat cair dan gas</h2>
      </div>

      <p>Zat cair dan gas tidak memiliki bentuk tetap, sehingga yang dihitung hanya <strong>pemuaian volume</strong>. Rumusnya sama dengan pemuaian volume zat padat, yaitu Δ<em>V</em> = <em>V</em><sub>0</sub>γΔ<em>T</em>, tetapi nilai γ untuk zat cair diukur langsung, bukan dari 3α.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Zat cair</th><th>Koefisien muai volume γ (/°C)</th></tr>
          </thead>
          <tbody>
            <tr><td>Raksa</td><td>1,8 × 10<sup>−4</sup></td></tr>
            <tr><td>Air (sekitar 20 °C)</td><td>2,1 × 10<sup>−4</sup></td></tr>
            <tr><td>Alkohol</td><td>1,1 × 10<sup>−3</sup></td></tr>
          </tbody>
        </table>
      </div>

      <p>Zat cair umumnya memuai jauh lebih besar daripada wadahnya. Karena itu, wadah yang diisi penuh lalu dipanaskan akan meluap. Volume yang tumpah adalah selisih pemuaian zat cair dan pemuaian wadah.</p>

      <div class="rumus">
        <div class="rumus-judul">Volume zat cair yang tumpah</div>
        <div class="rumus-isi">
          <math display="block" aria-label="delta V tumpah sama dengan V nol dikali kurung gamma cair dikurangi gamma wadah dikali delta T">
            <mi>Δ</mi><msub><mi>V</mi><mtext>tumpah</mtext></msub><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub>
            <mo stretchy="false">(</mo><msub><mi>γ</mi><mtext>cair</mtext></msub><mo>−</mo><msub><mi>γ</mi><mtext>wadah</mtext></msub><mo stretchy="false">)</mo><mi>Δ</mi><mi>T</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>γ<sub>cair</sub></dt><dd>koefisien muai volume zat cair <span class="satuan">(/°C)</span></dd>
            <dt>γ<sub>wadah</sub></dt><dd>koefisien muai volume wadah, 3α bahan wadah <span class="satuan">(/°C)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Anomali air</strong>
        Air tidak selalu memuai saat dipanaskan. Dari 0 °C sampai 4 °C, volume air justru <strong>menyusut</strong>, dan baru memuai setelah melewati 4 °C. Jadi, air memiliki volume terkecil dan massa jenis terbesar pada 4 °C. Akibatnya, danau di daerah dingin membeku dari permukaan, sementara air di dasarnya tetap cair pada sekitar 4 °C sehingga ikan dapat bertahan hidup.
      </div>

      <div class="sub">
        <h3><span class="no">5.1</span>Pemuaian gas</h3>
        <p>Gas memuai jauh lebih besar daripada zat padat dan zat cair. Pada <strong>tekanan tetap</strong>, semua jenis gas memiliki koefisien muai volume yang hampir sama, yaitu γ = 1/273 per °C. Artinya, volume gas pada tekanan tetap sebanding dengan suhu mutlaknya (hukum Charles): <em>V</em><sub>1</sub>/<em>T</em><sub>1</sub> = <em>V</em><sub>2</sub>/<em>T</em><sub>2</sub>, dengan <em>T</em> dalam kelvin. Perilaku gas ini dibahas lebih lanjut pada teori kinetik gas.</p>
      </div>
    </section>

    <!-- ============ 6. PENERAPAN ============ -->
    <section class="bagian" id="penerapan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Pemuaian dalam kehidupan sehari-hari</h2>
      </div>

      <p>Pemuaian bisa merugikan jika tidak diperhitungkan, tetapi juga bisa dimanfaatkan.</p>

      <div class="sub">
        <h3><span class="no">6.1</span>Keping bimetal</h3>
        <p><strong>Bimetal</strong> adalah dua keping logam dengan koefisien muai berbeda yang dikeling menjadi satu. Saat dipanaskan, logam dengan α lebih besar bertambah panjang lebih banyak, sehingga keping melengkung ke arah logam yang α-nya lebih kecil. Saat didinginkan, keping melengkung ke arah sebaliknya.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/bimetal.svg" alt="Keping bimetal dari kuningan di atas dan baja di bawah, dijepit pada ujung kirinya. Pada suhu normal keping lurus. Setelah dipanaskan, kuningan memuai lebih panjang daripada baja, sehingga keping melengkung ke bawah, ke arah baja yang koefisien muainya lebih kecil." />
          </div>
          <figcaption><strong>Gambar 5.</strong> Keping bimetal kuningan–baja melengkung ke arah baja ketika dipanaskan.</figcaption>
        </figure>

        <p>Lengkungan bimetal dapat memutus atau menyambung arus listrik, sehingga dipakai sebagai <strong>termostat</strong> pada setrika listrik, rice cooker, dan oven, juga pada alarm kebakaran dan lampu sein kendaraan.</p>
      </div>

      <div class="sub">
        <h3><span class="no">6.2</span>Contoh lain</h3>
        <ul class="poin">
          <li><strong>Celah pada sambungan rel dan jembatan</strong>: memberi ruang bagi rel dan jembatan untuk memuai pada siang hari tanpa melengkung.</li>
          <li><strong>Kabel listrik dan telepon dipasang kendur</strong>: pada malam hari kabel menyusut, sehingga kabel yang dipasang tegang bisa putus.</li>
          <li><strong>Bingkai kaca jendela dibuat sedikit lebih besar</strong>: kaca memiliki ruang untuk memuai sehingga tidak retak.</li>
          <li><strong>Memasang roda besi kereta api</strong>: cincin roda dipanaskan agar memuai, dipasang pada porosnya, lalu dibiarkan dingin sehingga menyusut dan mencengkeram kuat.</li>
          <li><strong>Gelas tebal mudah retak saat diisi air panas</strong>: bagian dalam memuai lebih dulu daripada bagian luar, sehingga timbul tegangan di dalam kaca.</li>
        </ul>
      </div>
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
            <tr>
              <td>Konversi suhu</td><td>C : R : F : K = 5 : 4 : 9 : 5</td>
              <td><math><mfrac><msub><mi>t</mi><mi>C</mi></msub><mn>5</mn></mfrac><mo>=</mo><mfrac><msub><mi>t</mi><mi>R</mi></msub><mn>4</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>t</mi><mi>F</mi></msub><mo>−</mo><mn>32</mn></mrow><mn>9</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>T</mi><mi>K</mi></msub><mo>−</mo><mn>273</mn></mrow><mn>5</mn></mfrac></math></td>
            </tr>
            <tr>
              <td>Kolom raksa</td><td>panjang kolom sebanding suhu</td>
              <td><math><mfrac><mi>θ</mi><mn>100</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>X</mi><mi>θ</mi></msub><mo>−</mo><msub><mi>X</mi><mn>0</mn></msub></mrow><mrow><msub><mi>X</mi><mn>100</mn></msub><mo>−</mo><msub><mi>X</mi><mn>0</mn></msub></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Muai panjang</td><td>α</td>
              <td><math><msub><mi>l</mi><mi>t</mi></msub><mo>=</mo><msub><mi>l</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>α</mi><mi>Δ</mi><mi>T</mi><mo stretchy="false">)</mo></math></td>
            </tr>
            <tr>
              <td>Muai luas</td><td>β = 2α</td>
              <td><math><msub><mi>A</mi><mi>t</mi></msub><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>β</mi><mi>Δ</mi><mi>T</mi><mo stretchy="false">)</mo></math></td>
            </tr>
            <tr>
              <td>Muai volume</td><td>γ = 3α</td>
              <td><math><msub><mi>V</mi><mi>t</mi></msub><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>γ</mi><mi>Δ</mi><mi>T</mi><mo stretchy="false">)</mo></math></td>
            </tr>
            <tr>
              <td>Volume tumpah</td><td>zat cair dalam wadah</td>
              <td><math><mi>Δ</mi><mi>V</mi><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mo stretchy="false">(</mo><msub><mi>γ</mi><mtext>cair</mtext></msub><mo>−</mo><msub><mi>γ</mi><mtext>wadah</mtext></msub><mo stretchy="false">)</mo><mi>Δ</mi><mi>T</mi></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

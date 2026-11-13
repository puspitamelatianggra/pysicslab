/* ====== Bab 4-2 · Radiasi Benda Hitam ====== */

import { Chapter } from '../../materials';

export const radiasiBendaHitam: Chapter = {
  chapterId: "4-2",
  title: "Radiasi Benda Hitam",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Fisika Modern</span>
      <h1>Radiasi Benda Hitam</h1>
      <p>Rangkuman radiasi termal, benda hitam, hukum Stefan-Boltzmann, hukum pergeseran Wien, kegagalan teori klasik, teori kuantum Planck, dan energi foton.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#radiasi-termal">Radiasi termal dan benda hitam</a></li>
        <li><a href="#stefan">Hukum Stefan-Boltzmann</a></li>
        <li><a href="#wien">Hukum pergeseran Wien</a></li>
        <li><a href="#klasik">Kegagalan teori klasik</a></li>
        <li><a href="#planck">Teori kuantum Planck</a></li>
        <li><a href="#penerapan">Penerapan</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. RADIASI TERMAL ============ -->
    <section class="bagian" id="radiasi-termal">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Radiasi termal dan benda hitam</h2>
      </div>

      <p>Setiap benda memancarkan gelombang elektromagnetik karena suhunya. Pancaran ini disebut <strong>radiasi termal</strong>. Pada suhu kamar, radiasinya berupa inframerah yang tidak terlihat. Jika sepotong besi dipanaskan terus, warnanya berubah dari merah membara, lalu jingga, kuning, sampai putih kebiruan. Artinya, <strong>warna radiasi bergantung pada suhu</strong>.</p>

      <div class="kartu">
        <span class="istilah">Benda hitam</span>
        <p>Benda ideal yang <strong>menyerap seluruh</strong> radiasi yang mengenainya, tanpa memantulkan sedikit pun. Benda hitam juga merupakan <strong>pemancar paling sempurna</strong>, dengan emisivitas <em>e</em> = 1. Model terbaiknya adalah rongga tertutup dengan satu lubang kecil: radiasi yang masuk ke lubang terpantul-pantul di dalam rongga sampai habis terserap.</p>
      </div>

      <p>Benda hitam penting karena radiasinya hanya bergantung pada suhu, tidak pada bahannya. Bintang, termasuk Matahari, berperilaku hampir seperti benda hitam.</p>
    </section>

    <!-- ============ 2. STEFAN-BOLTZMANN ============ -->
    <section class="bagian" id="stefan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Hukum Stefan-Boltzmann</h2>
      </div>

      <p>Josef Stefan menemukan secara eksperimen, dan Ludwig Boltzmann menurunkan secara teori, bahwa energi total yang dipancarkan benda sebanding dengan pangkat empat suhu mutlaknya.</p>

      <div class="rumus">
        <div class="rumus-judul">Hukum Stefan-Boltzmann</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P sama dengan e sigma A T pangkat 4">
            <mi>P</mi><mo>=</mo><mi>e</mi><mi>σ</mi><mi>A</mi><msup><mi>T</mi><mn>4</mn></msup>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="intensitas I sama dengan P per A sama dengan e sigma T pangkat 4">
            <mi>I</mi><mo>=</mo><mfrac><mi>P</mi><mi>A</mi></mfrac><mo>=</mo><mi>e</mi><mi>σ</mi><msup><mi>T</mi><mn>4</mn></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>P</dt><dd>daya radiasi <span class="satuan">(W)</span></dd>
            <dt>I</dt><dd>intensitas radiasi, daya per satuan luas <span class="satuan">(W/m²)</span></dd>
            <dt>e</dt><dd>emisivitas, 0 sampai 1</dd>
            <dt>σ</dt><dd>konstanta Stefan-Boltzmann, 5,67 × 10<sup>−8</sup> <span class="satuan">(W/m² K⁴)</span></dd>
            <dt>T</dt><dd>suhu mutlak <span class="satuan">(K)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Dua benda hitam identik bersuhu 27 °C (300 K) dan 327 °C (600 K). Suhu mutlak benda kedua dua kali benda pertama, sehingga daya radiasinya 2<sup>4</sup> = 16 kali lebih besar. Perhatikan bahwa yang dua kali lipat adalah suhu dalam kelvin, bukan dalam Celsius.
      </div>
    </section>

    <!-- ============ 3. WIEN ============ -->
    <section class="bagian" id="wien">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Hukum pergeseran Wien</h2>
      </div>

      <p>Radiasi benda hitam tersebar pada banyak panjang gelombang, tetapi intensitasnya paling besar pada satu panjang gelombang tertentu, λ<sub>maks</sub>. Wilhelm Wien menemukan bahwa makin tinggi suhu, makin pendek λ<sub>maks</sub>. Puncak grafiknya <strong>bergeser</strong> ke arah panjang gelombang pendek.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/grafik-radiasi-benda-hitam.svg" alt="Grafik intensitas radiasi benda hitam terhadap panjang gelombang untuk suhu 6.000 K, 5.000 K, dan 4.000 K. Setiap kurva naik ke satu puncak lalu turun. Makin tinggi suhu, puncaknya makin tinggi dan bergeser ke panjang gelombang yang lebih pendek, sesuai hukum pergeseran Wien. Kurva putus-putus menurut teori klasik Rayleigh-Jeans terus naik tanpa batas di panjang gelombang pendek, yang disebut bencana ultraungu." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Intensitas radiasi benda hitam pada tiga suhu. Garis titik-titik menghubungkan puncak-puncaknya, dan pita hijau adalah daerah cahaya tampak.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Hukum pergeseran Wien</div>
        <div class="rumus-isi">
          <math display="block" aria-label="lambda maks dikali T sama dengan b">
            <msub><mi>λ</mi><mtext>maks</mtext></msub><mi>T</mi><mo>=</mo><mi>b</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>λ<sub>maks</sub></dt><dd>panjang gelombang dengan intensitas terbesar <span class="satuan">(m)</span></dd>
            <dt>T</dt><dd>suhu mutlak <span class="satuan">(K)</span></dd>
            <dt>b</dt><dd>konstanta Wien, 2,898 × 10<sup>−3</sup> <span class="satuan">(m K)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Permukaan Matahari bersuhu sekitar 5.800 K, sehingga λ<sub>maks</sub> = 2,898 × 10<sup>−3</sup>/5.800 ≈ 5 × 10<sup>−7</sup> m = 500 nm, yaitu cahaya hijau kebiruan. Matahari tetap tampak putih kekuningan karena memancarkan semua warna sekaligus. Tubuh manusia (sekitar 310 K) memiliki λ<sub>maks</sub> ≈ 9,3 μm, yaitu inframerah.
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Warna bintang</th><th>Suhu permukaan (perkiraan)</th></tr>
          </thead>
          <tbody>
            <tr><td>Merah</td><td>sekitar 3.000 K</td></tr>
            <tr><td>Kuning (seperti Matahari)</td><td>sekitar 6.000 K</td></tr>
            <tr><td>Putih</td><td>sekitar 10.000 K</td></tr>
            <tr><td>Biru</td><td>di atas 20.000 K</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ============ 4. KEGAGALAN KLASIK ============ -->
    <section class="bagian" id="klasik">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Kegagalan teori klasik</h2>
      </div>

      <p>Pada akhir abad ke-19, para fisikawan mencoba menurunkan bentuk grafik pada Gambar 1 dengan teori gelombang elektromagnetik klasik, yang menganggap energi dapat dipancarkan dalam jumlah berapa pun secara kontinu.</p>

      <div class="cabang">
        <div class="kartu">
          <h3>Rumus Rayleigh-Jeans</h3>
          <p>Cocok untuk panjang gelombang <strong>panjang</strong>. Namun di panjang gelombang pendek, rumus ini meramalkan intensitas yang naik tanpa batas. Kegagalan ini dijuluki <strong>bencana ultraungu</strong>.</p>
        </div>
        <div class="kartu">
          <h3>Rumus Wien</h3>
          <p>Cocok untuk panjang gelombang <strong>pendek</strong>, tetapi menyimpang dari hasil pengukuran di panjang gelombang panjang.</p>
        </div>
      </div>

      <p>Jika ramalan Rayleigh-Jeans benar, setiap benda panas akan memancarkan energi tak hingga dalam bentuk sinar ultraungu dan sinar-X. Kenyataannya tidak demikian, sehingga ada yang keliru dalam fisika klasik.</p>
    </section>

    <!-- ============ 5. PLANCK ============ -->
    <section class="bagian" id="planck">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Teori kuantum Planck</h2>
      </div>

      <p>Pada tahun 1900, Max Planck menemukan rumus yang cocok dengan seluruh grafik hasil pengukuran. Untuk itu ia harus membuat anggapan yang sangat berani: energi radiasi tidak dipancarkan secara kontinu, melainkan dalam <strong>paket-paket energi</strong> diskret yang disebut <strong>kuanta</strong>. Gagasan ini menjadi awal fisika kuantum.</p>

      <div class="rumus">
        <div class="rumus-judul">Energi kuantum</div>
        <div class="rumus-isi">
          <math display="block" aria-label="E sama dengan n h f">
            <mi>E</mi><mo>=</mo><mi>n</mi><mi>h</mi><mi>f</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="energi satu foton: E sama dengan h f sama dengan h c per lambda">
            <mi>E</mi><mo>=</mo><mi>h</mi><mi>f</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>n</dt><dd>bilangan bulat 1, 2, 3, …</dd>
            <dt>h</dt><dd>tetapan Planck, 6,63 × 10<sup>−34</sup> <span class="satuan">(J s)</span></dd>
            <dt>f</dt><dd>frekuensi radiasi <span class="satuan">(Hz)</span></dd>
            <dt>λ</dt><dd>panjang gelombang <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <p>Albert Einstein kemudian mengembangkan gagasan ini: cahaya sendiri terdiri atas paket-paket energi yang disebut <strong>foton</strong>. Energi satu foton berbanding lurus dengan frekuensinya, sehingga foton ultraungu lebih berenergi daripada foton cahaya merah.</p>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Energi satu foton cahaya hijau (λ = 500 nm): <em>E</em> = (6,63 × 10<sup>−34</sup> × 3 × 10<sup>8</sup>)/(5 × 10<sup>−7</sup>) ≈ 4,0 × 10<sup>−19</sup> J ≈ 2,5 eV. Lampu yang memancarkan cahaya 600 nm dengan daya 10 W melepaskan <em>n</em> = <em>P</em>/<em>E</em> = 10/(3,3 × 10<sup>−19</sup>) ≈ 3 × 10<sup>19</sup> foton setiap sekon.
      </div>
    </section>

    <!-- ============ 6. PENERAPAN ============ -->
    <section class="bagian" id="penerapan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Penerapan</h2>
      </div>

      <ul class="poin">
        <li><strong>Termometer inframerah</strong> yang ditempelkan dekat dahi mengukur radiasi inframerah tubuh, lalu mengubahnya menjadi angka suhu.</li>
        <li><strong>Kamera termal</strong> menampilkan perbedaan suhu sebagai perbedaan warna. Kamera ini dipakai untuk mencari korban di reruntuhan, mendeteksi kebocoran panas, dan memeriksa instalasi listrik yang terlalu panas.</li>
        <li><strong>Pirometer</strong> mengukur suhu tungku peleburan logam dari warnanya tanpa menyentuhnya.</li>
        <li><strong>Astronomi</strong>: suhu permukaan bintang ditentukan dari λ<sub>maks</sub> cahayanya, dan ukurannya dapat dihitung dari daya totalnya dengan hukum Stefan-Boltzmann.</li>
        <li><strong>Lampu pijar</strong> memancarkan sebagian besar energinya sebagai inframerah karena filamennya hanya sekitar 2.800 K. Itulah sebabnya lampu pijar boros dan kini banyak diganti lampu LED.</li>
      </ul>
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
              <td>Stefan-Boltzmann</td><td>W</td>
              <td><math><mi>P</mi><mo>=</mo><mi>e</mi><mi>σ</mi><mi>A</mi><msup><mi>T</mi><mn>4</mn></msup></math></td>
            </tr>
            <tr>
              <td>Pergeseran Wien</td><td>m K</td>
              <td><math><msub><mi>λ</mi><mtext>maks</mtext></msub><mi>T</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>898</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup></math></td>
            </tr>
            <tr>
              <td>Energi kuantum</td><td>J</td>
              <td><math><mi>E</mi><mo>=</mo><mi>n</mi><mi>h</mi><mi>f</mi></math></td>
            </tr>
            <tr>
              <td>Energi foton</td><td>J</td>
              <td><math><mi>E</mi><mo>=</mo><mi>h</mi><mi>f</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

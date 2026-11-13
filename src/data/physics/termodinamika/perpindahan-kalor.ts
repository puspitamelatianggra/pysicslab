/* ====== Bab 3-3 · Perpindahan Kalor ====== */

import { Chapter } from '../../materials';

export const perpindahanKalor: Chapter = {
  chapterId: "3-3",
  title: "Perpindahan Kalor",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Suhu dan Kalor</span>
      <h1>Perpindahan Kalor</h1>
      <p>Rangkuman tiga cara perpindahan kalor, yaitu konduksi, konveksi, dan radiasi, beserta laju perpindahannya dan penerapannya, termasuk efek rumah kaca.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#tiga-cara">Tiga cara perpindahan kalor</a></li>
        <li><a href="#konduksi">Konduksi</a></li>
        <li><a href="#konveksi">Konveksi</a></li>
        <li><a href="#radiasi">Radiasi</a></li>
        <li><a href="#penerapan">Penerapan dan efek rumah kaca</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. TIGA CARA ============ -->
    <section class="bagian" id="tiga-cara">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Tiga cara perpindahan kalor</h2>
      </div>

      <p>Kalor selalu berpindah dari benda bersuhu tinggi ke benda bersuhu rendah. Cara perpindahannya ada tiga, dan ketiganya bisa terjadi bersamaan, seperti saat memasak air di atas kompor.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/tiga-cara-perpindahan.svg" alt="Panci berisi air dipanaskan di atas kompor. Konduksi: kalor merambat melalui dasar dan pegangan panci yang terbuat dari logam. Konveksi: air yang panas di dasar naik di bagian tengah, lalu air yang lebih dingin turun di bagian tepi, membentuk arus melingkar. Radiasi: api memancarkan panas ke samping tanpa perantara." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Konduksi, konveksi, dan radiasi terjadi bersamaan saat memasak air.</figcaption>
      </figure>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Cara</th><th>Perlu medium?</th><th>Partikel ikut berpindah?</th><th>Terjadi pada</th></tr>
          </thead>
          <tbody>
            <tr><td>Konduksi</td><td>ya</td><td>tidak</td><td>terutama zat padat</td></tr>
            <tr><td>Konveksi</td><td>ya</td><td>ya</td><td>zat cair dan gas</td></tr>
            <tr><td>Radiasi</td><td>tidak</td><td>–</td><td>dapat melalui ruang hampa</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ============ 2. KONDUKSI ============ -->
    <section class="bagian" id="konduksi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Konduksi</h2>
      </div>

      <p><strong>Konduksi</strong> (hantaran) adalah perpindahan kalor melalui suatu zat <strong>tanpa disertai perpindahan partikel</strong> zat itu. Partikel di ujung yang panas bergetar lebih kuat dan menumbuk partikel di sebelahnya, sehingga energinya diteruskan sedikit demi sedikit. Pada logam, elektron bebas ikut membawa energi dengan cepat, sehingga logam menghantarkan kalor jauh lebih baik.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/konduksi-batang.svg" alt="Batang logam sepanjang L dengan luas penampang A menghubungkan sumber panas bersuhu T1 di kiri dan benda dingin bersuhu T2 di kanan. Kalor mengalir secara konduksi melalui batang dari ujung panas ke ujung dingin dengan laju H." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Kalor mengalir secara konduksi dari ujung bersuhu <em>T</em><sub>1</sub> ke ujung bersuhu <em>T</em><sub>2</sub>.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Laju konduksi kalor</div>
        <div class="rumus-isi">
          <math display="block" aria-label="H sama dengan Q per t sama dengan k A delta T per L">
            <mi>H</mi><mo>=</mo><mfrac><mi>Q</mi><mi>t</mi></mfrac><mo>=</mo><mfrac><mrow><mi>k</mi><mi>A</mi><mi>Δ</mi><mi>T</mi></mrow><mi>L</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>H</dt><dd>laju perpindahan kalor <span class="satuan">(J/s atau W)</span></dd>
            <dt>k</dt><dd>konduktivitas termal bahan <span class="satuan">(W/m K)</span></dd>
            <dt>A</dt><dd>luas penampang <span class="satuan">(m²)</span></dd>
            <dt>ΔT</dt><dd>beda suhu kedua ujung, T<sub>1</sub> − T<sub>2</sub> <span class="satuan">(K atau °C)</span></dd>
            <dt>L</dt><dd>panjang atau tebal bahan <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Bahan</th><th>Konduktivitas termal k (W/m K)</th></tr>
          </thead>
          <tbody>
            <tr><td>Perak</td><td>429</td></tr>
            <tr><td>Tembaga</td><td>385</td></tr>
            <tr><td>Aluminium</td><td>205</td></tr>
            <tr><td>Besi</td><td>80</td></tr>
            <tr><td>Kaca</td><td>0,8</td></tr>
            <tr><td>Air</td><td>0,6</td></tr>
            <tr><td>Kayu</td><td>0,1–0,2</td></tr>
            <tr><td>Udara</td><td>0,026</td></tr>
          </tbody>
        </table>
      </div>

      <p>Bahan dengan <em>k</em> besar disebut <strong>konduktor</strong> kalor, sedangkan bahan dengan <em>k</em> kecil disebut <strong>isolator</strong>. Udara adalah isolator yang sangat baik. Karena itu, bahan yang banyak mengandung rongga udara, seperti styrofoam, wol, dan bulu, terasa hangat.</p>

      <div class="sub">
        <h3><span class="no">2.1</span>Dua batang yang disambung</h3>
        <p>Jika dua batang berbeda bahan disambung, laju kalor yang melewati keduanya <strong>sama</strong>, karena kalor yang masuk ke sambungan harus keluar lagi. Persamaan <em>H</em><sub>1</sub> = <em>H</em><sub>2</sub> dipakai untuk mencari suhu sambungan.</p>
        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          Batang P dan Q memiliki ukuran sama, tetapi <em>k</em><sub>P</sub> = 2<em>k</em><sub>Q</sub>. Ujung bebas P bersuhu 100 °C dan ujung bebas Q bersuhu 10 °C. Dari <em>H</em><sub>P</sub> = <em>H</em><sub>Q</sub>: 2(100 − <em>T</em>) = <em>T</em> − 10, sehingga 3<em>T</em> = 210 dan suhu sambungan <em>T</em> = 70 °C.
        </div>
      </div>
    </section>

    <!-- ============ 3. KONVEKSI ============ -->
    <section class="bagian" id="konveksi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Konveksi</h2>
      </div>

      <p><strong>Konveksi</strong> (aliran) adalah perpindahan kalor yang <strong>disertai perpindahan partikel</strong> zat. Konveksi terjadi pada zat cair dan gas. Fluida yang dipanaskan memuai sehingga massa jenisnya mengecil dan naik, lalu tempatnya diisi fluida yang lebih dingin dan lebih rapat. Terbentuklah arus melingkar yang membawa kalor.</p>

      <div class="cabang">
        <div class="kartu">
          <h3>Konveksi alami</h3>
          <p>Aliran terjadi sendiri karena perbedaan massa jenis. Contoh: air mendidih di panci, asap naik di cerobong, angin laut dan angin darat.</p>
        </div>
        <div class="kartu">
          <h3>Konveksi paksa</h3>
          <p>Aliran dibantu kipas atau pompa. Contoh: pengering rambut, radiator mobil, dan pendingin ruangan (AC).</p>
        </div>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Laju konveksi kalor</div>
        <div class="rumus-isi">
          <math display="block" aria-label="H sama dengan h A delta T">
            <mi>H</mi><mo>=</mo><mi>h</mi><mi>A</mi><mi>Δ</mi><mi>T</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>h</dt><dd>koefisien konveksi <span class="satuan">(W/m² K)</span></dd>
            <dt>A</dt><dd>luas permukaan yang bersentuhan dengan fluida <span class="satuan">(m²)</span></dd>
            <dt>ΔT</dt><dd>beda suhu permukaan dan fluida <span class="satuan">(K)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Angin laut dan angin darat</strong>
        Pada siang hari, daratan lebih cepat panas daripada laut karena kalor jenis air besar. Udara di atas daratan naik, lalu udara laut yang lebih dingin bergerak ke darat: <strong>angin laut</strong>. Pada malam hari, daratan lebih cepat dingin, sehingga arah aliran berbalik: <strong>angin darat</strong>. Nelayan tradisional berangkat melaut pada malam hari dan pulang pada siang hari dengan memanfaatkan kedua angin ini.
      </div>
    </section>

    <!-- ============ 4. RADIASI ============ -->
    <section class="bagian" id="radiasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Radiasi</h2>
      </div>

      <p><strong>Radiasi</strong> (pancaran) adalah perpindahan kalor dalam bentuk <strong>gelombang elektromagnetik</strong>, terutama sinar inframerah. Radiasi tidak memerlukan medium, sehingga panas Matahari dapat sampai ke Bumi melalui ruang hampa. Semua benda bersuhu di atas 0 K memancarkan radiasi, dan makin panas benda, makin besar radiasinya.</p>

      <div class="rumus">
        <div class="rumus-judul">Hukum Stefan-Boltzmann</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P sama dengan e sigma A T pangkat 4">
            <mi>P</mi><mo>=</mo><mi>e</mi><mi>σ</mi><mi>A</mi><msup><mi>T</mi><mn>4</mn></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>P</dt><dd>daya radiasi, yaitu energi yang dipancarkan setiap sekon <span class="satuan">(W)</span></dd>
            <dt>e</dt><dd>emisivitas permukaan, 0 sampai 1 (benda hitam sempurna e = 1)</dd>
            <dt>σ</dt><dd>konstanta Stefan-Boltzmann, 5,67 × 10<sup>−8</sup> <span class="satuan">(W/m² K⁴)</span></dd>
            <dt>A</dt><dd>luas permukaan benda <span class="satuan">(m²)</span></dd>
            <dt>T</dt><dd>suhu mutlak permukaan <span class="satuan">(K)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Suhu harus dalam kelvin</strong>
        Daya radiasi sebanding dengan <em>T</em> pangkat empat, sehingga suhu wajib diubah ke kelvin. Jika suhu mutlak benda dijadikan dua kali semula, daya radiasinya menjadi 2<sup>4</sup> = 16 kali semula.
      </div>

      <ul class="poin">
        <li>Permukaan <strong>hitam dan kusam</strong> adalah penyerap sekaligus pemancar radiasi yang baik (<em>e</em> mendekati 1).</li>
        <li>Permukaan <strong>putih dan mengilap</strong> adalah penyerap sekaligus pemancar yang buruk, karena sebagian besar radiasi dipantulkan.</li>
        <li>Benda juga menyerap radiasi dari lingkungannya. Daya radiasi bersihnya <em>P</em> = <em>e</em>σ<em>A</em>(<em>T</em><sup>4</sup> − <em>T</em><sub>0</sub><sup>4</sup>), dengan <em>T</em><sub>0</sub> sebagai suhu lingkungan.</li>
      </ul>

      <p>Pembahasan radiasi lebih lanjut, termasuk hukum pergeseran Wien dan teori kuantum Planck, ada di bab Radiasi Benda Hitam pada materi Fisika Modern.</p>
    </section>

    <!-- ============ 5. PENERAPAN ============ -->
    <section class="bagian" id="penerapan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Penerapan dan efek rumah kaca</h2>
      </div>

      <div class="sub">
        <h3><span class="no">5.1</span>Termos</h3>
        <p>Termos dirancang untuk menghambat ketiga cara perpindahan kalor sekaligus:</p>
        <ul class="poin">
          <li><strong>Dinding kaca ganda dengan ruang hampa</strong> di antaranya mencegah konduksi dan konveksi, karena tidak ada partikel yang dapat menghantarkan atau mengalirkan kalor.</li>
          <li><strong>Dinding berlapis perak yang mengilap</strong> memantulkan radiasi kembali ke dalam.</li>
          <li><strong>Tutup dari plastik atau gabus</strong> mencegah konveksi udara keluar dan konduksi melalui mulut termos.</li>
        </ul>
      </div>

      <div class="sub">
        <h3><span class="no">5.2</span>Contoh lain</h3>
        <ul class="poin">
          <li>Panci terbuat dari aluminium agar cepat panas, tetapi pegangannya dari plastik atau kayu agar tidak menghantarkan panas ke tangan.</li>
          <li>Pakaian berwarna terang terasa lebih sejuk di siang hari karena memantulkan lebih banyak radiasi Matahari.</li>
          <li>Ventilasi dipasang di bagian atas dinding agar udara panas yang naik dapat keluar.</li>
          <li>Sirip pendingin pada mesin dan prosesor komputer memperluas permukaan, sehingga laju konveksi dan radiasinya bertambah.</li>
        </ul>
      </div>

      <div class="sub">
        <h3><span class="no">5.3</span>Efek rumah kaca dan pemanasan global</h3>
        <ol class="langkah">
          <li>Radiasi Matahari, yang sebagian besar berupa cahaya tampak, menembus atmosfer dan memanaskan permukaan Bumi.</li>
          <li>Permukaan Bumi yang hangat memancarkan kembali energinya sebagai radiasi <strong>inframerah</strong>.</li>
          <li>Gas rumah kaca di atmosfer, seperti karbon dioksida (CO₂), metana (CH₄), dan uap air, menyerap inframerah itu lalu memancarkannya lagi ke segala arah, sebagian kembali ke Bumi.</li>
          <li>Akibatnya, sebagian energi tertahan di dekat permukaan dan suhu Bumi tetap hangat, sekitar 15 °C rata-rata. Tanpa efek ini, suhu rata-rata Bumi sekitar −18 °C.</li>
        </ol>
        <div class="catatan">
          <strong class="judul">Pemanasan global</strong>
          Efek rumah kaca alami diperlukan bagi kehidupan. Masalahnya, pembakaran bahan bakar fosil dan penggundulan hutan terus menambah kadar CO₂ di atmosfer, sehingga makin banyak energi yang tertahan dan suhu rata-rata Bumi naik. Dampaknya antara lain mencairnya es di kutub, naiknya permukaan laut, dan cuaca ekstrem yang lebih sering.
        </div>
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Cara</th><th>Satuan</th><th>Rumus laju kalor</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Konduksi</td><td>W</td>
              <td><math><mi>H</mi><mo>=</mo><mfrac><mrow><mi>k</mi><mi>A</mi><mi>Δ</mi><mi>T</mi></mrow><mi>L</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Konveksi</td><td>W</td>
              <td><math><mi>H</mi><mo>=</mo><mi>h</mi><mi>A</mi><mi>Δ</mi><mi>T</mi></math></td>
            </tr>
            <tr>
              <td>Radiasi</td><td>W</td>
              <td><math><mi>P</mi><mo>=</mo><mi>e</mi><mi>σ</mi><mi>A</mi><msup><mi>T</mi><mn>4</mn></msup></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

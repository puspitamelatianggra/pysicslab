/* ====== Bab 2-3 · Medan Magnet ====== */

import { Chapter } from '../../materials';

export const medanMagnet: Chapter = {
  chapterId: "2-3",
  title: "Medan Magnet",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Listrik dan Magnet</span>
      <h1>Medan Magnet</h1>
      <p>Rangkuman medan magnet, induksi magnetik di sekitar kawat lurus, kawat melingkar, solenoida, dan toroida, gaya Lorentz pada kawat berarus dan muatan bergerak, serta penerapannya.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#magnet">Magnet dan medan magnet</a></li>
        <li><a href="#oersted">Percobaan Oersted</a></li>
        <li><a href="#kawat-lurus">Induksi magnetik kawat lurus</a></li>
        <li><a href="#kumparan">Kawat melingkar, solenoida, dan toroida</a></li>
        <li><a href="#lorentz-kawat">Gaya Lorentz pada kawat berarus</a></li>
        <li><a href="#lorentz-muatan">Gaya Lorentz pada muatan bergerak</a></li>
        <li><a href="#penerapan">Penerapan gaya magnetik</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. MAGNET ============ -->
    <section class="bagian" id="magnet">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Magnet dan medan magnet</h2>
      </div>

      <p>Setiap magnet memiliki dua kutub, yaitu kutub <strong>utara</strong> (U) dan kutub <strong>selatan</strong> (S). Kutub sejenis tolak-menolak, sedangkan kutub berbeda jenis tarik-menarik. Jika sebuah magnet dipotong, setiap potongannya tetap memiliki dua kutub.</p>

      <ul class="poin">
        <li><strong>Medan magnet</strong> adalah daerah di sekitar magnet yang masih dipengaruhi gaya magnet. Medan ini digambarkan dengan garis gaya magnet yang <strong>keluar dari kutub utara</strong> dan <strong>masuk ke kutub selatan</strong>.</li>
        <li>Kuat medan magnet disebut <strong>induksi magnetik</strong> <em>B</em>, dengan satuan <strong>tesla</strong> (T) atau Wb/m².</li>
        <li>Bumi berperilaku seperti magnet raksasa. Kutub selatan magnet bumi berada di dekat kutub utara geografis, sehingga kutub utara jarum kompas menunjuk ke arah utara.</li>
      </ul>
    </section>

    <!-- ============ 2. OERSTED ============ -->
    <section class="bagian" id="oersted">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Percobaan Oersted</h2>
      </div>

      <p>Pada tahun 1820, Hans Christian Oersted melihat jarum kompas menyimpang ketika diletakkan di dekat kawat yang dialiri arus. Saat arus diputus, jarum kembali ke posisi semula, dan saat arah arus dibalik, jarum menyimpang ke arah sebaliknya. Kesimpulannya: <strong>arus listrik menimbulkan medan magnet</strong> di sekitarnya. Penemuan ini menjadi awal hubungan antara listrik dan magnet.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/medan-kawat-lurus.svg" alt="Kiri, kawat lurus vertikal dengan arus I ke atas dikelilingi garis medan magnet berbentuk lingkaran. Titik P berjarak a dari kawat. Kanan, kawat yang sama dilihat dari atas, dengan arus keluar bidang gambar. Garis medan magnet berupa lingkaran-lingkaran sepusat yang arahnya berlawanan arah jarum jam, sesuai kaidah tangan kanan." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Garis medan magnet di sekitar kawat lurus berarus berbentuk lingkaran sepusat.</figcaption>
      </figure>

      <div class="kartu">
        <span class="istilah">Kaidah tangan kanan menggenggam</span>
        <p>Genggam kawat dengan tangan kanan sehingga <strong>ibu jari</strong> menunjuk arah <strong>arus</strong>. Arah lipatan <strong>keempat jari</strong> menunjukkan arah <strong>medan magnet</strong> yang melingkari kawat.</p>
      </div>
    </section>

    <!-- ============ 3. KAWAT LURUS ============ -->
    <section class="bagian" id="kawat-lurus">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Induksi magnetik kawat lurus</h2>
      </div>

      <p>Menurut hukum Biot-Savart, induksi magnetik di sekitar kawat lurus panjang berarus sebanding dengan kuat arus dan berbanding terbalik dengan jarak titik ke kawat.</p>

      <div class="rumus">
        <div class="rumus-judul">Kawat lurus panjang</div>
        <div class="rumus-isi">
          <math display="block" aria-label="B sama dengan mu nol I per 2 pi a">
            <mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>a</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>B</dt><dd>induksi magnetik <span class="satuan">(T)</span></dd>
            <dt>μ<sub>0</sub></dt><dd>permeabilitas ruang hampa, 4π × 10<sup>−7</sup> <span class="satuan">(Wb/A m)</span></dd>
            <dt>I</dt><dd>kuat arus <span class="satuan">(A)</span></dd>
            <dt>a</dt><dd>jarak titik ke kawat <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Kawat lurus panjang dialiri arus 10 A. Induksi magnetik pada jarak 2 cm dari kawat: <em>B</em> = (4π × 10<sup>−7</sup> × 10)/(2π × 0,02) = 1 × 10<sup>−4</sup> T. Bentuk μ<sub>0</sub>/(2π) = 2 × 10<sup>−7</sup> sering dipakai agar hitungan lebih cepat.
      </div>

      <div class="catatan">
        <strong class="judul">Lebih dari satu kawat</strong>
        Induksi magnetik adalah besaran vektor. Jika sebuah titik dipengaruhi dua kawat, tentukan dulu arah <em>B</em> dari masing-masing kawat dengan kaidah tangan kanan. Jika searah, jumlahkan. Jika berlawanan, kurangkan.
      </div>
    </section>

    <!-- ============ 4. KUMPARAN ============ -->
    <section class="bagian" id="kumparan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Kawat melingkar, solenoida, dan toroida</h2>
      </div>

      <p>Kawat yang dibentuk menjadi lingkaran atau dililit menjadi kumparan menghasilkan medan magnet yang lebih kuat, karena medan dari setiap bagian kawat saling menguatkan.</p>

      <div class="kartu">
        <span class="istilah">Solenoida</span>
        <p>Kumparan kawat panjang berbentuk silinder. Medan magnet di dalamnya hampir homogen, dan kedua ujungnya berperilaku seperti kutub utara dan kutub selatan magnet batang. Arah medannya juga ditentukan dengan tangan kanan: keempat jari mengikuti arah arus pada lilitan, dan ibu jari menunjuk ke kutub utara.</p>
      </div>

      <div class="kartu">
        <span class="istilah">Toroida</span>
        <p>Solenoida yang dilengkungkan sehingga kedua ujungnya bertemu dan membentuk cincin. Medan magnetnya terkurung di dalam cincin.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Induksi magnetik pada kumparan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="pusat kawat melingkar: B sama dengan mu nol N I per 2 a">
            <msub><mi>B</mi><mtext>lingkaran</mtext></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="tengah solenoida: B sama dengan mu nol N I per L">
            <msub><mi>B</mi><mtext>solenoida</mtext></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mi>L</mi></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="toroida: B sama dengan mu nol N I per 2 pi r">
            <msub><mi>B</mi><mtext>toroida</mtext></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>N</dt><dd>jumlah lilitan</dd>
            <dt>a</dt><dd>jari-jari kawat melingkar <span class="satuan">(m)</span></dd>
            <dt>L</dt><dd>panjang solenoida <span class="satuan">(m)</span></dd>
            <dt>r</dt><dd>jari-jari efektif toroida <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Ujung solenoida</strong>
        Induksi magnetik di ujung solenoida hanya setengah dari nilai di tengahnya: <em>B</em><sub>ujung</sub> = μ<sub>0</sub><em>NI</em>/(2<em>L</em>).
      </div>

      <p>Solenoida yang diberi inti besi lunak disebut <strong>elektromagnet</strong>. Kemagnetannya bisa dinyalakan dan dimatikan dengan mengatur arus, sehingga dipakai pada bel listrik, relai, derek pengangkat besi tua, dan mesin MRI di rumah sakit.</p>
    </section>

    <!-- ============ 5. LORENTZ KAWAT ============ -->
    <section class="bagian" id="lorentz-kawat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Gaya Lorentz pada kawat berarus</h2>
      </div>

      <p>Kawat berarus yang berada di dalam medan magnet mengalami gaya yang disebut <strong>gaya Lorentz</strong> (gaya magnetik). Gaya ini paling besar jika kawat tegak lurus medan, dan nol jika kawat sejajar medan.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/gaya-lorentz.svg" alt="Medan magnet B masuk bidang gambar, ditandai silang. Kiri, kawat berarus I ke kanan mengalami gaya Lorentz F ke atas. Kanan, muatan positif yang bergerak ke kanan dengan kecepatan v mengalami gaya F ke atas yang selalu tegak lurus kecepatan, sehingga lintasannya berbentuk lingkaran berjari-jari r." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Gaya Lorentz pada kawat berarus (kiri) dan pada muatan positif yang bergerak (kanan).</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Gaya Lorentz pada kawat</div>
        <div class="rumus-isi">
          <math display="block" aria-label="F sama dengan B I L sin theta">
            <mi>F</mi><mo>=</mo><mi>B</mi><mi>I</mi><mi>L</mi><mi>sin</mi><mi>θ</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>F</dt><dd>gaya Lorentz <span class="satuan">(N)</span></dd>
            <dt>B</dt><dd>induksi magnetik <span class="satuan">(T)</span></dd>
            <dt>I</dt><dd>kuat arus <span class="satuan">(A)</span></dd>
            <dt>L</dt><dd>panjang kawat di dalam medan <span class="satuan">(m)</span></dd>
            <dt>θ</dt><dd>sudut antara arah arus dan arah medan</dd>
          </dl>
        </div>
      </div>

      <div class="kartu">
        <span class="istilah">Kaidah tangan kanan terbuka</span>
        <p>Buka telapak tangan kanan. <strong>Ibu jari</strong> menunjuk arah <strong>arus</strong> <em>I</em>, <strong>keempat jari</strong> menunjuk arah <strong>medan</strong> <em>B</em>, dan arah <strong>dorongan telapak tangan</strong> adalah arah <strong>gaya</strong> <em>F</em>.</p>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Kawat sepanjang 0,5 m dialiri arus 4 A dan diletakkan tegak lurus medan magnet 0,2 T. Gayanya <em>F</em> = 0,2 × 4 × 0,5 × sin 90° = 0,4 N.
      </div>

      <div class="sub">
        <h3><span class="no">5.1</span>Gaya antara dua kawat sejajar</h3>
        <p>Dua kawat sejajar yang sama-sama berarus saling memberikan gaya magnetik, karena setiap kawat berada di dalam medan magnet kawat lainnya.</p>
        <div class="rumus">
          <div class="rumus-judul">Gaya per satuan panjang</div>
          <div class="rumus-isi">
            <math display="block" aria-label="F per L sama dengan mu nol I 1 I 2 per 2 pi a">
              <mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>a</mi></mrow></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>F/L</dt><dd>gaya setiap satu meter panjang kawat <span class="satuan">(N/m)</span></dd>
              <dt>a</dt><dd>jarak antarkawat <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>
        <div class="cabang">
          <div class="kartu">
            <h3>Arus searah</h3>
            <p>Kedua kawat <strong>tarik-menarik</strong>.</p>
          </div>
          <div class="kartu">
            <h3>Arus berlawanan</h3>
            <p>Kedua kawat <strong>tolak-menolak</strong>.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 6. LORENTZ MUATAN ============ -->
    <section class="bagian" id="lorentz-muatan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Gaya Lorentz pada muatan bergerak</h2>
      </div>

      <p>Arus listrik sebenarnya adalah muatan yang bergerak. Karena itu, satu muatan yang bergerak di dalam medan magnet juga mengalami gaya Lorentz.</p>

      <div class="rumus">
        <div class="rumus-judul">Gaya Lorentz pada muatan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="F sama dengan q v B sin theta">
            <mi>F</mi><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mi>θ</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="jari-jari lintasan r sama dengan m v per q B">
            <mi>r</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi>q</mi><mi>B</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>q</dt><dd>muatan partikel <span class="satuan">(C)</span></dd>
            <dt>v</dt><dd>kecepatan partikel <span class="satuan">(m/s)</span></dd>
            <dt>θ</dt><dd>sudut antara arah kecepatan dan arah medan</dd>
            <dt>m</dt><dd>massa partikel <span class="satuan">(kg)</span></dd>
            <dt>r</dt><dd>jari-jari lintasan jika v tegak lurus B <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li>Arah gaya pada muatan <strong>positif</strong> ditentukan dengan kaidah tangan kanan terbuka, dengan ibu jari menunjuk arah <em>v</em>. Untuk muatan <strong>negatif</strong> seperti elektron, arah gayanya <strong>dibalik</strong>.</li>
        <li>Gaya Lorentz selalu tegak lurus kecepatan, sehingga tidak mengubah besar kecepatan, hanya arahnya. Jika <em>v</em> tegak lurus <em>B</em>, partikel bergerak melingkar beraturan. Gaya Lorentz berperan sebagai gaya sentripetal: <em>qvB</em> = <em>mv</em>²/<em>r</em>.</li>
        <li>Prinsip ini dipakai pada <strong>spektrometer massa</strong> untuk memisahkan isotop, karena partikel yang lebih berat membentuk lingkaran lebih besar. Aurora di daerah kutub juga terjadi karena partikel bermuatan dari Matahari dibelokkan medan magnet bumi.</li>
      </ul>
    </section>

    <!-- ============ 7. PENERAPAN ============ -->
    <section class="bagian" id="penerapan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">7</span>
        <h2>Penerapan gaya magnetik</h2>
      </div>

      <ul class="poin">
        <li><strong>Motor listrik DC</strong>: kumparan berarus di antara dua kutub magnet mendapat gaya Lorentz yang berlawanan arah di kedua sisinya, sehingga kumparan berputar. Komutator membalik arah arus setiap setengah putaran agar putarannya terus searah. Motor dipakai pada kipas angin, mobil listrik, dan pompa air.</li>
        <li><strong>Galvanometer dan amperemeter analog</strong>: kumparan berputar sebanding dengan kuat arus, sehingga jarum penunjuk bergerak di atas skala.</li>
        <li><strong>Pengeras suara</strong>: arus bolak-balik dari penguat menggerakkan kumparan di dekat magnet tetap maju-mundur, sehingga membran ikut bergetar dan menghasilkan bunyi.</li>
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
              <td>Kawat lurus panjang</td><td>T</td>
              <td><math><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>a</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Pusat kawat melingkar</td><td>T</td>
              <td><math><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Tengah solenoida</td><td>T</td>
              <td><math><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mi>L</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Toroida</td><td>T</td>
              <td><math><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Gaya Lorentz (kawat)</td><td>N</td>
              <td><math><mi>F</mi><mo>=</mo><mi>B</mi><mi>I</mi><mi>L</mi><mi>sin</mi><mi>θ</mi></math></td>
            </tr>
            <tr>
              <td>Gaya Lorentz (muatan)</td><td>N</td>
              <td><math><mi>F</mi><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mi>θ</mi></math></td>
            </tr>
            <tr>
              <td>Dua kawat sejajar</td><td>N/m</td>
              <td><math><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>a</mi></mrow></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

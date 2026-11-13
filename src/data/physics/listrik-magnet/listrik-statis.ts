/* ====== Bab 2-1 · Listrik Statis ====== */

import { Chapter } from '../../materials';

export const listrikStatis: Chapter = {
  chapterId: "2-1",
  title: "Listrik Statis",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Listrik dan Magnet</span>
      <h1>Listrik Statis</h1>
      <p>Rangkuman muatan listrik, hukum Coulomb, medan listrik, hukum Gauss, energi potensial dan potensial listrik, serta kapasitor.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#muatan">Muatan listrik</a></li>
        <li><a href="#coulomb">Hukum Coulomb</a></li>
        <li><a href="#medan-listrik">Medan listrik</a></li>
        <li><a href="#gauss">Hukum Gauss</a></li>
        <li><a href="#potensial">Energi potensial dan potensial listrik</a></li>
        <li><a href="#kapasitor">Kapasitor</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. MUATAN LISTRIK ============ -->
    <section class="bagian" id="muatan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Muatan listrik</h2>
      </div>

      <p>Penggaris plastik yang digosokkan ke rambut kering dapat menarik potongan kertas kecil. Gosokan itu memindahkan elektron dari rambut ke penggaris, sehingga penggaris menjadi <strong>bermuatan listrik</strong>. Listrik statis adalah ilmu yang mempelajari muatan listrik yang <strong>diam</strong> beserta gaya dan medan yang ditimbulkannya.</p>

      <ul class="poin">
        <li>Muatan listrik ada dua jenis: <strong>positif</strong> (proton) dan <strong>negatif</strong> (elektron). Benda bermuatan negatif kelebihan elektron, sedangkan benda bermuatan positif kekurangan elektron.</li>
        <li>Muatan sejenis <strong>tolak-menolak</strong>, muatan berbeda jenis <strong>tarik-menarik</strong>.</li>
        <li>Satuan muatan adalah <strong>coulomb</strong> (C). Muatan elementer, yaitu besar muatan satu elektron atau satu proton, adalah <em>e</em> = 1,6 × 10<sup>−19</sup> C.</li>
        <li>Muatan selalu kelipatan bulat dari <em>e</em>, yaitu <em>q</em> = <em>ne</em>. Sifat ini disebut <strong>kuantisasi muatan</strong>.</li>
        <li><strong>Hukum kekekalan muatan</strong>: muatan tidak dapat diciptakan atau dimusnahkan, hanya dapat dipindahkan dari satu benda ke benda lain.</li>
      </ul>

      <div class="cabang">
        <div class="kartu">
          <h3>Konduktor</h3>
          <p>Bahan yang mudah menghantarkan muatan karena memiliki banyak elektron bebas. Contoh: tembaga, aluminium, besi, dan air garam.</p>
        </div>
        <div class="kartu">
          <h3>Isolator</h3>
          <p>Bahan yang sulit menghantarkan muatan karena elektronnya terikat kuat pada atom. Contoh: plastik, karet, kaca, dan kayu kering.</p>
        </div>
      </div>
    </section>

    <!-- ============ 2. HUKUM COULOMB ============ -->
    <section class="bagian" id="coulomb">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Hukum Coulomb</h2>
      </div>

      <p>Charles Augustin de Coulomb mengukur gaya antara dua muatan titik dengan neraca puntir. Hasilnya: besar gaya listrik <strong>sebanding</strong> dengan hasil kali kedua muatan dan <strong>berbanding terbalik</strong> dengan kuadrat jarak keduanya.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/hukum-coulomb.svg" alt="Dua pasang muatan berjarak r. Atas, dua muatan positif saling tolak, sehingga gaya pada masing-masing muatan mengarah menjauhi muatan lain. Bawah, muatan positif dan negatif saling tarik, sehingga gaya pada masing-masing muatan mengarah ke muatan lain." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Gaya Coulomb pada muatan sejenis (atas) dan berbeda jenis (bawah). Gaya pada kedua muatan sama besar dan berlawanan arah.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Hukum Coulomb</div>
        <div class="rumus-isi">
          <math display="block" aria-label="F sama dengan k q 1 q 2 per r kuadrat">
            <mi>F</mi><mo>=</mo><mi>k</mi><mfrac><mrow><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>F</dt><dd>gaya Coulomb <span class="satuan">(N)</span></dd>
            <dt>k</dt><dd>konstanta Coulomb, 9 × 10<sup>9</sup> <span class="satuan">(N m²/C²)</span></dd>
            <dt>q<sub>1</sub>, q<sub>2</sub></dt><dd>besar kedua muatan <span class="satuan">(C)</span></dd>
            <dt>r</dt><dd>jarak antarmuatan <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Konstanta k dan ε₀</strong>
        Konstanta Coulomb juga ditulis <em>k</em> = 1/(4πε<sub>0</sub>), dengan ε<sub>0</sub> = 8,85 × 10<sup>−12</sup> C²/N m² sebagai <strong>permitivitas ruang hampa</strong>. Saat menghitung besar gaya, masukkan nilai muatan tanpa tanda. Tanda muatan cukup dipakai untuk menentukan arah: tolak atau tarik.
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Muatan +3 μC dan −2 μC terpisah 0,3 m. <em>F</em> = (9 × 10<sup>9</sup>)(3 × 10<sup>−6</sup>)(2 × 10<sup>−6</sup>)/(0,3)² = 0,054/0,09 = 0,6 N. Karena muatannya berbeda jenis, gayanya tarik-menarik.
      </div>

      <div class="catatan">
        <strong class="judul">Lebih dari dua muatan</strong>
        Gaya Coulomb adalah besaran vektor. Jika sebuah muatan dipengaruhi beberapa muatan lain, hitung gaya dari setiap muatan secara terpisah, lalu jumlahkan sebagai vektor. Jika gaya-gayanya saling tegak lurus, gunakan teorema Pythagoras. Jika membentuk sudut θ, gunakan <em>F</em> = √(<em>F</em><sub>1</sub>² + <em>F</em><sub>2</sub>² + 2<em>F</em><sub>1</sub><em>F</em><sub>2</sub> cos θ).
      </div>
    </section>

    <!-- ============ 3. MEDAN LISTRIK ============ -->
    <section class="bagian" id="medan-listrik">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Medan listrik</h2>
      </div>

      <p><strong>Medan listrik</strong> adalah daerah di sekitar muatan yang masih dipengaruhi gaya listrik. <strong>Kuat medan listrik</strong> <em>E</em> di suatu titik adalah gaya listrik yang dialami setiap satu satuan muatan uji positif yang diletakkan di titik itu.</p>

      <div class="rumus">
        <div class="rumus-judul">Kuat medan listrik</div>
        <div class="rumus-isi">
          <math display="block" aria-label="E sama dengan F per q nol sama dengan k q per r kuadrat">
            <mi>E</mi><mo>=</mo><mfrac><mi>F</mi><msub><mi>q</mi><mn>0</mn></msub></mfrac><mo>=</mo><mi>k</mi><mfrac><mi>q</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>E</dt><dd>kuat medan listrik <span class="satuan">(N/C)</span></dd>
            <dt>q<sub>0</sub></dt><dd>muatan uji <span class="satuan">(C)</span></dd>
            <dt>q</dt><dd>muatan sumber medan <span class="satuan">(C)</span></dd>
            <dt>r</dt><dd>jarak titik ke muatan sumber <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li>Medan listrik digambarkan dengan <strong>garis gaya listrik</strong>. Garis gaya <strong>keluar</strong> dari muatan positif dan <strong>masuk</strong> ke muatan negatif.</li>
        <li>Makin rapat garis gaya, makin kuat medannya. Garis gaya tidak pernah berpotongan.</li>
        <li>Muatan positif di dalam medan mengalami gaya <strong>searah</strong> medan, sedangkan muatan negatif mengalami gaya <strong>berlawanan</strong> arah medan: <em>F</em> = <em>qE</em>.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Kuat medan listrik pada jarak 0,2 m dari muatan 4 μC adalah <em>E</em> = (9 × 10<sup>9</sup>)(4 × 10<sup>−6</sup>)/(0,2)² = 3,6 × 10<sup>4</sup>/0,04 = 9 × 10<sup>5</sup> N/C, arahnya menjauhi muatan.
      </div>
    </section>

    <!-- ============ 4. HUKUM GAUSS ============ -->
    <section class="bagian" id="gauss">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Hukum Gauss</h2>
      </div>

      <p><strong>Fluks listrik</strong> Φ adalah banyaknya garis gaya listrik yang menembus suatu permukaan. Jika medan homogen <em>E</em> menembus bidang seluas <em>A</em> dan membentuk sudut θ terhadap garis normal bidang, maka Φ = <em>EA</em> cos θ.</p>

      <div class="rumus">
        <div class="rumus-judul">Hukum Gauss</div>
        <div class="rumus-isi">
          <math display="block" aria-label="phi sama dengan E A cos theta sama dengan Q per epsilon nol">
            <mi>Φ</mi><mo>=</mo><mi>E</mi><mi>A</mi><mi>cos</mi><mi>θ</mi><mo>=</mo><mfrac><mi>Q</mi><msub><mi>ε</mi><mn>0</mn></msub></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Φ</dt><dd>fluks listrik yang menembus permukaan tertutup <span class="satuan">(N m²/C)</span></dd>
            <dt>Q</dt><dd>muatan total di dalam permukaan tertutup <span class="satuan">(C)</span></dd>
            <dt>ε<sub>0</sub></dt><dd>permitivitas ruang hampa <span class="satuan">(C²/N m²)</span></dd>
          </dl>
        </div>
      </div>

      <p>Hukum Gauss memudahkan perhitungan medan pada benda yang bentuknya simetris.</p>

      <div class="cabang">
        <div class="kartu">
          <h3>Bola konduktor bermuatan</h3>
          <p>Muatan tersebar di permukaan bola. Di <strong>dalam</strong> bola, <em>E</em> = 0. Di <strong>luar</strong> bola, <em>E</em> = <em>kQ</em>/<em>r</em>², seolah-olah seluruh muatan terkumpul di pusat bola.</p>
        </div>
        <div class="kartu">
          <h3>Dua keping sejajar</h3>
          <p>Di antara dua keping bermuatan berlawanan, medannya <strong>homogen</strong>: <em>E</em> = σ/ε<sub>0</sub>, dengan σ = <em>Q</em>/<em>A</em> sebagai rapat muatan per luas keping.</p>
        </div>
      </div>
    </section>

    <!-- ============ 5. POTENSIAL LISTRIK ============ -->
    <section class="bagian" id="potensial">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Energi potensial dan potensial listrik</h2>
      </div>

      <p>Muatan yang berada di dalam medan listrik memiliki <strong>energi potensial listrik</strong>, sama seperti benda di dalam medan gravitasi memiliki energi potensial gravitasi. <strong>Potensial listrik</strong> adalah energi potensial setiap satu satuan muatan.</p>

      <div class="rumus">
        <div class="rumus-judul">Energi potensial dan potensial listrik</div>
        <div class="rumus-isi">
          <math display="block" aria-label="E p sama dengan k q 1 q 2 per r">
            <msub><mi>E</mi><mi>p</mi></msub><mo>=</mo><mi>k</mi><mfrac><mrow><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub></mrow><mi>r</mi></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="V sama dengan k q per r">
            <mi>V</mi><mo>=</mo><mi>k</mi><mfrac><mi>q</mi><mi>r</mi></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="usaha W sama dengan q dikali kurung V B dikurangi V A">
            <msub><mi>W</mi><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></msub><mo>=</mo><mi>q</mi><mo stretchy="false">(</mo><msub><mi>V</mi><mi>B</mi></msub><mo>−</mo><msub><mi>V</mi><mi>A</mi></msub><mo stretchy="false">)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>E<sub>p</sub></dt><dd>energi potensial listrik <span class="satuan">(J)</span></dd>
            <dt>V</dt><dd>potensial listrik <span class="satuan">(volt, V = J/C)</span></dd>
            <dt>W<sub>A→B</sub></dt><dd>usaha untuk memindahkan muatan q dari A ke B <span class="satuan">(J)</span></dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li>Energi potensial dan potensial listrik adalah besaran <strong>skalar</strong>. Tanda muatan <strong>ikut dimasukkan</strong> ke dalam perhitungan.</li>
        <li>Potensial di suatu titik akibat beberapa muatan cukup dijumlahkan secara aljabar: <em>V</em> = <em>V</em><sub>1</sub> + <em>V</em><sub>2</sub> + …</li>
        <li>Di antara dua keping sejajar bermedan homogen, beda potensialnya <em>V</em> = <em>Ed</em>, dengan <em>d</em> sebagai jarak antarkeping.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Elektronvolt</strong>
        Energi yang diperoleh satu elektron ketika dipercepat oleh beda potensial 1 volt disebut <strong>1 elektronvolt</strong> (eV). Nilainya 1 eV = 1,6 × 10<sup>−19</sup> J. Satuan ini banyak dipakai di fisika atom dan fisika modern.
      </div>
    </section>

    <!-- ============ 6. KAPASITOR ============ -->
    <section class="bagian" id="kapasitor">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Kapasitor</h2>
      </div>

      <p><strong>Kapasitor</strong> adalah komponen yang dapat <strong>menyimpan muatan dan energi listrik</strong>. Bentuk paling sederhana terdiri atas dua keping konduktor sejajar yang dipisahkan oleh isolator (bahan dielektrik). Kemampuan kapasitor menyimpan muatan disebut <strong>kapasitas</strong>.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/kapasitor-keping.svg" alt="Kapasitor keping sejajar yang dihubungkan ke baterai bertegangan V. Keping kiri bermuatan positif dan keping kanan bermuatan negatif. Di antara kedua keping yang berjarak d terdapat medan listrik homogen E yang arahnya dari keping positif ke keping negatif. Setiap keping memiliki luas A." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Kapasitor keping sejajar yang diisi oleh baterai.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Kapasitas kapasitor</div>
        <div class="rumus-isi">
          <math display="block" aria-label="C sama dengan Q per V">
            <mi>C</mi><mo>=</mo><mfrac><mi>Q</mi><mi>V</mi></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="kapasitor keping sejajar: C sama dengan K epsilon nol A per d">
            <mi>C</mi><mo>=</mo><mfrac><mrow><mi>K</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>A</mi></mrow><mi>d</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>C</dt><dd>kapasitas kapasitor <span class="satuan">(farad, F)</span></dd>
            <dt>Q</dt><dd>muatan yang tersimpan <span class="satuan">(C)</span></dd>
            <dt>V</dt><dd>beda potensial antarkeping <span class="satuan">(V)</span></dd>
            <dt>K</dt><dd>konstanta dielektrik bahan penyekat (udara ≈ 1)</dd>
            <dt>A</dt><dd>luas setiap keping <span class="satuan">(m²)</span></dd>
            <dt>d</dt><dd>jarak antarkeping <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <p>Kapasitas makin besar jika keping makin luas, jarak keping makin kecil, atau penyekatnya diganti bahan dengan konstanta dielektrik lebih besar. Satu farad sangat besar, sehingga kapasitor sehari-hari bernilai mikrofarad (μF = 10<sup>−6</sup> F), nanofarad (nF = 10<sup>−9</sup> F), atau pikofarad (pF = 10<sup>−12</sup> F).</p>

      <div class="sub">
        <h3><span class="no">6.1</span>Susunan kapasitor</h3>
        <div class="cabang">
          <div class="kartu">
            <h3>Seri</h3>
            <p>Muatan pada setiap kapasitor <strong>sama</strong>, sedangkan tegangan totalnya adalah jumlah tegangan setiap kapasitor. Kapasitas penggantinya <strong>lebih kecil</strong> daripada kapasitas terkecil.</p>
          </div>
          <div class="kartu">
            <h3>Paralel</h3>
            <p>Tegangan pada setiap kapasitor <strong>sama</strong>, sedangkan muatan totalnya adalah jumlah muatan setiap kapasitor. Kapasitas penggantinya adalah <strong>jumlah</strong> semua kapasitas.</p>
          </div>
        </div>

        <div class="rumus">
          <div class="rumus-judul">Kapasitas pengganti</div>
          <div class="rumus-isi">
            <math display="block" aria-label="seri: satu per C s sama dengan satu per C 1 ditambah satu per C 2 ditambah seterusnya">
              <mfrac><mn>1</mn><msub><mi>C</mi><mi>s</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>C</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>C</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>…</mo>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="paralel: C p sama dengan C 1 ditambah C 2 ditambah seterusnya">
              <msub><mi>C</mi><mi>p</mi></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mo>…</mo>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>C<sub>s</sub></dt><dd>kapasitas pengganti susunan seri <span class="satuan">(F)</span></dd>
              <dt>C<sub>p</sub></dt><dd>kapasitas pengganti susunan paralel <span class="satuan">(F)</span></dd>
            </dl>
          </div>
        </div>

        <div class="catatan">
          <strong class="judul">Kebalikan dari hambatan</strong>
          Rumus susunan kapasitor terbalik dibandingkan susunan hambatan: kapasitor seri memakai rumus 1/<em>C</em>, sedangkan hambatan seri cukup dijumlahkan. Polanya justru sama dengan susunan pegas.
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">6.2</span>Energi yang tersimpan</h3>
        <div class="rumus">
          <div class="rumus-judul">Energi kapasitor</div>
          <div class="rumus-isi">
            <math display="block" aria-label="W sama dengan setengah Q V sama dengan setengah C V kuadrat sama dengan Q kuadrat per 2 C">
              <mi>W</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>Q</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>C</mi><msup><mi>V</mi><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>Q</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>C</mi></mrow></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>W</dt><dd>energi yang tersimpan dalam kapasitor <span class="satuan">(J)</span></dd>
            </dl>
          </div>
        </div>

        <div class="catatan info">
          <strong class="judul">Contoh</strong>
          Kapasitor 2 μF dan 3 μF disusun paralel lalu dihubungkan ke baterai 12 V. <em>C</em><sub>p</sub> = 5 μF, sehingga muatan totalnya <em>Q</em> = 5 × 10<sup>−6</sup> × 12 = 6 × 10<sup>−5</sup> C, dan energinya <em>W</em> = ½ × 5 × 10<sup>−6</sup> × 12² = 3,6 × 10<sup>−4</sup> J.
        </div>

        <p>Kapasitor dipakai pada lampu kilat kamera, defibrilator jantung, penyaring tegangan pada catu daya (adaptor), rangkaian penala radio, dan layar sentuh kapasitif pada ponsel.</p>
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
              <td>Gaya Coulomb</td><td>N</td>
              <td><math><mi>F</mi><mo>=</mo><mi>k</mi><mfrac><mrow><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></math></td>
            </tr>
            <tr>
              <td>Kuat medan listrik</td><td>N/C</td>
              <td><math><mi>E</mi><mo>=</mo><mi>k</mi><mfrac><mi>q</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac></math></td>
            </tr>
            <tr>
              <td>Hukum Gauss</td><td>N m²/C</td>
              <td><math><mi>Φ</mi><mo>=</mo><mfrac><mi>Q</mi><msub><mi>ε</mi><mn>0</mn></msub></mfrac></math></td>
            </tr>
            <tr>
              <td>Potensial listrik</td><td>V</td>
              <td><math><mi>V</mi><mo>=</mo><mi>k</mi><mfrac><mi>q</mi><mi>r</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Kapasitas</td><td>F</td>
              <td><math><mi>C</mi><mo>=</mo><mfrac><mi>Q</mi><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mi>K</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>A</mi></mrow><mi>d</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Energi kapasitor</td><td>J</td>
              <td><math><mi>W</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>C</mi><msup><mi>V</mi><mn>2</mn></msup></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

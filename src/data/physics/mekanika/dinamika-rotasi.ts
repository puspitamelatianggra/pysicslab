/* ====== Bab 1-9 · Dinamika Rotasi ====== */

import { Chapter } from '../../materials';

export const dinamikaRotasi: Chapter = {
  chapterId: "1-9",
  title: "Dinamika Rotasi",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Dinamika</span>
      <h1>Dinamika Rotasi</h1>
      <p>Rangkuman torsi, momen inersia, hukum II Newton untuk rotasi, hubungan gerak translasi dan rotasi, energi kinetik rotasi, serta momentum sudut.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian dinamika rotasi</a></li>
        <li><a href="#torsi">Torsi (momen gaya)</a></li>
        <li><a href="#momen-inersia">Momen inersia</a></li>
        <li><a href="#translasi-rotasi">Hubungan gerak translasi dan rotasi</a></li>
        <li><a href="#energi">Energi kinetik rotasi</a></li>
        <li><a href="#momentum-sudut">Momentum sudut</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian dinamika rotasi</h2>
      </div>

      <p><strong>Dinamika rotasi</strong> mempelajari gerak rotasi (berputar) beserta <strong>penyebabnya</strong>, yaitu momen gaya atau torsi. Sebuah benda dikatakan berotasi jika semua bagiannya bergerak mengelilingi suatu <strong>poros</strong> atau sumbu putar.</p>

      <div class="catatan info">
        <strong class="judul">Analogi dengan gerak lurus</strong>
        Pada gerak lurus, gaya menyebabkan percepatan. Pada gerak rotasi, <strong>torsi</strong> menyebabkan <strong>percepatan sudut</strong>. Massa (kelembaman gerak lurus) digantikan oleh <strong>momen inersia</strong> (kelembaman gerak rotasi).
      </div>
    </section>

    <!-- ============ 2. TORSI ============ -->
    <section class="bagian" id="torsi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Torsi (momen gaya)</h2>
      </div>

      <div class="kartu">
        <span class="tipe vektor">Vektor</span>
        <span class="istilah">Torsi (τ)</span>
        <p>Ukuran kemampuan sebuah gaya untuk <strong>memutar</strong> benda terhadap porosnya. Besarnya sama dengan hasil kali gaya dan lengan momen. Lengan momen (<em>l</em>) adalah jarak dari poros ke titik tangkap gaya.</p>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/torsi.svg" alt="Batang berporos di titik O dengan panjang lengan l. Gaya F bekerja di ujung batang dan membentuk sudut theta terhadap batang. Gaya F diuraikan menjadi F cos theta searah batang dan F sin theta tegak lurus batang. Hanya F sin theta yang memutar batang." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Gaya <em>F</em> pada ujung batang. Komponen <em>F</em> sin θ memutar batang berlawanan arah jarum jam, sedangkan <em>F</em> cos θ tidak memutar karena segaris dengan poros.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Torsi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="tau sama dengan F l">
            <mi>τ</mi><mo>=</mo><mi>F</mi><mi>l</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="tau sama dengan F l sin theta">
            <mi>τ</mi><mo>=</mo><mi>F</mi><mi>l</mi><mi>sin</mi><mi>θ</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>τ</dt><dd>torsi <span class="satuan">(N·m)</span></dd>
            <dt>F</dt><dd>gaya <span class="satuan">(N)</span></dd>
            <dt>l</dt><dd>lengan momen, jarak poros ke titik tangkap gaya <span class="satuan">(m)</span></dd>
            <dt>θ</dt><dd>sudut antara lengan momen dan arah gaya</dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li>Rumus τ = <em>Fl</em> berlaku jika gaya <strong>tegak lurus</strong> lengan (θ = 90°). Pada keadaan ini torsinya paling besar.</li>
        <li>Jika gaya segaris dengan lengan (θ = 0°), torsinya nol dan benda tidak berputar.</li>
        <li>Perjanjian tanda: torsi yang memutar <strong>berlawanan arah jarum jam</strong> bernilai <strong>positif</strong>, sedangkan yang <strong>searah jarum jam</strong> bernilai <strong>negatif</strong>.</li>
      </ul>

      <div class="sub">
        <h3><span class="no">2.1</span>Hukum II Newton untuk rotasi</h3>
        <p>Torsi menyebabkan benda berputar dengan percepatan sudut tertentu. Bentuknya mirip dengan hukum II Newton Σ<em>F</em> = <em>ma</em>.</p>
        <div class="rumus">
          <div class="rumus-judul">Hukum II Newton untuk rotasi</div>
          <div class="rumus-isi">
            <math display="block" aria-label="sigma tau sama dengan I alfa">
              <mo>Σ</mo><mi>τ</mi><mo>=</mo><mi>I</mi><mi>α</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>Στ</dt><dd>resultan torsi <span class="satuan">(N·m)</span></dd>
              <dt>I</dt><dd>momen inersia <span class="satuan">(kg·m²)</span></dd>
              <dt>α</dt><dd>percepatan sudut <span class="satuan">(rad/s²)</span></dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 3. MOMEN INERSIA ============ -->
    <section class="bagian" id="momen-inersia">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Momen inersia</h2>
      </div>

      <p><strong>Momen inersia</strong> menyatakan kecenderungan benda untuk mempertahankan keadaan rotasinya. Makin besar momen inersia, makin <strong>sulit</strong> benda diputar atau dihentikan putarannya. Besarnya bergantung pada <strong>massa</strong>, <strong>bentuk benda</strong>, dan <strong>letak poros</strong>.</p>

      <div class="sub">
        <h3><span class="no">3.1</span>Momen inersia partikel</h3>
        <p>Jika benda dapat dianggap sebagai titik (partikel), momen inersianya adalah massa dikali kuadrat jaraknya ke sumbu putar. Untuk beberapa partikel, momen inersianya dijumlahkan.</p>
        <div class="rumus">
          <div class="rumus-judul">Momen inersia partikel</div>
          <div class="rumus-isi">
            <math display="block" aria-label="I sama dengan m r kuadrat">
              <mi>I</mi><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="I sama dengan sigma m i r i kuadrat">
              <mi>I</mi><mo>=</mo><mo>Σ</mo><msub><mi>m</mi><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>I</dt><dd>momen inersia <span class="satuan">(kg·m²)</span></dd>
              <dt>m</dt><dd>massa partikel <span class="satuan">(kg)</span></dd>
              <dt>r</dt><dd>jarak partikel ke sumbu putar <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">3.2</span>Momen inersia benda tegar</h3>
        <p>Untuk benda tegar homogen bermassa <em>M</em>, momen inersianya bergantung pada bentuk benda dan letak porosnya:</p>
        <div class="tabel-wrap">
          <table>
            <thead>
              <tr><th>Benda</th><th>Letak poros</th><th>Momen inersia</th></tr>
            </thead>
            <tbody>
              <tr><td>Batang tipis, panjang <em>L</em></td><td>Di tengah, tegak lurus batang</td><td><math><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>M</mi><msup><mi>L</mi><mn>2</mn></msup></math></td></tr>
              <tr><td>Batang tipis, panjang <em>L</em></td><td>Di ujung, tegak lurus batang</td><td><math><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>M</mi><msup><mi>L</mi><mn>2</mn></msup></math></td></tr>
              <tr><td>Pelat persegi panjang, sisi <em>a</em> dan <em>b</em></td><td>Melalui pusat, tegak lurus pelat</td><td><math><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>M</mi><mo>(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>)</mo></math></td></tr>
              <tr><td>Pelat persegi panjang tipis, lebar <em>a</em></td><td>Di sepanjang salah satu tepinya</td><td><math><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup></math></td></tr>
              <tr><td>Silinder pejal, jari-jari <em>R</em></td><td>Sumbu silinder</td><td><math><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></math></td></tr>
              <tr><td>Silinder berongga tebal, jari-jari <em>R</em><sub>1</sub> dan <em>R</em><sub>2</sub></td><td>Sumbu silinder</td><td><math><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><mo>(</mo><msubsup><mi>R</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>R</mi><mn>2</mn><mn>2</mn></msubsup><mo>)</mo></math></td></tr>
              <tr><td>Silinder tipis berongga (cincin)</td><td>Sumbu silinder</td><td><math><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></math></td></tr>
              <tr><td>Bola pejal</td><td>Melalui pusat bola</td><td><math><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></math></td></tr>
              <tr><td>Bola tipis berongga</td><td>Melalui pusat bola</td><td><math><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></math></td></tr>
            </tbody>
          </table>
        </div>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/momen-inersia-batang.svg" alt="Dua batang identik bermassa M dan panjang L. Batang kiri berputar pada poros di tengah dengan momen inersia satu per dua belas M L kuadrat. Batang kanan berputar pada poros di ujung dengan momen inersia sepertiga M L kuadrat, empat kali lebih besar." />
          </div>
          <figcaption><strong>Gambar 2.</strong> Batang yang sama memiliki momen inersia berbeda jika porosnya dipindah. Poros di ujung membuat momen inersia 4 kali lebih besar.</figcaption>
        </figure>
      </div>

      <div class="sub">
        <h3><span class="no">3.3</span>Teorema sumbu sejajar</h3>
        <p>Jika poros digeser sejajar sejauh <em>d</em> dari sumbu yang melalui pusat massa, momen inersianya menjadi:</p>
        <div class="rumus">
          <div class="rumus-judul">Teorema sumbu sejajar</div>
          <div class="rumus-isi">
            <math display="block" aria-label="I sama dengan I p m ditambah M d kuadrat">
              <mi>I</mi><mo>=</mo><msub><mi>I</mi><mtext>pm</mtext></msub><mo>+</mo><mi>M</mi><msup><mi>d</mi><mn>2</mn></msup>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>I</dt><dd>momen inersia terhadap poros baru <span class="satuan">(kg·m²)</span></dd>
              <dt>I<sub>pm</sub></dt><dd>momen inersia terhadap sumbu melalui pusat massa <span class="satuan">(kg·m²)</span></dd>
              <dt>M</dt><dd>massa benda <span class="satuan">(kg)</span></dd>
              <dt>d</dt><dd>jarak antara kedua sumbu yang sejajar <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>
        <div class="catatan info">
          <strong class="judul">Contoh pemakaian</strong>
          Batang dengan poros di ujung: <em>d</em> = <em>L</em>/2, sehingga <em>I</em> = <sup>1</sup>/<sub>12</sub><em>ML</em><sup>2</sup> + <em>M</em>(<em>L</em>/2)<sup>2</sup> = <sup>1</sup>/<sub>3</sub><em>ML</em><sup>2</sup>. Hasil ini sama dengan nilai pada tabel.
        </div>
      </div>
    </section>

    <!-- ============ 4. TRANSLASI DAN ROTASI ============ -->
    <section class="bagian" id="translasi-rotasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Hubungan gerak translasi dan rotasi</h2>
      </div>

      <p>Setiap besaran pada gerak lurus (translasi) memiliki pasangan pada gerak rotasi. Untuk titik yang berjarak <em>R</em> dari poros, keduanya dihubungkan sebagai berikut:</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Besaran</th><th>Translasi</th><th>Rotasi</th><th>Hubungan</th></tr>
          </thead>
          <tbody>
            <tr><td>Posisi</td><td>Jarak (<em>s</em>)</td><td>Sudut (θ)</td><td><em>s</em> = θ<em>R</em></td></tr>
            <tr><td>Kecepatan</td><td>Kecepatan linear (<em>v</em>)</td><td>Kecepatan sudut (ω)</td><td><em>v</em> = ω<em>R</em></td></tr>
            <tr><td>Percepatan</td><td>Percepatan linear (<em>a</em>)</td><td>Percepatan sudut (α)</td><td><em>a</em> = α<em>R</em></td></tr>
            <tr><td>Kelembaman</td><td>Massa (<em>m</em>)</td><td>Momen inersia (<em>I</em>)</td><td><em>I</em> = <em>mR</em><sup>2</sup> (partikel)</td></tr>
            <tr><td>Penyebab gerak</td><td>Gaya (<em>F</em>)</td><td>Torsi (τ)</td><td>τ = <em>FR</em> (gaya tegak lurus jari-jari)</td></tr>
            <tr><td>Hukum II Newton</td><td>Σ<em>F</em> = <em>ma</em></td><td>Στ = <em>I</em>α</td><td>–</td></tr>
            <tr><td>Momentum</td><td><em>p</em> = <em>mv</em></td><td><em>L</em> = <em>I</em>ω</td><td>–</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ============ 5. ENERGI ============ -->
    <section class="bagian" id="energi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Energi kinetik rotasi</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Energi kinetik translasi</h3>
          <p>Dimiliki benda yang semua titiknya bergerak ke arah yang sama tanpa berputar, misalnya mangga yang jatuh dari pohon atau peluru yang ditembakkan.</p>
        </div>
        <div class="kartu">
          <h3>Energi kinetik rotasi</h3>
          <p>Dimiliki benda yang berputar terhadap suatu poros, misalnya kipas angin yang menyala atau roda gila (<em>flywheel</em>).</p>
        </div>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Energi kinetik</div>
        <div class="rumus-isi">
          <math display="block" aria-label="E k translasi sama dengan setengah m v kuadrat">
            <msub><mi>E</mi><mtext>k,trans</mtext></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="E k rotasi sama dengan setengah I omega kuadrat">
            <msub><mi>E</mi><mtext>k,rot</mtext></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mi>ω</mi><mn>2</mn></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>E<sub>k</sub></dt><dd>energi kinetik <span class="satuan">(J)</span></dd>
            <dt>m</dt><dd>massa benda <span class="satuan">(kg)</span></dd>
            <dt>v</dt><dd>kecepatan linear <span class="satuan">(m/s)</span></dd>
            <dt>I</dt><dd>momen inersia <span class="satuan">(kg·m²)</span></dd>
            <dt>ω</dt><dd>kecepatan sudut <span class="satuan">(rad/s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Benda menggelinding</strong>
        Bola atau silinder yang menggelinding tanpa tergelincir melakukan translasi dan rotasi sekaligus, dengan <em>v</em> = ω<em>R</em>. Energi kinetik totalnya adalah <em>E</em><sub>k</sub> = ½<em>mv</em><sup>2</sup> + ½<em>I</em>ω<sup>2</sup>.
      </div>
    </section>

    <!-- ============ 6. MOMENTUM SUDUT ============ -->
    <section class="bagian" id="momentum-sudut">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Momentum sudut</h2>
      </div>

      <div class="kartu">
        <span class="tipe vektor">Vektor</span>
        <span class="istilah">Momentum sudut (L)</span>
        <p>Menyatakan kecenderungan benda atau sistem untuk mempertahankan gerak rotasinya. Besarnya adalah hasil kali momen inersia dan kecepatan sudut.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Momentum sudut</div>
        <div class="rumus-isi">
          <math display="block" aria-label="L sama dengan I omega">
            <mi>L</mi><mo>=</mo><mi>I</mi><mi>ω</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>L</dt><dd>momentum sudut <span class="satuan">(kg·m²/s)</span></dd>
            <dt>I</dt><dd>momen inersia <span class="satuan">(kg·m²)</span></dd>
            <dt>ω</dt><dd>kecepatan sudut <span class="satuan">(rad/s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">6.1</span>Hukum kekekalan momentum sudut</h3>
        <p>Jika tidak ada torsi luar yang bekerja pada sistem (Στ<sub>luar</sub> = 0), momentum sudut sistem tetap. Akibatnya, jika momen inersia mengecil, kecepatan sudutnya membesar, dan sebaliknya.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/kekekalan-momentum-sudut.svg" alt="Penari es dilihat dari atas. Kiri: lengan direntangkan, massa tangan jauh dari sumbu putar, momen inersia besar, dan putaran lambat. Kanan: lengan dilipat, massa tangan dekat sumbu putar, momen inersia kecil, dan putaran cepat. Momentum sudut I omega tetap sama." />
          </div>
          <figcaption><strong>Gambar 3.</strong> Penari es (dilihat dari atas) berputar lebih cepat saat melipat lengannya karena momen inersianya mengecil.</figcaption>
        </figure>

        <div class="rumus">
          <div class="rumus-judul">Kekekalan momentum sudut</div>
          <div class="rumus-isi">
            <math display="block" aria-label="I 1 omega 1 sama dengan I 2 omega 2">
              <msub><mi>I</mi><mn>1</mn></msub><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><msub><mi>ω</mi><mn>2</mn></msub>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>I<sub>1</sub>, ω<sub>1</sub></dt><dd>momen inersia dan kecepatan sudut keadaan awal</dd>
              <dt>I<sub>2</sub>, ω<sub>2</sub></dt><dd>momen inersia dan kecepatan sudut keadaan akhir</dd>
            </dl>
          </div>
        </div>

        <p>Contoh penerapan:</p>
        <ul class="poin">
          <li>Penari es berputar makin cepat saat merapatkan lengan ke tubuhnya.</li>
          <li>Atlet loncat indah menekuk tubuhnya agar dapat berputar beberapa kali di udara.</li>
        </ul>
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
              <td>Torsi</td><td>N·m</td>
              <td><math><mi>τ</mi><mo>=</mo><mi>F</mi><mi>l</mi><mi>sin</mi><mi>θ</mi></math></td>
            </tr>
            <tr>
              <td>Hukum II Newton rotasi</td><td>–</td>
              <td><math><mo>Σ</mo><mi>τ</mi><mo>=</mo><mi>I</mi><mi>α</mi></math></td>
            </tr>
            <tr>
              <td>Momen inersia partikel</td><td>kg·m²</td>
              <td><math><mi>I</mi><mo>=</mo><mo>Σ</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></math></td>
            </tr>
            <tr>
              <td>Teorema sumbu sejajar</td><td>kg·m²</td>
              <td><math><mi>I</mi><mo>=</mo><msub><mi>I</mi><mtext>pm</mtext></msub><mo>+</mo><mi>M</mi><msup><mi>d</mi><mn>2</mn></msup></math></td>
            </tr>
            <tr>
              <td>Energi kinetik rotasi</td><td>J</td>
              <td><math><msub><mi>E</mi><mi>k</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mi>ω</mi><mn>2</mn></msup></math></td>
            </tr>
            <tr>
              <td>Momentum sudut</td><td>kg·m²/s</td>
              <td><math><mi>L</mi><mo>=</mo><mi>I</mi><mi>ω</mi></math></td>
            </tr>
            <tr>
              <td>Kekekalan momentum sudut</td><td>–</td>
              <td><math><msub><mi>I</mi><mn>1</mn></msub><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><msub><mi>ω</mi><mn>2</mn></msub></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

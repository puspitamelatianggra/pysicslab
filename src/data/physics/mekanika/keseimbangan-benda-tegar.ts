/* ====== Bab 1-10 · Keseimbangan Benda Tegar ====== */

import { Chapter } from '../../materials';

export const keseimbanganBendaTegar: Chapter = {
  chapterId: "1-10",
  title: "Keseimbangan Benda Tegar",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Statika</span>
      <h1>Keseimbangan Benda Tegar</h1>
      <p>Rangkuman syarat keseimbangan partikel dan benda tegar, serta cara menentukan letak titik berat benda berbentuk garis, bidang, dan ruang.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Keseimbangan statis</a></li>
        <li><a href="#partikel">Keseimbangan partikel</a></li>
        <li><a href="#benda-tegar">Keseimbangan benda tegar</a></li>
        <li><a href="#titik-berat">Titik berat</a></li>
        <li><a href="#tabel-titik-berat">Titik berat benda homogen</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Keseimbangan statis</h2>
      </div>

      <p>Bab ini membahas <strong>keseimbangan statis</strong>, yaitu keadaan benda yang <strong>diam</strong>: tidak bergerak translasi (bergeser) dan tidak bergerak rotasi (berputar). Contohnya jembatan, tangga yang bersandar di dinding, dan lampu yang digantung.</p>

      <div class="cabang">
        <div class="kartu">
          <h3>Partikel</h3>
          <p>Benda dianggap sebagai <strong>titik</strong>. Semua gaya bekerja di titik yang sama, sehingga gaya hanya bisa menggeser benda, tidak memutarnya.</p>
        </div>
        <div class="kartu">
          <h3>Benda tegar</h3>
          <p>Benda memiliki <strong>ukuran</strong> dan bentuknya tidak berubah saat dikenai gaya. Gaya yang bekerja di titik berbeda bisa menggeser sekaligus memutar benda.</p>
        </div>
      </div>
    </section>

    <!-- ============ 2. PARTIKEL ============ -->
    <section class="bagian" id="partikel">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Keseimbangan partikel</h2>
      </div>

      <p>Karena gaya pada partikel tidak menimbulkan rotasi, syarat keseimbangannya cukup <strong>keseimbangan translasi</strong>: resultan gaya sama dengan nol.</p>

      <div class="rumus">
        <div class="rumus-judul">Syarat keseimbangan partikel</div>
        <div class="rumus-isi">
          <math display="block" aria-label="sigma F sama dengan nol">
            <mo>Σ</mo><mi>F</mi><mo>=</mo><mn>0</mn>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="sigma F x sama dengan nol, sigma F y sama dengan nol">
            <mo>Σ</mo><msub><mi>F</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn><mo>;</mo><mspace width="1em"/>
            <mo>Σ</mo><msub><mi>F</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>ΣF</dt><dd>resultan semua gaya pada benda <span class="satuan">(N)</span></dd>
            <dt>ΣF<sub>x</sub></dt><dd>resultan komponen gaya pada sumbu x <span class="satuan">(N)</span></dd>
            <dt>ΣF<sub>y</sub></dt><dd>resultan komponen gaya pada sumbu y <span class="satuan">(N)</span></dd>
          </dl>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/keseimbangan-partikel.svg" alt="Lampu digantung dengan dua tali yang diikat pada titik simpul P. Tali kiri membentuk sudut 30 derajat dan tali kanan 60 derajat terhadap garis mendatar. Pada simpul bekerja tegangan T1 ke kiri atas, tegangan T2 ke kanan atas, dan berat lampu w ke bawah." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Simpul P dianggap sebagai partikel yang seimbang di bawah pengaruh tiga gaya: <em>T</em><sub>1</sub>, <em>T</em><sub>2</sub>, dan <em>w</em>.</figcaption>
      </figure>

      <div class="catatan info">
        <strong class="judul">Contoh: lampu digantung dua tali</strong>
        Uraikan setiap tegangan tali ke sumbu x dan y (Gambar 1).
        <ul class="poin">
          <li>ΣF<sub>x</sub> = 0: <em>T</em><sub>1</sub> cos 30° = <em>T</em><sub>2</sub> cos 60°, sehingga <em>T</em><sub>2</sub> = √3 <em>T</em><sub>1</sub>.</li>
          <li>ΣF<sub>y</sub> = 0: <em>T</em><sub>1</sub> sin 30° + <em>T</em><sub>2</sub> sin 60° = <em>w</em>, sehingga ½<em>T</em><sub>1</sub> + <sup>3</sup>/<sub>2</sub><em>T</em><sub>1</sub> = <em>w</em>.</li>
          <li>Hasilnya <em>T</em><sub>1</sub> = ½<em>w</em> dan <em>T</em><sub>2</sub> = ½√3 <em>w</em>. Jika <em>w</em> = 20 N, maka <em>T</em><sub>1</sub> = 10 N dan <em>T</em><sub>2</sub> = 10√3 N.</li>
        </ul>
        Tali yang lebih curam (lebih mendekati vertikal) menahan tegangan yang lebih besar.
      </div>
    </section>

    <!-- ============ 3. BENDA TEGAR ============ -->
    <section class="bagian" id="benda-tegar">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Keseimbangan benda tegar</h2>
      </div>

      <p>Benda tegar berada dalam keseimbangan statis jika mula-mula diam, <strong>resultan gayanya nol</strong> (tidak bergeser), dan <strong>resultan torsinya nol</strong> terhadap titik mana pun yang dipilih sebagai poros (tidak berputar).</p>

      <div class="rumus">
        <div class="rumus-judul">Syarat keseimbangan benda tegar</div>
        <div class="rumus-isi">
          <math display="block" aria-label="sigma F x sama dengan nol, sigma F y sama dengan nol">
            <mo>Σ</mo><msub><mi>F</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn><mo>;</mo><mspace width="1em"/>
            <mo>Σ</mo><msub><mi>F</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="sigma tau sama dengan nol">
            <mo>Σ</mo><mi>τ</mi><mo>=</mo><mn>0</mn>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>ΣF<sub>x</sub>, ΣF<sub>y</sub></dt><dd>resultan gaya pada sumbu x dan y <span class="satuan">(N)</span></dd>
            <dt>Στ</dt><dd>resultan torsi terhadap poros yang dipilih <span class="satuan">(N·m)</span></dd>
          </dl>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/keseimbangan-jungkat-jungkit.svg" alt="Jungkat-jungkit seimbang. Papan ditumpu di titik O. Beban w1 yang lebih berat diletakkan sejauh l1 di kiri tumpuan, dan beban w2 yang lebih ringan sejauh l2 yang lebih panjang di kanan tumpuan. Gaya normal N bekerja ke atas di titik tumpu." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Jungkat-jungkit seimbang. Beban yang lebih berat harus diletakkan lebih dekat ke titik tumpu O.</figcaption>
      </figure>

      <div class="catatan info">
        <strong class="judul">Contoh: jungkat-jungkit</strong>
        Anak A (<em>w</em><sub>1</sub> = 300 N) duduk 1,2 m di kiri titik tumpu. Agar seimbang, anak B (<em>w</em><sub>2</sub> = 200 N) harus duduk di kanan sejauh <em>l</em><sub>2</sub>. Massa papan diabaikan.
        <ul class="poin">
          <li>Στ<sub>O</sub> = 0: <em>w</em><sub>1</sub><em>l</em><sub>1</sub> − <em>w</em><sub>2</sub><em>l</em><sub>2</sub> = 0, sehingga (300)(1,2) = (200)<em>l</em><sub>2</sub> dan <em>l</em><sub>2</sub> = 1,8 m.</li>
          <li>ΣF<sub>y</sub> = 0: <em>N</em> = <em>w</em><sub>1</sub> + <em>w</em><sub>2</sub> = 500 N.</li>
        </ul>
      </div>

      <div class="catatan">
        <strong class="judul">Tips memilih poros</strong>
        Pilih poros di titik yang dilalui gaya yang <strong>tidak diketahui</strong>. Torsi gaya itu menjadi nol karena lengannya nol, sehingga persamaan torsi lebih mudah diselesaikan.
      </div>
    </section>

    <!-- ============ 4. TITIK BERAT ============ -->
    <section class="bagian" id="titik-berat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Titik berat</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Titik berat (Z)</span>
        <p>Titik tangkap gaya berat total sebuah benda. Setiap bagian benda memiliki berat, dan resultan semua berat itu seolah-olah bekerja di satu titik ini. Jika benda ditumpu tepat di titik beratnya, benda akan seimbang dan tidak jatuh.</p>
      </div>

      <p>Pada benda homogen yang memiliki sumbu simetri, titik beratnya terletak pada sumbu simetri. Contohnya, titik berat penggaris kayu ada di tengah-tengahnya. Untuk benda yang terdiri atas beberapa bagian, letak titik beratnya dihitung dengan rata-rata berbobot:</p>

      <div class="rumus">
        <div class="rumus-judul">Koordinat titik berat</div>
        <div class="rumus-isi">
          <math display="block" aria-label="x G sama dengan sigma w i x i dibagi sigma w i">
            <msub><mi>x</mi><mi>G</mi></msub><mo>=</mo>
            <mfrac><mrow><mo>Σ</mo><msub><mi>w</mi><mi>i</mi></msub><msub><mi>x</mi><mi>i</mi></msub></mrow><mrow><mo>Σ</mo><msub><mi>w</mi><mi>i</mi></msub></mrow></mfrac>
            <mo>=</mo>
            <mfrac>
              <mrow><msub><mi>w</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mo>…</mo></mrow>
              <mrow><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mo>…</mo></mrow>
            </mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="y G sama dengan sigma w i y i dibagi sigma w i">
            <msub><mi>y</mi><mi>G</mi></msub><mo>=</mo>
            <mfrac><mrow><mo>Σ</mo><msub><mi>w</mi><mi>i</mi></msub><msub><mi>y</mi><mi>i</mi></msub></mrow><mrow><mo>Σ</mo><msub><mi>w</mi><mi>i</mi></msub></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>x<sub>G</sub>, y<sub>G</sub></dt><dd>koordinat titik berat benda <span class="satuan">(m)</span></dd>
            <dt>w<sub>i</sub></dt><dd>berat bagian ke-i <span class="satuan">(N)</span></dd>
            <dt>x<sub>i</sub>, y<sub>i</sub></dt><dd>koordinat titik berat bagian ke-i <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Titik berat dan pusat massa</strong>
        Untuk benda berukuran sehari-hari, percepatan gravitasi <em>g</em> di setiap bagian benda dapat dianggap sama. Karena <em>w</em><sub>i</sub> = <em>m</em><sub>i</sub><em>g</em>, faktor <em>g</em> saling menghilangkan sehingga <em>x</em><sub>G</sub> = Σ<em>m</em><sub>i</sub><em>x</em><sub>i</sub> / Σ<em>m</em><sub>i</sub>. Inilah sebabnya titik berat sering disamakan dengan <strong>pusat massa</strong>.
      </div>

      <div class="sub">
        <h3><span class="no">4.1</span>Benda homogen berdimensi 1, 2, dan 3</h3>
        <p>Untuk benda homogen, berat sebanding dengan panjang, luas, atau volume. Karena itu, <em>w</em><sub>i</sub> pada rumus di atas boleh diganti:</p>
        <div class="tabel-wrap">
          <table>
            <thead>
              <tr><th>Bentuk benda</th><th>Contoh</th><th>Rumus titik berat</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Garis (1 dimensi)</td><td>kawat, batang tipis</td>
                <td><math><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mo>Σ</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>L</mi><mi>i</mi></msub></mrow><mrow><mo>Σ</mo><msub><mi>L</mi><mi>i</mi></msub></mrow></mfrac></math></td>
              </tr>
              <tr>
                <td>Bidang (2 dimensi)</td><td>pelat tipis, karton</td>
                <td><math><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mo>Σ</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>A</mi><mi>i</mi></msub></mrow><mrow><mo>Σ</mo><msub><mi>A</mi><mi>i</mi></msub></mrow></mfrac></math></td>
              </tr>
              <tr>
                <td>Ruang (3 dimensi)</td><td>balok, kerucut, bola</td>
                <td><math><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mo>Σ</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>V</mi><mi>i</mi></msub></mrow><mrow><mo>Σ</mo><msub><mi>V</mi><mi>i</mi></msub></mrow></mfrac></math></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Rumus untuk <em>y</em><sub>0</sub> sama, hanya <em>x</em><sub>i</sub> diganti <em>y</em><sub>i</sub>. Keterangan: <em>L</em> = panjang (m), <em>A</em> = luas (m²), dan <em>V</em> = volume (m³).</p>
      </div>

      <div class="sub">
        <h3><span class="no">4.2</span>Contoh benda gabungan</h3>
        <p>Bidang berbentuk huruf L pada Gambar 3 dibagi menjadi dua persegi panjang.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/titik-berat-gabungan.svg" alt="Bidang berbentuk huruf L pada koordinat XY, dibagi menjadi dua persegi panjang. Bidang 1 berukuran 2 kali 6 dengan titik berat Z1 di 1 koma 3. Bidang 2 berukuran 4 kali 2 dengan titik berat Z2 di 4 koma 1. Titik berat gabungan Z berada di 2,2 koma 2,2, pada garis yang menghubungkan Z1 dan Z2, dan terletak di luar bidang." />
          </div>
          <figcaption><strong>Gambar 3.</strong> Titik berat gabungan Z terletak pada garis yang menghubungkan Z<sub>1</sub> dan Z<sub>2</sub>. Pada bentuk L ini, Z justru berada di luar bidang.</figcaption>
        </figure>

        <ol class="langkah">
          <li>Bidang 1: ukuran 2 × 6, sehingga <em>A</em><sub>1</sub> = 12 dan titik beratnya Z<sub>1</sub>(1, 3).</li>
          <li>Bidang 2: ukuran 4 × 2, sehingga <em>A</em><sub>2</sub> = 8 dan titik beratnya Z<sub>2</sub>(4, 1).</li>
          <li><em>x</em><sub>0</sub> = (12 · 1 + 8 · 4) / (12 + 8) = 44/20 = 2,2.</li>
          <li><em>y</em><sub>0</sub> = (12 · 3 + 8 · 1) / (12 + 8) = 44/20 = 2,2.</li>
          <li>Jadi, titik berat bidang L terletak di (2,2; 2,2).</li>
        </ol>
      </div>
    </section>

    <!-- ============ 5. TABEL TITIK BERAT ============ -->
    <section class="bagian" id="tabel-titik-berat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Titik berat benda homogen</h2>
      </div>

      <p>Letak titik berat (Z) beberapa benda homogen yang sering muncul di soal. Nilai <em>y</em><sub>0</sub> diukur dari <strong>alas</strong> atau <strong>garis tengah</strong> benda.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/titik-berat-bangun.svg" alt="Letak titik berat Z empat benda homogen, diukur dari alasnya. Segitiga: sepertiga tinggi. Bidang setengah lingkaran: empat R per tiga pi. Kerucut pejal: seperempat tinggi. Setengah bola pejal: tiga per delapan R." />
        </div>
        <figcaption><strong>Gambar 4.</strong> Letak titik berat beberapa benda homogen, diukur dari alasnya.</figcaption>
      </figure>

      <div class="sub">
        <h3><span class="no">5.1</span>Benda berbentuk garis</h3>
        <div class="tabel-wrap">
          <table>
            <thead>
              <tr><th>Benda</th><th>Letak titik berat</th><th>Keterangan</th></tr>
            </thead>
            <tbody>
              <tr><td>Garis lurus</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>l</mi></math></td><td>di titik tengah garis</td></tr>
              <tr><td>Busur lingkaran</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mtext>tali busur AB</mtext><mtext>busur AB</mtext></mfrac><mi>R</mi></math></td><td>diukur dari pusat lingkaran</td></tr>
              <tr><td>Busur setengah lingkaran</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>R</mi></mrow><mi>π</mi></mfrac></math></td><td>diukur dari garis tengah</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">5.2</span>Benda berbentuk bidang</h3>
        <div class="tabel-wrap">
          <table>
            <thead>
              <tr><th>Benda</th><th>Letak titik berat</th><th>Keterangan</th></tr>
            </thead>
            <tbody>
              <tr><td>Segitiga</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>t</mi></math></td><td><em>t</em> = tinggi; di perpotongan ketiga garis berat</td></tr>
              <tr><td>Persegi, persegi panjang, jajargenjang, belah ketupat</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>t</mi></math></td><td>di perpotongan kedua diagonal</td></tr>
              <tr><td>Juring lingkaran</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>R</mi><mo>×</mo><mfrac><mtext>tali busur AB</mtext><mtext>busur AB</mtext></mfrac></math></td><td>diukur dari pusat lingkaran</td></tr>
              <tr><td>Setengah lingkaran</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>R</mi></mrow><mrow><mn>3</mn><mi>π</mi></mrow></mfrac></math></td><td>diukur dari garis tengah</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">5.3</span>Benda berbentuk ruang</h3>
        <div class="tabel-wrap">
          <table>
            <thead>
              <tr><th>Benda</th><th>Letak titik berat</th><th>Volume</th></tr>
            </thead>
            <tbody>
              <tr><td>Kerucut pejal</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>t</mi></math></td><td><math><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi>t</mi></math></td></tr>
              <tr><td>Silinder pejal</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>t</mi></math></td><td><math><mi>V</mi><mo>=</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mi>t</mi></math></td></tr>
              <tr><td>Setengah bola pejal</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>8</mn></mfrac><mi>R</mi></math></td><td><math><mi>V</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>R</mi><mn>3</mn></msup></math></td></tr>
              <tr><td>Bola pejal</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mi>R</mi></math> (di pusat bola)</td><td><math><mi>V</mi><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>R</mi><mn>3</mn></msup></math></td></tr>
              <tr><td>Selimut kerucut (berongga)</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>t</mi></math></td><td>–</td></tr>
              <tr><td>Setengah bola berongga (kulit)</td><td><math><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>R</mi></math></td><td>–</td></tr>
            </tbody>
          </table>
        </div>
        <p>Keterangan: <em>t</em> = tinggi benda (m) dan <em>R</em> = jari-jari (m). Untuk benda pejal gabungan, pakai volume sebagai bobot; untuk benda berongga (kulit), pakai luas permukaan.</p>
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Konsep</th><th>Rumus</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Keseimbangan partikel</td>
              <td><math><mo>Σ</mo><msub><mi>F</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn><mo>;</mo><mo>Σ</mo><msub><mi>F</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></math></td>
            </tr>
            <tr>
              <td>Keseimbangan benda tegar</td>
              <td><math><mo>Σ</mo><mi>F</mi><mo>=</mo><mn>0</mn><mo>;</mo><mo>Σ</mo><mi>τ</mi><mo>=</mo><mn>0</mn></math></td>
            </tr>
            <tr>
              <td>Titik berat (berat)</td>
              <td><math><msub><mi>x</mi><mi>G</mi></msub><mo>=</mo><mfrac><mrow><mo>Σ</mo><msub><mi>w</mi><mi>i</mi></msub><msub><mi>x</mi><mi>i</mi></msub></mrow><mrow><mo>Σ</mo><msub><mi>w</mi><mi>i</mi></msub></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Titik berat garis, bidang, ruang</td>
              <td><math><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mo>Σ</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>L</mi><mi>i</mi></msub></mrow><mrow><mo>Σ</mo><msub><mi>L</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo><mfrac><mrow><mo>Σ</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>A</mi><mi>i</mi></msub></mrow><mrow><mo>Σ</mo><msub><mi>A</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo><mfrac><mrow><mo>Σ</mo><msub><mi>x</mi><mi>i</mi></msub><msub><mi>V</mi><mi>i</mi></msub></mrow><mrow><mo>Σ</mo><msub><mi>V</mi><mi>i</mi></msub></mrow></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

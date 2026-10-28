/* ====== Bab 1-7 · Penerapan Hukum Newton ====== */

import { Chapter } from '../../materials';

export const penerapanHukumNewton: Chapter = {
  chapterId: "1-7",
  title: "Penerapan Hukum Newton",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Dinamika</span>
      <h1>Penerapan Hukum Newton</h1>
      <p>Rangkuman jenis-jenis gaya, gaya gesek, diagram benda bebas, dan cara memakai hukum Newton pada bidang datar, bidang miring, lift, serta katrol.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#jenis-gaya">Jenis-jenis gaya</a></li>
        <li><a href="#gaya-gesek">Gaya gesek</a></li>
        <li><a href="#dbb">Diagram benda bebas</a></li>
        <li><a href="#bidang-datar">Benda pada bidang datar</a></li>
        <li><a href="#bidang-miring">Benda pada bidang miring</a></li>
        <li><a href="#lift">Gerak di dalam lift</a></li>
        <li><a href="#katrol">Sistem katrol</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. JENIS GAYA ============ -->
    <section class="bagian" id="jenis-gaya">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Jenis-jenis gaya</h2>
      </div>

      <p>Sebelum memakai hukum Newton, kita perlu mengenali gaya-gaya yang sering bekerja pada benda:</p>

      <div class="kartu">
        <span class="istilah">Gaya berat (w)</span>
        <p>Gaya gravitasi pada benda, <em>w</em> = <em>mg</em>. Arahnya selalu <strong>vertikal ke bawah</strong>, menuju pusat bumi.</p>
      </div>
      <div class="kartu">
        <span class="istilah">Gaya normal (N)</span>
        <p>Gaya dari permukaan yang menahan benda. Arahnya selalu <strong>tegak lurus</strong> bidang sentuh, menjauhi permukaan. Besarnya <strong>tidak selalu</strong> sama dengan berat.</p>
      </div>
      <div class="kartu">
        <span class="istilah">Gaya tegangan tali (T)</span>
        <p>Gaya pada benda yang ditarik tali. Arahnya <strong>sepanjang tali</strong>, menjauhi benda.</p>
      </div>
      <div class="kartu">
        <span class="istilah">Gaya gesek (f)</span>
        <p>Gaya yang muncul antara dua permukaan yang bersentuhan. Arahnya <strong>sejajar</strong> bidang sentuh dan <strong>berlawanan</strong> dengan arah gerak (atau kecenderungan gerak) benda.</p>
      </div>
    </section>

    <!-- ============ 2. GAYA GESEK ============ -->
    <section class="bagian" id="gaya-gesek">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Gaya gesek</h2>
      </div>

      <div class="sub">
        <h3><span class="no">2.1</span>Pengaruh gaya gesek terhadap benda</h3>
        <p>Gaya gesek selalu <strong>melawan</strong> gerak atau kecenderungan gerak benda. Akibatnya, benda yang didorong sulit mulai bergerak, dan benda yang meluncur lama-lama melambat hingga berhenti. Gaya gesek ada yang menguntungkan dan ada yang merugikan:</p>
        <div class="cabang">
          <div class="kartu">
            <h3>Menguntungkan</h3>
            <p>Kita bisa berjalan tanpa tergelincir, rem kendaraan bisa menghentikan roda, dan ban bisa mencengkeram jalan.</p>
          </div>
          <div class="kartu">
            <h3>Merugikan</h3>
            <p>Mesin dan ban menjadi aus, muncul panas pada bagian mesin, dan sebagian energi terbuang.</p>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">2.2</span>Gaya gesek statis dan kinetis</h3>

        <div class="kartu">
          <span class="istilah">Gaya gesek statis (f<sub>s</sub>)</span>
          <p>Bekerja saat benda masih <strong>diam</strong>. Nilainya menyesuaikan gaya tarik, dari nol sampai nilai maksimum <em>f</em><sub>s,maks</sub>.</p>
        </div>
        <div class="kartu">
          <span class="istilah">Gaya gesek kinetis (f<sub>k</sub>)</span>
          <p>Bekerja saat benda sudah <strong>bergerak</strong>. Nilainya tetap dan biasanya lebih kecil daripada <em>f</em><sub>s,maks</sub>.</p>
        </div>

        <div class="rumus">
          <div class="rumus-judul">Gaya gesek</div>
          <div class="rumus-isi">
            <math display="block" aria-label="f s maks sama dengan mu s N">
              <msub><mi>f</mi><mrow><mi>s</mi><mo>,</mo><mtext>maks</mtext></mrow></msub><mo>=</mo>
              <msub><mi>μ</mi><mi>s</mi></msub><mi>N</mi>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="f k sama dengan mu k N">
              <msub><mi>f</mi><mi>k</mi></msub><mo>=</mo><msub><mi>μ</mi><mi>k</mi></msub><mi>N</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>f<sub>s,maks</sub></dt><dd>gaya gesek statis maksimum <span class="satuan">(N)</span></dd>
              <dt>f<sub>k</sub></dt><dd>gaya gesek kinetis <span class="satuan">(N)</span></dd>
              <dt>μ<sub>s</sub></dt><dd>koefisien gesek statis (tanpa satuan)</dd>
              <dt>μ<sub>k</sub></dt><dd>koefisien gesek kinetis (tanpa satuan), μ<sub>k</sub> &lt; μ<sub>s</sub></dd>
              <dt>N</dt><dd>gaya normal <span class="satuan">(N)</span></dd>
            </dl>
          </div>
        </div>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/grafik-gaya-gesek.svg" alt="Grafik gaya gesek f terhadap gaya tarik F. Selama benda diam, f sama dengan F dan naik lurus hingga mencapai fs maks sama dengan mu s N. Setelah benda bergerak, gaya gesek turun ke fk sama dengan mu k N dan nilainya tetap." />
          </div>
          <figcaption><strong>Gambar 1.</strong> Gaya gesek terhadap gaya tarik. Benda mulai bergerak saat F melebihi <em>f</em><sub>s,maks</sub>.</figcaption>
        </figure>

        <p>Langkah menentukan gaya gesek yang bekerja:</p>
        <ol class="langkah">
          <li>Hitung gaya normal <em>N</em>, lalu hitung <em>f</em><sub>s,maks</sub> = μ<sub>s</sub><em>N</em>.</li>
          <li>Jika gaya tarik F ≤ <em>f</em><sub>s,maks</sub>, benda <strong>diam</strong> dan gaya geseknya <em>f</em> = F.</li>
          <li>Jika gaya tarik F &gt; <em>f</em><sub>s,maks</sub>, benda <strong>bergerak</strong> dan gaya geseknya <em>f</em> = <em>f</em><sub>k</sub> = μ<sub>k</sub><em>N</em>.</li>
        </ol>
      </div>
    </section>

    <!-- ============ 3. DIAGRAM BENDA BEBAS ============ -->
    <section class="bagian" id="dbb">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Diagram benda bebas</h2>
      </div>

      <p><strong>Diagram benda bebas</strong> (DBB) adalah gambar sebuah benda yang dipisahkan dari sekitarnya, lengkap dengan <strong>semua gaya yang bekerja padanya</strong>. DBB membantu kita menyusun persamaan hukum Newton dengan benar.</p>

      <p>Langkah-langkah menggambar DBB:</p>
      <ol class="langkah">
        <li>Pisahkan benda yang ditinjau, lalu gambar sebagai kotak atau titik.</li>
        <li>Gambar gaya berat <em>w</em> = <em>mg</em> vertikal ke bawah.</li>
        <li>Gambar gaya kontak: gaya normal <em>N</em>, tegangan tali <em>T</em>, gaya gesek <em>f</em>, dan gaya luar <em>F</em>.</li>
        <li>Pilih sumbu koordinat. Biasanya sumbu x searah gerak. Pada bidang miring, sumbu x dibuat sejajar bidang.</li>
        <li>Uraikan gaya yang miring terhadap sumbu menjadi komponen x dan y.</li>
        <li>Terapkan ΣF<sub>x</sub> = <em>ma</em> pada arah gerak dan ΣF<sub>y</sub> = 0 pada arah yang tegak lurus gerak.</li>
      </ol>
    </section>

    <!-- ============ 4. BIDANG DATAR ============ -->
    <section class="bagian" id="bidang-datar">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Benda pada bidang datar</h2>
      </div>

      <p>Balok bermassa <em>m</em> di lantai kasar ditarik gaya <em>F</em> yang membentuk sudut θ terhadap lantai.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/dbb-bidang-datar.svg" alt="Diagram benda bebas balok di lantai kasar. Gaya tarik F membentuk sudut theta dan diuraikan menjadi F cos theta mendatar dan F sin theta ke atas. Gaya normal N ke atas, berat w sama dengan mg ke bawah, dan gaya gesek f ke kiri berlawanan arah gerak." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Diagram benda bebas balok yang ditarik gaya miring di bidang datar.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Bidang datar, gaya tarik miring</div>
        <div class="rumus-isi">
          <math display="block" aria-label="sumbu y: N sama dengan m g dikurangi F sin theta">
            <mtext>sumbu y:</mtext><mspace width="0.5em"/>
            <mi>N</mi><mo>=</mo><mi>m</mi><mi>g</mi><mo>−</mo><mi>F</mi><mi>sin</mi><mi>θ</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="sumbu x: a sama dengan F cos theta dikurangi f, dibagi m">
            <mtext>sumbu x:</mtext><mspace width="0.5em"/>
            <mi>a</mi><mo>=</mo>
            <mfrac><mrow><mi>F</mi><mi>cos</mi><mi>θ</mi><mo>−</mo><mi>f</mi></mrow><mi>m</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>N</dt><dd>gaya normal <span class="satuan">(N)</span></dd>
            <dt>F</dt><dd>gaya tarik <span class="satuan">(N)</span></dd>
            <dt>θ</dt><dd>sudut gaya tarik terhadap lantai</dd>
            <dt>f</dt><dd>gaya gesek <span class="satuan">(N)</span></dd>
            <dt>a</dt><dd>percepatan balok <span class="satuan">(m/s²)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Kasus khusus</strong>
        Jika gaya tarik mendatar (θ = 0), maka <em>N</em> = <em>mg</em> dan <em>a</em> = (<em>F</em> − <em>f</em>)/<em>m</em>. Jika lantai licin, <em>f</em> = 0.
      </div>
    </section>

    <!-- ============ 5. BIDANG MIRING ============ -->
    <section class="bagian" id="bidang-miring">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Benda pada bidang miring</h2>
      </div>

      <p>Pada bidang miring bersudut θ, sumbu x dipilih sejajar bidang. Gaya berat diuraikan menjadi dua komponen: <em>w</em> sin θ sejajar bidang (menarik benda turun) dan <em>w</em> cos θ tegak lurus bidang (menekan bidang).</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/dbb-bidang-miring.svg" alt="Diagram benda bebas balok di bidang miring bersudut theta. Berat w diuraikan menjadi w sin theta sejajar bidang ke bawah dan w cos theta tegak lurus bidang ke dalam. Gaya normal N tegak lurus bidang ke luar, dan gaya gesek f sejajar bidang ke atas." />
        </div>
        <figcaption><strong>Gambar 3.</strong> Diagram benda bebas balok yang meluncur turun di bidang miring kasar.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Bidang miring</div>
        <div class="rumus-isi">
          <math display="block" aria-label="N sama dengan m g cos theta">
            <mi>N</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi>cos</mi><mi>θ</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="licin: a sama dengan g sin theta">
            <mtext>licin:</mtext><mspace width="0.5em"/>
            <mi>a</mi><mo>=</mo><mi>g</mi><mi>sin</mi><mi>θ</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="kasar: a sama dengan g dikali sin theta dikurangi mu k cos theta">
            <mtext>kasar:</mtext><mspace width="0.5em"/>
            <mi>a</mi><mo>=</mo><mi>g</mi>
            <mrow><mo>(</mo><mi>sin</mi><mi>θ</mi><mo>−</mo><msub><mi>μ</mi><mi>k</mi></msub><mi>cos</mi><mi>θ</mi><mo>)</mo></mrow>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>θ</dt><dd>sudut kemiringan bidang</dd>
            <dt>μ<sub>k</sub></dt><dd>koefisien gesek kinetis</dd>
            <dt>a</dt><dd>percepatan benda menuruni bidang <span class="satuan">(m/s²)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Benda tetap diam di bidang miring?</strong>
        Benda tidak meluncur selama <em>w</em> sin θ ≤ <em>f</em><sub>s,maks</sub>, atau setara dengan tan θ ≤ μ<sub>s</sub>.
      </div>
    </section>

    <!-- ============ 6. LIFT ============ -->
    <section class="bagian" id="lift">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Gerak di dalam lift</h2>
      </div>

      <p>Orang bermassa <em>m</em> berdiri di dalam lift. Gaya yang bekerja padanya adalah berat <em>mg</em> ke bawah dan gaya normal <em>N</em> dari lantai lift ke atas. Gaya normal inilah yang terbaca pada timbangan, sehingga disebut juga <strong>berat semu</strong>.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Keadaan lift</th><th>Arah percepatan</th><th>Gaya normal</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Diam atau bergerak dengan kecepatan tetap</td><td>Tidak ada (a = 0)</td>
              <td><math><mi>N</mi><mo>=</mo><mi>m</mi><mi>g</mi></math></td>
            </tr>
            <tr>
              <td>Naik dipercepat atau turun diperlambat</td><td>Ke atas</td>
              <td><math><mi>N</mi><mo>=</mo><mi>m</mi><mo>(</mo><mi>g</mi><mo>+</mo><mi>a</mi><mo>)</mo></math></td>
            </tr>
            <tr>
              <td>Naik diperlambat atau turun dipercepat</td><td>Ke bawah</td>
              <td><math><mi>N</mi><mo>=</mo><mi>m</mi><mo>(</mo><mi>g</mi><mo>−</mo><mi>a</mi><mo>)</mo></math></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Kenapa terasa lebih berat?</strong>
        Saat lift mulai naik, percepatannya ke atas sehingga <em>N</em> &gt; <em>mg</em> dan tubuh terasa lebih berat. Jika tali lift putus (jatuh bebas, <em>a</em> = <em>g</em>), maka <em>N</em> = 0 dan orang di dalamnya merasa tanpa bobot.
      </div>
    </section>

    <!-- ============ 7. KATROL ============ -->
    <section class="bagian" id="katrol">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">7</span>
        <h2>Sistem katrol</h2>
      </div>

      <p>Dua benda bermassa <em>m</em><sub>A</sub> dan <em>m</em><sub>B</sub> (dengan <em>m</em><sub>B</sub> &gt; <em>m</em><sub>A</sub>) dihubungkan tali melalui sebuah katrol. Massa tali dan katrol serta gesekan katrol diabaikan, sehingga tegangan tali di kedua sisi sama besar dan kedua benda bergerak dengan percepatan yang sama besar.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/katrol.svg" alt="Dua benda tergantung pada tali yang melewati katrol. Pada benda A dan B bekerja tegangan tali T ke atas serta berat mA g dan mB g ke bawah. Benda B yang lebih berat bergerak turun dengan percepatan a, sedangkan benda A naik dengan percepatan a." />
        </div>
        <figcaption><strong>Gambar 4.</strong> Dua benda tergantung pada katrol. Benda yang lebih berat bergerak turun.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Dua benda tergantung pada katrol</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a sama dengan m B dikurangi m A, dikali g, dibagi m A ditambah m B">
            <mi>a</mi><mo>=</mo>
            <mfrac>
              <mrow><mo>(</mo><msub><mi>m</mi><mi>B</mi></msub><mo>−</mo><msub><mi>m</mi><mi>A</mi></msub><mo>)</mo><mi>g</mi></mrow>
              <mrow><msub><mi>m</mi><mi>A</mi></msub><mo>+</mo><msub><mi>m</mi><mi>B</mi></msub></mrow>
            </mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="T sama dengan 2 m A m B g dibagi m A ditambah m B">
            <mi>T</mi><mo>=</mo>
            <mfrac>
              <mrow><mn>2</mn><msub><mi>m</mi><mi>A</mi></msub><msub><mi>m</mi><mi>B</mi></msub><mi>g</mi></mrow>
              <mrow><msub><mi>m</mi><mi>A</mi></msub><mo>+</mo><msub><mi>m</mi><mi>B</mi></msub></mrow>
            </mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>a</dt><dd>percepatan sistem <span class="satuan">(m/s²)</span></dd>
            <dt>T</dt><dd>tegangan tali <span class="satuan">(N)</span></dd>
            <dt>m<sub>A</sub>, m<sub>B</sub></dt><dd>massa benda A dan B <span class="satuan">(kg)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Cara cepat menghitung percepatan sistem</strong>
        a = (jumlah gaya yang searah gerak − jumlah gaya yang melawan gerak) ÷ (jumlah semua massa). Contoh: jika benda A berada di meja kasar dan benda B tergantung, maka <em>a</em> = (<em>m</em><sub>B</sub><em>g</em> − μ<sub>k</sub><em>m</em><sub>A</sub><em>g</em>) / (<em>m</em><sub>A</sub> + <em>m</em><sub>B</sub>).
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Keadaan</th><th>Gaya normal</th><th>Percepatan</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Bidang datar, F mendatar</td>
              <td><math><mi>N</mi><mo>=</mo><mi>m</mi><mi>g</mi></math></td>
              <td><math><mi>a</mi><mo>=</mo><mfrac><mrow><mi>F</mi><mo>−</mo><mi>f</mi></mrow><mi>m</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Bidang datar, F miring</td>
              <td><math><mi>N</mi><mo>=</mo><mi>m</mi><mi>g</mi><mo>−</mo><mi>F</mi><mi>sin</mi><mi>θ</mi></math></td>
              <td><math><mi>a</mi><mo>=</mo><mfrac><mrow><mi>F</mi><mi>cos</mi><mi>θ</mi><mo>−</mo><mi>f</mi></mrow><mi>m</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Bidang miring kasar</td>
              <td><math><mi>N</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi>cos</mi><mi>θ</mi></math></td>
              <td><math><mi>a</mi><mo>=</mo><mi>g</mi><mo>(</mo><mi>sin</mi><mi>θ</mi><mo>−</mo><msub><mi>μ</mi><mi>k</mi></msub><mi>cos</mi><mi>θ</mi><mo>)</mo></math></td>
            </tr>
            <tr>
              <td>Lift, percepatan ke atas</td>
              <td><math><mi>N</mi><mo>=</mo><mi>m</mi><mo>(</mo><mi>g</mi><mo>+</mo><mi>a</mi><mo>)</mo></math></td>
              <td>–</td>
            </tr>
            <tr>
              <td>Katrol dua benda</td>
              <td>–</td>
              <td><math><mi>a</mi><mo>=</mo><mfrac><mrow><mo>(</mo><msub><mi>m</mi><mi>B</mi></msub><mo>−</mo><msub><mi>m</mi><mi>A</mi></msub><mo>)</mo><mi>g</mi></mrow><mrow><msub><mi>m</mi><mi>A</mi></msub><mo>+</mo><msub><mi>m</mi><mi>B</mi></msub></mrow></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

/* ====== Bab 3-4 · Teori Kinetik Gas ====== */

import { Chapter } from '../../materials';

export const teoriKinetikGas: Chapter = {
  chapterId: "3-4",
  title: "Teori Kinetik Gas",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Termodinamika</span>
      <h1>Teori Kinetik Gas</h1>
      <p>Rangkuman sifat gas ideal, mol dan bilangan Avogadro, hukum-hukum gas, persamaan keadaan gas ideal, tekanan dan energi kinetik molekul, kecepatan efektif, serta energi dalam gas.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#gas-ideal">Gas ideal</a></li>
        <li><a href="#mol">Mol dan bilangan Avogadro</a></li>
        <li><a href="#hukum-gas">Hukum-hukum gas</a></li>
        <li><a href="#persamaan-keadaan">Persamaan keadaan gas ideal</a></li>
        <li><a href="#tekanan">Tekanan gas menurut teori kinetik</a></li>
        <li><a href="#energi-kinetik">Suhu, energi kinetik, dan kecepatan efektif</a></li>
        <li><a href="#energi-dalam">Ekipartisi energi dan energi dalam</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. GAS IDEAL ============ -->
    <section class="bagian" id="gas-ideal">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Gas ideal</h2>
      </div>

      <p><strong>Teori kinetik gas</strong> menjelaskan sifat gas yang bisa diukur, seperti tekanan dan suhu, dari gerak molekul-molekulnya yang tidak terlihat. Agar perhitungannya sederhana, gas dimodelkan sebagai <strong>gas ideal</strong> dengan anggapan berikut:</p>

      <ul class="poin">
        <li>Gas terdiri atas sangat banyak molekul identik yang bergerak <strong>acak</strong> ke segala arah dan memenuhi hukum Newton.</li>
        <li>Ukuran molekul sangat kecil dibandingkan jarak antarmolekul, sehingga volume molekul dapat diabaikan.</li>
        <li>Tidak ada gaya tarik-menarik antarmolekul, kecuali saat bertumbukan.</li>
        <li>Tumbukan antarmolekul dan antara molekul dengan dinding bersifat <strong>lenting sempurna</strong>, sehingga energi kinetik total tetap.</li>
      </ul>

      <p>Gas nyata, seperti udara, berperilaku mendekati gas ideal jika tekanannya rendah dan suhunya jauh di atas titik cairnya.</p>
    </section>

    <!-- ============ 2. MOL ============ -->
    <section class="bagian" id="mol">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Mol dan bilangan Avogadro</h2>
      </div>

      <p>Jumlah molekul gas sangat besar, sehingga lebih praktis dinyatakan dalam <strong>mol</strong>. Satu mol zat berisi 6,02 × 10<sup>23</sup> partikel. Angka ini disebut <strong>bilangan Avogadro</strong> <em>N</em><sub>A</sub>.</p>

      <div class="rumus">
        <div class="rumus-judul">Jumlah mol</div>
        <div class="rumus-isi">
          <math display="block" aria-label="n sama dengan m per M r sama dengan N per N A">
            <mi>n</mi><mo>=</mo><mfrac><mi>m</mi><msub><mi>M</mi><mi>r</mi></msub></mfrac><mo>=</mo><mfrac><mi>N</mi><msub><mi>N</mi><mi>A</mi></msub></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>n</dt><dd>jumlah mol <span class="satuan">(mol)</span></dd>
            <dt>m</dt><dd>massa gas <span class="satuan">(g)</span></dd>
            <dt>M<sub>r</sub></dt><dd>massa molekul relatif <span class="satuan">(g/mol)</span></dd>
            <dt>N</dt><dd>jumlah molekul</dd>
            <dt>N<sub>A</sub></dt><dd>bilangan Avogadro, 6,02 × 10<sup>23</sup> <span class="satuan">(/mol)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Gas oksigen O₂ (<em>M</em><sub>r</sub> = 32) bermassa 8 g berjumlah <em>n</em> = 8/32 = 0,25 mol, atau <em>N</em> = 0,25 × 6,02 × 10<sup>23</sup> ≈ 1,5 × 10<sup>23</sup> molekul.
      </div>
    </section>

    <!-- ============ 3. HUKUM GAS ============ -->
    <section class="bagian" id="hukum-gas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Hukum-hukum gas</h2>
      </div>

      <p>Keadaan gas di dalam wadah tertutup ditentukan oleh tiga besaran: tekanan <em>P</em>, volume <em>V</em>, dan suhu mutlak <em>T</em>. Jika salah satunya dijaga tetap, dua besaran lainnya memiliki hubungan sederhana.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/grafik-hukum-gas.svg" alt="Tiga grafik hukum gas. Hukum Boyle pada suhu tetap: grafik tekanan P terhadap volume V berbentuk hiperbola, dan kurva untuk suhu T2 yang lebih tinggi berada lebih jauh dari sumbu. Hukum Charles pada tekanan tetap: grafik volume V terhadap suhu mutlak T berupa garis lurus yang jika diperpanjang melalui titik nol kelvin. Hukum Gay-Lussac pada volume tetap: grafik tekanan P terhadap suhu mutlak T juga berupa garis lurus melalui titik nol." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Grafik hukum Boyle (dengan <em>T</em><sub>2</sub> &gt; <em>T</em><sub>1</sub>), hukum Charles, dan hukum Gay-Lussac.</figcaption>
      </figure>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Hukum</th><th>Besaran tetap</th><th>Hubungan</th><th>Contoh</th></tr>
          </thead>
          <tbody>
            <tr><td>Boyle</td><td>suhu</td><td><em>P</em><sub>1</sub><em>V</em><sub>1</sub> = <em>P</em><sub>2</sub><em>V</em><sub>2</sub></td><td>pompa sepeda: volume ditekan, tekanan naik</td></tr>
            <tr><td>Charles</td><td>tekanan</td><td><em>V</em><sub>1</sub>/<em>T</em><sub>1</sub> = <em>V</em><sub>2</sub>/<em>T</em><sub>2</sub></td><td>balon mengembang saat dijemur</td></tr>
            <tr><td>Gay-Lussac</td><td>volume</td><td><em>P</em><sub>1</sub>/<em>T</em><sub>1</sub> = <em>P</em><sub>2</sub>/<em>T</em><sub>2</sub></td><td>kaleng semprot bisa meledak jika dibakar</td></tr>
          </tbody>
        </table>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Hukum Boyle-Gay Lussac (gabungan)</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P 1 V 1 per T 1 sama dengan P 2 V 2 per T 2">
            <mfrac><mrow><msub><mi>P</mi><mn>1</mn></msub><msub><mi>V</mi><mn>1</mn></msub></mrow><msub><mi>T</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>P</mi><mn>2</mn></msub><msub><mi>V</mi><mn>2</mn></msub></mrow><msub><mi>T</mi><mn>2</mn></msub></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>P</dt><dd>tekanan gas <span class="satuan">(Pa atau atm)</span></dd>
            <dt>V</dt><dd>volume gas <span class="satuan">(m³ atau L)</span></dd>
            <dt>T</dt><dd>suhu mutlak <span class="satuan">(K)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Suhu wajib dalam kelvin</strong>
        Semua hukum gas memakai suhu mutlak. Satuan tekanan dan volume boleh bebas (atm, L, dan sebagainya) asalkan sama di kedua ruas, tetapi suhu harus selalu diubah ke kelvin.
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Gas bervolume 2 L bersuhu 27 °C dipanaskan pada tekanan tetap sampai 127 °C. <em>V</em><sub>2</sub> = <em>V</em><sub>1</sub> × <em>T</em><sub>2</sub>/<em>T</em><sub>1</sub> = 2 × 400/300 ≈ 2,67 L.
      </div>
    </section>

    <!-- ============ 4. PERSAMAAN KEADAAN ============ -->
    <section class="bagian" id="persamaan-keadaan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Persamaan keadaan gas ideal</h2>
      </div>

      <p>Hukum-hukum gas dapat digabung menjadi satu persamaan yang berlaku untuk sembarang jumlah gas.</p>

      <div class="rumus">
        <div class="rumus-judul">Persamaan gas ideal</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P V sama dengan n R T sama dengan N k T">
            <mi>P</mi><mi>V</mi><mo>=</mo><mi>n</mi><mi>R</mi><mi>T</mi><mo>=</mo><mi>N</mi><mi>k</mi><mi>T</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>P</dt><dd>tekanan <span class="satuan">(Pa)</span></dd>
            <dt>V</dt><dd>volume <span class="satuan">(m³)</span></dd>
            <dt>R</dt><dd>tetapan gas umum, 8,31 <span class="satuan">(J/mol K)</span></dd>
            <dt>k</dt><dd>tetapan Boltzmann, k = R/N<sub>A</sub> = 1,38 × 10<sup>−23</sup> <span class="satuan">(J/K)</span></dd>
            <dt>T</dt><dd>suhu mutlak <span class="satuan">(K)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Sebanyak 2 mol gas bersuhu 27 °C berada dalam tabung 0,05 m³. Tekanannya <em>P</em> = <em>nRT</em>/<em>V</em> = (2 × 8,31 × 300)/0,05 ≈ 1,0 × 10<sup>5</sup> Pa, kira-kira sama dengan tekanan udara luar (1 atm = 1,01 × 10<sup>5</sup> Pa).
      </div>

      <p>Pada keadaan standar (0 °C dan 1 atm), satu mol gas apa pun menempati volume 22,4 L.</p>
    </section>

    <!-- ============ 5. TEKANAN ============ -->
    <section class="bagian" id="tekanan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Tekanan gas menurut teori kinetik</h2>
      </div>

      <p>Tekanan gas timbul dari tumbukan molekul-molekul yang terus-menerus menghantam dinding wadah. Setiap tumbukan memberi dorongan kecil, dan jutaan tumbukan setiap sekon menghasilkan gaya yang rata.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/molekul-dalam-kubus.svg" alt="Wadah berbentuk kubus dengan rusuk L berisi banyak molekul gas yang bergerak acak. Satu molekul bermassa m bergerak dengan kecepatan v x menuju dinding A di sebelah kanan, lalu memantul kembali dengan kecepatan minus v x. Tumbukan molekul-molekul dengan dinding inilah yang menimbulkan tekanan gas." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Molekul yang memantul pada dinding A memberikan impuls pada dinding.</figcaption>
      </figure>

      <ol class="langkah">
        <li>Sebuah molekul bermassa <em>m</em> menumbuk dinding A dengan kecepatan <em>v</em><sub>x</sub> dan memantul dengan −<em>v</em><sub>x</sub>. Perubahan momentumnya 2<em>mv</em><sub>x</sub>.</li>
        <li>Molekul itu bolak-balik sejauh 2<em>L</em> sebelum menumbuk dinding A lagi, sehingga selang waktu antartumbukan 2<em>L</em>/<em>v</em><sub>x</sub>. Gaya rata-ratanya <em>F</em> = 2<em>mv</em><sub>x</sub>/(2<em>L</em>/<em>v</em><sub>x</sub>) = <em>mv</em><sub>x</sub>²/<em>L</em>.</li>
        <li>Molekul bergerak acak, sehingga rata-rata <em>v</em><sub>x</sub>² = <em>v</em><sub>y</sub>² = <em>v</em><sub>z</sub>² = ⅓ <em>v</em>². Untuk <em>N</em> molekul, gaya totalnya <em>Nm</em>(rata-rata <em>v</em>²)/(3<em>L</em>).</li>
        <li>Tekanan adalah gaya dibagi luas dinding <em>L</em>², dan <em>L</em>³ = <em>V</em>. Hasilnya adalah rumus di bawah.</li>
      </ol>

      <div class="rumus">
        <div class="rumus-judul">Tekanan gas ideal</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P sama dengan sepertiga N m v kuadrat rata-rata per V sama dengan dua pertiga N per V dikali E k">
            <mi>P</mi><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mfrac><mrow><mi>N</mi><mi>m</mi><mover><msup><mi>v</mi><mn>2</mn></msup><mo>‾</mo></mover></mrow><mi>V</mi></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mfrac><mi>N</mi><mi>V</mi></mfrac><msub><mover><mi>E</mi><mo>‾</mo></mover><mi>k</mi></msub>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>v²</dt><dd>rata-rata kuadrat kecepatan molekul <span class="satuan">(m²/s²)</span></dd>
            <dt>E<sub>k</sub></dt><dd>energi kinetik rata-rata satu molekul, ½mv² <span class="satuan">(J)</span></dd>
            <dt>N/V</dt><dd>banyak molekul per satuan volume <span class="satuan">(/m³)</span></dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ 6. ENERGI KINETIK ============ -->
    <section class="bagian" id="energi-kinetik">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Suhu, energi kinetik, dan kecepatan efektif</h2>
      </div>

      <p>Jika persamaan tekanan dibandingkan dengan <em>PV</em> = <em>NkT</em>, diperoleh hubungan yang sangat penting: <strong>suhu gas sebanding dengan energi kinetik rata-rata molekulnya</strong>. Makin panas gas, makin cepat molekulnya bergerak.</p>

      <div class="rumus">
        <div class="rumus-judul">Energi kinetik dan kecepatan efektif</div>
        <div class="rumus-isi">
          <math display="block" aria-label="E k sama dengan tiga per dua k T">
            <msub><mover><mi>E</mi><mo>‾</mo></mover><mi>k</mi></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>k</mi><mi>T</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="v r m s sama dengan akar 3 k T per m sama dengan akar 3 R T per M r sama dengan akar 3 P per rho">
            <msub><mi>v</mi><mtext>rms</mtext></msub><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><mi>k</mi><mi>T</mi></mrow><mi>m</mi></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><mi>R</mi><mi>T</mi></mrow><msub><mi>M</mi><mi>r</mi></msub></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><mi>P</mi></mrow><mi>ρ</mi></mfrac></msqrt>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>v<sub>rms</sub></dt><dd>kecepatan efektif (akar rata-rata kuadrat kecepatan) <span class="satuan">(m/s)</span></dd>
            <dt>m</dt><dd>massa satu molekul <span class="satuan">(kg)</span></dd>
            <dt>M<sub>r</sub></dt><dd>massa molar, dalam rumus ini harus dalam <span class="satuan">kg/mol</span></dd>
            <dt>ρ</dt><dd>massa jenis gas <span class="satuan">(kg/m³)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Kecepatan efektif molekul oksigen (<em>M</em><sub>r</sub> = 32 g/mol = 0,032 kg/mol) pada 300 K: <em>v</em><sub>rms</sub> = √(3 × 8,31 × 300/0,032) ≈ 483 m/s, lebih cepat daripada bunyi di udara.
      </div>

      <ul class="poin">
        <li>Energi kinetik rata-rata hanya bergantung pada suhu, tidak pada jenis gas. Pada suhu yang sama, molekul hidrogen dan oksigen memiliki energi kinetik rata-rata yang sama.</li>
        <li>Kecepatan efektif berbanding terbalik dengan akar massa molekul. Molekul hidrogen yang 16 kali lebih ringan bergerak 4 kali lebih cepat daripada oksigen pada suhu yang sama.</li>
        <li>Jika suhu mutlak dijadikan 4 kali semula, energi kinetik menjadi 4 kali, tetapi kecepatan efektif hanya menjadi 2 kali.</li>
      </ul>
    </section>

    <!-- ============ 7. ENERGI DALAM ============ -->
    <section class="bagian" id="energi-dalam">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">7</span>
        <h2>Ekipartisi energi dan energi dalam</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Teorema ekipartisi energi</span>
        <p>Setiap <strong>derajat kebebasan</strong> gerak molekul, yaitu setiap cara bebas molekul menyimpan energi, memiliki energi rata-rata sebesar <strong>½ kT</strong>.</p>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Jenis gas</th><th>Gerak yang aktif</th><th>Derajat kebebasan f</th></tr>
          </thead>
          <tbody>
            <tr><td>Monoatomik (He, Ne, Ar)</td><td>translasi</td><td>3</td></tr>
            <tr><td>Diatomik suhu rendah</td><td>translasi</td><td>3</td></tr>
            <tr><td>Diatomik suhu sedang (H₂, N₂, O₂ pada suhu kamar)</td><td>translasi + rotasi</td><td>5</td></tr>
            <tr><td>Diatomik suhu tinggi (sekitar 1.000 K ke atas)</td><td>translasi + rotasi + vibrasi</td><td>7</td></tr>
          </tbody>
        </table>
      </div>

      <p><strong>Energi dalam</strong> <em>U</em> gas ideal adalah jumlah energi kinetik seluruh molekulnya. Karena tidak ada gaya antarmolekul, gas ideal tidak memiliki energi potensial antarmolekul, sehingga energi dalamnya hanya bergantung pada suhu.</p>

      <div class="rumus">
        <div class="rumus-judul">Energi dalam gas ideal</div>
        <div class="rumus-isi">
          <math display="block" aria-label="U sama dengan f per 2 N k T sama dengan f per 2 n R T">
            <mi>U</mi><mo>=</mo><mfrac><mi>f</mi><mn>2</mn></mfrac><mi>N</mi><mi>k</mi><mi>T</mi><mo>=</mo><mfrac><mi>f</mi><mn>2</mn></mfrac><mi>n</mi><mi>R</mi><mi>T</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>U</dt><dd>energi dalam gas <span class="satuan">(J)</span></dd>
            <dt>f</dt><dd>derajat kebebasan (monoatomik f = 3, sehingga U = <sup>3</sup>⁄<sub>2</sub> nRT)</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Batas suhu dalam soal</strong>
        Batas antara suhu rendah, sedang, dan tinggi untuk gas diatomik berbeda-beda untuk setiap gas. Dalam soal, keterangan suhunya biasanya sudah diberikan. Jika tidak disebutkan, gas diatomik pada suhu kamar dianggap memiliki <em>f</em> = 5.
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
              <td>Jumlah mol</td><td>mol</td>
              <td><math><mi>n</mi><mo>=</mo><mfrac><mi>m</mi><msub><mi>M</mi><mi>r</mi></msub></mfrac><mo>=</mo><mfrac><mi>N</mi><msub><mi>N</mi><mi>A</mi></msub></mfrac></math></td>
            </tr>
            <tr>
              <td>Hukum gas gabungan</td><td>–</td>
              <td><math><mfrac><mrow><msub><mi>P</mi><mn>1</mn></msub><msub><mi>V</mi><mn>1</mn></msub></mrow><msub><mi>T</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>P</mi><mn>2</mn></msub><msub><mi>V</mi><mn>2</mn></msub></mrow><msub><mi>T</mi><mn>2</mn></msub></mfrac></math></td>
            </tr>
            <tr>
              <td>Gas ideal</td><td>–</td>
              <td><math><mi>P</mi><mi>V</mi><mo>=</mo><mi>n</mi><mi>R</mi><mi>T</mi><mo>=</mo><mi>N</mi><mi>k</mi><mi>T</mi></math></td>
            </tr>
            <tr>
              <td>Tekanan gas</td><td>Pa</td>
              <td><math><mi>P</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mfrac><mi>N</mi><mi>V</mi></mfrac><msub><mover><mi>E</mi><mo>‾</mo></mover><mi>k</mi></msub></math></td>
            </tr>
            <tr>
              <td>Energi kinetik rata-rata</td><td>J</td>
              <td><math><msub><mover><mi>E</mi><mo>‾</mo></mover><mi>k</mi></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>k</mi><mi>T</mi></math></td>
            </tr>
            <tr>
              <td>Kecepatan efektif</td><td>m/s</td>
              <td><math><msub><mi>v</mi><mtext>rms</mtext></msub><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><mi>R</mi><mi>T</mi></mrow><msub><mi>M</mi><mi>r</mi></msub></mfrac></msqrt></math></td>
            </tr>
            <tr>
              <td>Energi dalam</td><td>J</td>
              <td><math><mi>U</mi><mo>=</mo><mfrac><mi>f</mi><mn>2</mn></mfrac><mi>n</mi><mi>R</mi><mi>T</mi></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

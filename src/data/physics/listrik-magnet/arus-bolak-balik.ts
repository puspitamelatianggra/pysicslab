/* ====== Bab 2-5 · Listrik Arus Bolak-balik ====== */

import { Chapter } from '../../materials';

export const arusBolakBalik: Chapter = {
  chapterId: "2-5",
  title: "Listrik Arus Bolak-balik",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Listrik dan Magnet</span>
      <h1>Listrik Arus Bolak-balik</h1>
      <p>Rangkuman tegangan dan arus bolak-balik, nilai efektif, reaktansi induktif dan kapasitif, rangkaian RLC seri, resonansi, serta daya dan faktor daya.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#tegangan-ac">Tegangan dan arus bolak-balik</a></li>
        <li><a href="#efektif">Nilai efektif dan nilai maksimum</a></li>
        <li><a href="#komponen">Resistor, induktor, dan kapasitor</a></li>
        <li><a href="#rlc">Rangkaian RLC seri</a></li>
        <li><a href="#resonansi">Resonansi</a></li>
        <li><a href="#daya-ac">Daya dan faktor daya</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. TEGANGAN AC ============ -->
    <section class="bagian" id="tegangan-ac">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Tegangan dan arus bolak-balik</h2>
      </div>

      <p><strong>Arus bolak-balik</strong> (<em>alternating current</em>, AC) adalah arus yang arah dan besarnya berubah secara periodik. Arus ini dihasilkan oleh generator AC, sehingga bentuknya mengikuti fungsi sinus. Listrik PLN di rumah adalah listrik arus bolak-balik bertegangan <strong>220 V</strong> dengan frekuensi <strong>50 Hz</strong>, artinya arahnya berbalik 100 kali setiap sekon.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/grafik-tegangan-ac.svg" alt="Grafik tegangan bolak-balik terhadap waktu berbentuk gelombang sinus. Puncaknya adalah tegangan maksimum V m dan lembahnya minus V m. Jarak puncak ke lembah adalah tegangan puncak ke puncak V p p sama dengan 2 V m. Garis tegangan efektif V ef berada pada V m dibagi akar 2, sekitar 0,71 V m. Satu gelombang penuh memerlukan waktu satu periode T." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Grafik tegangan bolak-balik. Garis oranye putus-putus adalah tegangan efektif.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Persamaan tegangan dan arus</div>
        <div class="rumus-isi">
          <math display="block" aria-label="V sama dengan V m sin omega t, dan I sama dengan I m sin omega t">
            <mi>V</mi><mo>=</mo><msub><mi>V</mi><mi>m</mi></msub><mi>sin</mi><mi>ω</mi><mi>t</mi>
            <mspace width="1.5em"/>
            <mi>I</mi><mo>=</mo><msub><mi>I</mi><mi>m</mi></msub><mi>sin</mi><mi>ω</mi><mi>t</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="omega sama dengan 2 pi f sama dengan 2 pi per T">
            <mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>f</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>V, I</dt><dd>tegangan dan arus sesaat <span class="satuan">(V, A)</span></dd>
            <dt>V<sub>m</sub>, I<sub>m</sub></dt><dd>tegangan dan arus maksimum <span class="satuan">(V, A)</span></dd>
            <dt>ω</dt><dd>frekuensi sudut <span class="satuan">(rad/s)</span></dd>
            <dt>f</dt><dd>frekuensi <span class="satuan">(Hz)</span></dd>
            <dt>T</dt><dd>periode <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ 2. NILAI EFEKTIF ============ -->
    <section class="bagian" id="efektif">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Nilai efektif dan nilai maksimum</h2>
      </div>

      <p>Karena nilainya terus berubah, tegangan AC dinyatakan dengan <strong>nilai efektif</strong>, yaitu nilai tegangan searah yang menghasilkan kalor sama besar pada hambatan yang sama dalam waktu yang sama. Angka "220 V" pada listrik PLN adalah tegangan efektif.</p>

      <div class="rumus">
        <div class="rumus-judul">Nilai efektif</div>
        <div class="rumus-isi">
          <math display="block" aria-label="V ef sama dengan V m per akar 2, dan I ef sama dengan I m per akar 2">
            <msub><mi>V</mi><mtext>ef</mtext></msub><mo>=</mo><mfrac><msub><mi>V</mi><mi>m</mi></msub><msqrt><mn>2</mn></msqrt></mfrac>
            <mspace width="1.5em"/>
            <msub><mi>I</mi><mtext>ef</mtext></msub><mo>=</mo><mfrac><msub><mi>I</mi><mi>m</mi></msub><msqrt><mn>2</mn></msqrt></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="V p p sama dengan 2 V m">
            <msub><mi>V</mi><mtext>pp</mtext></msub><mo>=</mo><mn>2</mn><msub><mi>V</mi><mi>m</mi></msub>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>V<sub>ef</sub>, I<sub>ef</sub></dt><dd>tegangan dan arus efektif <span class="satuan">(V, A)</span></dd>
            <dt>V<sub>pp</sub></dt><dd>tegangan puncak ke puncak <span class="satuan">(V)</span></dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li><strong>Voltmeter dan amperemeter AC</strong> (termasuk multimeter) menunjukkan nilai <strong>efektif</strong>.</li>
        <li><strong>Osiloskop</strong> menampilkan bentuk gelombang, sehingga yang terbaca langsung adalah nilai <strong>maksimum</strong> atau nilai puncak ke puncak.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Tegangan PLN 220 V adalah nilai efektif. Tegangan maksimumnya <em>V</em><sub>m</sub> = 220√2 ≈ 311 V, dan tegangan puncak ke puncaknya sekitar 622 V.
      </div>
    </section>

    <!-- ============ 3. KOMPONEN ============ -->
    <section class="bagian" id="komponen">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Resistor, induktor, dan kapasitor</h2>
      </div>

      <p>Dalam rangkaian AC, induktor dan kapasitor juga menghambat arus. Hambatan keduanya disebut <strong>reaktansi</strong>, dan nilainya bergantung pada frekuensi. Selain itu, tegangan dan arusnya tidak lagi mencapai puncak bersamaan. Selisih waktunya dinyatakan sebagai <strong>beda fase</strong> dan digambarkan dengan <strong>diagram fasor</strong>, yaitu vektor berputar yang panjangnya menyatakan nilai maksimum.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/fasor-rlc.svg" alt="Diagram fasor tegangan V dan arus I pada tiga komponen. Resistor: V dan I searah atau sefase. Induktor: fasor V tegak lurus ke atas, mendahului I sebesar 90 derajat. Kapasitor: fasor V tegak lurus ke bawah, sehingga I mendahului V sebesar 90 derajat." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Diagram fasor tegangan (oranye) dan arus (hitam) pada resistor, induktor, dan kapasitor.</figcaption>
      </figure>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Komponen</th><th>Hambatan</th><th>Hubungan fase</th><th>Pengaruh frekuensi</th></tr>
          </thead>
          <tbody>
            <tr><td>Resistor</td><td><em>R</em></td><td>V dan I sefase</td><td>tidak berpengaruh</td></tr>
            <tr><td>Induktor</td><td><em>X</em><sub>L</sub> = ω<em>L</em> = 2π<em>fL</em></td><td>V mendahului I 90°</td><td>makin besar jika <em>f</em> naik</td></tr>
            <tr><td>Kapasitor</td><td><em>X</em><sub>C</sub> = 1/(ω<em>C</em>) = 1/(2π<em>fC</em>)</td><td>I mendahului V 90°</td><td>makin kecil jika <em>f</em> naik</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Kapasitor memblokir arus searah</strong>
        Arus searah dapat dianggap memiliki <em>f</em> = 0, sehingga <em>X</em><sub>C</sub> menjadi tak hingga dan arus tidak dapat lewat. Sebaliknya, <em>X</em><sub>L</sub> menjadi nol, sehingga induktor hanya bersifat seperti kawat biasa. Sifat ini dipakai untuk memisahkan sinyal frekuensi tinggi dan rendah, misalnya pada rangkaian <em>crossover</em> pengeras suara.
      </div>
    </section>

    <!-- ============ 4. RLC SERI ============ -->
    <section class="bagian" id="rlc">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Rangkaian RLC seri</h2>
      </div>

      <p>Pada rangkaian seri, arus yang melewati <em>R</em>, <em>L</em>, dan <em>C</em> sama. Namun tegangannya tidak bisa dijumlahkan biasa, karena <em>V</em><sub>L</sub> dan <em>V</em><sub>C</sub> berbeda fase 90° dengan <em>V</em><sub>R</sub> dan saling berlawanan arah. Tegangan totalnya dijumlahkan secara vektor (fasor).</p>

      <div class="rumus">
        <div class="rumus-judul">Impedansi rangkaian RLC seri</div>
        <div class="rumus-isi">
          <math display="block" aria-label="Z sama dengan akar dari R kuadrat ditambah kurung X L dikurangi X C kuadrat">
            <mi>Z</mi><mo>=</mo><msqrt><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy="false">(</mo><msub><mi>X</mi><mi>L</mi></msub><mo>−</mo><msub><mi>X</mi><mi>C</mi></msub><mo stretchy="false">)</mo></mrow><mn>2</mn></msup></msqrt>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="V sama dengan akar dari V R kuadrat ditambah kurung V L dikurangi V C kuadrat">
            <mi>V</mi><mo>=</mo><msqrt><msubsup><mi>V</mi><mi>R</mi><mn>2</mn></msubsup><mo>+</mo><msup><mrow><mo stretchy="false">(</mo><msub><mi>V</mi><mi>L</mi></msub><mo>−</mo><msub><mi>V</mi><mi>C</mi></msub><mo stretchy="false">)</mo></mrow><mn>2</mn></msup></msqrt>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="I sama dengan V per Z, dan tan phi sama dengan X L dikurangi X C per R">
            <mi>I</mi><mo>=</mo><mfrac><mi>V</mi><mi>Z</mi></mfrac>
            <mspace width="1.5em"/>
            <mi>tan</mi><mi>φ</mi><mo>=</mo><mfrac><mrow><msub><mi>X</mi><mi>L</mi></msub><mo>−</mo><msub><mi>X</mi><mi>C</mi></msub></mrow><mi>R</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Z</dt><dd>impedansi, yaitu hambatan total rangkaian AC <span class="satuan">(Ω)</span></dd>
            <dt>V<sub>R</sub>, V<sub>L</sub>, V<sub>C</sub></dt><dd>tegangan pada R, L, dan C: IR, IX<sub>L</sub>, IX<sub>C</sub> <span class="satuan">(V)</span></dd>
            <dt>φ</dt><dd>beda fase antara tegangan total dan arus</dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Kondisi</th><th>Sifat rangkaian</th><th>Fase</th></tr>
          </thead>
          <tbody>
            <tr><td><em>X</em><sub>L</sub> &gt; <em>X</em><sub>C</sub></td><td>induktif</td><td>tegangan mendahului arus</td></tr>
            <tr><td><em>X</em><sub>L</sub> &lt; <em>X</em><sub>C</sub></td><td>kapasitif</td><td>arus mendahului tegangan</td></tr>
            <tr><td><em>X</em><sub>L</sub> = <em>X</em><sub>C</sub></td><td>resistif (resonansi)</td><td>sefase</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Rangkaian seri dengan <em>R</em> = 60 Ω, <em>X</em><sub>L</sub> = 120 Ω, dan <em>X</em><sub>C</sub> = 40 Ω dihubungkan ke tegangan efektif 200 V. Impedansinya <em>Z</em> = √(60² + 80²) = 100 Ω, sehingga <em>I</em><sub>ef</sub> = 200/100 = 2 A. Karena <em>X</em><sub>L</sub> &gt; <em>X</em><sub>C</sub>, rangkaian bersifat induktif, dengan tan φ = 80/60, sehingga φ ≈ 53°. Cek: <em>V</em><sub>R</sub> = 120 V, <em>V</em><sub>L</sub> = 240 V, <em>V</em><sub>C</sub> = 80 V, dan √(120² + 160²) = 200 V.
      </div>

      <div class="catatan">
        <strong class="judul">Tegangan komponen bisa melebihi tegangan sumber</strong>
        Pada contoh di atas, <em>V</em><sub>L</sub> = 240 V lebih besar daripada tegangan sumber 200 V. Hal ini tidak melanggar apa pun, karena <em>V</em><sub>L</sub> dan <em>V</em><sub>C</sub> berlawanan fase dan sebagian saling meniadakan.
      </div>
    </section>

    <!-- ============ 5. RESONANSI ============ -->
    <section class="bagian" id="resonansi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Resonansi</h2>
      </div>

      <p>Karena <em>X</em><sub>L</sub> naik dan <em>X</em><sub>C</sub> turun ketika frekuensi naik, selalu ada satu frekuensi yang membuat keduanya sama besar. Pada frekuensi ini terjadi <strong>resonansi</strong>: impedansi bernilai paling kecil, yaitu <em>Z</em> = <em>R</em>, sehingga arus mencapai nilai <strong>maksimum</strong>.</p>

      <div class="rumus">
        <div class="rumus-judul">Frekuensi resonansi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="f nol sama dengan 1 per 2 pi akar L C">
            <msub><mi>f</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi><msqrt><mi>L</mi><mi>C</mi></msqrt></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>f<sub>0</sub></dt><dd>frekuensi resonansi <span class="satuan">(Hz)</span></dd>
            <dt>L</dt><dd>induktansi <span class="satuan">(H)</span></dd>
            <dt>C</dt><dd>kapasitas <span class="satuan">(F)</span></dd>
          </dl>
        </div>
      </div>

      <p>Radio memanfaatkan resonansi. Saat tombol pencari gelombang diputar, kapasitas kapasitor variabel berubah, sehingga frekuensi resonansinya bergeser. Hanya sinyal stasiun yang frekuensinya sama dengan <em>f</em><sub>0</sub> yang menghasilkan arus besar dan terdengar.</p>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Induktor 1 mH dan kapasitor 1 nF dirangkai seri. Frekuensi resonansinya <em>f</em><sub>0</sub> = 1/(2π√(10<sup>−3</sup> × 10<sup>−9</sup>)) = 1/(2π × 10<sup>−6</sup>) ≈ 1,6 × 10<sup>5</sup> Hz, atau sekitar 159 kHz.
      </div>
    </section>

    <!-- ============ 6. DAYA ============ -->
    <section class="bagian" id="daya-ac">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Daya dan faktor daya</h2>
      </div>

      <p>Induktor dan kapasitor ideal menyimpan energi lalu mengembalikannya ke sumber pada setiap siklus, sehingga rata-rata tidak menyerap daya. Daya yang benar-benar terpakai hanya daya pada resistor.</p>

      <div class="rumus">
        <div class="rumus-judul">Daya rata-rata</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P sama dengan V ef I ef cos phi sama dengan I ef kuadrat R">
            <mi>P</mi><mo>=</mo><msub><mi>V</mi><mtext>ef</mtext></msub><msub><mi>I</mi><mtext>ef</mtext></msub><mi>cos</mi><mi>φ</mi><mo>=</mo><msubsup><mi>I</mi><mtext>ef</mtext><mn>2</mn></msubsup><mi>R</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="faktor daya cos phi sama dengan R per Z">
            <mi>cos</mi><mi>φ</mi><mo>=</mo><mfrac><mi>R</mi><mi>Z</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>P</dt><dd>daya rata-rata yang diserap rangkaian <span class="satuan">(W)</span></dd>
            <dt>cos φ</dt><dd>faktor daya, bernilai 0 sampai 1</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Pada rangkaian di bagian 4, cos φ = 60/100 = 0,6, sehingga <em>P</em> = 200 × 2 × 0,6 = 240 W. Hasilnya sama dengan <em>I</em>²<em>R</em> = 2² × 60 = 240 W.
      </div>

      <p>Faktor daya yang rendah membuat arus yang ditarik dari jaringan lebih besar untuk daya yang sama, sehingga kerugian di kabel bertambah. Karena itu, pabrik yang memakai banyak motor listrik (bersifat induktif) memasang kapasitor untuk memperbaiki faktor dayanya mendekati 1.</p>
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
              <td>Tegangan sesaat</td><td>V</td>
              <td><math><mi>V</mi><mo>=</mo><msub><mi>V</mi><mi>m</mi></msub><mi>sin</mi><mi>ω</mi><mi>t</mi></math></td>
            </tr>
            <tr>
              <td>Nilai efektif</td><td>V</td>
              <td><math><msub><mi>V</mi><mtext>ef</mtext></msub><mo>=</mo><mfrac><msub><mi>V</mi><mi>m</mi></msub><msqrt><mn>2</mn></msqrt></mfrac></math></td>
            </tr>
            <tr>
              <td>Reaktansi induktif</td><td>Ω</td>
              <td><math><msub><mi>X</mi><mi>L</mi></msub><mo>=</mo><mi>ω</mi><mi>L</mi></math></td>
            </tr>
            <tr>
              <td>Reaktansi kapasitif</td><td>Ω</td>
              <td><math><msub><mi>X</mi><mi>C</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>ω</mi><mi>C</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Impedansi RLC seri</td><td>Ω</td>
              <td><math><mi>Z</mi><mo>=</mo><msqrt><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy="false">(</mo><msub><mi>X</mi><mi>L</mi></msub><mo>−</mo><msub><mi>X</mi><mi>C</mi></msub><mo stretchy="false">)</mo></mrow><mn>2</mn></msup></msqrt></math></td>
            </tr>
            <tr>
              <td>Frekuensi resonansi</td><td>Hz</td>
              <td><math><msub><mi>f</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi><msqrt><mi>L</mi><mi>C</mi></msqrt></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Daya rata-rata</td><td>W</td>
              <td><math><mi>P</mi><mo>=</mo><msub><mi>V</mi><mtext>ef</mtext></msub><msub><mi>I</mi><mtext>ef</mtext></msub><mi>cos</mi><mi>φ</mi></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

/* ====== Bab 5-1 · Perkembangan Model Atom ====== */

import { Chapter } from '../../materials';

export const modelAtom: Chapter = {
  chapterId: "5-1",
  title: "Perkembangan Model Atom",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Fisika Atom</span>
      <h1>Perkembangan Model Atom</h1>
      <p>Rangkuman model atom Dalton, Thomson, Rutherford, dan Bohr beserta kelemahannya, spektrum atom hidrogen, serta model atom mekanika kuantum dan bilangan kuantum.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#dalton-thomson">Model atom Dalton dan Thomson</a></li>
        <li><a href="#rutherford">Model atom Rutherford</a></li>
        <li><a href="#bohr">Model atom Bohr</a></li>
        <li><a href="#spektrum">Spektrum atom hidrogen</a></li>
        <li><a href="#kuantum">Model atom mekanika kuantum</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. DALTON & THOMSON ============ -->
    <section class="bagian" id="dalton-thomson">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Model atom Dalton dan Thomson</h2>
      </div>

      <p>Atom terlalu kecil untuk dilihat langsung, sehingga para ilmuwan membuat <strong>model</strong> berdasarkan hasil percobaan. Setiap kali ada percobaan baru yang tidak dapat dijelaskan, model atom diperbaiki.</p>

      <figure class="gambar lebar">
        <div class="gambar-isi">
          <img src="/images/model-atom.svg" alt="Empat model atom. Dalton: atom berupa bola pejal. Thomson: bola bermuatan positif dengan elektron tersebar di dalamnya seperti kismis pada roti. Rutherford: inti positif yang sangat kecil di pusat, dikelilingi elektron yang beredar. Bohr: elektron beredar pada lintasan-lintasan tertentu berbentuk lingkaran dengan bilangan kuantum n sama dengan 1, 2, dan 3." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Perkembangan model atom dari Dalton sampai Bohr.</figcaption>
      </figure>

      <div class="kartu">
        <span class="tipe">1803</span>
        <span class="istilah">Dalton</span>
        <p>John Dalton menyatakan bahwa atom adalah <strong>bola pejal</strong> yang tidak dapat dibagi lagi. Atom-atom unsur yang sama identik, dan atom unsur berbeda memiliki massa berbeda. Atom-atom bergabung dengan perbandingan tertentu membentuk senyawa.</p>
        <p><strong>Kelemahan</strong>: tidak dapat menjelaskan sifat listrik materi, dan ternyata atom masih tersusun dari partikel yang lebih kecil.</p>
      </div>

      <div class="kartu">
        <span class="tipe">1897</span>
        <span class="istilah">Thomson</span>
        <p>J.J. Thomson menemukan <strong>elektron</strong> melalui percobaan sinar katode. Ia mengusulkan atom sebagai bola bermuatan positif dengan elektron-elektron tersebar di dalamnya, seperti kismis pada roti. Muatan positif dan negatifnya sama besar, sehingga atom netral.</p>
        <p><strong>Kelemahan</strong>: tidak dapat menjelaskan hasil percobaan hamburan sinar alfa Rutherford.</p>
      </div>
    </section>

    <!-- ============ 2. RUTHERFORD ============ -->
    <section class="bagian" id="rutherford">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Model atom Rutherford</h2>
      </div>

      <p>Pada tahun 1909–1911, Ernest Rutherford bersama Hans Geiger dan Ernest Marsden menembakkan partikel alfa (bermuatan positif) ke lempeng emas yang sangat tipis. Di sekeliling lempeng dipasang layar yang berpendar setiap kali tertumbuk partikel alfa.</p>

      <ol class="langkah">
        <li><strong>Sebagian besar</strong> partikel alfa menembus lempeng tanpa dibelokkan. Artinya, sebagian besar atom adalah <strong>ruang kosong</strong>.</li>
        <li><strong>Sebagian kecil</strong> dibelokkan dengan sudut besar. Artinya, ada muatan positif terpusat yang menolak partikel alfa.</li>
        <li><strong>Sangat sedikit</strong>, sekitar 1 dari 20.000, dipantulkan kembali. Artinya, muatan positif dan hampir seluruh massa atom terkumpul di daerah yang sangat kecil, yaitu <strong>inti atom</strong>.</li>
      </ol>

      <div class="kartu">
        <span class="tipe">1911</span>
        <span class="istilah">Rutherford</span>
        <p>Atom terdiri atas <strong>inti</strong> bermuatan positif yang sangat kecil di pusat, tempat hampir seluruh massa atom terkumpul, dan <strong>elektron</strong> yang beredar mengelilingi inti, seperti planet mengelilingi Matahari. Diameter inti sekitar 10<sup>−15</sup> m, sedangkan diameter atom sekitar 10<sup>−10</sup> m, atau 100.000 kali lebih besar.</p>
      </div>

      <div class="catatan">
        <strong class="judul">Kelemahan model Rutherford</strong>
        Menurut teori elektromagnetik klasik, elektron yang bergerak melingkar terus-menerus memancarkan energi. Akibatnya lintasannya makin kecil dan elektron akan jatuh ke inti dalam waktu sangat singkat, sehingga atom tidak stabil. Model ini juga meramalkan spektrum kontinu, padahal atom hidrogen memancarkan spektrum garis.
      </div>
    </section>

    <!-- ============ 3. BOHR ============ -->
    <section class="bagian" id="bohr">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Model atom Bohr</h2>
      </div>

      <p>Pada tahun 1913, Niels Bohr memperbaiki model Rutherford dengan memakai gagasan kuantum Planck. Model Bohr didasarkan pada dua postulat:</p>

      <ol class="langkah">
        <li>Elektron hanya dapat beredar pada <strong>lintasan tertentu</strong> (lintasan stasioner) tanpa memancarkan energi. Pada lintasan ini momentum sudut elektron bernilai kelipatan <em>h</em>/2π: <em>mvr</em> = <em>nh</em>/2π, dengan <em>n</em> = 1, 2, 3, … sebagai <strong>bilangan kuantum utama</strong>.</li>
        <li>Elektron memancarkan foton jika pindah ke lintasan yang lebih dalam (energi lebih rendah), dan menyerap foton jika pindah ke lintasan yang lebih luar. Energi foton sama dengan selisih energi kedua lintasan: <em>hf</em> = <em>E</em><sub>awal</sub> − <em>E</em><sub>akhir</sub>.</li>
      </ol>

      <div class="rumus">
        <div class="rumus-judul">Atom hidrogen menurut Bohr</div>
        <div class="rumus-isi">
          <math display="block" aria-label="r n sama dengan n kuadrat dikali 0,053 nanometer">
            <msub><mi>r</mi><mi>n</mi></msub><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><mo>×</mo><mn>0,053</mn><mtext> nm</mtext>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="E n sama dengan minus 13,6 per n kuadrat elektronvolt">
            <msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo>−</mo><mfrac><mn>13,6</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><mtext> eV</mtext>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>r<sub>n</sub></dt><dd>jari-jari lintasan ke-n; r<sub>1</sub> = 0,053 nm disebut jari-jari Bohr</dd>
            <dt>E<sub>n</sub></dt><dd>energi elektron pada lintasan ke-n <span class="satuan">(eV)</span></dd>
            <dt>n</dt><dd>bilangan kuantum utama, 1, 2, 3, …</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Mengapa energinya negatif?</strong>
        Tanda negatif berarti elektron <strong>terikat</strong> pada inti. Untuk melepaskan elektron dari lintasan <em>n</em> = 1 sampai bebas (<em>n</em> = ∞, energi 0), diperlukan energi 13,6 eV. Energi ini disebut <strong>energi ionisasi</strong> atom hidrogen.
      </div>

      <div class="catatan">
        <strong class="judul">Kelemahan model Bohr</strong>
        Model Bohr hanya berhasil untuk atom berelektron tunggal, seperti H, He⁺, dan Li²⁺. Model ini tidak dapat menjelaskan spektrum atom berelektron banyak, terpecahnya garis spektrum di dalam medan magnet (efek Zeeman), maupun perbedaan intensitas garis-garis spektrum.
      </div>
    </section>

    <!-- ============ 4. SPEKTRUM ============ -->
    <section class="bagian" id="spektrum">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Spektrum atom hidrogen</h2>
      </div>

      <p>Gas hidrogen yang dipijarkan tidak memancarkan semua warna, melainkan hanya panjang gelombang tertentu yang tampak sebagai garis-garis terang. Spektrum ini disebut <strong>spektrum garis</strong>. Model Bohr menjelaskannya: setiap garis berasal dari satu transisi elektron di antara dua lintasan.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/tingkat-energi-hidrogen.svg" alt="Diagram tingkat energi atom hidrogen, tidak berskala. Tingkat n sama dengan 1 berenergi minus 13,6 eV, n sama dengan 2 minus 3,4 eV, n sama dengan 3 minus 1,51 eV, n sama dengan 4 minus 0,85 eV, dan n tak hingga 0 eV. Deret Lyman adalah transisi ke n sama dengan 1 dan berada di daerah ultraungu. Deret Balmer adalah transisi ke n sama dengan 2 dan berada di daerah cahaya tampak. Deret Paschen adalah transisi ke n sama dengan 3 dan berada di daerah inframerah." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Tingkat energi atom hidrogen dan tiga deret spektrumnya (tidak berskala).</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Rumus Rydberg</div>
        <div class="rumus-isi">
          <math display="block" aria-label="1 per lambda sama dengan R dikali kurung 1 per n A kuadrat dikurangi 1 per n B kuadrat">
            <mfrac><mn>1</mn><mi>λ</mi></mfrac><mo>=</mo><mi>R</mi><mrow><mo>(</mo><mfrac><mn>1</mn><msubsup><mi>n</mi><mi>A</mi><mn>2</mn></msubsup></mfrac><mo>−</mo><mfrac><mn>1</mn><msubsup><mi>n</mi><mi>B</mi><mn>2</mn></msubsup></mfrac><mo>)</mo></mrow>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>λ</dt><dd>panjang gelombang foton yang dipancarkan <span class="satuan">(m)</span></dd>
            <dt>R</dt><dd>tetapan Rydberg, 1,097 × 10<sup>7</sup> <span class="satuan">(/m)</span></dd>
            <dt>n<sub>A</sub></dt><dd>lintasan tujuan (lebih dalam)</dd>
            <dt>n<sub>B</sub></dt><dd>lintasan asal, n<sub>B</sub> &gt; n<sub>A</sub></dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Deret</th><th>Lintasan tujuan n<sub>A</sub></th><th>Daerah spektrum</th></tr>
          </thead>
          <tbody>
            <tr><td>Lyman</td><td>1</td><td>ultraungu</td></tr>
            <tr><td>Balmer</td><td>2</td><td>cahaya tampak (dan sedikit ultraungu)</td></tr>
            <tr><td>Paschen</td><td>3</td><td>inframerah</td></tr>
            <tr><td>Brackett</td><td>4</td><td>inframerah</td></tr>
            <tr><td>Pfund</td><td>5</td><td>inframerah</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Elektron hidrogen pindah dari <em>n</em> = 3 ke <em>n</em> = 2 (deret Balmer). Energi fotonnya Δ<em>E</em> = 13,6(1/2² − 1/3²) = 13,6 × 5/36 ≈ 1,89 eV, sehingga λ = 1.240/1,89 ≈ 656 nm. Inilah garis merah terang pada spektrum hidrogen, yang disebut garis H-alfa.
      </div>
    </section>

    <!-- ============ 5. MEKANIKA KUANTUM ============ -->
    <section class="bagian" id="kuantum">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Model atom mekanika kuantum</h2>
      </div>

      <p>Hipotesis de Broglie dan prinsip ketidakpastian Heisenberg menunjukkan bahwa lintasan elektron yang pasti seperti pada model Bohr tidak mungkin diketahui. Erwin Schrödinger (1926) lalu menggambarkan elektron sebagai gelombang dengan sebuah persamaan. Hasilnya, posisi elektron hanya dapat dinyatakan sebagai <strong>peluang</strong>. Daerah di sekitar inti tempat elektron paling mungkin ditemukan disebut <strong>orbital</strong>, atau sering digambarkan sebagai awan elektron.</p>

      <p>Keadaan setiap elektron dalam atom ditentukan oleh empat <strong>bilangan kuantum</strong>:</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Bilangan kuantum</th><th>Lambang</th><th>Nilai</th><th>Menentukan</th></tr>
          </thead>
          <tbody>
            <tr><td>Utama</td><td><em>n</em></td><td>1, 2, 3, …</td><td>kulit dan tingkat energi</td></tr>
            <tr><td>Azimut (orbital)</td><td>ℓ</td><td>0 sampai <em>n</em> − 1</td><td>subkulit s, p, d, f (ℓ = 0, 1, 2, 3) dan bentuk orbital</td></tr>
            <tr><td>Magnetik</td><td><em>m</em><sub>ℓ</sub></td><td>−ℓ sampai +ℓ</td><td>orientasi orbital dalam ruang</td></tr>
            <tr><td>Spin</td><td><em>m</em><sub>s</sub></td><td>+½ atau −½</td><td>arah putaran elektron</td></tr>
          </tbody>
        </table>
      </div>

      <div class="kartu">
        <span class="istilah">Larangan Pauli</span>
        <p>Tidak ada dua elektron dalam satu atom yang memiliki keempat bilangan kuantum yang sama. Akibatnya, satu orbital hanya dapat diisi paling banyak dua elektron dengan spin berlawanan, dan kulit ke-<em>n</em> dapat menampung paling banyak <strong>2<em>n</em>²</strong> elektron: 2, 8, 18, 32, dan seterusnya.</p>
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Model</th><th>Gagasan utama</th><th>Kelemahan</th></tr>
          </thead>
          <tbody>
            <tr><td>Dalton</td><td>bola pejal yang tidak dapat dibagi</td><td>tidak menjelaskan sifat listrik</td></tr>
            <tr><td>Thomson</td><td>bola positif berisi elektron</td><td>gagal menjelaskan hamburan alfa</td></tr>
            <tr><td>Rutherford</td><td>inti kecil di pusat, elektron mengelilingi</td><td>elektron seharusnya jatuh ke inti</td></tr>
            <tr><td>Bohr</td><td>lintasan stasioner, <math><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo>−</mo><mfrac><mn>13,6</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac></math> eV</td><td>hanya untuk atom berelektron tunggal</td></tr>
            <tr><td>Mekanika kuantum</td><td>orbital sebagai daerah peluang, empat bilangan kuantum</td><td>model yang dipakai saat ini</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

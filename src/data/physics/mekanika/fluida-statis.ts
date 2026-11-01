/* ====== Bab 1-12 · Fluida Statis ====== */

import { Chapter } from '../../materials';

export const fluidaStatis: Chapter = {
  chapterId: "1-12",
  title: "Fluida Statis",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Fluida</span>
      <h1>Fluida Statis</h1>
      <p>Rangkuman tekanan, tekanan hidrostatis, tekanan mutlak, hukum pokok hidrostatis, hukum Pascal, hukum Archimedes, tegangan permukaan, meniskus, dan kapilaritas.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#fluida">Pengertian fluida</a></li>
        <li><a href="#tekanan">Tekanan dan tekanan hidrostatis</a></li>
        <li><a href="#hukum-pokok">Hukum pokok hidrostatis</a></li>
        <li><a href="#pascal">Hukum Pascal</a></li>
        <li><a href="#archimedes">Hukum Archimedes</a></li>
        <li><a href="#tegangan-permukaan">Tegangan permukaan</a></li>
        <li><a href="#meniskus">Meniskus dan kapilaritas</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. FLUIDA ============ -->
    <section class="bagian" id="fluida">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian fluida</h2>
      </div>

      <p><strong>Fluida</strong> adalah zat yang dapat <strong>mengalir</strong>, yaitu <strong>zat cair</strong> dan <strong>gas</strong>. <strong>Fluida statis</strong> membahas fluida yang <strong>diam</strong> (tidak mengalir).</p>
      <ul class="poin">
        <li>Fluida tidak dapat menahan gaya geser. Gaya geser sekecil apa pun membuat fluida mengalir dan berubah bentuk.</li>
        <li>Fluida menyesuaikan bentuknya dengan wadah yang ditempatinya.</li>
        <li>Pada fluida diam, gaya dari fluida terhadap dinding wadah selalu <strong>tegak lurus</strong> dinding.</li>
      </ul>
    </section>

    <!-- ============ 2. TEKANAN ============ -->
    <section class="bagian" id="tekanan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Tekanan dan tekanan hidrostatis</h2>
      </div>

      <div class="sub">
        <h3><span class="no">2.1</span>Tekanan</h3>
        <p><strong>Tekanan</strong> adalah gaya yang bekerja tegak lurus pada suatu permukaan dibagi luas permukaan tersebut. Untuk gaya yang sama, makin kecil luas bidang tekan, makin besar tekanannya. Itulah sebabnya pisau yang tajam lebih mudah memotong.</p>
        <div class="rumus">
          <div class="rumus-judul">Tekanan</div>
          <div class="rumus-isi">
            <math display="block" aria-label="P sama dengan F per A">
              <mi>P</mi><mo>=</mo><mfrac><mi>F</mi><mi>A</mi></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>P</dt><dd>tekanan <span class="satuan">(N/m² atau Pa)</span></dd>
              <dt>F</dt><dd>gaya tekan yang tegak lurus permukaan <span class="satuan">(N)</span></dd>
              <dt>A</dt><dd>luas bidang tekan <span class="satuan">(m²)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">2.2</span>Tekanan hidrostatis</h3>
        <p><strong>Tekanan hidrostatis</strong> adalah tekanan di dalam zat cair yang disebabkan oleh <strong>berat zat cair itu sendiri</strong>. Makin dalam suatu titik dari permukaan, makin besar tekanan hidrostatisnya.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/tekanan-hidrostatis.svg" alt="Tangki air dengan tiga lubang di dinding kanan pada kedalaman berbeda. Tekanan udara luar P0 menekan permukaan air. Air dari lubang paling dalam memancar paling kencang karena tekanan hidrostatisnya paling besar. Titik X berada pada kedalaman h dari permukaan." />
          </div>
          <figcaption><strong>Gambar 1.</strong> Air dari lubang yang lebih dalam memancar lebih kencang karena tekanan di kedalaman itu lebih besar.</figcaption>
        </figure>

        <div class="rumus">
          <div class="rumus-judul">Tekanan hidrostatis</div>
          <div class="rumus-isi">
            <math display="block" aria-label="P h sama dengan rho g h">
              <msub><mi>P</mi><mi>h</mi></msub><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>h</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>P<sub>h</sub></dt><dd>tekanan hidrostatis <span class="satuan">(Pa)</span></dd>
              <dt>ρ</dt><dd>massa jenis zat cair <span class="satuan">(kg/m³)</span></dd>
              <dt>g</dt><dd>percepatan gravitasi <span class="satuan">(m/s²)</span></dd>
              <dt>h</dt><dd>kedalaman titik, diukur dari permukaan zat cair <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">2.3</span>Tekanan mutlak</h3>
        <p>Permukaan zat cair yang terbuka juga ditekan oleh udara luar (tekanan atmosfer <em>P</em><sub>0</sub>). Jumlah tekanan atmosfer dan tekanan hidrostatis disebut <strong>tekanan mutlak</strong>, yaitu tekanan total di titik X pada Gambar 1.</p>
        <div class="rumus">
          <div class="rumus-judul">Tekanan mutlak</div>
          <div class="rumus-isi">
            <math display="block" aria-label="P sama dengan P 0 ditambah rho g h">
              <mi>P</mi><mo>=</mo><msub><mi>P</mi><mn>0</mn></msub><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>P</dt><dd>tekanan mutlak <span class="satuan">(Pa)</span></dd>
              <dt>P<sub>0</sub></dt><dd>tekanan atmosfer, 1 atm ≈ 1,01 × 10<sup>5</sup> Pa</dd>
              <dt>ρgh</dt><dd>tekanan hidrostatis <span class="satuan">(Pa)</span></dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 3. HUKUM POKOK ============ -->
    <section class="bagian" id="hukum-pokok">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Hukum pokok hidrostatis</h2>
      </div>

      <p>Tekanan hidrostatis hanya bergantung pada kedalaman, tidak pada bentuk wadah. Dari sini diperoleh hukum pokok hidrostatis:</p>

      <div class="kartu">
        <span class="istilah">Hukum pokok hidrostatis</span>
        <p>Semua titik yang terletak pada <strong>satu bidang datar</strong> di dalam <strong>zat cair yang sama</strong> (dan diam) memiliki <strong>tekanan yang sama</strong>.</p>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/hukum-pokok-hidrostatis.svg" alt="Kiri: bejana berhubungan dengan bentuk berbeda-beda. Permukaan air di semua bejana sama tinggi. Kanan: pipa U berisi air dan minyak. Titik A di batas minyak dan air sejajar dengan titik B di dalam air pada kaki kanan, sehingga tekanannya sama. Tinggi kolom minyak h1 lebih besar daripada tinggi kolom air h2 di atas garis A B." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Kiri: permukaan zat cair di bejana berhubungan selalu sama tinggi. Kanan: pada pipa U, titik A dan B sejajar dan berada di zat cair yang sama (air), sehingga <em>P</em><sub>A</sub> = <em>P</em><sub>B</sub>.</figcaption>
      </figure>

      <p>Pada pipa U yang berisi dua zat cair yang tidak bercampur, tekanan di A dan B sama:</p>
      <div class="rumus">
        <div class="rumus-judul">Pipa U berisi dua zat cair</div>
        <div class="rumus-isi">
          <math display="block" aria-label="rho 1 h 1 sama dengan rho 2 h 2">
            <msub><mi>ρ</mi><mn>1</mn></msub><msub><mi>h</mi><mn>1</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>2</mn></msub><msub><mi>h</mi><mn>2</mn></msub>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>ρ<sub>1</sub>, h<sub>1</sub></dt><dd>massa jenis dan tinggi kolom zat cair 1 (minyak) di atas garis A–B</dd>
            <dt>ρ<sub>2</sub>, h<sub>2</sub></dt><dd>massa jenis dan tinggi kolom zat cair 2 (air) di atas garis A–B</dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Pilih garis A–B dengan benar</strong>
        Garis A–B ditarik melalui <strong>batas kedua zat cair</strong>. Di bawah garis itu hanya ada satu jenis zat cair, sehingga hukum pokok hidrostatis berlaku. Zat cair yang massa jenisnya lebih kecil membentuk kolom yang lebih tinggi.
      </div>
    </section>

    <!-- ============ 4. PASCAL ============ -->
    <section class="bagian" id="pascal">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Hukum Pascal</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Hukum Pascal</span>
        <p>Tekanan yang diberikan dari luar kepada zat cair di dalam ruang tertutup akan <strong>diteruskan</strong> oleh zat cair itu <strong>ke segala arah dengan sama besar</strong>.</p>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/dongkrak-hidrolik.svg" alt="Dongkrak hidrolik. Pengisap kecil dengan luas A1 ditekan gaya F1 ke bawah. Tekanan diteruskan sama besar oleh zat cair ke pengisap besar dengan luas A2, sehingga pengisap besar mendorong beban dengan gaya F2 ke atas yang jauh lebih besar." />
        </div>
        <figcaption><strong>Gambar 3.</strong> Dongkrak hidrolik. Gaya kecil <em>F</em><sub>1</sub> pada pengisap kecil menghasilkan gaya besar <em>F</em><sub>2</sub> pada pengisap besar.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Hukum Pascal</div>
        <div class="rumus-isi">
          <math display="block" aria-label="P 1 sama dengan P 2, F 1 per A 1 sama dengan F 2 per A 2">
            <msub><mi>P</mi><mn>1</mn></msub><mo>=</mo><msub><mi>P</mi><mn>2</mn></msub>
            <mspace width="1em"/><mo>⇒</mo><mspace width="1em"/>
            <mfrac><msub><mi>F</mi><mn>1</mn></msub><msub><mi>A</mi><mn>1</mn></msub></mfrac><mo>=</mo>
            <mfrac><msub><mi>F</mi><mn>2</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>P<sub>1</sub>, P<sub>2</sub></dt><dd>tekanan pada penampang 1 dan 2 <span class="satuan">(Pa)</span></dd>
            <dt>F<sub>1</sub>, F<sub>2</sub></dt><dd>gaya pada penampang 1 dan 2 <span class="satuan">(N)</span></dd>
            <dt>A<sub>1</sub>, A<sub>2</sub></dt><dd>luas penampang 1 dan 2 <span class="satuan">(m²)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Penampang berbentuk lingkaran</strong>
        Karena <em>A</em> = ¼π<em>d</em><sup>2</sup>, rumusnya dapat ditulis <em>F</em><sub>1</sub>/<em>d</em><sub>1</sub><sup>2</sup> = <em>F</em><sub>2</sub>/<em>d</em><sub>2</sub><sup>2</sup>. Jika diameter pengisap besar 10 kali diameter pengisap kecil, gayanya menjadi 100 kali lebih besar.
      </div>

      <p>Contoh penerapan hukum Pascal: dongkrak hidrolik, rem hidrolik pada mobil, dan alat pengangkat mobil di tempat cuci mobil.</p>
    </section>

    <!-- ============ 5. ARCHIMEDES ============ -->
    <section class="bagian" id="archimedes">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Hukum Archimedes</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Hukum Archimedes</span>
        <p>Benda yang tercelup sebagian atau seluruhnya ke dalam zat cair akan mengalami <strong>gaya ke atas</strong> (gaya apung) yang besarnya sama dengan <strong>berat zat cair yang dipindahkan</strong> oleh benda tersebut.</p>
      </div>

      <p>Volume zat cair yang dipindahkan sama dengan volume bagian benda yang tercelup. Karena itu, gaya apung dapat dihitung dengan:</p>

      <div class="rumus">
        <div class="rumus-judul">Gaya apung</div>
        <div class="rumus-isi">
          <math display="block" aria-label="F a sama dengan rho f g V b f">
            <msub><mi>F</mi><mi>a</mi></msub><mo>=</mo><msub><mi>ρ</mi><mi>f</mi></msub><mi>g</mi><msub><mi>V</mi><mtext>bf</mtext></msub>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>F<sub>a</sub></dt><dd>gaya apung (gaya ke atas) <span class="satuan">(N)</span></dd>
            <dt>ρ<sub>f</sub></dt><dd>massa jenis zat cair (fluida) <span class="satuan">(kg/m³)</span></dd>
            <dt>g</dt><dd>percepatan gravitasi <span class="satuan">(m/s²)</span></dd>
            <dt>V<sub>bf</sub></dt><dd>volume benda yang tercelup dalam fluida <span class="satuan">(m³)</span></dd>
          </dl>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">5.1</span>Terapung, melayang, dan tenggelam</h3>
        <p>Keadaan benda di dalam zat cair ditentukan oleh perbandingan massa jenis benda (ρ<sub>b</sub>) dengan massa jenis zat cair (ρ<sub>f</sub>).</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/archimedes-kondisi.svg" alt="Tiga keadaan benda di dalam zat cair. Terapung: sebagian benda tercelup, gaya apung sama dengan berat, massa jenis benda lebih kecil daripada massa jenis zat cair. Melayang: seluruh benda tercelup dan diam di tengah, gaya apung sama dengan berat, massa jenis benda sama dengan massa jenis zat cair. Tenggelam: benda berada di dasar, gaya apung lebih kecil daripada berat, massa jenis benda lebih besar daripada massa jenis zat cair." />
          </div>
          <figcaption><strong>Gambar 4.</strong> Tiga keadaan benda di dalam zat cair. Panjang panah menunjukkan besar gaya.</figcaption>
        </figure>

        <div class="tabel-wrap">
          <table>
            <thead>
              <tr><th>Keadaan</th><th>Massa jenis</th><th>Gaya</th><th>Volume tercelup</th></tr>
            </thead>
            <tbody>
              <tr><td>Terapung</td><td>ρ<sub>b</sub> &lt; ρ<sub>f</sub></td><td><em>F</em><sub>a</sub> = <em>w</em></td><td><em>V</em><sub>bf</sub> &lt; <em>V</em><sub>b</sub> (sebagian)</td></tr>
              <tr><td>Melayang</td><td>ρ<sub>b</sub> = ρ<sub>f</sub></td><td><em>F</em><sub>a</sub> = <em>w</em></td><td><em>V</em><sub>bf</sub> = <em>V</em><sub>b</sub> (seluruhnya)</td></tr>
              <tr><td>Tenggelam</td><td>ρ<sub>b</sub> &gt; ρ<sub>f</sub></td><td><em>F</em><sub>a</sub> &lt; <em>w</em></td><td><em>V</em><sub>bf</sub> = <em>V</em><sub>b</sub> (seluruhnya)</td></tr>
            </tbody>
          </table>
        </div>
        <p>Keterangan: <em>w</em> = berat benda (N) dan <em>V</em><sub>b</sub> = volume seluruh benda (m³).</p>

        <div class="catatan">
          <strong class="judul">Benda terapung</strong>
          Pada benda terapung yang diam, gaya apung <strong>sama dengan</strong> beratnya (bukan lebih besar). Dari <em>F</em><sub>a</sub> = <em>w</em> diperoleh ρ<sub>f</sub><em>V</em><sub>bf</sub> = ρ<sub>b</sub><em>V</em><sub>b</sub>. Contohnya, es (ρ ≈ 920 kg/m³) yang terapung di air (ρ = 1.000 kg/m³) tercelup sekitar 92% volumenya. Pada benda tenggelam, dasar wadah memberi gaya normal sebesar <em>N</em> = <em>w</em> − <em>F</em><sub>a</sub>.
        </div>

        <p>Contoh penerapan hukum Archimedes: kapal laut, kapal selam, balon udara, dan hidrometer (alat ukur massa jenis zat cair).</p>
      </div>
    </section>

    <!-- ============ 6. TEGANGAN PERMUKAAN ============ -->
    <section class="bagian" id="tegangan-permukaan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Tegangan permukaan</h2>
      </div>

      <p><strong>Tegangan permukaan</strong> adalah gejala permukaan zat cair yang berperilaku seperti <strong>lapisan tipis yang tegang</strong>. Molekul di permukaan hanya ditarik oleh molekul di samping dan di bawahnya, sehingga ada resultan gaya ke arah dalam. Akibatnya, permukaan zat cair cenderung menyusut ke luas sekecil mungkin.</p>

      <p>Contoh tegangan permukaan: serangga anggang-anggang dapat berjalan di atas air, silet atau jarum yang diletakkan perlahan dapat terapung, dan tetesan air berbentuk bulat.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/tegangan-permukaan.svg" alt="Kerangka kawat berbentuk huruf U terbalik dengan kawat geser sepanjang l di bagian bawah. Di antara kerangka dan kawat geser terdapat lapisan sabun. Lapisan sabun menarik kawat geser ke atas dengan gaya tegangan permukaan F gamma, sedangkan gaya F menarik kawat ke bawah. Saat seimbang, kedua gaya sama besar." />
        </div>
        <figcaption><strong>Gambar 5.</strong> Lapisan sabun menarik kawat geser dengan gaya tegangan permukaan <em>F</em><sub>γ</sub>. Saat seimbang, <em>F</em><sub>γ</sub> = <em>F</em>.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Tegangan permukaan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="gamma sama dengan F per d">
            <mi>γ</mi><mo>=</mo><mfrac><mi>F</mi><mi>d</mi></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="pada kawat dengan lapisan sabun, gamma sama dengan F per 2 l">
            <mi>γ</mi><mo>=</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>l</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>γ</dt><dd>tegangan permukaan <span class="satuan">(N/m)</span></dd>
            <dt>F</dt><dd>gaya tegangan permukaan <span class="satuan">(N)</span></dd>
            <dt>d</dt><dd>panjang permukaan yang bersentuhan dengan zat cair <span class="satuan">(m)</span></dd>
            <dt>l</dt><dd>panjang kawat geser <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Mengapa d = 2l?</strong>
        Lapisan sabun memiliki <strong>dua permukaan</strong> (depan dan belakang). Keduanya menarik kawat, sehingga panjang permukaan yang bekerja adalah 2<em>l</em>.
      </div>
    </section>

    <!-- ============ 7. MENISKUS DAN KAPILARITAS ============ -->
    <section class="bagian" id="meniskus">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">7</span>
        <h2>Meniskus dan kapilaritas</h2>
      </div>

      <div class="sub">
        <h3><span class="no">7.1</span>Meniskus</h3>
        <p>Permukaan zat cair di dekat dinding wadah biasanya melengkung ke atas atau ke bawah. Lengkungan permukaan ini disebut <strong>meniskus</strong>. Sudut antara dinding dan garis singgung permukaan zat cair (diukur melalui zat cair) disebut <strong>sudut kontak</strong> (θ).</p>
        <p>Bentuk meniskus ditentukan oleh dua gaya tarik-menarik antarmolekul:</p>
        <ul class="poin">
          <li><strong>Kohesi</strong>: gaya tarik-menarik antarmolekul <strong>sejenis</strong>, misalnya antara molekul air dan air.</li>
          <li><strong>Adhesi</strong>: gaya tarik-menarik antarmolekul <strong>tidak sejenis</strong>, misalnya antara molekul air dan kaca.</li>
        </ul>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/meniskus.svg" alt="Dua tabung kaca. Tabung A berisi air dengan permukaan cekung, sudut kontak theta kurang dari 90 derajat, karena adhesi lebih besar daripada kohesi. Tabung B berisi raksa dengan permukaan cembung, sudut kontak theta lebih dari 90 derajat, karena kohesi lebih besar daripada adhesi." />
          </div>
          <figcaption><strong>Gambar 6.</strong> Meniskus cekung pada air (A) dan meniskus cembung pada raksa (B) di dalam tabung kaca.</figcaption>
        </figure>

        <div class="cabang">
          <div class="kartu">
            <h3>Meniskus cekung (A)</h3>
            <p>Adhesi <strong>lebih besar</strong> daripada kohesi, sehingga zat cair melekat pada dinding (membasahi dinding). Permukaannya cekung dengan sudut kontak <strong>θ &lt; 90°</strong>. Contoh: air dalam tabung kaca.</p>
          </div>
          <div class="kartu">
            <h3>Meniskus cembung (B)</h3>
            <p>Kohesi <strong>lebih besar</strong> daripada adhesi, sehingga zat cair tidak membasahi dinding. Permukaannya cembung dengan sudut kontak <strong>θ &gt; 90°</strong>. Contoh: raksa dalam tabung kaca.</p>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">7.2</span>Kapilaritas</h3>
        <p><strong>Kapilaritas</strong> adalah gejala naik atau turunnya permukaan zat cair di dalam pipa yang sangat sempit (pipa kapiler). Zat cair yang membasahi dinding (θ &lt; 90°) akan <strong>naik</strong>, sedangkan zat cair yang tidak membasahi dinding (θ &gt; 90°) akan <strong>turun</strong>.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/kapilaritas.svg" alt="Kiri: pipa kapiler kaca dicelupkan ke air. Air di dalam pipa naik setinggi h di atas permukaan air di luar dan permukaannya cekung. Kanan: pipa kapiler kaca dicelupkan ke raksa. Raksa di dalam pipa turun sedalam h di bawah permukaan raksa di luar dan permukaannya cembung." />
          </div>
          <figcaption><strong>Gambar 7.</strong> Air naik di dalam pipa kapiler, sedangkan raksa turun.</figcaption>
        </figure>

        <div class="rumus">
          <div class="rumus-judul">Kenaikan zat cair pada pipa kapiler</div>
          <div class="rumus-isi">
            <math display="block" aria-label="h sama dengan 2 gamma cos theta per rho g r">
              <mi>h</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi><mi>cos</mi><mi>θ</mi></mrow><mrow><mi>ρ</mi><mi>g</mi><mi>r</mi></mrow></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>h</dt><dd>kenaikan (atau penurunan) zat cair dalam pipa kapiler <span class="satuan">(m)</span></dd>
              <dt>γ</dt><dd>tegangan permukaan <span class="satuan">(N/m)</span></dd>
              <dt>θ</dt><dd>sudut kontak</dd>
              <dt>ρ</dt><dd>massa jenis zat cair <span class="satuan">(kg/m³)</span></dd>
              <dt>g</dt><dd>percepatan gravitasi <span class="satuan">(m/s²)</span></dd>
              <dt>r</dt><dd>jari-jari pipa kapiler <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>

        <div class="catatan info">
          <strong class="judul">Membaca tanda h</strong>
          Jika θ &gt; 90°, nilai cos θ negatif sehingga <em>h</em> bernilai negatif. Artinya, zat cair <strong>turun</strong> di dalam pipa. Makin kecil jari-jari pipa, makin besar kenaikan atau penurunannya.
        </div>

        <p>Contoh kapilaritas dalam kehidupan sehari-hari: minyak naik melalui sumbu kompor, tisu menyerap air, dan dinding rumah menjadi lembap karena air tanah merembes ke atas.</p>
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
              <td>Tekanan</td><td>Pa</td>
              <td><math><mi>P</mi><mo>=</mo><mfrac><mi>F</mi><mi>A</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Tekanan hidrostatis</td><td>Pa</td>
              <td><math><msub><mi>P</mi><mi>h</mi></msub><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>h</mi></math></td>
            </tr>
            <tr>
              <td>Tekanan mutlak</td><td>Pa</td>
              <td><math><mi>P</mi><mo>=</mo><msub><mi>P</mi><mn>0</mn></msub><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi></math></td>
            </tr>
            <tr>
              <td>Pipa U dua zat cair</td><td>–</td>
              <td><math><msub><mi>ρ</mi><mn>1</mn></msub><msub><mi>h</mi><mn>1</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>2</mn></msub><msub><mi>h</mi><mn>2</mn></msub></math></td>
            </tr>
            <tr>
              <td>Hukum Pascal</td><td>–</td>
              <td><math><mfrac><msub><mi>F</mi><mn>1</mn></msub><msub><mi>A</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>F</mi><mn>2</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac></math></td>
            </tr>
            <tr>
              <td>Gaya apung</td><td>N</td>
              <td><math><msub><mi>F</mi><mi>a</mi></msub><mo>=</mo><msub><mi>ρ</mi><mi>f</mi></msub><mi>g</mi><msub><mi>V</mi><mtext>bf</mtext></msub></math></td>
            </tr>
            <tr>
              <td>Tegangan permukaan</td><td>N/m</td>
              <td><math><mi>γ</mi><mo>=</mo><mfrac><mi>F</mi><mi>d</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Kapilaritas</td><td>m</td>
              <td><math><mi>h</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi><mi>cos</mi><mi>θ</mi></mrow><mrow><mi>ρ</mi><mi>g</mi><mi>r</mi></mrow></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

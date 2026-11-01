/* ====== Bab 1-13 · Fluida Dinamis ====== */

import { Chapter } from '../../materials';

export const fluidaDinamis: Chapter = {
  chapterId: "1-13",
  title: "Fluida Dinamis",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Fluida</span>
      <h1>Fluida Dinamis</h1>
      <p>Rangkuman fluida ideal, debit dan asas kontinuitas, asas dan persamaan Bernoulli, serta penerapannya pada tangki berlubang, alat penyemprot, dan venturimeter.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#fluida-ideal">Fluida ideal</a></li>
        <li><a href="#kontinuitas">Debit dan asas kontinuitas</a></li>
        <li><a href="#bernoulli">Asas Bernoulli</a></li>
        <li><a href="#tangki">Tangki berlubang</a></li>
        <li><a href="#penyemprot">Alat penyemprot</a></li>
        <li><a href="#venturimeter">Venturimeter</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. FLUIDA IDEAL ============ -->
    <section class="bagian" id="fluida-ideal">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Fluida ideal</h2>
      </div>

      <p><strong>Fluida dinamis</strong> membahas fluida yang <strong>bergerak</strong> (mengalir). Agar mudah dianalisis, fluida dianggap sebagai <strong>fluida ideal</strong>, yaitu model sederhana dengan ciri-ciri berikut:</p>
      <ul class="poin">
        <li><strong>Tak termampatkan</strong> (tidak kompresibel): volume dan massa jenisnya tidak berubah walaupun mendapat tekanan.</li>
        <li><strong>Tidak kental</strong> (nonviskos): tidak ada gesekan antarlapisan fluida maupun antara fluida dan dinding saluran.</li>
        <li><strong>Alirannya tidak bergolak</strong> (laminer, tidak turbulen): fluida mengalir mengikuti garis-garis arus (<em>streamline</em>) yang tidak saling berpotongan.</li>
        <li><strong>Alirannya tunak</strong> (stasioner): kecepatan fluida di setiap titik tetap, tidak berubah terhadap waktu.</li>
      </ul>
    </section>

    <!-- ============ 2. KONTINUITAS ============ -->
    <section class="bagian" id="kontinuitas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Debit dan asas kontinuitas</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Debit (Q)</span>
        <p>Volume fluida yang mengalir melalui suatu penampang setiap satuan waktu.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Debit</div>
        <div class="rumus-isi">
          <math display="block" aria-label="Q sama dengan V per t sama dengan A v">
            <mi>Q</mi><mo>=</mo><mfrac><mi>V</mi><mi>t</mi></mfrac><mo>=</mo><mi>A</mi><mi>v</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Q</dt><dd>debit <span class="satuan">(m³/s)</span></dd>
            <dt>V</dt><dd>volume fluida <span class="satuan">(m³)</span></dd>
            <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
            <dt>A</dt><dd>luas penampang <span class="satuan">(m²)</span></dd>
            <dt>v</dt><dd>kecepatan aliran <span class="satuan">(m/s)</span></dd>
          </dl>
        </div>
      </div>

      <p><strong>Asas kontinuitas</strong>: jika fluida ideal mengalir dalam pipa, volume fluida yang masuk sama dengan volume yang keluar dalam selang waktu yang sama. Artinya, debit di setiap penampang pipa sama.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/kontinuitas.svg" alt="Fluida mengalir dari pipa lebar berpenampang A1 ke pipa sempit berpenampang A2. Diameter pipa sempit setengah diameter pipa lebar, sehingga luasnya seperempat. Dalam selang waktu yang sama, volume yang sama mengalir: di pipa lebar fluida bergerak sejauh l1 sama dengan v1 delta t, dan di pipa sempit bergerak empat kali lebih jauh, l2 sama dengan v2 delta t." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Volume yang sama (daerah oranye) melewati kedua penampang dalam selang waktu Δ<em>t</em>. Di pipa sempit, fluida harus bergerak lebih cepat.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Persamaan kontinuitas</div>
        <div class="rumus-isi">
          <math display="block" aria-label="Q 1 sama dengan Q 2">
            <msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>2</mn></msub>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="A 1 v 1 sama dengan A 2 v 2">
            <msub><mi>A</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>A<sub>1</sub>, A<sub>2</sub></dt><dd>luas penampang 1 dan 2 <span class="satuan">(m²)</span></dd>
            <dt>v<sub>1</sub>, v<sub>2</sub></dt><dd>kecepatan fluida di penampang 1 dan 2 <span class="satuan">(m/s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Pipa berpenampang lingkaran</strong>
        Karena <em>A</em> sebanding dengan <em>d</em><sup>2</sup>, berlaku <em>v</em><sub>1</sub>/<em>v</em><sub>2</sub> = (<em>d</em><sub>2</sub>/<em>d</em><sub>1</sub>)<sup>2</sup>. Jika diameter pipa dijadikan setengahnya, kecepatan fluida menjadi 4 kali. Inilah sebabnya air memancar lebih jauh saat ujung selang dipencet.
      </div>
    </section>

    <!-- ============ 3. BERNOULLI ============ -->
    <section class="bagian" id="bernoulli">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Asas Bernoulli</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Asas Bernoulli</span>
        <p>Pada fluida yang mengalir mendatar, makin <strong>besar kecepatan</strong> fluida, makin <strong>kecil tekanannya</strong>. Sebaliknya, makin kecil kecepatannya, makin besar tekanannya.</p>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/pipa-tiga-penampang.svg" alt="Fluida mengalir mendatar melalui pipa dengan bagian lebar A, bagian sempit B, dan bagian lebar C. Pada setiap bagian dipasang pipa tegak. Air di pipa tegak B paling rendah karena kecepatan fluida di B paling besar sehingga tekanannya paling kecil. Air di pipa tegak A dan C sama tinggi." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Di bagian sempit B, fluida bergerak paling cepat sehingga tekanannya paling kecil. Hal ini terlihat dari permukaan air di pipa tegak B yang paling rendah.</figcaption>
      </figure>

      <div class="sub">
        <h3><span class="no">3.1</span>Persamaan Bernoulli</h3>
        <p>Persamaan Bernoulli menghubungkan tekanan, kecepatan, dan ketinggian fluida di dua titik pada satu aliran. Persamaan ini merupakan bentuk hukum kekekalan energi pada fluida.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/bernoulli.svg" alt="Fluida mengalir dalam pipa dari bagian sempit yang rendah ke bagian lebar yang tinggi. Di titik 1 pada ketinggian h1, tekanannya P1 dan kecepatannya v1. Di titik 2 pada ketinggian h2, tekanannya P2 dan kecepatannya v2. Ketinggian diukur dari garis acuan." />
          </div>
          <figcaption><strong>Gambar 3.</strong> Besaran-besaran pada persamaan Bernoulli di titik 1 dan titik 2.</figcaption>
        </figure>

        <div class="rumus">
          <div class="rumus-judul">Persamaan Bernoulli</div>
          <div class="rumus-isi">
            <math display="block" aria-label="P 1 ditambah setengah rho v 1 kuadrat ditambah rho g h 1 sama dengan P 2 ditambah setengah rho v 2 kuadrat ditambah rho g h 2">
              <msub><mi>P</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mi>ρ</mi><mi>g</mi><msub><mi>h</mi><mn>1</mn></msub>
              <mo>=</mo>
              <msub><mi>P</mi><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mi>ρ</mi><mi>g</mi><msub><mi>h</mi><mn>2</mn></msub>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>P<sub>1</sub>, P<sub>2</sub></dt><dd>tekanan di titik 1 dan 2 <span class="satuan">(Pa)</span></dd>
              <dt>ρ</dt><dd>massa jenis fluida <span class="satuan">(kg/m³)</span></dd>
              <dt>v<sub>1</sub>, v<sub>2</sub></dt><dd>kecepatan fluida di titik 1 dan 2 <span class="satuan">(m/s)</span></dd>
              <dt>g</dt><dd>percepatan gravitasi <span class="satuan">(m/s²)</span></dd>
              <dt>h<sub>1</sub>, h<sub>2</sub></dt><dd>ketinggian titik 1 dan 2 dari garis acuan <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>

        <div class="catatan info">
          <strong class="judul">Arti setiap suku</strong>
          <em>P</em> adalah tekanan, ½ρ<em>v</em><sup>2</sup> adalah energi kinetik per satuan volume, dan ρ<em>gh</em> adalah energi potensial per satuan volume. Jumlah ketiganya selalu tetap di sepanjang aliran. Untuk pipa mendatar (<em>h</em><sub>1</sub> = <em>h</em><sub>2</sub>), suku ρ<em>gh</em> saling menghilangkan.
        </div>
      </div>
    </section>

    <!-- ============ 4. TANGKI BERLUBANG ============ -->
    <section class="bagian" id="tangki">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Tangki berlubang</h2>
      </div>

      <p>Tangki terbuka berisi air memiliki lubang kecil di dindingnya. Lubang itu berada sedalam <em>h</em> di bawah permukaan air dan setinggi <em>H</em> di atas tanah.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/tangki-berlubang.svg" alt="Tangki terbuka berisi air dengan lubang kecil di dinding kanan. Lubang berada sedalam h di bawah permukaan air dan setinggi H di atas tanah. Air keluar mendatar dengan kecepatan v lalu jatuh membentuk lintasan parabola dan mendarat sejauh x dari dinding tangki." />
        </div>
        <figcaption><strong>Gambar 4.</strong> Air memancar mendatar dari lubang dengan kecepatan <em>v</em> dan mendarat sejauh <em>x</em>.</figcaption>
      </figure>

      <p>Terapkan persamaan Bernoulli pada titik 1 (permukaan air) dan titik 2 (lubang):</p>
      <ol class="langkah">
        <li>Kedua titik terbuka ke udara, sehingga <em>P</em><sub>1</sub> = <em>P</em><sub>2</sub> = <em>P</em><sub>0</sub> dan keduanya saling menghilangkan.</li>
        <li>Tangki jauh lebih lebar daripada lubang, sehingga permukaan air turun sangat lambat: <em>v</em><sub>1</sub> ≈ 0.</li>
        <li>Misalkan <em>h</em><sub>1</sub> dan <em>h</em><sub>2</sub> adalah ketinggian permukaan air dan lubang dari tanah. Persamaan menjadi ρ<em>gh</em><sub>1</sub> = ½ρ<em>v</em><sub>2</sub><sup>2</sup> + ρ<em>gh</em><sub>2</sub>, sehingga <em>v</em><sub>2</sub><sup>2</sup> = 2<em>g</em>(<em>h</em><sub>1</sub> − <em>h</em><sub>2</sub>) = 2<em>gh</em>, karena <em>h</em><sub>1</sub> − <em>h</em><sub>2</sub> = <em>h</em>.</li>
      </ol>

      <div class="rumus">
        <div class="rumus-judul">Tangki berlubang (teorema Torricelli)</div>
        <div class="rumus-isi">
          <math display="block" aria-label="v sama dengan akar 2 g h">
            <mi>v</mi><mo>=</mo><msqrt><mn>2</mn><mi>g</mi><mi>h</mi></msqrt>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="x sama dengan 2 akar h H">
            <mi>x</mi><mo>=</mo><mn>2</mn><msqrt><mi>h</mi><mi>H</mi></msqrt>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>v</dt><dd>kecepatan air keluar dari lubang <span class="satuan">(m/s)</span></dd>
            <dt>h</dt><dd>kedalaman lubang dari permukaan air <span class="satuan">(m)</span></dd>
            <dt>H</dt><dd>tinggi lubang dari tanah <span class="satuan">(m)</span></dd>
            <dt>x</dt><dd>jarak mendatar tempat air jatuh dari dinding tangki <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Asal rumus jarak pancaran</strong>
        Air keluar mendatar lalu bergerak seperti gerak parabola. Waktu jatuhnya dari ketinggian <em>H</em> adalah <em>t</em> = √(2<em>H</em>/<em>g</em>), sehingga <em>x</em> = <em>vt</em> = √(2<em>gh</em>) · √(2<em>H</em>/<em>g</em>) = 2√(<em>hH</em>).
      </div>
    </section>

    <!-- ============ 5. PENYEMPROT ============ -->
    <section class="bagian" id="penyemprot">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Alat penyemprot</h2>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/penyemprot.svg" alt="Alat penyemprot. Pengisap pompa didorong sehingga udara keluar dengan cepat melalui ujung pompa yang sempit. Udara yang bergerak cepat di atas ujung pipa tandon membuat tekanan di sana kecil. Tekanan udara luar yang lebih besar mendorong cairan dari tandon naik melalui pipa, lalu cairan ikut tersembur bersama udara." />
        </div>
        <figcaption><strong>Gambar 5.</strong> Alat penyemprot (misalnya penyemprot obat nyamuk atau parfum) bekerja berdasarkan asas Bernoulli.</figcaption>
      </figure>

      <p>Saat batang pengisap ditekan, berikut yang terjadi:</p>
      <ol class="langkah">
        <li>Udara dipaksa keluar dari pompa melalui ujungnya yang berlubang sempit, sehingga kecepatannya besar.</li>
        <li>Udara yang bergerak cepat membuat tekanan di atas ujung pipa tandon menjadi kecil.</li>
        <li>Tekanan udara luar pada permukaan cairan di tandon lebih besar, sehingga cairan terdorong naik melalui pipa.</li>
        <li>Cairan yang sampai di ujung pipa ikut tersembur keluar bersama aliran udara.</li>
      </ol>
    </section>

    <!-- ============ 6. VENTURIMETER ============ -->
    <section class="bagian" id="venturimeter">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Venturimeter</h2>
      </div>

      <p><strong>Venturimeter</strong> adalah alat untuk mengukur kecepatan aliran fluida dalam pipa. Alat ini memanfaatkan perbedaan tekanan antara bagian pipa yang lebar (masukan) dan bagian yang sempit (leher).</p>

      <div class="sub">
        <h3><span class="no">6.1</span>Venturimeter tanpa manometer</h3>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/venturimeter.svg" alt="Venturimeter tanpa manometer. Fluida mengalir dari pipa lebar berpenampang A1 dengan kecepatan v1 ke pipa sempit berpenampang A2 dengan kecepatan v2. Pada kedua bagian dipasang pipa tegak. Selisih tinggi zat cair pada kedua pipa tegak adalah h." />
          </div>
          <figcaption><strong>Gambar 6.</strong> Venturimeter tanpa manometer. Selisih tinggi <em>h</em> menunjukkan selisih tekanan <em>P</em><sub>1</sub> − <em>P</em><sub>2</sub>.</figcaption>
        </figure>

        <p>Pipa mendatar, sehingga <em>h</em><sub>1</sub> = <em>h</em><sub>2</sub>. Langkah penurunan rumusnya:</p>
        <ol class="langkah">
          <li>Dari persamaan Bernoulli: <em>P</em><sub>1</sub> − <em>P</em><sub>2</sub> = ½ρ(<em>v</em><sub>2</sub><sup>2</sup> − <em>v</em><sub>1</sub><sup>2</sup>).</li>
          <li>Dari selisih tinggi pada pipa tegak: <em>P</em><sub>1</sub> − <em>P</em><sub>2</sub> = ρ<em>gh</em>.</li>
          <li>Dari asas kontinuitas: <em>v</em><sub>2</sub> = (<em>A</em><sub>1</sub>/<em>A</em><sub>2</sub>)<em>v</em><sub>1</sub>.</li>
          <li>Gabungkan ketiganya: <em>gh</em> = ½<em>v</em><sub>1</sub><sup>2</sup>[(<em>A</em><sub>1</sub>/<em>A</em><sub>2</sub>)<sup>2</sup> − 1].</li>
        </ol>

        <div class="rumus">
          <div class="rumus-judul">Venturimeter tanpa manometer</div>
          <div class="rumus-isi">
            <math display="block" aria-label="v 1 sama dengan akar dari 2 g h dibagi A 1 per A 2 kuadrat dikurangi 1">
              <msub><mi>v</mi><mn>1</mn></msub><mo>=</mo>
              <msqrt>
                <mfrac>
                  <mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow>
                  <mrow><msup><mrow><mo>(</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac><mo>)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow>
                </mfrac>
              </msqrt>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="v 2 sama dengan akar dari 2 g h dibagi 1 dikurangi A 2 per A 1 kuadrat">
              <msub><mi>v</mi><mn>2</mn></msub><mo>=</mo>
              <msqrt>
                <mfrac>
                  <mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow>
                  <mrow><mn>1</mn><mo>−</mo><msup><mrow><mo>(</mo><mfrac><msub><mi>A</mi><mn>2</mn></msub><msub><mi>A</mi><mn>1</mn></msub></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow>
                </mfrac>
              </msqrt>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>v<sub>1</sub></dt><dd>kecepatan fluida di pipa lebar <span class="satuan">(m/s)</span></dd>
              <dt>v<sub>2</sub></dt><dd>kecepatan fluida di pipa sempit <span class="satuan">(m/s)</span></dd>
              <dt>A<sub>1</sub>, A<sub>2</sub></dt><dd>luas penampang pipa lebar dan pipa sempit <span class="satuan">(m²)</span></dd>
              <dt>h</dt><dd>selisih tinggi zat cair pada kedua pipa tegak <span class="satuan">(m)</span></dd>
              <dt>g</dt><dd>percepatan gravitasi <span class="satuan">(m/s²)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">6.2</span>Venturimeter dengan manometer</h3>
        <p>Prinsipnya sama dengan venturimeter tanpa manometer. Bedanya, selisih tekanan dibaca dari <strong>manometer</strong>, yaitu tabung U berisi zat cair lain yang lebih rapat (biasanya raksa). Venturimeter jenis ini juga dapat dipakai untuk mengukur aliran gas.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/venturimeter-manometer.svg" alt="Venturimeter dengan manometer. Fluida bermassa jenis rho mengalir dari pipa lebar A1 ke pipa sempit A2. Di bawah pipa dipasang tabung U berisi raksa bermassa jenis rho aksen. Permukaan raksa di kaki kiri, di bawah pipa lebar, lebih rendah daripada di kaki kanan, di bawah pipa sempit. Selisih tinggi raksa adalah h." />
          </div>
          <figcaption><strong>Gambar 7.</strong> Venturimeter dengan manometer. Tekanan di pipa lebar lebih besar, sehingga raksa di kaki kiri terdorong lebih rendah.</figcaption>
        </figure>

        <p>Selisih tekanannya sekarang <em>P</em><sub>1</sub> − <em>P</em><sub>2</sub> = (ρ′ − ρ)<em>gh</em>. Dengan langkah yang sama seperti sebelumnya, diperoleh:</p>

        <div class="rumus">
          <div class="rumus-judul">Venturimeter dengan manometer</div>
          <div class="rumus-isi">
            <math display="block" aria-label="v 1 sama dengan akar dari 2 dikali rho aksen dikurangi rho dikali g h, dibagi rho dikali A 1 per A 2 kuadrat dikurangi 1">
              <msub><mi>v</mi><mn>1</mn></msub><mo>=</mo>
              <msqrt>
                <mfrac>
                  <mrow><mn>2</mn><mo>(</mo><msup><mi>ρ</mi><mo>′</mo></msup><mo>−</mo><mi>ρ</mi><mo>)</mo><mi>g</mi><mi>h</mi></mrow>
                  <mrow><mi>ρ</mi><mrow><mo>[</mo><msup><mrow><mo>(</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac><mo>)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>]</mo></mrow></mrow>
                </mfrac>
              </msqrt>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>ρ′</dt><dd>massa jenis zat cair dalam manometer, misalnya raksa <span class="satuan">(kg/m³)</span></dd>
              <dt>ρ</dt><dd>massa jenis fluida yang mengalir dalam pipa <span class="satuan">(kg/m³)</span></dd>
              <dt>h</dt><dd>selisih tinggi permukaan zat cair pada kedua kaki manometer <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>
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
              <td>Debit</td>
              <td><math><mi>Q</mi><mo>=</mo><mfrac><mi>V</mi><mi>t</mi></mfrac><mo>=</mo><mi>A</mi><mi>v</mi></math></td>
            </tr>
            <tr>
              <td>Kontinuitas</td>
              <td><math><msub><mi>A</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></math></td>
            </tr>
            <tr>
              <td>Bernoulli</td>
              <td><math><mi>P</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>ρ</mi><mi>g</mi><mi>h</mi><mo>=</mo><mtext>tetap</mtext></math></td>
            </tr>
            <tr>
              <td>Tangki berlubang</td>
              <td><math><mi>v</mi><mo>=</mo><msqrt><mn>2</mn><mi>g</mi><mi>h</mi></msqrt><mo>;</mo><mi>x</mi><mo>=</mo><mn>2</mn><msqrt><mi>h</mi><mi>H</mi></msqrt></math></td>
            </tr>
            <tr>
              <td>Venturimeter tanpa manometer</td>
              <td><math><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow><mrow><msup><mrow><mo>(</mo><msub><mi>A</mi><mn>1</mn></msub><mo>/</mo><msub><mi>A</mi><mn>2</mn></msub><mo>)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt></math></td>
            </tr>
            <tr>
              <td>Venturimeter dengan manometer</td>
              <td><math><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mo>(</mo><msup><mi>ρ</mi><mo>′</mo></msup><mo>−</mo><mi>ρ</mi><mo>)</mo><mi>g</mi><mi>h</mi></mrow><mrow><mi>ρ</mi><mo>[</mo><msup><mrow><mo>(</mo><msub><mi>A</mi><mn>1</mn></msub><mo>/</mo><msub><mi>A</mi><mn>2</mn></msub><mo>)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>]</mo></mrow></mfrac></msqrt></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

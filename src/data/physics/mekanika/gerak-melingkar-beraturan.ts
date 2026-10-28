/* ====== Bab 1-4 · Gerak Melingkar Beraturan ====== */

import { Chapter } from '../../materials';

export const gerakMelingkarBeraturan: Chapter = {
  chapterId: "1-4",
  title: "Gerak Melingkar Beraturan",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Kinematika</span>
      <h1>Gerak Melingkar Beraturan</h1>
      <p>Rangkuman gerak benda pada lintasan melingkar dengan kelajuan tetap: posisi sudut, periode dan frekuensi, kecepatan sudut dan linear, percepatan sentripetal, serta hubungan roda-roda.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian gerak melingkar beraturan</a></li>
        <li><a href="#posisi-sudut">Posisi sudut</a></li>
        <li><a href="#periode">Periode dan frekuensi</a></li>
        <li><a href="#kecepatan">Kecepatan sudut dan kecepatan linear</a></li>
        <li><a href="#percepatan">Percepatan dan gaya sentripetal</a></li>
        <li><a href="#roda">Hubungan roda-roda</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian gerak melingkar beraturan</h2>
      </div>

      <p>Gerak melingkar beraturan (GMB) adalah gerak yang lintasannya berbentuk lingkaran dengan <strong>besar</strong> kecepatan linear (<em>v</em>) tetap. Ciri-cirinya:</p>
      <ul class="poin">
        <li>Besar kecepatan linearnya tetap, tetapi <strong>arahnya selalu berubah</strong>.</li>
        <li>Besar dan arah kecepatan sudutnya tetap.</li>
        <li>Percepatan sudut dan percepatan tangensialnya sama dengan nol.</li>
      </ul>
    </section>

    <!-- ============ 2. POSISI SUDUT ============ -->
    <section class="bagian" id="posisi-sudut">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Posisi sudut</h2>
      </div>

      <div class="sub">
        <h3><span class="no">2.1</span>Satuan sudut</h3>
        <p>Pada GMB terbentuk sudut oleh vektor jari-jari yang menghubungkan dua posisi benda pada lintasan melingkar. Satuan sudut adalah derajat atau radian. Untuk satu putaran penuh:</p>
        <div class="rumus">
          <div class="rumus-judul">Konversi sudut</div>
          <div class="rumus-isi">
            <math display="block" aria-label="1 putaran sama dengan 360 derajat sama dengan 2 pi radian">
              <mn>1</mn><mtext>&nbsp;putaran</mtext><mo>=</mo><mn>360</mn><mo>°</mo><mo>=</mo><mn>2</mn><mi>π</mi><mtext>&nbsp;rad</mtext>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="1 radian kira-kira 57,3 derajat">
              <mn>1</mn><mtext>&nbsp;rad</mtext><mo>≈</mo><mn>57,3</mn><mo>°</mo>
            </math>
          </div>
        </div>
        <p>Posisi sudut benda yang bergerak melingkar selalu berubah terhadap waktu, sehingga posisi sudut merupakan fungsi waktu: θ = θ(t).</p>
      </div>

      <div class="sub">
        <h3><span class="no">2.2</span>Koordinat polar</h3>
        <p>Posisi benda yang bergerak melingkar dapat dinyatakan dalam koordinat polar, yaitu dengan jari-jari <em>r</em> dan sudut θ.</p>

        <figure class="gambar lebar">
          <div class="gambar-isi">
            <img src="/images/posisi-sudut.svg" alt="Kiri: titik A pada lingkaran dinyatakan dengan jari-jari r dan sudut theta terhadap sumbu x, dengan proyeksi x dan y. Kanan: benda bergerak dari A ke B menempuh busur s yang membentuk sudut theta di pusat lingkaran." />
          </div>
          <figcaption><strong>Gambar 1.</strong> Posisi benda dalam koordinat polar (kiri) dan hubungan busur dengan sudut (kanan).</figcaption>
        </figure>

        <div class="rumus">
          <div class="rumus-judul">Hubungan (r, θ) dengan (x, y)</div>
          <div class="rumus-isi">
            <math display="block" aria-label="x sama dengan r cos theta, y sama dengan r sin theta">
              <mi>x</mi><mo>=</mo><mi>r</mi><mi>cos</mi><mi>θ</mi>
              <mspace width="2em"/>
              <mi>y</mi><mo>=</mo><mi>r</mi><mi>sin</mi><mi>θ</mi>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="r sama dengan akar x kuadrat ditambah y kuadrat, theta sama dengan tan invers y per x">
              <mi>r</mi><mo>=</mo><msqrt><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></msqrt>
              <mspace width="2em"/>
              <mi>θ</mi><mo>=</mo><msup><mi>tan</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup>
              <mrow><mo>(</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>)</mo></mrow>
            </math>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">2.3</span>Hubungan sudut dan jarak tempuh</h3>
        <p>Jika benda bergerak dari A ke B menempuh lintasan (busur) sejauh <em>s</em> dan membentuk sudut θ (Gambar 1 kanan), maka:</p>
        <div class="rumus">
          <div class="rumus-judul">Sudut dan busur</div>
          <div class="rumus-isi">
            <math display="block" aria-label="theta sama dengan s dibagi r">
              <mi>θ</mi><mo>=</mo><mfrac><mi>s</mi><mi>r</mi></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>θ</dt><dd>posisi sudut <span class="satuan">(rad)</span></dd>
              <dt>s</dt><dd>panjang busur <span class="satuan">(m)</span></dd>
              <dt>r</dt><dd>jari-jari lintasan <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>
        <div class="catatan info">
          <strong class="judul">Pakai radian</strong>
          Rumus θ = s/r hanya berlaku jika θ dinyatakan dalam radian, bukan derajat.
        </div>
      </div>
    </section>

    <!-- ============ 3. PERIODE DAN FREKUENSI ============ -->
    <section class="bagian" id="periode">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Periode dan frekuensi</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Periode (T)</span>
        <p>Waktu yang diperlukan benda untuk melakukan <strong>satu kali putaran</strong>.</p>
      </div>
      <div class="kartu">
        <span class="istilah">Frekuensi (f)</span>
        <p>Banyaknya putaran yang dilakukan dalam <strong>satu satuan waktu</strong>.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Periode dan frekuensi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="T sama dengan t dibagi n, f sama dengan n dibagi t">
            <mi>T</mi><mo>=</mo><mfrac><mi>t</mi><mi>n</mi></mfrac>
            <mspace width="2em"/>
            <mi>f</mi><mo>=</mo><mfrac><mi>n</mi><mi>t</mi></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="T sama dengan 1 per f atau f sama dengan 1 per T">
            <mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mi>f</mi></mfrac>
            <mspace width="1em"/><mtext>atau</mtext><mspace width="1em"/>
            <mi>f</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>T</dt><dd>periode <span class="satuan">(s)</span></dd>
            <dt>f</dt><dd>frekuensi <span class="satuan">(Hz)</span></dd>
            <dt>t</dt><dd>waktu total <span class="satuan">(s)</span></dd>
            <dt>n</dt><dd>banyaknya putaran</dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ 4. KECEPATAN ============ -->
    <section class="bagian" id="kecepatan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Kecepatan sudut dan kecepatan linear</h2>
      </div>

      <div class="sub">
        <h3><span class="no">4.1</span>Kecepatan sudut</h3>
        <p>Kecepatan sudut adalah sudut yang ditempuh benda dalam selang waktu tertentu. Pada GMB, besar dan arah kecepatan sudut selalu sama.</p>
        <div class="rumus">
          <div class="rumus-judul">Kecepatan sudut</div>
          <div class="rumus-isi">
            <math display="block" aria-label="omega sama dengan delta theta dibagi delta t sama dengan 2 pi per T sama dengan 2 pi f">
              <mi>ω</mi><mo>=</mo>
              <mfrac><mrow><mi>Δ</mi><mi>θ</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo>
              <mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac><mo>=</mo>
              <mn>2</mn><mi>π</mi><mi>f</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>ω</dt><dd>kecepatan sudut <span class="satuan">(rad/s)</span></dd>
              <dt>Δθ</dt><dd>perubahan sudut <span class="satuan">(rad)</span></dd>
              <dt>Δt</dt><dd>selang waktu <span class="satuan">(s)</span></dd>
              <dt>T</dt><dd>periode <span class="satuan">(s)</span></dd>
              <dt>f</dt><dd>frekuensi <span class="satuan">(Hz)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">4.2</span>Kecepatan linear</h3>
        <p>Kelajuan linear adalah jarak yang ditempuh dibagi selang waktunya. Pada gerak melingkar, jarak yang ditempuh adalah panjang busur. Untuk satu putaran penuh, panjang busur sama dengan keliling lingkaran (2π<em>r</em>) dan waktunya sama dengan periode.</p>
        <div class="rumus">
          <div class="rumus-judul">Kecepatan linear</div>
          <div class="rumus-isi">
            <math display="block" aria-label="v sama dengan s dibagi delta t">
              <mi>v</mi><mo>=</mo><mfrac><mi>s</mi><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="v sama dengan 2 pi r per T sama dengan 2 pi r f sama dengan omega r">
              <mi>v</mi><mo>=</mo>
              <mfrac><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow><mi>T</mi></mfrac><mo>=</mo>
              <mn>2</mn><mi>π</mi><mi>r</mi><mi>f</mi><mo>=</mo><mi>ω</mi><mi>r</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>v</dt><dd>kecepatan linear <span class="satuan">(m/s)</span></dd>
              <dt>s</dt><dd>panjang busur <span class="satuan">(m)</span></dd>
              <dt>r</dt><dd>jari-jari <span class="satuan">(m)</span></dd>
              <dt>ω</dt><dd>kecepatan sudut <span class="satuan">(rad/s)</span></dd>
            </dl>
          </div>
        </div>
        <div class="catatan info">
          <strong class="judul">Arah kecepatan linear</strong>
          Arah <em>v</em> selalu <strong>menyinggung</strong> lingkaran (tangensial). Itulah sebabnya arah kecepatan linear terus berubah walaupun besarnya tetap.
        </div>
      </div>
    </section>

    <!-- ============ 5. PERCEPATAN ============ -->
    <section class="bagian" id="percepatan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Percepatan dan gaya sentripetal</h2>
      </div>

      <div class="sub">
        <h3><span class="no">5.1</span>Percepatan sudut dan percepatan tangensial</h3>
        <p>Percepatan sudut adalah perubahan kecepatan sudut tiap satuan waktu, sedangkan percepatan tangensial adalah perubahan besar kecepatan linear tiap satuan waktu.</p>
        <div class="rumus">
          <div class="rumus-judul">Percepatan sudut dan tangensial</div>
          <div class="rumus-isi">
            <math display="block" aria-label="alpha sama dengan delta omega dibagi delta t, a t sama dengan delta v dibagi delta t">
              <mi>α</mi><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>ω</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac>
              <mspace width="2em"/>
              <msub><mi>a</mi><mi>t</mi></msub><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>v</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac>
            </math>
          </div>
        </div>
        <p>Pada GMB, kecepatan sudut dan besar kecepatan linear selalu konstan, sehingga <strong>α = 0</strong> dan <strong><em>a</em><sub>t</sub> = 0</strong>.</p>
      </div>

      <div class="sub">
        <h3><span class="no">5.2</span>Percepatan sentripetal</h3>
        <p>Walaupun besar kecepatannya tetap, arah kecepatan benda terus berubah. Perubahan arah ini disebabkan oleh percepatan yang selalu mengarah ke <strong>pusat lingkaran</strong>, yang disebut percepatan sentripetal.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/percepatan-sentripetal.svg" alt="Benda bermassa m bergerak pada lintasan melingkar berjari-jari r. Kecepatan v menyinggung lingkaran, sedangkan percepatan sentripetal as dan gaya sentripetal Fs mengarah ke pusat lingkaran." />
          </div>
          <figcaption><strong>Gambar 2.</strong> Kecepatan menyinggung lintasan, percepatan dan gaya sentripetal menuju pusat.</figcaption>
        </figure>

        <div class="rumus">
          <div class="rumus-judul">Percepatan sentripetal</div>
          <div class="rumus-isi">
            <math display="block" aria-label="a s sama dengan v kuadrat dibagi r sama dengan omega kuadrat r">
              <msub><mi>a</mi><mi>s</mi></msub><mo>=</mo>
              <mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo>
              <msup><mi>ω</mi><mn>2</mn></msup><mi>r</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>a<sub>s</sub></dt><dd>percepatan sentripetal <span class="satuan">(m/s²)</span></dd>
              <dt>v</dt><dd>kecepatan linear <span class="satuan">(m/s)</span></dd>
              <dt>ω</dt><dd>kecepatan sudut <span class="satuan">(rad/s)</span></dd>
              <dt>r</dt><dd>jari-jari <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">5.3</span>Gaya sentripetal</h3>
        <p>Percepatan sentripetal muncul karena pada benda bekerja sebuah gaya yang arahnya sama dengan percepatan sentripetal, yaitu menuju pusat lingkaran. Gaya ini disebut <strong>gaya sentripetal</strong>.</p>
        <div class="rumus">
          <div class="rumus-judul">Gaya sentripetal</div>
          <div class="rumus-isi">
            <math display="block" aria-label="F s sama dengan m a s sama dengan m v kuadrat per r sama dengan m omega kuadrat r">
              <msub><mi>F</mi><mi>s</mi></msub><mo>=</mo><mi>m</mi><msub><mi>a</mi><mi>s</mi></msub><mo>=</mo>
              <mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo>
              <mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>r</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>F<sub>s</sub></dt><dd>gaya sentripetal <span class="satuan">(N)</span></dd>
              <dt>m</dt><dd>massa benda <span class="satuan">(kg)</span></dd>
              <dt>a<sub>s</sub></dt><dd>percepatan sentripetal <span class="satuan">(m/s²)</span></dd>
            </dl>
          </div>
        </div>
        <div class="catatan info">
          <strong class="judul">Gaya sentripetal bukan gaya baru</strong>
          Gaya sentripetal adalah sebutan untuk gaya yang mengarah ke pusat, misalnya tegangan tali pada batu yang diputar, atau gaya gesek ban pada mobil yang menikung.
        </div>
      </div>
    </section>

    <!-- ============ 6. HUBUNGAN RODA-RODA ============ -->
    <section class="bagian" id="roda">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Hubungan roda-roda</h2>
      </div>

      <p>Salah satu penerapan gerak melingkar adalah hubungan roda-roda. Ada tiga jenis hubungan roda-roda: sepusat, dihubungkan dengan rantai, dan saling bersinggungan.</p>

      <figure class="gambar lebar">
        <div class="gambar-isi">
          <img src="/images/hubungan-roda.svg" alt="Tiga jenis hubungan roda. Sepusat: dua roda berbagi poros, kecepatan sudutnya sama dan arah putarnya sama. Dihubungkan rantai: kecepatan linear kedua roda sama dan arah putarnya sama. Bersinggungan: kecepatan linear di titik singgung sama, tetapi arah putarnya berlawanan." />
        </div>
        <figcaption><strong>Gambar 3.</strong> Tiga jenis hubungan roda-roda.</figcaption>
      </figure>

      <div class="sub">
        <h3><span class="no">6.1</span>Sepusat</h3>
        <p>Dua roda dipasang pada poros yang sama, misalnya gir belakang dan roda belakang sepeda. Setiap roda memiliki <strong>kecepatan sudut yang sama</strong>.</p>
        <div class="rumus">
          <div class="rumus-judul">Roda sepusat</div>
          <div class="rumus-isi">
            <math display="block" aria-label="omega A sama dengan omega B, v A per r A sama dengan v B per r B">
              <msub><mi>ω</mi><mi>A</mi></msub><mo>=</mo><msub><mi>ω</mi><mi>B</mi></msub>
              <mspace width="2em"/>
              <mfrac><msub><mi>v</mi><mi>A</mi></msub><msub><mi>r</mi><mi>A</mi></msub></mfrac><mo>=</mo>
              <mfrac><msub><mi>v</mi><mi>B</mi></msub><msub><mi>r</mi><mi>B</mi></msub></mfrac>
            </math>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">6.2</span>Dihubungkan dengan rantai atau tali</h3>
        <p>Misalnya gir depan dan gir belakang sepeda yang dihubungkan rantai. Rantai menyinggung bagian luar kedua gir, sehingga <strong>besar dan arah kecepatan linear</strong> kedua roda sama. Kedua roda berputar searah.</p>
        <div class="rumus">
          <div class="rumus-judul">Roda dihubungkan rantai</div>
          <div class="rumus-isi">
            <math display="block" aria-label="v A sama dengan v B, omega A r A sama dengan omega B r B">
              <msub><mi>v</mi><mi>A</mi></msub><mo>=</mo><msub><mi>v</mi><mi>B</mi></msub>
              <mspace width="2em"/>
              <msub><mi>ω</mi><mi>A</mi></msub><msub><mi>r</mi><mi>A</mi></msub><mo>=</mo>
              <msub><mi>ω</mi><mi>B</mi></msub><msub><mi>r</mi><mi>B</mi></msub>
            </math>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">6.3</span>Saling bersinggungan</h3>
        <p>Misalnya roda-roda gigi pada jam analog. Jika satu roda berputar searah jarum jam, roda lainnya berputar berlawanan arah jarum jam, sehingga <strong>arah kecepatan sudutnya berlawanan</strong>. Akan tetapi, di titik singgung besar kecepatan linear kedua roda sama.</p>
        <div class="rumus">
          <div class="rumus-judul">Roda bersinggungan</div>
          <div class="rumus-isi">
            <math display="block" aria-label="v A sama dengan v B, omega A r A sama dengan omega B r B">
              <msub><mi>v</mi><mi>A</mi></msub><mo>=</mo><msub><mi>v</mi><mi>B</mi></msub>
              <mspace width="2em"/>
              <msub><mi>ω</mi><mi>A</mi></msub><msub><mi>r</mi><mi>A</mi></msub><mo>=</mo>
              <msub><mi>ω</mi><mi>B</mi></msub><msub><mi>r</mi><mi>B</mi></msub>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>ω</dt><dd>kecepatan sudut <span class="satuan">(rad/s)</span></dd>
              <dt>v</dt><dd>kecepatan linear <span class="satuan">(m/s)</span></dd>
              <dt>r</dt><dd>jari-jari <span class="satuan">(m)</span></dd>
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
            <tr><th>Besaran</th><th>Satuan</th><th>Rumus</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Periode</td><td>s</td>
              <td><math><mi>T</mi><mo>=</mo><mfrac><mi>t</mi><mi>n</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>f</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Frekuensi</td><td>Hz</td>
              <td><math><mi>f</mi><mo>=</mo><mfrac><mi>n</mi><mi>t</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Kecepatan sudut</td><td>rad/s</td>
              <td><math><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac><mo>=</mo><mn>2</mn><mi>π</mi><mi>f</mi></math></td>
            </tr>
            <tr>
              <td>Kecepatan linear</td><td>m/s</td>
              <td><math><mi>v</mi><mo>=</mo><mi>ω</mi><mi>r</mi></math></td>
            </tr>
            <tr>
              <td>Percepatan sentripetal</td><td>m/s²</td>
              <td><math><msub><mi>a</mi><mi>s</mi></msub><mo>=</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>r</mi></math></td>
            </tr>
            <tr>
              <td>Gaya sentripetal</td><td>N</td>
              <td><math><msub><mi>F</mi><mi>s</mi></msub><mo>=</mo><mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Roda sepusat</td><td>–</td>
              <td><math><msub><mi>ω</mi><mi>A</mi></msub><mo>=</mo><msub><mi>ω</mi><mi>B</mi></msub></math></td>
            </tr>
            <tr>
              <td>Roda rantai / bersinggungan</td><td>–</td>
              <td><math><msub><mi>v</mi><mi>A</mi></msub><mo>=</mo><msub><mi>v</mi><mi>B</mi></msub></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

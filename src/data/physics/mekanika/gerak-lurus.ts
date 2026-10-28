/* ====== Bab 1-2 · Gerak Lurus ====== */

import { Chapter } from '../../materials';

export const gerakLurus: Chapter = {
  chapterId: "1-2",
  title: "Gerak Lurus",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Kinematika</span>
      <h1>Gerak Lurus</h1>
      <p>Sebelumnya kita sudah mempelajari besaran-besaran pada gerak lurus, yaitu perpindahan, kecepatan, percepatan, dan sebagainya. Sekarang kita lanjutkan ke jenis-jenis gerak lurus: gerak lurus kecepatan konstan, gerak lurus percepatan konstan, gerak vertikal, dan gerak jatuh bebas.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#glb">Gerak lurus kecepatan konstan</a></li>
        <li><a href="#glbb">Gerak lurus percepatan konstan</a></li>
        <li><a href="#vertikal">Gerak vertikal</a></li>
        <li><a href="#jatuh-bebas">Gerak jatuh bebas</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. GERAK LURUS KECEPATAN KONSTAN ============ -->
    <section class="bagian" id="glb">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Gerak lurus kecepatan konstan</h2>
      </div>

      <p>Gerak lurus kecepatan konstan merupakan gerak benda pada lintasan lurus dengan kecepatan konstan. Cirinya:</p>
      <ul class="poin">
        <li>Lintasan benda <strong>lurus</strong>.</li>
        <li>Kecepatan <strong>konstan</strong> (tetap).</li>
      </ul>

      <p>Persamaan untuk gerak lurus kecepatan konstan adalah sebagai berikut:</p>

      <div class="rumus">
        <div class="rumus-judul">Gerak lurus kecepatan konstan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="v sama dengan s dibagi t">
            <mi>v</mi><mo>=</mo>
            <mfrac><mi>s</mi><mi>t</mi></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="s sama dengan v dikali t">
            <mi>s</mi><mo>=</mo><mi>v</mi><mo>·</mo><mi>t</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>v</dt><dd>kecepatan <span class="satuan">(m/s)</span></dd>
            <dt>s</dt><dd>jarak <span class="satuan">(m)</span></dd>
            <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>

      <p>Grafik yang menggambarkan gerak lurus kecepatan konstan adalah sebagai berikut:</p>

      <figure class="gambar lebar">
        <div class="gambar-isi">
          <img src="/images/grafik-glb.svg" alt="Tiga grafik gerak lurus kecepatan konstan. Grafik s terhadap t berupa garis lurus naik dari titik nol. Grafik v terhadap t berupa garis mendatar, dan luas di bawahnya sama dengan jarak s = v kali t. Grafik a terhadap t berimpit dengan sumbu t karena percepatannya nol." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Grafik s–t, v–t, dan a–t pada gerak lurus kecepatan konstan.</figcaption>
      </figure>
    </section>

    <!-- ============ 2. GERAK LURUS PERCEPATAN KONSTAN ============ -->
    <section class="bagian" id="glbb">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Gerak lurus percepatan konstan</h2>
      </div>

      <p>Gerak lurus percepatan konstan merupakan gerak benda pada lintasan lurus yang perubahan kecepatannya konstan, atau dengan kata lain percepatannya konstan. Cirinya:</p>
      <ul class="poin">
        <li>Lintasan benda <strong>lurus</strong>.</li>
        <li>Perubahan kecepatan konstan atau <strong>percepatan konstan</strong> (tetap).</li>
      </ul>

      <p>Persamaan pada gerak lurus percepatan konstan adalah sebagai berikut:</p>

      <div class="rumus">
        <div class="rumus-judul">Gerak lurus percepatan konstan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="v t sama dengan v nol ditambah a t">
            <msub><mi>v</mi><mi>t</mi></msub><mo>=</mo>
            <msub><mi>v</mi><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>t</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="v t kuadrat sama dengan v nol kuadrat ditambah 2 a s">
            <msubsup><mi>v</mi><mi>t</mi><mn>2</mn></msubsup><mo>=</mo>
            <msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><mi>a</mi><mi>s</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="s sama dengan v nol t ditambah setengah a t kuadrat">
            <mi>s</mi><mo>=</mo>
            <msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mo>+</mo>
            <mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>a</dt><dd>percepatan <span class="satuan">(m/s²)</span></dd>
            <dt>v<sub>0</sub></dt><dd>kecepatan awal <span class="satuan">(m/s)</span></dd>
            <dt>v<sub>t</sub></dt><dd>kecepatan akhir <span class="satuan">(m/s)</span></dd>
            <dt>s</dt><dd>jarak <span class="satuan">(m)</span></dd>
            <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Dipercepat atau diperlambat?</strong>
        Jika benda makin cepat, <em>a</em> bernilai positif. Jika benda makin lambat (diperlambat), <em>a</em> bernilai negatif.
      </div>

      <p>Grafik yang menggambarkan gerak lurus percepatan konstan adalah sebagai berikut:</p>

      <figure class="gambar lebar">
        <div class="gambar-isi">
          <img src="/images/grafik-glbb.svg" alt="Tiga grafik gerak lurus percepatan konstan. Grafik s terhadap t berupa parabola yang makin lama makin curam. Grafik v terhadap t berupa garis lurus miring dari v nol ke v t, dan luas di bawahnya sama dengan jarak. Grafik a terhadap t berupa garis mendatar karena percepatannya tetap." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Grafik s–t, v–t, dan a–t pada gerak lurus percepatan konstan.</figcaption>
      </figure>
    </section>

    <!-- ============ 3. GERAK VERTIKAL ============ -->
    <section class="bagian" id="vertikal">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Gerak vertikal</h2>
      </div>

      <p>Gerak vertikal merupakan gerak benda dengan lintasan berarah vertikal, baik vertikal ke atas maupun vertikal ke bawah. Pada gerak vertikal ke atas:</p>
      <ul class="poin">
        <li>Benda bergerak ke atas karena diberi kecepatan awal <em>v</em><sub>0</sub>.</li>
        <li>Benda yang bergerak vertikal ke atas melawan percepatan gravitasi yang bernilai <em>g</em> = 10 m/s².</li>
        <li>Saat benda mencapai ketinggian maksimum (<em>h</em><sub>maks</sub>), kecepatannya bernilai <strong>nol</strong>.</li>
      </ul>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/gerak-vertikal.svg" alt="Diagram gerak vertikal ke atas. Benda dilempar dari tanah dengan kecepatan awal v nol. Saat naik, kecepatannya mengecil karena gravitasi g mengarah ke bawah. Di ketinggian maksimum kecepatannya nol, lalu benda turun kembali." />
        </div>
        <figcaption><strong>Gambar 3.</strong> Benda dilempar vertikal ke atas, berhenti sesaat di <em>h</em><sub>maks</sub>, lalu jatuh kembali.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Gerak vertikal ke atas</div>
        <div class="rumus-isi">
          <math display="block" aria-label="v t sama dengan v nol dikurangi g t">
            <msub><mi>v</mi><mi>t</mi></msub><mo>=</mo>
            <msub><mi>v</mi><mn>0</mn></msub><mo>−</mo><mi>g</mi><mi>t</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="v t kuadrat sama dengan v nol kuadrat dikurangi 2 g h">
            <msubsup><mi>v</mi><mi>t</mi><mn>2</mn></msubsup><mo>=</mo>
            <msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><mi>g</mi><mi>h</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="h sama dengan v nol t dikurangi setengah g t kuadrat">
            <mi>h</mi><mo>=</mo>
            <msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mo>−</mo>
            <mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>g</dt><dd>percepatan gravitasi <span class="satuan">(m/s²)</span></dd>
            <dt>v<sub>0</sub></dt><dd>kecepatan awal <span class="satuan">(m/s)</span></dd>
            <dt>v<sub>t</sub></dt><dd>kecepatan akhir <span class="satuan">(m/s)</span></dd>
            <dt>h</dt><dd>ketinggian <span class="satuan">(m)</span></dd>
            <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Kenapa tandanya minus?</strong>
        Arah gravitasi (ke bawah) berlawanan dengan arah gerak benda (ke atas), sehingga benda diperlambat. Ini sama dengan gerak lurus percepatan konstan dengan <em>a</em> = −<em>g</em>.
      </div>
    </section>

    <!-- ============ 4. GERAK JATUH BEBAS ============ -->
    <section class="bagian" id="jatuh-bebas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Gerak jatuh bebas</h2>
      </div>

      <p>Ketika benda dijatuhkan begitu saja dari suatu ketinggian tanpa diberi kecepatan awal, gerak benda tersebut disebut <strong>gerak jatuh bebas</strong>.</p>
      <ul class="poin">
        <li>Besarnya kecepatan awal adalah nol (<em>v</em><sub>0</sub> = 0).</li>
        <li>Percepatan benda sama dengan percepatan gravitasi (<em>g</em> = 10 m/s²).</li>
      </ul>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/gerak-jatuh-bebas.svg" alt="Diagram gerak jatuh bebas. Benda dilepas dari ketinggian h dengan kecepatan awal nol. Gravitasi g mengarah ke bawah sehingga kecepatan benda makin besar saat jatuh." />
        </div>
        <figcaption><strong>Gambar 4.</strong> Benda dilepas tanpa kecepatan awal dan makin cepat saat jatuh.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Gerak jatuh bebas</div>
        <div class="rumus-isi">
          <math display="block" aria-label="v t sama dengan g t">
            <msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mi>g</mi><mi>t</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="v t kuadrat sama dengan 2 g h">
            <msubsup><mi>v</mi><mi>t</mi><mn>2</mn></msubsup><mo>=</mo><mn>2</mn><mi>g</mi><mi>h</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="h sama dengan setengah g t kuadrat">
            <mi>h</mi><mo>=</mo>
            <mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>g</dt><dd>percepatan gravitasi <span class="satuan">(m/s²)</span></dd>
            <dt>v<sub>t</sub></dt><dd>kecepatan akhir <span class="satuan">(m/s)</span></dd>
            <dt>h</dt><dd>ketinggian <span class="satuan">(m)</span></dd>
            <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Jenis gerak</th><th>Ciri utama</th><th>Rumus utama</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Kecepatan konstan</td><td>v tetap, a = 0</td>
              <td><math><mi>s</mi><mo>=</mo><mi>v</mi><mo>·</mo><mi>t</mi></math></td>
            </tr>
            <tr>
              <td>Percepatan konstan</td><td>a tetap</td>
              <td><math><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>t</mi></math></td>
            </tr>
            <tr>
              <td>Vertikal ke atas</td><td>a = −g, v = 0 di h<sub>maks</sub></td>
              <td><math><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mo>−</mo><mi>g</mi><mi>t</mi></math></td>
            </tr>
            <tr>
              <td>Jatuh bebas</td><td>v<sub>0</sub> = 0, a = g</td>
              <td><math><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mi>g</mi><mi>t</mi></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

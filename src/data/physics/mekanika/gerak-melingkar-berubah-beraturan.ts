/* ====== Bab 1-5 · Gerak Melingkar Berubah Beraturan ====== */

import { Chapter } from '../../materials';

export const gerakMelingkarBerubahBeraturan: Chapter = {
  chapterId: "1-5",
  title: "Gerak Melingkar Berubah Beraturan",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Kinematika</span>
      <h1>Gerak Melingkar Berubah Beraturan</h1>
      <p>Rangkuman gerak melingkar dengan percepatan sudut konstan: percepatan sudut, percepatan tangensial, percepatan total, kecepatan sudut, dan perpindahan sudut.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian gerak melingkar berubah beraturan</a></li>
        <li><a href="#percepatan-sudut">Percepatan sudut</a></li>
        <li><a href="#percepatan-tangensial">Percepatan tangensial dan percepatan total</a></li>
        <li><a href="#kecepatan-perpindahan">Kecepatan sudut dan perpindahan sudut</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian gerak melingkar berubah beraturan</h2>
      </div>

      <p>Gerak melingkar berubah beraturan (GMBB) merupakan gerak benda pada lintasan melingkar dengan kecepatan yang <strong>tidak konstan</strong>. Artinya, benda memiliki <strong>percepatan sudut yang konstan</strong>.</p>
      <ul class="poin">
        <li>Jika percepatan sudut <strong>searah</strong> dengan kecepatan sudut, putaran benda makin cepat.</li>
        <li>Jika percepatan sudut <strong>berlawanan arah</strong> dengan kecepatan sudut, putaran benda makin lambat.</li>
      </ul>

      <div class="catatan info">
        <strong class="judul">Bedanya dengan GMB</strong>
        Pada GMB kecepatan sudutnya tetap (α = 0). Pada GMBB kecepatan sudutnya berubah secara teratur (α tetap, tetapi tidak nol).
      </div>
    </section>

    <!-- ============ 2. PERCEPATAN SUDUT ============ -->
    <section class="bagian" id="percepatan-sudut">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Percepatan sudut</h2>
      </div>

      <p>Pada GMBB, kecepatan sudut benda berubah secara beraturan sehingga benda memiliki percepatan sudut yang bernilai konstan. Jika kecepatan sudut berubah dari ω<sub>0</sub> menjadi ω<sub>t</sub> dalam selang waktu Δt, maka:</p>

      <div class="rumus">
        <div class="rumus-judul">Percepatan sudut</div>
        <div class="rumus-isi">
          <math display="block" aria-label="alpha sama dengan delta omega dibagi delta t sama dengan omega t dikurangi omega nol dibagi delta t">
            <mi>α</mi><mo>=</mo>
            <mfrac><mrow><mi>Δ</mi><mi>ω</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo>
            <mfrac>
              <mrow><msub><mi>ω</mi><mi>t</mi></msub><mo>−</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow>
              <mrow><mi>Δ</mi><mi>t</mi></mrow>
            </mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>α</dt><dd>percepatan sudut <span class="satuan">(rad/s²)</span></dd>
            <dt>ω<sub>0</sub></dt><dd>kecepatan sudut awal <span class="satuan">(rad/s)</span></dd>
            <dt>ω<sub>t</sub></dt><dd>kecepatan sudut akhir <span class="satuan">(rad/s)</span></dd>
            <dt>Δt</dt><dd>selang waktu <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ 3. PERCEPATAN TANGENSIAL ============ -->
    <section class="bagian" id="percepatan-tangensial">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Percepatan tangensial dan percepatan total</h2>
      </div>

      <div class="sub">
        <h3><span class="no">3.1</span>Percepatan tangensial</h3>
        <p>Percepatan yang menyebabkan kecepatan linear (tangensial) berubah secara beraturan disebut <strong>percepatan tangensial</strong>. Arahnya menyinggung lintasan, bisa searah atau berlawanan arah dengan kecepatan linear (<em>v</em>).</p>

        <div class="rumus">
          <div class="rumus-judul">Percepatan tangensial</div>
          <div class="rumus-isi">
            <math display="block" aria-label="a t sama dengan alpha r">
              <msub><mi>a</mi><mi>t</mi></msub><mo>=</mo><mi>α</mi><mi>r</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>a<sub>t</sub></dt><dd>percepatan tangensial <span class="satuan">(m/s²)</span></dd>
              <dt>α</dt><dd>percepatan sudut <span class="satuan">(rad/s²)</span></dd>
              <dt>r</dt><dd>jari-jari <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">3.2</span>Percepatan total</h3>
        <p>Pada GMBB benda mengalami dua percepatan, yaitu percepatan sentripetal dan percepatan tangensial, yang arahnya saling <strong>tegak lurus</strong>.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/percepatan-gmbb.svg" alt="Benda di puncak lintasan melingkar. Percepatan tangensial at menyinggung lintasan, percepatan sentripetal as mengarah ke pusat, dan keduanya tegak lurus. Percepatan total a adalah diagonal jajaran genjang dari kedua percepatan itu." />
          </div>
          <figcaption><strong>Gambar 1.</strong> Percepatan tangensial dan sentripetal saling tegak lurus. Resultannya adalah percepatan total <em>a</em>.</figcaption>
        </figure>

        <div class="rumus">
          <div class="rumus-judul">Percepatan total</div>
          <div class="rumus-isi">
            <math display="block" aria-label="a sama dengan akar dari a t kuadrat ditambah a s kuadrat">
              <mi>a</mi><mo>=</mo>
              <msqrt><msubsup><mi>a</mi><mi>t</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>a</mi><mi>s</mi><mn>2</mn></msubsup></msqrt>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>a</dt><dd>percepatan total <span class="satuan">(m/s²)</span></dd>
              <dt>a<sub>t</sub></dt><dd>percepatan tangensial <span class="satuan">(m/s²)</span></dd>
              <dt>a<sub>s</sub></dt><dd>percepatan sentripetal, <em>v</em>²/<em>r</em> <span class="satuan">(m/s²)</span></dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 4. KECEPATAN DAN PERPINDAHAN SUDUT ============ -->
    <section class="bagian" id="kecepatan-perpindahan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Kecepatan sudut dan perpindahan sudut</h2>
      </div>

      <div class="sub">
        <h3><span class="no">4.1</span>Kecepatan sudut pada saat t</h3>
        <div class="rumus">
          <div class="rumus-judul">Kecepatan sudut</div>
          <div class="rumus-isi">
            <math display="block" aria-label="omega t sama dengan omega nol ditambah alpha t">
              <msub><mi>ω</mi><mi>t</mi></msub><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mo>+</mo><mi>α</mi><mi>t</mi>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="omega t kuadrat sama dengan omega nol kuadrat ditambah 2 alpha theta">
              <msubsup><mi>ω</mi><mi>t</mi><mn>2</mn></msubsup><mo>=</mo>
              <msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><mi>α</mi><mi>θ</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>ω<sub>t</sub></dt><dd>kecepatan sudut pada saat t <span class="satuan">(rad/s)</span></dd>
              <dt>ω<sub>0</sub></dt><dd>kecepatan sudut awal <span class="satuan">(rad/s)</span></dd>
              <dt>α</dt><dd>percepatan sudut <span class="satuan">(rad/s²)</span></dd>
              <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
              <dt>θ</dt><dd>perpindahan sudut <span class="satuan">(rad)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">4.2</span>Perpindahan sudut</h3>
        <div class="rumus">
          <div class="rumus-judul">Perpindahan sudut</div>
          <div class="rumus-isi">
            <math display="block" aria-label="theta sama dengan omega nol t ditambah setengah alpha t kuadrat">
              <mi>θ</mi><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mi>t</mi><mo>+</mo>
              <mfrac><mn>1</mn><mn>2</mn></mfrac><mi>α</mi><msup><mi>t</mi><mn>2</mn></msup>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>θ</dt><dd>perpindahan sudut <span class="satuan">(rad)</span></dd>
              <dt>ω<sub>0</sub></dt><dd>kecepatan sudut awal <span class="satuan">(rad/s)</span></dd>
              <dt>α</dt><dd>percepatan sudut <span class="satuan">(rad/s²)</span></dd>
              <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Rumusnya mirip GLBB</strong>
        Semua rumus GMBB punya pasangan di GLBB. Cukup ganti <em>s</em> dengan θ, <em>v</em> dengan ω, dan <em>a</em> dengan α. Lihat tabel ringkasan di bawah.
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan: GLBB dan GMBB</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Gerak lurus (GLBB)</th><th>Gerak melingkar (GMBB)</th><th>Hubungan</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><math><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>t</mi></math></td>
              <td><math><msub><mi>ω</mi><mi>t</mi></msub><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mo>+</mo><mi>α</mi><mi>t</mi></math></td>
              <td><math><mi>v</mi><mo>=</mo><mi>ω</mi><mi>r</mi></math></td>
            </tr>
            <tr>
              <td><math><mi>s</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup></math></td>
              <td><math><mi>θ</mi><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>α</mi><msup><mi>t</mi><mn>2</mn></msup></math></td>
              <td><math><mi>s</mi><mo>=</mo><mi>θ</mi><mi>r</mi></math></td>
            </tr>
            <tr>
              <td><math><msubsup><mi>v</mi><mi>t</mi><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><mi>a</mi><mi>s</mi></math></td>
              <td><math><msubsup><mi>ω</mi><mi>t</mi><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><mi>α</mi><mi>θ</mi></math></td>
              <td><math><msub><mi>a</mi><mi>t</mi></msub><mo>=</mo><mi>α</mi><mi>r</mi></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

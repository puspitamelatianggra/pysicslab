/* ====== Bab 1-8 · Momentum dan Impuls ====== */

import { Chapter } from '../../materials';

export const momentumImpuls: Chapter = {
  chapterId: "1-8",
  title: "Momentum dan Impuls",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Dinamika</span>
      <h1>Momentum dan Impuls</h1>
      <p>Rangkuman momentum, impuls, hubungan keduanya, hukum kekekalan momentum, dan jenis-jenis tumbukan.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#momentum">Momentum</a></li>
        <li><a href="#impuls">Impuls</a></li>
        <li><a href="#hubungan">Hubungan impuls dan momentum</a></li>
        <li><a href="#kekekalan">Hukum kekekalan momentum</a></li>
        <li><a href="#tumbukan">Tumbukan</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. MOMENTUM ============ -->
    <section class="bagian" id="momentum">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Momentum</h2>
      </div>

      <div class="kartu">
        <span class="tipe vektor">Vektor</span>
        <span class="istilah">Momentum (p)</span>
        <p>Hasil kali massa dan kecepatan benda. Momentum menunjukkan seberapa sulit sebuah benda yang bergerak untuk dihentikan. Arahnya sama dengan arah kecepatan.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Momentum</div>
        <div class="rumus-isi">
          <math display="block" aria-label="p sama dengan m v">
            <mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>p</dt><dd>momentum <span class="satuan">(kg·m/s)</span></dd>
            <dt>m</dt><dd>massa <span class="satuan">(kg)</span></dd>
            <dt>v</dt><dd>kecepatan <span class="satuan">(m/s)</span></dd>
          </dl>
        </div>
      </div>

      <p>Truk yang melaju pelan bisa memiliki momentum lebih besar daripada sepeda yang melaju kencang, karena massanya jauh lebih besar.</p>
    </section>

    <!-- ============ 2. IMPULS ============ -->
    <section class="bagian" id="impuls">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Impuls</h2>
      </div>

      <div class="kartu">
        <span class="tipe vektor">Vektor</span>
        <span class="istilah">Impuls (I)</span>
        <p>Hasil kali gaya dengan selang waktu gaya itu bekerja. Impuls terjadi pada peristiwa singkat, seperti bola ditendang, dipukul, atau bertumbukan. Arahnya sama dengan arah gaya.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Impuls</div>
        <div class="rumus-isi">
          <math display="block" aria-label="I sama dengan F delta t">
            <mi>I</mi><mo>=</mo><mi>F</mi><mi>Δ</mi><mi>t</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>I</dt><dd>impuls <span class="satuan">(N·s)</span></dd>
            <dt>F</dt><dd>gaya <span class="satuan">(N)</span></dd>
            <dt>Δt</dt><dd>selang waktu gaya bekerja <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Dari grafik F–t</strong>
        Jika gaya berubah-ubah, impuls sama dengan <strong>luas daerah di bawah grafik</strong> gaya terhadap waktu.
      </div>
    </section>

    <!-- ============ 3. HUBUNGAN ============ -->
    <section class="bagian" id="hubungan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Hubungan impuls dan momentum</h2>
      </div>

      <p>Dari Hukum II Newton, <em>F</em> = <em>ma</em> = <em>m</em>(<em>v</em><sub>2</sub> − <em>v</em><sub>1</sub>)/Δ<em>t</em>. Jika kedua ruas dikalikan Δ<em>t</em>, diperoleh bahwa impuls sama dengan perubahan momentum.</p>

      <div class="rumus">
        <div class="rumus-judul">Teorema impuls-momentum</div>
        <div class="rumus-isi">
          <math display="block" aria-label="I sama dengan delta p sama dengan m v 2 dikurangi m v 1">
            <mi>I</mi><mo>=</mo><mi>Δ</mi><mi>p</mi><mo>=</mo>
            <mi>m</mi><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><mi>m</mi><msub><mi>v</mi><mn>1</mn></msub>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="F delta t sama dengan m dikali v 2 dikurangi v 1">
            <mi>F</mi><mi>Δ</mi><mi>t</mi><mo>=</mo>
            <mi>m</mi><mo>(</mo><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><msub><mi>v</mi><mn>1</mn></msub><mo>)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Δp</dt><dd>perubahan momentum <span class="satuan">(kg·m/s)</span></dd>
            <dt>v<sub>1</sub></dt><dd>kecepatan awal <span class="satuan">(m/s)</span></dd>
            <dt>v<sub>2</sub></dt><dd>kecepatan akhir <span class="satuan">(m/s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Perhatikan tanda arah</strong>
        Kecepatan adalah vektor. Jika bola memantul balik, kecepatan akhirnya diberi tanda <strong>negatif</strong>. Contoh: bola 0,2 kg datang dengan 10 m/s lalu memantul balik dengan 8 m/s, maka Δ<em>p</em> = 0,2(−8 − 10) = −3,6 kg·m/s.
      </div>

      <p>Untuk perubahan momentum yang sama, <strong>memperpanjang waktu tumbukan</strong> membuat gaya yang dirasakan lebih kecil. Prinsip ini dipakai pada:</p>
      <ul class="poin">
        <li>Kantong udara (airbag) dan sabuk pengaman pada mobil.</li>
        <li>Sarung tinju dan matras untuk olahraga lompat.</li>
        <li>Menekuk lutut saat mendarat dari lompatan.</li>
      </ul>
    </section>

    <!-- ============ 4. KEKEKALAN MOMENTUM ============ -->
    <section class="bagian" id="kekekalan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Hukum kekekalan momentum</h2>
      </div>

      <p>Jika tidak ada gaya luar yang bekerja pada sistem (ΣF<sub>luar</sub> = 0), maka <strong>jumlah momentum sebelum dan sesudah</strong> tumbukan atau ledakan adalah sama.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/tumbukan.svg" alt="Dua benda bertumbukan. Sebelum tumbukan, benda 1 bermassa m1 bergerak ke kanan dengan kecepatan v1 dan benda 2 bermassa m2 bergerak ke kiri dengan kecepatan v2. Sesudah tumbukan, benda 1 bergerak ke kiri dengan kecepatan v1 aksen dan benda 2 ke kanan dengan kecepatan v2 aksen." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Kecepatan dua benda sebelum dan sesudah tumbukan.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Hukum kekekalan momentum</div>
        <div class="rumus-isi">
          <math display="block" aria-label="m 1 v 1 ditambah m 2 v 2 sama dengan m 1 v 1 aksen ditambah m 2 v 2 aksen">
            <msub><mi>m</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo>
            <msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo>
            <msub><mi>m</mi><mn>1</mn></msub><msubsup><mi>v</mi><mn>1</mn><mo>′</mo></msubsup><mo>+</mo>
            <msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>v</mi><mn>2</mn><mo>′</mo></msubsup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>m<sub>1</sub>, m<sub>2</sub></dt><dd>massa benda 1 dan 2 <span class="satuan">(kg)</span></dd>
            <dt>v<sub>1</sub>, v<sub>2</sub></dt><dd>kecepatan sebelum tumbukan <span class="satuan">(m/s)</span></dd>
            <dt>v<sub>1</sub>′, v<sub>2</sub>′</dt><dd>kecepatan sesudah tumbukan <span class="satuan">(m/s)</span></dd>
          </dl>
        </div>
      </div>

      <p>Contoh penerapan:</p>
      <ul class="poin">
        <li>Senapan terdorong ke belakang saat peluru ditembakkan ke depan.</li>
        <li>Roket bergerak maju karena menyemburkan gas ke belakang.</li>
        <li>Perahu bergerak mundur saat penumpangnya melompat ke depan.</li>
      </ul>
    </section>

    <!-- ============ 5. TUMBUKAN ============ -->
    <section class="bagian" id="tumbukan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Tumbukan</h2>
      </div>

      <div class="sub">
        <h3><span class="no">5.1</span>Koefisien restitusi</h3>
        <p>Jenis tumbukan dibedakan berdasarkan <strong>koefisien restitusi</strong> (<em>e</em>), yaitu perbandingan kecepatan relatif sesudah dan sebelum tumbukan.</p>
        <div class="rumus">
          <div class="rumus-judul">Koefisien restitusi</div>
          <div class="rumus-isi">
            <math display="block" aria-label="e sama dengan negatif v 1 aksen dikurangi v 2 aksen dibagi v 1 dikurangi v 2">
              <mi>e</mi><mo>=</mo><mo>−</mo>
              <mfrac>
                <mrow><msubsup><mi>v</mi><mn>1</mn><mo>′</mo></msubsup><mo>−</mo><msubsup><mi>v</mi><mn>2</mn><mo>′</mo></msubsup></mrow>
                <mrow><msub><mi>v</mi><mn>1</mn></msub><mo>−</mo><msub><mi>v</mi><mn>2</mn></msub></mrow>
              </mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>e</dt><dd>koefisien restitusi, nilainya 0 ≤ e ≤ 1</dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">5.2</span>Jenis-jenis tumbukan</h3>
        <div class="tabel-wrap">
          <table>
            <thead>
              <tr><th>Jenis tumbukan</th><th>Nilai e</th><th>Yang kekal</th><th>Ciri</th></tr>
            </thead>
            <tbody>
              <tr><td>Lenting sempurna</td><td>e = 1</td><td>Momentum dan energi kinetik</td><td>Benda saling memantul tanpa kehilangan energi</td></tr>
              <tr><td>Lenting sebagian</td><td>0 &lt; e &lt; 1</td><td>Momentum saja</td><td>Sebagian energi kinetik hilang (menjadi panas, bunyi)</td></tr>
              <tr><td>Tidak lenting sama sekali</td><td>e = 0</td><td>Momentum saja</td><td>Benda menyatu sesudah tumbukan: v<sub>1</sub>′ = v<sub>2</sub>′</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">5.3</span>Bola jatuh dan memantul</h3>
        <p>Bola yang dijatuhkan dari ketinggian <em>h</em><sub>1</sub> lalu memantul setinggi <em>h</em><sub>2</sub> mengalami tumbukan lenting sebagian dengan lantai. Koefisien restitusinya:</p>
        <div class="rumus">
          <div class="rumus-judul">Restitusi bola memantul</div>
          <div class="rumus-isi">
            <math display="block" aria-label="e sama dengan akar h 2 dibagi h 1">
              <mi>e</mi><mo>=</mo><msqrt><mfrac><msub><mi>h</mi><mn>2</mn></msub><msub><mi>h</mi><mn>1</mn></msub></mfrac></msqrt>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>h<sub>1</sub></dt><dd>tinggi awal bola <span class="satuan">(m)</span></dd>
              <dt>h<sub>2</sub></dt><dd>tinggi pantulan <span class="satuan">(m)</span></dd>
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
            <tr><th>Konsep</th><th>Satuan</th><th>Rumus</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Momentum</td><td>kg·m/s</td>
              <td><math><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi></math></td>
            </tr>
            <tr>
              <td>Impuls</td><td>N·s</td>
              <td><math><mi>I</mi><mo>=</mo><mi>F</mi><mi>Δ</mi><mi>t</mi></math></td>
            </tr>
            <tr>
              <td>Impuls dan momentum</td><td>–</td>
              <td><math><mi>F</mi><mi>Δ</mi><mi>t</mi><mo>=</mo><mi>m</mi><mo>(</mo><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><msub><mi>v</mi><mn>1</mn></msub><mo>)</mo></math></td>
            </tr>
            <tr>
              <td>Kekekalan momentum</td><td>–</td>
              <td><math><msub><mi>m</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msubsup><mi>v</mi><mn>1</mn><mo>′</mo></msubsup><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>v</mi><mn>2</mn><mo>′</mo></msubsup></math></td>
            </tr>
            <tr>
              <td>Koefisien restitusi</td><td>–</td>
              <td><math><mi>e</mi><mo>=</mo><mo>−</mo><mfrac><mrow><msubsup><mi>v</mi><mn>1</mn><mo>′</mo></msubsup><mo>−</mo><msubsup><mi>v</mi><mn>2</mn><mo>′</mo></msubsup></mrow><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>−</mo><msub><mi>v</mi><mn>2</mn></msub></mrow></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

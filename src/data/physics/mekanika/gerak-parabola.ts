/* ====== Bab 1-3 · Gerak Parabola ====== */

import { Chapter } from '../../materials';

export const gerakParabola: Chapter = {
  chapterId: "1-3",
  title: "Gerak Parabola",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Kinematika</span>
      <h1>Gerak Parabola</h1>
      <p>Rangkuman gerak dua dimensi yang lintasannya berbentuk parabola: perpaduan gerak lurus kecepatan konstan pada sumbu x dan gerak lurus percepatan konstan pada sumbu y.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian gerak parabola</a></li>
        <li><a href="#sumbu-x">Komponen gerak pada sumbu x</a></li>
        <li><a href="#sumbu-y">Komponen gerak pada sumbu y</a></li>
        <li><a href="#besaran">Besaran pada gerak parabola</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian gerak parabola</h2>
      </div>

      <p>Gerak parabola merupakan gerak dua dimensi yang membentuk sudut elevasi dengan sumbu x dan sumbu y. Pada gerak parabola, gerak benda dapat diuraikan menjadi dua:</p>

      <div class="cabang">
        <div class="kartu">
          <h3>Sumbu x</h3>
          <p>Gerak lurus <strong>kecepatan konstan</strong> (GLB). Percepatannya nol.</p>
        </div>
        <div class="kartu">
          <h3>Sumbu y</h3>
          <p>Gerak lurus <strong>percepatan konstan</strong> (GLBB). Percepatannya −<em>g</em>.</p>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/gerak-parabola.svg" alt="Lintasan gerak parabola dari titik A ke titik B dengan titik tertinggi C. Komponen kecepatan mendatar vx selalu sama panjang di setiap titik. Komponen kecepatan vertikal vy mengecil saat naik, bernilai nol di titik C, lalu membesar ke bawah saat turun. Gravitasi g mengarah ke bawah." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Lintasan gerak parabola dan komponen kecepatannya di beberapa titik.</figcaption>
      </figure>

      <p>Berdasarkan gambar di atas, gerak parabola memiliki beberapa kondisi:</p>
      <ul class="poin">
        <li>Titik <strong>A</strong> merupakan titik awal gerak benda. Benda memiliki kecepatan awal <em>v</em><sub>0</sub>.</li>
        <li>Titik <strong>B</strong> merupakan akhir lintasan benda.</li>
        <li>Titik <strong>C</strong> merupakan titik tertinggi. Benda berada pada ketinggian maksimum <em>y</em><sub>maks</sub>, dan di titik ini kecepatan vertikal benda bernilai nol (<em>v</em><sub>y</sub> = 0).</li>
      </ul>
    </section>

    <!-- ============ 2. SUMBU X ============ -->
    <section class="bagian" id="sumbu-x">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Komponen gerak pada sumbu x</h2>
      </div>

      <div class="sub">
        <h3><span class="no">2.1</span>Kecepatan</h3>
        <p>Gerak benda pada sumbu x memiliki kecepatan konstan (GLB), sehingga di setiap titik lintasan nilai kecepatan pada sumbu x <strong>tetap</strong>. Jika kecepatan awal benda <em>v</em><sub>0</sub> membentuk sudut elevasi θ terhadap sumbu x, maka kecepatan awal pada sumbu x adalah <em>v</em><sub>0</sub> cos θ.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/komponen-kecepatan-parabola.svg" alt="Kecepatan awal v0 membentuk sudut theta terhadap sumbu x. Komponen mendatarnya v0 cos theta dan komponen vertikalnya v0 sin theta." />
          </div>
          <figcaption><strong>Gambar 2.</strong> Penguraian kecepatan awal menjadi komponen sumbu x dan sumbu y.</figcaption>
        </figure>

        <div class="rumus">
          <div class="rumus-judul">Kecepatan pada sumbu x</div>
          <div class="rumus-isi">
            <math display="block" aria-label="v x sama dengan v nol x sama dengan v nol cos theta">
              <msub><mi>v</mi><mi>x</mi></msub><mo>=</mo>
              <msub><mi>v</mi><mrow><mn>0</mn><mi>x</mi></mrow></msub><mo>=</mo>
              <msub><mi>v</mi><mn>0</mn></msub><mi>cos</mi><mi>θ</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>v<sub>x</sub></dt><dd>kecepatan di sumbu x <span class="satuan">(m/s)</span></dd>
              <dt>v<sub>0x</sub></dt><dd>kecepatan awal di sumbu x <span class="satuan">(m/s)</span></dd>
              <dt>v<sub>0</sub></dt><dd>kecepatan awal benda <span class="satuan">(m/s)</span></dd>
              <dt>θ</dt><dd>sudut elevasi</dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">2.2</span>Posisi</h3>
        <p>Karena kecepatannya tetap, perubahan posisi pada sumbu x juga beraturan, sehingga berlaku persamaan GLB:</p>

        <div class="rumus">
          <div class="rumus-judul">Posisi pada sumbu x</div>
          <div class="rumus-isi">
            <math display="block" aria-label="x sama dengan v nol cos theta dikali t">
              <mi>x</mi><mo>=</mo>
              <msub><mi>v</mi><mn>0</mn></msub><mi>cos</mi><mi>θ</mi><mo>·</mo><mi>t</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>x</dt><dd>posisi benda di sumbu x <span class="satuan">(m)</span></dd>
              <dt>v<sub>0</sub></dt><dd>kecepatan awal benda <span class="satuan">(m/s)</span></dd>
              <dt>θ</dt><dd>sudut elevasi</dd>
              <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
            </dl>
          </div>
        </div>

        <ul class="poin">
          <li>Kecepatan yang konstan membuat percepatan di sumbu x bernilai <strong>nol</strong> (<em>a</em><sub>x</sub> = 0).</li>
        </ul>
      </div>
    </section>

    <!-- ============ 3. SUMBU Y ============ -->
    <section class="bagian" id="sumbu-y">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Komponen gerak pada sumbu y</h2>
      </div>

      <div class="sub">
        <h3><span class="no">3.1</span>Percepatan</h3>
        <p>Gerak benda pada sumbu y merupakan GLBB, sehingga benda memiliki percepatan. Percepatan yang memengaruhi benda dalam arah sumbu y (<em>a</em><sub>y</sub>) adalah percepatan gravitasi (<em>g</em>) yang arahnya ke bawah.</p>

        <div class="rumus">
          <div class="rumus-judul">Percepatan pada sumbu y</div>
          <div class="rumus-isi">
            <math display="block" aria-label="a y sama dengan negatif g">
              <msub><mi>a</mi><mi>y</mi></msub><mo>=</mo><mo>−</mo><mi>g</mi>
            </math>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">3.2</span>Kecepatan</h3>
        <p>Karena ada percepatan, komponen kecepatan di sumbu y berubah secara konstan di setiap titik lintasan. Kecepatan awalnya adalah <em>v</em><sub>0</sub> sin θ (lihat Gambar 2).</p>

        <div class="rumus">
          <div class="rumus-judul">Kecepatan pada sumbu y</div>
          <div class="rumus-isi">
            <math display="block" aria-label="v nol y sama dengan v nol sin theta">
              <msub><mi>v</mi><mrow><mn>0</mn><mi>y</mi></mrow></msub><mo>=</mo>
              <msub><mi>v</mi><mn>0</mn></msub><mi>sin</mi><mi>θ</mi>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="v y sama dengan v nol y dikurangi g t sama dengan v nol sin theta dikurangi g t">
              <msub><mi>v</mi><mi>y</mi></msub><mo>=</mo>
              <msub><mi>v</mi><mrow><mn>0</mn><mi>y</mi></mrow></msub><mo>−</mo><mi>g</mi><mi>t</mi><mo>=</mo>
              <msub><mi>v</mi><mn>0</mn></msub><mi>sin</mi><mi>θ</mi><mo>−</mo><mi>g</mi><mi>t</mi>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>v<sub>y</sub></dt><dd>kecepatan benda di sumbu y <span class="satuan">(m/s)</span></dd>
              <dt>v<sub>0y</sub></dt><dd>kecepatan awal di sumbu y <span class="satuan">(m/s)</span></dd>
              <dt>v<sub>0</sub></dt><dd>kecepatan awal benda <span class="satuan">(m/s)</span></dd>
              <dt>θ</dt><dd>sudut elevasi</dd>
              <dt>g</dt><dd>percepatan gravitasi <span class="satuan">(m/s²)</span></dd>
              <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">3.3</span>Posisi</h3>
        <p>Perubahan posisi pada sumbu y dinyatakan sebagai berikut:</p>

        <div class="rumus">
          <div class="rumus-judul">Posisi pada sumbu y</div>
          <div class="rumus-isi">
            <math display="block" aria-label="y sama dengan v nol sin theta t dikurangi setengah g t kuadrat">
              <mi>y</mi><mo>=</mo>
              <msub><mi>v</mi><mn>0</mn></msub><mi>sin</mi><mi>θ</mi><mo>·</mo><mi>t</mi><mo>−</mo>
              <mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>y</dt><dd>posisi benda di sumbu y <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>

        <div class="catatan info">
          <strong class="judul">Mirip gerak vertikal ke atas</strong>
          Gerak pada sumbu y sama persis dengan gerak vertikal ke atas di bab Gerak Lurus, hanya saja kecepatan awalnya <em>v</em><sub>0</sub> sin θ, bukan <em>v</em><sub>0</sub>.
        </div>
      </div>
    </section>

    <!-- ============ 4. BESARAN ============ -->
    <section class="bagian" id="besaran">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Besaran pada gerak parabola</h2>
      </div>

      <div class="sub">
        <h3><span class="no">4.1</span>Posisi</h3>
        <p>Posisi benda pada gerak parabola dinyatakan dalam titik koordinat (x, y), dengan:</p>
        <div class="rumus">
          <div class="rumus-judul">Posisi (x, y)</div>
          <div class="rumus-isi">
            <math display="block" aria-label="x sama dengan v nol cos theta dikali t">
              <mi>x</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>cos</mi><mi>θ</mi><mo>·</mo><mi>t</mi>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="y sama dengan v nol sin theta t dikurangi setengah g t kuadrat">
              <mi>y</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>sin</mi><mi>θ</mi><mo>·</mo><mi>t</mi><mo>−</mo>
              <mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup>
            </math>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">4.2</span>Kecepatan</h3>
        <p>Besar kecepatan benda yang bergerak parabola merupakan <strong>resultan</strong> dari komponen kecepatan di sumbu x dan sumbu y.</p>
        <div class="rumus">
          <div class="rumus-judul">Kecepatan resultan</div>
          <div class="rumus-isi">
            <math display="block" aria-label="v sama dengan akar dari v x kuadrat ditambah v y kuadrat">
              <mi>v</mi><mo>=</mo>
              <msqrt><msubsup><mi>v</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mi>y</mi><mn>2</mn></msubsup></msqrt>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="tan alpha sama dengan v y dibagi v x">
              <mi>tan</mi><mi>α</mi><mo>=</mo>
              <mfrac><msub><mi>v</mi><mi>y</mi></msub><msub><mi>v</mi><mi>x</mi></msub></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>v</dt><dd>besar kecepatan benda <span class="satuan">(m/s)</span></dd>
              <dt>α</dt><dd>arah kecepatan terhadap sumbu x saat itu</dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">4.3</span>Percepatan</h3>
        <p>Percepatan hanya terdapat pada sumbu y, yaitu percepatan gravitasi: <em>a</em><sub>y</sub> = −<em>g</em>. Pada sumbu x tidak ada percepatan.</p>
      </div>

      <div class="sub">
        <h3><span class="no">4.4</span>Ketinggian maksimum</h3>
        <p>Benda yang berada di ketinggian maksimum berada pada koordinat (x, <em>y</em><sub>maks</sub>). Pada kondisi ini kecepatan di arah sumbu y bernilai nol (<em>v</em><sub>y</sub> = 0). Dari syarat ini diperoleh waktu untuk mencapai titik tertinggi dan besar ketinggian maksimumnya:</p>
        <div class="rumus">
          <div class="rumus-judul">Titik tertinggi</div>
          <div class="rumus-isi">
            <math display="block" aria-label="t naik sama dengan v nol sin theta dibagi g">
              <msub><mi>t</mi><mtext>naik</mtext></msub><mo>=</mo>
              <mfrac><mrow><msub><mi>v</mi><mn>0</mn></msub><mi>sin</mi><mi>θ</mi></mrow><mi>g</mi></mfrac>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="y maks sama dengan v nol kuadrat sin kuadrat theta dibagi 2 g">
              <msub><mi>y</mi><mtext>maks</mtext></msub><mo>=</mo>
              <mfrac>
                <mrow><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>sin</mi><mn>2</mn></msup><mi>θ</mi></mrow>
                <mrow><mn>2</mn><mi>g</mi></mrow>
              </mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>t<sub>naik</sub></dt><dd>waktu untuk mencapai titik tertinggi <span class="satuan">(s)</span></dd>
              <dt>y<sub>maks</sub></dt><dd>ketinggian maksimum <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">4.5</span>Jangkauan maksimum</h3>
        <p>Benda yang berada di jarak mendatar terjauh memiliki nilai x maksimum. Pada kondisi ini benda kembali ke koordinat nol di sumbu y, yaitu (<em>x</em><sub>maks</sub>, 0). Waktu tempuhnya dua kali waktu naik.</p>
        <div class="rumus">
          <div class="rumus-judul">Jangkauan maksimum</div>
          <div class="rumus-isi">
            <math display="block" aria-label="t total sama dengan 2 v nol sin theta dibagi g">
              <msub><mi>t</mi><mtext>total</mtext></msub><mo>=</mo>
              <mfrac><mrow><mn>2</mn><msub><mi>v</mi><mn>0</mn></msub><mi>sin</mi><mi>θ</mi></mrow><mi>g</mi></mfrac>
            </math>
          </div>
          <div class="rumus-isi">
            <math display="block" aria-label="x maks sama dengan v nol kuadrat sin 2 theta dibagi g">
              <msub><mi>x</mi><mtext>maks</mtext></msub><mo>=</mo>
              <mfrac>
                <mrow><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mi>sin</mi><mn>2</mn><mi>θ</mi></mrow>
                <mi>g</mi>
              </mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>t<sub>total</sub></dt><dd>waktu dari A sampai B <span class="satuan">(s)</span></dd>
              <dt>x<sub>maks</sub></dt><dd>jangkauan maksimum <span class="satuan">(m)</span></dd>
            </dl>
          </div>
        </div>

        <div class="catatan info">
          <strong class="judul">Sudut untuk jangkauan terjauh</strong>
          Nilai sin 2θ paling besar (= 1) saat θ = 45°, sehingga jangkauan terjauh dicapai dengan sudut elevasi 45°. Rumus t<sub>total</sub> dan x<sub>maks</sub> berlaku jika titik awal dan titik akhir sama tinggi.
        </div>
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Besaran</th><th>Sumbu x</th><th>Sumbu y</th></tr>
          </thead>
          <tbody>
            <tr><td>Jenis gerak</td><td>GLB</td><td>GLBB</td></tr>
            <tr>
              <td>Percepatan</td>
              <td><math><msub><mi>a</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></math></td>
              <td><math><msub><mi>a</mi><mi>y</mi></msub><mo>=</mo><mo>−</mo><mi>g</mi></math></td>
            </tr>
            <tr>
              <td>Kecepatan</td>
              <td><math><msub><mi>v</mi><mi>x</mi></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>cos</mi><mi>θ</mi></math></td>
              <td><math><msub><mi>v</mi><mi>y</mi></msub><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>sin</mi><mi>θ</mi><mo>−</mo><mi>g</mi><mi>t</mi></math></td>
            </tr>
            <tr>
              <td>Posisi</td>
              <td><math><mi>x</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>cos</mi><mi>θ</mi><mo>·</mo><mi>t</mi></math></td>
              <td><math><mi>y</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>sin</mi><mi>θ</mi><mo>·</mo><mi>t</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup></math></td>
            </tr>
            <tr>
              <td>Titik khusus</td>
              <td>x<sub>maks</sub> saat y = 0</td>
              <td>y<sub>maks</sub> saat v<sub>y</sub> = 0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

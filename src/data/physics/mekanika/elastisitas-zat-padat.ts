/* ====== Bab 1-11 · Elastisitas Zat Padat ====== */

import { Chapter } from '../../materials';

export const elastisitasZatPadat: Chapter = {
  chapterId: "1-11",
  title: "Elastisitas Zat Padat",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Elastisitas</span>
      <h1>Elastisitas Zat Padat</h1>
      <p>Rangkuman sifat elastis benda, tegangan, regangan, modulus Young, hukum Hooke, energi potensial pegas, dan susunan pegas seri serta paralel.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#elastisitas">Elastisitas dan plastisitas</a></li>
        <li><a href="#tegangan">Tegangan</a></li>
        <li><a href="#regangan">Regangan</a></li>
        <li><a href="#modulus-young">Modulus Young</a></li>
        <li><a href="#hukum-hooke">Hukum Hooke</a></li>
        <li><a href="#susunan-pegas">Susunan pegas</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. ELASTISITAS ============ -->
    <section class="bagian" id="elastisitas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Elastisitas dan plastisitas</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Elastis</h3>
          <p>Kemampuan benda padat untuk <strong>kembali ke bentuk awalnya</strong> segera setelah gaya yang bekerja padanya dihilangkan. Contoh: karet gelang, pegas, dan pelat baja tipis.</p>
        </div>
        <div class="kartu">
          <h3>Plastis</h3>
          <p>Sifat benda yang <strong>tidak kembali</strong> ke bentuk awalnya setelah gaya dihilangkan, sehingga perubahan bentuknya permanen. Contoh: plastisin, tanah liat, dan kawat yang ditarik terlalu kuat.</p>
        </div>
      </div>

      <p>Sifat elastis setiap benda ada batasnya. Grafik berikut menunjukkan hubungan gaya tarik <em>F</em> dengan pertambahan panjang Δ<em>l</em> pada sebuah kawat.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/grafik-tegangan-regangan.svg" alt="Grafik gaya F terhadap pertambahan panjang delta l pada kawat yang ditarik. Dari O ke A grafiknya lurus, yaitu daerah berlakunya hukum Hooke, dengan A sebagai batas linearitas. Titik B adalah batas elastisitas. Setelah melewati B, benda berubah bentuk secara permanen atau plastis, hingga patah di titik C." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Grafik gaya terhadap pertambahan panjang. Daerah berwarna hijau adalah daerah elastis.</figcaption>
      </figure>

      <ul class="poin">
        <li><strong>O–A</strong>: grafik berupa garis lurus, artinya <em>F</em> sebanding dengan Δ<em>l</em> dan hukum Hooke berlaku. Titik A disebut <strong>batas linearitas</strong> (batas proporsional).</li>
        <li><strong>A–B</strong>: grafik tidak lagi lurus, tetapi benda masih kembali ke bentuk awal jika gaya dihilangkan. Titik B disebut <strong>batas elastisitas</strong>.</li>
        <li><strong>B–C</strong>: daerah <strong>plastis</strong>. Benda berubah bentuk secara permanen hingga akhirnya <strong>patah</strong> di titik C.</li>
      </ul>
    </section>

    <!-- ============ 2. TEGANGAN ============ -->
    <section class="bagian" id="tegangan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Tegangan</h2>
      </div>

      <p><strong>Tegangan</strong> (<em>stress</em>) adalah besar gaya yang bekerja pada suatu permukaan benda dibagi luas permukaan tersebut. Pada kawat yang ditarik, luas yang dimaksud adalah luas penampang kawat.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/batang-ditarik.svg" alt="Kawat dengan luas penampang A dan panjang awal l digantung pada atap. Setelah ujung bawahnya ditarik gaya F, panjang kawat bertambah sebesar delta l." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Kawat dengan luas penampang <em>A</em> dan panjang awal <em>l</em> bertambah panjang Δ<em>l</em> saat ditarik gaya <em>F</em>.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Tegangan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="sigma sama dengan F per A">
            <mi>σ</mi><mo>=</mo><mfrac><mi>F</mi><mi>A</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>σ</dt><dd>tegangan <span class="satuan">(N/m² atau Pa)</span></dd>
            <dt>F</dt><dd>gaya tarik <span class="satuan">(N)</span></dd>
            <dt>A</dt><dd>luas penampang <span class="satuan">(m²)</span></dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ 3. REGANGAN ============ -->
    <section class="bagian" id="regangan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Regangan</h2>
      </div>

      <p><strong>Regangan</strong> (<em>strain</em>) adalah ukuran seberapa besar benda berubah bentuk, yaitu perbandingan pertambahan panjang dengan panjang mula-mula.</p>

      <div class="rumus">
        <div class="rumus-judul">Regangan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="e sama dengan delta l per l">
            <mi>e</mi><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>e</dt><dd>regangan (tanpa satuan)</dd>
            <dt>Δl</dt><dd>pertambahan panjang <span class="satuan">(m)</span></dd>
            <dt>l</dt><dd>panjang mula-mula <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Tanpa satuan</strong>
        Regangan adalah perbandingan dua panjang, sehingga satuannya saling menghilangkan. Regangan sering juga dinyatakan dalam persen.
      </div>
    </section>

    <!-- ============ 4. MODULUS YOUNG ============ -->
    <section class="bagian" id="modulus-young">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Modulus Young</h2>
      </div>

      <p><strong>Modulus Young</strong> (modulus elastisitas) adalah perbandingan tegangan dengan regangan. Nilainya hanya bergantung pada <strong>jenis bahan</strong>, bukan pada ukuran benda. Makin besar modulus Young, makin sulit bahan itu diregangkan.</p>

      <div class="rumus">
        <div class="rumus-judul">Modulus Young</div>
        <div class="rumus-isi">
          <math display="block" aria-label="E sama dengan sigma per e sama dengan F l per A delta l">
            <mi>E</mi><mo>=</mo><mfrac><mi>σ</mi><mi>e</mi></mfrac><mo>=</mo>
            <mfrac><mrow><mi>F</mi><mi>l</mi></mrow><mrow><mi>A</mi><mi>Δ</mi><mi>l</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>E</dt><dd>modulus Young <span class="satuan">(N/m² atau Pa)</span></dd>
            <dt>σ</dt><dd>tegangan <span class="satuan">(N/m²)</span></dd>
            <dt>e</dt><dd>regangan (tanpa satuan)</dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Bahan</th><th>Modulus Young (perkiraan)</th></tr>
          </thead>
          <tbody>
            <tr><td>Baja</td><td>2,0 × 10<sup>11</sup> Pa</td></tr>
            <tr><td>Tembaga</td><td>1,1 × 10<sup>11</sup> Pa</td></tr>
            <tr><td>Aluminium</td><td>7,0 × 10<sup>10</sup> Pa</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Kawat sebagai pegas</strong>
        Rumus modulus Young dapat ditulis <em>F</em> = (<em>EA</em>/<em>l</em>) Δ<em>l</em>. Bentuk ini sama dengan hukum Hooke <em>F</em> = <em>k</em>Δ<em>x</em>, sehingga sebuah kawat berperilaku seperti pegas dengan konstanta <em>k</em> = <em>EA</em>/<em>l</em>.
      </div>
    </section>

    <!-- ============ 5. HUKUM HOOKE ============ -->
    <section class="bagian" id="hukum-hooke">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Hukum Hooke</h2>
      </div>

      <p>Jika pegas ditarik dengan suatu gaya <strong>tanpa melampaui batas elastisitasnya</strong>, pertambahan panjang pegas sebanding dengan gaya tariknya.</p>

      <div class="rumus">
        <div class="rumus-judul">Hukum Hooke</div>
        <div class="rumus-isi">
          <math display="block" aria-label="F sama dengan k delta x">
            <mi>F</mi><mo>=</mo><mi>k</mi><mi>Δ</mi><mi>x</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>F</dt><dd>gaya tarik pada pegas <span class="satuan">(N)</span></dd>
            <dt>k</dt><dd>konstanta pegas <span class="satuan">(N/m)</span></dd>
            <dt>Δx</dt><dd>pertambahan panjang pegas <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Tanda negatif pada gaya pegas</strong>
        Hukum Hooke sering ditulis <em>F</em> = −<em>k</em>Δ<em>x</em>. Di sini <em>F</em> adalah <strong>gaya pemulih</strong> dari pegas, yang arahnya selalu <strong>berlawanan</strong> dengan arah pertambahan panjang. Untuk menghitung besarnya, cukup pakai <em>F</em> = <em>k</em>Δ<em>x</em>.
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/grafik-hooke.svg" alt="Grafik gaya F terhadap pertambahan panjang delta x pada pegas berupa garis lurus melalui titik asal. Kemiringan garis sama dengan konstanta pegas k. Luas segitiga di bawah garis sama dengan energi potensial pegas, yaitu setengah F delta x." />
        </div>
        <figcaption><strong>Gambar 3.</strong> Grafik <em>F</em>–Δ<em>x</em> pegas. Kemiringan garis adalah <em>k</em>, dan luas segitiga di bawahnya adalah energi potensial pegas.</figcaption>
      </figure>

      <div class="sub">
        <h3><span class="no">5.1</span>Energi potensial pegas</h3>
        <p>Pegas yang diregangkan menyimpan energi. Besarnya sama dengan luas segitiga di bawah grafik <em>F</em>–Δ<em>x</em>.</p>
        <div class="rumus">
          <div class="rumus-judul">Energi potensial pegas</div>
          <div class="rumus-isi">
            <math display="block" aria-label="E p sama dengan setengah F delta x sama dengan setengah k delta x kuadrat">
              <msub><mi>E</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>F</mi><mi>Δ</mi><mi>x</mi><mo>=</mo>
              <mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mi>Δ</mi><msup><mi>x</mi><mn>2</mn></msup>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>E<sub>p</sub></dt><dd>energi potensial pegas <span class="satuan">(J)</span></dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 6. SUSUNAN PEGAS ============ -->
    <section class="bagian" id="susunan-pegas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Susunan pegas</h2>
      </div>

      <p>Beberapa pegas dapat disusun dan diganti dengan satu pegas pengganti yang memiliki konstanta pengganti <em>k</em>.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/susunan-pegas.svg" alt="Dua susunan pegas yang menahan beban m. Kiri, susunan seri: pegas k1 dan k2 disambung berurutan, sehingga gaya pada setiap pegas sama dan pertambahan panjangnya dijumlahkan. Kanan, susunan paralel: pegas k1 dan k2 berdampingan dan bersama-sama menahan satu batang, sehingga pertambahan panjangnya sama dan gayanya dijumlahkan." />
        </div>
        <figcaption><strong>Gambar 4.</strong> Susunan pegas seri (kiri) dan paralel (kanan).</figcaption>
      </figure>

      <div class="cabang">
        <div class="kartu">
          <h3>Seri</h3>
          <p>Pegas disambung berurutan. Gaya pada setiap pegas <strong>sama</strong>, sedangkan pertambahan panjang totalnya adalah jumlah pertambahan panjang setiap pegas. Konstanta penggantinya <strong>lebih kecil</strong>, sehingga susunan lebih mudah meregang.</p>
        </div>
        <div class="kartu">
          <h3>Paralel</h3>
          <p>Pegas dipasang berdampingan. Pertambahan panjang setiap pegas <strong>sama</strong>, sedangkan gaya totalnya adalah jumlah gaya pada setiap pegas. Konstanta penggantinya <strong>lebih besar</strong>, sehingga susunan lebih sulit meregang.</p>
        </div>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Konstanta pegas pengganti</div>
        <div class="rumus-isi">
          <math display="block" aria-label="seri: satu per k s sama dengan satu per k 1 ditambah satu per k 2 ditambah seterusnya">
            <mfrac><mn>1</mn><msub><mi>k</mi><mi>s</mi></msub></mfrac><mo>=</mo>
            <mfrac><mn>1</mn><msub><mi>k</mi><mn>1</mn></msub></mfrac><mo>+</mo>
            <mfrac><mn>1</mn><msub><mi>k</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>…</mo>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="paralel: k p sama dengan k 1 ditambah k 2 ditambah seterusnya">
            <msub><mi>k</mi><mi>p</mi></msub><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><mo>+</mo><mo>…</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>k<sub>s</sub></dt><dd>konstanta pengganti susunan seri <span class="satuan">(N/m)</span></dd>
            <dt>k<sub>p</sub></dt><dd>konstanta pengganti susunan paralel <span class="satuan">(N/m)</span></dd>
            <dt>k<sub>1</sub>, k<sub>2</sub></dt><dd>konstanta setiap pegas <span class="satuan">(N/m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Dua pegas identik masing-masing <em>k</em> = 200 N/m. Jika disusun seri, 1/<em>k</em><sub>s</sub> = 1/200 + 1/200, sehingga <em>k</em><sub>s</sub> = 100 N/m. Jika disusun paralel, <em>k</em><sub>p</sub> = 200 + 200 = 400 N/m.
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
              <td>Tegangan</td><td>N/m²</td>
              <td><math><mi>σ</mi><mo>=</mo><mfrac><mi>F</mi><mi>A</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Regangan</td><td>–</td>
              <td><math><mi>e</mi><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Modulus Young</td><td>N/m²</td>
              <td><math><mi>E</mi><mo>=</mo><mfrac><mrow><mi>F</mi><mi>l</mi></mrow><mrow><mi>A</mi><mi>Δ</mi><mi>l</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Hukum Hooke</td><td>N</td>
              <td><math><mi>F</mi><mo>=</mo><mi>k</mi><mi>Δ</mi><mi>x</mi></math></td>
            </tr>
            <tr>
              <td>Energi potensial pegas</td><td>J</td>
              <td><math><msub><mi>E</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mi>Δ</mi><msup><mi>x</mi><mn>2</mn></msup></math></td>
            </tr>
            <tr>
              <td>Pegas seri</td><td>N/m</td>
              <td><math><mfrac><mn>1</mn><msub><mi>k</mi><mi>s</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>k</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>k</mi><mn>2</mn></msub></mfrac></math></td>
            </tr>
            <tr>
              <td>Pegas paralel</td><td>N/m</td>
              <td><math><msub><mi>k</mi><mi>p</mi></msub><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

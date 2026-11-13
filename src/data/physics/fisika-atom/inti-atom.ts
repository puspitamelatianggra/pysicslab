/* ====== Bab 5-2 · Inti Atom dan Reaksi Inti ====== */

import { Chapter } from '../../materials';

/* Penulisan lambang nuklida dengan nomor massa (atas) dan nomor atom (bawah) di kiri lambang.
   Contoh: ${nuklida('He', 2, 4)} menghasilkan lambang helium-4. Cukup ganti ketiga isinya. */
const nuklida = (lambang: string, z: number | string, a: number | string) =>
  `<math><mmultiscripts><mi mathvariant="normal">${lambang}</mi><mprescripts/><mn>${z}</mn><mn>${a}</mn></mmultiscripts></math>`;

export const intiAtom: Chapter = {
  chapterId: "5-2",
  title: "Inti Atom dan Reaksi Inti",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Fisika Inti</span>
      <h1>Inti Atom dan Reaksi Inti</h1>
      <p>Rangkuman struktur inti atom, gaya inti, defek massa dan energi ikat, reaksi inti dan energinya, serta reaksi fisi dan fusi beserta penerapannya.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#struktur">Struktur inti atom</a></li>
        <li><a href="#gaya-inti">Gaya inti dan kestabilan inti</a></li>
        <li><a href="#energi-ikat">Defek massa dan energi ikat</a></li>
        <li><a href="#reaksi">Reaksi inti</a></li>
        <li><a href="#fisi">Reaksi fisi dan reaktor nuklir</a></li>
        <li><a href="#fusi">Reaksi fusi</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. STRUKTUR INTI ============ -->
    <section class="bagian" id="struktur">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Struktur inti atom</h2>
      </div>

      <p>Inti atom tersusun atas <strong>proton</strong> yang bermuatan positif dan <strong>neutron</strong> yang tidak bermuatan. Keduanya disebut <strong>nukleon</strong>. Sebuah inti atom (nuklida) ditulis dengan lambang berikut.</p>

      <div class="rumus">
        <div class="rumus-judul">Lambang nuklida</div>
        <div class="rumus-isi">
          <math display="block" aria-label="lambang unsur X dengan nomor massa A di kiri atas dan nomor atom Z di kiri bawah, dan N sama dengan A dikurangi Z">
            <mmultiscripts><mi>X</mi><mprescripts/><mi>Z</mi><mi>A</mi></mmultiscripts>
            <mspace width="2em"/>
            <mi>N</mi><mo>=</mo><mi>A</mi><mo>−</mo><mi>Z</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>X</dt><dd>lambang unsur</dd>
            <dt>A</dt><dd>nomor massa, yaitu jumlah proton dan neutron</dd>
            <dt>Z</dt><dd>nomor atom, yaitu jumlah proton</dd>
            <dt>N</dt><dd>jumlah neutron</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Inti ${nuklida('U', 92, 235)} memiliki 92 proton dan 235 − 92 = 143 neutron.
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Istilah</th><th>Yang sama</th><th>Contoh</th></tr>
          </thead>
          <tbody>
            <tr><td>Isotop</td><td>nomor atom Z</td><td>${nuklida('C', 6, 12)} dan ${nuklida('C', 6, 14)}</td></tr>
            <tr><td>Isobar</td><td>nomor massa A</td><td>${nuklida('C', 6, 14)} dan ${nuklida('N', 7, 14)}</td></tr>
            <tr><td>Isoton</td><td>jumlah neutron N</td><td>${nuklida('C', 6, 13)} dan ${nuklida('N', 7, 14)}</td></tr>
          </tbody>
        </table>
      </div>

      <p>Massa partikel inti biasanya dinyatakan dalam <strong>satuan massa atom</strong> (sma atau u): 1 sma = 1,66 × 10<sup>−27</sup> kg. Massa proton 1,007276 sma dan massa neutron 1,008665 sma. Jari-jari inti hanya sekitar 10<sup>−15</sup> m, tetapi massa jenisnya luar biasa besar, sekitar 2 × 10<sup>17</sup> kg/m³.</p>
    </section>

    <!-- ============ 2. GAYA INTI ============ -->
    <section class="bagian" id="gaya-inti">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Gaya inti dan kestabilan inti</h2>
      </div>

      <p>Proton-proton di dalam inti saling tolak dengan gaya Coulomb yang sangat besar karena jaraknya sangat dekat. Inti tetap utuh karena ada <strong>gaya inti kuat</strong> yang mengikat nukleon.</p>

      <ul class="poin">
        <li>Gaya inti jauh lebih kuat daripada gaya Coulomb pada jarak inti.</li>
        <li>Jangkauannya sangat pendek, hanya sekitar 10<sup>−15</sup> m. Di luar jarak itu gaya inti praktis hilang.</li>
        <li>Gaya inti tidak bergantung pada muatan: bekerja sama kuat antara proton-proton, neutron-neutron, dan proton-neutron.</li>
      </ul>

      <p>Inti ringan stabil jika jumlah neutron kira-kira sama dengan jumlah proton (<em>N</em>/<em>Z</em> ≈ 1). Inti berat memerlukan lebih banyak neutron, sampai <em>N</em>/<em>Z</em> ≈ 1,5, untuk mengimbangi tolakan Coulomb antarproton. Inti yang tidak stabil akan meluruh dan memancarkan radiasi, seperti dibahas pada bab Radioaktivitas.</p>
    </section>

    <!-- ============ 3. ENERGI IKAT ============ -->
    <section class="bagian" id="energi-ikat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Defek massa dan energi ikat</h2>
      </div>

      <p>Hasil pengukuran menunjukkan bahwa massa sebuah inti selalu <strong>lebih kecil</strong> daripada jumlah massa proton dan neutron penyusunnya. Selisih ini disebut <strong>defek massa</strong>. Massa yang "hilang" itu berubah menjadi energi ketika nukleon-nukleon bergabung, sesuai <em>E</em> = <em>mc</em>². Energi yang sama diperlukan untuk memisahkan kembali inti menjadi nukleon-nukleonnya, sehingga disebut <strong>energi ikat inti</strong>.</p>

      <div class="rumus">
        <div class="rumus-judul">Defek massa dan energi ikat</div>
        <div class="rumus-isi">
          <math display="block" aria-label="delta m sama dengan Z m p ditambah N m n dikurangi m inti">
            <mi>Δ</mi><mi>m</mi><mo>=</mo><mo stretchy="false">(</mo><mi>Z</mi><msub><mi>m</mi><mi>p</mi></msub><mo>+</mo><mi>N</mi><msub><mi>m</mi><mi>n</mi></msub><mo stretchy="false">)</mo><mo>−</mo><msub><mi>m</mi><mtext>inti</mtext></msub>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="E ikat sama dengan delta m dikali 931,5 MeV per sma">
            <msub><mi>E</mi><mtext>ikat</mtext></msub><mo>=</mo><mi>Δ</mi><mi>m</mi><mo>×</mo><mn>931,5</mn><mtext> MeV/sma</mtext>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Δm</dt><dd>defek massa <span class="satuan">(sma)</span></dd>
            <dt>m<sub>p</sub>, m<sub>n</sub></dt><dd>massa proton dan massa neutron <span class="satuan">(sma)</span></dd>
            <dt>m<sub>inti</sub></dt><dd>massa inti <span class="satuan">(sma)</span></dd>
            <dt>931,5</dt><dd>energi yang setara dengan massa 1 sma <span class="satuan">(MeV)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Untuk helium-4, gunakan massa atom hidrogen 1,007825 sma (sudah termasuk elektronnya), massa neutron 1,008665 sma, dan massa atom ${nuklida('He', 2, 4)} 4,002603 sma. Δ<em>m</em> = 2(1,007825) + 2(1,008665) − 4,002603 = 0,030377 sma. Energi ikatnya 0,030377 × 931,5 ≈ 28,3 MeV, atau sekitar 7,1 MeV per nukleon.
      </div>

      <div class="sub">
        <h3><span class="no">3.1</span>Energi ikat per nukleon</h3>
        <p>Kestabilan inti ditunjukkan oleh <strong>energi ikat per nukleon</strong>, yaitu energi ikat dibagi nomor massa. Makin besar nilainya, makin kuat nukleon terikat dan makin stabil intinya.</p>

        <figure class="gambar">
          <div class="gambar-isi">
            <img src="/images/energi-ikat-per-nukleon.svg" alt="Grafik energi ikat per nukleon terhadap nomor massa A. Grafik naik tajam pada inti ringan, dengan helium-4 sekitar 7,1 MeV, mencapai puncak sekitar 8,8 MeV di sekitar besi-56, lalu turun perlahan sampai sekitar 7,6 MeV untuk uranium-235. Inti ringan melepas energi jika bergabung (fusi), dan inti berat melepas energi jika membelah (fisi), karena keduanya bergerak ke arah puncak." />
          </div>
          <figcaption><strong>Gambar 1.</strong> Energi ikat per nukleon. Inti di sekitar besi paling stabil.</figcaption>
        </figure>

        <p>Inti di sekitar besi-56 paling stabil. Akibatnya, energi dapat dilepaskan dengan dua cara: inti berat <strong>dibelah</strong> menjadi inti sedang (fisi), atau inti ringan <strong>digabung</strong> menjadi inti yang lebih berat (fusi). Keduanya menghasilkan inti yang lebih dekat ke puncak grafik.</p>
      </div>
    </section>

    <!-- ============ 4. REAKSI INTI ============ -->
    <section class="bagian" id="reaksi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Reaksi inti</h2>
      </div>

      <p><strong>Reaksi inti</strong> adalah perubahan susunan inti akibat tumbukan dengan partikel lain. Reaksi inti buatan pertama dilakukan Rutherford pada tahun 1919 dengan menembakkan partikel alfa ke gas nitrogen:</p>

      <div class="rumus">
        <div class="rumus-judul">Reaksi inti pertama (Rutherford, 1919)</div>
        <div class="rumus-isi">
          <math display="block" aria-label="nitrogen 14 ditambah helium 4 menghasilkan oksigen 17 ditambah hidrogen 1">
            <mmultiscripts><mi mathvariant="normal">N</mi><mprescripts/><mn>7</mn><mn>14</mn></mmultiscripts><mo>+</mo>
            <mmultiscripts><mi>He</mi><mprescripts/><mn>2</mn><mn>4</mn></mmultiscripts><mo>→</mo>
            <mmultiscripts><mi mathvariant="normal">O</mi><mprescripts/><mn>8</mn><mn>17</mn></mmultiscripts><mo>+</mo>
            <mmultiscripts><mi mathvariant="normal">H</mi><mprescripts/><mn>1</mn><mn>1</mn></mmultiscripts>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Nomor massa</dt><dd>14 + 4 = 17 + 1 = 18</dd>
            <dt>Nomor atom</dt><dd>7 + 2 = 8 + 1 = 9</dd>
          </dl>
        </div>
      </div>

      <p>Setiap reaksi inti memenuhi <strong>hukum kekekalan nomor massa</strong> dan <strong>hukum kekekalan nomor atom</strong>: jumlah di ruas kiri sama dengan jumlah di ruas kanan. Aturan ini dipakai untuk menentukan partikel yang belum diketahui.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Partikel</th><th>Lambang</th><th>Partikel</th><th>Lambang</th></tr>
          </thead>
          <tbody>
            <tr><td>Proton</td><td>${nuklida('p', 1, 1)} atau ${nuklida('H', 1, 1)}</td><td>Alfa</td><td>${nuklida('α', 2, 4)} atau ${nuklida('He', 2, 4)}</td></tr>
            <tr><td>Neutron</td><td>${nuklida('n', 0, 1)}</td><td>Beta (elektron)</td><td>${nuklida('β', '−1', 0)} atau ${nuklida('e', '−1', 0)}</td></tr>
            <tr><td>Deuteron</td><td>${nuklida('H', 1, 2)}</td><td>Positron</td><td>${nuklida('e', '+1', 0)}</td></tr>
            <tr><td>Triton</td><td>${nuklida('H', 1, 3)}</td><td>Sinar gamma</td><td>${nuklida('γ', 0, 0)}</td></tr>
          </tbody>
        </table>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Energi reaksi inti</div>
        <div class="rumus-isi">
          <math display="block" aria-label="Q sama dengan kurung jumlah massa sebelum reaksi dikurangi jumlah massa sesudah reaksi dikali 931,5 MeV per sma">
            <mi>Q</mi><mo>=</mo><mo stretchy="false">(</mo><mi>Σ</mi><msub><mi>m</mi><mtext>sebelum</mtext></msub><mo>−</mo><mi>Σ</mi><msub><mi>m</mi><mtext>sesudah</mtext></msub><mo stretchy="false">)</mo><mo>×</mo><mn>931,5</mn><mtext> MeV/sma</mtext>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Q &gt; 0</dt><dd>reaksi melepaskan energi (eksotermik)</dd>
            <dt>Q &lt; 0</dt><dd>reaksi memerlukan energi (endotermik)</dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ 5. FISI ============ -->
    <section class="bagian" id="fisi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Reaksi fisi dan reaktor nuklir</h2>
      </div>

      <p><strong>Fisi</strong> adalah pembelahan inti berat menjadi dua inti yang lebih ringan. Inti uranium-235 yang menangkap neutron lambat menjadi tidak stabil, lalu membelah sambil melepaskan dua atau tiga neutron baru dan energi sekitar 200 MeV.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/reaksi-fisi.svg" alt="Reaksi fisi uranium-235. Sebuah neutron lambat ditangkap inti uranium-235 sehingga terbentuk inti uranium-236 yang tidak stabil. Inti ini membelah menjadi barium-141 dan kripton-92, sambil melepaskan tiga neutron baru dan energi sekitar 200 MeV. Neutron-neutron baru dapat memicu fisi berikutnya." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Salah satu kemungkinan reaksi fisi uranium-235.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Contoh reaksi fisi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="neutron ditambah uranium 235 menghasilkan barium 141 ditambah kripton 92 ditambah 3 neutron ditambah energi">
            <mmultiscripts><mi mathvariant="normal">n</mi><mprescripts/><mn>0</mn><mn>1</mn></mmultiscripts><mo>+</mo>
            <mmultiscripts><mi mathvariant="normal">U</mi><mprescripts/><mn>92</mn><mn>235</mn></mmultiscripts><mo>→</mo>
            <mmultiscripts><mi>Ba</mi><mprescripts/><mn>56</mn><mn>141</mn></mmultiscripts><mo>+</mo>
            <mmultiscripts><mi>Kr</mi><mprescripts/><mn>36</mn><mn>92</mn></mmultiscripts><mo>+</mo><mn>3</mn>
            <mmultiscripts><mi mathvariant="normal">n</mi><mprescripts/><mn>0</mn><mn>1</mn></mmultiscripts><mo>+</mo><mtext>energi</mtext>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Nomor massa</dt><dd>1 + 235 = 141 + 92 + 3 = 236</dd>
            <dt>Nomor atom</dt><dd>0 + 92 = 56 + 36 = 92</dd>
          </dl>
        </div>
      </div>

      <div class="kartu">
        <span class="istilah">Reaksi berantai</span>
        <p>Neutron-neutron baru dari satu fisi dapat menumbuk inti uranium lain dan memicu fisi berikutnya, begitu seterusnya. Jika tidak dikendalikan, jumlah fisi berlipat ganda dalam sekejap, seperti pada bom atom. Di dalam reaktor nuklir, reaksi berantai dikendalikan sehingga rata-rata hanya satu neutron dari setiap fisi yang memicu fisi baru, dan energinya dilepaskan secara stabil.</p>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Komponen reaktor</th><th>Fungsi</th></tr>
          </thead>
          <tbody>
            <tr><td>Bahan bakar (uranium yang diperkaya)</td><td>sumber reaksi fisi</td></tr>
            <tr><td>Moderator (air atau grafit)</td><td>memperlambat neutron agar mudah ditangkap uranium-235</td></tr>
            <tr><td>Batang kendali (kadmium atau boron)</td><td>menyerap neutron untuk mengatur laju reaksi; dimasukkan penuh untuk mematikan reaktor</td></tr>
            <tr><td>Pendingin (air)</td><td>membawa kalor dari teras reaktor untuk menghasilkan uap yang memutar turbin</td></tr>
            <tr><td>Perisai (beton tebal dan baja)</td><td>menahan radiasi agar tidak keluar dari reaktor</td></tr>
          </tbody>
        </table>
      </div>

      <p>Indonesia memiliki tiga reaktor riset yang dikelola BRIN: reaktor RSG-GAS di Serpong, reaktor TRIGA 2000 di Bandung, dan reaktor Kartini di Yogyakarta. Reaktor-reaktor ini dipakai untuk penelitian dan produksi radioisotop bagi kedokteran dan industri.</p>
    </section>

    <!-- ============ 6. FUSI ============ -->
    <section class="bagian" id="fusi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Reaksi fusi</h2>
      </div>

      <p><strong>Fusi</strong> adalah penggabungan dua inti ringan menjadi inti yang lebih berat. Untuk massa bahan bakar yang sama, fusi melepaskan energi beberapa kali lebih besar daripada fisi.</p>

      <div class="rumus">
        <div class="rumus-judul">Contoh reaksi fusi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="deuterium ditambah tritium menghasilkan helium 4 ditambah neutron ditambah 17,6 MeV">
            <mmultiscripts><mi mathvariant="normal">H</mi><mprescripts/><mn>1</mn><mn>2</mn></mmultiscripts><mo>+</mo>
            <mmultiscripts><mi mathvariant="normal">H</mi><mprescripts/><mn>1</mn><mn>3</mn></mmultiscripts><mo>→</mo>
            <mmultiscripts><mi>He</mi><mprescripts/><mn>2</mn><mn>4</mn></mmultiscripts><mo>+</mo>
            <mmultiscripts><mi mathvariant="normal">n</mi><mprescripts/><mn>0</mn><mn>1</mn></mmultiscripts><mo>+</mo><mn>17,6</mn><mtext> MeV</mtext>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>²H</dt><dd>deuterium, dapat diperoleh dari air laut</dd>
            <dt>³H</dt><dd>tritium</dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li>Fusi memerlukan suhu sangat tinggi, puluhan juta kelvin, agar inti-inti bergerak cukup cepat untuk mengatasi tolakan Coulomb. Karena itu fusi juga disebut <strong>reaksi termonuklir</strong>.</li>
        <li><strong>Matahari</strong> dan bintang-bintang memperoleh energinya dari fusi hidrogen menjadi helium di intinya, yang bersuhu sekitar 15 juta kelvin.</li>
        <li>Para ilmuwan sedang mengembangkan reaktor fusi, misalnya proyek ITER di Prancis. Keunggulannya: bahan bakar melimpah dan limbah radioaktifnya jauh lebih sedikit daripada reaktor fisi. Tantangannya adalah mengurung plasma bersuhu ratusan juta kelvin dalam waktu lama.</li>
      </ul>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Konsep</th><th>Keterangan</th><th>Rumus</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Jumlah neutron</td><td>A nomor massa, Z nomor atom</td>
              <td><math><mi>N</mi><mo>=</mo><mi>A</mi><mo>−</mo><mi>Z</mi></math></td>
            </tr>
            <tr>
              <td>Defek massa</td><td>massa nukleon − massa inti</td>
              <td><math><mi>Δ</mi><mi>m</mi><mo>=</mo><mo stretchy="false">(</mo><mi>Z</mi><msub><mi>m</mi><mi>p</mi></msub><mo>+</mo><mi>N</mi><msub><mi>m</mi><mi>n</mi></msub><mo stretchy="false">)</mo><mo>−</mo><msub><mi>m</mi><mtext>inti</mtext></msub></math></td>
            </tr>
            <tr>
              <td>Energi ikat</td><td>1 sma setara 931,5 MeV</td>
              <td><math><msub><mi>E</mi><mtext>ikat</mtext></msub><mo>=</mo><mi>Δ</mi><mi>m</mi><mo>×</mo><mn>931,5</mn></math></td>
            </tr>
            <tr>
              <td>Energi reaksi</td><td>Q &gt; 0 melepas energi</td>
              <td><math><mi>Q</mi><mo>=</mo><mo stretchy="false">(</mo><mi>Σ</mi><msub><mi>m</mi><mtext>sebelum</mtext></msub><mo>−</mo><mi>Σ</mi><msub><mi>m</mi><mtext>sesudah</mtext></msub><mo stretchy="false">)</mo><mo>×</mo><mn>931,5</mn></math></td>
            </tr>
            <tr>
              <td>Fisi</td><td>inti berat membelah</td><td>reaktor nuklir (PLTN)</td>
            </tr>
            <tr>
              <td>Fusi</td><td>inti ringan bergabung</td><td>sumber energi Matahari</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

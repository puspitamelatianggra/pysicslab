/* ====== Bab 4-1 · Teori Relativitas Khusus ====== */

import { Chapter } from '../../materials';

export const relativitasKhusus: Chapter = {
  chapterId: "4-1",
  title: "Teori Relativitas Khusus",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Fisika Modern</span>
      <h1>Teori Relativitas Khusus</h1>
      <p>Rangkuman kerangka acuan dan relativitas Newton, percobaan Michelson-Morley, postulat Einstein, dilatasi waktu, kontraksi panjang, penjumlahan kecepatan relativistik, serta massa, momentum, dan energi relativistik.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#kerangka-acuan">Kerangka acuan dan relativitas Newton</a></li>
        <li><a href="#postulat">Postulat Einstein</a></li>
        <li><a href="#faktor-lorentz">Faktor Lorentz</a></li>
        <li><a href="#dilatasi">Dilatasi waktu</a></li>
        <li><a href="#kontraksi">Kontraksi panjang</a></li>
        <li><a href="#penjumlahan">Penjumlahan kecepatan relativistik</a></li>
        <li><a href="#energi">Massa, momentum, dan energi relativistik</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. KERANGKA ACUAN ============ -->
    <section class="bagian" id="kerangka-acuan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Kerangka acuan dan relativitas Newton</h2>
      </div>

      <p>Gerak selalu diukur terhadap suatu <strong>kerangka acuan</strong>. Penumpang yang duduk di kereta diam terhadap kereta, tetapi bergerak terhadap orang di peron. Kerangka acuan yang diam atau bergerak dengan kecepatan tetap disebut <strong>kerangka acuan inersial</strong>, dan di dalamnya hukum Newton berlaku.</p>

      <div class="kartu">
        <span class="istilah">Transformasi Galileo</span>
        <p>Dalam mekanika Newton, kecepatan dijumlahkan biasa. Jika penumpang berjalan dengan kecepatan 1 m/s searah kereta yang bergerak 20 m/s, orang di peron melihat penumpang itu bergerak 21 m/s. Waktu dan panjang dianggap sama bagi semua pengamat.</p>
      </div>

      <p>Masalah muncul ketika aturan ini diterapkan pada cahaya. Para ilmuwan abad ke-19 menduga cahaya merambat melalui zat bernama <strong>eter</strong> yang memenuhi alam semesta. Jika demikian, kecepatan cahaya yang terukur di Bumi seharusnya berbeda menurut arah gerak Bumi terhadap eter.</p>

      <div class="catatan info">
        <strong class="judul">Percobaan Michelson-Morley (1887)</strong>
        Albert Michelson dan Edward Morley membandingkan kecepatan cahaya yang searah dan tegak lurus gerak Bumi dengan interferometer yang sangat peka. Hasilnya <strong>nol</strong>: kecepatan cahaya sama ke segala arah. Kesimpulannya, eter tidak ada, dan kecepatan cahaya tidak mengikuti penjumlahan Galileo.
      </div>
    </section>

    <!-- ============ 2. POSTULAT ============ -->
    <section class="bagian" id="postulat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Postulat Einstein</h2>
      </div>

      <p>Pada tahun 1905, Albert Einstein menyusun <strong>teori relativitas khusus</strong> berdasarkan dua postulat:</p>

      <ol class="langkah">
        <li><strong>Prinsip relativitas</strong>: hukum-hukum fisika berlaku sama di semua kerangka acuan inersial. Tidak ada percobaan yang dapat menentukan apakah sebuah kerangka acuan inersial "benar-benar diam".</li>
        <li><strong>Kecepatan cahaya tetap</strong>: cahaya di ruang hampa merambat dengan kecepatan <em>c</em> = 3 × 10<sup>8</sup> m/s menurut semua pengamat, tidak bergantung pada gerak sumber maupun pengamatnya.</li>
      </ol>

      <p>Postulat kedua terdengar sederhana, tetapi akibatnya mengejutkan: agar kecepatan cahaya selalu sama, <strong>waktu dan panjang</strong> yang diukur pengamat yang saling bergerak harus berbeda.</p>
    </section>

    <!-- ============ 3. FAKTOR LORENTZ ============ -->
    <section class="bagian" id="faktor-lorentz">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Faktor Lorentz</h2>
      </div>

      <p>Hampir semua rumus relativitas khusus memuat satu besaran yang sama, yaitu <strong>faktor Lorentz</strong> γ.</p>

      <div class="rumus">
        <div class="rumus-judul">Faktor Lorentz</div>
        <div class="rumus-isi">
          <math display="block" aria-label="gamma sama dengan 1 per akar dari 1 dikurangi v kuadrat per c kuadrat">
            <mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></msqrt></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>γ</dt><dd>faktor Lorentz, selalu ≥ 1 (tanpa satuan)</dd>
            <dt>v</dt><dd>kecepatan relatif antarpengamat <span class="satuan">(m/s)</span></dd>
            <dt>c</dt><dd>kecepatan cahaya, 3 × 10<sup>8</sup> <span class="satuan">(m/s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Kecepatan v</th><th>Faktor Lorentz γ</th></tr>
          </thead>
          <tbody>
            <tr><td>Pesawat jet (≈ 0,000001<em>c</em>)</td><td>1,0000000000005</td></tr>
            <tr><td>0,6<em>c</em></td><td>1,25 (= 5/4)</td></tr>
            <tr><td>0,8<em>c</em></td><td>1,67 (= 5/3)</td></tr>
            <tr><td>0,9<em>c</em></td><td>2,29</td></tr>
            <tr><td>0,99<em>c</em></td><td>7,09</td></tr>
          </tbody>
        </table>
      </div>

      <p>Pada kecepatan sehari-hari, γ hampir tepat 1, sehingga efek relativistik tidak terasa dan mekanika Newton masih sangat akurat. Efeknya baru besar jika kecepatannya mendekati kecepatan cahaya.</p>
    </section>

    <!-- ============ 4. DILATASI WAKTU ============ -->
    <section class="bagian" id="dilatasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Dilatasi waktu</h2>
      </div>

      <p>Bayangkan sebuah <strong>jam cahaya</strong>: seberkas cahaya dipantulkan bolak-balik di antara dua cermin. Bagi penumpang yang ikut bergerak bersama jam, cahaya naik-turun lurus. Bagi pengamat di tanah, cahaya menempuh lintasan miring yang lebih panjang. Karena kecepatan cahaya sama bagi keduanya, pengamat di tanah mengukur waktu detak yang lebih lama.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/jam-cahaya.svg" alt="Jam cahaya berupa dua cermin sejajar berjarak L. Kiri, jam diam: cahaya bergerak lurus naik-turun, sehingga satu detak memerlukan waktu delta t nol sama dengan 2L per c. Kanan, jam yang sama bergerak ke kanan dengan kecepatan v menurut pengamat di tanah: cahaya menempuh lintasan miring yang lebih panjang, sehingga satu detak memerlukan waktu delta t yang lebih lama." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Lintasan cahaya pada jam cahaya yang diam (kiri) dan yang bergerak (kanan).</figcaption>
      </figure>

      <p>Dari segitiga pada Gambar 1, (<em>c</em>Δ<em>t</em>/2)² = <em>L</em>² + (<em>v</em>Δ<em>t</em>/2)². Dengan <em>L</em> = <em>c</em>Δ<em>t</em><sub>0</sub>/2, hasilnya:</p>

      <div class="rumus">
        <div class="rumus-judul">Dilatasi waktu</div>
        <div class="rumus-isi">
          <math display="block" aria-label="delta t sama dengan gamma delta t nol sama dengan delta t nol per akar 1 dikurangi v kuadrat per c kuadrat">
            <mi>Δ</mi><mi>t</mi><mo>=</mo><mi>γ</mi><mi>Δ</mi><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>Δ</mi><msub><mi>t</mi><mn>0</mn></msub></mrow><msqrt><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></msqrt></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Δt<sub>0</sub></dt><dd>waktu proper, diukur pengamat yang diam terhadap kejadian <span class="satuan">(s)</span></dd>
            <dt>Δt</dt><dd>waktu yang diukur pengamat yang bergerak relatif terhadap kejadian <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Menentukan waktu proper</strong>
        Waktu proper Δ<em>t</em><sub>0</sub> adalah waktu yang diukur oleh jam yang berada di tempat kejadian itu sendiri, misalnya jam di dalam pesawat untuk peristiwa di dalam pesawat. Waktu proper selalu paling singkat. Pengamat lain selalu mengukur waktu yang lebih lama: "jam yang bergerak berdetak lebih lambat".
      </div>

      <div class="catatan info">
        <strong class="judul">Bukti nyata: muon</strong>
        Muon adalah partikel yang terbentuk di atmosfer atas dan meluruh rata-rata dalam 2,2 μs (waktu proper). Bergerak dengan 0,99<em>c</em>, muon seharusnya hanya menempuh sekitar 650 m sebelum meluruh. Kenyataannya muon banyak terdeteksi di permukaan Bumi. Menurut pengamat di Bumi, umurnya diperpanjang menjadi 7,09 × 2,2 ≈ 15,6 μs, cukup untuk menempuh sekitar 4,6 km.
      </div>

      <p>Satelit GPS juga harus mengoreksi jamnya karena efek relativitas. Tanpa koreksi itu, posisi yang ditunjukkan GPS akan meleset beberapa kilometer setiap hari.</p>
    </section>

    <!-- ============ 5. KONTRAKSI PANJANG ============ -->
    <section class="bagian" id="kontraksi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Kontraksi panjang</h2>
      </div>

      <p>Benda yang bergerak relatif terhadap pengamat terlihat <strong>lebih pendek</strong> pada arah geraknya. Ukuran yang tegak lurus arah gerak tidak berubah.</p>

      <div class="rumus">
        <div class="rumus-judul">Kontraksi panjang</div>
        <div class="rumus-isi">
          <math display="block" aria-label="L sama dengan L nol per gamma sama dengan L nol akar 1 dikurangi v kuadrat per c kuadrat">
            <mi>L</mi><mo>=</mo><mfrac><msub><mi>L</mi><mn>0</mn></msub><mi>γ</mi></mfrac><mo>=</mo><msub><mi>L</mi><mn>0</mn></msub><msqrt><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></msqrt>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>L<sub>0</sub></dt><dd>panjang proper, diukur pengamat yang diam terhadap benda <span class="satuan">(m)</span></dd>
            <dt>L</dt><dd>panjang menurut pengamat yang bergerak relatif terhadap benda <span class="satuan">(m)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Pesawat antariksa yang panjangnya 100 m saat diam bergerak dengan 0,8<em>c</em>. Menurut pengamat di Bumi, panjangnya <em>L</em> = 100 × √(1 − 0,64) = 100 × 0,6 = 60 m.
      </div>
    </section>

    <!-- ============ 6. PENJUMLAHAN KECEPATAN ============ -->
    <section class="bagian" id="penjumlahan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Penjumlahan kecepatan relativistik</h2>
      </div>

      <p>Kecepatan tidak lagi dijumlahkan biasa. Jika pesawat bergerak dengan <em>v</em><sub>1</sub> terhadap Bumi dan menembakkan roket dengan <em>v</em><sub>2</sub> terhadap pesawat searah geraknya, kecepatan roket terhadap Bumi adalah:</p>

      <div class="rumus">
        <div class="rumus-judul">Penjumlahan kecepatan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="v sama dengan v 1 ditambah v 2 per 1 ditambah v 1 v 2 per c kuadrat">
            <mi>v</mi><mo>=</mo><mfrac><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>v<sub>1</sub></dt><dd>kecepatan pesawat terhadap Bumi <span class="satuan">(m/s)</span></dd>
            <dt>v<sub>2</sub></dt><dd>kecepatan benda terhadap pesawat <span class="satuan">(m/s)</span></dd>
            <dt>v</dt><dd>kecepatan benda terhadap Bumi <span class="satuan">(m/s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Pesawat bergerak 0,5<em>c</em> dan menembakkan roket 0,5<em>c</em> ke depan. Kecepatan roket terhadap Bumi <em>v</em> = (0,5<em>c</em> + 0,5<em>c</em>)/(1 + 0,25) = 0,8<em>c</em>, bukan 1,0<em>c</em>. Jika yang ditembakkan adalah cahaya (<em>v</em><sub>2</sub> = <em>c</em>), hasilnya tetap <em>c</em>, sesuai postulat kedua.
      </div>
    </section>

    <!-- ============ 7. ENERGI RELATIVISTIK ============ -->
    <section class="bagian" id="energi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">7</span>
        <h2>Massa, momentum, dan energi relativistik</h2>
      </div>

      <p>Hukum kekekalan momentum dan energi tetap berlaku jika massa, momentum, dan energi dihitung secara relativistik. Salah satu hasil terpenting teori ini adalah kesetaraan massa dan energi: benda yang diam pun menyimpan energi sebesar <em>m</em><sub>0</sub><em>c</em>².</p>

      <div class="rumus">
        <div class="rumus-judul">Besaran relativistik</div>
        <div class="rumus-isi">
          <math display="block" aria-label="m sama dengan gamma m nol, dan p sama dengan gamma m nol v">
            <mi>m</mi><mo>=</mo><mi>γ</mi><msub><mi>m</mi><mn>0</mn></msub>
            <mspace width="1.5em"/>
            <mi>p</mi><mo>=</mo><mi>γ</mi><msub><mi>m</mi><mn>0</mn></msub><mi>v</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="E nol sama dengan m nol c kuadrat, dan E sama dengan gamma m nol c kuadrat">
            <msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup>
            <mspace width="1.5em"/>
            <mi>E</mi><mo>=</mo><mi>γ</mi><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="E k sama dengan E dikurangi E nol sama dengan kurung gamma dikurangi 1 dikali m nol c kuadrat">
            <msub><mi>E</mi><mi>k</mi></msub><mo>=</mo><mi>E</mi><mo>−</mo><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mi>γ</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>m<sub>0</sub></dt><dd>massa diam <span class="satuan">(kg)</span></dd>
            <dt>m</dt><dd>massa relativistik <span class="satuan">(kg)</span></dd>
            <dt>p</dt><dd>momentum relativistik <span class="satuan">(kg m/s)</span></dd>
            <dt>E<sub>0</sub></dt><dd>energi diam <span class="satuan">(J)</span></dd>
            <dt>E</dt><dd>energi total <span class="satuan">(J)</span></dd>
            <dt>E<sub>k</sub></dt><dd>energi kinetik relativistik <span class="satuan">(J)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Massa 1 kg setara dengan energi <em>E</em> = 1 × (3 × 10<sup>8</sup>)² = 9 × 10<sup>16</sup> J, kira-kira setara dengan energi listrik yang dipakai seluruh Indonesia selama sekitar satu bulan. Contoh lain: elektron (energi diam 0,511 MeV) yang bergerak 0,6<em>c</em> memiliki <em>E</em><sub>k</sub> = (1,25 − 1) × 0,511 ≈ 0,13 MeV.
      </div>

      <ul class="poin">
        <li>Makin mendekati <em>c</em>, γ makin besar tanpa batas, sehingga energi yang diperlukan untuk mempercepat benda bermassa sampai tepat <em>c</em> menjadi tak hingga. Karena itu, <strong>tidak ada benda bermassa yang dapat mencapai kecepatan cahaya</strong>.</li>
        <li>Hubungan energi dan momentum: <em>E</em>² = (<em>pc</em>)² + (<em>m</em><sub>0</sub><em>c</em>²)². Untuk foton yang tidak bermassa, <em>E</em> = <em>pc</em>.</li>
        <li>Kesetaraan massa dan energi menjelaskan sumber energi Matahari dan reaktor nuklir, yang dibahas pada bab Inti Atom dan Reaksi Inti.</li>
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
              <td>Faktor Lorentz</td><td>γ ≥ 1</td>
              <td><math><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo>/</mo><msup><mi>c</mi><mn>2</mn></msup></msqrt></mfrac></math></td>
            </tr>
            <tr>
              <td>Dilatasi waktu</td><td>jam bergerak lebih lambat</td>
              <td><math><mi>Δ</mi><mi>t</mi><mo>=</mo><mi>γ</mi><mi>Δ</mi><msub><mi>t</mi><mn>0</mn></msub></math></td>
            </tr>
            <tr>
              <td>Kontraksi panjang</td><td>benda bergerak lebih pendek</td>
              <td><math><mi>L</mi><mo>=</mo><mfrac><msub><mi>L</mi><mn>0</mn></msub><mi>γ</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Penjumlahan kecepatan</td><td>hasil tidak pernah melebihi c</td>
              <td><math><mi>v</mi><mo>=</mo><mfrac><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mn>2</mn></msub><mo>/</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Energi diam</td><td>kesetaraan massa-energi</td>
              <td><math><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></math></td>
            </tr>
            <tr>
              <td>Energi kinetik</td><td>relativistik</td>
              <td><math><msub><mi>E</mi><mi>k</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mi>γ</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

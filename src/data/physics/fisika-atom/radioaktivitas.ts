/* ====== Bab 5-3 · Radioaktivitas ====== */

import { Chapter } from '../../materials';

/* Penulisan lambang nuklida dengan nomor massa (atas) dan nomor atom (bawah) di kiri lambang.
   Contoh: ${nuklida('He', 2, 4)} menghasilkan lambang helium-4. Cukup ganti ketiga isinya. */
const nuklida = (lambang: string, z: number | string, a: number | string) =>
  `<math><mmultiscripts><mi mathvariant="normal">${lambang}</mi><mprescripts/><mn>${z}</mn><mn>${a}</mn></mmultiscripts></math>`;

export const radioaktivitas: Chapter = {
  chapterId: "5-3",
  title: "Radioaktivitas",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Fisika Inti</span>
      <h1>Radioaktivitas</h1>
      <p>Rangkuman penemuan radioaktivitas, sinar alfa, beta, dan gamma, persamaan peluruhan, waktu paruh dan aktivitas, penanggalan karbon, pemanfaatan radioisotop, serta bahaya dan proteksi radiasi.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#penemuan">Penemuan radioaktivitas</a></li>
        <li><a href="#sinar">Sinar alfa, beta, dan gamma</a></li>
        <li><a href="#peluruhan">Persamaan peluruhan</a></li>
        <li><a href="#waktu-paruh">Waktu paruh dan aktivitas</a></li>
        <li><a href="#karbon">Penanggalan karbon-14</a></li>
        <li><a href="#manfaat">Pemanfaatan radioisotop</a></li>
        <li><a href="#proteksi">Bahaya dan proteksi radiasi</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENEMUAN ============ -->
    <section class="bagian" id="penemuan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Penemuan radioaktivitas</h2>
      </div>

      <p>Pada tahun 1896, Henri Becquerel menemukan bahwa garam uranium dapat menghitamkan pelat film yang terbungkus kertas hitam, walaupun tidak terkena cahaya. Marie dan Pierre Curie kemudian menemukan dua unsur lain yang memancarkan radiasi lebih kuat, yaitu polonium dan radium.</p>

      <div class="kartu">
        <span class="istilah">Radioaktivitas</span>
        <p>Peristiwa pemancaran radiasi secara <strong>spontan</strong> oleh inti atom yang tidak stabil. Inti yang tidak stabil berubah menjadi inti lain yang lebih stabil sambil memancarkan radiasi. Proses ini disebut <strong>peluruhan radioaktif</strong>, dan zat yang mengalaminya disebut zat radioaktif atau radioisotop.</p>
      </div>

      <p>Peluruhan tidak dapat dipercepat atau diperlambat dengan memanaskan, menekan, atau mereaksikan zat secara kimia, karena prosesnya terjadi di dalam inti.</p>
    </section>

    <!-- ============ 2. SINAR ============ -->
    <section class="bagian" id="sinar">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Sinar alfa, beta, dan gamma</h2>
      </div>

      <p>Rutherford menemukan bahwa radiasi dari zat radioaktif terdiri atas tiga jenis. Ketiganya dapat dibedakan dari pembelokannya di dalam medan magnet: sinar alfa dan beta dibelokkan ke arah berlawanan karena muatannya berlawanan, sedangkan sinar gamma tidak dibelokkan.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Sifat</th><th>Alfa (α)</th><th>Beta (β)</th><th>Gamma (γ)</th></tr>
          </thead>
          <tbody>
            <tr><td>Hakikat</td><td>inti helium ${nuklida('He', 2, 4)}</td><td>elektron ${nuklida('e', '−1', 0)}</td><td>gelombang elektromagnetik berenergi tinggi</td></tr>
            <tr><td>Muatan</td><td>+2<em>e</em></td><td>−<em>e</em></td><td>tidak bermuatan</td></tr>
            <tr><td>Daya tembus</td><td>paling lemah; tertahan kertas atau beberapa cm udara</td><td>sedang; tertahan aluminium beberapa mm</td><td>paling kuat; dilemahkan timbal atau beton tebal</td></tr>
            <tr><td>Daya ionisasi</td><td>paling kuat</td><td>sedang</td><td>paling lemah</td></tr>
          </tbody>
        </table>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/daya-tembus-radiasi.svg" alt="Daya tembus tiga jenis radiasi dari sebuah sumber radioaktif. Sinar alfa sudah tertahan oleh selembar kertas. Sinar beta menembus kertas tetapi tertahan oleh lempeng aluminium setebal beberapa milimeter. Sinar gamma menembus kertas dan aluminium, lalu sangat dilemahkan oleh lapisan timbal yang tebal." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Daya tembus sinar alfa, beta, dan gamma.</figcaption>
      </figure>

      <div class="catatan info">
        <strong class="judul">Daya tembus berbanding terbalik dengan daya ionisasi</strong>
        Partikel alfa yang besar dan bermuatan +2 sangat kuat mengionisasi atom-atom yang dilewatinya, sehingga energinya cepat habis dan jangkauannya pendek. Sinar gamma jarang berinteraksi dengan atom, sehingga dapat menembus jauh.
      </div>
    </section>

    <!-- ============ 3. PERSAMAAN PELURUHAN ============ -->
    <section class="bagian" id="peluruhan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Persamaan peluruhan</h2>
      </div>

      <p>Seperti reaksi inti lainnya, peluruhan memenuhi hukum kekekalan nomor massa dan nomor atom.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Peluruhan</th><th>Perubahan inti</th><th>Contoh</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfa</td><td>A berkurang 4, Z berkurang 2</td>
              <td>${nuklida('U', 92, 238)} → ${nuklida('Th', 90, 234)} + ${nuklida('He', 2, 4)}</td>
            </tr>
            <tr>
              <td>Beta (β⁻)</td><td>A tetap, Z bertambah 1; sebuah neutron berubah menjadi proton dan elektron</td>
              <td>${nuklida('C', 6, 14)} → ${nuklida('N', 7, 14)} + ${nuklida('e', '−1', 0)}</td>
            </tr>
            <tr>
              <td>Positron (β⁺)</td><td>A tetap, Z berkurang 1; sebuah proton berubah menjadi neutron dan positron</td>
              <td>${nuklida('Na', 11, 22)} → ${nuklida('Ne', 10, 22)} + ${nuklida('e', '+1', 0)}</td>
            </tr>
            <tr>
              <td>Gamma</td><td>A dan Z tetap; inti yang tereksitasi melepaskan energi</td>
              <td>${nuklida('Co', 27, 60)}* → ${nuklida('Co', 27, 60)} + γ</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh: menghitung jumlah peluruhan</strong>
        Inti ${nuklida('Th', 90, 232)} meluruh berkali-kali sampai menjadi ${nuklida('Pb', 82, 208)} yang stabil. Nomor massa hanya berkurang oleh peluruhan alfa: (232 − 208)/4 = 6 kali alfa. Enam alfa menurunkan nomor atom sebanyak 12, menjadi 78. Agar menjadi 82, nomor atom harus naik 4, sehingga terjadi 4 kali peluruhan beta.
      </div>
    </section>

    <!-- ============ 4. WAKTU PARUH ============ -->
    <section class="bagian" id="waktu-paruh">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Waktu paruh dan aktivitas</h2>
      </div>

      <p>Kita tidak dapat menebak kapan satu inti tertentu akan meluruh, tetapi untuk jumlah inti yang sangat banyak, laju peluruhannya dapat diramalkan dengan tepat. <strong>Waktu paruh</strong> (<em>T</em>½) adalah waktu yang diperlukan agar separuh dari inti radioaktif meluruh.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/grafik-peluruhan.svg" alt="Grafik jumlah inti radioaktif N terhadap waktu t berupa kurva yang turun secara eksponensial. Mula-mula jumlahnya N nol. Setelah satu waktu paruh tersisa setengah N nol, setelah dua waktu paruh tersisa seperempat N nol, dan setelah tiga waktu paruh tersisa seperdelapan N nol." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Setiap satu waktu paruh, jumlah inti yang tersisa menjadi setengahnya.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Hukum peluruhan</div>
        <div class="rumus-isi">
          <math display="block" aria-label="N sama dengan N nol dikali setengah pangkat t per T setengah">
            <mi>N</mi><mo>=</mo><msub><mi>N</mi><mn>0</mn></msub><msup><mrow><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>)</mo></mrow><mfrac><mi>t</mi><msub><mi>T</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msub></mfrac></msup>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="aktivitas A sama dengan lambda N, dan lambda sama dengan 0,693 per T setengah">
            <mi>A</mi><mo>=</mo><mi>λ</mi><mi>N</mi>
            <mspace width="1.5em"/>
            <mi>λ</mi><mo>=</mo><mfrac><mn>0,693</mn><msub><mi>T</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msub></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>N<sub>0</sub>, N</dt><dd>jumlah inti (atau massa) mula-mula dan yang tersisa setelah waktu t</dd>
            <dt>T<sub>1/2</sub></dt><dd>waktu paruh <span class="satuan">(s, hari, tahun)</span></dd>
            <dt>A</dt><dd>aktivitas, yaitu banyaknya peluruhan setiap sekon <span class="satuan">(becquerel, Bq)</span></dd>
            <dt>λ</dt><dd>tetapan peluruhan <span class="satuan">(/s)</span></dd>
          </dl>
        </div>
      </div>

      <p>Aktivitas sebanding dengan jumlah inti, sehingga aktivitas juga menjadi setengahnya setiap satu waktu paruh. Satuan lain aktivitas adalah curie: 1 Ci = 3,7 × 10<sup>10</sup> Bq.</p>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Iodin-131 memiliki waktu paruh 8 hari. Dari 80 mg iodin-131, setelah 24 hari (3 waktu paruh) tersisa 80 × (½)³ = 10 mg.
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Radioisotop</th><th>Waktu paruh</th></tr>
          </thead>
          <tbody>
            <tr><td>Teknesium-99m</td><td>6 jam</td></tr>
            <tr><td>Iodin-131</td><td>8 hari</td></tr>
            <tr><td>Kobalt-60</td><td>5,3 tahun</td></tr>
            <tr><td>Karbon-14</td><td>5.730 tahun</td></tr>
            <tr><td>Uranium-238</td><td>4,5 miliar tahun</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ============ 5. KARBON-14 ============ -->
    <section class="bagian" id="karbon">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Penanggalan karbon-14</h2>
      </div>

      <p>Karbon-14 terbentuk terus-menerus di atmosfer dan ikut terserap makhluk hidup melalui fotosintesis dan makanan. Selama hidup, perbandingan karbon-14 terhadap karbon-12 di dalam tubuhnya tetap. Setelah makhluk itu mati, karbon-14 tidak lagi bertambah dan terus meluruh dengan waktu paruh 5.730 tahun. Dengan mengukur sisa karbon-14, umur fosil, kayu, atau tulang dapat ditentukan.</p>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Sepotong kayu kuno hanya mengandung 25% karbon-14 dibandingkan kayu yang masih hidup. Karena 25% = (½)², kayu itu telah melewati 2 waktu paruh, sehingga umurnya sekitar 2 × 5.730 = 11.460 tahun.
      </div>

      <p>Penanggalan karbon cocok untuk benda berumur sampai sekitar 50.000 tahun. Untuk batuan yang jauh lebih tua dipakai radioisotop dengan waktu paruh panjang, seperti uranium-238.</p>
    </section>

    <!-- ============ 6. MANFAAT ============ -->
    <section class="bagian" id="manfaat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Pemanfaatan radioisotop</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Kedokteran</h3>
          <p>Teknesium-99m untuk pencitraan organ, iodin-131 untuk diagnosis dan terapi kelenjar tiroid, kobalt-60 untuk radioterapi kanker, dan sinar gamma untuk mensterilkan alat bedah.</p>
        </div>
        <div class="kartu">
          <h3>Industri</h3>
          <p>Sinar beta untuk mengukur dan mengendalikan ketebalan kertas, plastik, dan lembaran logam. Sinar gamma untuk memeriksa cacat las (radiografi) dan mendeteksi kebocoran pipa bawah tanah.</p>
        </div>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Pertanian dan pangan</h3>
          <p>Radiasi dipakai untuk menghasilkan varietas tanaman unggul (pemuliaan mutasi), seperti beberapa varietas padi dan kedelai hasil BATAN (kini BRIN). Iradiasi juga dipakai untuk mengawetkan bahan pangan dan memandulkan serangga hama.</p>
        </div>
        <div class="kartu">
          <h3>Penelitian dan energi</h3>
          <p>Radioisotop dipakai sebagai perunut aliran air tanah dan sungai, penentu umur benda purbakala (karbon-14), dan uranium sebagai bahan bakar pembangkit listrik tenaga nuklir.</p>
        </div>
      </div>
    </section>

    <!-- ============ 7. PROTEKSI ============ -->
    <section class="bagian" id="proteksi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">7</span>
        <h2>Bahaya dan proteksi radiasi</h2>
      </div>

      <p>Radiasi pengion dapat merusak sel dan DNA. Paparan dosis tinggi dalam waktu singkat menyebabkan luka bakar radiasi dan penyakit radiasi, sedangkan paparan berulang meningkatkan risiko kanker dan mutasi genetik. Besarnya dampak radiasi pada tubuh dinyatakan dengan <strong>dosis ekuivalen</strong> dalam satuan <strong>sievert</strong> (Sv).</p>

      <p>Pekerja radiasi di rumah sakit, industri, dan reaktor menerapkan tiga prinsip proteksi:</p>

      <ol class="langkah">
        <li><strong>Waktu</strong>: bekerja di dekat sumber radiasi sesingkat mungkin.</li>
        <li><strong>Jarak</strong>: menjauh dari sumber. Intensitas radiasi berbanding terbalik dengan kuadrat jarak, sehingga menjauh dua kali lipat menurunkan intensitas menjadi seperempatnya.</li>
        <li><strong>Perisai</strong>: memasang penghalang yang sesuai, misalnya timbal atau beton tebal untuk sinar gamma dan sinar-X.</li>
      </ol>

      <p>Pekerja radiasi juga memakai <strong>dosimeter</strong> untuk memantau dosis yang diterimanya. Di Indonesia, pemanfaatan tenaga nuklir diawasi oleh Badan Pengawas Tenaga Nuklir (BAPETEN).</p>
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
              <td>Peluruhan alfa</td><td>A − 4, Z − 2</td>
              <td>memancarkan ${nuklida('He', 2, 4)}</td>
            </tr>
            <tr>
              <td>Peluruhan beta</td><td>A tetap, Z + 1</td>
              <td>memancarkan ${nuklida('e', '−1', 0)}</td>
            </tr>
            <tr>
              <td>Hukum peluruhan</td><td>setengahnya tiap T½</td>
              <td><math><mi>N</mi><mo>=</mo><msub><mi>N</mi><mn>0</mn></msub><msup><mrow><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>)</mo></mrow><mrow><mi>t</mi><mo>/</mo><msub><mi>T</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msub></mrow></msup></math></td>
            </tr>
            <tr>
              <td>Aktivitas</td><td>Bq</td>
              <td><math><mi>A</mi><mo>=</mo><mi>λ</mi><mi>N</mi></math></td>
            </tr>
            <tr>
              <td>Tetapan peluruhan</td><td>/s</td>
              <td><math><mi>λ</mi><mo>=</mo><mfrac><mn>0,693</mn><msub><mi>T</mi><mrow><mn>1</mn><mo>/</mo><mn>2</mn></mrow></msub></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

/* ====== Bab 103-1 · Perbandingan Trigonometri ====== */

import { Chapter } from '../../materials';

export const perbandinganTrigonometri: Chapter = {
  chapterId: "103-1",
  title: "Perbandingan Trigonometri",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Geometri · Kelas X</span>
      <h1>Perbandingan Trigonometri</h1>
      <p>Rangkuman sisi-sisi segitiga siku-siku, enam perbandingan trigonometri untuk sudut lancip, nilai sudut istimewa, dan identitas dasar.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#segitiga">Segitiga siku-siku</a></li>
        <li><a href="#perbandingan">Perbandingan trigonometri</a></li>
        <li><a href="#istimewa">Sudut istimewa</a></li>
        <li><a href="#identitas">Hubungan antarperbandingan</a></li>
        <li><a href="#contoh">Contoh soal</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. SEGITIGA SIKU-SIKU ============ -->
    <section class="bagian" id="segitiga">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Segitiga siku-siku</h2>
      </div>

      <p>Trigonometri mempelajari hubungan antara <strong>sudut</strong> dan <strong>panjang sisi</strong> segitiga. Untuk sudut lancip θ pada segitiga siku-siku, ketiga sisinya diberi nama menurut letaknya terhadap θ.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/segitiga-siku-trigonometri.svg" alt="Segitiga siku-siku ABC dengan sudut siku-siku di C dan sudut θ di A. Sisi AB di hadapan sudut siku-siku adalah sisi miring atau hipotenusa. Sisi BC yang berhadapan dengan sudut θ adalah sisi depan. Sisi AC yang mengapit sudut θ adalah sisi samping." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Sisi depan, sisi samping, dan sisi miring terhadap sudut θ.</figcaption>
      </figure>

      <ul class="poin">
        <li><strong>Sisi miring</strong> (hipotenusa): sisi terpanjang, di hadapan sudut siku-siku.</li>
        <li><strong>Sisi depan</strong>: sisi di hadapan sudut θ.</li>
        <li><strong>Sisi samping</strong>: sisi yang mengapit sudut θ, selain sisi miring.</li>
      </ul>

      <p>Ketiga sisi selalu memenuhi <strong>teorema Pythagoras</strong>: miring<sup>2</sup> = depan<sup>2</sup> + samping<sup>2</sup>.</p>
    </section>

    <!-- ============ 2. PERBANDINGAN ============ -->
    <section class="bagian" id="perbandingan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Perbandingan trigonometri</h2>
      </div>

      <p>Segitiga siku-siku dengan sudut θ yang sama selalu sebangun, berapa pun ukurannya. Karena itu, perbandingan sisinya hanya bergantung pada θ. Perbandingan inilah yang diberi nama sinus, kosinus, dan tangen.</p>

      <div class="rumus">
        <div class="rumus-judul">Sinus, kosinus, tangen</div>
        <div class="rumus-isi">
          <math display="block" aria-label="sin theta sama dengan depan per miring, cos theta sama dengan samping per miring, tan theta sama dengan depan per samping">
            <mi>sin</mi><mi>θ</mi><mo>=</mo><mfrac><mtext>depan</mtext><mtext>miring</mtext></mfrac>
            <mspace width="1.2em"/>
            <mi>cos</mi><mi>θ</mi><mo>=</mo><mfrac><mtext>samping</mtext><mtext>miring</mtext></mfrac>
            <mspace width="1.2em"/>
            <mi>tan</mi><mi>θ</mi><mo>=</mo><mfrac><mtext>depan</mtext><mtext>samping</mtext></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>θ</dt><dd>sudut lancip yang ditinjau (0° &lt; θ &lt; 90°)</dd>
            <dt>depan, samping, miring</dt><dd>panjang sisi terhadap sudut θ</dd>
          </dl>
        </div>
      </div>

      <p>Tiga perbandingan lain adalah kebalikannya: <strong>kosekan</strong> csc θ = miring/depan = 1/sin θ, <strong>sekan</strong> sec θ = miring/samping = 1/cos θ, dan <strong>kotangen</strong> cot θ = samping/depan = 1/tan θ.</p>

      <div class="catatan info">
        <strong class="judul">Cara mengingat</strong>
        <strong>sindemi</strong> (sinus = depan/miring), <strong>kosami</strong> (kosinus = samping/miring), <strong>tandesa</strong> (tangen = depan/samping).
      </div>
    </section>

    <!-- ============ 3. SUDUT ISTIMEWA ============ -->
    <section class="bagian" id="istimewa">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Sudut istimewa</h2>
      </div>

      <p>Nilai perbandingan untuk sudut 30°, 45°, dan 60° dapat dihitung tepat dari dua segitiga khusus. Segitiga 30°–60°–90° adalah setengah segitiga sama sisi, dan segitiga 45°–45°–90° adalah setengah persegi.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/sudut-istimewa.svg" alt="Dua segitiga siku-siku istimewa. Kiri, segitiga dengan sudut 30, 60, dan 90 derajat: sisi di depan sudut 30 derajat panjangnya 1, sisi di depan sudut 60 derajat panjangnya akar 3, dan sisi miringnya 2. Kanan, segitiga siku-siku sama kaki dengan sudut 45, 45, dan 90 derajat: kedua sisi siku-sikunya 1 dan sisi miringnya akar 2." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Perbandingan sisi segitiga 30°–60°–90° adalah 1 : √3 : 2, dan segitiga 45°–45°–90° adalah 1 : 1 : √2.</figcaption>
      </figure>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>θ</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
          </thead>
          <tbody>
            <tr><td>sin θ</td><td>0</td><td>1/2</td><td>½√2</td><td>½√3</td><td>1</td></tr>
            <tr><td>cos θ</td><td>1</td><td>½√3</td><td>½√2</td><td>1/2</td><td>0</td></tr>
            <tr><td>tan θ</td><td>0</td><td>⅓√3</td><td>1</td><td>√3</td><td>tidak terdefinisi</td></tr>
          </tbody>
        </table>
      </div>

      <p>Contoh: dari segitiga kiri, sin 30° = depan/miring = 1/2 dan tan 60° = √3/1 = √3. Untuk sudut lain, misalnya 35°, gunakan kalkulator dalam mode derajat (DEG): sin 35° ≈ 0,574.</p>
    </section>

    <!-- ============ 4. IDENTITAS ============ -->
    <section class="bagian" id="identitas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Hubungan antarperbandingan</h2>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Identitas dasar</div>
        <div class="rumus-isi">
          <math display="block" aria-label="tan theta sama dengan sin theta per cos theta">
            <mi>tan</mi><mi>θ</mi><mo>=</mo><mfrac><mrow><mi>sin</mi><mi>θ</mi></mrow><mrow><mi>cos</mi><mi>θ</mi></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="sin kuadrat theta ditambah cos kuadrat theta sama dengan 1">
            <msup><mi>sin</mi><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mi>cos</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>1</mn>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="sin 90 derajat dikurangi theta sama dengan cos theta">
            <mi>sin</mi><mo>(</mo><mn>90</mn><mo>°</mo><mo>−</mo><mi>θ</mi><mo>)</mo><mo>=</mo><mi>cos</mi><mi>θ</mi>
            <mspace width="1.2em"/>
            <mi>cos</mi><mo>(</mo><mn>90</mn><mo>°</mo><mo>−</mo><mi>θ</mi><mo>)</mo><mo>=</mo><mi>sin</mi><mi>θ</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>sin²θ</dt><dd>cara menulis (sin θ)²</dd>
            <dt>baris ketiga</dt><dd>dua sudut lancip pada segitiga siku-siku berjumlah 90°, sehingga sisi depan sudut yang satu adalah sisi samping sudut lainnya</dd>
          </dl>
        </div>
      </div>

      <p>Identitas sin<sup>2</sup>θ + cos<sup>2</sup>θ = 1 diperoleh dengan membagi teorema Pythagoras depan<sup>2</sup> + samping<sup>2</sup> = miring<sup>2</sup> dengan miring<sup>2</sup>.</p>
    </section>

    <!-- ============ 5. CONTOH ============ -->
    <section class="bagian" id="contoh">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Contoh soal</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Soal 1</span>
        <p>Diketahui sin A = 3/5 dengan A sudut lancip. Tentukan cos A dan tan A.</p>
      </div>
      <ol class="langkah">
        <li>sin A = depan/miring = 3/5, jadi ambil depan = 3 dan miring = 5.</li>
        <li>Samping = √(5<sup>2</sup> − 3<sup>2</sup>) = √16 = 4.</li>
        <li>cos A = samping/miring = <strong>4/5</strong>, tan A = depan/samping = <strong>3/4</strong>.</li>
      </ol>

      <div class="kartu">
        <span class="istilah">Soal 2</span>
        <p>Segitiga ABC siku-siku di C dengan AB = 10 cm dan sudut A = 30°. Tentukan panjang BC dan AC.</p>
      </div>
      <ol class="langkah">
        <li>BC adalah sisi depan sudut A: BC = AB × sin 30° = 10 × 1/2 = <strong>5 cm</strong>.</li>
        <li>AC adalah sisi samping sudut A: AC = AB × cos 30° = 10 × ½√3 = <strong>5√3 cm</strong>.</li>
      </ol>
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
            <tr><td>Sinus, kosinus, tangen</td><td>sin = de/mi, cos = sa/mi, tan = de/sa</td></tr>
            <tr><td>Kebalikannya</td><td>csc = 1/sin, sec = 1/cos, cot = 1/tan</td></tr>
            <tr><td>Segitiga istimewa</td><td>30°–60°–90° = 1 : √3 : 2; 45°–45°–90° = 1 : 1 : √2</td></tr>
            <tr><td>Identitas</td><td>tan θ = sin θ / cos θ; sin²θ + cos²θ = 1</td></tr>
            <tr><td>Sudut komplemen</td><td>sin (90° − θ) = cos θ</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase E, elemen Geometri: menerapkan perbandingan trigonometri (sinus, kosinus, tangen) pada sudut lancip (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Trigonometri.
    </footer>
  `,
  formula: "",
  example: ""
};

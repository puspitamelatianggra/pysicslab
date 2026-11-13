/* ====== Bab 2-4 · Induksi Elektromagnetik ====== */

import { Chapter } from '../../materials';

export const induksiElektromagnetik: Chapter = {
  chapterId: "2-4",
  title: "Induksi Elektromagnetik",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Listrik dan Magnet</span>
      <h1>Induksi Elektromagnetik</h1>
      <p>Rangkuman fluks magnetik, hukum Faraday, hukum Lenz, GGL induksi pada batang bergerak, generator, induktansi diri, dan transformator.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#fluks">Fluks magnetik</a></li>
        <li><a href="#faraday">Hukum Faraday</a></li>
        <li><a href="#lenz">Hukum Lenz</a></li>
        <li><a href="#batang">GGL induksi pada batang bergerak</a></li>
        <li><a href="#generator">Generator</a></li>
        <li><a href="#induktansi">Induktansi diri</a></li>
        <li><a href="#transformator">Transformator</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. FLUKS ============ -->
    <section class="bagian" id="fluks">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Fluks magnetik</h2>
      </div>

      <p>Bab sebelumnya menunjukkan bahwa arus listrik menghasilkan medan magnet. Michael Faraday lalu bertanya sebaliknya: dapatkah medan magnet menghasilkan arus listrik? Untuk menjawabnya, kita perlu besaran <strong>fluks magnetik</strong> Φ, yaitu banyaknya garis medan magnet yang menembus suatu bidang.</p>

      <div class="rumus">
        <div class="rumus-judul">Fluks magnetik</div>
        <div class="rumus-isi">
          <math display="block" aria-label="phi sama dengan B A cos theta">
            <mi>Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi><mi>cos</mi><mi>θ</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Φ</dt><dd>fluks magnetik <span class="satuan">(weber, Wb)</span></dd>
            <dt>B</dt><dd>induksi magnetik <span class="satuan">(T)</span></dd>
            <dt>A</dt><dd>luas bidang <span class="satuan">(m²)</span></dd>
            <dt>θ</dt><dd>sudut antara arah B dan garis normal bidang</dd>
          </dl>
        </div>
      </div>

      <p>Fluks paling besar jika medan menembus bidang secara tegak lurus (θ = 0°), dan nol jika medan sejajar bidang (θ = 90°).</p>
    </section>

    <!-- ============ 2. FARADAY ============ -->
    <section class="bagian" id="faraday">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Hukum Faraday</h2>
      </div>

      <p>Faraday menghubungkan sebuah kumparan dengan galvanometer, lalu menggerakkan magnet batang di dekatnya. Hasil pengamatannya:</p>

      <ul class="poin">
        <li>Saat magnet <strong>didekatkan</strong> atau <strong>dijauhkan</strong>, jarum galvanometer menyimpang. Artinya ada arus yang mengalir.</li>
        <li>Saat magnet <strong>diam</strong> di dalam kumparan, jarum kembali ke nol, walaupun medan magnetnya kuat.</li>
        <li>Makin <strong>cepat</strong> magnet digerakkan dan makin <strong>banyak</strong> lilitan kumparan, makin besar simpangan jarum.</li>
        <li>Saat arah gerak magnet dibalik, jarum menyimpang ke arah sebaliknya.</li>
      </ul>

      <p>Kesimpulannya, arus listrik timbul bukan karena adanya medan magnet, melainkan karena <strong>perubahan fluks magnetik</strong>. Peristiwa ini disebut <strong>induksi elektromagnetik</strong>, dan beda potensial yang timbul disebut <strong>GGL induksi</strong>. Fluks dapat diubah dengan mengubah <em>B</em>, mengubah luas <em>A</em>, atau mengubah sudut θ dengan memutar kumparan.</p>

      <div class="rumus">
        <div class="rumus-judul">Hukum Faraday</div>
        <div class="rumus-isi">
          <math display="block" aria-label="epsilon sama dengan minus N delta phi per delta t">
            <mi>ε</mi><mo>=</mo><mo>−</mo><mi>N</mi><mfrac><mrow><mi>Δ</mi><mi>Φ</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>ε</dt><dd>GGL induksi <span class="satuan">(V)</span></dd>
            <dt>N</dt><dd>jumlah lilitan kumparan</dd>
            <dt>ΔΦ</dt><dd>perubahan fluks magnetik <span class="satuan">(Wb)</span></dd>
            <dt>Δt</dt><dd>selang waktu perubahan <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Kumparan 200 lilitan ditembus fluks yang berkurang dari 0,05 Wb menjadi 0,01 Wb dalam 0,2 s. Besar GGL induksinya ε = 200 × (0,04/0,2) = 40 V. Tanda negatif hanya menunjukkan arah, sehingga untuk besarnya cukup ditulis 40 V.
      </div>
    </section>

    <!-- ============ 3. LENZ ============ -->
    <section class="bagian" id="lenz">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Hukum Lenz</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Hukum Lenz</span>
        <p>Arah arus induksi selalu sedemikian rupa sehingga medan magnet yang ditimbulkannya <strong>melawan perubahan fluks</strong> yang menyebabkannya. Tanda negatif pada hukum Faraday menyatakan hal ini.</p>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/hukum-lenz.svg" alt="Magnet batang dengan kutub utara menghadap kumparan digerakkan mendekati kumparan. Kumparan dihubungkan ke galvanometer G yang jarumnya menyimpang. Arus induksi membuat ujung kiri kumparan menjadi kutub utara, sehingga kumparan menolak magnet yang mendekat." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Saat kutub U magnet didekatkan, arus induksi membuat ujung kumparan juga menjadi kutub U yang menolak magnet.</figcaption>
      </figure>

      <div class="cabang">
        <div class="kartu">
          <h3>Magnet didekatkan</h3>
          <p>Fluks di dalam kumparan <strong>bertambah</strong>. Arus induksi membuat ujung kumparan yang dekat magnet menjadi kutub <strong>sejenis</strong>, sehingga magnet ditolak.</p>
        </div>
        <div class="kartu">
          <h3>Magnet dijauhkan</h3>
          <p>Fluks di dalam kumparan <strong>berkurang</strong>. Arus induksi membuat ujung kumparan menjadi kutub <strong>berlawanan</strong>, sehingga magnet ditarik kembali.</p>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Lenz dan kekekalan energi</strong>
        Karena kumparan selalu melawan gerakan magnet, kita harus melakukan usaha untuk menggerakkan magnet. Usaha inilah yang berubah menjadi energi listrik. Jika arus induksi justru membantu gerakan magnet, energi akan muncul dari ketiadaan, dan itu melanggar hukum kekekalan energi.
      </div>
    </section>

    <!-- ============ 4. BATANG BERGERAK ============ -->
    <section class="bagian" id="batang">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>GGL induksi pada batang bergerak</h2>
      </div>

      <p>Sebuah batang konduktor sepanjang <em>L</em> digeser dengan kecepatan <em>v</em> di atas rel berbentuk U yang berada di dalam medan magnet tegak lurus. Luas rangkaian yang ditembus medan terus berubah, sehingga timbul GGL induksi.</p>

      <div class="rumus">
        <div class="rumus-judul">GGL induksi batang bergerak</div>
        <div class="rumus-isi">
          <math display="block" aria-label="epsilon sama dengan B L v">
            <mi>ε</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>B</dt><dd>induksi magnetik <span class="satuan">(T)</span></dd>
            <dt>L</dt><dd>panjang batang <span class="satuan">(m)</span></dd>
            <dt>v</dt><dd>kecepatan batang, tegak lurus B <span class="satuan">(m/s)</span></dd>
          </dl>
        </div>
      </div>

      <p>Arah arus induksi pada batang ditentukan dengan kaidah tangan kanan terbuka: ibu jari menunjuk arah <em>v</em>, keempat jari menunjuk arah <em>B</em>, dan dorongan telapak tangan menunjukkan arah arus induksi di dalam batang.</p>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Batang 0,4 m digeser dengan kecepatan 10 m/s di dalam medan 0,5 T. GGL-nya ε = 0,5 × 0,4 × 10 = 2 V. Jika hambatan rangkaian 4 Ω, arus induksinya <em>I</em> = 2/4 = 0,5 A.
      </div>
    </section>

    <!-- ============ 5. GENERATOR ============ -->
    <section class="bagian" id="generator">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Generator</h2>
      </div>

      <p><strong>Generator</strong> mengubah energi gerak menjadi energi listrik. Kumparan diputar di antara dua kutub magnet, sehingga sudut θ terus berubah dan fluks yang menembus kumparan ikut berubah secara periodik. GGL yang dihasilkan berbentuk sinus.</p>

      <div class="rumus">
        <div class="rumus-judul">GGL generator</div>
        <div class="rumus-isi">
          <math display="block" aria-label="epsilon sama dengan N B A omega sin omega t">
            <mi>ε</mi><mo>=</mo><mi>N</mi><mi>B</mi><mi>A</mi><mi>ω</mi><mi>sin</mi><mi>ω</mi><mi>t</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="epsilon maksimum sama dengan N B A omega">
            <msub><mi>ε</mi><mtext>maks</mtext></msub><mo>=</mo><mi>N</mi><mi>B</mi><mi>A</mi><mi>ω</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>ω</dt><dd>kecepatan sudut putaran kumparan <span class="satuan">(rad/s)</span></dd>
            <dt>A</dt><dd>luas kumparan <span class="satuan">(m²)</span></dd>
            <dt>t</dt><dd>waktu <span class="satuan">(s)</span></dd>
          </dl>
        </div>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Generator AC</h3>
          <p>Ujung kumparan dihubungkan ke dua <strong>cincin geser</strong>, sehingga arus keluaran berbalik arah setiap setengah putaran (arus bolak-balik).</p>
        </div>
        <div class="kartu">
          <h3>Generator DC</h3>
          <p>Ujung kumparan dihubungkan ke <strong>komutator</strong> (cincin belah), sehingga arus keluaran selalu searah walaupun besarnya naik-turun.</p>
        </div>
      </div>

      <p>Hampir semua pembangkit listrik memakai generator. Pada PLTA, turbin diputar oleh air terjun. Pada PLTU dan PLTP, turbin diputar oleh uap. Pada PLTB, turbin diputar oleh angin. Yang berbeda hanya sumber energi pemutar turbinnya.</p>
    </section>

    <!-- ============ 6. INDUKTANSI ============ -->
    <section class="bagian" id="induktansi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Induktansi diri</h2>
      </div>

      <p>Arus yang berubah di dalam sebuah kumparan mengubah fluks magnetiknya sendiri, sehingga kumparan itu menginduksi GGL pada dirinya sendiri. Menurut hukum Lenz, GGL ini <strong>melawan perubahan arus</strong>. Kemampuan kumparan melakukan hal ini disebut <strong>induktansi diri</strong>, dan kumparannya disebut <strong>induktor</strong>.</p>

      <div class="rumus">
        <div class="rumus-judul">Induktansi diri</div>
        <div class="rumus-isi">
          <math display="block" aria-label="epsilon sama dengan minus L delta I per delta t">
            <mi>ε</mi><mo>=</mo><mo>−</mo><mi>L</mi><mfrac><mrow><mi>Δ</mi><mi>I</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="induktansi solenoida L sama dengan mu nol N kuadrat A per l">
            <mi>L</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><mi>l</mi></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="energi W sama dengan setengah L I kuadrat">
            <mi>W</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>L</mi><msup><mi>I</mi><mn>2</mn></msup>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>L</dt><dd>induktansi diri <span class="satuan">(henry, H)</span></dd>
            <dt>ΔI/Δt</dt><dd>laju perubahan arus <span class="satuan">(A/s)</span></dd>
            <dt>A, l</dt><dd>luas penampang dan panjang solenoida <span class="satuan">(m², m)</span></dd>
            <dt>W</dt><dd>energi yang tersimpan dalam medan magnet induktor <span class="satuan">(J)</span></dd>
          </dl>
        </div>
      </div>

      <p>Saat sakelar sebuah rangkaian berinduktor besar diputus, arus turun ke nol dalam waktu sangat singkat. GGL induksi diri yang timbul bisa sangat besar sampai memercikkan bunga api di sakelar.</p>
    </section>

    <!-- ============ 7. TRANSFORMATOR ============ -->
    <section class="bagian" id="transformator">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">7</span>
        <h2>Transformator</h2>
      </div>

      <p><strong>Transformator</strong> (trafo) adalah alat untuk menaikkan atau menurunkan tegangan bolak-balik. Trafo terdiri atas kumparan primer dan kumparan sekunder yang dililitkan pada satu inti besi lunak. Arus bolak-balik di kumparan primer menghasilkan fluks yang terus berubah, lalu fluks itu dialirkan inti besi ke kumparan sekunder dan menginduksi GGL di sana.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/transformator.svg" alt="Transformator step-down. Inti besi lunak berbentuk bingkai persegi. Kumparan primer dengan lilitan Np di sisi kiri dihubungkan ke sumber tegangan bolak-balik Vp. Kumparan sekunder dengan lilitan Ns yang lebih sedikit di sisi kanan dihubungkan ke lampu dan menghasilkan tegangan Vs yang lebih kecil." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Transformator step-down: lilitan sekunder lebih sedikit, sehingga tegangan keluarannya lebih kecil.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Transformator</div>
        <div class="rumus-isi">
          <math display="block" aria-label="V p per V s sama dengan N p per N s sama dengan I s per I p, untuk trafo ideal">
            <mfrac><msub><mi>V</mi><mi>p</mi></msub><msub><mi>V</mi><mi>s</mi></msub></mfrac><mo>=</mo><mfrac><msub><mi>N</mi><mi>p</mi></msub><msub><mi>N</mi><mi>s</mi></msub></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mi>s</mi></msub><msub><mi>I</mi><mi>p</mi></msub></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="efisiensi eta sama dengan P s per P p dikali 100 persen">
            <mi>η</mi><mo>=</mo><mfrac><msub><mi>P</mi><mi>s</mi></msub><msub><mi>P</mi><mi>p</mi></msub></mfrac><mo>×</mo><mn>100</mn><mo>%</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>V<sub>p</sub>, V<sub>s</sub></dt><dd>tegangan primer dan sekunder <span class="satuan">(V)</span></dd>
            <dt>N<sub>p</sub>, N<sub>s</sub></dt><dd>jumlah lilitan primer dan sekunder</dd>
            <dt>I<sub>p</sub>, I<sub>s</sub></dt><dd>arus primer dan sekunder <span class="satuan">(A)</span></dd>
            <dt>η</dt><dd>efisiensi trafo, dengan P = VI</dd>
          </dl>
        </div>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Trafo step-up</h3>
          <p><em>N</em><sub>s</sub> &gt; <em>N</em><sub>p</sub>, sehingga <em>V</em><sub>s</sub> &gt; <em>V</em><sub>p</sub> dan <em>I</em><sub>s</sub> &lt; <em>I</em><sub>p</sub>. Dipakai di pembangkit listrik.</p>
        </div>
        <div class="kartu">
          <h3>Trafo step-down</h3>
          <p><em>N</em><sub>s</sub> &lt; <em>N</em><sub>p</sub>, sehingga <em>V</em><sub>s</sub> &lt; <em>V</em><sub>p</sub> dan <em>I</em><sub>s</sub> &gt; <em>I</em><sub>p</sub>. Dipakai pada adaptor dan pengisi daya ponsel.</p>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Trafo memiliki 1.000 lilitan primer dan 50 lilitan sekunder, dan dihubungkan ke tegangan 220 V. Tegangan sekundernya <em>V</em><sub>s</sub> = (50/1.000) × 220 = 11 V.
      </div>

      <div class="catatan">
        <strong class="judul">Mengapa listrik dikirim bertegangan tinggi?</strong>
        Untuk daya yang sama, <em>P</em> = <em>VI</em>, menaikkan tegangan berarti menurunkan arus. Energi yang hilang menjadi kalor di kabel transmisi sebanding dengan <em>I</em>²<em>R</em>, sehingga arus yang kecil membuat kerugiannya jauh berkurang. Karena itu PLN menaikkan tegangan sampai ratusan kilovolt di jaringan SUTET, lalu menurunkannya lagi di gardu dekat rumah. Trafo hanya bekerja dengan arus bolak-balik, karena arus searah tidak menghasilkan perubahan fluks.
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
              <td>Fluks magnetik</td><td>Wb</td>
              <td><math><mi>Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi><mi>cos</mi><mi>θ</mi></math></td>
            </tr>
            <tr>
              <td>Hukum Faraday</td><td>V</td>
              <td><math><mi>ε</mi><mo>=</mo><mo>−</mo><mi>N</mi><mfrac><mrow><mi>Δ</mi><mi>Φ</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Batang bergerak</td><td>V</td>
              <td><math><mi>ε</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></math></td>
            </tr>
            <tr>
              <td>Generator</td><td>V</td>
              <td><math><msub><mi>ε</mi><mtext>maks</mtext></msub><mo>=</mo><mi>N</mi><mi>B</mi><mi>A</mi><mi>ω</mi></math></td>
            </tr>
            <tr>
              <td>Induktansi diri</td><td>V</td>
              <td><math><mi>ε</mi><mo>=</mo><mo>−</mo><mi>L</mi><mfrac><mrow><mi>Δ</mi><mi>I</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Energi induktor</td><td>J</td>
              <td><math><mi>W</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>L</mi><msup><mi>I</mi><mn>2</mn></msup></math></td>
            </tr>
            <tr>
              <td>Transformator</td><td>–</td>
              <td><math><mfrac><msub><mi>V</mi><mi>p</mi></msub><msub><mi>V</mi><mi>s</mi></msub></mfrac><mo>=</mo><mfrac><msub><mi>N</mi><mi>p</mi></msub><msub><mi>N</mi><mi>s</mi></msub></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

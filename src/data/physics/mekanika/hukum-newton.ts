/* ====== Bab 1-6 · Hukum Newton ====== */

import { Chapter } from '../../materials';

export const hukumNewton: Chapter = {
  chapterId: "1-6",
  title: "Hukum Newton",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Dinamika</span>
      <h1>Hukum Newton tentang Gerak</h1>
      <p>Jika kinematika menjelaskan bagaimana benda bergerak, dinamika menjelaskan <strong>mengapa</strong> benda bergerak. Rangkuman ini membahas gaya, massa dan berat, pengaruh gaya terhadap gerak, serta tiga hukum Newton.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#gaya">Apa itu gaya?</a></li>
        <li><a href="#massa-berat">Massa dan berat</a></li>
        <li><a href="#pengaruh-gaya">Pengaruh gaya terhadap gerak benda</a></li>
        <li><a href="#newton-1">Hukum I Newton</a></li>
        <li><a href="#newton-2">Hukum II Newton</a></li>
        <li><a href="#newton-3">Hukum III Newton</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. GAYA ============ -->
    <section class="bagian" id="gaya">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Apa itu gaya?</h2>
      </div>

      <div class="kartu">
        <span class="tipe vektor">Vektor</span>
        <span class="istilah">Gaya (F)</span>
        <p>Gaya adalah <strong>tarikan atau dorongan</strong> yang bekerja pada suatu benda. Gaya memiliki besar dan arah, sehingga termasuk besaran vektor.</p>
        <ul class="poin">
          <li>Satuan gaya dalam SI adalah <strong>newton (N)</strong>, dengan 1 N = 1 kg·m/s².</li>
          <li>Gaya diukur dengan <strong>dinamometer</strong> (neraca pegas).</li>
          <li>Gaya digambarkan sebagai anak panah: panjangnya menunjukkan besar gaya, arahnya menunjukkan arah gaya.</li>
        </ul>
      </div>

      <p>Jika beberapa gaya bekerja pada satu benda, pengaruhnya dihitung dari <strong>resultan gaya</strong> (ΣF):</p>
      <ul class="poin">
        <li>Gaya-gaya yang <strong>searah</strong> dijumlahkan: ΣF = F<sub>1</sub> + F<sub>2</sub>.</li>
        <li>Gaya-gaya yang <strong>berlawanan arah</strong> dikurangkan: ΣF = F<sub>1</sub> − F<sub>2</sub>. Arah resultannya mengikuti gaya yang lebih besar.</li>
        <li>Jika ΣF = 0, gaya-gaya tersebut dikatakan <strong>seimbang</strong>.</li>
      </ul>
    </section>

    <!-- ============ 2. MASSA DAN BERAT ============ -->
    <section class="bagian" id="massa-berat">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Massa dan berat</h2>
      </div>

      <p>Dalam kehidupan sehari-hari, massa dan berat sering dianggap sama. Dalam fisika, keduanya adalah besaran yang <strong>berbeda</strong>.</p>

      <div class="kartu">
        <span class="tipe">Skalar</span>
        <span class="istilah">Massa (m)</span>
        <p>Ukuran banyaknya zat yang dikandung benda, sekaligus ukuran <strong>kelembaman</strong> (kecenderungan benda mempertahankan keadaan geraknya). Massa benda <strong>sama di mana pun</strong>, di Bumi maupun di Bulan.</p>
      </div>

      <div class="kartu">
        <span class="tipe vektor">Vektor</span>
        <span class="istilah">Berat (w)</span>
        <p>Gaya gravitasi yang bekerja pada benda. Arahnya selalu menuju <strong>pusat bumi</strong> (ke bawah). Berat bergantung pada percepatan gravitasi di tempat benda berada.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Berat benda</div>
        <div class="rumus-isi">
          <math display="block" aria-label="w sama dengan m g">
            <mi>w</mi><mo>=</mo><mi>m</mi><mi>g</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>w</dt><dd>berat benda <span class="satuan">(N)</span></dd>
            <dt>m</dt><dd>massa benda <span class="satuan">(kg)</span></dd>
            <dt>g</dt><dd>percepatan gravitasi, di Bumi ≈ 10 m/s² <span class="satuan">(m/s²)</span></dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Pembeda</th><th>Massa</th><th>Berat</th></tr>
          </thead>
          <tbody>
            <tr><td>Jenis besaran</td><td>Skalar</td><td>Vektor</td></tr>
            <tr><td>Satuan SI</td><td>kilogram (kg)</td><td>newton (N)</td></tr>
            <tr><td>Alat ukur</td><td>Neraca (timbangan)</td><td>Dinamometer</td></tr>
            <tr><td>Bergantung tempat?</td><td>Tidak</td><td>Ya, bergantung pada g</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Astronaut bermassa 60 kg memiliki berat 60 × 10 = 600 N di Bumi. Di Bulan (g ≈ 1,6 m/s²) beratnya hanya sekitar 96 N, tetapi massanya tetap 60 kg.
      </div>
    </section>

    <!-- ============ 3. PENGARUH GAYA ============ -->
    <section class="bagian" id="pengaruh-gaya">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Pengaruh gaya terhadap gerak benda</h2>
      </div>

      <p>Gaya yang bekerja pada benda dapat menimbulkan berbagai perubahan:</p>
      <ul class="poin">
        <li><strong>Benda diam menjadi bergerak.</strong> Contoh: bola yang ditendang.</li>
        <li><strong>Benda bergerak menjadi diam.</strong> Contoh: kiper menangkap bola.</li>
        <li><strong>Mengubah kecepatan benda</strong>, menjadi lebih cepat atau lebih lambat. Contoh: sepeda yang dikayuh lebih kencang atau direm.</li>
        <li><strong>Mengubah arah gerak benda.</strong> Contoh: bola yang dipukul balik dengan raket.</li>
        <li><strong>Mengubah bentuk benda.</strong> Contoh: plastisin yang ditekan atau kaleng yang diinjak.</li>
      </ul>

      <p>Tiga perubahan pertama berkaitan dengan perubahan kecepatan, yaitu <strong>percepatan</strong>. Hubungan antara gaya dan percepatan inilah yang dijelaskan oleh hukum-hukum Newton.</p>
    </section>

    <!-- ============ 4. HUKUM I NEWTON ============ -->
    <section class="bagian" id="newton-1">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Hukum I Newton</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Hukum kelembaman (inersia)</span>
        <p>"Jika resultan gaya yang bekerja pada benda sama dengan nol, benda yang diam akan tetap diam dan benda yang bergerak akan tetap bergerak lurus dengan kecepatan konstan."</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Hukum I Newton</div>
        <div class="rumus-isi">
          <math display="block" aria-label="sigma F sama dengan nol">
            <mo>Σ</mo><mi>F</mi><mo>=</mo><mn>0</mn>
          </math>
        </div>
      </div>

      <p>Setiap benda cenderung mempertahankan keadaan geraknya. Sifat ini disebut <strong>kelembaman</strong> atau <strong>inersia</strong>. Makin besar massa benda, makin besar kelembamannya.</p>
      <ul class="poin">
        <li>Saat bus mengerem mendadak, penumpang terdorong ke depan karena tubuhnya cenderung tetap bergerak.</li>
        <li>Saat bus tiba-tiba melaju, penumpang terdorong ke belakang karena tubuhnya cenderung tetap diam.</li>
        <li>Kertas di bawah gelas yang ditarik cepat dapat lepas tanpa menjatuhkan gelas.</li>
      </ul>
    </section>

    <!-- ============ 5. HUKUM II NEWTON ============ -->
    <section class="bagian" id="newton-2">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Hukum II Newton</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Hukum II Newton</span>
        <p>"Percepatan yang dialami benda sebanding dengan resultan gaya yang bekerja padanya dan berbanding terbalik dengan massanya. Arah percepatan sama dengan arah resultan gaya."</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Hukum II Newton</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a sama dengan sigma F dibagi m, atau sigma F sama dengan m a">
            <mi>a</mi><mo>=</mo><mfrac><mrow><mo>Σ</mo><mi>F</mi></mrow><mi>m</mi></mfrac>
            <mspace width="1em"/><mtext>atau</mtext><mspace width="1em"/>
            <mo>Σ</mo><mi>F</mi><mo>=</mo><mi>m</mi><mi>a</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>ΣF</dt><dd>resultan gaya <span class="satuan">(N)</span></dd>
            <dt>m</dt><dd>massa benda <span class="satuan">(kg)</span></dd>
            <dt>a</dt><dd>percepatan <span class="satuan">(m/s²)</span></dd>
          </dl>
        </div>
      </div>

      <ul class="poin">
        <li>Gaya <strong>diperbesar</strong> → percepatan makin besar (pada massa yang sama).</li>
        <li>Massa <strong>diperbesar</strong> → percepatan makin kecil (pada gaya yang sama). Mendorong truk jauh lebih sulit daripada mendorong troli.</li>
        <li>Hukum I adalah kasus khusus Hukum II: jika ΣF = 0, maka <em>a</em> = 0 (diam atau GLB).</li>
      </ul>
    </section>

    <!-- ============ 6. HUKUM III NEWTON ============ -->
    <section class="bagian" id="newton-3">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Hukum III Newton</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Hukum aksi-reaksi</span>
        <p>"Jika benda A memberikan gaya pada benda B (aksi), maka benda B memberikan gaya pada benda A (reaksi) yang besarnya sama tetapi arahnya berlawanan."</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Hukum III Newton</div>
        <div class="rumus-isi">
          <math display="block" aria-label="F aksi sama dengan negatif F reaksi">
            <msub><mi>F</mi><mtext>aksi</mtext></msub><mo>=</mo><mo>−</mo><msub><mi>F</mi><mtext>reaksi</mtext></msub>
          </math>
        </div>
      </div>

      <p>Ciri-ciri pasangan gaya aksi-reaksi:</p>
      <ul class="poin">
        <li>Besarnya <strong>sama</strong>.</li>
        <li>Arahnya <strong>berlawanan</strong>.</li>
        <li>Bekerja pada <strong>dua benda yang berbeda</strong>, sehingga tidak saling meniadakan.</li>
        <li>Muncul bersamaan dan jenis gayanya sama.</li>
      </ul>

      <p>Contoh: saat mendayung, dayung mendorong air ke belakang (aksi) dan air mendorong perahu ke depan (reaksi). Roket menyemburkan gas ke bawah, dan gas mendorong roket ke atas.</p>

      <div class="catatan">
        <strong class="judul">Hati-hati: berat dan gaya normal bukan aksi-reaksi</strong>
        Buku di atas meja mengalami berat <em>w</em> (ke bawah) dan gaya normal <em>N</em> (ke atas) yang besarnya sama. Namun keduanya bekerja pada benda yang <strong>sama</strong> (buku), jadi bukan pasangan aksi-reaksi. Pasangan reaksi dari berat buku adalah gaya tarik buku terhadap Bumi.
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Hukum</th><th>Inti</th><th>Rumus</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Hukum I</td><td>Kelembaman: diam tetap diam, bergerak tetap GLB</td>
              <td><math><mo>Σ</mo><mi>F</mi><mo>=</mo><mn>0</mn></math></td>
            </tr>
            <tr>
              <td>Hukum II</td><td>Percepatan sebanding gaya, berbanding terbalik massa</td>
              <td><math><mo>Σ</mo><mi>F</mi><mo>=</mo><mi>m</mi><mi>a</mi></math></td>
            </tr>
            <tr>
              <td>Hukum III</td><td>Aksi-reaksi: sama besar, berlawanan arah, pada dua benda</td>
              <td><math><msub><mi>F</mi><mtext>aksi</mtext></msub><mo>=</mo><mo>−</mo><msub><mi>F</mi><mtext>reaksi</mtext></msub></math></td>
            </tr>
            <tr>
              <td>Berat</td><td>Gaya gravitasi pada benda</td>
              <td><math><mi>w</mi><mo>=</mo><mi>m</mi><mi>g</mi></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

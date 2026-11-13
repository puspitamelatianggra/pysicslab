/* ====== Bab 3-5 · Hukum Termodinamika ====== */

import { Chapter } from '../../materials';

export const hukumTermodinamika: Chapter = {
  chapterId: "3-5",
  title: "Hukum Termodinamika",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Termodinamika</span>
      <h1>Hukum Termodinamika</h1>
      <p>Rangkuman usaha pada gas, hukum I termodinamika, proses isobarik, isokhorik, isotermal, dan adiabatik, kapasitas kalor gas, hukum II termodinamika, mesin kalor, mesin Carnot, mesin pendingin, dan entropi.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#usaha">Sistem, lingkungan, dan usaha gas</a></li>
        <li><a href="#hukum-1">Hukum I termodinamika</a></li>
        <li><a href="#proses">Proses-proses termodinamika</a></li>
        <li><a href="#kapasitas">Kapasitas kalor gas</a></li>
        <li><a href="#hukum-2">Siklus, mesin kalor, dan hukum II</a></li>
        <li><a href="#carnot">Mesin Carnot</a></li>
        <li><a href="#pendingin">Mesin pendingin</a></li>
        <li><a href="#entropi">Entropi</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. USAHA ============ -->
    <section class="bagian" id="usaha">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Sistem, lingkungan, dan usaha gas</h2>
      </div>

      <p><strong>Termodinamika</strong> mempelajari hubungan antara kalor, usaha, dan energi dalam. Benda yang sedang diamati, misalnya gas di dalam silinder berpiston, disebut <strong>sistem</strong>. Segala sesuatu di luarnya disebut <strong>lingkungan</strong>.</p>

      <p>Saat gas memuai dan mendorong piston, gas melakukan <strong>usaha</strong> pada lingkungan. Jika tekanannya tetap, usaha sama dengan tekanan dikali perubahan volume. Secara umum, usaha sama dengan <strong>luas daerah di bawah kurva</strong> pada grafik <em>P</em>–<em>V</em>.</p>

      <div class="rumus">
        <div class="rumus-judul">Usaha gas pada tekanan tetap</div>
        <div class="rumus-isi">
          <math display="block" aria-label="W sama dengan P delta V sama dengan P kali kurung V 2 dikurangi V 1">
            <mi>W</mi><mo>=</mo><mi>P</mi><mi>Δ</mi><mi>V</mi><mo>=</mo><mi>P</mi><mo stretchy="false">(</mo><msub><mi>V</mi><mn>2</mn></msub><mo>−</mo><msub><mi>V</mi><mn>1</mn></msub><mo stretchy="false">)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>W</dt><dd>usaha gas <span class="satuan">(J)</span></dd>
            <dt>P</dt><dd>tekanan <span class="satuan">(Pa)</span></dd>
            <dt>V<sub>1</sub>, V<sub>2</sub></dt><dd>volume awal dan akhir <span class="satuan">(m³)</span></dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Besaran</th><th>Positif (+)</th><th>Negatif (−)</th></tr>
          </thead>
          <tbody>
            <tr><td>Kalor <em>Q</em></td><td>sistem menerima kalor</td><td>sistem melepas kalor</td></tr>
            <tr><td>Usaha <em>W</em></td><td>sistem melakukan usaha (gas memuai)</td><td>sistem dikenai usaha (gas dimampatkan)</td></tr>
            <tr><td>Perubahan energi dalam Δ<em>U</em></td><td>suhu naik</td><td>suhu turun</td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Gas bertekanan tetap 2 × 10<sup>5</sup> Pa memuai dari 0,01 m³ menjadi 0,03 m³. Usahanya <em>W</em> = 2 × 10<sup>5</sup> × 0,02 = 4.000 J.
      </div>
    </section>

    <!-- ============ 2. HUKUM I ============ -->
    <section class="bagian" id="hukum-1">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Hukum I termodinamika</h2>
      </div>

      <p>Hukum I termodinamika adalah hukum kekekalan energi untuk sistem yang bertukar kalor dan usaha. Kalor yang diberikan pada sistem dipakai untuk dua hal: menaikkan energi dalam dan melakukan usaha.</p>

      <div class="rumus">
        <div class="rumus-judul">Hukum I termodinamika</div>
        <div class="rumus-isi">
          <math display="block" aria-label="Q sama dengan delta U ditambah W">
            <mi>Q</mi><mo>=</mo><mi>Δ</mi><mi>U</mi><mo>+</mo><mi>W</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="gas monoatomik: delta U sama dengan tiga per dua n R delta T">
            <mi>Δ</mi><mi>U</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>n</mi><mi>R</mi><mi>Δ</mi><mi>T</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>Q</dt><dd>kalor yang diterima atau dilepas sistem <span class="satuan">(J)</span></dd>
            <dt>ΔU</dt><dd>perubahan energi dalam; untuk gas diatomik suhu sedang, ganti 3/2 dengan 5/2 <span class="satuan">(J)</span></dd>
            <dt>W</dt><dd>usaha yang dilakukan sistem <span class="satuan">(J)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Gas menyerap kalor 5.000 J dan melakukan usaha 2.000 J. Perubahan energi dalamnya Δ<em>U</em> = <em>Q</em> − <em>W</em> = 3.000 J, sehingga suhu gas naik.
      </div>
    </section>

    <!-- ============ 3. PROSES ============ -->
    <section class="bagian" id="proses">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Proses-proses termodinamika</h2>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/proses-termodinamika.svg" alt="Kiri, grafik tekanan P terhadap volume V untuk empat proses yang berawal dari titik A. Isobarik berupa garis mendatar, isokhorik berupa garis tegak, isotermal berupa kurva hiperbola yang turun, dan adiabatik berupa kurva yang turun lebih curam daripada isotermal. Kanan, proses isobarik dari volume V1 ke V2 pada tekanan P. Luas daerah di bawah garis sama dengan usaha W sama dengan P kali V2 dikurangi V1." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Empat proses termodinamika pada grafik <em>P</em>–<em>V</em> (kiri) dan usaha sebagai luas di bawah kurva (kanan).</figcaption>
      </figure>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Proses</th><th>Yang tetap</th><th>Usaha W</th><th>Hukum I menjadi</th></tr>
          </thead>
          <tbody>
            <tr><td>Isobarik</td><td>tekanan</td><td><em>P</em>Δ<em>V</em></td><td><em>Q</em> = Δ<em>U</em> + <em>P</em>Δ<em>V</em></td></tr>
            <tr><td>Isokhorik</td><td>volume</td><td>0</td><td><em>Q</em> = Δ<em>U</em></td></tr>
            <tr><td>Isotermal</td><td>suhu</td><td><em>nRT</em> ln(<em>V</em><sub>2</sub>/<em>V</em><sub>1</sub>)</td><td><em>Q</em> = <em>W</em> (karena Δ<em>U</em> = 0)</td></tr>
            <tr><td>Adiabatik</td><td>tidak ada pertukaran kalor</td><td>(<em>P</em><sub>1</sub><em>V</em><sub>1</sub> − <em>P</em><sub>2</sub><em>V</em><sub>2</sub>)/(γ − 1)</td><td><em>W</em> = −Δ<em>U</em> (karena <em>Q</em> = 0)</td></tr>
          </tbody>
        </table>
      </div>

      <div class="sub">
        <h3><span class="no">3.1</span>Proses adiabatik</h3>
        <p>Proses adiabatik terjadi jika sistem terisolasi dengan baik atau jika prosesnya berlangsung sangat cepat sehingga kalor tidak sempat berpindah. Pada proses ini berlaku:</p>
        <div class="rumus">
          <div class="rumus-judul">Persamaan adiabatik</div>
          <div class="rumus-isi">
            <math display="block" aria-label="P V pangkat gamma sama dengan konstan, dan T V pangkat gamma dikurangi 1 sama dengan konstan">
              <mi>P</mi><msup><mi>V</mi><mi>γ</mi></msup><mo>=</mo><mtext>konstan</mtext>
              <mspace width="1.5em"/>
              <mi>T</mi><msup><mi>V</mi><mrow><mi>γ</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><mtext>konstan</mtext>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>γ</dt><dd>tetapan Laplace, γ = C<sub>p</sub>/C<sub>v</sub> (monoatomik 5/3, diatomik suhu sedang 7/5)</dd>
            </dl>
          </div>
        </div>
        <p>Udara di dalam pompa sepeda yang ditekan cepat menjadi panas karena dimampatkan secara adiabatik. Mesin diesel memanfaatkan hal yang sama: udara dimampatkan sangat kuat sampai suhunya cukup tinggi untuk menyalakan bahan bakar tanpa busi.</p>
      </div>
    </section>

    <!-- ============ 4. KAPASITAS KALOR GAS ============ -->
    <section class="bagian" id="kapasitas">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Kapasitas kalor gas</h2>
      </div>

      <p>Kalor yang diperlukan untuk menaikkan suhu gas bergantung pada prosesnya. Pada tekanan tetap, sebagian kalor dipakai gas untuk memuai (melakukan usaha), sehingga perlu kalor lebih banyak daripada pada volume tetap.</p>

      <div class="rumus">
        <div class="rumus-judul">Kapasitas kalor gas</div>
        <div class="rumus-isi">
          <math display="block" aria-label="C p dikurangi C v sama dengan n R">
            <msub><mi>C</mi><mi>p</mi></msub><mo>−</mo><msub><mi>C</mi><mi>v</mi></msub><mo>=</mo><mi>n</mi><mi>R</mi>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="gamma sama dengan C p per C v">
            <mi>γ</mi><mo>=</mo><mfrac><msub><mi>C</mi><mi>p</mi></msub><msub><mi>C</mi><mi>v</mi></msub></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>C<sub>v</sub></dt><dd>kapasitas kalor pada volume tetap, Q<sub>v</sub> = C<sub>v</sub>ΔT <span class="satuan">(J/K)</span></dd>
            <dt>C<sub>p</sub></dt><dd>kapasitas kalor pada tekanan tetap, Q<sub>p</sub> = C<sub>p</sub>ΔT <span class="satuan">(J/K)</span></dd>
          </dl>
        </div>
      </div>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Gas</th><th>C<sub>v</sub></th><th>C<sub>p</sub></th><th>γ</th></tr>
          </thead>
          <tbody>
            <tr><td>Monoatomik</td><td><sup>3</sup>⁄<sub>2</sub> <em>nR</em></td><td><sup>5</sup>⁄<sub>2</sub> <em>nR</em></td><td>5/3 ≈ 1,67</td></tr>
            <tr><td>Diatomik suhu sedang</td><td><sup>5</sup>⁄<sub>2</sub> <em>nR</em></td><td><sup>7</sup>⁄<sub>2</sub> <em>nR</em></td><td>7/5 = 1,4</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ============ 5. HUKUM II ============ -->
    <section class="bagian" id="hukum-2">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Siklus, mesin kalor, dan hukum II</h2>
      </div>

      <p><strong>Siklus</strong> adalah rangkaian proses yang membawa gas kembali ke keadaan awalnya. Karena suhu akhir sama dengan suhu awal, Δ<em>U</em> = 0 untuk satu siklus penuh, dan usaha bersihnya sama dengan luas daerah yang dikelilingi kurva siklus pada grafik <em>P</em>–<em>V</em>.</p>

      <p><strong>Mesin kalor</strong>, seperti mesin mobil dan turbin uap, bekerja dalam siklus. Mesin menyerap kalor <em>Q</em><sub>1</sub> dari reservoir panas, mengubah sebagian menjadi usaha <em>W</em>, lalu membuang sisanya <em>Q</em><sub>2</sub> ke reservoir dingin.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/mesin-kalor.svg" alt="Kiri, mesin kalor: mesin menyerap kalor Q1 dari reservoir panas bersuhu T1, menghasilkan usaha W, dan membuang sisa kalor Q2 ke reservoir dingin bersuhu T2. Kanan, mesin pendingin: dengan usaha W dari luar, mesin menyerap kalor Q2 dari reservoir dingin dan membuang kalor Q1 ke reservoir panas." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Aliran energi pada mesin kalor (kiri) dan mesin pendingin (kanan).</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Efisiensi mesin kalor</div>
        <div class="rumus-isi">
          <math display="block" aria-label="W sama dengan Q 1 dikurangi Q 2">
            <mi>W</mi><mo>=</mo><msub><mi>Q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>Q</mi><mn>2</mn></msub>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="eta sama dengan W per Q 1 sama dengan 1 dikurangi Q 2 per Q 1">
            <mi>η</mi><mo>=</mo><mfrac><mi>W</mi><msub><mi>Q</mi><mn>1</mn></msub></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>Q</mi><mn>2</mn></msub><msub><mi>Q</mi><mn>1</mn></msub></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>η</dt><dd>efisiensi mesin (kalikan 100% untuk persen)</dd>
            <dt>Q<sub>1</sub></dt><dd>kalor yang diserap dari reservoir panas <span class="satuan">(J)</span></dd>
            <dt>Q<sub>2</sub></dt><dd>kalor yang dibuang ke reservoir dingin <span class="satuan">(J)</span></dd>
          </dl>
        </div>
      </div>

      <div class="kartu">
        <span class="istilah">Hukum II termodinamika</span>
        <p><strong>Kelvin-Planck</strong>: tidak mungkin membuat mesin yang bekerja dalam siklus dan mengubah <strong>seluruh</strong> kalor yang diserapnya menjadi usaha. Selalu ada kalor yang terbuang, sehingga efisiensi mesin kalor selalu kurang dari 100%.</p>
        <p><strong>Clausius</strong>: kalor tidak dapat mengalir dengan sendirinya dari benda dingin ke benda panas. Untuk itu diperlukan usaha dari luar.</p>
      </div>
    </section>

    <!-- ============ 6. CARNOT ============ -->
    <section class="bagian" id="carnot">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">6</span>
        <h2>Mesin Carnot</h2>
      </div>

      <p>Sadi Carnot merancang mesin ideal yang bekerja dalam siklus dua proses isotermal dan dua proses adiabatik secara bergantian. Tidak ada mesin nyata yang lebih efisien daripada mesin Carnot yang bekerja di antara dua suhu yang sama. Efisiensinya hanya bergantung pada suhu kedua reservoir.</p>

      <div class="rumus">
        <div class="rumus-judul">Efisiensi mesin Carnot</div>
        <div class="rumus-isi">
          <math display="block" aria-label="eta sama dengan 1 dikurangi T 2 per T 1">
            <mi>η</mi><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>T</mi><mn>2</mn></msub><msub><mi>T</mi><mn>1</mn></msub></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>T<sub>1</sub></dt><dd>suhu reservoir panas <span class="satuan">(K)</span></dd>
            <dt>T<sub>2</sub></dt><dd>suhu reservoir dingin <span class="satuan">(K)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Mesin Carnot bekerja di antara 800 K dan 300 K. Efisiensinya η = 1 − 300/800 = 0,625 = 62,5%. Jika mesin menyerap 4.000 J, usaha yang dihasilkan 0,625 × 4.000 = 2.500 J dan kalor yang dibuang 1.500 J.
      </div>

      <p>Efisiensi dapat ditingkatkan dengan menaikkan suhu reservoir panas atau menurunkan suhu reservoir dingin. Efisiensi 100% hanya mungkin jika <em>T</em><sub>2</sub> = 0 K, dan suhu itu tidak dapat dicapai. Mesin mobil bensin sendiri hanya mencapai efisiensi sekitar 25–30%.</p>
    </section>

    <!-- ============ 7. PENDINGIN ============ -->
    <section class="bagian" id="pendingin">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">7</span>
        <h2>Mesin pendingin</h2>
      </div>

      <p><strong>Mesin pendingin</strong>, seperti kulkas dan AC, adalah mesin kalor yang bekerja terbalik. Dengan usaha dari kompresor, mesin memindahkan kalor <em>Q</em><sub>2</sub> dari ruang dingin dan membuang kalor <em>Q</em><sub>1</sub> = <em>Q</em><sub>2</sub> + <em>W</em> ke lingkungan yang lebih panas. Karena itu, bagian belakang kulkas dan unit luar AC terasa panas.</p>

      <div class="rumus">
        <div class="rumus-judul">Koefisien performansi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="K p sama dengan Q 2 per W sama dengan Q 2 per Q 1 dikurangi Q 2">
            <msub><mi>K</mi><mi>p</mi></msub><mo>=</mo><mfrac><msub><mi>Q</mi><mn>2</mn></msub><mi>W</mi></mfrac><mo>=</mo><mfrac><msub><mi>Q</mi><mn>2</mn></msub><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="pendingin Carnot: K p sama dengan T 2 per T 1 dikurangi T 2">
            <msub><mi>K</mi><mi>p</mi></msub><mo>=</mo><mfrac><msub><mi>T</mi><mn>2</mn></msub><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>K<sub>p</sub></dt><dd>koefisien performansi (tanpa satuan, biasanya lebih dari 1)</dd>
            <dt>Q<sub>2</sub></dt><dd>kalor yang diserap dari ruang dingin <span class="satuan">(J)</span></dd>
            <dt>W</dt><dd>usaha dari kompresor <span class="satuan">(J)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Lemari pendingin Carnot menjaga ruang dalamnya pada −3 °C (270 K) di ruangan bersuhu 27 °C (300 K). Koefisien performansinya <em>K</em><sub>p</sub> = 270/(300 − 270) = 9. Artinya, setiap 1 J usaha kompresor memindahkan 9 J kalor dari dalam lemari.
      </div>

      <div class="catatan">
        <strong class="judul">Membuka pintu kulkas tidak mendinginkan ruangan</strong>
        Kulkas membuang kalor <em>Q</em><sub>1</sub> = <em>Q</em><sub>2</sub> + <em>W</em> ke ruangan, lebih besar daripada kalor <em>Q</em><sub>2</sub> yang diserapnya. Jika pintunya dibiarkan terbuka, ruangan justru makin panas.
      </div>
    </section>

    <!-- ============ 8. ENTROPI ============ -->
    <section class="bagian" id="entropi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">8</span>
        <h2>Entropi</h2>
      </div>

      <p><strong>Entropi</strong> <em>S</em> adalah ukuran ketidakteraturan sistem. Es yang mencair menjadi air, tinta yang menyebar di air, dan bau parfum yang memenuhi ruangan adalah contoh proses yang menaikkan entropi. Proses-proses ini tidak pernah berbalik dengan sendirinya.</p>

      <div class="rumus">
        <div class="rumus-judul">Perubahan entropi pada suhu tetap</div>
        <div class="rumus-isi">
          <math display="block" aria-label="delta S sama dengan Q per T">
            <mi>Δ</mi><mi>S</mi><mo>=</mo><mfrac><mi>Q</mi><mi>T</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>ΔS</dt><dd>perubahan entropi <span class="satuan">(J/K)</span></dd>
            <dt>Q</dt><dd>kalor yang diserap secara reversibel <span class="satuan">(J)</span></dd>
            <dt>T</dt><dd>suhu mutlak <span class="satuan">(K)</span></dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Es 1 kg melebur pada 0 °C (273 K) dengan menyerap kalor 336.000 J. Perubahan entropinya Δ<em>S</em> = 336.000/273 ≈ 1.231 J/K.
      </div>

      <p>Hukum II termodinamika juga dapat dinyatakan dengan entropi: <strong>entropi total sistem yang terisolasi tidak pernah berkurang</strong>. Entropi tetap pada proses reversibel ideal, dan selalu bertambah pada proses nyata. Hukum inilah yang menentukan arah alami berbagai peristiwa di alam.</p>
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
              <td>Usaha isobarik</td><td>J</td>
              <td><math><mi>W</mi><mo>=</mo><mi>P</mi><mi>Δ</mi><mi>V</mi></math></td>
            </tr>
            <tr>
              <td>Hukum I</td><td>J</td>
              <td><math><mi>Q</mi><mo>=</mo><mi>Δ</mi><mi>U</mi><mo>+</mo><mi>W</mi></math></td>
            </tr>
            <tr>
              <td>Adiabatik</td><td>–</td>
              <td><math><mi>P</mi><msup><mi>V</mi><mi>γ</mi></msup><mo>=</mo><mtext>konstan</mtext></math></td>
            </tr>
            <tr>
              <td>Kapasitas kalor gas</td><td>J/K</td>
              <td><math><msub><mi>C</mi><mi>p</mi></msub><mo>−</mo><msub><mi>C</mi><mi>v</mi></msub><mo>=</mo><mi>n</mi><mi>R</mi></math></td>
            </tr>
            <tr>
              <td>Efisiensi mesin kalor</td><td>–</td>
              <td><math><mi>η</mi><mo>=</mo><mfrac><mi>W</mi><msub><mi>Q</mi><mn>1</mn></msub></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>Q</mi><mn>2</mn></msub><msub><mi>Q</mi><mn>1</mn></msub></mfrac></math></td>
            </tr>
            <tr>
              <td>Efisiensi Carnot</td><td>–</td>
              <td><math><mi>η</mi><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>T</mi><mn>2</mn></msub><msub><mi>T</mi><mn>1</mn></msub></mfrac></math></td>
            </tr>
            <tr>
              <td>Koefisien performansi</td><td>–</td>
              <td><math><msub><mi>K</mi><mi>p</mi></msub><mo>=</mo><mfrac><msub><mi>Q</mi><mn>2</mn></msub><mi>W</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Entropi</td><td>J/K</td>
              <td><math><mi>Δ</mi><mi>S</mi><mo>=</mo><mfrac><mi>Q</mi><mi>T</mi></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

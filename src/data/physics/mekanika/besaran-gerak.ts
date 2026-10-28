/* ====== Bab 1-1 · Besaran Gerak ====== */

import { Chapter } from '../../materials';

export const besaranGerak: Chapter = {
  chapterId: "1-1",
  title: "Besaran Gerak",
  content: `
    <header class="materi-header">
      <span class="mapel">Fisika · Kinematika</span>
      <h1>Besaran Gerak</h1>
      <p>Rangkuman besaran-besaran yang menggambarkan gerak benda pada lintasan lurus: posisi, jarak, perpindahan, kelajuan, kecepatan, perlajuan, dan percepatan.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengantar">Gerak dalam mekanika</a></li>
        <li><a href="#posisi">Posisi, jarak, dan perpindahan</a></li>
        <li><a href="#kelajuan">Kelajuan dan kecepatan</a></li>
        <li><a href="#percepatan">Perlajuan dan percepatan</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <section class="bagian" id="pengantar">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Gerak dalam mekanika</h2>
      </div>

      <p>Gerak dipelajari dalam cabang ilmu <strong>mekanika</strong>. Mekanika terbagi menjadi tiga cabang:</p>

      <div class="cabang">
        <div class="kartu">
          <h3>Kinematika</h3>
          <p>Mempelajari gerak <strong>tanpa</strong> memperhatikan penyebabnya.</p>
        </div>
        <div class="kartu">
          <h3>Dinamika</h3>
          <p>Mempelajari penyebab gerak, yaitu <strong>gaya</strong>.</p>
        </div>
        <div class="kartu">
          <h3>Statika</h3>
          <p>Mempelajari <strong>keseimbangan statis</strong> benda.</p>
        </div>
      </div>

      <p>Untuk memahami gerak, kita memakai dua jenis besaran:</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Jenis besaran</th><th>Yang diperhatikan</th><th>Contoh dalam gerak</th></tr>
          </thead>
          <tbody>
            <tr><td>Skalar</td><td>Nilai saja</td><td>Jarak, kelajuan, perlajuan</td></tr>
            <tr><td>Vektor</td><td>Nilai dan arah</td><td>Posisi, perpindahan, kecepatan, percepatan</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="bagian" id="posisi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Posisi, jarak, dan perpindahan</h2>
      </div>

      <div class="kartu">
        <span class="tipe vektor">Vektor</span>
        <span class="istilah">Posisi</span>
        <p>Letak suatu benda pada waktu tertentu terhadap suatu titik acuan.</p>
        <ul class="poin">
          <li>Lintasan horizontal ditetapkan sebagai sumbu <em>X</em>.</li>
          <li>Titik acuan adalah titik <em>O</em> dengan posisi <em>x</em><sub>0</sub> = 0.</li>
          <li>Tanda <strong>positif</strong> berarti benda di kanan titik acuan, tanda <strong>negatif</strong> berarti di kiri.</li>
          <li>Posisi juga ditentukan oleh jarak benda terhadap titik acuan.</li>
        </ul>
      </div>

      <div class="kartu">
        <span class="tipe">Skalar</span>
        <span class="istilah">Jarak</span>
        <p>Total panjang lintasan yang ditempuh benda dalam selang waktu tertentu. Hanya nilainya yang diperhitungkan, arah gerak diabaikan.</p>
      </div>

      <div class="kartu">
        <span class="tipe vektor">Vektor</span>
        <span class="istilah">Perpindahan</span>
        <p>Perubahan posisi benda dalam selang waktu tertentu. Nilai dan arahnya diperhitungkan.</p>
        <ul class="poin">
          <li>Tanda <strong>positif</strong>: perpindahan ke kanan. Tanda <strong>negatif</strong>: perpindahan ke kiri.</li>
          <li>Yang diperhatikan hanya <strong>posisi awal dan posisi akhir</strong>.</li>
          <li>Jika benda kembali ke titik awal, perpindahannya <strong>nol</strong>, walaupun jarak yang ditempuh tidak nol.</li>
        </ul>
      </div>
    </section>

    <section class="bagian" id="kelajuan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Kelajuan dan kecepatan</h2>
      </div>

      <div class="sub">
        <h3><span class="no">3.1</span>Kelajuan</h3>
        <p>Angka 60 km/jam pada spidometer motor menunjukkan <strong>kelajuan</strong>. Kelajuan tidak bergantung pada arah, sehingga termasuk besaran skalar, dan menyatakan jarak yang ditempuh tiap satu satuan waktu.</p>
        <p>Dalam kehidupan sehari-hari kelajuan benda bisa berubah-ubah. Karena itu dipakai <strong>kelajuan rata-rata</strong>, yaitu jarak total dibagi selang waktu untuk menempuhnya.</p>

        <div class="rumus">
          <div class="rumus-judul">Kelajuan rata-rata</div>
          <div class="rumus-isi">
            <math display="block" aria-label="v sama dengan s dibagi t">
              <mi>v</mi><mo>=</mo>
              <mfrac><mi>s</mi><mi>t</mi></mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>v</dt><dd>kelajuan rata-rata <span class="satuan">(m/s)</span></dd>
              <dt>s</dt><dd>jarak tempuh total <span class="satuan">(m)</span></dd>
              <dt>t</dt><dd>selang waktu <span class="satuan">(s)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">3.2</span>Kecepatan</h3>
        <p>Kecepatan bergantung pada arah, sehingga termasuk besaran vektor. Pada gerak satu dimensi, arahnya dinyatakan dengan tanda positif dan negatif.</p>

        <p><strong>Kecepatan rata-rata</strong> adalah perpindahan dibagi selang waktunya. Karena vektor, arahnya harus dinyatakan.</p>

        <div class="rumus">
          <div class="rumus-judul">Kecepatan rata-rata</div>
          <div class="rumus-isi">
            <math display="block" aria-label="v sama dengan delta s dibagi delta t">
              <mi>v</mi><mo>=</mo>
              <mfrac>
                <mrow><mi>Δ</mi><mi>s</mi></mrow>
                <mrow><mi>Δ</mi><mi>t</mi></mrow>
              </mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>v</dt><dd>kecepatan rata-rata <span class="satuan">(m/s)</span></dd>
              <dt>Δs</dt><dd>perpindahan <span class="satuan">(m)</span></dd>
              <dt>Δt</dt><dd>selang waktu <span class="satuan">(s)</span></dd>
            </dl>
          </div>
        </div>

        <div class="catatan info">
          <strong class="judul">Bedakan kelajuan dan kecepatan</strong>
          Kelajuan memakai <em>jarak</em> (skalar), kecepatan memakai <em>perpindahan</em> (vektor).
        </div>
      </div>
    </section>

    <section class="bagian" id="percepatan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Perlajuan dan percepatan</h2>
      </div>

      <div class="sub">
        <h3><span class="no">4.1</span>Perlajuan</h3>
        <p>Perlajuan adalah perubahan kelajuan tiap satu satuan waktu. Perlajuan termasuk besaran skalar.</p>

        <div class="rumus">
          <div class="rumus-judul">Perlajuan</div>
          <div class="rumus-isi">
            <math display="block" aria-label="a sama dengan delta v dibagi delta t">
              <mi>a</mi><mo>=</mo>
              <mfrac>
                <mrow><mi>Δ</mi><mi>v</mi></mrow>
                <mrow><mi>Δ</mi><mi>t</mi></mrow>
              </mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>a</dt><dd>perlajuan <span class="satuan">(m/s²)</span></dd>
              <dt>Δv</dt><dd>perubahan kelajuan <span class="satuan">(m/s)</span></dd>
              <dt>Δt</dt><dd>selang waktu <span class="satuan">(s)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">4.2</span>Percepatan</h3>
        <p>Percepatan adalah perubahan kecepatan tiap satu satuan waktu. Percepatan termasuk besaran vektor, nilainya bergantung pada kecepatan benda dan selang waktunya.</p>
        <p>Benda yang kecepatannya berubah akan mengalami percepatan, baik yang berubah besarnya saja, arahnya saja, maupun keduanya.</p>

        <ul class="poin">
          <li>Percepatan <strong>searah</strong> dengan kecepatan: benda bergerak makin <strong>cepat</strong>.</li>
          <li>Percepatan <strong>berlawanan arah</strong> dengan kecepatan: benda bergerak makin <strong>lambat</strong> (diperlambat).</li>
        </ul>
      </div>

      <div class="sub">
        <h3><span class="no">4.3</span>Percepatan rata-rata</h3>
        <p>Percepatan rata-rata adalah perubahan kecepatan Δv dibagi selang waktu Δt yang digunakan selama perubahan itu.</p>

        <div class="rumus">
          <div class="rumus-judul">Percepatan rata-rata</div>
          <div class="rumus-isi">
            <math display="block" aria-label="a sama dengan delta v dibagi delta t sama dengan v dua dikurangi v satu dibagi t dua dikurangi t satu">
              <mi>a</mi><mo>=</mo>
              <mfrac>
                <mrow><mi>Δ</mi><mi>v</mi></mrow>
                <mrow><mi>Δ</mi><mi>t</mi></mrow>
              </mfrac>
              <mo>=</mo>
              <mfrac>
                <mrow><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><msub><mi>v</mi><mn>1</mn></msub></mrow>
                <mrow><msub><mi>t</mi><mn>2</mn></msub><mo>−</mo><msub><mi>t</mi><mn>1</mn></msub></mrow>
              </mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>a</dt><dd>percepatan rata-rata <span class="satuan">(m/s²)</span></dd>
              <dt>Δv</dt><dd>perubahan kecepatan <span class="satuan">(m/s)</span></dd>
              <dt>Δt</dt><dd>selang waktu <span class="satuan">(s)</span></dd>
              <dt>v<sub>1</sub></dt><dd>kecepatan awal <span class="satuan">(m/s)</span></dd>
              <dt>v<sub>2</sub></dt><dd>kecepatan akhir <span class="satuan">(m/s)</span></dd>
              <dt>t<sub>1</sub></dt><dd>waktu awal <span class="satuan">(s)</span></dd>
              <dt>t<sub>2</sub></dt><dd>waktu akhir <span class="satuan">(s)</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="sub">
        <h3><span class="no">4.4</span>Percepatan sesaat</h3>
        <p>Percepatan sesaat adalah perubahan kecepatan dalam waktu yang sangat singkat. Untuk menghitungnya, kita mengukur perubahan kecepatan dalam selang waktu yang mendekati nol.</p>

        <div class="rumus">
          <div class="rumus-judul">Percepatan sesaat (satu dimensi)</div>
          <div class="rumus-isi">
            <math display="block" aria-label="a sama dengan limit delta t menuju nol dari delta v dibagi delta t, sama dengan dv per dt">
              <mi>a</mi><mo>=</mo>
              <munder>
                <mi>lim</mi>
                <mrow><mi>Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow>
              </munder>
              <mfrac>
                <mrow><mi>Δ</mi><mi>v</mi></mrow>
                <mrow><mi>Δ</mi><mi>t</mi></mrow>
              </mfrac>
              <mo>=</mo>
              <mfrac>
                <mrow><mi>d</mi><mi>v</mi></mrow>
                <mrow><mi>d</mi><mi>t</mi></mrow>
              </mfrac>
            </math>
          </div>
          <div class="keterangan">
            <div class="label">Keterangan</div>
            <dl>
              <dt>a</dt><dd>percepatan sesaat <span class="satuan">(m/s²)</span></dd>
              <dt>dv</dt><dd>perubahan kecepatan yang sangat kecil <span class="satuan">(m/s)</span></dd>
              <dt>dt</dt><dd>selang waktu yang sangat kecil, mendekati nol <span class="satuan">(s)</span></dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Besaran</th><th>Jenis</th><th>Rumus</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Kelajuan rata-rata</td><td>Skalar</td>
              <td><math><mi>v</mi><mo>=</mo><mfrac><mi>s</mi><mi>t</mi></mfrac></math></td>
            </tr>
            <tr>
              <td>Kecepatan rata-rata</td><td>Vektor</td>
              <td><math><mi>v</mi><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>s</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Perlajuan</td><td>Skalar</td>
              <td><math><mi>a</mi><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>v</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Percepatan rata-rata</td><td>Vektor</td>
              <td><math><mi>a</mi><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>v</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac></math></td>
            </tr>
            <tr>
              <td>Percepatan sesaat</td><td>Vektor</td>
              <td><math><mi>a</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></math></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `,
  formula: "",
  example: ""
};

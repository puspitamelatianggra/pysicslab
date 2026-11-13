/* ====== Bab 106-3 · Transformasi Fungsi dan Pemodelan ====== */

import { Chapter } from '../../materials';

export const transformasiFungsi: Chapter = {
  chapterId: "106-3",
  title: "Transformasi Fungsi dan Pemodelan",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Aljabar dan Fungsi · Kelas XI</span>
      <h1>Transformasi Fungsi dan Pemodelan</h1>
      <p>Rangkuman translasi, refleksi, dan dilatasi grafik fungsi, cara menggabungkannya, serta cara memilih model fungsi linear, kuadrat, atau eksponensial dari data.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#translasi">Translasi (pergeseran)</a></li>
        <li><a href="#refleksi">Refleksi (pencerminan)</a></li>
        <li><a href="#dilatasi">Dilatasi (peregangan)</a></li>
        <li><a href="#gabungan">Transformasi gabungan</a></li>
        <li><a href="#pemodelan">Memilih model fungsi</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <p>Transformasi fungsi mengubah posisi atau bentuk grafik <em>y</em> = <em>f</em>(<em>x</em>) tanpa menggambar ulang dari awal. Gambar berikut memakai <em>y</em> = <em>x</em><sup>2</sup> sebagai grafik asal.</p>

    <figure class="gambar lebar">
      <div class="gambar-isi">
        <img src="/images/transformasi-fungsi.svg" alt="Tiga panel transformasi grafik y = x², yang digambar putus-putus. Kiri, translasi: grafik digeser 2 satuan ke kanan dan 1 satuan ke atas menjadi y = (x − 2)² + 1, sehingga puncaknya pindah dari (0, 0) ke (2, 1). Tengah, refleksi terhadap sumbu x: grafik dibalik menjadi y = −x² yang terbuka ke bawah. Kanan, dilatasi vertikal faktor 2: grafik direntangkan menjadi y = 2x² yang lebih ramping." />
      </div>
      <figcaption><strong>Gambar 1.</strong> Grafik asal <em>y</em> = <em>x</em><sup>2</sup> (putus-putus) dan hasil transformasinya (oranye).</figcaption>
    </figure>

    <!-- ============ 1. TRANSLASI ============ -->
    <section class="bagian" id="translasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Translasi (pergeseran)</h2>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Translasi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="y sama dengan f dari x dikurangi h, ditambah k">
            <mi>y</mi><mo>=</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>−</mo><mi>h</mi><mo>)</mo><mo>+</mo><mi>k</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>h</dt><dd>geser mendatar: h &gt; 0 ke kanan, h &lt; 0 ke kiri</dd>
            <dt>k</dt><dd>geser tegak: k &gt; 0 ke atas, k &lt; 0 ke bawah</dd>
          </dl>
        </div>
      </div>

      <div class="catatan">
        <strong class="judul">Perhatikan tandanya</strong>
        <em>y</em> = (<em>x</em> − 2)<sup>2</sup> bergeser ke <strong>kanan</strong> 2 satuan, bukan ke kiri. Puncak baru ada di <em>x</em> = 2 karena di situlah isi kurungnya bernilai nol.
      </div>
    </section>

    <!-- ============ 2. REFLEKSI ============ -->
    <section class="bagian" id="refleksi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Refleksi (pencerminan)</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>y = −f(x)</h3>
          <p>Dicerminkan terhadap <strong>sumbu x</strong>: setiap titik (<em>x</em>, <em>y</em>) menjadi (<em>x</em>, −<em>y</em>). Contoh: <em>y</em> = −<em>x</em><sup>2</sup> terbuka ke bawah.</p>
        </div>
        <div class="kartu">
          <h3>y = f(−x)</h3>
          <p>Dicerminkan terhadap <strong>sumbu y</strong>: setiap titik (<em>x</em>, <em>y</em>) menjadi (−<em>x</em>, <em>y</em>). Contoh: <em>y</em> = 2<sup>−x</sup> = (1/2)<sup>x</sup> adalah cerminan <em>y</em> = 2<sup>x</sup>.</p>
        </div>
      </div>
    </section>

    <!-- ============ 3. DILATASI ============ -->
    <section class="bagian" id="dilatasi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Dilatasi (peregangan)</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>y = a · f(x)</h3>
          <p>Dilatasi <strong>tegak</strong> dengan faktor <em>a</em>: setiap nilai <em>y</em> dikali <em>a</em>. Jika <em>a</em> &gt; 1 grafik meregang, jika 0 &lt; <em>a</em> &lt; 1 grafik memampat ke arah sumbu <em>x</em>.</p>
        </div>
        <div class="kartu">
          <h3>y = f(bx)</h3>
          <p>Dilatasi <strong>mendatar</strong> dengan faktor 1/<em>b</em>: setiap nilai <em>x</em> dikali 1/<em>b</em>. Jika <em>b</em> &gt; 1 grafik memampat ke arah sumbu <em>y</em>.</p>
        </div>
      </div>
    </section>

    <!-- ============ 4. GABUNGAN ============ -->
    <section class="bagian" id="gabungan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Transformasi gabungan</h2>
      </div>

      <p>Beberapa transformasi dapat dilakukan sekaligus. Urutan yang aman: dilatasi dan refleksi lebih dulu, baru translasi.</p>

      <div class="kartu">
        <span class="istilah">Contoh</span>
        <p>Jelaskan grafik <em>y</em> = −2(<em>x</em> + 1)<sup>2</sup> + 3 dari <em>y</em> = <em>x</em><sup>2</sup>.</p>
      </div>
      <ol class="langkah">
        <li>Dilatasi tegak faktor 2: <em>y</em> = 2<em>x</em><sup>2</sup>.</li>
        <li>Refleksi terhadap sumbu <em>x</em>: <em>y</em> = −2<em>x</em><sup>2</sup>.</li>
        <li>Geser 1 satuan ke kiri dan 3 satuan ke atas: <em>y</em> = −2(<em>x</em> + 1)<sup>2</sup> + 3.</li>
        <li>Hasilnya parabola ramping, terbuka ke bawah, berpuncak di <strong>(−1, 3)</strong>.</li>
      </ol>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Bentuk</th><th>Transformasi dari y = f(x)</th><th>Titik (x, y) menjadi</th></tr>
          </thead>
          <tbody>
            <tr><td>y = f(x − h) + k</td><td>translasi (h, k)</td><td>(x + h, y + k)</td></tr>
            <tr><td>y = −f(x)</td><td>refleksi sumbu x</td><td>(x, −y)</td></tr>
            <tr><td>y = f(−x)</td><td>refleksi sumbu y</td><td>(−x, y)</td></tr>
            <tr><td>y = a f(x)</td><td>dilatasi tegak faktor a</td><td>(x, ay)</td></tr>
            <tr><td>y = f(bx)</td><td>dilatasi mendatar faktor 1/b</td><td>(x/b, y)</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ============ 5. PEMODELAN ============ -->
    <section class="bagian" id="pemodelan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Memilih model fungsi</h2>
      </div>

      <p>Untuk data dengan nilai <em>x</em> yang berjarak sama, jenis fungsi yang cocok dapat dikenali dari pola perubahan nilai <em>y</em>.</p>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Pola nilai y</th><th>Model</th><th>Contoh data (x = 0, 1, 2, 3, 4)</th></tr>
          </thead>
          <tbody>
            <tr><td>Selisih berurutan tetap</td><td>linear, y = mx + c</td><td>3, 5, 7, 9, 11 (selisih 2) ⇒ y = 2x + 3</td></tr>
            <tr><td>Selisih kedua tetap</td><td>kuadrat, y = ax² + bx + c</td><td>1, 2, 5, 10, 17 (selisih 1, 3, 5, 7; selisih kedua 2) ⇒ y = x² + 1</td></tr>
            <tr><td>Perbandingan berurutan tetap</td><td>eksponensial, y = k · a<sup>x</sup></td><td>3, 6, 12, 24, 48 (rasio 2) ⇒ y = 3 · 2<sup>x</sup></td></tr>
          </tbody>
        </table>
      </div>

      <div class="catatan info">
        <strong class="judul">Langkah pemodelan</strong>
        Tentukan variabel dan satuannya, amati pola data, pilih jenis fungsi, tentukan konstantanya dari beberapa titik data, lalu periksa apakah model masuk akal untuk data lainnya. Hati-hati memakai model jauh di luar rentang data.
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Transformasi</th><th>Bentuk</th></tr>
          </thead>
          <tbody>
            <tr><td>Translasi</td><td>y = f(x − h) + k: kanan h, atas k</td></tr>
            <tr><td>Refleksi</td><td>y = −f(x) terhadap sumbu x; y = f(−x) terhadap sumbu y</td></tr>
            <tr><td>Dilatasi</td><td>y = a f(x) tegak; y = f(bx) mendatar</td></tr>
            <tr><td>Pemodelan</td><td>selisih tetap: linear; selisih kedua tetap: kuadrat; rasio tetap: eksponensial</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase F, elemen Aljabar dan Fungsi: transformasi fungsi untuk memodelkan situasi nyata dengan fungsi linear, kuadrat, dan eksponensial (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025).
    </footer>
  `,
  formula: "",
  example: ""
};

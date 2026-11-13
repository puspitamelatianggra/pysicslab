/* ====== Bab 106-2 · Komposisi Fungsi dan Fungsi Invers ====== */

import { Chapter } from '../../materials';

export const komposisiInvers: Chapter = {
  chapterId: "106-2",
  title: "Komposisi Fungsi dan Fungsi Invers",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Aljabar dan Fungsi · Kelas XI</span>
      <h1>Komposisi Fungsi dan Fungsi Invers</h1>
      <p>Rangkuman pengertian fungsi, operasi aljabar fungsi, fungsi komposisi beserta sifatnya, serta cara menentukan fungsi invers dan grafiknya.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#fungsi">Fungsi dan operasinya</a></li>
        <li><a href="#komposisi">Fungsi komposisi</a></li>
        <li><a href="#invers">Fungsi invers</a></li>
        <li><a href="#invers-komposisi">Invers dari fungsi komposisi</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. FUNGSI ============ -->
    <section class="bagian" id="fungsi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Fungsi dan operasinya</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Fungsi</span>
        <p>Fungsi <em>f</em> dari himpunan A ke himpunan B adalah aturan yang memasangkan <strong>setiap</strong> anggota A dengan <strong>tepat satu</strong> anggota B. Himpunan A disebut <strong>daerah asal</strong> (domain), B disebut <strong>daerah kawan</strong> (kodomain), dan himpunan semua hasil <em>f</em>(<em>x</em>) disebut <strong>daerah hasil</strong> (range).</p>
      </div>

      <p>Dua fungsi dapat dijumlahkan, dikurangkan, dikalikan, atau dibagi: (<em>f</em> ± <em>g</em>)(<em>x</em>) = <em>f</em>(<em>x</em>) ± <em>g</em>(<em>x</em>), (<em>f</em> · <em>g</em>)(<em>x</em>) = <em>f</em>(<em>x</em>) · <em>g</em>(<em>x</em>), dan (<em>f</em>/<em>g</em>)(<em>x</em>) = <em>f</em>(<em>x</em>)/<em>g</em>(<em>x</em>) dengan <em>g</em>(<em>x</em>) ≠ 0. Daerah asal hasilnya adalah irisan daerah asal kedua fungsi.</p>
    </section>

    <!-- ============ 2. KOMPOSISI ============ -->
    <section class="bagian" id="komposisi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Fungsi komposisi</h2>
      </div>

      <p>Fungsi komposisi adalah dua fungsi yang dikerjakan <strong>berurutan</strong>: hasil fungsi pertama menjadi masukan fungsi kedua. Notasi <em>g</em> ∘ <em>f</em> dibaca "<em>g</em> bundaran <em>f</em>", dan <em>f</em> dikerjakan lebih dulu.</p>

      <div class="rumus">
        <div class="rumus-judul">Komposisi fungsi</div>
        <div class="rumus-isi">
          <math display="block" aria-label="g bundaran f dari x sama dengan g dari f x">
            <mo>(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo>)</mo><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>g</mi><mo>(</mo><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>f</dt><dd>fungsi yang dikerjakan pertama (paling kanan)</dd>
            <dt>g</dt><dd>fungsi yang dikerjakan kedua</dd>
          </dl>
        </div>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/komposisi-fungsi.svg" alt="Diagram panah komposisi fungsi. Himpunan A berisi 1, 2, 3 dipetakan oleh f(x) = x + 1 ke himpunan B berisi 2, 3, 4, lalu dipetakan oleh g(x) = 2x ke himpunan C berisi 4, 6, 8. Panah besar dari A langsung ke C menunjukkan fungsi komposisi g bundaran f, yaitu 2x + 2." />
        </div>
        <figcaption><strong>Gambar 1.</strong> <em>f</em>(<em>x</em>) = <em>x</em> + 1 dikerjakan dulu, lalu <em>g</em>(<em>x</em>) = 2<em>x</em>. Hasilnya (<em>g</em> ∘ <em>f</em>)(<em>x</em>) = 2(<em>x</em> + 1) = 2<em>x</em> + 2.</figcaption>
      </figure>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        <em>f</em>(<em>x</em>) = 2<em>x</em> − 3 dan <em>g</em>(<em>x</em>) = <em>x</em><sup>2</sup> + 1.<br>
        (<em>g</em> ∘ <em>f</em>)(<em>x</em>) = <em>g</em>(2<em>x</em> − 3) = (2<em>x</em> − 3)<sup>2</sup> + 1 = <strong>4<em>x</em><sup>2</sup> − 12<em>x</em> + 10</strong>.<br>
        (<em>f</em> ∘ <em>g</em>)(<em>x</em>) = <em>f</em>(<em>x</em><sup>2</sup> + 1) = 2(<em>x</em><sup>2</sup> + 1) − 3 = <strong>2<em>x</em><sup>2</sup> − 1</strong>.
      </div>

      <ul class="poin">
        <li><strong>Tidak komutatif</strong>: pada umumnya <em>g</em> ∘ <em>f</em> ≠ <em>f</em> ∘ <em>g</em>, seperti contoh di atas.</li>
        <li><strong>Asosiatif</strong>: (<em>f</em> ∘ <em>g</em>) ∘ <em>h</em> = <em>f</em> ∘ (<em>g</em> ∘ <em>h</em>).</li>
        <li><strong>Fungsi identitas</strong> <em>I</em>(<em>x</em>) = <em>x</em> memenuhi <em>f</em> ∘ <em>I</em> = <em>I</em> ∘ <em>f</em> = <em>f</em>.</li>
      </ul>

      <div class="sub">
        <h3><span class="no">2.1</span>Mencari fungsi penyusun</h3>
        <p>Jika komposisinya dan salah satu fungsi diketahui, fungsi lainnya dapat dicari. Contoh: (<em>f</em> ∘ <em>g</em>)(<em>x</em>) = 4<em>x</em> + 5 dan <em>f</em>(<em>x</em>) = 2<em>x</em> − 1. Maka <em>f</em>(<em>g</em>(<em>x</em>)) = 2<em>g</em>(<em>x</em>) − 1 = 4<em>x</em> + 5, sehingga <strong><em>g</em>(<em>x</em>) = 2<em>x</em> + 3</strong>.</p>
      </div>
    </section>

    <!-- ============ 3. INVERS ============ -->
    <section class="bagian" id="invers">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Fungsi invers</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Fungsi invers</span>
        <p>Fungsi invers <em>f</em><sup>−1</sup> membalik kerja fungsi <em>f</em>: jika <em>f</em>(<em>a</em>) = <em>b</em>, maka <em>f</em><sup>−1</sup>(<em>b</em>) = <em>a</em>. Invers suatu fungsi hanya berupa fungsi jika <em>f</em> <strong>bijektif</strong>, yaitu setiap hasil berasal dari tepat satu masukan.</p>
      </div>

      <ol class="langkah">
        <li>Tulis <em>y</em> = <em>f</em>(<em>x</em>).</li>
        <li>Nyatakan <em>x</em> dalam <em>y</em>.</li>
        <li>Ganti <em>x</em> menjadi <em>f</em><sup>−1</sup>(<em>x</em>) dan <em>y</em> menjadi <em>x</em>.</li>
      </ol>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        <em>f</em>(<em>x</em>) = 2<em>x</em> + 1. Dari <em>y</em> = 2<em>x</em> + 1 diperoleh <em>x</em> = (<em>y</em> − 1)/2. Jadi <strong><em>f</em><sup>−1</sup>(<em>x</em>) = (<em>x</em> − 1)/2</strong>.
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/fungsi-invers.svg" alt="Grafik garis f(x) = 2x + 1 dan inversnya, f invers (x) = (x − 1)/2, bersama garis putus-putus y = x. Kedua grafik saling mencerminkan terhadap garis y = x: titik (1, 3) pada f berpasangan dengan titik (3, 1) pada inversnya." />
        </div>
        <figcaption><strong>Gambar 2.</strong> Grafik <em>f</em> dan <em>f</em><sup>−1</sup> saling mencerminkan terhadap garis <em>y</em> = <em>x</em>.</figcaption>
      </figure>

      <div class="rumus">
        <div class="rumus-judul">Invers fungsi pecahan linear</div>
        <div class="rumus-isi">
          <math display="block" aria-label="jika f x sama dengan a x tambah b per c x tambah d, maka f invers x sama dengan negatif d x tambah b per c x dikurangi a">
            <mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow><mrow><mi>c</mi><mi>x</mi><mo>+</mo><mi>d</mi></mrow></mfrac>
            <mspace width="1em"/><mo>⇒</mo><mspace width="1em"/>
            <msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow><mrow><mi>c</mi><mi>x</mi><mo>−</mo><mi>a</mi></mrow></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>syarat</dt><dd>cx + d ≠ 0 dan ad − bc ≠ 0</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        <em>f</em>(<em>x</em>) = (2<em>x</em> + 1)/(<em>x</em> − 3) memiliki <em>a</em> = 2, <em>b</em> = 1, <em>c</em> = 1, <em>d</em> = −3. Jadi <strong><em>f</em><sup>−1</sup>(<em>x</em>) = (3<em>x</em> + 1)/(<em>x</em> − 2)</strong>, dengan <em>x</em> ≠ 2.
      </div>

      <div class="catatan">
        <strong class="judul">Tidak semua fungsi punya invers</strong>
        <em>f</em>(<em>x</em>) = <em>x</em><sup>2</sup> pada semua bilangan real tidak memiliki fungsi invers, karena <em>f</em>(2) = <em>f</em>(−2) = 4. Jika daerah asalnya dibatasi <em>x</em> ≥ 0, inversnya <em>f</em><sup>−1</sup>(<em>x</em>) = √<em>x</em>.
      </div>

      <p><strong>Contoh nyata.</strong> Konversi suhu <em>F</em> = (9/5)<em>C</em> + 32 mengubah Celsius ke Fahrenheit. Inversnya <em>C</em> = (5/9)(<em>F</em> − 32) mengubah kembali Fahrenheit ke Celsius.</p>
    </section>

    <!-- ============ 4. INVERS KOMPOSISI ============ -->
    <section class="bagian" id="invers-komposisi">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Invers dari fungsi komposisi</h2>
      </div>

      <p>Untuk membatalkan dua langkah berurutan, langkah terakhir dibatalkan lebih dulu, seperti melepas sepatu sebelum kaus kaki.</p>

      <div class="rumus">
        <div class="rumus-judul">Sifat invers</div>
        <div class="rumus-isi">
          <math display="block" aria-label="invers dari g bundaran f sama dengan f invers bundaran g invers">
            <msup><mrow><mo>(</mo><mi>g</mi><mo>∘</mo><mi>f</mi><mo>)</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>∘</mo><msup><mi>g</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="f bundaran f invers dari x sama dengan f invers bundaran f dari x sama dengan x">
            <mo>(</mo><mi>f</mi><mo>∘</mo><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>)</mo><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mo>(</mo><msup><mi>f</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>∘</mo><mi>f</mi><mo>)</mo><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mi>x</mi>
          </math>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Dari Gambar 1, (<em>g</em> ∘ <em>f</em>)(<em>x</em>) = 2<em>x</em> + 2, sehingga (<em>g</em> ∘ <em>f</em>)<sup>−1</sup>(<em>x</em>) = (<em>x</em> − 2)/2. Dengan sifat di atas: <em>g</em><sup>−1</sup>(<em>x</em>) = <em>x</em>/2 dan <em>f</em><sup>−1</sup>(<em>x</em>) = <em>x</em> − 1, sehingga <em>f</em><sup>−1</sup>(<em>g</em><sup>−1</sup>(<em>x</em>)) = <em>x</em>/2 − 1 = (<em>x</em> − 2)/2. Hasilnya sama.
      </div>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Konsep</th><th>Rumus / keterangan</th></tr>
          </thead>
          <tbody>
            <tr><td>Komposisi</td><td>(g ∘ f)(x) = g(f(x)); f dikerjakan dulu</td></tr>
            <tr><td>Sifat komposisi</td><td>tidak komutatif, asosiatif, identitas I(x) = x</td></tr>
            <tr><td>Invers</td><td>tukar peran x dan y; ada jika f bijektif</td></tr>
            <tr><td>Grafik invers</td><td>cerminan grafik f terhadap y = x</td></tr>
            <tr><td>Pecahan linear</td><td>(ax + b)/(cx + d) ⇒ (−dx + b)/(cx − a)</td></tr>
            <tr><td>Invers komposisi</td><td>(g ∘ f)<sup>−1</sup> = f<sup>−1</sup> ∘ g<sup>−1</sup></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase F, elemen Aljabar dan Fungsi: fungsi invers dan komposisi fungsi (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas XI</em>, Pusat Perbukuan Kemendikbudristek, bab Komposisi Fungsi dan Fungsi Invers.
    </footer>
  `,
  formula: "",
  example: ""
};

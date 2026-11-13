/* ====== Bab 101-2 · Sistem Pertidaksamaan Linear Dua Variabel ====== */

import { Chapter } from '../../materials';

export const sistemPertidaksamaanLinear: Chapter = {
  chapterId: "101-2",
  title: "Sistem Pertidaksamaan Linear Dua Variabel",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Aljabar dan Fungsi · Kelas X</span>
      <h1>Sistem Pertidaksamaan Linear Dua Variabel</h1>
      <p>Rangkuman cara menggambar daerah penyelesaian pertidaksamaan linear dua variabel, menyusun model matematika dari soal cerita, dan menentukan nilai optimum.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pertidaksamaan">Pertidaksamaan linear dua variabel</a></li>
        <li><a href="#daerah">Menentukan daerah penyelesaian</a></li>
        <li><a href="#sistem">Sistem pertidaksamaan</a></li>
        <li><a href="#garis">Menentukan pertidaksamaan dari grafik</a></li>
        <li><a href="#model">Model matematika dan nilai optimum</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PERTIDAKSAMAAN ============ -->
    <section class="bagian" id="pertidaksamaan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pertidaksamaan linear dua variabel</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Pertidaksamaan linear dua variabel</span>
        <p>Kalimat terbuka dengan dua variabel berpangkat satu yang dihubungkan tanda &lt;, &gt;, ≤, atau ≥, misalnya 2<em>x</em> + <em>y</em> ≤ 8. Penyelesaiannya bukan satu titik, tetapi sebuah <strong>daerah</strong> pada bidang koordinat.</p>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Bentuk umum</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a x tambah b y kurang dari sama dengan c, atau tanda ketidaksamaan lain">
            <mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>≤</mo><mi>c</mi>
            <mspace width="1em"/><mtext>(atau &lt;, &gt;, ≥)</mtext>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>a, b</dt><dd>koefisien, tidak keduanya nol</dd>
            <dt>c</dt><dd>konstanta</dd>
          </dl>
        </div>
      </div>
    </section>

    <!-- ============ 2. DAERAH PENYELESAIAN ============ -->
    <section class="bagian" id="daerah">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Menentukan daerah penyelesaian</h2>
      </div>

      <ol class="langkah">
        <li>Gambar garis batas <em>ax</em> + <em>by</em> = <em>c</em> dengan mencari titik potong sumbu: <em>x</em> = 0 memberi titik potong sumbu <em>y</em>, dan <em>y</em> = 0 memberi titik potong sumbu <em>x</em>.</li>
        <li>Gunakan garis <strong>utuh</strong> untuk tanda ≤ atau ≥ (titik pada garis ikut penyelesaian) dan garis <strong>putus-putus</strong> untuk &lt; atau &gt;.</li>
        <li>Ambil satu titik uji yang tidak terletak pada garis, biasanya (0, 0). Substitusikan ke pertidaksamaan.</li>
        <li>Jika pernyataannya benar, daerah yang memuat titik uji adalah daerah penyelesaian (DP). Jika salah, DP adalah daerah di seberangnya.</li>
      </ol>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        2<em>x</em> + <em>y</em> ≤ 8. Garis batasnya melalui (0, 8) dan (4, 0). Uji (0, 0): 0 ≤ 8 benar, jadi DP adalah daerah di bawah garis yang memuat titik (0, 0).
      </div>

      <div class="catatan">
        <strong class="judul">Arsiran</strong>
        Buku pelajaran memakai dua kebiasaan: ada yang mengarsir daerah penyelesaian, ada yang mengarsir daerah yang <em>bukan</em> penyelesaian sehingga DP tampak bersih. Bacalah keterangan pada soal. Di rangkuman ini, daerah yang diwarnai adalah DP.
      </div>
    </section>

    <!-- ============ 3. SISTEM ============ -->
    <section class="bagian" id="sistem">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Sistem pertidaksamaan</h2>
      </div>

      <p>Daerah penyelesaian sistem pertidaksamaan adalah <strong>irisan</strong> daerah penyelesaian setiap pertidaksamaannya. Kendala <em>x</em> ≥ 0 dan <em>y</em> ≥ 0 membatasi daerah di kuadran I.</p>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/daerah-penyelesaian.svg" alt="Daerah penyelesaian sistem pertidaksamaan x + y ≤ 6, 2x + y ≤ 8, x ≥ 0, y ≥ 0 diarsir lime. Daerah itu berbentuk segi empat dengan titik pojok (0, 0), (4, 0), (2, 4), dan (0, 6). Titik (2, 4) adalah perpotongan garis x + y = 6 dan 2x + y = 8." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Daerah penyelesaian (DP) sistem <em>x</em> + <em>y</em> ≤ 6, 2<em>x</em> + <em>y</em> ≤ 8, <em>x</em> ≥ 0, <em>y</em> ≥ 0.</figcaption>
      </figure>

      <p>Titik pojok (2, 4) diperoleh dari SPLDV <em>x</em> + <em>y</em> = 6 dan 2<em>x</em> + <em>y</em> = 8. Kurangkan kedua persamaan: <em>x</em> = 2, lalu <em>y</em> = 4.</p>
    </section>

    <!-- ============ 4. DARI GRAFIK ============ -->
    <section class="bagian" id="garis">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Menentukan pertidaksamaan dari grafik</h2>
      </div>

      <p>Jika sebuah garis memotong sumbu <em>x</em> di (<em>p</em>, 0) dan sumbu <em>y</em> di (0, <em>q</em>), persamaan garisnya dapat langsung ditulis sebagai berikut. Tanda pertidaksamaannya ditentukan dengan uji titik pada daerah yang diarsir.</p>

      <div class="rumus">
        <div class="rumus-judul">Garis melalui (p, 0) dan (0, q)</div>
        <div class="rumus-isi">
          <math display="block" aria-label="q x tambah p y sama dengan p q">
            <mi>q</mi><mi>x</mi><mo>+</mo><mi>p</mi><mi>y</mi><mo>=</mo><mi>p</mi><mi>q</mi>
          </math>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Garis melalui (6, 0) dan (0, 6): 6<em>x</em> + 6<em>y</em> = 36, disederhanakan menjadi <em>x</em> + <em>y</em> = 6. Daerah yang memuat (0, 0) memenuhi 0 ≤ 6, sehingga pertidaksamaannya <em>x</em> + <em>y</em> ≤ 6.
      </div>
    </section>

    <!-- ============ 5. MODEL DAN NILAI OPTIMUM ============ -->
    <section class="bagian" id="model">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">5</span>
        <h2>Model matematika dan nilai optimum</h2>
      </div>

      <p>Banyak masalah sehari-hari meminta nilai <strong>terbesar</strong> (maksimum) atau <strong>terkecil</strong> (minimum) dari suatu fungsi tujuan <em>f</em>(<em>x</em>, <em>y</em>) = <em>px</em> + <em>qy</em> dengan kendala berupa sistem pertidaksamaan. Nilai optimum selalu tercapai di salah satu <strong>titik pojok</strong> daerah penyelesaian.</p>

      <div class="kartu">
        <span class="istilah">Soal</span>
        <p>Seorang perajin membuat tas dan dompet. Sebuah tas memerlukan 2 m kain dan 1 jam kerja, sedangkan sebuah dompet memerlukan 1 m kain dan 1 jam kerja. Tersedia 8 m kain dan 6 jam kerja per hari. Keuntungan sebuah tas Rp30.000 dan sebuah dompet Rp20.000. Berapa keuntungan maksimum per hari?</p>
      </div>
      <ol class="langkah">
        <li>Misalkan <em>x</em> = banyak tas dan <em>y</em> = banyak dompet.</li>
        <li>Kendala kain: 2<em>x</em> + <em>y</em> ≤ 8. Kendala waktu: <em>x</em> + <em>y</em> ≤ 6. Banyak barang tidak negatif: <em>x</em> ≥ 0, <em>y</em> ≥ 0.</li>
        <li>Fungsi tujuan: <em>f</em>(<em>x</em>, <em>y</em>) = 30.000<em>x</em> + 20.000<em>y</em>.</li>
        <li>Daerah penyelesaiannya seperti Gambar 1. Uji setiap titik pojok pada tabel berikut.</li>
      </ol>

      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Titik pojok</th><th>f = 30.000x + 20.000y</th></tr>
          </thead>
          <tbody>
            <tr><td>(0, 0)</td><td>Rp0</td></tr>
            <tr><td>(4, 0)</td><td>Rp120.000</td></tr>
            <tr><td>(2, 4)</td><td><strong>Rp140.000</strong> (maksimum)</td></tr>
            <tr><td>(0, 6)</td><td>Rp120.000</td></tr>
          </tbody>
        </table>
      </div>

      <p>Keuntungan maksimum <strong>Rp140.000</strong> per hari diperoleh dengan membuat 2 tas dan 4 dompet.</p>
    </section>

    <!-- ============ RINGKASAN ============ -->
    <section class="ringkasan" id="ringkasan">
      <h2>Ringkasan</h2>
      <div class="tabel-wrap">
        <table>
          <thead>
            <tr><th>Langkah</th><th>Keterangan</th></tr>
          </thead>
          <tbody>
            <tr><td>Garis batas</td><td>utuh untuk ≤, ≥; putus-putus untuk &lt;, &gt;</td></tr>
            <tr><td>Uji titik</td><td>substitusikan (0, 0); benar berarti DP memuat titik itu</td></tr>
            <tr><td>Sistem</td><td>DP = irisan semua daerah</td></tr>
            <tr><td>Garis dari grafik</td><td>melalui (p, 0) dan (0, q): qx + py = pq</td></tr>
            <tr><td>Nilai optimum</td><td>uji fungsi tujuan di setiap titik pojok DP</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase E, elemen Aljabar dan Fungsi: menyelesaikan masalah yang melibatkan sistem pertidaksamaan linear dua variabel (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021).
    </footer>
  `,
  formula: "",
  example: ""
};

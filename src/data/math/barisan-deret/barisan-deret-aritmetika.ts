/* ====== Bab 105-1 · Barisan dan Deret Aritmetika ====== */

import { Chapter } from '../../materials';

export const barisanDeretAritmetika: Chapter = {
  chapterId: "105-1",
  title: "Barisan dan Deret Aritmetika",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Bilangan · Kelas XI</span>
      <h1>Barisan dan Deret Aritmetika</h1>
      <p>Rangkuman pengertian barisan dan deret, rumus suku ke-n, suku tengah, sisipan, dan jumlah n suku pertama barisan aritmetika, beserta penerapannya.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Barisan dan deret</a></li>
        <li><a href="#barisan">Barisan aritmetika</a></li>
        <li><a href="#deret">Deret aritmetika</a></li>
        <li><a href="#penerapan">Penerapan</a></li>
        <li><a href="#ringkasan">Ringkasan</a></li>
      </ol>
    </nav>

    <!-- ============ 1. PENGERTIAN ============ -->
    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Barisan dan deret</h2>
      </div>

      <div class="cabang">
        <div class="kartu">
          <h3>Barisan</h3>
          <p>Bilangan-bilangan yang diurutkan menurut aturan tertentu. Tiap bilangan disebut <strong>suku</strong>: U<sub>1</sub>, U<sub>2</sub>, U<sub>3</sub>, …, U<sub>n</sub>.</p>
        </div>
        <div class="kartu">
          <h3>Deret</h3>
          <p>Jumlah suku-suku suatu barisan: S<sub>n</sub> = U<sub>1</sub> + U<sub>2</sub> + … + U<sub>n</sub>.</p>
        </div>
      </div>

      <p>Contoh: 3, 5, 7, 9, … adalah barisan, sedangkan 3 + 5 + 7 + 9 adalah deret dengan jumlah S<sub>4</sub> = 24.</p>
    </section>

    <!-- ============ 2. BARISAN ARITMETIKA ============ -->
    <section class="bagian" id="barisan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Barisan aritmetika</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Barisan aritmetika</span>
        <p>Barisan yang selisih dua suku berurutannya selalu tetap. Selisih tetap itu disebut <strong>beda</strong>, dilambangkan <em>b</em> = U<sub>n</sub> − U<sub>n−1</sub>.</p>
      </div>

      <figure class="gambar">
        <div class="gambar-isi">
          <img src="/images/barisan-aritmetika.svg" alt="Diagram batang barisan aritmetika 3, 5, 7, 9, 11, 13. Tinggi batang U1 sampai U6 naik dengan selisih tetap sebesar 2, yang disebut beda." />
        </div>
        <figcaption><strong>Gambar 1.</strong> Pada barisan aritmetika, setiap suku diperoleh dengan menambahkan beda yang sama.</figcaption>
      </figure>

      <p>Dari U<sub>1</sub> = <em>a</em>, suku kedua <em>a</em> + <em>b</em>, suku ketiga <em>a</em> + 2<em>b</em>, dan seterusnya. Suku ke-<em>n</em> sudah mendapat tambahan beda sebanyak (<em>n</em> − 1) kali.</p>

      <div class="rumus">
        <div class="rumus-judul">Suku ke-n barisan aritmetika</div>
        <div class="rumus-isi">
          <math display="block" aria-label="U n sama dengan a ditambah n dikurangi 1, dikali b">
            <msub><mi>U</mi><mi>n</mi></msub><mo>=</mo><mi>a</mi><mo>+</mo><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo><mi>b</mi>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>U<sub>n</sub></dt><dd>suku ke-n</dd>
            <dt>a</dt><dd>suku pertama (U<sub>1</sub>)</dd>
            <dt>b</dt><dd>beda; b &gt; 0 barisan naik, b &lt; 0 barisan turun</dd>
            <dt>n</dt><dd>nomor suku, bilangan asli</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Barisan 3, 5, 7, … memiliki <em>a</em> = 3 dan <em>b</em> = 2. Suku ke-20: U<sub>20</sub> = 3 + 19 × 2 = <strong>41</strong>.
      </div>

      <div class="sub">
        <h3><span class="no">2.1</span>Suku tengah dan sisipan</h3>
        <ul class="poin">
          <li><strong>Suku tengah</strong> barisan dengan banyak suku ganjil adalah rata-rata suku pertama dan suku terakhir: U<sub>t</sub> = (<em>a</em> + U<sub>n</sub>)/2. Contoh: suku tengah 3, 5, 7, …, 41 adalah (3 + 41)/2 = 22.</li>
          <li><strong>Sisipan.</strong> Jika di antara dua bilangan berurutan pada barisan beda <em>b</em> disisipkan <em>k</em> bilangan sehingga tetap membentuk barisan aritmetika, beda barunya <em>b</em>′ = <em>b</em>/(<em>k</em> + 1). Contoh: di antara 2 dan 14 disisipkan 3 bilangan, maka <em>b</em>′ = 12/4 = 3 dan barisannya 2, 5, 8, 11, 14.</li>
        </ul>
      </div>
    </section>

    <!-- ============ 3. DERET ARITMETIKA ============ -->
    <section class="bagian" id="deret">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Deret aritmetika</h2>
      </div>

      <p>Untuk menjumlahkan 1 + 2 + 3 + … + 100, tulis deret itu dua kali, sekali dari depan dan sekali dari belakang. Setiap pasangan (1 + 100), (2 + 99), … berjumlah 101, dan ada 100 pasangan. Jadi dua kali jumlahnya 100 × 101, sehingga jumlahnya 5050. Cara ini berlaku untuk semua deret aritmetika.</p>

      <div class="rumus">
        <div class="rumus-judul">Jumlah n suku pertama</div>
        <div class="rumus-isi">
          <math display="block" aria-label="S n sama dengan n per 2 dikali a ditambah U n">
            <msub><mi>S</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>n</mi><mn>2</mn></mfrac><mo>(</mo><mi>a</mi><mo>+</mo><msub><mi>U</mi><mi>n</mi></msub><mo>)</mo>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="S n sama dengan n per 2 dikali 2 a ditambah n dikurangi 1 dikali b">
            <msub><mi>S</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>n</mi><mn>2</mn></mfrac><mo>(</mo><mn>2</mn><mi>a</mi><mo>+</mo><mo>(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>)</mo><mi>b</mi><mo>)</mo>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>S<sub>n</sub></dt><dd>jumlah n suku pertama</dd>
            <dt>a, U<sub>n</sub></dt><dd>suku pertama dan suku terakhir yang dijumlahkan</dd>
          </dl>
        </div>
      </div>

      <div class="catatan info">
        <strong class="judul">Contoh</strong>
        Jumlah 20 suku pertama 3 + 5 + 7 + …: U<sub>20</sub> = 41, sehingga S<sub>20</sub> = (20/2)(3 + 41) = 10 × 44 = <strong>440</strong>.
      </div>

      <div class="catatan">
        <strong class="judul">Hubungan U<sub>n</sub> dan S<sub>n</sub></strong>
        Suku ke-n sama dengan selisih dua jumlah berurutan: U<sub>n</sub> = S<sub>n</sub> − S<sub>n−1</sub>. Contoh: jika S<sub>n</sub> = n² + 2n, maka U<sub>5</sub> = S<sub>5</sub> − S<sub>4</sub> = 35 − 24 = 11.
      </div>
    </section>

    <!-- ============ 4. PENERAPAN ============ -->
    <section class="bagian" id="penerapan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">4</span>
        <h2>Penerapan</h2>
      </div>

      <p>Barisan aritmetika muncul setiap kali suatu besaran bertambah atau berkurang dengan <strong>jumlah yang tetap</strong>, misalnya tabungan yang setorannya naik tetap atau susunan kursi yang bertambah sama banyak tiap baris.</p>

      <div class="kartu">
        <span class="istilah">Soal</span>
        <p>Sebuah gedung pertunjukan memiliki 15 baris kursi. Baris pertama berisi 20 kursi dan setiap baris berikutnya bertambah 2 kursi. Berapa banyak kursi di baris terakhir dan di seluruh gedung?</p>
      </div>
      <ol class="langkah">
        <li>Diketahui <em>a</em> = 20, <em>b</em> = 2, <em>n</em> = 15.</li>
        <li>Baris terakhir: U<sub>15</sub> = 20 + 14 × 2 = <strong>48 kursi</strong>.</li>
        <li>Seluruh gedung: S<sub>15</sub> = (15/2)(20 + 48) = 15 × 34 = <strong>510 kursi</strong>.</li>
      </ol>

      <div class="catatan info">
        <strong class="judul">Kaitan dengan bunga tunggal</strong>
        Tabungan dengan bunga tunggal bertambah dengan jumlah bunga yang sama setiap periode, sehingga saldonya membentuk barisan aritmetika. Pembahasannya ada di bab Bunga, Pertumbuhan, dan Anuitas.
      </div>
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
            <tr><td>Beda</td><td>b = U<sub>n</sub> − U<sub>n−1</sub></td></tr>
            <tr><td>Suku ke-n</td><td>U<sub>n</sub> = a + (n − 1)b</td></tr>
            <tr><td>Suku tengah</td><td>U<sub>t</sub> = (a + U<sub>n</sub>)/2</td></tr>
            <tr><td>Beda setelah sisipan k bilangan</td><td>b′ = b/(k + 1)</td></tr>
            <tr><td>Jumlah n suku</td><td>S<sub>n</sub> = (n/2)(a + U<sub>n</sub>) = (n/2)(2a + (n − 1)b)</td></tr>
            <tr><td>Suku dari jumlah</td><td>U<sub>n</sub> = S<sub>n</sub> − S<sub>n−1</sub></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="materi-footer">
      <strong>Rujukan:</strong> Capaian Pembelajaran Matematika Fase F, elemen Bilangan (Keputusan Kepala BSKAP Kemendikdasmen No. 046/H/KR/2025); Buku <em>Matematika untuk SMA/SMK Kelas X</em>, Pusat Perbukuan Kemendikbudristek (2021), bab Barisan dan Deret.
    </footer>
  `,
  formula: "",
  example: ""
};

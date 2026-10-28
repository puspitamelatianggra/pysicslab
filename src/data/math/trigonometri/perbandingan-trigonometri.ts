/* ====== Bab 103-1 · Perbandingan Trigonometri ====== */

import { Chapter } from '../../materials';

export const perbandinganTrigonometri: Chapter = {
  chapterId: "103-1",
  title: "Perbandingan Trigonometri",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Trigonometri</span>
      <h1>Trigonometri Dasar</h1>
      <p>Rangkuman perbandingan sinus, cosinus, dan tangen pada segitiga siku-siku.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian trigonometri</a></li>
        <li><a href="#perbandingan">Perbandingan trigonometri</a></li>
        <li><a href="#contoh">Contoh soal</a></li>
      </ol>
    </nav>

    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian trigonometri</h2>
      </div>

      <p>Trigonometri mempelajari hubungan antara <strong>sudut</strong> dan <strong>sisi</strong> segitiga.</p>
    </section>

    <section class="bagian" id="perbandingan">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Perbandingan trigonometri</h2>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Sinus, cosinus, tangen</div>
        <div class="rumus-isi">
          <math display="block" aria-label="sin theta sama dengan depan dibagi miring">
            <mi>sin</mi><mi>θ</mi><mo>=</mo>
            <mfrac><mtext>depan</mtext><mtext>miring</mtext></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="cos theta sama dengan samping dibagi miring">
            <mi>cos</mi><mi>θ</mi><mo>=</mo>
            <mfrac><mtext>samping</mtext><mtext>miring</mtext></mfrac>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="tan theta sama dengan depan dibagi samping">
            <mi>tan</mi><mi>θ</mi><mo>=</mo>
            <mfrac><mtext>depan</mtext><mtext>samping</mtext></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>θ</dt><dd>sudut yang ditinjau</dd>
            <dt>depan</dt><dd>sisi di depan sudut θ</dd>
            <dt>samping</dt><dd>sisi di samping sudut θ (bukan sisi miring)</dd>
            <dt>miring</dt><dd>sisi miring (hipotenusa)</dd>
          </dl>
        </div>
      </div>
    </section>

    <section class="bagian" id="contoh">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">3</span>
        <h2>Contoh soal</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Soal</span>
        <p>Segitiga siku-siku memiliki sisi 3, 4, dan 5. Sisi di depan sudut A adalah 3 dan sisi di sampingnya 4. Tentukan sin A, cos A, dan tan A.</p>
      </div>

      <ol class="langkah">
        <li>sin A = depan / miring = <strong>3/5</strong></li>
        <li>cos A = samping / miring = <strong>4/5</strong></li>
        <li>tan A = depan / samping = <strong>3/4</strong></li>
      </ol>
    </section>
  `,
  formula: "",
  example: ""
};

/* ====== Bab 101-1 · Pengertian Persamaan Linear ====== */

import { Chapter } from '../../materials';

export const pengertianPersamaanLinear: Chapter = {
  chapterId: "101-1",
  title: "Pengertian Persamaan Linear",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Aljabar</span>
      <h1>Persamaan Linear</h1>
      <p>Rangkuman pengertian, bentuk umum, dan cara menyelesaikan persamaan linear satu variabel.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian persamaan linear</a></li>
        <li><a href="#bentuk-umum">Bentuk umum dan penyelesaian</a></li>
        <li><a href="#contoh">Contoh soal</a></li>
      </ol>
    </nav>

    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian persamaan linear</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Persamaan Linear Satu Variabel</span>
        <p>Persamaan linear adalah persamaan yang pangkat tertinggi variabelnya adalah <strong>satu</strong>.</p>
      </div>
    </section>

    <section class="bagian" id="bentuk-umum">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Bentuk umum dan penyelesaian</h2>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Bentuk umum</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a x tambah b sama dengan nol">
            <mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>0</mn>
          </math>
        </div>
        <div class="rumus-isi">
          <math display="block" aria-label="x sama dengan negatif b dibagi a">
            <mi>x</mi><mo>=</mo><mo>−</mo>
            <mfrac><mi>b</mi><mi>a</mi></mfrac>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>x</dt><dd>variabel yang dicari</dd>
            <dt>a</dt><dd>koefisien x, dengan a ≠ 0</dd>
            <dt>b</dt><dd>konstanta</dd>
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
        <p>Selesaikan: 3x + 6 = 15</p>
      </div>

      <ol class="langkah">
        <li>Pindahkan konstanta ke ruas kanan: 3x = 15 − 6</li>
        <li>Sederhanakan: 3x = 9</li>
        <li>Bagi kedua ruas dengan 3: <strong>x = 3</strong></li>
      </ol>
    </section>
  `,
  formula: "",
  example: ""
};

/* ====== Bab 102-1 · Bentuk Umum Persamaan Kuadrat ====== */

import { Chapter } from '../../materials';

export const bentukUmumPersamaanKuadrat: Chapter = {
  chapterId: "102-1",
  title: "Bentuk Umum Persamaan Kuadrat",
  content: `
    <header class="materi-header">
      <span class="mapel">Matematika · Aljabar</span>
      <h1>Persamaan Kuadrat</h1>
      <p>Rangkuman pengertian, bentuk umum, dan cara menentukan akar-akar persamaan kuadrat.</p>
    </header>

    <nav class="daftar-isi" aria-label="Daftar isi">
      <h2>Isi rangkuman</h2>
      <ol>
        <li><a href="#pengertian">Pengertian persamaan kuadrat</a></li>
        <li><a href="#rumus-abc">Bentuk umum dan rumus ABC</a></li>
        <li><a href="#contoh">Contoh soal</a></li>
      </ol>
    </nav>

    <section class="bagian" id="pengertian">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">1</span>
        <h2>Pengertian persamaan kuadrat</h2>
      </div>

      <div class="kartu">
        <span class="istilah">Persamaan Kuadrat</span>
        <p>Persamaan kuadrat adalah persamaan yang pangkat tertinggi variabelnya adalah <strong>dua</strong>.</p>
      </div>
    </section>

    <section class="bagian" id="rumus-abc">
      <div class="bagian-judul">
        <span class="nomor" aria-hidden="true">2</span>
        <h2>Bentuk umum dan rumus ABC</h2>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Bentuk umum</div>
        <div class="rumus-isi">
          <math display="block" aria-label="a x kuadrat tambah b x tambah c sama dengan nol">
            <mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn>
          </math>
        </div>
        <div class="keterangan">
          <div class="label">Keterangan</div>
          <dl>
            <dt>x</dt><dd>variabel yang dicari</dd>
            <dt>a</dt><dd>koefisien x², dengan a ≠ 0</dd>
            <dt>b</dt><dd>koefisien x</dd>
            <dt>c</dt><dd>konstanta</dd>
          </dl>
        </div>
      </div>

      <div class="rumus">
        <div class="rumus-judul">Rumus ABC</div>
        <div class="rumus-isi">
          <math display="block" aria-label="x sama dengan negatif b plus minus akar b kuadrat dikurangi 4 a c, dibagi 2 a">
            <mi>x</mi><mo>=</mo>
            <mfrac>
              <mrow>
                <mo>−</mo><mi>b</mi><mo>±</mo>
                <msqrt><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></msqrt>
              </mrow>
              <mrow><mn>2</mn><mi>a</mi></mrow>
            </mfrac>
          </math>
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
        <p>Selesaikan: x² − 5x + 6 = 0</p>
      </div>

      <ol class="langkah">
        <li>Faktorkan: (x − 2)(x − 3) = 0</li>
        <li>Tiap faktor bernilai nol: x − 2 = 0 atau x − 3 = 0</li>
        <li>Jadi <strong>x = 2</strong> atau <strong>x = 3</strong></li>
      </ol>
    </section>
  `,
  formula: "",
  example: ""
};

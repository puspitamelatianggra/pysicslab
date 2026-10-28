/* ====== Bab 2-1 · Listrik Statis ====== */

import { Chapter } from '../../materials';

export const listrikStatis: Chapter = {
  chapterId: "2-1",
  title: "Listrik Statis",
  content: `
    <h3>Muatan Listrik</h3>
    <p>Muatan listrik ada dua jenis: positif (+) dan negatif (-). Muatan senama tolak-menolak, muatan berbeda nama tarik-menarik.</p>

    <h3>Hukum Coulomb</h3>
    <p>Gaya antara dua muatan titik berbanding lurus dengan besar muatan dan berbanding terbalik dengan kuadrat jarak.</p>
  `,
  formula: "F = k × (q₁ × q₂) / r²\nE = F / q\nV = k × q / r",
  example: "Dua muatan +3μC dan -2μC terpisah 0,3 m. Hitung gaya Coulomb!\n\nJawab:\nF = k(q₁q₂)/r²\nF = (9×10⁹)(3×10⁻⁶)(2×10⁻⁶)/(0,3)²\nF = 0,6 N (tarik-menarik)"
};

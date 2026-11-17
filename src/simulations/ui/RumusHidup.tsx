import { IconMathFunction } from '@tabler/icons-react';
import { Panel } from './Kendali';

export interface BarisRumus {
    /** Isi MathML tanpa tag <math>, misalnya "<mi>F</mi><mo>=</mo><mi>m</mi><mi>a</mi>" */
    mathml: string;
    /** Cara membaca rumus ini, dalam Bahasa Indonesia */
    baca: string;
}

interface RumusHidupProps {
    judul?: string;
    baris: BarisRumus[];
    /** Kalimat pendek di bawah rumus, misalnya batas berlakunya rumus */
    catatan?: string;
}

/**
 * Rumus dengan angka saat ini disubstitusikan. Tulis satu baris untuk bentuk umum
 * dan satu baris untuk bentuk berangka, supaya siswa melihat angka mana masuk ke mana.
 */
export default function RumusHidup({ judul = 'Rumus dengan angkamu', baris, catatan }: RumusHidupProps) {
    return (
        <Panel judul={judul} nada="lime" ikon={<IconMathFunction size={18} stroke={2.5} aria-hidden="true" />}>
            <div className="sim-rumus overflow-x-auto">
                {baris.map((b, i) => (
                    <div
                        key={i}
                        dangerouslySetInnerHTML={{
                            __html: `<math display="block" aria-label="${b.baca.replace(/"/g, '&quot;')}">${b.mathml}</math>`,
                        }}
                    />
                ))}
            </div>
            {catatan && <p className="text-xs text-muted mt-2">{catatan}</p>}
        </Panel>
    );
}

/* Pembantu kecil untuk menyusun MathML */
export const mi = (s: string) => `<mi>${s}</mi>`;
export const mn = (s: string | number) => `<mn>${s}</mn>`;
export const mo = (s: string) => `<mo>${s}</mo>`;
export const mtext = (s: string) => `<mtext>&nbsp;${s}</mtext>`;
export const msub = (a: string, b: string) => `<msub>${a}${b}</msub>`;
export const msup = (a: string, b: string) => `<msup>${a}${b}</msup>`;
export const mfrac = (a: string, b: string) => `<mfrac><mrow>${a}</mrow><mrow>${b}</mrow></mfrac>`;
export const msqrt = (a: string) => `<msqrt>${a}</msqrt>`;
export const mrow = (...isi: string[]) => `<mrow>${isi.join('')}</mrow>`;

// Format angka gaya Indonesia: koma sebagai tanda desimal, titik sebagai pemisah ribuan.

export function angka(nilai: number, desimal = 1): string {
    if (!Number.isFinite(nilai)) return '–';
    // Hindari "-0"
    const bulat = Math.abs(nilai) < 0.5 * Math.pow(10, -desimal) ? 0 : nilai;
    return bulat.toLocaleString('id-ID', {
        minimumFractionDigits: 0,
        maximumFractionDigits: desimal,
    });
}

// Selalu menampilkan jumlah desimal yang sama, supaya angka yang terus berubah tidak "melompat" lebarnya.
export function angkaTetap(nilai: number, desimal = 1): string {
    if (!Number.isFinite(nilai)) return '–';
    const bulat = Math.abs(nilai) < 0.5 * Math.pow(10, -desimal) ? 0 : nilai;
    return bulat.toLocaleString('id-ID', {
        minimumFractionDigits: desimal,
        maximumFractionDigits: desimal,
    });
}

export function denganSatuan(nilai: number, satuan: string, desimal = 1): string {
    return `${angka(nilai, desimal)} ${satuan}`;
}

// Untuk nilai sangat besar atau kecil: 6,63 × 10⁻³⁴
const PANGKAT: Record<string, string> = {
    '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
};

export function angkaIlmiah(nilai: number, desimal = 2): string {
    if (!Number.isFinite(nilai)) return '–';
    if (nilai === 0) return '0';
    const pangkat = Math.floor(Math.log10(Math.abs(nilai)));
    if (pangkat >= -2 && pangkat <= 3) return angka(nilai, desimal);
    const mantisa = nilai / Math.pow(10, pangkat);
    const atas = String(pangkat).split('').map((c) => PANGKAT[c] ?? c).join('');
    return `${angka(mantisa, desimal)} × 10${atas}`;
}

export const rad = (derajat: number) => (derajat * Math.PI) / 180;
export const derajat = (radian: number) => (radian * 180) / Math.PI;
export const jepit = (nilai: number, min: number, maks: number) => Math.min(maks, Math.max(min, nilai));

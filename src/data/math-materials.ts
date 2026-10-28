import { Material } from './materials';

export const mathMaterials: Material[] = [
    {
        id: 101,
        title: "Persamaan Linear",
        description: "Pelajari persamaan linear satu dan dua variabel",
        icon: "📐",
        color: "from-green-500 to-emerald-400",
        chapters: [
            {
                chapterId: "101-1",
                title: "Pengertian Persamaan Linear",
                content: `
          <h3>Persamaan Linear Satu Variabel</h3>
          <p>Persamaan linear adalah persamaan yang pangkat tertinggi variabelnya adalah satu.</p>
          <p>Bentuk umum: ax + b = 0</p>
        `,
                formula: "ax + b = 0\nx = -b/a",
                example: "Selesaikan: 3x + 6 = 15\n\nJawab:\n3x = 15 - 6\n3x = 9\nx = 3"
            }
        ]
    },
    {
        id: 102,
        title: "Persamaan Kuadrat",
        description: "Pelajari persamaan kuadrat dan cara penyelesaiannya",
        icon: "📊",
        color: "from-blue-500 to-cyan-400",
        chapters: [
            {
                chapterId: "102-1",
                title: "Bentuk Umum Persamaan Kuadrat",
                content: `
          <h3>Persamaan Kuadrat</h3>
          <p>Persamaan kuadrat adalah persamaan yang pangkat tertinggi variabelnya adalah dua.</p>
          <p>Bentuk umum: ax² + bx + c = 0, dengan a tidak sama dengan 0</p>
        `,
                formula: "ax² + bx + c = 0\n\nRumus ABC:\nx = (-b ± √(b² - 4ac)) / 2a",
                example: "Selesaikan: x² - 5x + 6 = 0\n\nJawab:\n(x - 2)(x - 3) = 0\nx = 2 atau x = 3"
            }
        ]
    },
    {
        id: 103,
        title: "Trigonometri",
        description: "Pelajari sin, cos, tan dan penerapannya",
        icon: "📏",
        color: "from-purple-500 to-pink-400",
        chapters: [
            {
                chapterId: "103-1",
                title: "Perbandingan Trigonometri",
                content: `
          <h3>Trigonometri Dasar</h3>
          <p>Trigonometri mempelajari hubungan antara sudut dan sisi segitiga.</p>
          <ul>
            <li>Sinus (sin) = depan / miring</li>
            <li>Cosinus (cos) = samping / miring</li>
            <li>Tangen (tan) = depan / samping</li>
          </ul>
        `,
                formula: "sin θ = depan / miring\ncos θ = samping / miring\ntan θ = depan / samping",
                example: "Segitiga dengan sisi 3, 4, 5.\nsin A = 3/5\ncos A = 4/5\ntan A = 3/4"
            }
        ]
    }
];

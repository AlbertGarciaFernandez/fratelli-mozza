const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/menu.json', 'utf8'));

const replacements = {
  'Ración de Churros': 'https://images.unsplash.com/photo-1623356301017-0d53cbf7d8ee?q=80&w=600&auto=format&fit=crop', // A churro image? Let's use generic dessert or bread
  'Pulguita de Pata Asada': 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=600&auto=format&fit=crop',
  'Tostada de Jamón Ibérico': 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop',
  'Tostada Tumaca': 'https://images.unsplash.com/photo-1484723091791-009f53e6b772?q=80&w=600&auto=format&fit=crop',
  'Smoothie Verde': 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?q=80&w=600&auto=format&fit=crop',
  'Smoothie Frutos Rojos': 'https://images.unsplash.com/photo-1638176066420-7f2a1b9d1469?q=80&w=600&auto=format&fit=crop',
  'Papas Arrugadas con Mojo': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop',
  'Croquetas Caseras (Ración)': 'https://images.unsplash.com/photo-1626082895617-2c6fd1070ae8?q=80&w=600&auto=format&fit=crop',
  'Solomillo al Whisky': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
  'Flan Casero': 'https://images.unsplash.com/photo-1594982631558-c922df659ba2?q=80&w=600&auto=format&fit=crop'
};

const genericFood = [
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495195134817-a165d42929ce?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1481070555726-e2fe83477d4a?q=80&w=600&auto=format&fit=crop'
];

let fallbackIndex = 0;

for (const item of data) {
  if (replacements[item.name]) {
    item.image = replacements[item.name];
  }
}

fs.writeFileSync('src/data/menu.json', JSON.stringify(data, null, 2));

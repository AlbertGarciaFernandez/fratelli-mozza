const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/menu.json', 'utf8'));

const replacements = {
  'Tostada Tumaca': 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=600&auto=format&fit=crop', // Toast
  'Smoothie Frutos Rojos': 'https://images.unsplash.com/photo-1556612457-3f3ae99a0ed6?q=80&w=600&auto=format&fit=crop', // Smoothie
  'Croquetas Caseras (Ración)': 'https://images.unsplash.com/photo-1574888069507-6c2e3919e120?q=80&w=600&auto=format&fit=crop', // Food
  'Flan Casero': 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop' // Dessert
};

for (const item of data) {
  if (replacements[item.name]) {
    item.image = replacements[item.name];
  }
}

fs.writeFileSync('src/data/menu.json', JSON.stringify(data, null, 2));

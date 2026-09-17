export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  allergens: string[];
  dietaryTags: string[];
  available: boolean;
  featured: boolean;
}

export interface DailyMenu {
  id: string;
  date: string;
  title: string;
  firstCourses: string[];
  mainCourses: string[];
  dessertOptions: string[];
  drinkIncluded: boolean;
  price: number;
  active: boolean;
}

export interface Settings {
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  specialHours: { date: string; open: string; close: string; closed: boolean }[];
  isOpenOverride?: boolean;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

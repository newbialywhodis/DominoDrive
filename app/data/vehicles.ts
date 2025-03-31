import { Vehicle } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Citroen C3',
    type: 'car',
    description: 'Komfortowy i łatwy w prowadzeniu samochód idealny do nauki jazdy. Wyposażony w system wspomagania parkowania.',
    imageUrl: '/images/vehicles/citroen-c3.jpg',
    features: ['Manualna skrzynia biegów', 'Klimatyzacja', 'System wspomagania parkowania'],
  },
  {
    id: '2',
    name: 'Kymco KB 50',
    type: 'motorcycle',
    description: 'Lekki motocykl idealny do nauki jazdy na prawo jazdy kategorii A1. Łatwy w prowadzeniu i stabilny.',
    imageUrl: '/images/vehicles/kymco-kb-50.jpg',
    features: ['Lekka konstrukcja', 'Idealna do początkujących', 'Ekonomiczne spalanie'],
  },
];
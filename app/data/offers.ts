import { Offer, AdditionalDrivingHoursOffer } from '../types';

export const offers: Offer[] = [
  {
    id: '1',
    name: 'Kurs na prawo jazdy kategorii B',
    description: 'Kompleksowy kurs przygotowujący do egzaminu na prawo jazdy kategorii B.',
    price: '3000,00 zł',
    additionalHoursPrice: '150,00 zł za godzinę',
    features: [
      'Zajęcia teoretyczne',
      'Zajęcia praktyczne',
      'Egzamin wewnętrzny',
      'Egzamin państwowy',
    ],
  },
  {
    id: '2',
    name: 'Kurs na prawo jazdy kategorii A',
    description: 'Profesjonalny kurs przygotowujący do egzaminu na prawo jazdy kategorii A.',
    price: '3500,00 zł',
    additionalHoursPrice: '180,00 zł za godzinę',
    features: [
      'Zajęcia teoretyczne',
      'Zajęcia praktyczne',
      'Egzamin wewnętrzny',
      'Egzamin państwowy',
    ],
  },
];

export const additionalDrivingHoursOffers: AdditionalDrivingHoursOffer[] = [
  {
    id: '1',
    name: 'Doszkalające godziny jazdy - samochód',
    description: 'Godziny doszkalające dla osób, które już posiadają prawo jazdy i chcą poprawić swoje umiejętności.',
    pricePerHour: '160,00 zł za godzinę',
    features: [
      'Jazda w trudnych warunkach atmosferycznych',
      'Techniki hamowania awaryjnego',
      'Parkowanie w trudnych miejscach',
      'Jazda ekonomiczna i ekologiczna',
    ],
  },
  {
    id: '2',
    name: 'Doszkalające godziny jazdy - motocykl',
    description: 'Doszkalające godziny jazdy na motocyklu, w tym techniki jazdy w trudnych warunkach.',
    pricePerHour: '200,00 zł za godzinę',
    features: [
      'Jazda na motocyklu w trudnych warunkach',
      'Techniki hamowania awaryjnego',
      'Nauka jazdy w ruchu miejskim',
    ],
  },
];

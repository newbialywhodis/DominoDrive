export interface Instructor {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  contact?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'car' | 'motorcycle' | 'other';
  description: string;
  imageUrl: string;
  features?: string[];
}

export interface Graduate {
  id: string;
  name: string;
  licenseType: string;
  graduationDate: string;
  imageUrl: string;
  testimonial?: string;
}

export interface AdditionalDrivingHoursOffer {
  id: string;
  name: string;
  description: string;
  pricePerHour: string;
  features: string[];
}

export interface Offer {
  id: string;
  name: string;
  description: string;
  price: string;
  additionalHoursPrice: string;
  features: string[];
}


export interface BonusItem {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  features: string[];
  isHighlighted: boolean;
  buttonText: string;
}

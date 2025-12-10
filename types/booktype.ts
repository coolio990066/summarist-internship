

export interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRatings: number;
  averageRating: number;
  keyIdeas: number;
  type: string; // e.g., 'fiction' | 'non-fiction'
  status: string; // e.g., 'available' | 'unavailable'
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}
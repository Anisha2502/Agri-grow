export interface Parcel {
  id: number;
  name: string;
  crop: string;
  location: string;
  area: number;
  season: string;
  plantingDate: string;
  practices: string[];
  carbon: number;
  confidence: number;
  savings: number;
}

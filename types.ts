export type ItemType = 'flight' | 'transport' | 'transit' | 'hotel' | 'activity' | 'food' | 'snack' | 'list' | 'shopping';

export interface TransitStep {
  color?: string; // e.g., 'bg-line-1'
  line?: string;
  name: string;
  dir?: string;
  desc?: string;
  time?: string;
  exit?: string;
}

export interface SnackItem {
  name: string;
  desc?: string;
}

export interface TripItem {
  type: ItemType;
  time?: string;
  title: string;
  subtitle?: string; // Mapped from 'sub' in original data
  sub?: string;
  desc?: string;
  tips?: string;
  tags?: string[];
  address?: string;
  mapQuery?: string;
  naverLink?: string;
  exit?: string;
  
  // Flight specific
  airline?: string;
  code?: string;
  from?: string;
  fromCity?: string;
  fromTime?: string;
  fromTerm?: string;
  to?: string;
  toCity?: string;
  toTime?: string;
  toTerm?: string;
  bag?: string;
  gate?: string;

  // Transit specific
  steps?: TransitStep[];

  // Snack specific
  items?: (string | SnackItem)[];

  // List specific
  list?: string[];
}

export interface DiscoverySpot {
  name: string;
  desc?: string;
  type?: string;
}

export interface Discovery {
  title: string;
  desc: string;
  spots: DiscoverySpot[];
}

export interface Weather {
  t: string;
  i: string;
  tip?: string;
}

export interface TripDay {
  title: string;
  subtitle: string;
  weather: Weather;
  discovery?: Discovery;
  items: TripItem[];
}

export interface TripData {
  [date: string]: TripDay;
}

export interface Expense {
  id: number;
  i: string; // Item name
  a: string; // Amount
  w: 'me' | 'cup'; // Who paid
  c: 'KRW' | 'TWD'; // Currency
}

export interface ChecklistGroup {
  title: string;
  items: string[];
}

export interface Phrase {
  k: string; // Korean
  p: string; // Pronunciation
  m: string; // Meaning
}

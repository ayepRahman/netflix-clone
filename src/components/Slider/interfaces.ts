export interface MovieDataProps {
  backdrop_path: string; // "/vmVeGFUTXEKwAUpFH9bZwow9zIk.jpg"
  first_air_date: string; // "2020-07-15"
  genre_ids: string[]; // (2) [18, 9648]
  id: number | string; // 105214
  name: string; // "Dark Desire"
  origin_country: string[]; // ["MX"]
  original_language: string; // "es"
  original_name: string; // "Oscuro deseo"
  overview: string; // "Married Alma spends a fateful weekend away from home that ignites passion, ends in tragedy and leads her to question the truth about those close to her."
  popularity: number; // 260.365
  poster_path: string; // "/uxFNAo2A6ZRcgNASLk02hJUbybn.jpg"
  vote_average: number; // 7.3
  vote_count: number; // 2290
}

export interface SliderItemProps {
  item: MovieDataProps;
}

export interface SliderContextProps {
  onSelectSlide: (item: MovieDataProps) => void;
  onCloseSlide: () => void;
  elementRef: React.RefObject<HTMLDivElement>;
  // TODO: update shape when ready
  currentSlide: any;
}

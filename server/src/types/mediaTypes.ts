import Country from './countryTypes';
import { FilmGenre, ShowGenre, GameGenre, GameplayGenre } from './genreTypes';

enum MediaType {
  Film = 'Film',
  Show = 'Show',
  Game = 'Game',
}

enum SubMediaType {
  None = 'None',
  Season = 'Season',
  Chapter = 'Chapter',
  DLC = 'DLC',
}

enum AuthorType {
  Director = 'Director',
  Writer = 'Writer',
  Actor = 'Actor',
}

enum FilmParental {
  G = 'General Audience',
  PG = 'Parental Guidance Suggested',
  PG13 = 'Parental Guidance for Children Under 13',
  R = 'Restricted',
  NC17 = 'Adults Only',
}

enum ShowParental {
  TVY = 'All Children',
  TVY7 = 'Directed to Older Children Age 7 and Above',
  TVY7FV = 'Directed to Older Children - Fantasy Violence',
  TVG = 'General Audience',
  TVPG = 'Parental Guidance Suggested',
  TV14 = 'Parents Strongly Cautioned',
  TVMA = 'Mature Audience',
}

enum GameParental {
  EC = 'Early Childhood',
  E = 'Everyone',
  E10 = 'Everyone 10+',
  T = 'Teen',
  M = 'Mature 17+',
  AO = 'Adults Only 18+',
  RP = 'Rating Pending',
}

type ParentalGuide = GameParental | FilmParental | ShowParental;

interface Individual {
  id: number;
  name: string;
  country: Country;
}

interface Creator extends Individual {
  media: Media[];
}

interface Author extends Creator {
  type: AuthorType;
  birthYear: number;
}

interface Director extends Author {
  type: AuthorType.Director;
}

interface Writer extends Author {
  type: AuthorType.Writer;
}
interface Actor extends Author {
  type: AuthorType.Actor;
}
interface Character extends Individual {
  actor: Author;
}
interface Studio extends Individual {}

interface Media {
  id: number;
  name: string;
  originalName: string;
  sortname: string;
  description: string;
  parentalGuide: ParentalGuide;
  releaseDate: Date;
  image: string;
  rating: number;
  type: MediaType;
  genres: GameGenre[] | FilmGenre[] | ShowGenre[];
  subMedia: SubMediaType;
  studios: Studio[];
  directors: Director[];
  writers: Writer[];
  countries: Country[];
  cast: Character[];
}

interface Film extends Media {
  type: MediaType.Film;
  subMedia: SubMediaType.None;
  parentalGuide: FilmParental;
  genres: FilmGenre[];
}
interface Show extends Media {
  type: MediaType.Show;
  subMedia: SubMediaType.Season;
  seasons: Season[];
  genres: ShowGenre[];
}
interface Game extends Media {
  type: MediaType.Game;
  subMedia: SubMediaType.Chapter | SubMediaType.DLC;
  parentalGuide: GameParental;
  dlc: DLC[];
  chapters: Chapter[];
  genres: GameGenre[];
  gamePlayGenres: GameplayGenre[];
}

interface SubMedia extends Media {
  subType: SubMediaType;
  parentId: number;
}
interface Season extends SubMedia {
  type: MediaType.Show;
  subType: SubMediaType.Season;
}

interface DLC extends SubMedia {
  type: MediaType.Game;
  subType: SubMediaType.DLC;
}

interface Chapter extends SubMedia {
  type: MediaType.Game;
  subType: SubMediaType.Chapter;
}

export {
  Media,
  Author,
  MediaType,
  Film,
  Actor,
  Studio,
  Show,
  Season,
  Game,
  DLC,
  Chapter,
};

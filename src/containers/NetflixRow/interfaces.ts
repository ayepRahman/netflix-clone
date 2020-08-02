/**
 * INTERFACES
 *
 * One of TypeScript’s core principles is that type
 * checking focuses on the shape that values have
 */

export interface NetflixRowProps {
  title: string;
  fetchUrl: string;
  /**
   * @desc a boolean that make Netflix Card Height Taller
   */
  isNetflixOriginal?: boolean;
}

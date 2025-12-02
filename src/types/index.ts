export type CountryMedia = {
  src?: string;
  video?: string;
  poster?: string;
  alt: string;
};

export interface CountryImagesData {
  [key: string]: CountryMedia[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
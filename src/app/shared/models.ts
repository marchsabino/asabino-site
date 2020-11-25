export interface ContactFormRequest {
  name: string;
  phone: string;
  daytime: boolean;
  evening: boolean;
  description: string;
  address?: string;
}

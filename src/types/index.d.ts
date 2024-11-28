export interface Product {
  id: string;
  name: string;
  slug: string;
  overview?: string;
  drawing_details?: string;
  category: string;
  brand: {
    id: string;
    name: string;
    slug: string;
    image: string;
  };
  colors: {
    id: string;
    name: string;
    slug: string;
    color_image: string;
    product_image: {
      medium_image_path: string;
      thumbnail_image_path?: string;
    };
  }[];
  properties?: {
    id: string;
    name: string;
    slug: string;
    property_values: {
      id: string;
      value: string;
      slug: string;
      product_id: string;
      property_id: string;
    }[];
  }[];
  noLink?: boolean;
  onClick?: (slug: string) => void;
}

export interface Link {
  url: string;
  label: string;
  active: boolean;
}

export interface Filter {
  name: string;
  slug: string;
  values: {
    name: string;
    slug: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  products: {
    data: Product[];
    links: Link[];
    meta: {
      current_page: number;
      from: number;
      last_page: number;
      path: string;
      per_page: number;
      to: number;
      total: number;
    };
    filters: Filter[];
  };
}

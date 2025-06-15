export type TCategory = {
  id: string;
  catName: string;
};

export type TPost = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  publicId?: string;
  catName?: string;
  links: null | string[];
  createdAt: string;
  authorEmail: string;
  author: {
    name: string;
  };
};


export type CloudinaryUploadWidgetResults = {
  event: 'success' | string;
  info: {
    secure_url?: string;
    public_id?: string;
    format?: string;
    original_filename?: string;
    width?: number;
    height?: number;
    bytes?: number;
    resource_type?: string;
    url?: string;
    thumbnail_url?: string;
    [key: string]: any; // for any other Cloudinary fields
  };
};


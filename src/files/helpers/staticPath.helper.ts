import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

export const STATIC_PRODUCTS_PATH = join(process.cwd(), 'static', 'products');

export const UPLOADS_PRODUCTS_PATH =
  process.env.UPLOADS_PATH ?? STATIC_PRODUCTS_PATH;

export function ensureUploadsDirectory() {
  if (!existsSync(UPLOADS_PRODUCTS_PATH)) {
    mkdirSync(UPLOADS_PRODUCTS_PATH, { recursive: true });
  }
}

export function resolveProductImagePath(imageName: string): string | null {
  const candidates = [
    join(STATIC_PRODUCTS_PATH, imageName),
    join(UPLOADS_PRODUCTS_PATH, imageName),
  ];

  for (const path of candidates) {
    if (existsSync(path)) return path;
  }

  return null;
}

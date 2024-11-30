// lib/searchParamsCache.ts
import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsString,
} from 'nuqs/server';

export const searchParamsCache = createSearchParamsCache({
  contentPillar: parseAsArrayOf(parseAsString).withDefault([]),
  contentType: parseAsArrayOf(parseAsString).withDefault([]),
  functionalities: parseAsArrayOf(parseAsString).withDefault([]),
  languages: parseAsArrayOf(parseAsString).withDefault([]),
  level: parseAsArrayOf(parseAsString).withDefault([]),
  platforms: parseAsArrayOf(parseAsString).withDefault([]),
  sectors: parseAsArrayOf(parseAsString).withDefault([]),
  toolsAndPlatforms: parseAsArrayOf(parseAsString).withDefault([]),
});

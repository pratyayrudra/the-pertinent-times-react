import { nytApi } from "@utils/api.utl"

// Resource Paths
const TOP_STORIES_PATH = "topstories/v2"
const MOST_POPULAR_PATH = "mostpopular/v2/viewed"
const REAL_TIME_NEWS_PATH = "news/v3/content/nyt"
const SECTION_LIST_PATH = "news/v3/content/section-list.json"

export const getTopStories = type => nytApi.get(`${TOP_STORIES_PATH}/${type}.json`)

export const getMostPopular = ( page = 1 ) => nytApi.get(`${MOST_POPULAR_PATH}/${page}.json`)

export const getRealTimeNews = section => nytApi.get(`${REAL_TIME_NEWS_PATH}/${section}.json`)

export const getAllSections = () => nytApi.get(SECTION_LIST_PATH)
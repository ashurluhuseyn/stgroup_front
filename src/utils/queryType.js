import { getBlogsByCategory } from "../api/blog";
import { getCoursesByCategoryID } from "../api/course";
import { getEventsByCategory } from "../api/event";

export const getDataByQueryType = (queryType, id) => {
  switch (queryType) {
    case 'blogs':
      return getBlogsByCategory(id);
    case 'courses':
      return getCoursesByCategoryID(id);
    case 'corporate/events':
      return getEventsByCategory(id);
    default:
      throw new Error('Invalid query type');
  }
};

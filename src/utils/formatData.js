import { formatDistance, subDays } from "date-fns";
import ruLang from "date-fns/locale/ru";

export const formatData = (date) => {
  return formatDistance(date, new Date(), { locale: ruLang });
};

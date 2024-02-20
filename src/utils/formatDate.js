import { format, parseISO } from "date-fns";
import vi from "date-fns/locale/vi";

export const formatDate = () => {
  const dateString = new Date();
  const isoString = dateString.toISOString();
  const dateObject = parseISO(isoString);
  const formattedDate = format(dateObject, "EEEE, dd/MM/yyyy", { locale: vi });
  return formattedDate;
};

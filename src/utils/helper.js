import { format } from "date-fns";

export const formatDate = (data) => {
  const date = format(new Date(data.created_at), "hh:mm ");
  return date;
};

export function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

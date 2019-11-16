export const addDays = (date, days) => {
  if (date.slice(0, 4) < 2018) {
    return "";
  } else {
    let result = new Date(date);
    result.setDate(result.getDate() + days + 1);
    return new Intl.DateTimeFormat("en-US").format(result);
  }
};

export const addBusinessDays = (date, days) => {
  var count = 0;
  let result = new Date(date);
  while (count <= days) {
    result.setDate(result.getDate() + 1);
    if (result.getDay() !== 0 && result.getDay() !== 6) count++;
  }
  return new Intl.DateTimeFormat("en-US").format(result);
};

export const compareDates = (docDate, days, closingDate) => {
  let updatedDocDate = new Date(docDate);
  updatedDocDate.setDate(updatedDocDate.getDate() + days + 1);
  if (new Date(closingDate).getTime() < updatedDocDate.getTime()) {
    return true;
  } else return false;
};

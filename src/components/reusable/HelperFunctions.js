// This function is used to add calendar days to the user entered dates. The number of days added comes
// from the Fields object (ex. "ConvFields.js") of each mortgage product folder. It has a filter to prevent
// the user from submitting a date too far in the past

export const addDays = (date, days) => {
  if (date.slice(0, 4) < 2018) {
    return "";
  } else {
    let result = new Date(date);
    result.setDate(result.getDate() + days + 1);
    return new Intl.DateTimeFormat("en-US").format(result);
  }
};

// Same as above but this is used to add business days

export const addBusinessDays = (date, days) => {
  var count = 0;
  let result = new Date(date);
  while (count <= days) {
    result.setDate(result.getDate() + 1);
    if (result.getDay() !== 0 && result.getDay() !== 6) count++;
  }
  return new Intl.DateTimeFormat("en-US").format(result);
};

// This functions compares the calculated document expiration date to the user inputted closing date
// returns true if the document is expired, otherwise false. This is used in DateItem to render the
// background color of the document expiration date as green or red.

export const compareDates = (docDate, days, closingDate) => {
  let updatedDocDate = new Date(docDate);
  updatedDocDate.setDate(updatedDocDate.getDate() + days + 1);
  if (new Date(closingDate).getTime() < updatedDocDate.getTime()) {
    return true;
  } else return false;
};

// This function determines which date item is being passed in and calculates the expiration date of that
// document. Data passed in originates and can be updated in the Fields object (ex. "ConvFields.js") of
// each mortgage product folder. This function is called in CommentItem and DateItem components

export const expirationDateFunc = (name, value, days) => {
  if (name === "closingDate") {
    return "";
  }
  if (!value) {
    return "";
  }
  if (name === "voe" || name === "voe2") {
    return addBusinessDays(value, days);
  } else {
    return addDays(value, days);
  }
};

// This function takes the result of the compare dates function and returns the background color which is
// displayed on DateItem component

export const expDateBackgroundColor = (
  name,
  value,
  days,
  closingDate,
  compareDates
) => {
  if (!value) {
    return "white";
  }
  if (name === closingDate) {
    return "white";
  }
  if (compareDates(value, days, closingDate)) {
    return "rgba(0, 255, 0, 0.6)";
  } else {
    return "rgba(255, 0, 0, 0.6)";
  }
};

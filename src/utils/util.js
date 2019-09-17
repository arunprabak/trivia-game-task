export const pushToArray = (arr, obj) => {
  var existingIds = arr.map(obj => obj.id);

  if (!existingIds.includes(obj.id)) {
    arr.push(obj);
  } else {
    arr.forEach((element, index) => {
      if (element.id === obj.id) {
        arr[index] = obj;
      }
    });
  }

  return arr;
};

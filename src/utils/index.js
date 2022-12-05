const validateCategories = (dbCategories, reqCategories) => {
  const arr = [];
  reqCategories.forEach((catId) => {
    const check = dbCategories.some((cat) => cat.id === catId);

    if (!check) arr.push(1);
  });

  return arr;
};

module.exports = validateCategories;
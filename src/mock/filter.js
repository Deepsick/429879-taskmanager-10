const filterNames = [
  `all`,
  `overdue`,
  `today`,
  `favorites`,
  `repeating`,
  `tags`,
  `archive`,
];

const generateFilters = () => {
  return filterNames.map((filterName) => {
    return {
      name: filterName,
      count: Math.floor(Math.random() * 10),
    };
  });
};

export {generateFilters};

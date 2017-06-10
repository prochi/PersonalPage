export const selectCategory = (category) => {
  console.log(category.name);
  return {
    type: "WORKCATEGORY_SELECTED",
    payload: category
  }
};

export const selectPage = (page) => {
  console.log(page.name);
  return {
    type: "PAGE_SELECTED",
    payload: page
  }
};
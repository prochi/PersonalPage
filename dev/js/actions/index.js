export const selectCategory = (category) => {
  console.log(category.name);
  return {
    type: "WORKCATEGORY_SELECTED",
    payload: category
  }
};
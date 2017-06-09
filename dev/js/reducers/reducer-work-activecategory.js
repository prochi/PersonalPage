export default function (state={ id: 1, name: "All" }, action) {
  switch(action.type) {
    case "WORKCATEGORY_SELECTED":
      return action.payload;
      break;
  }
  return state;
}

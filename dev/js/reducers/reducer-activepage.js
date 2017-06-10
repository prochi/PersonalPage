const initialState = {
  id: 1,
  name: "Profile",
  link: "/"
}

export default function (state = initialState, action) {
  switch(action.type) {
    case "PAGE_SELECTED":
      return action.payload;
      break;
  }
  return state;
}

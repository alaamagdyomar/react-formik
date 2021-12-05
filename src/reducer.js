import { Input } from "antd";

export const initialState = {
  items: [
    {
      id: "1",
      name: "Alaa Magdy",
      egyptPrice: "150",
      ksaPrice: "1554 R",
      dubaiPrice: "5464 D",
      // render: () => <Input type="text" />,
      // tags: ["nice", "developer"],
    },
    {
      id: "2",
      name: "James Rodreges",
      egyptPrice: "15000 ",
      ksaPrice: "1000 R",
      dubaiPrice: "1000 D",
      // tags: ["loser"],
    },
    {
      id: "3",
      name: "Joe Black",
      egyptPrice: "15000",
      ksaPrice: "1000 R",
      dubaiPrice: "1000 D",
    },
    {
      id: "4",
      name: "Alaa Magdy",
      egyptPrice: "15000",
      ksaPrice: "1000 R",
      dubaiPrice: "1000 D",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_Item":
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case "REMOVE_FROM_ITEM":
      break;

    default:
      return state;
  }
};

export default reducer;

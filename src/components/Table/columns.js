// // import React from "react";
// import { keys } from "@material-ui/core/styles/createBreakpoints";
// import { Field } from "formik";
// // import { v4 as uuid } from "uuid";

// const HandleColumn = () => {
//   const partition = [
//     [
//       {
//         id: "1",
//         name: "Tea",
//       },
//       {
//         id: "2",
//         name: "Nescafe",
//       },
//       {
//         id: "3",
//         name: "Coffe",
//       },
//       {
//         id: "4",
//         name: "HotChocolate",
//       },
//       {
//         id: "5",
//         name: "Mango",
//       },
//       {
//         id: "6",
//         name: "Lemon",
//       },
//     ],
//     [
//       {
//         id: "1",
//         location: "Cairo's Price",
//       },
//       {
//         id: "2",
//         location: "Alex's Price",
//       },
//       {
//         id: "3",
//         location: "sharm's Price",
//       },
//       {
//         id: "4",
//         location: "Herghada's Price",
//       },
//     ],
//   ];

//   // handle columns
//   const columnList = (partition) => {
//     const keys = partition[0].map((location) => {
//       return location.id;
//     });
//     const titles = partition[1].map((location) => {
//       return location.location;
//     });
//     // const render = (props) => {
//     //   return <Field name={`items.${props.name}`} />;
//     // };

//     console.log("keys =", keys);
//     console.log("titles =", titles);
//     let columns = [];
//     columns.push({
//       key: keys.map((key) => key),
//       title: titles.map((title) => title),
//     });
//     console.log("columns edited =", columns);
//     return columns;
//   };

//   return (
//     <div>
//       handling columns<span>{columnList(partition)}</span>
//     </div>
//   );
// };

// export default HandleColumn;

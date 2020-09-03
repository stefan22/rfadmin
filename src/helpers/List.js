import React from "react";

const List = props => {
  const { items, item: Item } = props;

  return (
    <>
      {items.map((itm, idx) => (
        <Item key={idx} {...itm} />
      ))}
    </>
  );
};

export default List;

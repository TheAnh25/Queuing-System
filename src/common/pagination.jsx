import { Pagination } from "antd";
import { useState } from "react";
import React from "react";

const PaginationItem = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
  };
  return <Pagination current={current} onChange={onChange} total={95} />;
};

export default PaginationItem;

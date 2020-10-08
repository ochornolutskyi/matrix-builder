import React from "react";
import { useSelector } from "react-redux";
import "./Main.scss";
import Table from "./Table";

const NoDataView = (
   <p className="empty-table">Please, set the starting settings of the table</p>
);

const Main = () => {
   const matrixData = useSelector((state) => !!state.matrix.data.length);
   return <main className="main">{matrixData ? <Table /> : NoDataView}</main>;
};

export default Main;

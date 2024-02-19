import React, { useState } from 'react';
import './App.css';
import { ColumnsType } from "antd/es/table";
import { Typography } from 'antd';
import { Col, Row, Select, Table } from "antd";
const { Title, Text } = Typography;

//To specify object type
type Shoes = {
  shoeType: string,
  manufacturer: string,
  color: string,
  size: number

}

//To specify array type
const dataSource = [
  {
    shoeType: "Loafers",
    manufacturer: "New Balance",
    color: "red",
    size: 41
  },
  {
    shoeType: "Ballet Flats",
    manufacturer: "Under Armour",
    color: "white",
    size: 40
  },
  {
    shoeType: "Ballet Flats",
    manufacturer: "Under Armour",
    color: "white",
    size: 40
  },
  {
    shoeType: "Heels",
    manufacturer: "Ego",
    color: "Black",
    size: 38
  },
  {
    shoeType: "Ballet Flats",
    manufacturer: "Under Armour",
    color: "green",
    size: 36
  },
  {
    shoeType: "Loafers",
    manufacturer: "New Balance",
    color: "red",
    size: 41
  },
  {
    shoeType: "Boots",
    manufacturer: "Addidas",
    color: "Black",
    size: 37
  },
  {
    shoeType: "Loafers",
    manufacturer: "New Balance",
    color: "Blue",
    size: 39
  },
  {
    shoeType: "Sneakers",
    manufacturer: "Nike",
    color: "Blue",
    size: 36
  },
  {
    shoeType: "Sneakers",
    manufacturer: "New Balance",
    color: "Blue",
    size: 40
  },
  {
    shoeType: "Boots",
    manufacturer: "Nike",
    color: "Red",
    size: 42
  },
  {
    shoeType: "Heels",
    manufacturer: "Under Armour",
    color: "White",
    size: 40
  },
]
function App() {

  const [type, setType] = useState("")

  const columns: ColumnsType<Shoes> = [
    {
      title: "Shoe Type",
      dataIndex: "shoeType",
      key: "shoeTYpe",
    },
    {
      title: "Manufacturers",
      dataIndex: "manufacturer",
      key: "manufacturers",
    },
    {
      title: "Colours",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Sizes",
      dataIndex: "size",
      key: "size",
    }
  ]

  return (
    <div className="App">
      <h1>Oma's Shoes</h1>
      <select key="manufacturer" value="All Manufacturers" onChange={}>
        All Manufacturers
        <option value="Under Armour">Under Armour</option>
        <option value="New Balance">New Balance</option>
        <option value="Nike">Nike</option>
        <option value="Addidas">Addidas</option>
      </select>
      <Row style={{}}>
        <Col span={24}>
        </Col>
      </Row>
      <Table
        dataSource={dataSource}
        columns={columns}
        locale={{ emptyText: "No orders found" }}
      />
    </div>
  );
}

export default App;

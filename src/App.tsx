import React, { useState } from 'react';
import './App.css';
import { ColumnsType } from "antd/es/table";
import { Typography } from 'antd';
import { Col, Row, Select, Table } from "antd";
const { Title, Text } = Typography;
const { Option } = Select;

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
    id: 1,
    shoeType: "Loafers",
    manufacturer: "New Balance",
    color: "Red",
    size: 41
  },
  {
    id: 2,
    shoeType: "Ballet Flats",
    manufacturer: "Under Armour",
    color: "White",
    size: 40
  },
  {
    id: 3,
    shoeType: "Ballet Flats",
    manufacturer: "Under Armour",
    color: "White",
    size: 40
  },
  {
    id: 4,
    shoeType: "Heels",
    manufacturer: "Ego",
    color: "Black",
    size: 38
  },
  {
    id: 5,
    shoeType: "Ballet Flats",
    manufacturer: "Under Armour",
    color: "Green",
    size: 36
  },
  {
    id: 6,
    shoeType: "Loafers",
    manufacturer: "New Balance",
    color: "Red",
    size: 41
  },
  {
    id: 7,
    shoeType: "Boots",
    manufacturer: "Addidas",
    color: "Black",
    size: 37
  },
  {
    id: 8,
    shoeType: "Loafers",
    manufacturer: "New Balance",
    color: "Blue",
    size: 39
  },
  {
    id: 9,
    shoeType: "Sneakers",
    manufacturer: "Nike",
    color: "Blue",
    size: 36
  },
  {
    id: 10,
    shoeType: "Sneakers",
    manufacturer: "New Balance",
    color: "Blue",
    size: 40
  },
  {
    id: 11,
    shoeType: "Boots",
    manufacturer: "Nike",
    color: "Red",
    size: 42
  },
  {
    id: 12,
    shoeType: "Heels",
    manufacturer: "Under Armour",
    color: "White",
    size: 40
  },
]
function App() {

  const [shoesType, setShoesType] = useState("")
  const [shoeColors, setShoeColors] = useState("")
  const [allShoes, setAllShoes] = useState<Shoes[]>(dataSource)
  const [selectedShoes, setSelectedShoes] = useState<Shoes[]>(dataSource)

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

      <Select value={shoesType} onChange={(newShoeType: any) => {
        setShoesType(newShoeType);
        if (newShoeType) {
          setSelectedShoes(allShoes.filter((item) => {
            return newShoeType === item.manufacturer
          }))
        }
        else {
          setSelectedShoes(allShoes)
        }

      }}>
        <option key="allManufacturers" value="">All Manufacturers</option>
        <option key="underArmour" value="Under Armour">Under Armour</option>
        <option key="New Balance" value="New Balance">New Balance</option>
        <option key="Nike" value="Nike">Nike</option>
        <option key="Addidas" value="Addidas">Addidas</option>
      </Select>

      <Select value={shoeColors} onChange={(newShoeColor: any) => {
        setShoesType(newShoeColor);
        if (newShoeColor) {
          setSelectedShoes(allShoes.filter((item) => {
            return newShoeColor === item.color
          }))
        }
        else {
          setSelectedShoes(allShoes)
        }

      }}>
        <option key="allColours" value="">All Colours</option>
        <option key="Red" value="Red">Red</option>
        <option key="Green" value="Green">Green</option>
        <option key="White" value="White">White</option>
        <option key="Black" value="Black">Black</option>
        <option key="Blue" value="Blue">Blue</option>
      </Select>
      <Row style={{}}>
        <Col span={24}>
        </Col>
      </Row>
      <Table
        dataSource={selectedShoes}
        columns={columns}
        locale={{ emptyText: "No orders found" }}
      />
    </div>
  );
}

export default App;

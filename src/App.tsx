import React from 'react';
import './App.css';

function App() {

  //To specify object type
  type Shoes = {
    shoeType: string,
    manufacturer: string,
    color: string,
    size: number

  }
  //To specify array type
  const shoes = [
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

  return (
    <div className="App">
      <h1>Oma's Shoes</h1>
    </div>
  );
}

export default App;

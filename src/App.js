import './App.css';

import { NavBar } from "./component/NavBar";
import { WelcomeMessage } from "./component/WelcomeMessage/WelcomeMessage";
import { Card } from "./component/Card/Card";
import { Footer } from "./component/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <WelcomeMessage 
          title="A Warm Welcome!"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quos dolore fugiat porro animi rem eum earum, quod voluptatum dolorem
          soluta laudantium quo architecto ad error."/>
        <div className="grid gap-2 my-3">
          <Card
            imageName="praga-building.jpg"
            title="Proyect 1"
            text="Voluptates, quos dolore porro animi rem eum earum, quod voluptatum dolorem solu quo architecto ad error."
          />
          <Card
            imageName="Building.jpg"
            title="Proyect 2"
            text="Voluptates, quos dolore fugiat porro animi rem eum earum, quod voluptatum dolorem soluta laudantium quo architecto ad error."
          />
          <Card
            imageName="BrooklynBridge.jpg"
            title="Proyect 1"
            text="Voluptates, quos dolore fugiat porro, quod voluptatum dolorem soluta laudantium quo architecto ad error."
          />
          <Card
            imageName="green.jpg"
            title="Proyect 1"
            text="Voluptates, quos dolore fugiat porro animi rem earum, soluta laudantium quo architecto ad error."
          />
        </div>
      </div>
      <Footer text="Copyright © Your Website 2023"></Footer>
    </>
  );
}

export default App;

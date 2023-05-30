import './App.css';

import { NavBar } from "./component/NavBar/NavBar";
import { WelcomeMessage } from "./component/WelcomeMessage/WelcomeMessage";
import { Card } from "./component/Card/Card";
import { Footer } from "./component/Footer/Footer";

import { cardData } from "./component/Data";

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
          {cardData.map(item =>
            <Card 
            imageName={item.imageName}
            title={item.title}
            text={item.text}/>
          )}
        </div>
      </div>
      <Footer text="Copyright © Your Website 2023"></Footer>
    </>
  );
}

export default App;

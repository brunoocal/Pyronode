import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Minecraft from "../Pages/Minecraft";
import Discord from "../Pages/Discord";
import TS3 from "../Pages/TS3";
import WebHosting from "../Pages/WebHosting";
import VPS from "../Pages/VPS";
import NotFound from "../Pages/NotFound";

import "../styles/Responsive.css";

const App = () => {
  const [angle, setScreenOrientation] = React.useState(0);

  window.addEventListener("orientationchange", function (event) {
    if (event.target.screen.orientation.angle !== undefined) {
      console.log(
        "the orientation of the device is now " +
          event.target.screen.orientation.angle
      );

      setScreenOrientation(event.target.screen.orientation.angle);
      window.location.reload();
    }
  });

  window.addEventListener(
    "resize",
    function () {
      setScreenOrientation(angle === 0 ? 90 : 0);
      window.location.reload();
    },
    false
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/minecraft" component={Minecraft} />
        <Route exact path="/discord" component={Discord} />
        <Route exact path="/voice" component={TS3} />
        <Route exact path="/web" component={WebHosting} />
        <Route exact path="/vps" component={VPS} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

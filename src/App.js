/**
 * TODO
 *
 
 * - disable arrow keys
 * - KMO flow
 
 * - show liberty Web and NexxtMove on welcome page
 */

import "./styles.css";
import * as React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LinearProgress from "@mui/material/LinearProgress";
import ImageScreen from "./ImageScreen";

import { Screens } from "./Content";

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_ESCAPE = 27;

const steps = [
  "Uw info",
  "Company info",
  "Offerte",
  "Configure cards",
  "Termas and conditions",
  "Welcome to Q8!"
];

// Create a Context
export const DenaliContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

const initialCart = {};

const cartContainsSolution = function (cart, solution) {
  return cart[solution] && Object.keys(cart[solution]).length > 0;
};

const cartTooLarge = function (cart) {
  if (cart.fuel) {
    console.log(cart.fuel);
    const fuelcards = Object.values(cart.fuel).reduce(
      (f_accumulator, f_value) => {
        return f_accumulator + f_value;
      },
      0
    );
    if (fuelcards > 2) return true;
  }

  let chargers = 0;
  if (cart.homechargers) {
    chargers = Object.values(cart.homechargers).reduce(
      (f_accumulator, f_value) => {
        return f_accumulator + f_value;
      },
      chargers
    );
  }
  if (cart.officechargers) {
    chargers = Object.values(cart.officechargers).reduce(
      (f_accumulator, f_value) => {
        return f_accumulator + f_value;
      },
      chargers
    );
  }
  if (chargers > 2) return true;

  return false;
};

export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeScreen, setActiveScreen] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const [cart, setCart] = React.useState(initialCart);
  const [solution, setSolution] = React.useState({});

  function prevScreen(e) {
    if (activeScreen > 0) {
      const newActiveScreen = calculatePrevScreen();
      setActiveScreen(newActiveScreen);
      const newProgress = (100 / (Screens.length - 1)) * newActiveScreen;
      setProgress(newProgress);
      window.scrollTo(0, 0);
    }
  }

  function nextScreen(e) {
    if (activeScreen < Screens.length - 1) {
      const newActiveScreen = calculateNextScreen();
      setActiveScreen(newActiveScreen);
      const newProgress = (100 / (Screens.length - 1)) * newActiveScreen;
      setProgress(newProgress);
      window.scrollTo(0, 0);
    }
  }

  const CONFIGURE_CARDS = 6;
  const CONFIGURE_CHARGERS = 7;

  function calculatePrevScreen() {
    let nextActiveScreen = activeScreen - 1;
    // if order is VSE
    if (cartTooLarge(cart) && nextActiveScreen === CONFIGURE_CARDS) {
      return nextActiveScreen - 1;
    }

    if (cartTooLarge(cart) && nextActiveScreen === CONFIGURE_CHARGERS) {
      return nextActiveScreen - 2;
    }
    // if cart contains fuel or EV charge pass

    // if cart contains homecharger and nextActiveScreen is configure charger
    if (
      !cartContainsSolution(cart, "homechargers") &&
      nextActiveScreen === CONFIGURE_CHARGERS
    ) {
      nextActiveScreen--;
    }

    if (
      !cartContainsSolution(cart, "fuel") &&
      !cartContainsSolution(cart, "chargepass") &&
      nextActiveScreen === CONFIGURE_CARDS
    ) {
      nextActiveScreen--;
    }

    return nextActiveScreen;
  }

  function calculateNextScreen() {
    let nextActiveScreen = activeScreen + 1;
    // if order is VSE
    if (cartTooLarge(cart) && nextActiveScreen === CONFIGURE_CARDS) {
      return nextActiveScreen + 2;
    }

    if (cartTooLarge(cart) && nextActiveScreen === CONFIGURE_CHARGERS) {
      return nextActiveScreen + 1;
    }

    if (
      !cartContainsSolution(cart, "fuel") &&
      !cartContainsSolution(cart, "chargepass") &&
      nextActiveScreen === CONFIGURE_CARDS
    ) {
      // if cart contains fuel or EV charge pass

      nextActiveScreen++;
    }
    // if cart contains homecharger and nextActiveScreen is configure charger
    if (
      !cartContainsSolution(cart, "homechargers") &&
      nextActiveScreen === CONFIGURE_CHARGERS
    ) {
      nextActiveScreen++;
    }

    return nextActiveScreen;
  }

  React.useEffect(() => {
    function handleKeyDown(e) {
      switch (e.keyCode) {
        case KEY_ESCAPE:
          setActiveScreen(0);
          break;
        case KEY_LEFT:
          prevScreen();
          break;
        case KEY_RIGHT:
          nextScreen();
          break;
        default:
        // do nothing
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextScreen, prevScreen, setActiveScreen]);

  const context = {
    setActiveScreen: setActiveScreen,
    nextScreen: nextScreen,
    prevScreen: prevScreen,
    cart: cart,
    setCart: setCart,
    solution: solution,
    setSolution: setSolution
  };

  const currentScreen = Screens[activeScreen];

  const containerClass = currentScreen.fullWidth
    ? "flatTop"
    : "container flatTop";

  if (currentScreen.screen === undefined && currentScreen.image) {
    return (
      <DenaliContext.Provider value={context}>
        <div>
          <DenaliContext.Consumer>
            {(value) => (
              <ImageScreen
                key={currentScreen.image}
                src={currentScreen.image}
                alt={currentScreen.image}
                resolution="2x"
              ></ImageScreen>
            )}
          </DenaliContext.Consumer>
        </div>
      </DenaliContext.Provider>
    );
  }

  return (
    <DenaliContext.Provider value={context}>
      <div className="App">
        <div className="prop">
          <img className="prop" src="/img/header.jpg" alt="header" />
        </div>
        <div className="container flatBottom flatTop">
          <h1>{currentScreen.title}</h1>
          {false && (
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                // if (isStepSkipped(index)) {
                //   stepProps.completed = false;
                // }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          )}
          <LinearProgress
            thickness={4}
            height={10}
            style={{ height: 10 }}
            variant="determinate"
            value={progress}
          />
          <h2>{currentScreen.subtitle}</h2>
        </div>
        <div className={containerClass}>
          <Box component="form" noValidate autoComplete="off">
            <DenaliContext.Consumer>
              {(value) => currentScreen.screen}
            </DenaliContext.Consumer>
          </Box>
        </div>
        <div className="prop">
          <img className="prop" src="/img/doormat.jpg" alt="doormat" />
        </div>
        <div className="prop">
          <img className="prop" src="/img/footer.jpg" alt="footer" />
        </div>
      </div>
    </DenaliContext.Provider>
  );
}

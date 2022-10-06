import LandingPage from "./screens/LandingPage";
import ShoppingCart from "./screens/ShoppingCart";
import PersonalInfo from "./screens/PersonalInfo";
import CompanyInfo from "./screens/CompanyInfo";
import CompanyDetails from "./screens/CompanyDetails";
import Quote from "./screens/Quote";
import Configure from "./screens/Configure";
import ConfigureChargers from "./screens/ConfigureChargers";
import TermsConditions from "./screens/TermsConditions";
import Contacts from "./screens/Contacts";
import SignContract from "./screens/SignContract";
import OrderStatus from "./screens/OrderStatus";
import WelcomeToQ8 from "./screens/WelcomeToQ8";
import SignFlow from "./screens/SignFlow";
import SignSepa from "./screens/SignSepa";

export const Solutions = {
  fuel: {
    title: "Een fuel oplossing",
    summary:
      "Ut qui esse lorem labore quis pariatur amet excepteur laboris aliquip eiusmod cupidatat sit elit tempor fugiat ut esse do amet ullamco amet aliquip ut excepteur n quis incididunt aliquip dolor incididunt officia sit consectetur",
    products: [
      {
        code: "fuel_small",
        title: "Personenenvervoer: aantal kaarten",
        description: "U kunt uw kaarten online configureren"
      },
      {
        code: "fuel_large",
        title: "Groot vervoer: aantal kaarten",
        description: "Vrachtwagens, autobussen"
      }
    ],
    quote: "/media/quote/fuel.png"
  },
  chargepass: {
    title: "Een electric oplossing",
    summary:
      "Ut qui esse lorem labore quis pariatur amet excepteur laboris aliquip eiusmod cupidatat sit elit tempor fugiat ut esse do amet ullamco amet aliquip ut excepteur n quis incididunt aliquip dolor incididunt officia sit consectetur",
    products: [
      {
        code: "chargepass_1",
        title: "Hoeveel EV charge cards heeft u nodig?",
        description: "U kunt uw kaarten online configureren"
      }
    ],
    quote: "/media/quote/chargepass.png"
  },
  homechargers: {
    title: "Home Charging",
    summary:
      "Ut qui esse lorem labore quis pariatur amet excepteur laboris aliquip eiusmod cupidatat sit elit tempor fugiat ut esse do amet ullamco amet aliquip ut excepteur n quis incididunt aliquip dolor incididunt officia sit consectetur",
    products: [
      {
        code: "homechargers_black",
        title: "Smart Cable Black",
        description: "Laden tot 3kW op een normaal stopcontact"
      },
      {
        code: "homechargers_red",
        title: "Smart Cable Red",
        description: "Laden tot 11kW op een 5-fasig stopcontact (Mennekes)"
      },
      {
        code: "homechargers_wallbox",
        title: "Wallbox",
        description: "Een homecharger tot 22 kW"
      }
    ],
    quote: "/media/quote/home charger.png"
  },
  officechargers: {
    title: "Office Charging",
    summary:
      "Ut qui esse lorem labore quis pariatur amet excepteur laboris aliquip eiusmod cupidatat sit elit tempor fugiat ut esse do amet ullamco amet aliquip ut excepteur n quis incididunt aliquip dolor incididunt officia sit consectetur",
    products: [
      {
        code: "officechargers_hub",
        title: "EVBox Hub + Satellieten",
        description:
          "Een netwerk van Laadpalen, centraal beheerd. EvBox BusinessLine Double Socket, Hub, RCBO (3P-32A), MID’s, cover en Paal"
      },
      {
        code: "officechargers_wallbox",
        title: "AC Wallbox",
        description: "Laadstations met één of twee laadpunten van 3,7–22kW."
      },
      {
        code: "officechargers_laadpaal",
        title: "AC Laadpaal",
        description:
          "Een standalone laadpaal, op voet, met mogelijkheid tot eigen branding. Laadstations met één of twee laadpunten van 3,7–22kW"
      }
    ],
    quote: "/media/quote/office charger.png"
  }
};

export const Screens = [
  {
    screen: <LandingPage />,
    step: "Uw info",
    title: "Waarin bent u geïnteresseerd?",
    subtitle: "",
    fullWidth: true
  },
  {
    screen: <ShoppingCart />,
    step: "Bedrijfsinfo",
    title: "De Q8 totaaloplossing voor uw mobiliteit",
    subtitle: "Ik ben geïnteresseerd in:"
  },
  {
    screen: <PersonalInfo />,
    step: "Offerte",
    title: "Uw persoonlijke informatie",
    subtitle: "Uw persoonlijke informatie"
  },
  {
    screen: <CompanyInfo />,
    step: "Configure cards",
    title: "Bedrijfsinformatie",
    subtitle: "Informatie over uw bedrijf"
  },
  {
    screen: <CompanyDetails />,
    step: "Terms and conditions",
    title: "Bedrijfsinformatie",
    subtitle: "Informatie over uw bedrijf"
  },
  {
    screen: <Quote />,
    step: "Welkom bij Q8!",
    title: "Offerte",
    subtitle: "Uw offerte"
  },
  {
    screen: <Configure />,
    step: "Configureer",
    title: "Configureer uw kaarten",
    subtitle: ""
  },
  {
    screen: <ConfigureChargers />,
    step: "Configureer uw laadpaal",
    title: "Configureer uw home charger",
    subtitle: "Uw laadpaal"
  },
  {
    screen: <TermsConditions />,
    step: "Algemene voorwaarden",
    title: "Algemene voorwaarden",
    subtitle: "Algemene voorwaarden"
  },
  {
    screen: <SignContract />,
    step: "Tekenen",
    title: "Teken het contract voor uw bestelling",
    subtitle: "Kies een manier om te tekenen"
  },
  {
    image: "/media/docusign-02-signx100.png"
  },
  {
    screen: <SignSepa />,
    step: "Tekenen",
    title: "Registreer de domiciliering voor uw bestelling",
    subtitle: "Doe de SEPA registratie bij uw bank"
  },
  {
    image: "/media/twikey1x100.png"
  },
  {
    image: "/media/twikey2x100.png"
  },
  // {
  //   screen: <Contacts />,
  //   step: "Documenten en checks",
  //   title: "Documenten en checks",
  //   subtitle: "Uw aanvraag is bijna volledig"
  // },
  // {
  //   screen: <OrderStatus />,
  //   step: "Status",
  //   title: "Status van uw aanvraag/bestelling",
  //   subtitle: "Status van uw aanvraag/bestelling"
  // },
  {
    screen: <WelcomeToQ8 />,
    step: "Welcome",
    title: "Bestelling afgerond",
    subtitle: "Wij hebben uw bestelling goed ontvangen"
  }
];

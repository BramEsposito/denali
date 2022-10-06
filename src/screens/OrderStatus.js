import StatusItem from "../components/StatusItem";

export default function OrderStatus(props) {
  const content = [
    { title: "uw persoonlijke informatie", description: "", done: true },
    { title: "uw bedrijfsinformatie", description: "", done: true },
    { title: "configuratie van uw kaarten", description: "", done: true },
    { title: "algemene voorwaarden", description: "", done: true },
    {
      title: "Contract tekenen",
      description:
        "We sturen u een email om uw contract digitaal te ondertekenen",
      done: false
    },
    {
      title: "SEPA registreren",
      description:
        "We sturen u een aanvraag om uw incasso machtiging te registreren ",
      done: false
    }
  ];

  return content.map((item) => <StatusItem key={item.title} {...item} />);
}

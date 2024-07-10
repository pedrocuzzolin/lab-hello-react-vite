import Card from "./Card";

export default function Section() {
  const cardData = [
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
      title: "Declarative",
      descriptions: [
        "React makes it painless to create interactive UIs.",
        "Built encapsulated components that manage their state.",
        "A set of immutable values are passed to the component's.",
        "Statically-typed. designed to run on modern browsers.",
      ],
    },
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
      title: "Components",
      descriptions: [
        "React makes it painless to create interactive UIs.",
        "Built encapsulated components that manage their state.",
        "A set of immutable values are passed to the component's.",
        "Statically-typed. designed to run on modern browsers.",
      ],
    },
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
      title: "Single-way",
      descriptions: [
        "React makes it painless to create interactive UIs.",
        "Built encapsulated components that manage their state.",
        "A set of immutable values are passed to the component's.",
        "Statically-typed. designed to run on modern browsers.",
      ],
    },
    {
      img: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
      title: "JSX",
      descriptions: [
        "React makes it painless to create interactive UIs.",
        "Built encapsulated components that manage their state.",
        "A set of immutable values are passed to the component's.",
        "Statically-typed. designed to run on modern browsers.",
      ],
    },
  ];

  return (
    <section className="p-8 grid grid-cols-4 gap-[17.3px]">
      {cardData.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </section>
  );
}

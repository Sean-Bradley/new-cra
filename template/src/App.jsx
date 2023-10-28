function Item({ name, completed }) {
  return (
    <li className="item">
      {name} {completed && "✔"}
    </li>
  );
}

export default function App() {
  return (
    <section>
      <h1>{title}</h1>
      <ul>
        <Item completed={true} name="Prepared Basic React template" />
        <Item completed={true} name="Installed Dependencies" />
        <Item completed={true} name="App Started in Browser" />
      </ul>
    </section>
  );
}

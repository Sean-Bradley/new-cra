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
        <Item completed name="Prepared Basic React template" />
        <Item completed name="Installed Dependencies" />
        <Item completed name="App Started in Browser" />
        <Item name="You are now ready to start developing" />
      </ul>
    </section>
  );
}

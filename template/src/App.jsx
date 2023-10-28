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
      <h1>New-CRA Sample App</h1>
      <ul>
        <Item completed={true} name="Prepared Basic React template" />
        <Item completed={true} name="Installed Dependencies" />
        <Item completed={true} name="App started" />
      </ul>
    </section>
  );
}

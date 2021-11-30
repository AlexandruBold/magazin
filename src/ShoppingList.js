export default function ShoppingList(props) {
  let itemeC = props.itemeCumparate.map((item, index) => (
    <li key={index}> {item}</li>
  ));

  return (
    <div>
      <ul>{itemeC}</ul>
    </div>
  );
}

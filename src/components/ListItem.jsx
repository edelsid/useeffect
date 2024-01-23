export function ListItem({ item, fnc }) {
  return (
    <li className="entry person" onClick={ fnc }>
      <p className="value" id={ item.id }>{item.name}</p>
    </li>
  )
}

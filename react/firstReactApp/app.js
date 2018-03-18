
const ListItems = (props) => {
    return (
        <li> {props.item} </li>
    )
}

const ShoppingList = (props) => {
    return (
        <ul>
            {props.lists.map((item, i) => <ListItems key = {i} item = {item} /> )}
        </ul>
    )
}

const App = (props) => {
    return (
        <div>
            <h1>Shopping App</h1>
            <ShoppingList lists = {props.lists}/>
        </div>
    )
}
const root = document.getElementById('root');
const lists = ['bread', 'milk', 'eggs', 'cream', 'chocolate'];

ReactDOM.render(<App lists = {lists}/>, root);


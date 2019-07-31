// TODO
// var GrocecryList = ()=>(
//     <ul>
//         <li>Plantains</li>
//         <li>Milk</li>
//     </ul>
// )
// ReactDOM.render(<GrocecryList />, document.getElementById("app"))

// var GrocecryList = () =>(
//     <div>
//         <h2>My Grocecry List</h2>
//         <ul>
//             <Plantain />
//             <Milk />
//             <Kale />
//     </ul>
//     </div>
// )
// var Plantain = () => (
//     <li>Plantain</li>
// )

// var Milk = () => (
//     <li>Milk</li>
// )

// var Kale = () => (
//     <li>Kale</li>
// )

// var GrocecryListItem = (props) => (
//     <ul>
//         <li>{props.groceryItems[0]}</li>
//         <li>{props.groceryItems[1]}</li>
//         <li>{props.groceryItems[2]}</li>
//         <li>{props.groceryItems[3]}</li>
//     </ul>
// )

// var GrocecryList = () => (
//     <div>
//         <h2>My Grocey List</h2>
//         <GrocecryListItem groceryItems={["Plantains", "Milk", "Kale", "Tomatoes"]}/>
//     </div>
// )

// ReactDOM.render(<GrocecryList />, document.getElementById("app"))


// var GrocecryList = (props) => {
//     var onListItem = (event) => {
//         console.log('I got clicked')
//     }

//     var 

//     return (
//         <ul>
//             <li onClick={onListItem}>{props.groceryItems[0]}</li>
//             <li>{props.groceryItems[1]}</li>
//             <li>{props.groceryItems[2]}</li>
//             <li>{props.groceryItems[3]}</li>
//         </ul>
//     )
// }

// var Grocecry = () => (
//     <div>
//         <h2>My Grocecry List</h2>
//         <GrocecryList groceryItems={["Plantains", "Milk", "Kale", "Food"]} />
//     </div>
// )

// ReactDOM.render(<Grocecry />, document.getElementById("app"))


class GrocecryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }
    onGroceryListItemClick(){
        this.setState({
            done: !this.state.done
        })
    }

    render() {
        var style = {
            fontWeight: this.state.done? 'bold' : 'normal'
        }

        return (<li style={style} onClick={this.onGroceryListItemClick.bind(this)}>{this.props.groceryListItem}</li>)
    }
}


var GrocecryList = (props) => (
    <ul>
        <h2>My Grocecry List</h2>
        {props.groceryItems.map(groceryListItem=>
            <GrocecryListItem groceryListItem={groceryListItem}/>
        )}
    </ul>
)


var Grocecry = () => (
    <GrocecryList groceryItems={["Plantains", "Milk", "Kale", "Cream", "Butter"]}/>
)

ReactDOM.render(<Grocecry />, document.getElementById("app"))
import classes from "../styles/Table.module.css";
import Data from "../data";
import { useState } from "react";

export default function Table(){

    const [items, setItems] = useState(Data);
    const [todo, setTodo] = useState("")

    const searchedUpdate = (e) => {
        const inputValue = e.target.value;
        const searchedItems =  Data.filter((obj)=>{
            return obj['name'].toLowerCase().includes(inputValue);
        }, false);

        setTodo(inputValue);
        setItems(searchedItems);
    };

    var data = items.map((row) => {
        return (
            <tr>
                <td>{row.code}</td>
                <td>{row.name}</td>
                <td>{row.type}</td>
                <td>{row.availability.toString()}</td>
                <td>{row.needing_repair.toString()}</td>
                <td>{row.durability.toString()}</td>
                <td>{row.max_durability}</td>
                <td>{String(row.mileage)}</td>
                <td>{row.price}</td>
                <td>{row.minimum_rent_period}</td> 
            </tr>
        );

    })

    return(
        <>
        <input 
        type="search" 
        name="search-form" 
        id="search-form" 
        className={classes.searchInput} 
        placeholder="Search for..."
        value={todo}
        onChange={searchedUpdate}
        />
        <table className ={classes.products} id="products">
            <tr>
                <th>code</th>
                <th>name</th>
                <th>type</th>
                <th>availability</th>
                <th>needing_repair</th>
                <th>durability</th>
                <th>max_durability</th>
                <th>mileage</th>
                <th>price</th>
                <th>minimum_rent_period</th>
            </tr>
            {data}
        </table>
        </>
    );
}

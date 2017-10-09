function Title(props) {
    return (
        <div>
            <h2>{props.header}</h2>
            <p>{props.description}</p>
        </div>
    )
}

function Options(props) {

    const selectionType = [];
    
        selectionType.push(
            <option value ="All">All</option>            
        );
    for (let i = 0; i < props.selectionType.length; i++) {
        const selection = props.selectionType[i];

        selectionType.push(
            <option value ={selection}>{selection}</option>            
        );
    }

    return (
        <div>
            <h2>{props.header}</h2>
            
            <div>
                New Only
                <input type="checkbox" id="coding" name="interest" value="coding" checked/>
            </div>
            
            <div>
                <br />
                Select Type
                <select>{selectionType}</select>
            </div>
        </div>
    )
}

function Selection(props) {

    const tables = [];
    
    for (let i = 0; i < props.years.length; i++) {
        tables.push(
        <ul>
            <table>
                <tr>             
                    <th>Year</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
                <tr>
                    <td>{props.years[i]}</td>
                    <td>{props.models[i]}</td>
                    <td>{props.prices[i]}</td>
                    <td><button>Buy Now</button></td>
                </tr>
            </table>
        </ul>
        );
    }

    return (
        <div>
            <h2>{props.header}</h2>
            {tables}
        </div>
    )
}

function ReactTransportation() {
    return (
        <div>
            <Title
                header="Welcome to React Transportation"
                description="The best place to buy vehicles online"
            />
            <Options
                header="Choose Options"
                selectionType={["Cars", "Trucks", "Convertibles"]}
            />
            <Selection
                header="Cars"
                years={["2013", "2011", "2016"]}
                models={["A", "B", "B"]}
                prices={["$32,000", "$4,400", "$15,500"]}
            />
            <Selection
                header="Trucks"
                years={["2014", "2013"]}
                models={["D", "E"]}
                prices={["$18,000", "$5,200"]}
            />
            <Selection
                header="Convertibles"
                years={["2009", "2010", "2012", "2017"]}
                models={["F", "G", "H", "M"]}
                prices={["$2,000", "$6,000", "$12,500", "$50,000"]}
            />
        </div>
    )
}

ReactDOM.render(
    <ReactTransportation />,
    document.getElementById("root")
);
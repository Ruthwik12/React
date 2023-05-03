

const heading = React.createElement("h1", {id : "heading", xyz : "xytz"}, "Hello World from React");



const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "I am in nested H1"), React.createElement("h2", {}, "I am in nested H2")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
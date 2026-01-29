console.log("hello");

const parent = document.getElementById("container");
const root = ReactDOM.createRoot(parent);

// Elements
const h2 = React.createElement("h2", {}, "Welcome to React");

const li1 = React.createElement("li", {}, "Programming");
const li2 = React.createElement("li", {}, "Another Language");

const ul = React.createElement("ul", {}, li1, li2);

const img = React.createElement("img", {
    src: "https://reactjs.org/logo-og.png",
    width: "150",
    alt: "React Logo"
});

const div = React.createElement("div", {}, h2, ul, img);

// Render
root.render(div);

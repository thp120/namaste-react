// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react"
// );

// if we have multiple tags 

// const heading = React.createElement('div',{id:'parent'},
// React.createElement('div',{id:'child'},
// React.createElement('h1',{id:'heading'},'this is h1')
// )
// )

// if we siblings

const heading = React.createElement('div',{id:'parent'},
React.createElement('div',{id:'child'},
[React.createElement('h1',{id:'heading'},'this is h1'),React.createElement('h2',{id:'heading2'},'this is h2')]
)
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

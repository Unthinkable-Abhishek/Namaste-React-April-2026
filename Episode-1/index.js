// Tried to insert 3 children using loop

let allBox = [];
function box(){
    for (let index = 0; index < 3; index++) {
        const el = React.createElement(
            'div',
            { style: 
                {
                    border: '2px solid black',
                    margin: '10px',
                    flex: 1,
                    height: '50px',
                } 
            },
        )

        allBox.push(el);
    }
}
box();

// Creating a element is core thing for react
const heading = React.createElement('div', { style: {border: '2px solid black'} }, allBox);

// Creating a root is core thing for React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering a element on the dom, take the js obj and put it into the dom
root.render(heading);
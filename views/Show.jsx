const React = require('react');

function Show(props){
    const {veggie} = props;
    console.log(veggie);
    return(
        <div>
            <h1>Hello Show Page!</h1>
            <p>The {veggie.name} is {veggie.color} {veggie.readyToEat ? 'It is ready to eat' : 'It is not ready to eat... cant touch this' }</p>
        </div>
    );
};

module.exports = Show;
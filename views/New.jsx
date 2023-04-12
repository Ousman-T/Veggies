const React = require('react');

function New(){
    return(
        <div>
            <h1>New Page</h1>
            <form action='/veggies' method='POST'>
                Name:<input type='text' name='name'/>
                <br />
                Color: <input type='text' name='color'/>
                <br />
                Is ready to eat: <input type='checkbox' name='Ready to Eat'/>
                <br />
                <input type='submit' value="Create new vegetable"/>
            </form>
        </div>
    );
};

module.exports = New;
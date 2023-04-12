const React = require('react');


function Index(props){
    const {veggies} = props;
    console.log(veggies);
    return(
        <div>
            <nav>
                <a href='/veggies/new'>Create a new Vegetable</a>
            </nav>
            <h1>Vegetable Index Page</h1>
            <ul>
                {veggies.map((veggies, i) => {
                    return(
                        <li key={veggies._id}>
                            The <a href={`/veggies/${veggies._id}`}>{veggies.name}</a> {" "} is {veggies.color} {veggies.readyToEat ? 'It is ready to eat' : 'It is not ready to eat.'}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

module.exports = Index;
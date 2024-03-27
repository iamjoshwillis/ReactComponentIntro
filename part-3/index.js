const App = () => (
    <div>
        <Person name="Josh" age="30" hobbies={["coding", "training", "playing tunes"]} />
        <Person name="Cait" age="30" hobbies={["running", "cooking"]} />
        <Person name="Bootsalina" age="8" hobbies={["sleeping", "eating"]} />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
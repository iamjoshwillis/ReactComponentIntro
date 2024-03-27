const FirstComponent = () => {
    return (<h1>My very first component.</h1>)
}

const App = () => (
        <div>
            <FirstComponent />
            <NamedComponent name="Josh Willis" />
        </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
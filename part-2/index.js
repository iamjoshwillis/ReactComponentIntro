const App = () => {
    return (
        <div>
            <Tweet username="josh" name="JoshW" date="3/27/24" message="I'm learning React!"/>
            <Tweet username="iamjoshwillis" name="Josh Willis" date="3/28/24" message="I like React a lot so far"/>
            <Tweet username="joshw1112" name="Willis Josh" date="3/29/24" message="Whoohoo this is an app"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
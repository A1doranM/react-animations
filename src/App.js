import "./App.css";
import {useEffect, useState} from "react";
import {CSSTransition, Transition} from "react-transition-group";

function App() {
    const [loaderVisible, setLoaderVisible] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoaderVisible(true)
    //     }, 2000);
    //     setTimeout(() => {
    //         setLoaderVisible(false)
    //     }, 5000);
    // }, []);

    const toggleLoader = () => {
        setLoaderVisible(!loaderVisible);
    }

    return (
        <div className="App">
            <button onClick={toggleLoader}>{loaderVisible ? "hide" : "show"}</button>
            <div className="wrap">
                {/*<Transition*/}
                {/*    in={loaderVisible}*/}
                {/*    timeout={500}*/}
                {/*    mountOnEnter*/}
                {/*    unmountOnExit*/}
                {/*    onEnter={() => {*/}
                {/*        console.log("Entered")*/}
                {/*    }}*/}
                {/*    onEntering={() => {*/}
                {/*        console.log("onEntering")*/}
                {/*    }}*/}
                {/*    onExit={() => {*/}
                {/*        console.log("onExit")*/}
                {/*    }}*/}
                {/*    onExiting={() => {*/}
                {/*        console.log("onExiting")*/}
                {/*    }}*/}
                {/*    onExited={() => {*/}
                {/*        console.log("onExited")*/}
                {/*    }}*/}

                {/*>*/}
                {/*    {state => {*/}
                {/*        return <div className={`circle ${state}`}/>*/}
                {/*    }}*/}
                {/*</Transition>*/}

                <CSSTransition
                    in={loaderVisible}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                    onEnter={() => {
                        console.log("Entered")
                    }}
                    onEntering={() => {
                        console.log("onEntering")
                    }}
                    onExit={() => {
                        console.log("onExit")
                    }}
                    onExiting={() => {
                        console.log("onExiting")
                    }}
                    onExited={() => {
                        console.log("onExited")
                    }}

                >
                    {state => {
                        return <div className={`circle ${state}`}/>
                    }}
                </CSSTransition>

            </div>
        </div>
    );
}

export default App;

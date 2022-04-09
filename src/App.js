import "./App.css";
import {useEffect, useState} from "react";
import {CSSTransition, Transition, SwitchTransition} from "react-transition-group";

function App() {
    const [loaderVisible, setLoaderVisible] = useState(false);
    const [mode, setMode] = useState("out-in");
    const [toggle, setToggle] = useState(false);

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

    function changeHandler(e) {
        setMode(e.target.value);
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
                    classNames="circle"
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

                <div>
                    <div>
                        <label className="label"></label>
                        <input onChange={changeHandler} type="radio" id="out-in" value="out-in" name="radio"/>
                        <label className="label"></label>
                        <input onChange={changeHandler} type="radio" id="in-out" value="in-out" name="radio"/>
                    </div>
                    <SwitchTransition mode={mode}>
                        <CSSTransition
                            key={toggle}
                            timeout={500}
                            classNames="fade"
                        >
                            <button onClick={() => setToggle((!toggle))}>
                                {toggle ? "Hello" : "Goodbye"}
                            </button>
                        </CSSTransition>
                    </SwitchTransition>
                </div>

            </div>
        </div>
    );
}

export default App;

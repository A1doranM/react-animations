import "./App.css";
import {useEffect, useState} from "react";
import {CSSTransition, Transition, SwitchTransition, TransitionGroup} from "react-transition-group";

function App() {
    const [loaderVisible, setLoaderVisible] = useState(false);
    const [mode, setMode] = useState("out-in");
    const [toggle, setToggle] = useState(false);
    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState([
        {id: 1, text: "Test1"},
        {id: 2, text: "Test2"},
        {id: 3, text: "Test3"}
    ]);

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

    function addTodo() {
        setTodoList([...todoList, {id: Date.now(), text}]);
    }

    function removeTodo(id) {
        setTodoList([...todoList.filter(todo => todo.id !== id)]);
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
                        <label className="label" htmlFor="out-in">Out in</label>
                        <input onChange={changeHandler} type="radio" id="out-in" value="out-in" name="radio"/>
                        <label className="label" htmlFor="in-out">In out</label>
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

                <div>
                    <div>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                        <button onClick={addTodo}>Add</button>
                    </div>
                    <TransitionGroup component="ul">
                        <ul>
                            {todoList.map(({id, text}) => {
                                return (
                                    <CSSTransition
                                        key={id}
                                        timeou={500}
                                        classNames="todo"
                                    >
                                        <li className="todo"
                                            onClick={() => removeTodo(id)}
                                        >
                                            {id}, {text}
                                        </li>
                                    </CSSTransition>
                                );
                            })}
                        </ul>
                    </TransitionGroup>
                </div>


            </div>
        </div>
    );
}

export default App;

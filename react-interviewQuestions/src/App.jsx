import CryptoDashboard from "./33.CrypptoDashboard/CryptoDashboard";
import "./App.css";
import { useState } from "react";
// import Modal from './3.custModal/Modal'
// import ShoppingList from './4.ShoppingList/ShoppingList'
// import Accordian from './interviewKPMG/Accordian'
// import PostList from './5.CustomHookAPI/PostList'
// import Parent from './6.ChildToParentFdata/Parent'
// import TrafficLight from './9.TrafficLight/TrafficLight'
// import Carousel from './10.Carousel/Carousel'
// import Post from './11.Pagination/Post'

// import ReactPattern from './react-patterns-questions/ReactPattern'
// import ThemeProvider from "./12.ContextAPI Project/ThemeProvider";
// import Home from "./12.ContextAPI Project/Home";
// import CounterApp from "./13.UseReducerHooks/CounterApp";
// import CounterApp from "./13.UseReducerHooks/CounterApp";
// import AutoFocus from "./14.UseRef-Hooks/AutoFocus";
// import TrackPreviousValue from "./14.UseRef-Hooks/TrackPreviousValue";
// import ScrolltoSectionExample from "./14.UseRef-Hooks/ScrolltoSectionExample";
// import FetchUsers from "./15.UseMemoHooks/FetchUsers";
// import ProductTable from "./17.Load More API/ProductTable";
// import DebouncedSearch from "./18.Debounce/DebounceSearch";
// import ThrottledButton from "./19.Throttle/ThrottleButton";
// import DropdownExample from "./21.Dropdown/DropdownExample";
// import StartStopPause from "./22.StartStopPause/StartStopPause";
// import StopWatch from "./23.StopWatch/StopWatch";
// import Tabs from "./24.Tabs/Tabs";
//import InfiniteScroll from "./25.InfiniteScroll/InfiniteScroll";
// import DragDrop from "./26.DragDrop/DragDrop";
// import Dashboard from "./27.HOC/Dashboard";
// import withAuth from "./27.HOC/withAuth";
// import withDarkMode from "./27.HOC/withDarkMode";

// import CounterClassComponent from "./28.LifCycleMethods/CounterClassComponent";
// import CounterFuncComponent from "./28.LifCycleMethods/CounterFuncComponent";

// import AutoComplete from "./29.AutoComplete/AutoComplete";
// import StarRating from "./30.StarRating/StartRating";
// import Example1 from "./32.React State Management Concepts/Example1";
// import Fetch from "./FETCH_https/fetch";

function App() {
  // const AuthDash = withAuth(Dashboard)
  // const AuthDash = withDarkMode(withAuth(Dashboard))

    const [selectedRating, setSelectedRating] = useState(0);

  return (
    <>
      {/* <Modal/>  */}
      {/* <ShoppingList/> */}
      {/* <Accordian/> */}
      {/* <PostList/>        */}
      {/* <Parent/> */}
      {/* <TrafficLight/> */}
      {/* <Carousel/> */}
      {/* <Post/> */}
      {/* <ReactPattern/> */}
      {/* <ThemeProvider>
        <Home />
      </ThemeProvider> */}
      {/* <CounterApp/> */}
      {/* <AutoFocus/> */}
      {/* <TrackPreviousValue/> */}
      {/* <ScrolltoSectionExample/> */}
      {/* <FetchUsers /> */}
      {/* <ProductTable/> */}
      {/* <DebouncedSearch/> */}
      {/* <ThrottledButton /> */}
      {/* <DropdownExample/> */}
      {/* <StartStopPause/> */}
      {/* <StopWatch /> */}
      {/* <Tabs /> */}
      {/* <InfiniteScroll/> */}
      {/* <DragDrop /> */}
      {/* <AuthDash/> */}
      {/* <CounterClassComponent/>
      <CounterFuncComponent/> */}
      {/* <AutoComplete/> */}

      {/* <div style={{ padding: "40px", fontFamily: "Arial" }}>
        <h1>⭐ React Star Rating </h1>
        <StarRating
          totalStars={5}
          onChange={(rating) => setSelectedRating(rating)}
        />
        <h2 style={{ marginTop: "20px" }}>Selected Rating: {selectedRating}</h2>
      </div> */}


      {/* <Example1/> */}
      {/* <Fetch/> */}
      <CryptoDashboard/>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Component } from "react";

const ReactPattern = () => {
  return (
    <div>
      <h1>ReactPattern</h1>
      <hr></hr>
      <HelloWord />
      <Grettings name="Shivam" />
      <Grettings2 />
      <Fruitelist />
      <User />
      <AlertButton />
      <Clock />
      <Parent />
      <ParentComp />
      <UserList />
      <TableList />
      <Counter />
      <Counter2 />
      <Counter3 />
      <InputFieldTextUpdate />
      <Toggele />
      <HandleEventList />
      <FormInput />
      <MultiInputForm />
      <CheckboxDemo />
      <RadioChoice />
      <NestedList />
      <ParentNestedComponent />
    </div>
  );
};

export default ReactPattern;

//? Create a functional component that displays "Hello World"

function HelloWord() {
  return <h2>Hello World....</h2>;
}

//? Class component that accepts name prop and displays "Hello {name}".

class Grettings extends Component {
  render(props) {
    return <h2>{`Welcome ${this.props.name}`}</h2>;
  }
}

//? Convert the above class component to a functional component.

function Grettings2({ name }) {
  return <h2>{`Welcome ${name}`}</h2>;
}

//? Render a list of items using .map().

const fruits = ["oranges", "bananna", "watermelon"];

const Fruitelist = () => {
  return (
    <ul>
      {fruits.map((fruit, i) => (
        <li key={i + 1}>{fruit}</li>
      ))}
    </ul>
  );
};

//? Render a component conditionally.

function User() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      <h2>
        {isLoggedIn ? "Weclcome to world of UI" : "Logout.... please try again"}{" "}
      </h2>
      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        {isLoggedIn ? "Logout" : "login"}
      </button>
    </div>
  );
}

//?  Create a button that shows an alert on click.

function AlertButton() {
  const handleAlertClick = () => alert("alert...");
  return (
    <button style={{ marginTop: "30px" }} onClick={handleAlertClick}>
      {"Click Me for Alert"}
    </button>
  );
}

//?  Display current date and time using state.

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      500
    );
    return () => clearInterval(interval);
  }, []);

  return <h1>{time}</h1>;
}

//? Pass data from parent to child using props.

const Parent = () => {
  const name = "APJ Abdul Kalam Sir";
  return (
    <div>
      <hr></hr>
      <h2>Pass data from parent to child using props</h2>
      <Child nameProps={name} />
    </div>
  );
};

function Child({ nameProps }) {
  return <h3>Hello ...{nameProps} </h3>;
}

//? Pass data from child to parent using props.

const ParentComp = () => {
  const [dataFromChild, setDatafromChild] = useState("");

  const handleDataFromChild = (data) => {
    setDatafromChild(data);
  };

  return (
    <div>
      <hr></hr>
      <h2>Pass data from child to parent using props</h2>
      <ChildComp handleDataFromChild={handleDataFromChild} />
      <h2>Data from child :: {dataFromChild}</h2>
    </div>
  );
};

const ChildComp = ({ handleDataFromChild }) => {
  function handleChange(e) {
    handleDataFromChild(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="enter your data here"
        onChange={handleChange}
      />
    </div>
  );
};

//? Render multiple components dynamically from an array of objects.

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    city: "New York",
    country: "USA",
    joinDate: "2022-03-15",
  },
  {
    id: 2,
    name: "Ravi Sharma",
    city: "Mumbai",
    country: "India",
    joinDate: "2021-11-08",
  },
  {
    id: 3,
    name: "Sophia Müller",
    city: "Berlin",
    country: "Germany",
    joinDate: "2023-05-27",
  },
  {
    id: 4,
    name: "Liam O'Connor",
    city: "Dublin",
    country: "Ireland",
    joinDate: "2020-09-30",
  },
];

function UserList() {
  return (
    <div>
      <hr></hr>
      <h2>*** User list ***</h2>
      <ul>
        {users.map((user, id) => (
          <div
            key={user.id}
            style={{
              borderBottom: "2px solid green",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.city}</li>
            <li>{user.country}</li>
          </div>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
}

//? Render table dynamically from an array of objects

function TableList() {
  return (
    <div>
      <h2> *** Table User List ***</h2>
      {
        <table border="1" width={"100%"} text-align="left">
          <thead style={{ backgroundColor: "lightblue" }}>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>{user.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
}

//? Counter with increment and decrement.

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <hr></hr>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button
        disabled={count <= 0 ? true : false}
        onClick={() => setCount((prev) => prev - 1)}
      >
        decrement
      </button>
    </div>
  );
}

//? Counter with object value of increment and decrement.

function Counter2() {
  const [count, setCount] = useState({
    increment: 0,
    decrement: 0,
  });

  const handleIncrement = () => {
    setCount((prev) => ({
      ...prev, // keep other properties
      increment: prev.increment + 1,
    }));
  };

  const handleDecrement = () => {
    setCount((prev) => ({
      ...prev,
      decrement: prev.decrement - 1,
    }));
  };
  return (
    <div>
      <hr></hr>
      <h1>Increment: {count.increment}</h1>

      <h1>Decrement: {count.decrement}</h1>

      <button onClick={handleIncrement}>Increment</button>
      <button
        disabled={count.decrement <= 0 && count.increment === 0}
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

//? Counter with object value of increment and decrement other alternative way

function Counter3() {
  const [count, setCount] = useState({ value: 0 });

  // Increment
  const handleIncrement = () => {
    setCount((prev) => ({ value: prev.value + 1 }));
  };

  // Decrement
  const handleDecrement = () => {
    setCount((prev) => ({ value: prev.value - 1 }));
  };

  // Reset
  const handleReset = () => {
    setCount({ value: 0 });
  };

  return (
    <div>
      <hr></hr>
      <h1>Count: {count.value}</h1>

      <div style={{ display: "flex", justifyContent: "start", gap: "10px" }}>
        <button onClick={handleIncrement}>+</button>
        <button
          onClick={handleDecrement}
          disabled={count.value <= 0}
          //   style={{
          //     opacity: count.value <= 0 ? 0.5 : 1,
          //     cursor: count.value <= 0 ? "not-allowed" : "pointer",
          //   }}
        >
          -
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

//?  Input field updates live text.

function InputFieldTextUpdate() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    //console.log("Event:", e.target.value)
    setText(e.target.value);
  };

  return (
    <>
      <hr></hr>
      <br></br>
      <label>Input Field:</label>
      <input
        value={text}
        type="text"
        onChange={handleChange}
        placeholder="Type here..."
      />
      <h1>Text:{text.toUpperCase()}</h1>
    </>
  );
}

//? Toggle visibility of a div.

function Toggele() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <hr></hr>
      <br></br>

      {isVisible && <h1>Now You can see me !!!</h1>}
      <br></br>

      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </>
  );
}

//?  Pass arguments to event handler.

function HandleEventList() {
  const listItems = ["Pune", "Delhi", "Nashik", "JaiPur"];

  function handleCliCk(city) {
    return alert(`Welcomne to ${city}`);
  }

  return (
    <div>
      <hr></hr>
      <h2> Alert : Pass arguments to event handler.</h2>
      {listItems.map((city) => (
        <div key={city}>
          <button
            onClick={() => handleCliCk(city)}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {city}
          </button>
          <br></br>
        </div>
      ))}
    </div>
  );
}

//? Form with controlled input (state)

function FormInput() {
  const [inputText, setInputText] = useState({ userName: "" });
  return (
    <div>
      <hr></hr>
      <br></br>
      <input
        value={inputText.userName}
        type="text"
        placeholder="Please add input here"
        onChange={(e) => setInputText({ userName: e.target.value })}
      />
      <h1>User Name : {inputText.userName}</h1>
    </div>
  );
}

//?  Multiple controlled inputs with one handler.

function MultiInputForm() {
  const [formValue, setFormValue] = useState({
    firstName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <hr></hr>
      <br></br>
      <label>First Name: </label>
      <input
        value={formValue.firstName}
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <label>Email: </label>
      <input
        value={formValue.email}
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
    </div>
  );
}

//?  Handle checkbox input.

function CheckboxDemo() {
  const [isChecked, setIsCheckd] = useState(true);

  return (
    <div style={{ margin: "20px" }}>
      <br></br>
      <hr></hr>
      <h2> Checkbox Question</h2>

      <label>Checkbox: </label>
      <input
        style={{ backgroundColor: "red" }}
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsCheckd(e.target.checked)}
      />

      <br></br>
    </div>
  );
}

//? Radio button selection.

function RadioChoice() {
  const [choice, setChoice] = useState("A");

  return (
    <div>
      <br></br>
      <hr></hr>
      <h2> Radio Button Question</h2>
      <input
        type="radio"
        value={"A"}
        checked={choice === "A"}
        onChange={(e) => setChoice(e.target.value)}
      />
      A
      <input
        type="radio"
        value={"B"}
        checked={choice === "B"}
        onChange={(e) => setChoice(e.target.value)}
      />
      B<h1>Selected Choice : {choice}</h1>
    </div>
  );
}

//?  Nested list rendering.

function NestedList() {
  const categories = [
    {
      id: 1,
      name: "Fruits",
      items: ["Apple", "Banana", "Orange", "Mango"],
    },
    {
      id: 2,
      name: "Vegetables",
      items: [],
    },
    {
      id: 3,
      name: "Dairy Products",
      items: ["Milk", "Cheese", "Butter", "Yogurt"],
    },
  ];

  return (
    <div>
      <hr></hr>
      <h1>Categories</h1>
      {categories.map((c, idx) => (
        <div>
          <h3>{c.name}</h3>
          {c.items.length > 0 ? (
            <ul>
              {c.items.map((i, index) => (
                <li>{i}</li>
              ))}
            </ul>
          ) : (
            "No Items Present"
          )}
        </div>
      ))}
    </div>
  );
}





//? Nested components in a list

function ParentNestedComponent() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "React Basics",
      description: "Learn JSX, components, and props.",
    },
    {
      id: 2,
      title: "React Hooks",
      description: "Understand useState and useEffect.",
    },
    {
      id: 3,
      title: "React Router",
      description: "Navigate between pages easily.",
    },
  ]);

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <hr></hr>
      <h2> Nested components in a list</h2>
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
}

function ItemList({ items, onDelete }) {
  return (
    <div>
      {items.map((i, index) => (
        // console.log("u", i)
        <Item key={i.id} data={i} onDelete={onDelete} />
      ))}
    </div>
  );
}

function Item({ data, onDelete }) {
  return (
    <div
      style={{
        border: "2px solid #006A4E",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#ACE1AF",
      }}
    >
      <h2>{data.title}</h2>
      <p>{data.description}</p>

      <button
        onClick={() => onDelete(data.id)}
        style={{
          backgroundColor: "#ff4d4f",
          border: "none",
          color: "white",
          padding: "6px 12px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}





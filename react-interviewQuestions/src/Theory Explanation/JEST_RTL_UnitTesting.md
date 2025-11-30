    
    
    Let’s go step-by-step. 👇

    ⚙️ 1. Overview

    Jest → JavaScript testing framework by Facebook, mainly for unit testing and mocking.

    React Testing Library (RTL) → A testing utility built on top of Jest to test React 
    components based on user behavior (not implementation details).

    🧩 2. Key Terminologies & Concepts
    Category	Term	Meaning / Interview Explanation
    Test Structure	describe()	Groups related test cases. Example: describe('Button Component', () => {...})
        test() / it()	Defines a single test case. Both are same — test('renders correctly', () => {...})
        expect()	Used to make assertions. Example: expect(screen.getByText('Hello')).toBeInTheDocument()
        beforeEach / afterEach	Setup or cleanup logic before/after each test. Commonly used to reset mocks or render again.
        

    Matchers (Jest)	toBe, toEqual, toBeTruthy, toBeFalsy, toContain, toHaveBeenCalledWith, etc.	Built-in Jest assertions.
    Render (RTL)	render()	Renders a React component for testing. Example: render(<Button />)
    
    Querying DOM	screen.getByText, getByRole, getByTestId, queryByText, findByText	Ways to select DOM nodes like a user. 
    (getBy = immediate; findBy = async; queryBy = optional)

    User Events	fireEvent, userEvent	Simulates clicks, typing, etc. userEvent is preferred (closer to real user behavior).
    Mocking	jest.fn() / jest.mock()	Used to create mock functions or modules. Example: const mockFn = jest.fn()
    Async Tests	waitFor, findBy..., async/await	Used when testing async code (like API calls or state updates).
    Snapshot Testing	toMatchSnapshot()	Captures rendered output and compares with stored snapshot.
    Coverage	--coverage flag	Used to see code coverage (jest --coverage) — shows tested lines, branches, etc.
    Debugging	screen.debug()	Prints current DOM tree for debugging.
    Cleanup	cleanup()	Automatically runs after each test in RTL (removes DOM).
    Mock Timer / API	jest.useFakeTimers, jest.advanceTimersByTime, fetch mock	Used for testing timeouts, intervals, or async calls.


    🧠 3. Common Interview Questions
    Question	How to Answer (with short examples)

    What is Jest?	Jest is a JS testing framework used for unit and integration testing. It supports mocking, snapshot testing, and code coverage.

    What is RTL?	React Testing Library helps test UI behavior, focusing on how users interact rather than implementation.

    Difference between getBy, queryBy, and findBy?	getBy → Throws error if not found. queryBy → Returns null if not found. findBy → Waits for async element.

    What is jest.mock() used for?	To mock a module or function (e.g., mocking axios.get).
    How to test an API call?	Mock API (e.g., using jest.mock('axios')) and verify UI or function behavior.
    What is a snapshot test?	Used to ensure UI doesn’t unexpectedly change — expect(container).toMatchSnapshot().

    Difference between fireEvent vs userEvent?	fireEvent triggers events programmatically; userEvent simulates real user actions (typing, clicking, etc.) more accurately.
    What is the purpose of waitFor?	To wait for async updates before asserting DOM changes.
    How do you measure code coverage?	Run npm test -- --coverage or jest --coverage.
    How do you test a component with props or state?	Render with props → render(<Button label="Click" />) and assert DOM output.



    💡 4. Example Interview Test Code
    // Button.test.js
    import { render, screen, fireEvent } from "@testing-library/react";
    import Button from "./Button";

    test("renders button and handles click", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="Click Me" />);

    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    });



    🧰 5. Bonus Topics (Advanced/3+ yrs Interview Level)
    Advanced Area	Example
    Mocking API using jest.mock()	jest.mock('axios', () => ({ get: jest.fn() }))
    Testing async effects (useEffect + fetch)	Use waitFor or findByText
    Testing context / provider	Wrap render with context provider
    Testing Redux / Zustand / Context	Use wrapper function with render
    Snapshot updates	jest -u updates snapshots
    Mocking timers	jest.useFakeTimers() for debounce/throttle testing
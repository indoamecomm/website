import createPersistedState from "use-persisted-state";
export const useLocalStorage = (key, initialValue) => {
	const useCounterState = createPersistedState(key);

	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useCounterState(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			console.log(error);
			return initialValue;
		}
	});

	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value) => {
		try {
			console.log(value, "set");
			// Allow value to be a function so we have same API as useState
			const item = window.localStorage.getItem(key);
			// Save state
			setStoredValue(item ? JSON.parse(item) : initialValue);
			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error);
		}
	};

	return [storedValue, setValue];
};

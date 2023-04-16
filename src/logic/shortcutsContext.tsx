import { createContext, useState } from "react";

type DataProps = {
	combo: string;
	description: string;
};

type ContextProps = {
	details: DataProps[];
	updateMyValue: (newValue: DataProps) => void;
};

const ActiveShortcutsContext = createContext<ContextProps>({
	details: [],
	updateMyValue: (newValue: DataProps) => {},
});

type Props = {
	children: string | JSX.Element | JSX.Element[];
};

const ActiveShortcutsProvider = ({ children }: Props) => {
	const [details, setDetails] = useState<DataProps[]>([]);

	const updateMyValue = (newValue: DataProps) => {
		setDetails((prevState) => {
			const newState = [...prevState, newValue];
			return newState;
		});
	};

	const contextValue = {
		details,
		updateMyValue,
	};

	return (
		<ActiveShortcutsContext.Provider value={contextValue}>
			{children}
		</ActiveShortcutsContext.Provider>
	);
};

export { ActiveShortcutsContext, ActiveShortcutsProvider };

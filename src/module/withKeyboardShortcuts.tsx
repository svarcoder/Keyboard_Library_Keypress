import { ComponentType, useContext, useEffect, useRef } from "react";
import { ActiveShortcutsContext } from "../logic/shortcutsContext";

type Props = {
	description: string;
	combo: string;
	callback: (index: number) => void;
	color: string;
	index: number;
	name: string;
};

const withActiveShortcuts = <T extends Props>(
	WrappedComponent: ComponentType<T>
) => {
	const ActiveShortcuts = ({
		combo,
		description,
		callback,
		color,
		index,
		name,
	}: Props) => {
		const { updateMyValue } = useContext(ActiveShortcutsContext);
		const ref = useRef<boolean>(false);

		let data = {
			combo,
			description,
		};

		useEffect(() => {
			if (ref.current) return;
			ref.current = true;
			updateMyValue(data);
		}, []);

		const props = {
			combo,
			callback,
			description,
			color,
			index,
			name,
		} as T;

		return <WrappedComponent {...props} />;
	};

	return ActiveShortcuts;
};

export default withActiveShortcuts;

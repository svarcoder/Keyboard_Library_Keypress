import keypress from "keypress.js";
import { useEffect } from "react";

type Props = {
	description: string;
	combo: string;
	callback: (index: number) => void;
	index: number;
};

const KeyboardShortcut = ({ combo, callback, description, index }: Props) => {
	useEffect(() => {
		const listener = new keypress.Listener();
		const comboId: any = listener.simple_combo(combo, () => callback(index));
		return () => {
			listener.unregister_combo(comboId);
		};
	}, [combo, callback, index]);

	return null;
};

export default KeyboardShortcut;

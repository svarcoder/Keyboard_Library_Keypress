import KeyboardShortcut from "./KeyboardShortcut";
import withActiveShortcuts from "./withKeyboardShortcuts";

type Props = {
	description: string;
	combo: string;
	callback: (index: number) => void;
	color: string;
	index: number;
	name: string;
};

const ColorComponent = ({
	description,
	combo,
	callback,
	color,
	index,
	name,
}: Props) => {
	return (
		<div style={{ background: color }} className='color__component'>
			<KeyboardShortcut
				description={description}
				combo={combo}
				callback={callback}
				index={index}
			/>
			<h2>Component {name}</h2>
		</div>
	);
};

export default withActiveShortcuts(ColorComponent);

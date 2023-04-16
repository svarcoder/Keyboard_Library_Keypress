import { useContext, useState } from "react";
import { ActiveShortcutsContext } from "../logic/shortcutsContext";
import ColorComponent from "./ColorCom";
import "./Style.css";

type Props = {
	id: number;
	description: string;
	combo: string;
	name: string;
};

const Data: Props[] = [
	{
		id: 0,
		combo: "shift a",
		description: "Toggle Component A Color",
		name: "A",
	},
	{
		id: 0,
		combo: "esc",
		description: "Toggle Component B Color",
		name: "B",
	},
	{
		id: 0,
		combo: "alt ctrl c",
		description: "Toggle Component C Color",
		name: "C",
	},
];

const Home = () => {
	const [color, setColor] = useState<string[]>(["red", "blue", "green"]);
	const { details } = useContext(ActiveShortcutsContext);

	const handleShortcut = (index: number) => {
		const newRandomColor: string = Math.floor(
			Math.random() * 16777215
		).toString(16);
		const newColor: string[] = [...color];
		newColor[index] = `#${newRandomColor}`;
		setColor(newColor);
	};

	return (
		<>
			<h1>Keyboard Shortcut Library</h1>
			<div className='home__wrap'>
				{Data &&
					Data.map((item, i) => (
						<ColorComponent
							key={i + 1}
							description={item?.description}
							combo={item?.combo}
							callback={handleShortcut}
							color={color[i]}
							index={i}
							name={item?.name}
						/>
					))}
				<div>
					{details.map((shortcut: any) => (
						<div key={shortcut.id}>
							<h2>
								{shortcut.description.includes("Component A")
									? "Component A"
									: shortcut.description.includes("Component B")
									? "Component B"
									: "Component C"}
							</h2>

							<h4 className='comp__description'>
								{`"${shortcut.combo}": ${shortcut.description}`}
							</h4>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;

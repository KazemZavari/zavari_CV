

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide"

export default function Switcher({draweropen, setDraweropen}) {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "lihgt" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<DarkModeSwitch
			 className="z-30 text-Yellow dark:text-white"
				checked={darkSide}
				onChange={toggleDarkMode}
				size={40}
			/>
		</>
	);
}

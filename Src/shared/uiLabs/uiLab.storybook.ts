import { ReplicatedStorage } from "@rbxts/services";
import { Storybook } from "@rbxts/ui-labs";
import { paths } from "Shared/Utilities/Paths";

const storybook: Storybook = {
	name: "components",
	storyRoots: [paths(["ts", "shared", "uiLabs"])],
};

export = storybook;

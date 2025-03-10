import { Controller, OnStart } from "@flamework/core";
import { $print } from "rbxts-transform-debug";

@Controller({})
export class Hello implements OnStart {
	onStart() {
		$print("hello from controllers");
	}
}

import { Service, OnStart } from "@flamework/core";
import { $print } from "rbxts-transform-debug";

@Service({})
export class Hello implements OnStart {
	onStart() {
		$print("hello from service");
	}
}

import { Service, OnStart } from "@flamework/core";

@Service({})
export class Hello implements OnStart {
	onStart() {
		print("hello from service");
	}
}
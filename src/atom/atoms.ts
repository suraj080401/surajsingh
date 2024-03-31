import { atom } from "recoil";

const currTabinQueue = atom({
	key: "currTabinQueue",
	default: "aboutme",
});

export default currTabinQueue;

export const allTabsList = atom({
	key: "allTabsList",
	default: ["aboutme"],
});

import { getAccessorType } from "typed-vuex";
import * as player from "./player";

export const state = () => ({});

export const accessorType = getAccessorType({ state, modules: { player } });

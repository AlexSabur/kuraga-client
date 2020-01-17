import { mutationTree, getterTree } from "typed-vuex";
import * as playlist from "./playlist";

export const namespaced = true;

export const state = () => ({
  speed: 1,
  volume: 1,
  loaded: 0,
  position: 0,
  duration: 0
});

export const getters = getterTree(state, {
  loadedIs: state => ((state.loaded / state.duration) * 100 || 0).toFixed(2),
  currentIs: state => ((state.position / state.duration) * 100 || 0).toFixed(2)
});

export const mutations = mutationTree(state, {
  SET_VOLUME(state, volume) {
    state.volume = volume;
  },
  SET_POSITION(state, position) {
    state.position = position;
  },
  SYNC_VOLUME(state, volume) {
    state.volume = volume;
  },
  SYNC_LOADED(state, loaded) {
    state.loaded = loaded;
  },
  SYNC_POSITION(state, position) {
    state.position = position;
  },
  SYNC_DURATION(state, duration) {
    state.duration = duration;
  }
});

export const modules = {
  playlist
};

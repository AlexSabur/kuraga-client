// @ts-ignore
import "ya-music";
import { Plugin } from "@nuxt/types";

// @ts-ignore
const YandexAudio: any = ya.music.Audio;
const Equalizer: any = YandexAudio.fx.Equalizer;

declare module "vue/types/vue" {
  interface Vue {
    $yandexAudio: any;
    $yandexPlayer: any;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $yandexAudio: any;
    $yandexPlayer: any;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $yandexAudio: any;
    $yandexPlayer: any;
  }
}

class YaInstancer {
  static instance: any;
  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new YandexAudio("html5");
      return this.instance;
    }
  }
}

const myPlugin: Plugin = (context, inject) => {
  const audioPlayer = YaInstancer.getInstance();
  let equalizer;

  inject("yandexAudio", YandexAudio);
  inject("yandexPlayer", audioPlayer);

  audioPlayer.initPromise().then(function() {
    context.store.commit("player/SYNC_VOLUME", audioPlayer.getVolume());
  });

//   audioPlayer.initPromise().then(function() {
//     audioPlayer.toggleWebAudioAPI(true);
//   });

  audioPlayer.on(YandexAudio.EVENT_VOLUME, (volume: any) =>
    context.store.commit("player/SYNC_VOLUME", volume)
  );

  audioPlayer.on(
    YandexAudio.EVENT_PROGRESS,
    ({ loaded, position, duration }: { [key: string]: number }) => {
      context.store.commit("player/SYNC_LOADED", loaded);
      context.store.commit("player/SYNC_POSITION", position);
      context.store.commit("player/SYNC_DURATION", duration);
    }
  );

  context.store.subscribe(({ type, payload }) => {
    switch (type) {
      case "player/SET_VOLUME":
        audioPlayer.setVolume(payload); 
        break;
      case "player/SET_POSITION":
        audioPlayer.setPosition(payload);
        break;
    }
  });
};

export default myPlugin;

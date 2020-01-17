<template>
  <div class="relative w-full mb-3">
    <label v-if="!noLabel" :class="$style.label" :for="id">{{label}}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :class="$style.input"
      @change="setValue"
      @input="setValue"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "nuxt-property-decorator";

let uuid = 1;

@Component
export default class FieldInput extends Vue {
  @Prop(String) label!: string;
  @Prop(String) value!: string;
  @Prop(String) placeholder!: string;
  @Prop({ type: String, default: () => "text" }) type!: string;
  @Prop({ type: String, default: () => `field-${uuid++}` }) id!: string;
  @Prop({ type: Boolean, default: () => false }) noLabel!: boolean;

  @Emit("change")
  @Emit("input")
  setValue(event: any) {
    return event.target.value;
  }
}
</script>

<style lang="postcss" module>
.label {
  @apply block uppercase text-gray-700 text-xs font-bold mb-2;
}
.input {
  transition: all 0.15s ease 0s;
  @apply px-3 py-3 text-gray-700 bg-white rounded text-sm shadow w-full;
}
input::placeholder {
  @apply text-gray-400;
}
.input:focus {
  @apply outline-none shadow-outline;
}
</style>

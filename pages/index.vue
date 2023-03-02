<script setup>
import { defineNuxtComponent, defineNuxtLink } from "#app";
let Button_template = `<a class="inline-block cursor-pointer  bg-green-700 text-gray-300 p-3 rounded"><slot></slot></a>`;
let AppButton = defineNuxtComponent({
  template: Button_template,
});
let template = `<div><NuxtLink to="/blog">blog</NuxtLink></div><div class="mt-2"><AppButton>this is our dynamic button</AppButton></div>`;
let NuxtLink = defineNuxtLink({
  componentName:'div'
});
let b = defineNuxtComponent({
  components: { NuxtLink, AppButton },
  name: "test",
  template,
  // render: a,
});
</script>

<template>
  <div class="p-6">
    <component :is="b" />
  </div>
</template>

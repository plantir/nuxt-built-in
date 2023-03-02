<script setup>
import { ref } from "vue";
import { defineNuxtComponent, defineNuxtLink } from "#app";
let Button_script = {
  onClick: () => {
    alert("clicked");
  },
};
const js = `
        let count = ref(2);
        const onClick = () => {
            count.value +=1
        };
        return { onClick,count };
`;
let setup = new Function("ref", js);
let Button_template = `<a @click="onClick" class="inline-block cursor-pointer  bg-green-700 text-gray-300 p-3 rounded"><slot></slot>{{count}}</a>`;
let AppButton = defineNuxtComponent({
  template: Button_template,
  //   methods: Button_script,
  setup: () => setup(ref),
});

let template = `<div><NuxtLink to="/">BACK TO HOME</NuxtLink></div><div class="mt-2"><AppButton>this is our dynamic button</AppButton></div>`;
let NuxtLink = defineNuxtLink({
  componentName: "div",
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

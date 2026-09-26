<script setup lang="ts">
import { ref } from "vue";
import MtUrlField from "@shopwell-ag/meteor-component-library/MtUrlField";

const url = ref("https://shopwell.cn");
</script>

<template>
  <mt-url-field v-model="url" label="Website" />
</template>

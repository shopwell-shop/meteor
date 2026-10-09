<script setup lang="ts">
import MtCard from "@shopwell-ag/meteor-component-library/MtCard";
import MtAvatar from "@shopwell-ag/meteor-component-library/MtAvatar";
import MtButton from "@shopwell-ag/meteor-component-library/MtButton";
</script>

<template>
  <mt-card title="Customer details">
    <template #avatar>
      <mt-avatar name="Max Mustermann" variant="square" />
    </template>

    <template #headerRight>
      <mt-button variant="secondary">Edit</mt-button>
    </template>

    <p>Use header content to add context and a related secondary action.</p>
  </mt-card>
</template>

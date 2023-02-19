<template>
  <nav class="d-flex flex-md-column align-md-center pa-md-2">
    <LazyTheSearchbar />
    <v-list class="d-flex flex-md-row justify-md-space-around align-md-center w-100">
      <v-list-item class="pa-1">
        <NuxtLink href="#">
          Lifestyle
        </NuxtLink>
      </v-list-item>
      <v-list-item class="pa-1">
        <NuxtLink href="#">
          Menu settimanale
        </NuxtLink>
      </v-list-item>
      <v-list-item class="pa-1">
        <NuxtLink href="#">
          I segreti dello chef
        </NuxtLink>
      </v-list-item>
    </v-list>
  </nav>
</template>

<style scoped>
  a {
    display: block;
  }
</style>
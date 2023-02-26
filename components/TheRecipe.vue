<template>
  <v-card class="ma-md-2">
    <template #loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      />
    </template>

    <v-img
      cover
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    />

    <v-card-item>
      <v-card-title>Spaghetti alla Carbonara</v-card-title>
      <v-card-subtitle>
        <span class="me-1">Cucina Romana</span>
        <Icon
          name="mdi:fire-circle"
          size="1.5em"
        />
      </v-card-subtitle>
    </v-card-item>

    <v-divider class="mx-4 mb-1" />
    
    <div class="d-flex flex-column px-4">
      <div>
        <Icon
          name="material-symbols:nest-clock-farsight-analog-outline-rounded"
          size="1em"
        /> 
        Tempo totale: 30 min
      </div>
      <div>
        <Icon
          name="icon-park-outline:chef-hat-one"
          size="1em"
        /> 
        Difficoltà: 
        <Icon
          name="icon-park:chef-hat-one"
          size="1em"
        /> 
        <Icon
          name="icon-park:chef-hat-one"
          size="1em"
        /> 
        <Icon
          name="icon-park-twotone:chef-hat-one"
          size="1em"
        />
        <Icon
          name="icon-park-twotone:chef-hat-one"
          size="1em"
        />
        <Icon
          name="icon-park-twotone:chef-hat-one"
          size="1em"
        />
      </div>
      <div> 
        rating non funziona 
      </div>
    </div>

    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="0"
      >
        <NuxtLink to="/recipePage">
          Vai alla ricetta
        </NuxtLink> 
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({ rating: 3 }),
  }
</script>

<style scoped>
.v-card {
  max-width: 330px;
  min-width: 330px;
}
</style>
<template>
  <NuxtLayout>
    <div class="main-content">
      <h1>Spaghetti alla Carbonara</h1>
      <v-card class="d-flex flex-row">
        <v-card-item class="w-25">
          <v-list>
            <v-list-item>
              <Icon name="icon-park-outline:chef-hat-one" size="1em" /> 
              Difficoltà: 
              <Icon name="icon-park:chef-hat-one" size="1em" /> 
              <Icon name="icon-park:chef-hat-one" size="1em" /> 
              <Icon name="icon-park-twotone:chef-hat-one" size="1em" />
              <Icon name="icon-park-twotone:chef-hat-one" size="1em" />
              <Icon name="icon-park-twotone:chef-hat-one" size="1em" />
            </v-list-item>
            <v-list-item>
              <Icon name="material-symbols:nest-clock-farsight-analog-outline-rounded" size="1em" /> 
              Preparazione: 30 min
            </v-list-item>
            <v-list-item>
              <Icon name="ph:cooking-pot-fill" size="1em" /> 
              Cottura: 20 min
            </v-list-item>
            <v-list-item>
              <Icon name="emojione-monotone:fork-and-knife-with-plate" size="1em" /> 
              Dosi: 4 persone
            </v-list-item>
            <v-list-item>
              <Icon name="uil:euro-circle" size="1em" /> 
              Costo: basso
            </v-list-item>
          </v-list>
        </v-card-item>
        <v-img
          cover
          height="300"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          class="w-50"
        />
        <v-card-item class="w-25">
          <v-card-title>Varianti:</v-card-title>
          <v-list>
            <v-list-item>
              <NuxtLink>Carbonara di zucchine</NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink>Carbonara di pollo</NuxtLink> 
            </v-list-item>
            <v-list-item>
              <NuxtLink>Carbonara di salmone</NuxtLink> 
            </v-list-item>
          </v-list>
        </v-card-item>
      </v-card>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.main-content {
  min-height: 100%;
}

</style>
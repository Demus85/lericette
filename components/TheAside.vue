<template>
  <aside class="pa-md-0">
    <v-list v-model:opened="open">
      <v-list-group value="Ricette" class="expand-list">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Ricette"
          ></v-list-item>
        </template>
        <v-list-item>Antipasti</v-list-item>
        <v-list-item>Primi</v-list-item>
        <v-list-item>Secondi</v-list-item>
        <v-list-item>Dolci</v-list-item>
        <v-list-item>Lievitati</v-list-item>
        <v-list-item>Piatti unici</v-list-item>
      </v-list-group>

      <v-list-item>Benessere</v-list-item>
      <v-list-item>Ricette veloci</v-list-item>
      <v-list-item>Ricette festive/eventi</v-list-item>

      <v-list-group value="Cucine del mondo" class="expand-list">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Cucine del mondo"
          ></v-list-item>
        </template>
        <v-list-item>Cinese</v-list-item>
        <v-list-item>Indiana</v-list-item>
        <v-list-item>Giapponese</v-list-item>
        <v-list-item>Ceca</v-list-item>
      </v-list-group>
    </v-list>
  </aside>
</template>

<script>
  export default {
    data: () => ({
      open: ['Users'],
    }),
  }
</script>

<style scoped>
aside {
  /* background-image: linear-gradient(to bottom right, #c5cbe3 20%, #d79922 90%); */
  box-shadow: 1px 1px 4px 0px #cdcdcd;
  border-radius: 3px;
}

.v-list {
  background: transparent;
}

.expand-list {
  /* background-image: linear-gradient(to bottom right, #c5cbe3, #efe2ba); */
  background: #f4f4f4;
}
</style>
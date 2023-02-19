<template>
  <v-form 
    class="searchbar d-flex flex-md-row justify-md-center align-md-center w-25"
  >
    <v-text-field 
      label="Search..." 
      variant="underlined"
    />
    <v-btn
      type="submit"
      class="pa-md-0 w-0"
    > 
      <Icon
        name="bx:search-alt"
        size="1.6em"
      /> 
    </v-btn>
  </v-form>
</template>

<style scoped>

  .searchbar {
    height: 50px;
  }

  /* input,  */
  button {
    min-width: unset;
  }
</style>
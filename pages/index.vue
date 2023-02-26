<template>
  <NuxtLayout>
    <div class="main-content d-flex flex-md-row">
      <TheAside />
      <section class="px-md-4">
        <h1>Ricette recenti:</h1>
        <TheCarousel class="mb-md-4" />
        <h1>Le piu calde:</h1>
        <TheCarousel class="mb-md-4" />
        <h1>Le Vegetariane:</h1>
        <TheCarousel class="mb-md-4" />
        <h1>I Dolci:</h1>
        <TheCarousel class="mb-md-4" />
      </section>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.main-content {
  min-height: 100%;
}

aside {
  width: 15%;
  height: max-content;
}
section {
  width: 85%;
}
</style>
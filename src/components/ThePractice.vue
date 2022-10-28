<script setup lang="ts">
    const name = "Topic";
    const active  = true;
</script>

<template>
  <div class="greetings">
     <h3>Hola estoy practicando a crear nuevas cosas ernesto</h3>
  </div>
  <div>
    <h1>Hola {{name}}</h1>
    <h2 v-if="active">v-if en acción</h2>
    <h2 v-else>v-else en acción</h2>
  </div>
  <div>
    <h1>Otro ejemplo de v-if && v-else</h1>
    <h2 v-if="active === true">v-if en acción</h2>
    <h2 v-else-if="active === false">v-else en acción</h2>
    <h2 v-else>Estoy indeciso</h2>
  </div>
  <div>
    <h1>Otro ejemplo de v-show</h1>
        <h1>{{name}} v-show</h1>
        <h2 v-show="active">Estoy en {{active? "true":"false"}}</h2>
  </div>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

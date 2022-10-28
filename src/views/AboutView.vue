<script setup>
  const name= "Estoy Probando";
  const styColor = "color: red;";
  const active = true;
  const colors = ["blue", "green", "yellow", "green"];
  const counter = 1;
  const activo = false;

</script>
<template>
  <main>
    <h1>Hola {{ name }}!</h1>
    <h2 :style="styleColor">Hola {{ name.toUpperCase() }}!</h2>
    <h3>{{ active ? "Estoy Activado" : "Estoy Desactivado"}}</h3>
    <h4 :style="`color: ${colors[2]}`">Color con interpolación</h4>
    <h5>Contador: {{counter + 1}}</h5>
    <div>
      <div v-if="activo" class="row">
          <p><b>Mostrando</b></p>
      </div>
      <div v-else></div>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .row{
    display: flex;
    width: auto;
    background-color: red;
    border: 1px solid yellow;
  }
}
</style>

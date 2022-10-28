<script setup>
    //Ahora vamos a importar ref para hacer reactivo nuestra variable counter
    import { ref } from "vue";

    const name = "Vue 3";

    const counter = ref(0);

    const increment  = () => {
        //Ahora vamos a mutar le valor  a través de .value
        counter.value++;
    }
</script>

<template>
  <div class="greetings">
     <h3>Practicando Variables Reactivas</h3>
  </div>
  <div>
        <h1>Hola {{name}}</h1>
        <h2>{{ counter }}</h2>
        <button @click="increment" class="btnUno">Click Increment</button>
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

.btnUno {
    display: inline-block;
    width:150px;
    position: relative;
    height:50px;
    padding:15px 32px;
    text-align: center;
    color: white;
    background-color:#4CAF50;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    border: none;
    margin: 0px 0 0 10px;
    
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

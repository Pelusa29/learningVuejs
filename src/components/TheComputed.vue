<script setup>
    import { ref,computed } from "vue";

    const name = "Vue 3";

    const counter = ref(0);

    const increment = () => {
        counter.value++;
    };

    const decrement  = () => {
        counter.value--;
    };

    const reset = () => {
        counter.value = 0;
    };

    const classCounter = computed(()=>{
        if(counter.value === 0){
            return "zero cambiante";
        }

        return counter.value > 0 ? "positivo cambiante" : "negativo cambiante";
    });
</script>


<template>
  <div class="greetings">
     <h3>Computado</h3>
  </div>
  <div>
        <p>Practicando Topico de: Computado</p>
  </div>
  <div>
        <h1>Hola {{name}}</h1>
        <h2 :class="classCounter">
            {{counter}}
        </h2>
        <div>
            <button @click="increment" class="btnUno">Incremento</button>
            <button @click="decrement" class="btnUno">Decremento</button>
            <button @click="reset" class="btnUno">Reset</button>
        </div>
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
    color: #ffffff;
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

.changeColor{
    display: block;
    padding:5px 10px;
    margin: 5px 5px;
}

.positivo {
    color: green;
}
.negativo {
    color: red;
}
.zero {
    color: black;
}

.cambiante {
    background-color:#adaf4c;
    width:150px;
    text-align: center;
    margin:5px 5px;
}

</style>

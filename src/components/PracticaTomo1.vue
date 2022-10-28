<script setup>
    //importamos ref
    import { ref } from "vue";

    //constante
    const counter = ref(0);

    const arrayTopics = [
       {
        title: "Practica - Aumenta contador",
        description: "Agrega un botón para disminuir el contador"
       },
       {
        title: "Practica - Disminuye contador",
        description: "Agrega un botón para resetear el contador."
       },
       {
        title: "Practica - Contador Negativo en Rojo",
        description: "Pinta el contador en rojo cuando el valor sea menor a cero."
       },
       {
        title: "Practica - Contoador Positivo en Verde",
        description: "Pinta el contador en verde cuando el valor sea mayor a cero."
       }
    ];

    const _incrementPositive = () => {
        counter.value++;
    };
    
    const _incrementNegative = () => {
        counter.value--;
    };

    const _reset = () => {
        counter.value = 0;
    };
</script>

<template>
  <div class="greetings">
     <h3>Mi primer practica</h3>
  </div>
  <div>
        <p>Esta es mi primer practica tomando varios elementos para interactuar con ellos.</p>
        <ul class="lista">
            <li v-for="topic in arrayTopics" :key="topic.title">
                {{topic.description}}
            </li>
        </ul>
  </div>
  <div>
        <div class="changeColor">
            <h1>Contador Positivo:</h1>
            <!--Aplicamos :class por que nos permite aplicar de forma reactiva sobre una class css y asía ctualizar el valor de esta clase siempre y cuando se cumpla un valor especifico-->
            <h2 :class="counter >= 0 ? 'positivo': 'negativo'">{{counter}}</h2>
            <button @click="_incrementPositive" class="btnUno">Positivo</button>
            <button @click="_incrementNegative" class="btnUno">Negativo</button>
            <button @click="_reset" class="btnUno">Reset</button>
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

.lista {
    padding: 20px;
    list-style-type: square;
}
.lista > li {
    list-style: circle;
    width: 100%;
    background: none;
    color: black;
    padding:5px 5px;
    margin-left: 5px;
    color: #ffffff;
}

.positivo {
    width: 300px;
    text-align: center;
    position: relative;
    font-size: 30px;
    background: #861616;
    margin: 5px 5px 5px 10px;
    color: black;
    font-style: oblique;
}

.negativo {
    width: 300px;
    text-align: center;
    position: relative;
    font-size: 30px;
    background: #168630;
    margin: 5px 5px 5px 10px;
    color: black;
    font-style: oblique;
}
</style>

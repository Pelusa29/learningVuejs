<script setup>
    //importamos ref
    import { ref, computed } from "vue";

    //constante referencial de incremento
    const counter = ref(0);
    const arrayCount = ref([]);


    const arrayTopics = [
       {
        title: "Array",
        description: "Agrega un array y su respectivo método y botón add para almacenar los números favoritos del usuario."
       },
       {
        title: "Extensión de elemento v-for",
        description: "Pinta ese array utilizando v-for."
       },
       {
        title: "Usar disabled.",
        description: "Utiliza :disabled en el botón add, para que solo se pueda presionar si el array no contiene números repetidos. (utiliza una propiedad computada)."
       }
    ];

    /*Controles para incremento,decremento y reset*/
    const increment = () => {
        counter.value++;
    }

    const decrement = () => {
        counter.value--;
    };

    const reset = () => {
        counter.value = 0;
        arrayCount.value = [];
    }
    
    const add = () => {
        
        arrayCount.value.push(counter.value);
        console.log(arrayCount);
    };

    //Métodos computados para calcular si nuestro elemento es negativo, positivo y/o cero
    const changeColor = computed(()=> {
        if (counter.value === 0){
            return "changeColor zero";
        }
        return counter.value > 0 ? "changeColor positivo" : "changeColor negativo";
    });

    //buttton Adding
    const changeEstado = computed(() => {

       const numExist = arrayCount.value.find((num) => num === counter.value);

       if(numExist || numExist === 0){
            return "btnAparece";
       }

       return "btnUno";
    });

    //button block
     const changeBlock = computed(() => {

       const numExist = arrayCount.value.find((num) => num === counter.value);

       if(numExist || numExist === 0){
            return "btnUno";
       }

       return "btnSecundario";
    });

    //Función computada (variable referencial o reactiva) para determinar si el valor ingresado dentro de nuestro
    //array ya se encuentro alojado o no.
    const blockButon = computed(() => {

        const number = arrayCount.value.find((num) => num === counter.value);

        return number || number === 0;
    });

    
</script>

<template>
  <div class="greetings">
     <h3>Mi Segunda Practica</h3>
  </div>
  <div>
        <p>Esta es mi segunda practica, ahora trabajando con computed</p>
        <ul class="lista">
            <li v-for="topic in arrayTopics" :key="topic.title">
                {{topic.description}}
            </li>
        </ul>
  </div>
  <div class="blockPresentation">
       <div class="blockInterno">
            <div :class="changeColor">
                {{counter}}
            </div>
            <!--Elementos aqui-->
            <div class=""><button @click="decrement" class="btn btnResta">-</button></div>
            <div class="">
                <button @click="add" :class="changeEstado" >Agregar</button>
                <button @click="add" :class="changeBlock" :disabled="blockButon" >Bloqueado</button>
            </div>
            <div class=""><button @click="increment" class="btn btnSuma">+</button></div>
       </div>
       <div>
            <button @click="reset" class="btnUno">Reset</button>
       </div>
       <div class="block">
            <ul>
                <li v-for="(item, index) in arrayCount" :key="index">
                    {{item}}
                </li>
            </ul> 
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

.btn {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 50px;
    margin: 10px 15px;
    border-radius: 50% 50%;
}

.btnResta {
    background-color: #861616;
    color: black;
    font-size: 2.1rem;
    vertical-align: middle;
}

.btnSuma {
    background-color: #168630;
    color: black;
    font-size: 2.1rem;
    vertical-align: middle;
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



.btnAparece {
    visibility: hidden;
    display:none;  
}

.btnSecundario {
    visibility: hidden;
    display:none;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.changeColor {
    display: block;
    padding:5px 10px;
    margin: 5px 5px;
    text-align: center;
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
}

.lista {
    padding: 20px;
    list-style-type: square;
}
.lista > li {
    list-style: circle;
    width: 100%;
    background: none;
    padding:5px 5px;
    margin-left: 5px;
    color: #ffffff;
    font-size:18px;
    font-family: Arial, Helvetica, sans-serif;
}


.blockPresentation{
    display: block;
    text-align: center;
    margin: 15px 10px;
}

.blockInterno{
    position: relative;
    margin: 5px 5px;
}
.clrInstance {
    width: 300px;
    text-align: center;
    position: relative;
    font-size: 30px;
    background: #861616;
    margin: 5px 5px 5px 10px;
    color: black;
    font-style: oblique;
}
.positivo {
   background-color:#168630;
   color: #ffffff;
}

.negativo {
    background: #861616;
    color:#ffffff;
}

.zero {
    color: #000000;
    background: #e5bdbd;
}
</style>

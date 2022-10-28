<script setup lang="ts">
    const arrayFrutas = ["🍎","🍌","🍉","🍓","🍒"];
    const arrayFrutales = [
        {
            name:"Manzana",
            price: "$1.00",
            descripcion: "Una manzana 🍎"
        },
        {
            name:"Pera",
            price: "$2.00",
            descripcion: "Una pera 🍐"
        },
        {
            name:"Naranja",
            price: "$3.00",
            descripcion: "Una naranja 🍊"
        },
    ];
    const arrayDatos = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 10,
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
    },
];
</script>

<template>
<div>
  <div class="greetings">
     <h3>Topic Ciclos Repetitivos</h3>
  </div>
  <ul class="lista">
    <li v-for="(fruta, index) in arrayFrutas" :key="index">
        {{ fruta }}
    </li>
  </ul>
</div>
<div>
    <div class="greetings">
        <h3>Topic Ciclos Repetitivos Usando Array y accediendo a sus atributos</h3>
    </div>
    <div>
        <ul class="lista">
            <li v-for="fruta in arrayFrutales" :key="fruta.name">
                {{fruta.name}} - {{fruta.price}} - {{fruta.descripcion}}
            </li>
        </ul>
    </div>
</div>
<div class="separador">
    <div class="greetings">
        <h3>V-for con v-if</h3>
    </div>
    <div>
        <ul>
            <template v-for="frut in arrayDatos" :key="frut.name">
                <li
                v-if="frut.stock > 0">
                    {{frut.name}}
                </li>
            </template>
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

.lista {
    background: #99f0ff;
    padding: 20px;
    list-style-type: disc;
}
.lista > li {
    width: 100%;
    border: 1px solid green;
    background: #3399ff;
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

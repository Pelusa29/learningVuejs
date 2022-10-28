<script setup>
    const name = "Vue 3";
    const topico = "Modificadores"
    //método handleclick
    const handleClick = () => {
        console.log("me diste click");
    };
    //método recibiendo Parámetros
    const handleClickParam = (message) => {
        alert(message);
    };
</script>

<template>
  <div class="greetings">
     <h3>Practicando Eventos</h3>
  </div>
  <div>
        <h1>Hola {{name}}</h1>
        <div>
            <button v-on:click="handleClick" class="btnUno">Boton 1</button>
            <button @click="handleClick" class="btnUno">Boton 2</button>
            <button @click="handleClickParam('Mensaje desde Bton')" class="btnUno">Btn Params</button>
        </div>
        <div>
            <h2>Hola {{topico}}</h2>
            <div>
                <button @click="handleClick" class="btnUno">Modificador</button>
            </div>
        </div>
        <div>
            <h2>Modificadores</h2>
            <div>
                <button @click.right.prevent="handleClickParam('Mensaje Right Prevent')" class="btnUno">Btn Modificador</button>
                <button @click.middle="handleClickParam('Mensaje Middle Boton')" class="btnUno">Btn Mod Middle</button>
            </div>
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

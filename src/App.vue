<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Aprendiendo VUE JS 3" />
        <nav class="navbar">
           <ul class="nav-links">
              <div class="menu">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li class="services">
                  <a href="/">Tomo I</a>
                  <ul class="dropdown">
                      <li><RouterLink to="/about">About</RouterLink></li>
                      <li><RouterLink to="/practice">Practice</RouterLink></li>
                      <li><RouterLink to="/cicles">Cicles</RouterLink></li>
                      <li><RouterLink to="/events">Eventos</RouterLink></li>
                      <li><RouterLink to="/reactive">Reactive</RouterLink></li>
                      <li><RouterLink to="/prUno">Practica 1</RouterLink></li>
                  </ul>
                </li>
                <li class="services">
                  <a href="/">Tomo II</a>
                  <ul class="dropdown">
                    <li><RouterLink to="/computed">Computed</RouterLink></li>
                    <li><RouterLink to="/prDos">Practica 2</RouterLink></li>
                  </ul>
                </li>
              </div>
           </ul>
        </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
li {
 list-style: none;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #00805a;
  color: #fff;
  border-radius: 5px 5px 5px 5px;
}
.nav-links a {
  color: #fff;
}
/* NAVBAR MENU */
.menu {
  display: flex;
  gap: 1em;
  font-size: 18px;
}
.menu li:hover {
  background-color: #4c9e9e;
  border-radius: 5px;
  transition: 0.3s ease;
}
.menu li {
  padding: 5px 14px;
}
/* DROPDOWN MENU */
.services {
  position: relative; 
}
.dropdown {
  background-color: rgb(1, 139, 139);
  padding: 1px 0;
  position: absolute; /*WITH RESPECT TO PARENT*/
  display: none;
  border-radius: 8px;
  top: 30px;
}
.dropdown li + li {
  margin-top: 5px;
}
.dropdown li {
  padding: 0.5em 1em;
  width: 8em;
  text-align: center;
}
.dropdown li:hover {
  background-color: #4c9e9e;
}
.services:hover .dropdown {
  display: block;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

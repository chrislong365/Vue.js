
<template>
  <div>
    <TopHead></TopHead>
    <navigation></navigation>
    <div class="content">
      <h1>Select a user from the list</h1>

      <ul class="users">
        <li>
          <router-link tag="button" to='/people/steven.fitzgerald@csun.edu'>Steve</router-link>
        </li>
        <li>
          <router-link tag="button" to='/people/dave.y.moon@csun.edu'>Dave</router-link>
        </li>
        <li>
          <router-link tag="button" to='/people/nerces.kazandjian@csun.edu'>Nerces</router-link>
        </li>
        <li>
          <router-link tag="button" to='/people/matthew.fritz@csun.edu'>Matt</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import navigation from '../../components/Navigation.vue';
  import TopHead from '../../components/header.vue';

  export default
  {
    components:{

      navigation,
      TopHead

    }
  }
</script>


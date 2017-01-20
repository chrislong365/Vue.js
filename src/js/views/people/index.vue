
<template>
  <div>
    <TopHead></TopHead>
    <navigation></navigation>
    <h1>Select a user from the list</h1>

    <ul class="users">
      <li>
        <router-link to='/people/steven.fitzgerald@csun.edu'>Steves Profile</router-link>
      </li>
      <li>
        <router-link to='/people/dave.y.moon@csun.edu'>Dave's Profile</router-link>
      </li>
      <li>
        <router-link to='/people/nerces.kazandjian@csun.edu'>Nerces's Profile</router-link>
      </li>
      <li>
        <router-link to='/people/matthew.fritz@csun.edu'>Matt's Profile</router-link>
      </li>
    </ul>
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


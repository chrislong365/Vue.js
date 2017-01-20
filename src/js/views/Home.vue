<template>
  <div>
    <TopHead></TopHead>
    <navigation></navigation>
    <h1>Home</h1>
  </div>
</template>

<script>
  import navigation from '../components/Navigation.vue';
  import TopHead from '../components/header.vue';


 export default
  {
    components:{
      navigation,
      TopHead
    }
  }

</script>

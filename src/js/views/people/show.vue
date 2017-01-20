
<template>
  <div>
    <TopHead></TopHead>
    <navigation></navigation>
    <h1>{{people.common_name}}</h1>
    <!-- <img v-bind:src="people.image"> -->
    <!-- <p >{{people.image_url}}</p> -->
    <h2>{{people.biography}}</h2>
    <p v-if=" people.appt_year!= null">{{people.rank}} {{people.last_name}} was hired in {{people.appt_year}}</p>

    <!-- <pre><code>{{people.image}}</code></pre> -->
    <!-- <pre><code>{{{people["image"]["image_url"]}}}</code></pre> -->

  </div>
</template>

<script>
  import axios from 'axios';
  import TopHead from '../../components/header.vue';
  import navigation from '../../components/Navigation.vue';

  export default
  {
    components:{
      navigation,
      TopHead

    },

    data(){
      return{
        people:{}
      }
    },

    created(){


      var vm = this;
      vm.people= {test:"people"}
        axios.get(`https://directory.ptg.csun.edu/api/members/email/${this.$route.params.email}`)
        .then(function (response) {
      //     function deal () {

      //     }
      //     console.log(response.data.people);
          vm.people = response.data.people;
      //     console.log(vm.people);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
        });

        console.log(this.people,'2');

    }
}

</script>

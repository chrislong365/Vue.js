
<template>
  <div>
    <TopHead></TopHead>
    <navigation></navigation>
    <div class="content">
      <div class="name">
      <img v-if="people.common_name === 'Steven M Fitzgerald'" src="https://cdn.metalab.csun.edu/photos/person_1441061318.jpg" alt="steve">
      <img v-if="people.common_name === 'Dave Y Moon'" src="https://cdn.metalab.csun.edu/photos/person_1440782395.jpg" alt="dave">
      <img v-if="people.common_name === 'Nerces Kazandjian'" src="https://cdn.metalab.csun.edu/photos/person_1484864878.jpg" alt="nerces">
      <img v-if="people.common_name === 'Matthew Fritz'" src="https://cdn.metalab.csun.edu/photos/person_1484069854.jpg" alt="matt">


    <!--   <img v-if="{{people.common_name}}==" src="" alt="">
      <img v-if="{{people.common_name}}==" src="" alt="">
      <img v-if="{{people.common_name}}==" src="" alt=""> -->

         <h1>{{people.common_name}}</h1>
      </div>
      <div class="bio">
        <h2 class="h5font">{{people.biography}}</h2>
      </div>
      <div class="hire_year">
        <p v-if=" people.appt_year!= null">{{people.rank}} {{people.last_name}} was hired in {{people.appt_year}}</p>
      </div>
    </div>

    <!-- <img v-bind:src="people.image.image_url"> -->
    <!-- <p >{{people.image_url}}</p> -->


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

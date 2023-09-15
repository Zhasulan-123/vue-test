<template>
    <div>
      <hr class="hr_bg" />
      <div class="container">
        <div class="row">
            <div class="col mr_block_fix">
                <h2>Избранное</h2>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="row" v-if="images.length > 0">
          <div 
            v-for="img in images"
            :key="img.id"
            class="col-4">
            <div class="card">
              <img :src="img.urls.regular" class="card-img-top">
            </div>
          </div>
        </div>
        <div class="row" v-else>
           <div class="text-center text-danger">Выберите в Избранное !!!</div>
        </div>
      </div>
    </div>
  </template>
  
<script>
  export default {
    name: 'Favorites',
    data() {
        return {
          images: []
        }
    },
    methods: {
        favoritesLocalStorage(){
            if(localStorage.getItem("favorites")){
                let favoritesLocalStorage = JSON.parse(localStorage.getItem("favorites"));
                return favoritesLocalStorage;
            }else{
                return [];
            }
        },
    },
    mounted() {
        this.images = this.favoritesLocalStorage();
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .mr_block_fix{
    text-align: center;
    margin: 5% 0 5% 0;
  }
  .card{
    margin-bottom: 5%;
  }
  .card-img-top{
    width: 100%;
    height: 265px;
  }
  .hr_bg{
    background: #C4C4C4;
    height: 13px;
    margin-top: 0;
  }
  .pointer_delete{
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    .col-4{
      width: 100%;
      height: 265px;
      margin-bottom: 5%;
    }
  }
  </style>

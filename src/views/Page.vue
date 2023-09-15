<template>
  <div class="bg_img">
      <div class="container">
          <div class="row pt-5 pb-5">
            <div class="col">
                <div>
                  <img src="../assets/user.png" class="float-start mt-1" alt="user">
                </div>
                <div class="d-flex flex-column flex_margin_r">
                  <h4 class="text-light float-start">{{user}}</h4>
                  <h6 class="text-light float-start">@{{ email }}</h6>
                </div>
            </div>
            <div class="col-8">
                  <div class="float-end">
                      <div class="icon_heart d-inline p-2">
                        <Heart @click="addFavorites(data)" class=""/>
                      </div>

                      <div class="d-inline p-2">
                        <button type="button" class="btn btn-warning"><Download />Downloand</button>
                      </div>
                  </div>
            </div>
          </div>
      </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <img :src="regular" class="block_img"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Heart from "@/icons/HeartIcon.vue";
import Download from "@/icons/Download.vue";

export default {
   name: "Page",
   components: {Heart, Download},
   data(){
        return {
            regular: '',
            user: '',
            email: '',
            data: '',
            favorites: []
        }
    },
    watch: {
        $route (toR){
          this.id = toR.params['id']
        }
    },
    async beforeMount(){
        const ClientId = "";

        const response = await axios.get(`https://api.unsplash.com/photos/${this.$route.params['id']}`, {
            headers: {
                Authorization: `Client-ID ${ClientId}`
            }
        })
        this.regular = response.data.urls.full;
        this.user = response.data.user.name;
        this.email = response.data.user.username;
        this.data = response.data;
    },
    methods: {
      saveToLocalSrorageFavorites(){
         localStorage.removeItem("favorites");
         localStorage.setItem("favorites", JSON.stringify(this.favorites));
      },
      addFavorites(data){
        const conf = window.confirm("Вы действительно хотите добавить в Избранное ?");
        if(conf){
          this.favorites.push(data);
          this.saveToLocalSrorageFavorites();
        }
      },
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
      this.favorites = this.favoritesLocalStorage();
      for(let index = 0; index < this.favorites.length; index++){
         const data = this.favorites[index];
         if(localStorage.getItem("favorites")){
            let favoritesLocalStorage = JSON.parse(localStorage.getItem("favorites"));
            for(let i = 0; i < favoritesLocalStorage.length; i++){
                const favoritesItem = favoritesLocalStorage[i];
            }
         }
      }
   },
}
</script>

<style lang="scss" scoped>
.bg_img{
    background: rgba(0, 0, 0, 0.5) url("@/assets/51XAfkqcUrL\ 2.jpg") no-repeat;
    height: 474px;
}
.block_img{
  height: 474px;
  width: 100%;
  margin-bottom: 5%;
}
.icon_heart{
  background: white;
  padding: 10px;
  border-radius: 20%;
  cursor: pointer;
}

.flex_margin_r{
  padding-left: 2%;
}
</style>



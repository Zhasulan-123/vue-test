<template>
  <div>
     <div class="container-fluid bg_image">
        <div class="row position_block">
            <div class="col-4">
                <form class="nosubmit">
                    <input class="nosubmit" v-model="search" type="search" placeholder="Поиск">
                </form>
            </div>
        </div>
    </div>
    <hr class="hr_bg" />
    <div class="container">
        <div class="row" v-if="searchImageFilter">
            <div 
                v-for="img in searchImageFilter"
                :key="img.id"
                class="col-4 card_block"
            >
            <router-link :to="'/page/' + img.id">
                <div class="card">
                    <img :src="img.urls.regular" :width="img.width" class="card-img-top">
                </div>
            </router-link>
            </div>
        </div>
     </div> 
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Search',
    data() {
        return {
            images: [],
            search: ''
        }
    },
    computed: {
        searchImageFilter(){
            return this.images.filter(el => {
                return el.alt_description.includes(this.search);
            });
        }
    },
    async beforeMount(){
        const ClientId = "";
        const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: { count: 8},
            headers: {
                Authorization: `Client-ID ${ClientId}`
            }
        })
        this.images = response.data;
    },
}
</script>

<style lang="scss" scoped>
.spinner_block{
    display: table;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
}
.bg_image{
    background: url("@/assets/IMG_148926-688x430\ 2.jpg") no-repeat;
    height: 253px;
}
.card{
    margin-bottom: 5%;
}
.card-img-top{
    width: 100%;
    height: 265px;
}
.position_block div{
    display: table;
    margin: 0 auto;
}

form.nosubmit {
    border: none;
    padding: 0;
    margin-top: 115px;
}

input.nosubmit {
    width: 766px;
    border: 1px solid #555;
    display: block;
    padding: 9px 4px 9px 40px;
    background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 720px center;
}
.hr_bg{
    background: #C4C4C4;
    height: 13px;
    margin-top: 0;
}

@media only screen and (max-width: 960px) {
    input.nosubmit {
        width: 666px;
        border: 1px solid #555;
        display: block;
        padding: 9px 4px 9px 40px;
        background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 620px center;
    }
}
@media only screen and (max-width: 768px) {
    input.nosubmit {
        width: 566px;
        border: 1px solid #555;
        display: block;
        padding: 9px 4px 9px 40px;
        background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 520px center;
    }
    .card_block{
        width: 100%;
        height: 265px;
        margin-bottom: 5%;
    }
}
@media only screen and (max-width: 670px) {
    input.nosubmit {
        width: 466px;
        border: 1px solid #555;
        display: block;
        padding: 9px 4px 9px 40px;
        background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 420px center;
    }
}
@media only screen and (max-width: 560px) {
    input.nosubmit {
        width: 366px;
        border: 1px solid #555;
        display: block;
        padding: 9px 4px 9px 40px;
        background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 320px center;
    }
}
@media only screen and (max-width: 460px) {
    input.nosubmit {
        width: 266px;
        border: 1px solid #555;
        display: block;
        padding: 9px 4px 9px 40px;
        background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 220px center;
    }
}
@media only screen and (max-width: 300px) {
    input.nosubmit {
        width: 166px;
        border: 1px solid #555;
        display: block;
        padding: 9px 4px 9px 40px;
        background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 120px center;
    }
}
</style>
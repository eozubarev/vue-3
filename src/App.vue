<template>
  <div class="container">
    <div class="posts__header">
      <h2 class="posts__header-title">Страница с постами</h2>
      <div class="app__btns">
        <my-input
            v-model="searchQuery"
            placeholder="Поиск..."
        />
        <my-button @click="showDialog">Создать пост</my-button>
        <my-select
            v-model="selectedSort"
            :options="sortOptions"
        />
      </div>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <div>
        <post-form @create="createPost" />
      </div>
    </my-dialog>
      <posts-list
          v-if="!isPostsLoading"
          :posts="sortedAndSearchedPosts"
          @remove="removePost"
      />
    <my-loading v-else />
<!-- вынести в отдельный компонент, чтобы можно было пропсом передавать кол-во страниц-->
    <div class="page__wrapper">
      <div
          class="page"
          v-for="pageNumber in totalPages"
          @click="changePage(pageNumber)"
          :class="{ 'active' : pageNumber === page }"
          :key="pageNumber">{{ pageNumber }}</div>
    </div>
  </div>
</template>

<script>
import PostsList from "../components/PostsList";
import PostForm from "../components/PostForm";
import axios from "axios"

export default {
  components: {
    PostForm,
    PostsList
  },
    data() {
        return {
          posts: [],
          dialogVisible: false,
          isPostsLoading: true,
          selectedSort: '',
          searchQuery: '',
          page: 1,
          limit: 10,
          totalPages: 0,
          sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержимому'}
          ]
        }
    },
   methods: {
      createPost(post) {
        this.posts.unshift(post)
        this.dialogVisible = false
      },
     removePost(post) {
        this.posts = this.posts.filter(p => p.id !== post.id)
     },
     showDialog() {
        this.dialogVisible = true;
     },
     changePage(pageNumber) {
        this.page = pageNumber;
     },
     async fetchPosts() {
        this.isPostsLoading = true;
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _page: this.page,
                _limit: this.limit
              }
            });
            this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
            this.posts = response.data;
            this.isPostsLoading = false;
        } catch (e) {
          alert('Ошибка при получении данных')
        }
     }
   },
  mounted() {
    this.fetchPosts()
  },
  computed: { // на уровне vue мы исп. не как св-во, а как переменную
    sortedPosts() {
      // в таком случае мутации массива происходить не будет
      return [...this.posts].sort((post1, post2) => {
        // сравниваем название/описание одного поста с другим
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => {
        return post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
  },

  watch: {
    page() {
      this.fetchPosts();
    }
  }



  // для массивов и объектов может понадобится включить handler / deep: true
  // watch: {
  //   // должна иметь такое же название как и модель объявленная в компоненте
  //   selectedSort(newValue) { // newValue то, на что было изменена модель
  //     this.posts.sort((post1, post2) => { // sort мутирует исходный массив
  //       // сравниваем название/описание одного поста с другим
  //       return post1[newValue]?.localeCompare(post2[newValue])
  //     })
  //   },
  // }

}
</script>

<style>

.page__wrapper {
  margin: 50px 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px 0px 5px;
  width: 30px;
  text-align: center;
  height: 30px;
  cursor: pointer;
  min-width: 8px;
  border: 1px solid teal;
  border-radius: 6px;
  font-size: 17px;
  font-family: Roboto;
  background-color: transparent;
  transition: all 0.1s linear;
}

.page.active {
  background-color: teal;
  color: white;
}

.page:hover {
  background-color: teal;
  color: white;
}


.app__btns {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
}
.posts__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0 30px;
}
.posts__header-title {
  font-family: Roboto;
  font-size: 28px;
  margin-bottom: 15px;
}
.container {
  padding: 0 20px;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
</style>
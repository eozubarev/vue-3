<template>
    <div class="posts__header">
      <h2 class="posts__header-title">Страница с постами</h2>
      <div class="app__btns">
        <my-input
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Поиск..."
            v-focus
        />
        <my-button @click="showDialog">Создать пост</my-button>
        <my-select
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
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
    <div v-intersection="loadingMorePosts" class="observer"></div>
</template>

<script>

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import PostsList from "@/components/PostsList";
import PostForm from "@/components/PostForm";

export default {
  components: {
    PostForm,
    PostsList
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadingMorePosts: 'post/loadingMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.unshift(post)
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },

}
</script>

<style>
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
</style>
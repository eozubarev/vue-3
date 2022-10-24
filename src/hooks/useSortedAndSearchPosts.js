import {computed, ref} from "vue";

export default function useSortedAndSearchPosts (posts) {
    const searchQuery = ref('')

    const sortedAndSearchPosts = computed(() => {
        return sortedPosts.value.filter(post => {
            return post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        })
    })

    return {
        searchQuery, sortedAndSearchPosts
    }

}
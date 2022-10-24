export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideDialog() {
            this.$emit('update:show', false)
        }
    },
    mounted() {
    }
    // ... можно исп и другие св-ва компонента
}
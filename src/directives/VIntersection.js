export default {
    mounted(el, binding) {
        console.log(el, binding);
        const options = {
          rootMargin: '0px',
          threshold: 1.0
        }
        const callback = (entries, observer) => {
          if (entries[0].isIntersecting) {
            console.log('пересекли')
            binding.value();
          }
        }
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el)
    },
    name: 'intersection'
}
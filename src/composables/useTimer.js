import { ref, onMounted, onUnmounted } from 'vue';

export const useTimer = (initialValue = 0) => {
    const time = ref(initialValue);

    let interval;
    onMounted(() => {
        interval = setInterval(() => {
            time.value++;
        }, 1000);
    });
    onUnmounted(() => {
        clearInterval(interval);
    });
    return { 
        time,         
        reset() {
            clearInterval(interval);
            interval = setInterval(() => {
                time.value++;
            }, 1000);
          time.value = 0;
        }   
    };
};
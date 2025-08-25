<template>
    <div ref="div">
        <h1>Timer</h1>
        <p>{{ time }}</p>
        <p>Largeur  : {{ size.width }}</p> 
        <p>Hauteur : {{ size.height }}</p>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const div = ref(null);
    const size = ref({
        width: 0,
        height: 0
    });
    const time = ref(0);
    let interval = null;
    const start = () => {

        const rect = div.value.getBoundingClientRect();

        size.value = {
            width: rect.width,
            height: rect.height
        };

        time.value = 0;
        interval = setInterval(() => {
            console.log('time', time.value);
            time.value++;
        }, 1000);
    };
    onMounted(() => {
        start();
    });

    onUnmounted(() => {
        // stoper la fuite de mémoire
        clearInterval(interval);
    });
</script>
<template>
    <div class="layout">
        <header v-if="$slots.header">
            <slot name="header"></slot>
        </header>
        <aside v-if="$slots.aside">
            <slot name="aside"></slot>
        </aside>
        <main v-if="$slots.main">
            <slot name="main"></slot>
        </main>
        <footer v-if="$slots.footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<style>
    .layout {
        display: grid;
        grid-template-columns: 200px 1fr;
    }

    .layout > * {
        border: 1px solid #ccc;
    }

    .layout header,
    .layout footer {
        grid-column: 1 / -1;
    }
</style>
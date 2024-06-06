<script setup>
import { ref } from 'vue'
import { PAGE_HOLDINGS, PAGE_PROFIT } from './constants'
import { normalizePageHash } from './functions'

import TheNav from './components/TheNav.vue'
import TheHoldings from './pages/TheHoldings.vue'
import TheProfit from './pages/TheProfit.vue'

const currentPage = ref(normalizePageHash())
function goTo(page) {
    currentPage.value = page
}
</script>
<template>
    <TheHeader />
    <section class="flex-grow mt-10">
        <TheHoldings v-show="currentPage === PAGE_HOLDINGS" />
        <TheProfit v-show="currentPage === PAGE_PROFIT" />
    </section>
    <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

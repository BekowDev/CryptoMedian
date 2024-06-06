<script setup>
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants'
defineProps(['currentPage'])
const emit = defineEmits(['navigate'])
</script>
<template>
    <nav class="sticky bottom-0 z-10">
        <ul class="flex items-center justify-between">
            <NavItem
                v-for="(icon, page) in NAV_ITEMS"
                :key="page"
                :href="`#${page}`"
                :class="
                    page === currentPage ? 'text-[#28cb84] pointer-events-none' : 'text-[#9695a9]'
                "
                @click="emit('navigate', page)"
            >
                <component :is="icon" class="w-8 h-8" />
                {{ page }}
            </NavItem>
        </ul>
    </nav>
</template>

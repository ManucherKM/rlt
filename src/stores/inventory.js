import { ref } from "vue";
import { defineStore } from "pinia";

export const useInventoryStore = defineStore('inventory', () => {
    const items = ref([
        {
            id: Date.now(),
            img: "@/assets/img/img-item.png",
            amount: 5,
        },
    ]);

    function change() {
        return items.value;
    }

    return { items, change }
})
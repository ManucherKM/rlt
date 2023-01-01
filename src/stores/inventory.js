import { ref } from "vue";
import { defineStore } from "pinia";

export const useInventoryStore = defineStore('inventoryStore', () => {

    const invetoryItems = ref([
        {
            id: 1,
            img: "/assets/img/img-item.png",
            amount: 1,
        },
        {
            id: 2,
            img: "/assets/img/img-item.png",
            amount: 2,
        },
        {
            id: 3,
            img: "/assets/img/img-item.png",
            amount: 3,
        },
        {
            id: 4,
            img: "/assets/img/img-item.png",
            amount: 4,
        },
        {
            id: 5,
            img: "/assets/img/img-item.png",
            amount: 5,
        },
        {
            id: 6,
            img: "/assets/img/img-item.png",
            amount: 6,
        },
        {
            id: 7,
            img: "/assets/img/img-item.png",
            amount: 7,
        },
        {
            id: 8,
            img: "/assets/img/img-item.png",
            amount: 8,
        },
        {
            id: 9,
            img: "/assets/img/img-item.png",
            amount: 9,
        },
        {
            id: 11,
            img: "/assets/img/img-item.png",
            amount: 11,
        },
        {
            id: 10,
            img: "/assets/img/img-item.png",
            amount: 10,
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
        {
            id: Math.floor(Math.random() * 99999999999999)
        },
    ]);

    const nextItem = ref(null);
    const prevItem = ref(null);

    function change() {
        const isEmpty = nextItem.value === null || prevItem.value === null;

        if (isEmpty) {
            return
        }

        const indxNext = invetoryItems.value.findIndex(el => el.id === nextItem.value.id);
        const indxPrev = invetoryItems.value.findIndex(el => el.id === prevItem.value.id);
        const intermediate = invetoryItems.value[indxNext];

        invetoryItems.value[indxNext] = invetoryItems.value[indxPrev];
        invetoryItems.value[indxPrev] = intermediate;

        nextItem.value = null;
        prevItem.value = null;
    }

    function updateNext(item) {
        nextItem.value = item;
    }

    function updatePrev(item) {
        prevItem.value = item;
    }

    return { invetoryItems, change, updateNext, updatePrev }
})
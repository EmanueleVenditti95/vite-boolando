import { reactive } from 'vue';
import productObj from "../src/db.json";

export const store = reactive({
    products:productObj,
});
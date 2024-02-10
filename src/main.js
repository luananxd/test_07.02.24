import { createApp } from "vue";

import App from "./App.vue";
import AppButton from "./components/UI/AppButton.vue";
import AppRadio from "./components/UI/AppRadio.vue";
import AppCheckbox from "./components/UI/AppCheckbox.vue";

const app = createApp(App);

app.component("AppButton", AppButton);
app.component("AppRadio", AppRadio);
app.component("AppCheckbox", AppCheckbox);
app.mount("#app");

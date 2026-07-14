import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({

    broadcaster: "reverb",

    key: "zwiasexhegv0ty9fzfbo",

    wsHost: "127.0.0.1",

    wsPort: 8080,

    forceTLS: false,

    enabledTransports: ["ws"],

    authEndpoint: "http://127.0.0.1:8000/broadcasting/auth",

    auth: {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    },

});

export default echo;
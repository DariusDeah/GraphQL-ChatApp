export const state = {
  users: [
    {
      id: "a-8d22-ddU",
      name: "Kyle Den",
      email: "kyleDen@gmail.com",
      photo:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80",
      mesagesSent: 4000,
      friends: ["Kade", "Kim", "Joey"],
      lastLoginAt: new Date(Date.now() - 10000),
    },
    {
      id: "b-8d99-nmU",
      name: "Kylie Ross",
      email: "kylieRoss@gmail.com",
      photo:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80",
      mesagesSent: 7000,
      friends: ["Joey", "Mark", "Maddison"],
      lastLoginAt: new Date(Date.now() - 1000000),
    },
    {
      id: "c-8d86-xyU",
      name: "Josh Allen",
      email: "joshAllen@gmail.com",
      photo:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80",
      mesagesSent: 10000,
      friends: ["Louis", "Kylie", "Joe"],
      lastLoginAt: new Date(Date.now()),
    },
  ],
  account: {
    id: "a-8d22-ddU",
    name: "Kyle Den",
    email: "kyleDen@gmail.com",
    photo:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80",
    friends: ["Kade", "Kim", "Joey"],
    lastLoginAt: new Date(Date.now() - 10000),
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utils  incididunt utils incididunt  utils incididunt utils incididunt utils incididunt utils incididunt utils incid",
  },
};

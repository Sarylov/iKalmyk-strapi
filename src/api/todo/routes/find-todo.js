module.exports = {
    routes: [
      {
        method: "GET",
        path: "/custom",
        handler: "custom-todo.custom",
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
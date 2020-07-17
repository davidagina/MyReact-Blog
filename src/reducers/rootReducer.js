const initState = {
  posts: [
    {
      id: "1",
      title: "Barbble man",
      body:
        "God has always been good to me, i cant stop thanking Him, I love you Lord",
    },
    {
      id: "2",
      title: "Rock man",
      body:
        "God has always been good to me, i cant stop thanking Him, I love you Lord",
    },
    {
      id: "3",
      title: "Tiled man",
      body:
        "God has always been good to me, i cant stop thanking Him, I love you Lord",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;

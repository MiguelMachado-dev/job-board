export const resolvers = {
  Query: {
    jobs: () => {
      return [
        {
          id: "test-id-1",
          title: "The title 1",
          description: "The description",
        },
        {
          id: "test-id-2",
          title: "The title 2",
          description: "The description",
        },
      ];
    },
  },
};

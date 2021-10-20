const listUser = {
  statement: `
query MyQuery {
  listTodos {
    items {
      description
      id
      name
    }
  }
}`,
  name: "listTodos",
};
module.exports = { listUser };

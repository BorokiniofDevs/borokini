const users =[
{id : 1 , name : "Jaffer Joffery"},
{id : 2 , name : "Toby Maguire"},
{id : 3 , name : "Esquire Mandeley"},   
]

const posts =[
    {
    "userId": 1,
    "id": 1,
    "title": "Post 1",
    "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Post 2",
    "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 2,
    "id": 3,
    "title": "Post 3",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 2,
    "id": 4,
    "title": "Post 4",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
]

export const getPosts = async()=> {
    return posts;
}
export const getPost = async(id)=> {
   const post = posts.find((post)=> post.id === parseInt(id))
return post;
// console.log(post)
  }
export const getUser = async(id)=> {
    return users.find((user)=> user.id === parseInt(id))

}
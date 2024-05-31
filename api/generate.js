const faker = require('faker');

const database = {
  articles: { articles: [], articlesCount: 0 },
  tags: {
    "tags": [
      "angular",
      "react",
      "vue",
      "java"
    ]
  },
  notification: {
    articles: [],
    tags: [],
    likeUnlike: []
  }
};

for (let i = 1; i <= 10; i++) {
  const tags = ['angular', 'react', 'vue', 'java'];
  const shuffledTags = faker.helpers.shuffle(tags);
  const tagList = shuffledTags.slice(0, faker.random.number({ min: 1, max: 4 }));

  database.articles.articles.push({
    slug: faker.lorem.slug() + '-' + i,
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    body: faker.lorem.paragraphs(5, '\\n'),
    tagList: tagList,
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    favorited: false,
    favoritesCount: faker.random.number({ min: 1, max: 1000 }),
    author: {
      username: faker.internet.userName(),
      bio: faker.lorem.sentence(),
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(faker.internet.userName())}&background=random&size=128`,
      following: faker.random.boolean()
    },
    comment: [
      {
        id: faker.random.uuid(),
        createdAt: faker.date.past().toISOString(),
        updatedAt: faker.date.recent().toISOString(),
        body: faker.lorem.paragraph(),
        author: {
          username: faker.internet.userName(),
          bio: faker.lorem.sentence(),
          image: `https://ui-avatars.com/api/?name=${encodeURIComponent(faker.internet.userName())}&background=random&size=128`,
          following: faker.random.boolean()
        },
      }
    ]
  });
  database.articles.articlesCount++;
}

console.log(JSON.stringify(database, null, 2));
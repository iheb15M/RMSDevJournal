
// Create the socket server
const fs = require('fs')
var server = require('http').createServer();
var io = require("socket.io")(server, { cors: { origin: '*' } });
const faker = require('faker');

const tags = ['javascript', 'nodejs', 'react', 'angular', 'vuejs', 'mongodb', 'mysql', 'postgresql', 'express', 'socket.io',
      'php', 'laravel', 'symfony', 'python', 'django', 'flask', 'java', 'spring', 'ruby', 'rails', 'c', 'c++', 'c#', 'dotnet', 'go', 'rust', 'swift', 'kotlin', 'flutter', 'dart', 'android', 'ios', 'mobile',
      'web', 'desktop', 'cloud', 'devops', 'docker', 'kubernetes', 'aws', 'azure', 'gcp', 'firebase', 'heroku', 'netlify', 'vercel', 'digitalocean', 'linode', 'vultr', 'cloudflare', 'nginx', 'apache', 'linux', 'ubuntu', 'debian', 'centos', 'fedora', 'redhat', 'windows', 'macos', 'ios', 'android', 'web', 'desktop', 'mobile', 'frontend', 'backend', 'fullstack',
      'devops', 'qa', 'testing', 'automation', 'manual', 'performance', 'security', 'penetration', 'hacking', 'ethical', 'cybersecurity', 'network', 'system', 'database', 'sql', 'nosql', 'graphql', 'rest', 'soap', 'microservices',
      'monolith', 'serverless', 'api', 'restful', 'soap', 'graphql',
      'websockets', 'http', 'https', 'tcp', 'udp', 'dns', 'smtp', 'imap',
      'pop3', 'ftp', 'sftp', 'ssh', 'ssl', 'tls', 'pki', 'oauth', 'openid',
      'jwt', 'saml', 'cors', 'csrf', 'xss', 'sql-injection', 'dos', 'ddos',
      'mitm', 'ransomware', 'malware', 'virus', 'trojan', 'worm', 'bot', 'rootkit',
      'keylogger', 'adware', 'spyware', 'phishing', 'social-engineering', 'brute-force', 'rainbow-table', 'hash', 'encryption', 'decryption', 'symmetric', 'asymmetric', 'rsa', 'aes', 'des', '3des', 'sha', 'md5', 'bcrypt', 'argon2', 'scrypt', 'pbkdf2', 'hmac', 'jwt', 'pki', 'ssl'
    ]

// Emit articles every between 15 seconds to 1 minutes
function emitArticles() {
  setInterval(() => {
    const newArticle = {
      slug: faker.lorem.slug(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      body: faker.lorem.paragraphs(5, '\\n'),
      tagList: [tags[Math.floor(Math.random() * tags.length)]],
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
    }
    io.emit('articles', [newArticle]);

  }, 
    // random time between 15 second to 1 minutes
    Math.floor(Math.random() * (1 * 30 * 1000 - 15 * 1000) + 15 * 1000)
);  
}

//emit tags every every between 15 seconds to 1 minutes
function emitTags() {
  setInterval(() => {
    // Your logic to read articles and emit them

    
    // get random tag from tags
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    io.emit('tags', randomTag);
  },
    // random time between 15 second to 1 minutes
    Math.floor(Math.random() * (1 * 30 * 1000 - 15 * 1000) + 15 * 1000)
  );
}

function emitLikeUnlike(){
  setInterval(() => {
    // Your logic to read articles and emit them
    fs.readFile("./database.json", (err, data) => {
      if (err) {
        console.error("Error reading database:", err);
        return;
      }
      const articles = JSON.parse(data).articles.articles;
      const nbreArticles = articles.length > 10 ? 10 : articles.length;
      // get random article from articles oen of  first 10 articles
      const randomArticle = articles[Math.floor(Math.random() * nbreArticles)];
      // update favorite attribut
      randomArticle.favorited = !randomArticle?.favorited;
      // update favorite count
      randomArticle.favoritesCount = randomArticle.favorited ? randomArticle.favoritesCount + 1 : randomArticle.favoritesCount - 1;
      io.emit('like-unlike', randomArticle);
      
      // save updated articles to database
      fs.writeFile("./database.json", JSON.stringify({ articles: { articles: articles }, tags: JSON.parse(data).tags, notification: JSON.parse(data).notification }), (err) => {
        if (err) {
          console.error("Error writing database:", err);
        }
      });

    })

       
},
    // random time between 15 second to 1 minutes
    Math.floor(Math.random() * (1 * 30 * 1000 - 15 * 1000) + 15 * 1000))
}

// Socket.IO connection event
io.on('connection', (socket) => {
  console.log('Client connected');

  emitArticles();
  emitTags();
  emitLikeUnlike();
});

server.listen(5000, () => {
  console.log('Socket server listening on port 3000');

}
)
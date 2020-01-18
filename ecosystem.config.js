module.exports = {
  apps: [
    {
      name: "client",
      port: 80,
      script: "./node_modules/nuxt/bin/nuxt-start",
      // cwd: "/home/kuraga-user/kuraga-client",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "kuraga-user",
      host: "104.28.31.242",
      ref: "origin/master",
      repo: "git@github.com:AlexSabur/kuraga-client.git",
      path: "/home/kuraga-user/kuraga-client",
      "post-deploy":
        "yarn install && yarn build && pm2 reload ecosystem.config.js --env production"
    }
  }
};

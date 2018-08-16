# Speaker Info

https://speaker.iamsaravieira.com


## How to make it your own:

1. Fork this Repo
2. Clone it
3. Edit the src/info.js with your data
4. Run `yarn build`
5. Deploy the dist folder to any static host like Now or Netlify

## The info.js file

```js

export default {
  info: {
    name: 'Sara Vieira',
    email: 'hey@iamsaravieira.com',
    location: 'Berlin, Germany',
    bio:
      'Developer Advocate at @YLDio. GraphQL and Open Source enthusiast. Conference Speaker and Airport expert. I am also into drums and horror movies.',
    website: 'https://iamsaravieira.com',
    twitter: 'https://twitter.com/NikkitaFTW',
    github: 'https://github.com/SaraVieira',
    photos: [
      'https://i.imgur.com/b8CEu1Q.jpg'
    ]
  },
  // Create a gist with your talks in MD. Mine: https://gist.github.com/SaraVieira/3a599ee71c145f4db94655440456bbab
  talksPrepared: '3a599ee71c145f4db94655440456bbab',
  videos: [
    {
      name: 'The Dream of Styleguide Driven Development',
      conference: 'JSHeroes',
      year: 2018,
      id: '_XJFeSZV6FI'
    },
    ...
  ]
}


```

## Project setup
```
yarn install
yarn dev
```

### Compile

```
yarn run build
```

export const categories = [
    {
      name: 'Fun P2E Games',
      description: 'Check them out and earn tokens...',
      imageUrl:
        'https://www.virtual-graphics.ch/wp-content/uploads/2022/10/icon_game.jpg',
      url: '#',
    },
    {
      name: 'Great Animated Shows',
      description: 'Watch them now and earn tokens...',

      imageUrl:
        'https://www.virtual-graphics.ch/wp-content/uploads/2022/10/icon_film.jpg',
      url: '#',
    },
    {
      name: 'Comics and Webtoon',
      description: 'Read them now and earn tokens',
      imageUrl:
        'https://www.virtual-graphics.ch/wp-content/uploads/2022/10/icon_comics.jpg',
      url: '#',
    },
  ]
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type Category = ElementType<typeof categories>

 
export interface Project {
  index: number
  slug: number
  data: {
    title: string
    subTitle: string
    featuredImg: string
    info: string
    backgroundColor: string
    link: string
    codelink?: string
  }
}

interface Projects {
  projects: Project[]
}

export const content: Projects = {
  projects: [
    {
      index: 0,
      slug: 1,
      data: {
        title: 'Branches',
        subTitle: 'Bilia',
        featuredImg: '/images/anlaggningar.webp',
        backgroundColor: 'rgb(205,225,179)',
        info: "A complete revamp of Bilia's branch search layout.",
        link: 'https://bilia.se/anlaggningar',
      },
    },
    {
      index: 1,
      slug: 2,
      data: {
        title: 'HackerScroller Clone',
        subTitle: 'Personal Project',
        featuredImg: '/images/hackerscroller.webp',
        backgroundColor: '#B4E7FC',
        info: 'A redesign of hackerscroller, with a new slimer and more modern look.',
        link: 'https://hackerscroller.vercel.app',
        codelink: 'https://github.com/qvisten12/hackerscroller',
      },
    },
    {
      index: 2,
      slug: 3,
      data: {
        title: 'Yutu Weather',
        subTitle: 'Personal Project',
        featuredImg: '/images/yutu.webp',
        backgroundColor: '#ece3d3',
        info: 'A weather app, designed to be easy and fast.',
        link: 'https://yutu-weather.vercel.app',
        codelink: 'https://github.com/qvisten12/yutu-weather',
      },
    },
  ],
}

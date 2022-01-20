export default {
  url: 'https://tigger.dev',
  title: 'fronttigger',
  subtitle: 'fronttigger',
  description: "fronttigger's blog",
  thumbnail: '/main-thumbnail.jpeg',
  author: {
    name: 'fronttigger',
    thumbnail: '/logo.jpeg',
    bio: 'frontend engineer',
    contacts: {
      email: 'fronttigger@gmail.com',
      facebook: '',
      telegram: '',
      twitter: '',
      github: 'https://github.com/fronttigger',
      rss: '',
      linkedin: 'https://www.linkedin.com/in/%EC%A4%80%ED%98%95-%EA%B9%80-822722214',
      instagram: '',
      line: '',
      gitlab: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    },
  },
  menus: [
    {
      id: 1,
      menu: 'posts',
      link: '/posts',
    },
    {
      id: 2,
      menu: 'about',
      link: '/about',
    },
  ],
  about: {
    title: '안녕하세요 👋 \n 저는 김준형입니다.',
    description:
      '빠르게 바뀌어 가는 웹 생태계와 다양한 언어 및 라이브러리, 프레임워크에 관심이 많습니다. \n 현재 Typescript와 React.js, GraphQL Apollo의 환경에서 개발하고 있습니다.',
    experiences: [
      {
        company: 'Frientrip (Frip)',
        job: 'Frontend Engineer',
        date: '2021. 06 ~ 현재',
        projects: [
          {
            title: '프립 웹 서비스 개편',
            date: '2021. 07 ~ 2022. 01',
            description: '프립 웹 서비스와 관련된 개발을 진행하고 있습니다.',
            tasks: [
              '프립 웹 서비스 대규모 개편 작업',
              'ContextAPI와 Hook을 이용한 상태관리',
              'Redux와 Redux-saga를 활용한 글로벌 상태관리 및 비동기 처리',
              'REST API에서 GraphQL Apollo로 전환',
              'SSR과 CSR을 사용하여 페이지 렌더링 개선',
              '모바일 앱 내 웹앱 기반의 개발 경험',
            ],
            stacks: [
              'TypeScript',
              'React.js',
              'Redux',
              'Redux-saga',
              'GraphQL Apollo',
              'Styled-Components',
              'Context API',
              'Hooks',
              'HTML/CSS',
            ],
          },
        ],
      },
      {
        company: 'Aijinet (Bodoc)',
        job: 'Frontend Engineer',
        date: '2020. 12 ~ 2021. 06',
        projects: [
          {
            title: '보닥 앱 구현 및 유지보수',
            date: '2021. 4 ~ 2021. 06',
            description: '보닥 앱을 개발 및 유지보수 하였습니다.',
            tasks: [
              '보험, 인슈어테크 비즈니스 관련 프로젝트 경험',
              'React-Native 기반 개발',
              '기타 요구사항에 따른 유지보수 진행',
            ],
            stacks: [
              'TypeScript',
              'React-Native',
              'GraphQL Apollo',
              'Styled-Components',
              'Context API',
              'Hooks',
              'HTML/CSS',
            ],
          },
          {
            title: '백오피스 구현',
            date: '2020. 12 ~ 2021. 06',
            description: '보닥 앱에 관련된 백오피스 개발을 진행하였습니다.',
            tasks: [
              'jQuery 기반 백오피스를 React.js로 전환하여 CSR을 이용한 렌더링 속도 개선',
              'ContextAPI와 Hook을 이용한 상태관리',
              'REST API에서 GraphQL Apollo로 전환',
              'Styled-Components 기반의 CSS-in-JS 개발',
              '망분리 형태의 폐쇄적인 개발 환경 경험',
            ],
            stacks: [
              'TypeScript',
              'React.js',
              'GraphQL Apollo',
              'Styled-Components',
              'Context API',
              'Hooks',
              'HTML/CSS',
            ],
          },
        ],
      },
      {
        company: 'Grovesoft',
        job: 'Backend Engineer',
        date: '2019. 06 ~ 2020. 04',
        projects: [
          {
            title: 'HomeCC 웹 애플리케이션 구현',
            date: '2019. 11 ~ 2020. 04',
            description:
              'KCC 자회사의 HomeCC 설화수 웹 애플리케이션의 백오피스 및 프론트를 개발했습니다.',
            tasks: [
              '매장, 인테리어, 이벤트, 고객센터 CRUD 등 주요 기능 개발 및 테스트',
              'Ajax를 통한 비동기 통신',
              'Java 8의 Stream, Lambda ,Optional 활용',
            ],
            stacks: [
              'Java 8',
              'Springboot 2.0',
              'JPA',
              'Gradle',
              'Postgresql',
              'Javascript',
              'JQuery',
              'HTML/CSS',
            ],
          },
          {
            title: 'Amorepacific 설화수 웹 애플리케이션',
            date: '2019. 09 ~ 2019. 11',
            description: '아모레퍼시픽의 설화수 웹 애플리케이션의 백오피스를 개발했습니다.',
            tasks: [
              '공지사항, 상품, 예약, 계정 관리 CRUD 등 주요 기능 개발',
              'Ajax를 통한 비동기 통신 경험',
            ],
            stacks: ['Java 8', 'Springboot', 'JPA', 'jQuery', 'Gradle', 'Postgresql'],
          },
        ],
      },
    ],
  },
}

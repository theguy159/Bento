const spap = {
  firstButtonsContainer: [
    {
      name: "Mail",
      icon: "mail",
      link: "https://gmail.com/",
      keybind: "m",
    },
    {
      name: "Reddit",
      icon: "newspaper",
      link: "https://reddit.com",
      keybind: "r",
    },
    {
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
      keybind: "t",
    },
    {
      name: "Youtube",
      icon: "youtube",
      link: "https://www.youtube.com/feed/subscriptions",
      keybind: "y",
    },
    {
      name: "Jellyfin",
      icon: "clapperboard",
      link: "https://jellyfin.crackle.home.arpa/web/index.html#!/home.html",
      keybind: "j",
    },
    {
      name: "Twitch",
      icon: "twitch",
      link: "https://twitch.tv",
      keybind: "T",
    },
  ],
  firstlistsContainer: [
    {
      icon: "music",
      links: [
        {
          name: "Jellyfin",
          link: "https://jellyfin.crackle.home.arpa/web/index.html#!/music.html?topParentId=7e64e319657a9516ec78490da03edccb",
          keybind: "J",
        },
        {
          name: "Soundcloud",
          link: "https://soundcloud.com/stream",
          keybind: "s",
        },
      ],
    },
    {
      icon: "film",
      links: [
        {
          name: "Netflix",
          link: "https://netflix.com",
          keybind: "n",
        },
        {
          name: "Disney+",
          link: "https://www.disneyplus.com/en-gb/home",
          keybind: "d",
        },
        {
          name: "Prime Video",
          link: "https://primevideo.com/",
          keybind: "p",
        },
        {
          name: "HBO Max",
          link: "https://play.hbomax.com/page/urn:hbo:page:home",
          keybind: "h",
        },
        {
          name: "Viaplay",
          link: "https://viaplay.no",
          keybind: "v",
        },
      ],
    },
  ],
};

const CONFIG = {
  // General
  name: "Mathias",
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "43be68ad789a366515fd497ef87a5984", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "37.775",
  defaultLongitude: "-122.419",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  firstButtonsContainer: spap.firstButtonsContainer.map((btn, i) => ({
    ...btn,
    id: i + 1,
  })),
  secondButtonsContainer: [],

  firstlistsContainer: spap.firstlistsContainer.map((list, i) => ({
    ...list,
    id: i + 1,
  })),
  secondListsContainer: [],
};

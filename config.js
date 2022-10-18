const spap = {
	firstButtonsContainer: [
		{
			name: 'Mail',
			icon: 'mail',
			link: 'https://gmail.com/',
		},
		{
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com/feed/subscriptions',
		},
		{
			name: 'Jellyfin',
			icon: 'clapperboard',
			link: 'http://spike.home.arpa:8096/web/index.html#!/home.html',
		},
	],
	firstlistsContainer: [
		{
			icon: 'music',
			links: [
				{
					name: 'Botbplayer',
					link: 'http://spike.home.arpa:3131',
				},
				{
					name: 'Jellyfin',
					link: 'http://spike.home.arpa:8096/web/index.html#!/music.html',
				},
			],
		},
	],
}

const CONFIG = {

	// General
	name: 'Mathias',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '43be68ad789a366515fd497ef87a5984', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	firstButtonsContainer: spap.firstButtonsContainer.map((btn, i) => ({...btn, id: i})),
	secondButtonsContainer: [],

	firstlistsContainer: spap.firstlistsContainer.map((list, i) => ({...list, id: i})),
	secondListsContainer: [],
};

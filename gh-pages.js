import { publish } from 'gh-pages'

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/y330/hjpotter-portfolio.git', // Update to point to your repository
		user: {
			name: 'Yonah Aviv', // update to use your name
			email: 'avivyonah@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!')
	}
)

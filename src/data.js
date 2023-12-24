const NAME_DATA = [
  {
    id: 1,
    name: 'ido Halbany',
    title: 'Invitation to join our tech meetup',
    body: 'Hey, we are hosting a tech meetup next month. Would love to have you join and possibly give a short talk. Let me know!',
    date: 'Jan 1',
  },
  {
    id: 2,
    name: 'Dudi Amsalem',
    title: 'Regarding our last meeting',
    body: 'Hi, just wanted to follow up on the points we discussed in our last meeting. Have you had a chance to review the document?',
    date: 'Jan 5',
  },
  {
    id: 3,
    name: 'Rotman',
    title: 'Your recent purchase with us',
    body: 'Thank you for shopping with us! Please find attached the invoice for your recent purchase. Let us know if you have any questions.',
    date: 'Jan 7',
  },
  {
    id: 4,
    name: 'Skype',
    title: 'Your Skype credit is running low',
    body: 'Hey there! We noticed your Skype credit is running low. Recharge now to enjoy uninterrupted calls with your loved ones.',
    date: 'Jan 10',
  },
  {
    id: 5,
    name: 'Noa Kirel',
    title: 'Announcing my new single!',
    body: 'I am thrilled to announce the release of my new single this Friday. Stay tuned and join the online premiere!',
    date: 'Feb 3',
  },
  {
    id: 6,
    name: 'Bezeq',
    title: 'Your monthly internet bill is due',
    body: 'Your internet bill for the month of February is now available. Please ensure timely payment to avoid service disruptions.',
    date: 'Feb 5',
  },
  {
    id: 7,
    name: 'Skype',
    title: 'Update your app for enhanced features',
    body: 'Good news! We have rolled out new features in the latest version of Skype. Update now to enjoy a richer experience.',
    date: 'Feb 11',
  },
  {
    id: 8,
    name: 'Rotman',
    title: 'Exclusive sale for loyal customers',
    body: 'As a token of our appreciation, we are offering an exclusive 20% discount for our loyal customers. Shop now and save big!',
    date: 'Feb 14',
  },
  {
    id: 9,
    name: 'ido Halbany',
    title: 'Can we reschedule our call?',
    body: 'Hi, due to an unexpected event, I need to reschedule our call tomorrow. Is Friday 3 PM okay for you?',
    date: 'Feb 15',
  },
  {
    id: 10,
    name: 'Dudi Amsalem',
    title: 'Slides from the recent workshop',
    body: 'As promised, I am sharing the slides from the workshop last week. Please review and share your feedback.',
    date: 'Feb 16',
  },
  {
    id: 11,
    name: 'Slack',
    title: 'Slack account sign in from a new device',
    body: 'Slack account sign in from a new browser. If this was you, you are all set',
    date: 'Feb 17',
  },
  {
    id: 12,
    name: 'Coursera',
    title: 'Explore new courses',
    body: 'A special offer for you and a friend',
    date: 'Feb 11',
  },
  {
    id: 13,
    name: 'Netlify Team',
    title: 'How to Create Lightning Fast Sites & Apps with Netlify + the Jamstack',
    body: 'Learn the benefits of Netlify',
    date: 'Feb 21',
  },
  {
    id: 14,
    name: 'SPECTRANET TEAM',
    title: 'Renew ONLINE Today 7th February 2021 and Get 100% Data Bonus',
    body: 'Dear Valued Customer, Enjoy your Sunday with More Data! Renew your account ONLINE TODAY 7th February 2021 and enjoy 100% Double data bonus at No EXTRA COST.',
    date: 'Feb 22',
  },
  {
    id: 15,
    name: 'Uber',
    title: 'Be your own boss, Tobias',
    body: 'You could earn with us by signing up to drive. Sign up to drive with us in 4 simple steps',
    date: '12/27/20',
  },
  {
    id: 16,
    name: 'Formspree',
    title: 'New submission from Porfolio Email',
    body: "NEW FORM SUBMISSION Hey there, Someone just submitted your form on tobilobadev.netlify.app/src/contact.html. Here's what they had to say:",
    date: '12/23/20',
  },
  {
    id: 17,
    name: 'Codewars',
    title: 'Your weekly Codewars Kata Featuring LA Hacks!',
    body: 'Check out these featured Codewars kata to',
    date: 'Feb 22',
  },
  {
    id: 18,
    name: 'Twitter',
    title: 'Twitter account sign in from a new device',
    body: 'Twitter account sign in from a new browser. If this was you, you are all set',
    date: 'Feb 14',
  },
  {
    id: 19,
    name: 'LinkedIn',
    title: "Hey, you're getting noticed",
    body: "See who's looking at your profile",
    date: 'Jan 24',
  },
  {
    id: 20,
    name: 'Omer Halbany',
    title: 'Hey, thanks for being a valued friend',
    body: 'Want to eat something? call me. ',
    date: 'Jan 12',
  },
  {
    id: 21,
    name: 'Facebook',
    title: 'Chukwuma Ciroma shared a link',
    body: 'See the post that he shared and engage',
    date: 'Jan 10',
  },
  {
    id: 22,
    name: 'Facebook',
    title: 'Rexxie Pexxie tagged you in a photo',
    body: 'View on facebook',
    date: 'Jan 4',
  },
  {
    id: 23,
    name: 'Facebook',
    title: "It's Marco Marco's birthday today",
    body: 'Help Marco celebrate his birthday',
    date: 'Jan 1',
  },
  {
    id: 24,
    name: 'Facebook',
    title: "It's Taco's birthday today",
    body: 'Help Taco celebrate his birthday',
    date: '12/23/20',
  },
  {
    id: 25,
    name: 'LinkedIn',
    title: "Hey, you're getting noticed",
    body: "See who's looking at your profile",
    date: '11/21/20',
  },
  {
    id: 26,
    name: 'Uche from bolt',
    title: 'Stay safe during the holidays',
    body: 'As we celebrate the holidays and say goodbye to 2020, it is important for all of us to remain safety-conscious. ',
    date: '11/03/20',
  },

  {
    id: 27,
    name: 'SPECTRANET TEAM',
    title: '100% DATA BONUS OFFER - ONLINE Renewal',
    body: 'ENJOY MORE! Renew your account ONLINE TODAY and get 100% bonus',
    date: '10/22/20',
  },
  {
    id: 28,
    name: 'Slack',
    title: 'Slack account sign in from a new device',
    body: 'Slack account sign in from a new browser. If this was you, you are all set',
    date: '10/09/20',
  },
  {
    id: 29,
    name: 'Slack',
    title: 'Slack account sign in from a new device',
    body: 'Slack account sign in from a new browser. If this was you, you are all set',
    date: '10/08/20',
  },
  {
    id: 30,
    name: 'Slack',
    title: 'Slack account sign in from a new device',
    body: 'Slack account sign in from a new browser. If this was you, you are all set',
    date: '10/06/20',
  },
  {
    id: 31,
    name: 'Twitter',
    title: 'Twitter account sign in from a new device',
    body: 'Twitter account sign in from a new browser. If this was you, you are all set',
    date: '10/06/20',
  },
  {
    id: 32,
    name: 'Twitter',
    title: 'Twitter account sign in from a new device',
    body: 'Twitter account sign in from a new browser. If this was you, you are all set',
    date: '10/04/20',
  },
  {
    id: 33,
    name: 'Twitter',
    title: 'Twitter account sign in from a new device',
    body: 'Twitter account sign in from a new browser. If this was you, you are all set',
    date: '10/01/20',
  },
  {
    id: 34,
    name: 'LinkedIn Welcome Team',
    title: 'Take your conversations with you. Be notified when you get a reply.',
    body: "Try linkedIn's free app, Build relationships that advance your career",
    date: '9/29/20',
  },
  {
    id: 35,
    name: 'Udemy',
    title: 'Enjoy your free course? Then you’ll probably love this.',
    body: 'See the difference our full learning experience gives',
    date: 'Feb 12',
  },
  {
    id: 36,
    name: 'Canva',
    title: 'Make your designs move',
    body: 'Surprise and delight with animation Weekly Newsletter Bring your designs and',
    date: 'Jan 15',
  },
  {
    id: 37,
    name: 'Adobe Creative cloud',
    title: '20+ creative apps for the price of a single one',
    body: 'Get 20+ Adobe apps with Creative Cloud. Get 2 months+',
    date: 'Jan 14',
  },
  {
    id: 38,
    name: 'Lily at FutureLearn',
    title: 'Courses to impress you 😍 (and employers!)',
    body: 'Trending courses that we think you might like',
    date: 'Jan 10',
  },

  {
    id: 39,
    name: 'Eva Product School',
    title: 'Spotted',
    body: 'Fresh products jobs from all over the world',
    date: 'Jan 3',
  },
  {
    id: 40,
    name: 'Grammarly Insights',
    title: 'No writing activity last week?',
    body: "Lets get back to it! Make sure you're logged in",
    date: '12/22/20',
  },
  {
    id: 41,
    name: 'Codepen',
    title: 'The CodePen Spark: Popsicles, Panels, and Pugs',
    body: 'The issue of the CodePen Spark is brought',
    date: '12/10/20',
  },
  {
    id: 42,
    name: 'Uche from bolt',
    title: 'Stay safe during the holidays',
    body: 'As we celebrate the holidays and say goodbye to 2020, it is important for all of us to remain safety-conscious. ',
    date: '11/19/20',
  },

  {
    id: 43,
    name: 'SPECTRANET TEAM',
    title: '100% DATA BONUS OFFER - ONLINE Renewal',
    body: 'ENJOY MORE! Renew your account ONLINE TODAY and get 100% bonus',
    date: '11/08/20',
  },
  {
    id: 44,
    name: 'Heroku',
    title: 'Deploy with confidence: create a pipeline',
    body: 'Learn how Heroku Pipelines can help you deploy efficient apps',
    date: '11/06/20',
  },
  {
    id: 45,
    name: 'PluralSight',
    title: 'Get 33% off for a limited time only',
    body: "It's one of our best deals of the year",
    date: '10/05/20',
  },
  {
    id: 46,
    name: 'Lily at FutureLearn',
    title: 'DON’T MISS THIS: 30% off FutureLearn Unlimited!',
    body: '30% off as may short courses and digital ',
    date: '10/04/20',
  },
  {
    id: 47,
    name: 'Codepen',
    title: 'The CodePen Spark: Paper, Patterns, and Pop',
    body: 'View thios issue on CodePen Paper, Patterns and Pop',
    date: '10/02/20',
  },
  {
    id: 48,
    name: 'Lily at FutureLearn',
    title: 'DON’T MISS THIS: 30% off FutureLearn Unlimited!',
    body: '30% off as may short courses and digital ',
    date: '9/30/20',
  },
  {
    id: 49,
    name: 'Uche from bolt',
    title: 'Stay safe during the holidays',
    body: 'As we celebrate the holidays and say goodbye to 2020, it is important for all of us to remain safety-conscious. ',
    date: '9/29/20',
  },

  {
    id: 50,
    name: 'SPECTRANET TEAM',
    title: '100% DATA BONUS OFFER - ONLINE Renewal',
    body: 'ENJOY MORE! Renew your account ONLINE TODAY and get 100% bonus',
    date: '9/28/20',
  },
  {
    id: 51,
    name: 'Codecademy',
    title: 'New Career Paths. New career possibilities',
    body: 'Fast-track your learning with new paths for Data Analysis and Data Science',
    date: 'Feb 12',
  },
  {
    id: 52,
    name: 'Totaljobs',
    title: 'How to Access Job Opportunities in Tech + Opportunities',
    body: 'Open this email. View this email in your broswer. Hello Tobiloba, Happy New Month',
    date: 'sept 14',
  },
  {
    id: 53,
    name: 'Codewars',
    title: "You're Invited ",
    body: 'Give your application the advantage on 6 Oct',
    date: 'Sept 11',
  },
  {
    id: 54,
    name: 'TotalJobs',
    title:
      'Application confirmation: JavaScript Developer - Real-time trading platform! with Understanding Recruitment Ltdba, here’s a chance to save when you need to move',
    body: 'It’s still safer to stay at home. But we wanted you to know that we’re here for you with great prices if and when you do need to move.',
    date: 'Feb 6',
  },
  {
    id: 55,
    name: 'Slack',
    title: 'Tobenz just joined your workspace!',
    body: 'Head to Slack to say hi to Tobenz Hop over to Slack to connect with Tobenz, who just arrived!',
    date: 'Feb 5',
  },
  {
    id: 56,
    name: 'Discord',
    title: 'falana mentioned you in Hashnode',
    body: 'Want push notifications instead? Download Discord on your phone to keep chatting while AFK, or turn off these notifications now.',
    date: 'Jan 31',
  },
  {
    id: 57,
    name: 'firebase-noreply',
    title: '[Firebase] Client access to your Realtime Database has expired',
    body: '[Firebase] Client access to your Realtime Database expired 58 day(s) ago',
    date: 'Jan 28',
  },
  {
    id: 58,
    name: 'Quincy Larson',
    title: 'Learn Data Visualization Skills [Free 17-hour Course on React and D3.js]',
    body: "Here are this week's five links that are worth your time:",
    date: 'Jan 27',
  },
  {
    id: 59,
    name: 'Discord',
    title: 'You missed messages in Junior Dev Forum',
    body: 'Want push notifications instead? Download Discord on your phone to keep chatting while AFK, or turn off these notifications now.',
    date: 'Jan 27',
  },
  {
    id: 60,
    name: 'Pluralsight',
    title: 'Which skills will you need next?',
    body: 'Develop new skills you can start using today',
    date: 'Jan 26',
  },

  {
    id: 61,
    name: 'Heroku',
    title: 'Maintain your app’s health with logging add-ons.',
    body: "Get greater visibilty into your apps's perfromance",
    date: 'Jan 25',
  },
]

export default NAME_DATA

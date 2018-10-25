/////////////////////////////////////////////////////////
// PART 1
'use strict';
/////////////////////////////////////////////////////////
// Show Profile Info
function showProfile(melonName, catchphrase, location){
  console.log(`PROFILE\n  Name: ${melonName} \n  Catchphrase: ${catchphrase}\n  Location: ${location}`);
}



/////////////////////////////////////////////////////////
// Display Likes
const interests = [
  'being annoying',
  'seeds',
  'staring at human food'
];

// Add function to print interests
function showLikes(interests) {
	console.log(`THINGS I LIKE:`);
	for (let interest of interests){
		console.log(interest);
	}
}


/////////////////////////////////////////////////////////
// Display Favorites
const favorites = {
food: 'pebbles',
tree: 'palm',
quote: 'Bock bock bock' // Add more favorites
};



// Add function to print favorites

function showFavorites(favorites) {
	console.log('FAVORITES:');
	for (let key of Object.keys(favorites)) {
		console.log(
			`${key}: ${favorites[key]}`);
	}

}

/////////////////////////////////////////////////////////
// PART 2

/////////////////////////////////////////////////////////
// Add Transactions

// Add function to add transaction
function addTransaction(date, amount, transactionObject) {

		transactionObject[date] = amount;

}

const transactions = {}
// Add transactions to object
//addTransaction('feb14', -25, transactions);
console.log(transactions);

/////////////////////////////////////////////////////////
// Get Balance Status

// Add function to calculate balance status

function getBalanceStatus(balance){
	if (balance < 0) {
	  return 'You are overdrawn';
  } else if (balance < 20) {
  	  return 'Warning Your balance is almost 0';
  } else {
  	  return 'normal'; 
  } 
}

/////////////////////////////////////////////////////////
// Calculate Current Balance

// Add function to calculate and return current balance
function getCurrentBalance(balance, transactions){
	balance += transactions[amount]
}

/////////////////////////////////////////////////////////
// Show Account Activity

// Add function to print account activity



/////////////////////////////////////////////////////////
// Creating a User Object

// Add user object

// Add function to print user dashboard



/////////////////////////////////////////////////////////
// PART 3

// Add object that keeps track of premium members

// Add function to return emails of premium members



/////////////////////////////////////////////////////////
// PART 4

// Add function to assign interns to workdays

// Add a function to generate customer support hours


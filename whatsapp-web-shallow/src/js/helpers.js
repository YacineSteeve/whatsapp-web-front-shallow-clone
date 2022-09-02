const sentences = [
	"Ooooh. That seems interesting. Tell me more!",
	"Joyce enjoyed eating pancakes with ketchup.",
	"It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.	It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"At that moment he wasn't listening to music, he was living an experience.",
	"The clock within this blog and the clock on my laptop are 1 hour different from each other.",
	"They ran around the corner to find that they had traveled back in time.",
	"Please put on these earmuffs because I can't you hear.",
	"All she wanted was the answer, but she had no idea how much she would hate it. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"He enjoys practicing his ballet in the bathroom.",
	"Can we go to the park .",
	"Where is the orange cat? Said the big black dog.",
	"We can make the bird fly away if we jump on something.",
	"We can go down to the store with the dog. It is not too far away.",
	"My big yellow cat ate the little black bird.",
	"I like to read my book at school.",
	"We are going to swim at the park. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"They improved dramatically once the lead singer left. ",
	"I hear that Nancy is very pretty. ",
	"Sometimes you have to just give up and win by cheating.",
	"Blue sounded too cold at the time and yet it seemed to work for gin.",
	"The green tea and avocado smoothie turned out exactly as would be expected.",
	"In that instant, everything changed. ",
	"I currently have 4 windows open up… and I don’t know why.",
	"Gary didn't understand why Doug went upstairs to get one dollar bills when he invited him to go cow tipping.",
	"The shark-infested South Pine channel was the only way in or out.",
	"When he asked her favorite number, she answered without hesitation that it was diamonds.",
	"She insisted that cleaning out your closet was the key to good driving.",
	"He invested some skill points in Charisma and Strength. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"Mary realized if her calculator had a history, it would be more embarrassing than her computer browser history.",
	"Cats are good pets, for they are clean and are not noisy.",
	"It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.",
	"There are over 500 starfish in the bathroom drawer.",
	"The murder hornet was disappointed by the preconceived ideas people had of him.",
	"It's not often you find a soggy banana on the street.",
	"The Japanese yen for commerce is still well-known.",
	"Shakespeare was a famous 17th-century diesel mechanic. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"He decided to live his life by the big beats manifesto.",
	"The bees decided to have a mutiny against their queen.",
	"His confidence would have bee admirable if it wasn't for his stupidity. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"He strives to keep the best lawn in the neighborhood.",
	"Carol drank the blood as if she were a vampire.",
	"Dan ate the clouds like cotton candy.",
	"He went on a whiskey diet and immediately lost three days.",
	"That is an appealing treasure map that I can't read. It's not possible to convince a monkey to give you a banana by promising it infinite bananas when they die.",
	"Henry couldn't decide if he was an auto mechanic or a priest.",
	"The small white buoys marked the location of hundreds of crab pots.",
	"Don't step on the broken glass.",
	"Her scream silenced the rowdy teenagers.",
];

const getRandomSentence = () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
};

const getRawMessages = (chat) => {
	return [].concat(...Object.values(chat.messages)).map((message) => {
		return message.content
		? message.content.toLowerCase()
		: '';
	})
}

const chatMatchSearch = (chat, search) => {
	const checkedProperties = [
		chat.name.toLowerCase(),
		chat.whatsapp_name.toLowerCase(),
		chat.phone_number.toLowerCase(),
		...getRawMessages(chat)
	]

	return search.some((word) => {

		const matchingProps = checkedProperties
		.map((prop) => prop.includes(word))
		.filter((match) => match === true);

		return matchingProps.length >= 1;
	})
}

export { 
	getRandomSentence, 
	chatMatchSearch
};

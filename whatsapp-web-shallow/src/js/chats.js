import ppGirl1 from "../assets/images/profile-picture-girl-1.jpeg";
import ppGirl2 from "../assets/images/profile-picture-girl-2.jpeg";
import ppGirl3 from "../assets/images/profile-picture-girl-3.jpeg";
import ppGirl4 from "../assets/images/profile-picture-girl-4.jpeg";
import ppBoy1 from "../assets/images/placeholder.jpg";
import ppBoy2 from "../assets/images/profile-picture-boy-2.jpeg";
import ppBoy3 from "../assets/images/profile-picture-boy-3.jpeg";
import img1 from "../assets/images/women.jpeg";
import img2 from "../assets/images/women.png";
import { getRandomSentence } from "./helpers.js";

const chats = [
	{
		id: 1,
		profile_picture: ppGirl3,
		name: "Love of my fucking life ❤️💜",
		phone_number: "+2348123456789",
		whatsapp_name: "Beyonce",
		unread: 2,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
			TODAY: [
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:10:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					image: img1,
					sender: 1,
					time: "09:12:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:12:45",
					status: "read",
				},
				{
					image: img2,
					sender: null,
					time: "09:13:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:20:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:21:26",
					status: null,
				},
			],
		},
		pinned: true,
	},
	{
		id: 2,
		profile_picture: ppGirl2,
		name: "Karen Okonkwo",
		phone_number: "+2348123456789",
		whatsapp_name: "Karen O.",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "09:11:26",
					status: null,
				},
			],
		},
		pinned: false,
	},
	{
		id: 3,
		profile_picture: ppGirl1,
		name: "Titilayo Bello",
		phone_number: "+2348123456789",
		whatsapp_name: "titi123",
		unread: 0,
		messages: {
			"04/27/2021": [
				{
					content: getRandomSentence(),
					sender: 3,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: null,
				},
			],
		},
		pinned: false,
	},
	{
		id: 4,
		profile_picture: ppBoy2,
		name: "David Schwimmer",
		phone_number: "+2348123456789",
		whatsapp_name: "David",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "unread",
				},
			],
		},
		pinned: true,
	},

	{
		id: 5,
		profile_picture: ppBoy1,
		name: "Daniel Oladeji",
		phone_number: "+2348123456789",
		whatsapp_name: "Beyonce",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		pinned: false,
	},
	{
		id: 6,
		profile_picture: ppBoy3,
		name: "Chris Breno",
		phone_number: "+2348123456789",
		whatsapp_name: "Chris",
		unread: 3,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:15:01",
					status: null,
				},
			],
		},
		pinned: false,
	},

	{
		id: 7,
		profile_picture: ppGirl3,
		name: "Julie Okonkwo",
		phone_number: "+2348123456789",
		whatsapp_name: "Jul",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 7,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 7,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		pinned: false,
	},

	{
		id: 8,
		profile_picture: ppGirl4,
		name: "Beyoncé Knowles",
		phone_number: "+2348123456789",
		whatsapp_name: "Beyonce",
		unread: 0,
		messages: {
			"04/06/2021": [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			YESTERDAY: [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			TODAY: [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: null,
					time: "08:15:45",
					status: null,
				},
			],
		},
		pinned: false,
	},
];
// console.log(JSON.stringify(chats));
export default chats;

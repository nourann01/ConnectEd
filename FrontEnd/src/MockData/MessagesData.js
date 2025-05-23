export const messages = [
  {
    id: 1,
    senderId: 1,
    receiverId: 2,
    time: "08:00 AM",
    message: "Hey Moya, how did the review go yesterday?",
    isReply: false,
    replyTo: null,
  },
  {
    id: 2,
    senderId: 2,
    receiverId: 1,
    time: "08:02 AM",
    message: "It went great! The client loved the design 💯",
    isReply: true,
    replyTo: 1,
  },
  {
    id: 3,
    senderId: 3,
    receiverId: 4,
    time: "08:10 AM",
    message: "I’m updating the readme now.",
    isReply: false,
    replyTo: null,
  },
  {
    id: 4,
    senderId: 4,
    receiverId: 3,
    time: "08:13 AM",
    message: "Perfect, I’ll handle the testing next.",
    isReply: true,
    replyTo: 3,
  },
  {
    id: 5,
    senderId: 5,
    receiverId: 1,
    time: "08:20 AM",
    message: "Let’s meet in 10 to discuss the animation timing.",
    isReply: false,
    replyTo: null,
  },
  {
    id: 6,
    senderId: 1,
    receiverId: 5,
    time: "08:22 AM",
    message: "Sure, ping me when you're ready!",
    isReply: true,
    replyTo: 5,
  },
  {
    id: 7,
    senderId: 2,
    receiverId: 3,
    time: "08:30 AM",
    message: "Can you review the PR I just pushed?",
    isReply: false,
    replyTo: null,
  },
  {
    id: 8,
    senderId: 3,
    receiverId: 2,
    time: "08:33 AM",
    message: "On it now 👌",
    isReply: true,
    replyTo: 7,
  },
  {
    id: 9,
    senderId: 1,
    receiverId: 4,
    time: "08:40 AM",
    message: "Check out the header on mobile. Looks weird.",
    isReply: false,
    replyTo: null,
  },
  {
    id: 10,
    senderId: 4,
    receiverId: 1,
    time: "08:43 AM",
    message: "Yeah I see it. I’ll tweak the CSS.",
    isReply: true,
    replyTo: 9,
  },
  {
    id: 11,
    senderId: 5,
    receiverId: 2,
    time: "08:50 AM",
    message: "We should consider a fallback for the carousel.",
    isReply: false,
    replyTo: null,
  },
  {
    id: 12,
    senderId: 2,
    receiverId: 5,
    time: "08:55 AM",
    message: "Agreed, adding it to the checklist.",
    isReply: true,
    replyTo: 11,
  },
  {
    id: 13,
    senderId: 3,
    receiverId: 1,
    time: "09:00 AM",
    message: "Final build pushed 🚀",
    isReply: false,
    replyTo: null,
  },
  {
    id: 14,
    senderId: 1,
    receiverId: 3,
    time: "09:02 AM",
    message: "Nice! Deploying now.",
    isReply: true,
    replyTo: 13,
  },
  {
    id: 15,
    senderId: 4,
    receiverId: 2,
    time: "09:05 AM",
    message: "Loved your last UI! Can I use it as a template?",
    isReply: false,
    replyTo: null,
  },
  {
    id: 16,
    senderId: 2,
    receiverId: 4,
    time: "09:06 AM",
    message: "Sure thing! Glad you liked it 😄",
    isReply: true,
    replyTo: 15,
  },
  {
    id: 17,
    senderId: 5,
    receiverId: 3,
    time: "09:10 AM",
    message: "Navbar needs to hide on scroll.",
    isReply: false,
    replyTo: null,
  },
  {
    id: 18,
    senderId: 3,
    receiverId: 5,
    time: "09:12 AM",
    message: "Just added that feature!",
    isReply: true,
    replyTo: 17,
  },
  {
    id: 19,
    senderId: 1,
    receiverId: 5,
    time: "09:15 AM",
    message: "New animation feels smoother now.",
    image: "https://www.w3schools.com/w3images/lights.jpg",
    isReply: false,
    replyTo: null,
  },
  {
    id: 20,
    senderId: 2,
    receiverId: 3,
    time: "09:18 AM",
    message: "Just FYI, the hero section is glitchy on Safari.",
    isReply: false,
    replyTo: null,
  },
  {
    id: 21,
    senderId: 3,
    receiverId: 2,
    time: "09:20 AM",
    message: "Safari... again 😑",
    isReply: true,
    replyTo: 20,
  },
  {
    id: 22,
    senderId: 4,
    receiverId: 1,
    time: "09:23 AM",
    message: "What font are we using in the navbar?",
    isReply: false,
    replyTo: null,
  },
  {
    id: 23,
    senderId: 1,
    receiverId: 4,
    time: "09:24 AM",
    message: "Montserrat. Should we switch?",
    isReply: true,
    replyTo: 22,
  },
  {
    id: 24,
    senderId: 5,
    receiverId: 4,
    time: "09:27 AM",
    message: "Looks good to me.",
    isReply: false,
    replyTo: null,
  },
  {
    id: 25,
    senderId: 2,
    receiverId: 5,
    time: "09:30 AM",
    message: "Also fixed the modal animation!",
    isReply: false,
    replyTo: null,
  },
  {
    id: 26,
    senderId: 5,
    receiverId: 2,
    time: "09:32 AM",
    message: "That was fast! Nice job.",
    isReply: true,
    replyTo: 25,
  },
  {
    id: 27,
    senderId: 1,
    receiverId: 3,
    time: "09:35 AM",
    message: "Hey, is this a good time for a quick call?",
    isReply: false,
    replyTo: null,
  },
  {
    id: 28,
    senderId: 3,
    receiverId: 1,
    time: "09:37 AM",
    message: "Sure, hop in Zoom!",
    isReply: true,
    replyTo: 27,
  },
  {
    id: 29,
    senderId: 4,
    receiverId: 2,
    time: "09:40 AM",
    message: "Check out the new hover effects 😍",
    isReply: false,
    replyTo: null,
  },
  {
    id: 30,
    senderId: 2,
    receiverId: 4,
    time: "09:42 AM",
    message: "Damn that’s smooth 🔥",
    isReply: true,
    replyTo: 29,
  },
];

export default messages;

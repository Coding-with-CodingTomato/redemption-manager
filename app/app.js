import config from "./config.js";
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const socket = io(config.eventSubUrl);

socket.on('channel.channel_points_custom_reward_redemption.add', data => {
  const jsonData = JSON.parse(data);
  const rewardId = jsonData.reward.id;

  if(rewardId === "74c3b9de-8267-4058-8a4b-6c43f37673ba") {
    //Klatschen
    const audio = new Audio('./assets/sounds/clapping.mp3');
    audio.volume = 0.4;
    audio.play();
  } else if( rewardId === "77302413-5e36-4a02-b650-d92f0e3840b9") {
    //TTS
    const username = jsonData.user_name;
    const userInput = jsonData.user_input;

    const tts = new SpeechSynthesisUtterance(`Von ${username}: ${userInput}`);
    tts.volume=0.5;
    window.speechSynthesis.speak(tts);
  } else if (rewardId === "fe4d68c7-3508-4a19-a586-f210f50f8075") {
    // It Works GIF
    const animation = document.querySelector('.animation');
    animation.src = "./assets/gifs/excited.webp";
    animation.style.opacity = 1;

    setTimeout(() => {
      animation.style.opacity = 0;
    }, 5000)
  } else if (rewardId === "fd98cc90-def7-4dbd-8da9-560ac978d7c2") {
    // Really GIF
    const animation = document.querySelector('.animation');
    animation.src = "./assets/gifs/stanlyface.webp";
    animation.style.opacity = 1;

    setTimeout(() => {
      animation.style.opacity = 0;
    }, 5000)
  } else if (rewardId === "5fe5ce02-7923-4f5f-8cfe-f9a68200caff") {
    // ERROR SOUND
    const audio = new Audio('./assets/sounds/error.mp3');
    audio.volume = 0.5;
    audio.play();
  }

  console.log(jsonData);
});
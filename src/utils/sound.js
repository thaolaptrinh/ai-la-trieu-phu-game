import waitSound from "../sounds/wait.mp3";
import wrongSound from "../sounds/wrong.mp3";
import correctSound from "../sounds/correct.mp3";
import playSound from "../sounds/play.mp3";

export default function sound() {
  const sound = new Audio();

  function playSoundFile(file) {
    sound.src = file;
    sound.play();
  }

  function stop() {
    sound.pause();
    sound.currentTime = 0;
  }

  const playGame = () => playSoundFile(playSound);
  const playWait = () => playSoundFile(waitSound);
  const playWrong = () => playSoundFile(wrongSound);
  const playCorrect = () => playSoundFile(correctSound);
  
  return { stop, playGame, playWait, playCorrect, playWrong };
}

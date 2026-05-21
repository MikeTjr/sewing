
import { Scene3D } from './engine/Scene3D.js';
import { lessons } from './lessons/data.js';
import { LessonController } from './lessons/LessonController.js';
import { renderInstructorPanel } from './ui/InstructorPanel.js';
import { renderInfoPanel } from './ui/InfoPanel.js';
import { setupControls } from './ui/Controls.js';

const scene = new Scene3D('machine-canvas');
const controller = new LessonController(lessons);

renderInstructorPanel(lessons, controller);
renderInfoPanel();
setupControls(scene);

window.addEventListener('load', () => {
  const bar = document.getElementById('loading-bar');
  const screen = document.getElementById('loading-screen');
  const app = document.getElementById('app');

  let progress = 0;
  const interval = setInterval(() => {
    progress += 20;
    bar.style.width = progress + '%';

    if(progress >= 100){
      clearInterval(interval);
      screen.classList.add('fade-out');
      app.classList.remove('hidden');
      setTimeout(() => screen.remove(), 700);
    }
  }, 180);
});

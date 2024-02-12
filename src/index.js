import './styles.css';
import scoring from "./visual-impairment/scoring";
import changeFontSize from './visual-impairment/sizing'
import changeFont from './visual-impairment/changeFont' 
import openVisual from './visual-impairment/main'
import hideImg from './visual-impairment/hideImg'

document.addEventListener('DOMContentLoaded', () => {
  scoring();
  changeFontSize();
  changeFont();
  openVisual();
  hideImg();
})
// IMPORTS
/* hero */
import { socialicon} from './data/socialData.js';
import { socials} from './components/socials.js';
/* about me */
/* skills */
/* resume */
/* counter */
import { Counter } from './components/counter.js';
import { counterData } from './data/counterData.js';
/* services */
import { Services } from './components/myServices.js';
import { myServicesData } from './data/myServicesData.js';
/* portfolio */
/* feedback */
import {Carousel } from './components/carousel/Carousel.js';
import { feedbackData } from './data/feedbackData.js';
import { feedback } from './components/feedback/feedback.js';
/* blog */
/* contacts */
/* footer */

// EXECUTION
/* hero */
socials ('.social',socialicon);
/* about me */
/* skills */
/* resume */
/* counter */
new Counter ('.counterBlock', counterData)
/* services */
new Services('.item', myServicesData)
/* portfolio */
/* feedback */
const feedbackBlock = new Carousel(feedbackData, feedback);
feedbackBlock.init();
/* blog */
/* contacts */
/* footer */
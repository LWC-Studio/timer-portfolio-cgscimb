import { LightningElement } from "lwc";

export default class App extends LightningElement {
  // title = "Welcome to Lightning Web Components!";

  // showFeatures = true;

  updateTimer() {
      let future = Date.parse("jun 12, 2022 01:30:00");
      let now = new Date();
      let diff = future - now;

      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor(diff / (1000 * 60 * 60));
      let mins = Math.floor(diff / (1000 * 60));
      let secs = Math.floor(diff / 1000);

      let d = days;
      let h = hours - days * 24;
      let m = mins - hours * 60;
      let s = secs - mins * 60;

  // this.template.querySelector(".timer")
  //   .innerHTML =
  //   '<div>' + d + '<span>Days</span></div>' +
  //   '<div>' + h + '<span>Hours</span></div>' +
  //   '<div>' + m + '<span>Minutes</span></div>' +
  //   '<div>' + s + '<span>Seconds</span></div>';
  }

  connectedCallback() {  
        this._interval = setInterval(this.updateTimer(), 1000); 
        console.log(document.querySelector(".timer"));
    } 

//   connectedCallback() {
//     // No magic numbers...

// const SECOND = 1000;
// const MINUTE = 60 * SECOND;
// const HOUR = 60 * MINUTE;
// const DAY = 24 * HOUR;

// /**
//  * Calculates the difference between two timestamps, returns a quadruple with
//  * the difference in days, hours, minutes and seconds.
//  *
//  * @param {number} future
//  */
// const timestampDiff =
//     future =>
//     /** @param {number} past */
//     past =>
//         [DAY, HOUR, MINUTE, SECOND].map((time, index, times) => {
//             const diff = future - past;
//             const previousTime = times[index - 1];

//             return (
//                 Math.floor(diff / time) -
//                 (Math.floor(diff / previousTime) * (previousTime / time) || 0)
//             );
//         });

// /**
//  * Start timer and set the content of the element.
//  *
//  * @param {string} date
//  */
// const timer =
//     date =>
//     /** @param {HTMLElement} target */
//     target => {
//         const diff = timestampDiff(Date.parse(date));

//         return setInterval(() => {
//             const [days, hours, minutes, seconds] = diff(Date.now());

//             // Ideally we should have targets for every element
//             // to avoid updating the entire innerHTML of the container with
//             // every tick.
//             target.innerHTML = `
//                 <div>${days}<span>Days</span></div>
//                 <div>${hours}<span>Hours</span></div>
//                 <div>${minutes}<span>Minutes</span></div>
//                 <div>${seconds}<span>Seconds</span></div>
//             `;
//         }, SECOND);
//     };

// // We finally run it (and we save the interval return value if we wan to stop it later)
// const interval = timer("jun 12, 2022 01:30:00")(this.template.querySelector(".timer"));
//   }
}

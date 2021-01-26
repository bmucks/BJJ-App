# BJJ-App
Brazilian Jiu-Jitsu App which features a International Brazilian Jiu-Jitsu Federation scoreboard and tournament bracket generator.
Start at Index.html
Not all features are currently available.
*******1/25/2021********
I am redoing much of this project to make the code more dynamic, ensure proper ES6 syntax is used, and to remove as many clone variables. 
This was my first major project and my ignorance created a situation where the code got very out of hand and beyond  tedious. and as I went along learning lessons, I was stuck with some aspects of the code, much of I would do very different if I were to start from scratch. Slowly I will be updating various components to eliminate any hardcoding.
Lessons we're learned and though it was a struggle, but I'm glad it happened this way.


The bracket uses flex-grow styling to appear on the bracket screen.
Variables are passed from page to page via Localstorage.
Belts underneath the scoreboard correspond to Adult IBJJF match time for each belt level.

What does work right now?
Much of the bracket generator and scoreboard.

What doesn't work?
Automatically determining winner of a tie score via advantages or penalties. 
Names to be passed in as variables on the flex bracket.
Typing in anything other than whole numbers or pressing a belt that corresponds with IBJJF match time, to set the scoreboard clock.

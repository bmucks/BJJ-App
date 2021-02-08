# BJJ-App
Please Read Before Testing


Brazilian Jiu-Jitsu App which features a International Brazilian Jiu-Jitsu Federation scoreboard and tournament bracket generator.


Start the App at Index.html



Not all features are currently available.

*******1/31/2021********
Fixed the issue with name variables not displaying properly after a match in the bracket section. This should work for brackets of eight competitors or less.
Tie functionality is still wonky and stil suffers from the previous issue.For demo purposes of the bracket system don't let it go to a tie if you want see the names be parsed.


*******1/25/2021********
I am redoing much of this project to make the code more dynamic, ensure proper ES6 syntax is used, and to remove as many clone variables possible. 
This was my first major project and my ignorance created a situation where the code got very out of hand and beyond  tedious. and as I went along learning lessons, I was stuck with some aspects of the code, much of I would do very different if I were to start from scratch. Slowly I will be updating various components to eliminate any hardcoding.
Lessons we're learned and though it was a struggle,  I'm glad it happened this way.


The bracket uses flex-grow styling to appear on the bracket screen.
Variables are passed from page to page via Localstorage.
Belts underneath the scoreboard correspond to Adult IBJJF match time for each belt level.

What does work right now?
Much of the bracket generator and scoreboard.

What doesn't work?
Automatically determining winner of a tie score via advantages or penalties. 
Names to be passed in as variables on the flex bracket.
Typing in anything other than whole numbers or pressing a belt that corresponds with IBJJF match time, to set the scoreboard clock.

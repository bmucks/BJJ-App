window.onload = function loadNames(e) {
    window.localStorage.getItem('nameArray');

    var usera = JSON.parse(localStorage.getItem('nameArray'));
    let clearstrg = document.getElementById("clear");
    clearstrg.addEventListener('click', clearlostrg)


    function clearlostrg(e) {
        localStorage.clear();

    };
    // JSON VALUES TO Seed LI

    document.getElementById("seed1").value = usera[0];
    document.getElementById("seed2").value = usera[1];
    document.getElementById("seed3").value = usera[2];
    document.getElementById("seed4").value = usera[3];
    document.getElementById("seed5").value = usera[4];
    document.getElementById("seed6").value = usera[5];
    document.getElementById("seed7").value = usera[6];
    document.getElementById("seed8").value = usera[7];
    document.getElementById("seed9").value = usera[8];
    document.getElementById("seed10").value = usera[9];
    document.getElementById("seed11").value = usera[10];
    document.getElementById("seed12").value = usera[11];
    document.getElementById("seed13").value = usera[12];
    document.getElementById("seed14").value = usera[13];
    document.getElementById("seed15").value = usera[14];
    document.getElementById("seed16").value = usera[15];

    document.getElementById("seed1bi").value = usera[16];
    document.getElementById("seed2bi").value = usera[17];
    document.getElementById("seed3bi").value = usera[18];
    document.getElementById("seed4bi").value = usera[19];
    document.getElementById("seed5bi").value = usera[20];
    document.getElementById("seed6bi").value = usera[21];
    document.getElementById("seed7bi").value = usera[22];
    document.getElementById("seed8bi").value = usera[23];
    document.getElementById("seed9bi").value = usera[24];
    document.getElementById("seed10bi").value = usera[25];
    document.getElementById("seed11bi").value = usera[26];
    document.getElementById("seed12bi").value = usera[27];
    document.getElementById("seed13bi").value = usera[28];
    document.getElementById("seed14bi").value = usera[29];
    document.getElementById("seed15bi").value = usera[30];
    document.getElementById("seed16bi").value = usera[31];
    document.getElementById("noone").value = usera[32];


    //BRACKET A 16 Competitors Rd1 Button Click
    var match1 = document.getElementById('A-m1-1-16');
    match1.addEventListener("click", alerr1);

    function alerr1(e) {
        localStorage.setItem('matchname', '1')
        alert('match1');
    }

    var match2 = document.getElementById('A-m2-1-16');
    match2.addEventListener("click", alerr2);

    function alerr2(e) {
        localStorage.setItem('matchname', '2')
        alert('match2');
    }


    var match3 = document.getElementById('A-m3-1-16');
    match3.addEventListener("click", alerr3);

    function alerr3(e) {
        localStorage.setItem('matchname', '3')
        alert('match3');
    }

    var match4 = document.getElementById('A-m4-1-16');
    match4.addEventListener("click", alerr4);

    function alerr4(e) {
        localStorage.setItem('matchname', '4')
        alert('match4');
    }


    var match5 = document.getElementById('A-m5-1-16');
    match5.addEventListener("click", alerr5);

    function alerr5(e) {
        localStorage.setItem('matchname', '5')
        alert('match5');
    }



    var match6 = document.getElementById('A-m6-1-16');
    match6.addEventListener("click", alerr6);

    function alerr6(e) {
        localStorage.setItem('matchname', '6')
        alert('match6');
    };

    var match7 = document.getElementById('A-m7-1-16');
    match7.addEventListener("click", alerr7);

    function alerr7(e) {
        localStorage.setItem('matchname', '7')
        alert('match7');
    };

    var match8 = document.getElementById('A-m8-1-16');
    match8.addEventListener("click", alerr8);

    function alerr8(e) {
        localStorage.setItem('matchname', '8')
        alert('match8');
    }

    //BRACKET A 16 Competitors Rd2 set match number


    var match1Rd2of16 = document.getElementById('A-m1-2-16');
    match1Rd2of16.addEventListener("click", alerr9o);

    function alerr9o(e) {
        localStorage.setItem('matchname', '1.2')
        alert('match1rd2');
    };

    var match2Rd2of16 = document.getElementById('A-m2-2-16');
    match2Rd2of16.addEventListener("click", alerr10);

    function alerr10(e) {
        localStorage.setItem('matchname', '2.2')
        alert('match2RD2');
    };

    var match3Rd2of16 = document.getElementById('A-m3-2-16');
    match3Rd2of16.addEventListener("click", alerr10a);

    function alerr10a(e) {
        localStorage.setItem('matchname', '3.2')
        alert('match3RD2');
    };

    var match4Rd2of16 = document.getElementById('A-m4-2-16');
    match4Rd2of16.addEventListener("click", alerr11a);

    function alerr11a(e) {
        localStorage.setItem('matchname', '4.2')
        alert('match4RD2');
    };


    //BRACKET A 16 Competitors Rd3 set match number
    var match1Rd3of16 = document.getElementById('A-m1-3-16');
    match1Rd3of16.addEventListener("click", alerr11);

    function alerr11(e) {
        localStorage.setItem('matchname', '1.3')
        alert('match1rd3');
    };
    var match2Rd3of16 = document.getElementById('A-m2-3-16');
    match2Rd3of16.addEventListener("click", alerr13a);

    function alerr13a(e) {
        localStorage.setItem('matchname', '2.3')
        alert('match2rd3');
    };

    //BRACKET A 16 Competitors Rd4 set match number
    var match1Rd4of16 = document.getElementById('A-m1-4-16');
    match1Rd4of16.addEventListener("click", alerr12AAA);

    function alerr12AAA(e) {
        localStorage.setItem('matchname', '1.4')
        alert('match1rd4');
    };

    //BRACKET A 16 Competitors Rd5 set match number
    var match1Rd5of16 = document.getElementById('A-m1-5-16');
    match1Rd5of16.addEventListener("click", alerr12AAAn);

    function alerr12AAAn(e) {
        localStorage.setItem('matchname', '1.5')
        alert('match1rd5');
    };









    //BRACKET B
    var match1B = document.getElementById("B-m1-1-16");
    match1B.addEventListener("click", alerr12);

    function alerr12(e) {
        localStorage.setItem('matchname', '111')
        alert('match1B');
    };

    var match2B = document.getElementById("B-m2-1-16");
    match2B.addEventListener("click", alerr13);

    function alerr13(e) {
        localStorage.setItem('matchname', '211')
        alert('match2B');
    };

    var match3B = document.getElementById("B-m3-1-16");
    match3B.addEventListener("click", alerr3B);

    function alerr3B(e) {
        localStorage.setItem('matchname', '311')
        alert('match3B');
    };

    var match4B = document.getElementById("B-m4-1-16");
    match4B.addEventListener("click", alerr4B);

    function alerr4B(e) {
        localStorage.setItem('matchname', '411')
        alert('match4B');
    };


    var match5B = document.getElementById("B-m5-1-16");
    match5B.addEventListener("click", alerr5B);

    function alerr5B(e) {
        localStorage.setItem('matchname', '511');
        alert('match5B');
    };



    var match6B = document.getElementById("B-m6-1-16");
    match6B.addEventListener("click", alerr6B);

    function alerr6B(e) {
        localStorage.setItem('matchname', '611')
        alert('match6B');
    };

    var match7B = document.getElementById("B-m7-1-16");
    match7B.addEventListener("click", alerr7B);

    function alerr7B(e) {
        localStorage.setItem('matchname', '711')
        alert('match7B');
    };

    var match8B = document.getElementById("B-m8-1-16");
    match8B.addEventListener("click", alerr8B);

    function alerr8B(e) {
        localStorage.setItem('matchname', '811')
        alert('match8B');
    };
    //\

    //BRACKET B 16 Competitors Rd2 set match number


    var match1Rd2of16B = document.getElementById('B-m1-2-16');
    match1Rd2of16B.addEventListener("click", alerr9);

    function alerr9(e) {
        localStorage.setItem('matchname', '112')
        alert('match1rd2');
    };

    var match2Rd2of16B = document.getElementById('B-m2-2-16');
    match2Rd2of16B.addEventListener("click", alerr10);

    function alerr10(e) {
        localStorage.setItem('matchname', '2.2');
        alert('match2RD2');
    };

    var match3Rd2of16B = document.getElementById('B-m3-2-16');
    match3Rd2of16B.addEventListener("click", alerr10a);

    function alerr10a(e) {
        localStorage.setItem('matchname', '312');
        alert('match3RD2');
    };

    var match4Rd2of16B = document.getElementById('B-m4-2-16');
    match4Rd2of16B.addEventListener("click", alerr11a);

    function alerr11a(e) {
        localStorage.setItem('matchname', '412');
        alert('match4RD2');
    };

    //BRACKET B 16 Competitors Rd3 set match number
    var match1Rd3of16B = document.getElementById('B-m1-3-16');
    match1Rd3of16B.addEventListener("click", alerr11);

    function alerr11(e) {
        localStorage.setItem('matchname', '1.13')
        alert('match1rd3');
    };
    var match2Rd3of16B = document.getElementById('B-m2-3-16');
    match2Rd3of16B.addEventListener("click", alerr13a);

    function alerr13a(e) {
        localStorage.setItem('matchname', '213')
        alert('match2rd3');
    };

    //BRACKET B 16 Competitors Rd4 set match number
    var match1Rd4of16B = document.getElementById('B-m1-4-16');
    match1Rd4of16B.addEventListener("click", alerr12AAA);

    function alerr12AAA(e) {
        localStorage.setItem('matchname', '114')
        alert('match1rd4');
    };


    //BRACKET B 16 Competitors Rd5 set match number
    var match1Rd5of16B = document.getElementById('B-m1-5-16');
    match1Rd5of16B.addEventListener("click", alerr12AAAn);

    function alerr12AAAn(e) {
        localStorage.setItem('matchname', '1')
        alert('match1rd5');
    };







    //get li
    window.localStorage.getItem('liTotal');
    var liTotals = JSON.parse(localStorage.getItem('liTotal'));
    document.getElementById("test").innerHTML = liTotals;



    //load proper bracket via li
    // 3- 4 Fighters///////////////////////////////////////////////
    if (liTotals === 4) {


        document.getElementById("seed5").style.display = "none";
        document.getElementById("seed6").style.display = "none";
        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";
        document.getElementById('A-m3-1-16').style.display = "none";
        document.getElementById('A-m4-1-16').style.display = "none";

        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";

        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";
        document.getElementById('m6-r1-16w').style.display = "none";
        document.getElementById('A-m2-2-16').style.display = "none";
        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";
        document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";
        document.getElementById('A-m1-4-16').style.display = "none";
        document.getElementById("seed5a").style.display = "none";

        document.getElementById("seed6a").style.display = "none";
        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";

        document.getElementById("seed9a").style.display = "none";

        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";
        document.getElementById("seed17a").style.display = "none";
        document.getElementById("seed18a").style.display = "none";
        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        document.getElementById("seed23a").style.display = "none";
        document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";
        document.getElementById("A-m1-2-16").style.flexGrow = "4";
        document.getElementById("A-m1-2-16").style.marginTop = "4px";
        document.getElementById("m1-r1-16w").style.flexGrow = "4";
        document.getElementById("seed15b").style.marginTop = "14px";
    }



    //2 Fighters
    if (liTotals === 2) {
        document.getElementById("sixteenB").style.display = "none";
        document.getElementById("round2li").style.display = "none";
        document.getElementById("seed3").style.display = "none";
        document.getElementById("seed4").style.display = "none";
        document.getElementById("seed5").style.display = "none";
        document.getElementById("seed6").style.display = "none";
        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";

        document.getElementById('A-m1-2-16').style.display = "none";
        document.getElementById('A-m1-2-16').style.display = "none";
        document.getElementById('A-m2-1-16').style.display = "none";
        document.getElementById('A-m3-1-16').style.display = "none";
        document.getElementById('A-m4-1-16').style.display = "none";
        document.getElementById('m2-r1-16w').style.display = "none";
        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";
        document.getElementById('m1-r1-16w').style.display = "none";
        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";
        document.getElementById('m6-r1-16w').style.display = "none";
        document.getElementById('A-m2-2-16').style.display = "none";
        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";
        document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";
        document.getElementById('A-m1-4-16').style.display = "none";
        document.getElementById("seed3a").style.display = "none";
        document.getElementById("seed4a").style.display = "none";
        document.getElementById("seed5a").style.display = "none";

        document.getElementById("seed6a").style.display = "none";
        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";

        document.getElementById("seed9a").style.display = "none";

        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";
        document.getElementById("seed17a").style.display = "none";
        document.getElementById("seed18a").style.display = "none";
        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        document.getElementById("seed23a").style.display = "none";
        document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";
        document.getElementById("seed27a").style.display = "none";
        document.getElementById("seed28a").style.display = "none";
        document.getElementById("A-m1-2-16").style.display = "none";

       
        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('storeWinner2');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('storeWinner2.29b');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinnerFinal');
    }

    //3
    if (liTotals === 3) {
        document.getElementById("sixteenB").style.display = "none";
        document.getElementById("seed5").style.display = "none";
        document.getElementById("seed6").style.display = "none";
        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";
        document.getElementById('A-m3-1-16').style.display = "none";
        document.getElementById('A-m4-1-16').style.display = "none";

        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";

        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";
        document.getElementById('m6-r1-16w').style.display = "none";
        document.getElementById('A-m2-2-16').style.display = "none";
        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";
        document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";
        document.getElementById('A-m1-4-16').style.display = "none";
        document.getElementById("seed5a").style.display = "none";

        document.getElementById("seed6a").style.display = "none";
        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";

        document.getElementById("seed9a").style.display = "none";

        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";
        document.getElementById("seed17a").style.display = "none";
        document.getElementById("seed18a").style.display = "none";
        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        document.getElementById("seed23a").style.display = "none";
        document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";
        document.getElementById("A-m1-2-16").style.flexGrow = "4";
        document.getElementById("A-m1-2-16").style.marginTop = "4px";
        document.getElementById("m1-r1-16w").style.flexGrow = "4";
        document.getElementById("seed15b").style.marginTop = "14px";
        document.getElementById("gtr2m1").style.flexGrow = "2";

        localStorage.setItem('storeWinner2', usera[2]);
        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('bronze1');
        document.getElementById("m1-r1-16w").value = localStorage.getItem('Won1.1');
        document.getElementById("m2-r1-16w").value = usera[2];
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinnerFinal');
    }


    //4
    if (liTotals === 4) {
        document.getElementById("sixteenB").style.display = "none";
        document.getElementById("seed5").style.display = "none";
        document.getElementById("seed6").style.display = "none";
        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";
        document.getElementById('A-m3-1-16').style.display = "none";
        document.getElementById('A-m4-1-16').style.display = "none";

        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";

        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";
        document.getElementById('m6-r1-16w').style.display = "none";
        document.getElementById('A-m2-2-16').style.display = "none";
        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";
        document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";
        document.getElementById('A-m1-4-16').style.display = "none";
        document.getElementById("seed5a").style.display = "none";

        document.getElementById("seed6a").style.display = "none";
        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";

        document.getElementById("seed9a").style.display = "none";

        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";
        document.getElementById("seed17a").style.display = "none";
        document.getElementById("seed18a").style.display = "none";
        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        document.getElementById("seed23a").style.display = "none";
        document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";
        document.getElementById("A-m1-2-16").style.flexGrow = "4";
        document.getElementById("A-m1-2-16").style.marginTop = "4px";
        document.getElementById("m1-r1-16w").style.flexGrow = "4";
        document.getElementById("m1-r3-16w").style.display = "none";
        document.getElementById("m2-r3-16w").style.display = "none";
        document.getElementById("seed15b").style.marginTop = "14px";
        document.getElementById("gtr2m1").style.flexGrow = "2";

        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('storeBronze1');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('storeBronze2');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinnerFinal');
        document.getElementById("m1-r1-16w").value = localStorage.getItem('Won1.1');
        document.getElementById("m2-r1-16w").value = localStorage.getItem('Won2.1');
    }


    // 5 

    if (liTotals === 5) {
        document.getElementById("sixteenB").style.display = "none";
        document.getElementById("seed1a").style.display = "none";
        document.getElementById("seed2a").style.display = "none";
        document.getElementById("seed5a").style.display = "none";
        document.getElementById("seed6a").style.display = "none";
        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";


        document.getElementById("A-m1-1-16").style.display = "none";
        document.getElementById("A-m3-1-16").style.display = "none";
        document.getElementById('A-m4-1-16').style.display = "none";

        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";

        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";
        document.getElementById('m6-r1-16w').style.display = "none";

        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";
        //document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";
        document.getElementById('A-m1-4-16').style.display = "none";

        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";

        document.getElementById("seed9a").style.display = "none";
        document.getElementById('m1-r3-16w').style.display = "none";
        document.getElementById('m2-r3-16w').style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";

        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        //document.getElementById("seed23a").style.display = "none";
        //document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";

        document.getElementById("A-m2-2-16").style.flexGrow = "4";
        document.getElementById("m1-r1-16w").value = usera[0];
        document.getElementById("m3-r1-16w").value = usera[4];
     
        document.getElementById("m4-r1-16w").value = usera[1];
      
        document.getElementById("seed4").value = usera[3];
        document.getElementById("seed3").value = usera[2];
        document.getElementById("seed4").value = usera[3];
        document.getElementById("m1-r2-16w").value = localStorage.getItem('Won2.1');
        document.getElementById("m2-r1-16w").value = localStorage.getItem('Won1.1');
        document.getElementById("m2-r2-16w").value = localStorage.getItem('Won2.2');
        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('storeBronze1');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('storeBronze2');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinnerFinal');
    }

   
    //6

    if (liTotals === 6) {
        document.getElementById("sixteenB").style.display = "none";
        document.getElementById("seed1a").style.display = "none";
        document.getElementById("seed2a").style.display = "none";

        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";

        document.getElementById('m1-r3-16w').style.display = "none";
        document.getElementById('m2-r3-16w').style.display = "none";
        document.getElementById("A-m1-1-16").style.display = "none";

        document.getElementById('A-m4-1-16').style.display = "none";

        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";
   
        document.getElementById("A-m1-3-16").style.flexGrow = "4";
        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";
        document.getElementById('m6-r1-16w').style.display = "none";

        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";
        //document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";
        document.getElementById('A-m1-4-16').style.display = "none";

        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";

        document.getElementById("seed9a").style.display = "none";

        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";

        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        //document.getElementById("seed23a").style.display = "none";
        //document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";

        document.getElementById("m1-r1-16w").value = usera[0];
        document.getElementById("m1-r2-16w").value = localStorage.getItem('Won1.2');  
        localStorage.setItem('storeWinner1', usera[0]);
        document.getElementById("m4-r1-16w").value = usera[1];
        document.getElementById("m2-r1-16w").value = localStorage.getItem('Won1.1');    
        document.getElementById("m2-r2-16w").value = localStorage.getItem('Won2.2');    
        localStorage.setItem('storeWinner4', usera[1]);
        document.getElementById("m3-r1-16w").value = localStorage.getItem('Won2.1');    
        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('storeBronze1');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('storeBronze2');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinnerFinal');
    }

    //7
    if (liTotals === 7) {
        document.getElementById("sixteenB").style.display = "none";

        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";

        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";

        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";
        document.getElementById('m6-r1-16w').style.display = "none";

        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";
        //document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";
        document.getElementById('A-m1-4-16').style.display = "none";

        document.getElementById("seed9a").style.display = "none";

        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";

        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        //document.getElementById("seed23a").style.display = "none";
        //document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";

        document.getElementById("A-m1-2-16").style.flexGrow = "3";

        document.getElementById("m1-r1-16w").style.flexGrow = "2";

        document.getElementById('m1-r3-16w').style.display = "none";
        document.getElementById('m2-r3-16w').style.display = "none";
        document.getElementById("m1-r2-16w").style.flexGrow = "1";
        document.getElementById("A-m1-2-16").style.flexGrow = "3";
        document.getElementById("A-m2-2-16").style.flexGrow = "3";
        document.getElementById("A-m1-3-16").style.flexGrow = "3";
      
        localStorage.setItem('storeWinner4', usera[6]);
   
        document.getElementById("m1-r1-16w").value = localStorage.getItem('Won1.1');  
        document.getElementById("m1-r2-16w").value = localStorage.getItem('Won2.1'); 
        document.getElementById("m2-r1-16w").value = localStorage.getItem('Won2.1');  
        document.getElementById("m2-r2-16w").value = localStorage.getItem('Won2.2'); 
        document.getElementById("m3-r1-16w").value = localStorage.getItem('Won3.1');  
        document.getElementById("m4-r1-16w").value = usera[6];
        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('storeBronze1');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('storeBronze2');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinnerFinal');
    }

    if (liTotals === 8) {
        document.getElementById("sixteenB").style.display = "none";

        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";

        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";

        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";
        document.getElementById('m6-r1-16w').style.display = "none";

        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";
        //document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";
        document.getElementById('A-m1-4-16').style.display = "none";

        document.getElementById("seed9a").style.display = "none";

        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";

        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        //document.getElementById("seed23a").style.display = "none";
        //document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";

        document.getElementById("A-m1-2-16").style.flexGrow = "3";

        document.getElementById("m1-r1-16w").style.flexGrow = "2";

        document.getElementById('m1-r3-16w').style.display = "none";
        document.getElementById('m2-r3-16w').style.display = "none";
        document.getElementById("m1-r2-16w").style.flexGrow = "1";
        document.getElementById("A-m1-2-16").style.flexGrow = "3";
        document.getElementById("A-m2-2-16").style.flexGrow = "3";
        document.getElementById("A-m1-3-16").style.flexGrow = "3";

        document.getElementById("m1-r1-16w").value = localStorage.getItem('Won1.1');
        document.getElementById("m1-r2-16w").value = localStorage.getItem('Won1.1');
        document.getElementById("m2-r1-16w").value = localStorage.getItem('Won2.1');
        document.getElementById("m2-r2-16w").value = localStorage.getItem('Won2.2');
        document.getElementById("m3-r1-16w").value = localStorage.getItem('Won3.1');
        document.getElementById("m4-r1-16w").value = localStorage.getItem('Won4.1');
        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('storeBronze1');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('storeBronze2');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinnerFinal');
    }
    





    ////////// nine
    if (liTotals === 9) {

        document.getElementById("seed5").style.display = "none";
        document.getElementById("seed6").style.display = "none";
        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";


        document.getElementById("seed5a").style.display = "none";
        document.getElementById("seed6a").style.display = "none";
        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";
        document.getElementById("seed9a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";
        document.getElementById("seed17a").style.display = "none";
        document.getElementById("seed18a").style.display = "none";
        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        document.getElementById("seed23a").style.display = "none";
        document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";


        //document.getElementById("seed1bi").style.display = "none";
        //document.getElementById("seed2bi").style.display = "none";
        document.getElementById("seed3bi").style.display = "none";
        document.getElementById("seed7bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed4bi").style.display = "none";
        document.getElementById("seed6bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed5bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed7bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed10bi").style.display = "none";
        document.getElementById("seed11bi").style.display = "none";
        document.getElementById("seed12bi").style.display = "none";
        document.getElementById("seed13bi").style.display = "none";
        document.getElementById("seed14bi").style.display = "none";
        document.getElementById("seed15bi").style.display = "none";
        document.getElementById("seed16bi").style.display = "none";
        document.getElementById("seed29bi").style.display = "none";
        document.getElementById("seed30bi").style.display = "none";
        document.getElementById("seed32bi").style.display = "none";



        document.getElementById("seed3b").style.display = "none";
        document.getElementById("seed4b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed5b").style.display = "none";
        document.getElementById("seed6b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed9b").style.display = "none";
        document.getElementById("seed10b").style.display = "none";
        document.getElementById("seed11b").style.display = "none";
        document.getElementById("seed12b").style.display = "none";
        document.getElementById("seed13b").style.display = "none";
        document.getElementById("seed14b").style.display = "none";
        document.getElementById("seed15b").style.display = "none";
        document.getElementById("seed16b").style.display = "none";
        document.getElementById("seed21b").style.display = "none";
        document.getElementById("seed22b").style.display = "none";
        document.getElementById("seed23b").style.display = "none";
        document.getElementById("seed24b").style.display = "none";
        //document.getElementById("seed25b").style.display = "none";
        //document.getElementById("seed26b").style.display = "none";
        document.getElementById("seed27b").style.display = "none";
        document.getElementById("seed28b").style.display = "none";
        document.getElementById("seed29b").style.display = "none";
        document.getElementById("seed30b").style.display = "none";
        document.getElementById("seed32b").style.display = "none";

        document.getElementById('m1-r3-16w').style.display = "none";
        document.getElementById('m2-r3-16w').style.display = "none";
        document.getElementById('A-m3-1-16').style.display = "none";
        document.getElementById('A-m4-1-16').style.display = "none";
        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";

        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";
        document.getElementById('m6-r1-16w').style.display = "none";

        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";

        document.getElementById('A-m2-2-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";
        document.getElementById('A-m1-4-16').style.display = "none";
        document.getElementById('A-m1-3-16').style.display = "none";

        // document.getElementById('A-m1--16').style.display = "none";
        //  document.getElementById("seed9a").style.display = "none";


        document.getElementById("A-m1-2-16").style.flexGrow = "3";
        document.getElementById("B-m2-1-16").style.display = "none";
        document.getElementById("B-m3-1-16").style.display = "none";
        document.getElementById("m1-r1-16w").style.flexGrow = "2";
        document.getElementById("m1-r2-16w").style.flexGrow = "2";
        document.getElementById("A-m1-3-16").style.flexGrow = "2";
        document.getElementById("B-m3-2-16").style.display = "none";
        document.getElementById("B-m2-3-16").style.display = "none";
        document.getElementById("B-m4-1-16").style.display = "none";
        document.getElementById("B-m1-4-16").style.display = "none";
        document.getElementById("B-m5-1-16").style.display = "none";
        document.getElementById("B-m6-1-16").style.display = "none";
        document.getElementById("B-m7-1-16").style.display = "none";
        document.getElementById("B-m8-1-16").style.display = "none";
        document.getElementById("B-m4-2-16").style.display = "none";
      

        document.getElementById("seed1bi").value = usera[7];

        document.getElementById("seed2bi").value = usera[8];
        //document.getElementById("seed3bi").value = usera[6];
        // document.getElementById("seed4bi").value = usera[7];
        document.getElementById("seed17bi").value = usera[4];
        let winner119b = localStorage.getItem('storeWinner1.19b');
        document.getElementById("seed18bi").value = winner119b;
        document.getElementById("seed19bi").value = usera[5];
        document.getElementById("seed20bi").value = usera[6];
        document.getElementById("seed25bi").value = localStorage.getItem('storeWinner1.29b');
        document.getElementById("seed26bi").value = localStorage.getItem('storeWinner2.29b');
        document.getElementById("seed31bi").value = localStorage.getItem('storeWinner1.39b');

        document.getElementById("seedF1i").value = localStorage.getItem('storeWinner1.2');
        document.getElementById("seedF2i").value = localStorage.getItem('storeWinner1.39b');

        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('storeBronze1');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('storeBronze2');

        document.getElementById("m1-r1-16w").value = localStorage.getItem('Won1.1');
        document.getElementById("m2-r1-16w").value = localStorage.getItem('Won2.1');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('Won1.2');
        var match1li9 = document.getElementById('B-m1-1-16');
        var match1rd2li9 = document.getElementById('B-m1-2-16');
        var match2rd2li9 = document.getElementById('B-m2-2-16');
        var match1rd3li9 = document.getElementById('B-m1-3-16');
        var final = document.getElementById("F-m1-1-16");
        match1li9.addEventListener("click", alerr4);

        function alerr4(e) {
            localStorage.setItem('matchname', '1119')
          
        }

        match1rd2li9.addEventListener("click", alerr49);

        function alerr49(e) {
            localStorage.setItem('matchname', '1129')
   
        }

        match2rd2li9.addEventListener("click", alerr49s);

        function alerr49s(e) {
            localStorage.setItem('matchname', '2129')
           
        }
        match1rd3li9.addEventListener("click", alerr49s7);

        function alerr49s7(e) {
            localStorage.setItem('matchname', '1139')
       
        }

        final.addEventListener("click", alerrf);

        function alerrf(e) {
            localStorage.setItem('matchname', '99')
    
        }
    }




    //10 man

    if (liTotals === 10) {

        document.getElementById("seed3").style.display = "none";
        document.getElementById("seed4").style.display = "none";
        document.getElementById("seed5").style.display = "none";
        document.getElementById("seed6").style.display = "none";
        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";


        document.getElementById("seed3a").style.display = "none";
        document.getElementById("seed4a").style.display = "none";
        document.getElementById("seed5a").style.display = "none";
        document.getElementById("seed6a").style.display = "none";
        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";
        document.getElementById("seed9a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";
        //document.getElementById("seed17a").style.display = "none";
        // document.getElementById("seed18a").style.display = "none";
        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        //  document.getElementById("seed23a").style.display = "none";
        //document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";


        //document.getElementById("seed1bi").style.display = "none";
        //document.getElementById("seed2bi").style.display = "none";
        document.getElementById("seed3bi").style.display = "none";
        document.getElementById("seed7bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed4bi").style.display = "none";
        document.getElementById("seed6bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed5bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed7bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed10bi").style.display = "none";
        document.getElementById("seed11bi").style.display = "none";
        document.getElementById("seed12bi").style.display = "none";
        document.getElementById("seed13bi").style.display = "none";
        document.getElementById("seed14bi").style.display = "none";
        document.getElementById("seed15bi").style.display = "none";
        document.getElementById("seed16bi").style.display = "none";
        document.getElementById("seed29bi").style.display = "none";
        document.getElementById("seed30bi").style.display = "none";
        document.getElementById("seed32bi").style.display = "none";



        document.getElementById("seed3b").style.display = "none";
        document.getElementById("seed4b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed5b").style.display = "none";
        document.getElementById("seed6b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed9b").style.display = "none";
        document.getElementById("seed10b").style.display = "none";
        document.getElementById("seed11b").style.display = "none";
        document.getElementById("seed12b").style.display = "none";
        document.getElementById("seed13b").style.display = "none";
        document.getElementById("seed14b").style.display = "none";
        document.getElementById("seed15b").style.display = "none";
        document.getElementById("seed16b").style.display = "none";
        document.getElementById("seed21b").style.display = "none";
        document.getElementById("seed22b").style.display = "none";
        document.getElementById("seed23b").style.display = "none";
        document.getElementById("seed24b").style.display = "none";
        //document.getElementById("seed25b").style.display = "none";
        //document.getElementById("seed26b").style.display = "none";
        document.getElementById("seed27b").style.display = "none";
        document.getElementById("seed28b").style.display = "none";
        //document.getElementById("seed29b").style.display = "none";
        document.getElementById("seed30b").style.display = "none";
        //document.getElementById("seed30b").style.display = "none";
        //document.getElementById("seed31b").style.display = "none";
        document.getElementById("seed32b").style.display = "none";

        //document.getElementById('A-m1-1-16').style.display = "none";
        document.getElementById('A-m2-1-16').style.display = "none";
        document.getElementById('A-m3-1-16').style.display = "none";
        document.getElementById('A-m4-1-16').style.display = "none";
        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";
        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";


        // document.getElementById('A-m1-2-16').style.display = "none";
        // document.getElementById('A-m2-2-16').style.display = "none";      
        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";


        // document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";

        document.getElementById('A-m1-4-16').style.display = "none";




        document.getElementById('m6-r1-16w').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";


        document.getElementById("B-m2-1-16").style.display = "none";
        document.getElementById("B-m3-1-16").style.display = "none";
        document.getElementById("B-m4-1-16").style.display = "none";
        document.getElementById("B-m5-1-16").style.display = "none";
        document.getElementById("B-m6-1-16").style.display = "none";
        document.getElementById("B-m7-1-16").style.display = "none";
        document.getElementById("B-m8-1-16").style.display = "none";

        document.getElementById("B-m3-2-16").style.display = "none";
        document.getElementById("B-m4-2-16").style.display = "none";

        document.getElementById("B-m2-3-16").style.display = "none";

        document.getElementById("B-m1-4-16").style.display = "none";



        //flex
        document.getElementById("A-m1-2-16").style.flexGrow = "3";
        document.getElementById("m1-r1-16w").style.flexGrow = "2";
        document.getElementById("m1-r2-16w").style.flexGrow = "2";
        document.getElementById("A-m1-3-16").style.flexGrow = "2";

        //values

        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinner1.2');
        document.getElementById("m2-r1-16w").value = localStorage.getItem('storeWinner11110');
        document.getElementById("seed1bi").value = usera[8];

        document.getElementById("seed2bi").value = usera[9];
        //document.getElementById("seed3bi").value = usera[6];
        // document.getElementById("seed4bi").value = usera[7];
        document.getElementById("seed17bi").value = usera[5];
        let winner119b = localStorage.getItem('storeWinner1.19b');
        document.getElementById("seed18bi").value = winner119b;
        document.getElementById("seed19bi").value = usera[6];
        document.getElementById("seed20bi").value = usera[7];
        document.getElementById("seed25bi").value = localStorage.getItem('storeWinner111102');
        document.getElementById("seed26bi").value = localStorage.getItem('storeWinner212102');
        document.getElementById("seed31bi").value = localStorage.getItem('storeWinner113102');

        document.getElementById("seedF1i").value = localStorage.getItem('storeWinner11310');
        document.getElementById("seedF2i").value = localStorage.getItem('storeWinner113102');

        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('storeWinner11210');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('storeWinner212102');

        document.getElementById("seed1").value = usera[3];
        document.getElementById("seed2").value = usera[4];
        document.getElementById("m1-r1-16w").value = usera[0];
        document.getElementById("m3-r1-16w").value = usera[2];
        document.getElementById("m4-r1-16w").value = usera[3];
        document.getElementById("m1-r2-16w").value = localStorage.getItem('storeWinner11210');
        document.getElementById("m2-r2-16w").value = localStorage.getItem('storeWinner21210');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinner11310');
        document.getElementById("seed18bi").value = localStorage.getItem('storeWinner111102');


        var match1li10 = document.getElementById('A-m1-1-16');
        var match1rd2li9 = document.getElementById('A-m1-2-16');
        var match2rd2li9 = document.getElementById('A-m2-2-16');
        var match1rd3li9 = document.getElementById('A-m1-3-16');
        var final = document.getElementById("F-m1-1-16");
        match1li10.addEventListener("click", alerr4);

        function alerr4(e) {
            localStorage.setItem('matchname', '11110')
            alert('match1111');
        }

        match1rd2li9.addEventListener("click", alerr49);

        function alerr49(e) {
            localStorage.setItem('matchname', '1129')
            alert('match1129');
        }

        match2rd2li9.addEventListener("click", alerr49s);

        function alerr49s(e) {
            localStorage.setItem('matchname', '2129')
            alert('match2129');
        }
        match1rd3li9.addEventListener("click", alerr49s7);

        function alerr49s7(e) {
            localStorage.setItem('matchname', '1139')
            alert('match1139');
        }

        final.addEventListener("click", alerrf)

        function alerrf(e) {
            localStorage.setItem('matchname', '99')
            alert('ff')
        }

        var match1li10B = document.getElementById('B-m1-1-16');

        var match1rd2li10B = document.getElementById('B-m1-2-16');
        var match2rd2li10B = document.getElementById('B-m2-2-16');
        var match1rd3li10B = document.getElementById('B-m1-3-16');
        var match1rd2li10 = document.getElementById('A-m1-2-16');
        var match2rd2li10 = document.getElementById('A-m2-2-16');
        var match1rd3li10 = document.getElementById('A-m1-3-16');
        var final = document.getElementById("F-m1-1-16");

        match1li10.addEventListener("click", alerr4);

        function alerr4(e) {
            localStorage.setItem('matchname', '11110')
            alert('match11110')
        };

        match1li10B.addEventListener("click", alerr4);

        function alerr4(e) {
            localStorage.setItem('matchname', '111102')
            alert('match111102')
        };

        match1rd2li10.addEventListener("click", alerr49);

        function alerr49(e) {
            localStorage.setItem('matchname', '11210')
            alert('match11210')
        };

        match1rd2li10B.addEventListener("click", alerr49);

        function alerr49(e) {
            localStorage.setItem('matchname', '112102')
            alert('match11210B')
        };

        match2rd2li10.addEventListener("click", alerr49s);

        function alerr49s(e) {
            localStorage.setItem('matchname', '21210')
            alert('match21210');
        }
        match2rd2li10B.addEventListener("click", alerr49s);

        function alerr49s(e) {
            localStorage.setItem('matchname', '212102')
            alert('match212102');
        }
        match1rd3li10.addEventListener("click", alerr49s7);

        function alerr49s7(e) {
            localStorage.setItem('matchname', '11310')
            alert('match11310');
        }
        match1rd3li10B.addEventListener("click", alerr49s7);

        function alerr49s7(e) {
            localStorage.setItem('matchname', '113102')
            alert('match11310');
        }

        final.addEventListener("click", alerrf);

        function alerrf(e) {
            localStorage.setItem('matchname', '910')
            alert('ff');
        }
    }


    //11 man/////

    if (liTotals === 11) {

        //document.getElementById("seed3").style.display = "none";
        // document.getElementById("seed4").style.display = "none";
        document.getElementById("seed5").style.display = "none";
        document.getElementById("seed6").style.display = "none";
        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";


        //  document.getElementById("seed3a").style.display = "none";
        // document.getElementById("seed4a").style.display = "none";
        document.getElementById("seed5a").style.display = "none";
        document.getElementById("seed6a").style.display = "none";
        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";
        document.getElementById("seed9a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";
        //document.getElementById("seed17a").style.display = "none";
        // document.getElementById("seed18a").style.display = "none";
        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        //  document.getElementById("seed23a").style.display = "none";
        //document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";


        //document.getElementById("seed1bi").style.display = "none";
        //document.getElementById("seed2bi").style.display = "none";
        //document.getElementById("seed3bi").style.display = "none";
        document.getElementById("seed7bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        //document.getElementById("seed4bi").style.display = "none";
        document.getElementById("seed6bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        //document.getElementById("seed5bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed7bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed10bi").style.display = "none";
        document.getElementById("seed11bi").style.display = "none";
        document.getElementById("seed12bi").style.display = "none";
        document.getElementById("seed13bi").style.display = "none";
        document.getElementById("seed14bi").style.display = "none";
        document.getElementById("seed15bi").style.display = "none";
        document.getElementById("seed16bi").style.display = "none";
        document.getElementById("seed29bi").style.display = "none";
        document.getElementById("seed30bi").style.display = "none";
        document.getElementById("seed32bi").style.display = "none";



        //document.getElementById("seed3b").style.display = "none";
        //document.getElementById("seed4b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed5b").style.display = "none";
        document.getElementById("seed6b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed9b").style.display = "none";
        document.getElementById("seed10b").style.display = "none";
        document.getElementById("seed11b").style.display = "none";
        document.getElementById("seed12b").style.display = "none";
        document.getElementById("seed13b").style.display = "none";
        document.getElementById("seed14b").style.display = "none";
        document.getElementById("seed15b").style.display = "none";
        document.getElementById("seed16b").style.display = "none";
        document.getElementById("seed21b").style.display = "none";
        document.getElementById("seed22b").style.display = "none";
        document.getElementById("seed23b").style.display = "none";
        document.getElementById("seed24b").style.display = "none";
        //document.getElementById("seed25b").style.display = "none";
        //document.getElementById("seed26b").style.display = "none";
        document.getElementById("seed27b").style.display = "none";
        document.getElementById("seed28b").style.display = "none";
        //document.getElementById("seed29b").style.display = "none";
        document.getElementById("seed30b").style.display = "none";
        //document.getElementById("seed30b").style.display = "none";
        //document.getElementById("seed31b").style.display = "none";
        document.getElementById("seed32b").style.display = "none";

        //document.getElementById('A-m1-1-16').style.display = "none";
        //document.getElementById('A-m2-1-16').style.display = "none";
        document.getElementById('A-m3-1-16').style.display = "none";
        document.getElementById('A-m4-1-16').style.display = "none";
        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";
        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";

        // document.getElementById('A-m1-2-16').style.display = "none";
        // document.getElementById('A-m2-2-16').style.display = "none";      
        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";


        // document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";

        document.getElementById('A-m1-4-16').style.display = "none";


        document.getElementById('m6-r1-16w').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";


        //document.getElementById("B-m2-1-16").style.display = "none";
        document.getElementById("B-m3-1-16").style.display = "none";
        document.getElementById("B-m4-1-16").style.display = "none";
        document.getElementById("B-m5-1-16").style.display = "none";
        document.getElementById("B-m6-1-16").style.display = "none";
        document.getElementById("B-m7-1-16").style.display = "none";
        document.getElementById("B-m8-1-16").style.display = "none";

        document.getElementById("B-m3-2-16").style.display = "none";
        document.getElementById("B-m4-2-16").style.display = "none";

        document.getElementById("B-m2-3-16").style.display = "none";

        document.getElementById("B-m1-4-16").style.display = "none";



        //flex
        document.getElementById("A-m1-2-16").style.flexGrow = "3";
        document.getElementById("m1-r1-16w").style.flexGrow = "2";
        document.getElementById("m1-r2-16w").style.flexGrow = "2";
        document.getElementById("A-m1-3-16").style.flexGrow = "2";

        //values

        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinner1.2');
        document.getElementById("m2-r1-16w").value = localStorage.getItem('storeWinner11110');
        document.getElementById("seed1bi").value = usera[8];

        document.getElementById("seed2bi").value = usera[9];
        document.getElementById("seed3bi").value = usera[7];
        document.getElementById("seed4bi").value = usera[10];
        document.getElementById("seed17bi").value = usera[5];
        let winner119b = localStorage.getItem('storeWinner1.19b');
        document.getElementById("seed18bi").value = localStorage.getItem('storeWinner111112');
        document.getElementById("seed19bi").value = usera[6];
        document.getElementById("seed20bi").value = localStorage.getItem('storeWinner211112');;
        document.getElementById("seed25bi").value = localStorage.getItem('storeWinner112112');
        document.getElementById("seed26bi").value = localStorage.getItem('storeWinner212112');
        document.getElementById("seed31bi").value = localStorage.getItem('storeWinner113112');

        document.getElementById("seedF1i").value = localStorage.getItem('storeWinner11311');
        document.getElementById("seedF2i").value = localStorage.getItem('storeWinner113112');

        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('bronze1');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('bronze2');

        document.getElementById("seed1").value = usera[3];
        document.getElementById("seed2").value = usera[4];
        document.getElementById("m1-r1-16w").value = usera[0];
        document.getElementById("m2-r1-16w").value = localStorage.getItem('storeWinner11111');
        document.getElementById("m3-r1-16w").value = localStorage.getItem('storeWinner2');
        document.getElementById("m4-r1-16w").value = usera[1];
        document.getElementById("m1-r2-16w").value = localStorage.getItem('storeWinner11211');
        document.getElementById("m2-r2-16w").value = localStorage.getItem('storeWinner21211');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinner11311');




        var match1rd2li11 = document.getElementById('A-m1-2-16');
        var match2rd2li11 = document.getElementById('A-m2-2-16');
        var match1rd3li11 = document.getElementById('A-m1-3-16');
        var final = document.getElementById("F-m1-1-16");


        final.addEventListener("click", alerrf);

        function alerrf(e) {
            localStorage.setItem('matchname', '911')
            alert('ff');
        };

        var match1li11 = document.getElementById('A-m1-1-16');
        var match1li11B = document.getElementById('B-m1-1-16');
        var match2li11B = document.getElementById('B-m2-1-16');
        var match1rd2li11B = document.getElementById('B-m1-2-16');
        var match2rd2li11B = document.getElementById('B-m2-2-16');
        var match1rd3li11B = document.getElementById('B-m1-3-16');
        var match1rd2li11 = document.getElementById('A-m1-2-16');
        var match2rd2li11 = document.getElementById('A-m2-2-16');

        var final = document.getElementById("F-m1-1-16");

        match1li11.addEventListener("click", alerr4a);

        function alerr4a(e) {
            localStorage.setItem('matchname', '11111')
            alert('match11111')
        };

        match1li11B.addEventListener("click", alerrd4);

        function alerrd4(e) {
            localStorage.setItem('matchname', '111112')
            alert('match111112')
        };

        match2li11B.addEventListener("click", alerr4);

        function alerr4(e) {
            localStorage.setItem('matchname', '211112')
            alert('match211112')
        };

        match1rd2li11.addEventListener("click", alerr49);

        function alerr49(e) {
            localStorage.setItem('matchname', '11211')
            alert('match11211')
        };

        match1rd2li11B.addEventListener("click", alerr451);

        function alerr451(e) {
            localStorage.setItem('matchname', '112112')
            alert('match112112');
        }

        match2rd2li11.addEventListener("click", alerr49sa);

        function alerr49sa(e) {
            localStorage.setItem('matchname', '21211')
            alert('match21211');
        }

        match2rd2li11B.addEventListener("click", alerr49s);

        function alerr49s(e) {
            localStorage.setItem('matchname', '212112')
            alert('match212112');
        }

        match1rd3li11.addEventListener("click", alerr49s7);

        function alerr49s7(e) {
            localStorage.setItem('matchname', '11311')
            alert('match11311');
        }
        match1rd3li11B.addEventListener("click", alerr49s8);

        function alerr49s8(e) {
            localStorage.setItem('matchname', '113112')
            alert('match113112');
        }

        final.addEventListener("click", alerrf);

        function alerrf(e) {
            localStorage.setItem('matchname', '911')
            alert('ff');
        }
    }

    if (liTotals === 12) {

        //document.getElementById("seed3").style.display = "none";
        // document.getElementById("seed4").style.display = "none";
        // document.getElementById("seed5").style.display = "none";
        //document.getElementById("seed6").style.display = "none";
        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";


        //  document.getElementById("seed3a").style.display = "none";
        // document.getElementById("seed4a").style.display = "none";
        document.getElementById("seed5a").style.display = "none";
        document.getElementById("seed6a").style.display = "none";
        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";
        document.getElementById("seed9a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";
        //document.getElementById("seed17a").style.display = "none";
        // document.getElementById("seed18a").style.display = "none";
        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        //  document.getElementById("seed23a").style.display = "none";
        //document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";


        //document.getElementById("seed1bi").style.display = "none";
        //document.getElementById("seed2bi").style.display = "none";
        //document.getElementById("seed3bi").style.display = "none";
        document.getElementById("seed7bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        //document.getElementById("seed4bi").style.display = "none";
        document.getElementById("seed6bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        //document.getElementById("seed5bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed7bi").style.display = "none";
        document.getElementById("seed8bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        document.getElementById("seed10bi").style.display = "none";
        document.getElementById("seed11bi").style.display = "none";
        document.getElementById("seed12bi").style.display = "none";
        document.getElementById("seed13bi").style.display = "none";
        document.getElementById("seed14bi").style.display = "none";
        document.getElementById("seed15bi").style.display = "none";
        document.getElementById("seed16bi").style.display = "none";
        document.getElementById("seed29bi").style.display = "none";
        document.getElementById("seed30bi").style.display = "none";
        document.getElementById("seed32bi").style.display = "none";



        //document.getElementById("seed3b").style.display = "none";
        //document.getElementById("seed4b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed5b").style.display = "none";
        document.getElementById("seed6b").style.display = "none";
        document.getElementById("seed7b").style.display = "none";
        document.getElementById("seed8b").style.display = "none";
        document.getElementById("seed9b").style.display = "none";
        document.getElementById("seed10b").style.display = "none";
        document.getElementById("seed11b").style.display = "none";
        document.getElementById("seed12b").style.display = "none";
        document.getElementById("seed13b").style.display = "none";
        document.getElementById("seed14b").style.display = "none";
        document.getElementById("seed15b").style.display = "none";
        document.getElementById("seed16b").style.display = "none";
        document.getElementById("seed21b").style.display = "none";
        document.getElementById("seed22b").style.display = "none";
        document.getElementById("seed23b").style.display = "none";
        document.getElementById("seed24b").style.display = "none";
        //document.getElementById("seed25b").style.display = "none";
        //document.getElementById("seed26b").style.display = "none";
        document.getElementById("seed27b").style.display = "none";
        document.getElementById("seed28b").style.display = "none";
        //document.getElementById("seed29b").style.display = "none";
        document.getElementById("seed30b").style.display = "none";
        //document.getElementById("seed30b").style.display = "none";
        //document.getElementById("seed31b").style.display = "none";
        document.getElementById("seed32b").style.display = "none";

        //document.getElementById('A-m1-1-16').style.display = "none";
        //document.getElementById('A-m2-1-16').style.display = "none";
        document.getElementById('A-m3-1-16').style.display = "none";
        document.getElementById('A-m4-1-16').style.display = "none";
        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";
        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";

        // document.getElementById('A-m1-2-16').style.display = "none";
        // document.getElementById('A-m2-2-16').style.display = "none";      
        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";


        // document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";

        document.getElementById('A-m1-4-16').style.display = "none";




        document.getElementById('m6-r1-16w').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";


        //document.getElementById("B-m2-1-16").style.display = "none";
        document.getElementById("B-m3-1-16").style.display = "none";
        document.getElementById("B-m4-1-16").style.display = "none";
        document.getElementById("B-m5-1-16").style.display = "none";
        document.getElementById("B-m6-1-16").style.display = "none";
        document.getElementById("B-m7-1-16").style.display = "none";
        document.getElementById("B-m8-1-16").style.display = "none";

        document.getElementById("B-m3-2-16").style.display = "none";
        document.getElementById("B-m4-2-16").style.display = "none";

        document.getElementById("B-m2-3-16").style.display = "none";

        document.getElementById("B-m1-4-16").style.display = "none";


        //flex
        document.getElementById("A-m1-2-16").style.flexGrow = ".5 ";
        document.getElementById("m1-r1-16w").style.flexGrow = "1";
        document.getElementById("m1-r2-16w").style.flexGrow = ".4";
        document.getElementById("A-m1-3-16").style.flexGrow = "2";

        //values

        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinner1.2');
        document.getElementById("m2-r1-16w").value = localStorage.getItem('storeWinner11110');
        document.getElementById("seed1bi").value = usera[8];

        document.getElementById("seed2bi").value = usera[9];
        document.getElementById("seed3bi").value = usera[10];
        document.getElementById("seed4bi").value = usera[11];
        document.getElementById("seed17bi").value = usera[6];
        let winner119b = localStorage.getItem('storeWinner1.19b');
        document.getElementById("seed18bi").value = localStorage.getItem('storeWinner111122');
        document.getElementById("seed19bi").value = localStorage.getItem('storeWinner211122');
        document.getElementById("seed20bi").value = usera[7];
        document.getElementById("seed25bi").value = localStorage.getItem('storeWinner112122');
        document.getElementById("seed26bi").value = localStorage.getItem('storeWinner212122');
        document.getElementById("seed31bi").value = localStorage.getItem('storeWinner113122');

        document.getElementById("seedF1i").value = localStorage.getItem('storeWinner11312');
        document.getElementById("seedF2i").value = localStorage.getItem('storeWinner113122');

        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('bronze1');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('bronze2');

        document.getElementById("seed1").value = usera[5];
        document.getElementById("seed2").value = usera[4];
        document.getElementById("m1-r1-16w").value = usera[0];
        document.getElementById("m2-r1-16w").value = localStorage.getItem('storeWinner11112');
        document.getElementById("m3-r1-16w").value = localStorage.getItem('storeWinner21112');
        document.getElementById("m4-r1-16w").value = usera[1];
        document.getElementById("m1-r2-16w").value = localStorage.getItem('storeWinner11212');
        document.getElementById("m2-r2-16w").value = localStorage.getItem('storeWinner21212');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinner11312');




        var match1rd2li12 = document.getElementById('A-m1-2-16');
        var match2rd2li12 = document.getElementById('A-m2-2-16');
        var match1rd3li12 = document.getElementById('A-m1-3-16');
        var final = document.getElementById("F-m1-1-16");


        final.addEventListener("click", alerrf);

        function alerrf(e) {
            localStorage.setItem('matchname', '911')
            alert('ff');
        };

        var match1li12 = document.getElementById('A-m1-1-16');
        var match2li12 = document.getElementById('A-m2-1-16');
        var match1li12B = document.getElementById('B-m1-1-16');
        var match2li12B = document.getElementById('B-m2-1-16');
        var match1rd2li12B = document.getElementById('B-m1-2-16');
        var match2rd2li12B = document.getElementById('B-m2-2-16');
        var match1rd3li12B = document.getElementById('B-m1-3-16');
        var match1rd2li12 = document.getElementById('A-m1-2-16');
        var match2rd2li12 = document.getElementById('A-m2-2-16');

        var final = document.getElementById("F-m1-1-16");

        match1li12.addEventListener("click", alerr4a);

        function alerr4a(e) {
            localStorage.setItem('matchname', '11112')
            alert('match11112')
        };


        match2li12.addEventListener("click", alerr4f);

        function alerr4f(e) {
            localStorage.setItem('matchname', '21112')
            alert('match21112')
        };

        match1li12B.addEventListener("click", alerrd4);

        function alerrd4(e) {
            localStorage.setItem('matchname', '111122')
            alert('match111112')
        };




        match1rd2li12.addEventListener("click", alerr49);

        function alerr49(e) {
            localStorage.setItem('matchname', '11212')
            alert('match11211')
        };

        match2li12B.addEventListener("click", alerr49e);

        function alerr49e(e) {
            localStorage.setItem('matchname', '211122')
            alert('match212122')
        };

        match2rd2li12.addEventListener("click", alerr49sa);

        function alerr49sa(e) {
            localStorage.setItem('matchname', '21212')
            alert('match21211');
        }

        match1rd2li12B.addEventListener("click", alerr451);

        function alerr451(e) {
            localStorage.setItem('matchname', '112122')
            alert('match1121122');
        }

        match2rd2li12B.addEventListener("click", alerr49s);

        function alerr49s(e) {
            localStorage.setItem('matchname', '212122')
            alert('match212112');
        }


        match1rd3li12.addEventListener("click", alerr49s7);

        function alerr49s7(e) {
            localStorage.setItem('matchname', '11312')
            alert('match11312');
        }
        match1rd3li12B.addEventListener("click", alerr49s8);

        function alerr49s8(e) {
            localStorage.setItem('matchname', '113122')
            alert('match113112');
        }

        final.addEventListener("click", alerrf);

        function alerrf(e) {
            localStorage.setItem('matchname', '912')
            alert('ff');
        }
    }

    //13 man
    if (liTotals === 13) {
        //document.getElementById("seed3").style.display = "none";
        // document.getElementById("seed4").style.display = "none";
        // document.getElementById("seed5").style.display = "none";
        document.getElementById("seed6").style.display = "none";
        document.getElementById("seed7").style.display = "none";
        document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";

        //  document.getElementById("seed3a").style.display = "none";
        // document.getElementById("seed4a").style.display = "none";
        document.getElementById("seed5a").style.display = "none";
        document.getElementById("seed6a").style.display = "none";
        document.getElementById("seed7a").style.display = "none";
        document.getElementById("seed8a").style.display = "none";
        document.getElementById("seed9a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";
        //document.getElementById("seed17a").style.display = "none";
        // document.getElementById("seed18a").style.display = "none";
        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        //  document.getElementById("seed23a").style.display = "none";
        //document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";


        //document.getElementById("seed1bi").style.display = "none";
        //document.getElementById("seed2bi").style.display = "none";
        //document.getElementById("seed3bi").style.display = "none";
        //document.getElementById("seed4bi").style.display = "none";
        //document.getElementById("seed5bi").style.display = "none";
        //document.getElementById("seed6bi").style.display = "none";
        //document.getElementById("seed7bi").style.display = "none";
        //document.getElementById("seed8bi").style.display = "none";


        document.getElementById("seed9bi").style.display = "none";

        document.getElementById("seed10bi").style.display = "none";
        document.getElementById("seed11bi").style.display = "none";
        document.getElementById("seed12bi").style.display = "none";
        document.getElementById("seed13bi").style.display = "none";
        document.getElementById("seed14bi").style.display = "none";
        document.getElementById("seed15bi").style.display = "none";
        document.getElementById("seed16bi").style.display = "none";
        document.getElementById("seed29bi").style.display = "none";
        document.getElementById("seed30bi").style.display = "none";
        document.getElementById("seed32bi").style.display = "none";


        //document.getElementById("seed3b").style.display = "none";
        //document.getElementById("seed4b").style.display = "none";
        //document.getElementById("seed7b").style.display = "none";
        //document.getElementById("seed8b").style.display = "none";
        //document.getElementById("seed5b").style.display = "none";
        //document.getElementById("seed6b").style.display = "none";
        document.getElementById("seed9b").style.display = "none";
        document.getElementById("seed10b").style.display = "none";
        document.getElementById("seed11b").style.display = "none";
        document.getElementById("seed12b").style.display = "none";
        document.getElementById("seed13b").style.display = "none";
        document.getElementById("seed14b").style.display = "none";
        document.getElementById("seed15b").style.display = "none";
        document.getElementById("seed16b").style.display = "none";
        document.getElementById("seed21b").style.display = "none";
        document.getElementById("seed22b").style.display = "none";
        document.getElementById("seed23b").style.display = "none";
        document.getElementById("seed24b").style.display = "none";
        //document.getElementById("seed25b").style.display = "none";
        //document.getElementById("seed26b").style.display = "none";
        document.getElementById("seed27b").style.display = "none";
        document.getElementById("seed28b").style.display = "none";
        //document.getElementById("seed29b").style.display = "none";
        document.getElementById("seed30b").style.display = "none";
        //document.getElementById("seed30b").style.display = "none";
        //document.getElementById("seed31b").style.display = "none";
        document.getElementById("seed32b").style.display = "none";

        //document.getElementById('A-m1-1-16').style.display = "none";
        //document.getElementById('A-m2-1-16').style.display = "none";
        // document.getElementById('A-m3-1-16').style.display = "none";
        document.getElementById('A-m4-1-16').style.display = "none";
        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";
        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";

        // document.getElementById('A-m1-2-16').style.display = "none";
        // document.getElementById('A-m2-2-16').style.display = "none";      
        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";


        // document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";

        document.getElementById('A-m1-4-16').style.display = "none";

        document.getElementById('m6-r1-16w').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";

        //document.getElementById("B-m2-1-16").style.display = "none";
        //document.getElementById("B-m3-1-16").style.display = "none";
        //document.getElementById("B-m4-1-16").style.display = "none";
        document.getElementById("B-m5-1-16").style.display = "none";
        document.getElementById("B-m6-1-16").style.display = "none";
        document.getElementById("B-m7-1-16").style.display = "none";
        document.getElementById("B-m8-1-16").style.display = "none";

        document.getElementById("B-m3-2-16").style.display = "none";
        document.getElementById("B-m4-2-16").style.display = "none";

        document.getElementById("B-m2-3-16").style.display = "none";

        document.getElementById("B-m1-4-16").style.display = "none";



        //flex
        document.getElementById("A-m1-2-16").style.flexGrow = ".6";

        document.getElementById("A-m1-3-16").style.flexGrow = "2";
        document.getElementById("B-m1-2-16").style.flexGrow = "3";
        document.getElementById("m1-r1-16w").style.flexGrow = "2";
        document.getElementById("m1-r2-16w").style.flexGrow = "2";
        document.getElementById("B-m1-3-16").style.flexGrow = "2";

        //values

        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinner1.2');
        document.getElementById("m2-r1-16w").value = localStorage.getItem('storeWinner11110');
        document.getElementById("seed1bi").value = usera[6];

        document.getElementById("seed2bi").value = usera[7];
        document.getElementById("seed3bi").value = usera[8];
        document.getElementById("seed4bi").value = usera[9];
        document.getElementById("seed5bi").value = usera[10];
        document.getElementById("seed6bi").value = usera[11];
        document.getElementById("seed7bi").value = usera[12];
        document.getElementById("seed17bi").value = localStorage.getItem('storeWinner111132');
        let winner119b = localStorage.getItem('storeWinner1.19b');
        document.getElementById("seed18bi").value = localStorage.getItem('storeWinner211132');
        document.getElementById("seed19bi").value = localStorage.getItem('storeWinner311132');
        document.getElementById("seed20bi").value = usera[12];
        document.getElementById("seed25bi").value = localStorage.getItem('storeWinner112132');
        document.getElementById("seed26bi").value = localStorage.getItem('storeWinner212132');
        document.getElementById("seed31bi").value = localStorage.getItem('storeWinner113132');

        document.getElementById("seedF1i").value = localStorage.getItem('storeWinner11313');
        document.getElementById("seedF2i").value = localStorage.getItem('storeWinner113132');

        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('bronze1');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('bronze2');

        document.getElementById("seed1").value = usera[5];
        document.getElementById("seed2").value = usera[4];
        document.getElementById("m1-r1-16w").value = usera[0];
        document.getElementById("m2-r1-16w").value = localStorage.getItem('storeWinner11113');
        document.getElementById("m3-r1-16w").value = localStorage.getItem('storeWinner21113');
        document.getElementById("m4-r1-16w").value = usera[1];
        document.getElementById("m1-r2-16w").value = localStorage.getItem('storeWinner11213');
        document.getElementById("m2-r2-16w").value = localStorage.getItem('storeWinner21213');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinner11313');

        var match1rd2li13 = document.getElementById('A-m1-2-16');
        var match2rd2li13 = document.getElementById('A-m2-2-16');
        var match1rd3li13 = document.getElementById('A-m1-3-16');
        var final = document.getElementById("F-m1-1-16");


        final.addEventListener("click", alerrf);

        function alerrf(e) {
            localStorage.setItem('matchname', '913')
            alert('ff');
        };

        var match1li13 = document.getElementById('A-m1-1-16');
        var match2li13 = document.getElementById('A-m2-1-16');
        var match1li13B = document.getElementById('B-m1-1-16');
        var match2li13B = document.getElementById('B-m2-1-16');
        var match1rd2li13B = document.getElementById('B-m1-2-16');
        var match3li13B = document.getElementById('B-m3-1-16');
        var match4li13B = document.getElementById('B-m4-1-16');
        var match2rd2li13B = document.getElementById('B-m2-2-16');
        var match1rd3li13B = document.getElementById('B-m1-3-16');
        var match1rd2li13 = document.getElementById('A-m1-2-16');
        var match2rd2li13 = document.getElementById('A-m2-2-16');

        var final = document.getElementById("F-m1-1-16");

        match1li13.addEventListener("click", alerr4a);

        function alerr4a(e) {
            localStorage.setItem('matchname', '11113')
            alert('match11113')
        };


        match2li13.addEventListener("click", alerr4f);

        function alerr4f(e) {
            localStorage.setItem('matchname', '21113')
            alert('match21113')
        };

        match1li13B.addEventListener("click", alerrd4v2);

        function alerrd4v2(e) {
            localStorage.setItem('matchname', '111132')
            alert('match111132')
        };

        match3li13B.addEventListener("click", alerrd4v);

        function alerrd4v(e) {
            localStorage.setItem('matchname', '311132')
            alert('match311132')
        };

        match4li13B.addEventListener("click", alerrd4);

        function alerrd4(e) {
            localStorage.setItem('matchname', '411132')
            alert('match411132')
        };


        match1rd2li13.addEventListener("click", alerr49);

        function alerr49(e) {
            localStorage.setItem('matchname', '11213')
            alert('match11213')
        };

        match2li13B.addEventListener("click", alerr49e);

        function alerr49e(e) {
            localStorage.setItem('matchname', '211132')
            alert('match212122')
        };

        match2rd2li13.addEventListener("click", alerr49sa);

        function alerr49sa(e) {
            localStorage.setItem('matchname', '21213')
            alert('match21213');
        }

        match1rd2li13B.addEventListener("click", alerr451);

        function alerr451(e) {
            localStorage.setItem('matchname', '112132')
            alert('match112132');
        }

        match2rd2li13B.addEventListener("click", alerr49s);

        function alerr49s(e) {
            localStorage.setItem('matchname', '212132')
            alert('match212132');
        }

        match1rd3li13.addEventListener("click", alerr49s7);

        function alerr49s7(e) {
            localStorage.setItem('matchname', '11313')
            alert('match11313');
        }
        match1rd3li13B.addEventListener("click", alerr49s8);

        function alerr49s8(e) {
            localStorage.setItem('matchname', '113132')
            alert('match113112');
        }

        final.addEventListener("click", alerrf);

        function alerrf(e) {
            localStorage.setItem('matchname', '913')
            alert('ff');
        }

    }

    //14 man
    if (liTotals === 14) {
        //document.getElementById("seed3").style.display = "none";
        // document.getElementById("seed4").style.display = "none";
        // document.getElementById("seed5").style.display = "none";
        ///  document.getElementById("seed6").style.display = "none";
        //document.getElementById("seed7").style.display = "none";
        //document.getElementById("seed8").style.display = "none";
        document.getElementById("seed9").style.display = "none";
        document.getElementById("seed10").style.display = "none";
        document.getElementById("seed11").style.display = "none";
        document.getElementById("seed12").style.display = "none";
        document.getElementById("seed13").style.display = "none";
        document.getElementById("seed14").style.display = "none";
        document.getElementById("seed15").style.display = "none";
        document.getElementById("seed16").style.display = "none";

        //  document.getElementById("seed3a").style.display = "none";
        // document.getElementById("seed4a").style.display = "none";
        // document.getElementById("seed5a").style.display = "none";
        // document.getElementById("seed6a").style.display = "none";
        //document.getElementById("seed7a").style.display = "none";
        // document.getElementById("seed8a").style.display = "none";
        document.getElementById("seed9a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed10a").style.display = "none";
        document.getElementById("seed11a").style.display = "none";
        document.getElementById("seed12a").style.display = "none";
        document.getElementById("seed13a").style.display = "none";
        document.getElementById("seed14a").style.display = "none";
        document.getElementById("seed15a").style.display = "none";
        document.getElementById("seed16a").style.display = "none";
        //document.getElementById("seed17a").style.display = "none";
        // document.getElementById("seed18a").style.display = "none";
        document.getElementById("seed19a").style.display = "none";
        document.getElementById("seed20a").style.display = "none";
        document.getElementById("seed21a").style.display = "none";
        document.getElementById("seed22a").style.display = "none";
        //  document.getElementById("seed23a").style.display = "none";
        //document.getElementById("seed24a").style.display = "none";
        document.getElementById("seed25a").style.display = "none";
        document.getElementById("seed26a").style.display = "none";


        //document.getElementById("seed1bi").style.display = "none";
        //document.getElementById("seed2bi").style.display = "none";
        //document.getElementById("seed3bi").style.display = "none";
        //document.getElementById("seed7bi").style.display = "none";
        //document.getElementById("seed8bi").style.display = "none";
        //document.getElementById("seed4bi").style.display = "none";
        //document.getElementById("seed6bi").style.display = "none";
        document.getElementById("seed9bi").style.display = "none";
        //document.getElementById("seed5bi").style.display = "none";
        document.getElementById("seed10bi").style.display = "none";
        document.getElementById("seed11bi").style.display = "none";
        document.getElementById("seed12bi").style.display = "none";
        document.getElementById("seed13bi").style.display = "none";
        document.getElementById("seed14bi").style.display = "none";
        document.getElementById("seed15bi").style.display = "none";
        document.getElementById("seed16bi").style.display = "none";
        document.getElementById("seed29bi").style.display = "none";
        document.getElementById("seed30bi").style.display = "none";
        document.getElementById("seed32bi").style.display = "none";


        //document.getElementById("seed3b").style.display = "none";
        //document.getElementById("seed4b").style.display = "none";
        //document.getElementById("seed7b").style.display = "none";
        //document.getElementById("seed8b").style.display = "none";
        //document.getElementById("seed5b").style.display = "none";
        //document.getElementById("seed6b").style.display = "none";
        document.getElementById("seed9b").style.display = "none";
        document.getElementById("seed10b").style.display = "none";
        document.getElementById("seed11b").style.display = "none";
        document.getElementById("seed12b").style.display = "none";
        document.getElementById("seed13b").style.display = "none";
        document.getElementById("seed14b").style.display = "none";
        document.getElementById("seed15b").style.display = "none";
        document.getElementById("seed16b").style.display = "none";
        document.getElementById("seed21b").style.display = "none";
        document.getElementById("seed22b").style.display = "none";
        document.getElementById("seed23b").style.display = "none";
        document.getElementById("seed24b").style.display = "none";
        //document.getElementById("seed25b").style.display = "none";
        //document.getElementById("seed26b").style.display = "none";
        document.getElementById("seed27b").style.display = "none";
        document.getElementById("seed28b").style.display = "none";
        //document.getElementById("seed29b").style.display = "none";
        document.getElementById("seed30b").style.display = "none";
        //document.getElementById("seed30b").style.display = "none";
        //document.getElementById("seed31b").style.display = "none";
        document.getElementById("seed32b").style.display = "none";

        //document.getElementById('A-m1-1-16').style.display = "none";
        //document.getElementById('A-m2-1-16').style.display = "none";
        //document.getElementById('A-m3-1-16').style.display = "none";
        // document.getElementById('A-m4-1-16').style.display = "none";
        document.getElementById('A-m5-1-16').style.display = "none";
        document.getElementById('A-m6-1-16').style.display = "none";
        document.getElementById('A-m7-1-16').style.display = "none";
        document.getElementById('A-m8-1-16').style.display = "none";

        // document.getElementById('A-m1-2-16').style.display = "none";
        // document.getElementById('A-m2-2-16').style.display = "none";      
        document.getElementById('A-m3-2-16').style.display = "none";
        document.getElementById('A-m4-2-16').style.display = "none";


        // document.getElementById('A-m1-3-16').style.display = "none";
        document.getElementById('A-m2-3-16').style.display = "none";
        document.getElementById('A-m1-4-16').style.display = "none";
        document.getElementById('m6-r1-16w').style.display = "none";
        document.getElementById('m8-r1-16w').style.display = "none";
        //document.getElementById("B-m2-1-16").style.display = "none";
        //document.getElementById("B-m3-1-16").style.display = "none";
        //document.getElementById("B-m4-1-16").style.display = "none";
        document.getElementById("B-m5-1-16").style.display = "none";
        document.getElementById("B-m6-1-16").style.display = "none";
        document.getElementById("B-m7-1-16").style.display = "none";
        document.getElementById("B-m8-1-16").style.display = "none";
        document.getElementById("B-m3-2-16").style.display = "none";
        document.getElementById("B-m4-2-16").style.display = "none";
        document.getElementById("B-m2-3-16").style.display = "none";
        document.getElementById("B-m1-4-16").style.display = "none";



        //flex
        document.getElementById("A-m1-2-16").style.flexGrow = "2.7";
        document.getElementById("A-m2-2-16").style.flexGrow = "2.7";
        document.getElementById("A-m1-3-16").style.flexGrow = "2.7";
        document.getElementById("B-m1-2-16").style.flexGrow = "2.7";
        document.getElementById("m1-r1-16w").style.flexGrow = "2.7";
        document.getElementById("m1-r2-16w").style.flexGrow = "2.7";
        document.getElementById("B-m1-3-16").style.flexGrow = "2.7";

        //values

        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinner1.2');
        document.getElementById("m2-r1-16w").value = localStorage.getItem('storeWinner11110');
        document.getElementById("seed1bi").value = usera[7];

        document.getElementById("seed2bi").value = usera[8];
        document.getElementById("seed3bi").value = usera[9];
        document.getElementById("seed4bi").value = usera[10];
        document.getElementById("seed5bi").value = usera[11];
        document.getElementById("seed6bi").value = usera[12];
        document.getElementById("seed7bi").value = usera[13];
        document.getElementById("seed8bi").value = '';
        document.getElementById("seed17bi").value = localStorage.getItem('storeWinner111142');
        let winner119b = localStorage.getItem('storeWinner1.19b');
        document.getElementById("seed18bi").value = localStorage.getItem('storeWinner211142');
        document.getElementById("seed19bi").value = localStorage.getItem('storeWinner311142');
        document.getElementById("seed20bi").value = usera[13];
        document.getElementById("seed25bi").value = localStorage.getItem('storeWinner112142');
        document.getElementById("seed26bi").value = localStorage.getItem('storeWinner212142');
        document.getElementById("seed31bi").value = localStorage.getItem('storeWinner113142');

        document.getElementById("seedF1i").value = localStorage.getItem('storeWinner11314');
        document.getElementById("seedF2i").value = localStorage.getItem('storeWinner113142');

        document.getElementById("gold").innerHTML = localStorage.getItem('storeWinnerFinal');
        document.getElementById("silver").innerHTML = localStorage.getItem('silver');
        document.getElementById("bronze1").innerHTML = localStorage.getItem('bronze1');
        document.getElementById("bronze2").innerHTML = localStorage.getItem('bronze2');

        document.getElementById("seed1").value = usera[0];
        document.getElementById("seed2").value = usera[1];
        document.getElementById("seed8").value = "";
        document.getElementById("m1-r1-16w").value = localStorage.getItem('storeWinner11114');
        document.getElementById("m2-r1-16w").value = localStorage.getItem('storeWinner21114');
        document.getElementById("m3-r1-16w").value = localStorage.getItem('storeWinner31114');
        document.getElementById("m4-r1-16w").value = usera[6];
        document.getElementById("m1-r2-16w").value = localStorage.getItem('storeWinner11214');
        document.getElementById("m2-r2-16w").value = localStorage.getItem('storeWinner21214');
        document.getElementById("m1-r4-16w").value = localStorage.getItem('storeWinner11314');

        var match1rd2li14 = document.getElementById('A-m1-2-16');
        var match2rd2li14 = document.getElementById('A-m2-2-16');
        var match1rd3li14 = document.getElementById('A-m1-3-16');
        var final = document.getElementById("F-m1-1-16");


        final.addEventListener("click", alerrf);

        function alerrf(e) {
            localStorage.setItem('matchname', '914')
            alert('ff');
        };

        var match1li14 = document.getElementById('A-m1-1-16');
        var match2li14 = document.getElementById('A-m2-1-16');
        var match3li14 = document.getElementById('A-m3-1-16');
        var match1li14B = document.getElementById('B-m1-1-16');
        var match2li14B = document.getElementById('B-m2-1-16');
        var match1rd2li14B = document.getElementById('B-m1-2-16');
        var match3li14B = document.getElementById('B-m3-1-16');
        var match4li14B = document.getElementById('B-m4-1-16');
        var match2rd2li14B = document.getElementById('B-m2-2-16');
        var match1rd3li14B = document.getElementById('B-m1-3-16');
        var match1rd2li14 = document.getElementById('A-m1-2-16');
        var match2rd2li14 = document.getElementById('A-m2-2-16');

        var final = document.getElementById("F-m1-1-16");

        match1li14.addEventListener("click", alerr4a);

        function alerr4a(e) {
            localStorage.setItem('matchname', '11114')
            alert('match11114')
        };


        match2li14.addEventListener("click", alerr4f);

        function alerr4f(e) {
            localStorage.setItem('matchname', '21114')
            alert('match21114')
        };

        match3li14.addEventListener("click", alerr4f3);

        function alerr4f3(e) {
            localStorage.setItem('matchname', '31114')
            alert('match31114')
        };

        match1li14B.addEventListener("click", alerrd4v2);

        function alerrd4v2(e) {
            localStorage.setItem('matchname', '111142')
            alert('match111142')
        };

        match3li14B.addEventListener("click", alerrd4v);

        function alerrd4v(e) {
            localStorage.setItem('matchname', '311142')
            alert('match311142')
        };

        match4li14B.addEventListener("click", alerrd4);

        function alerrd4(e) {
            localStorage.setItem('matchname', '411142')
            alert('match411142')
        };


        match1rd2li14.addEventListener("click", alerr49);

        function alerr49(e) {
            localStorage.setItem('matchname', '11214')
            alert('match11214')
        };

        match2li14B.addEventListener("click", alerr49e);

        function alerr49e(e) {
            localStorage.setItem('matchname', '211142')
            alert('match212142')
        };

        match2rd2li14.addEventListener("click", alerr49sa);

        function alerr49sa(e) {
            localStorage.setItem('matchname', '21214')
            alert('match21214');
        }

        match1rd2li14B.addEventListener("click", alerr451);

        function alerr451(e) {
            localStorage.setItem('matchname', '112142')
            alert('match112142');
        }

        match2rd2li14B.addEventListener("click", alerr49s);

        function alerr49s(e) {
            localStorage.setItem('matchname', '212142')
            alert('match212142');
        }

        match1rd3li14.addEventListener("click", alerr49s7);

        function alerr49s7(e) {
            localStorage.setItem('matchname', '11314')
            alert('match11314');
        }
        match1rd3li14B.addEventListener("click", alerr49s8);

        function alerr49s8(e) {
            localStorage.setItem('matchname', '113142')
            alert('match113142');
        }

        final.addEventListener("click", alerrf);

        function alerrf(e) {
            localStorage.setItem('matchname', '914')
            alert('ff');
        }

    }
}



window.onload = function loadNames(e) {

    var Ma = JSON.parse(localStorage.getItem("matchname"));
    let liNum = JSON.parse(localStorage.getItem("liTotal"));
    var usera = JSON.parse(localStorage.getItem("nameArray"));
    let tWinB = localStorage.getItem("blueWon");
    let tWinO = localStorage.getItem("orangeWon");



    //2
    if (Ma === 1 && liNum === 2) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[0];
        document.getElementById("name2").innerHTML = usera[1];
        alert("its 1l1");
    }

    //3
    else if (Ma === 1 && liNum === 3) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[0];
        document.getElementById("name2").innerHTML = usera[1];
        alert("its 1l3");
    } else if (Ma === 1.2 && liNum === 3) {

        document.getElementById("name1").innerHTML = localStorage.getItem("Won1.1");
        document.getElementById("name2").innerHTML = usera[2];
        alert("its 1.2");
    }


    //4
    else if (Ma === 1 && liNum === 4) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[0];
        document.getElementById("name2").innerHTML = usera[1];
        alert("its 1l3");
    } else if (Ma === 2 && liNum === 4) {

        document.getElementById("name1").innerHTML = usera[2];
        document.getElementById("name2").innerHTML = usera[3];
        alert("its 1.2");
    } else if (Ma === 1.2 && liNum === 4) {

        document.getElementById("name1").innerHTML = localStorage.getItem("Won1.1");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.1");
        alert("its 1.2");
    }

    //5
    else if (Ma === 2 && liNum === 5) {

        document.getElementById("name1").innerHTML = usera[2];
        document.getElementById("name2").innerHTML = usera[3];

    } else if (Ma === 1.2 && liNum === 5) {


        document.getElementById("name1").innerHTML = usera[0];
        document.getElementById("name2").innerHTML = localStorage.getItem("Won1.1");

    } else if (Ma === 2.12 && liNum === 5) {


        document.getElementById("name1").innerHTML = usera[1];
        document.getElementById("name2").innerHTML = usera[4];

    } else if (Ma === 2.2 && liNum === 5) {


        document.getElementById("name1").innerHTML = usera[4];
        document.getElementById("name2").innerHTML = usera[1];

    } else if (Ma === 1.13 && liNum === 5) {


        document.getElementById("name1").innerHTML = localStorage.getItem("Won2.1");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.2");

    }


    //6
    else if (Ma === 2 && liNum === 6) {

        document.getElementById("name1").innerHTML = usera[2];
        document.getElementById("name2").innerHTML = usera[3];

    } else if (Ma === 3 && liNum === 6) {

        document.getElementById("name1").innerHTML = usera[4];
        document.getElementById("name2").innerHTML = usera[5];

    } else if (Ma === 2.12 && liNum === 6) {


        document.getElementById("name1").innerHTML = usera[1];
        document.getElementById("name2").innerHTML = usera[4];

    } else if (Ma === 2.2 && liNum === 6) {

        document.getElementById("name1").innerHTML = localStorage.getItem("Won2.1");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.2");

    } else if (Ma === 1.13 && liNum === 6) {


        document.getElementById("name1").innerHTML = localStorage.getItem("Won1.2");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.2");

    }


    //7
    else if (Ma === 1 && liNum === 7) {

        document.getElementById("name1").innerHTML = usera[0];
        document.getElementById("name2").innerHTML = usera[1];

    } else if (Ma === 2 && liNum === 7) {

        document.getElementById("name1").innerHTML = usera[2];
        document.getElementById("name2").innerHTML = usera[3];

      }  else if (Ma === 2.2 && liNum === 7) {

            document.getElementById("name1").innerHTML = usera[5];
            document.getElementById("name2").innerHTML = usera[6];

    } else if (Ma === 3 && liNum === 7) {


        document.getElementById("name1").innerHTML = usera[4];
        document.getElementById("name2").innerHTML = usera[5];

    } else if (Ma === 4 && liNum === 7) {

        document.getElementById("name1").innerHTML = localStorage.getItem("Won2.1");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.2");

    } else if (Ma === 1.2 && liNum === 7) {


        document.getElementById("name1").innerHTML = localStorage.getItem("Won1.1");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.1");

    } else if (Ma === 1.13 && liNum === 7) {


        document.getElementById("name1").innerHTML = localStorage.getItem("Won2.1");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.2");

    }

    //8
    else if (Ma === 1 && liNum === 8) {

        document.getElementById("name1").innerHTML = usera[0];
        document.getElementById("name2").innerHTML = usera[1];

    } else if (Ma === 2 && liNum === 8) {

        document.getElementById("name1").innerHTML = usera[2];
        document.getElementById("name2").innerHTML = usera[3];

    } else if (Ma === 3 && liNum === 8) {


        document.getElementById("name1").innerHTML = usera[4];
        document.getElementById("name2").innerHTML = usera[5];

    } else if (Ma === 4 && liNum === 8) {

        document.getElementById("name1").innerHTML = usera[6];
        document.getElementById("name2").innerHTML = usera[7];

    } else if (Ma === 1.2 && liNum === 8) {


        document.getElementById("name1").innerHTML = localStorage.getItem("Won1.1");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.1");

    } else if (Ma === 1.13 && liNum === 8) {


        document.getElementById("name1").innerHTML = localStorage.getItem("Won1.2");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.2");

    }
    else if (Ma === 2.2 && liNum === 8) {


        document.getElementById("name1").innerHTML = localStorage.getItem("Won3.1");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won4.1");

    }



    //9
    else if (Ma === 1 && liNum === 9) {

        document.getElementById("name1").innerHTML = usera[0];
        document.getElementById("name2").innerHTML = usera[1];
        if (tWinB === 1) {
            console.log('aye');
        }

    } else if (Ma === 2 && liNum === 9) {

        document.getElementById("name1").innerHTML = usera[2];
        document.getElementById("name2").innerHTML = usera[3];

    } else if (Ma === 3 && liNum === 9) {


        document.getElementById("name1").innerHTML = usera[4];
        document.getElementById("name2").innerHTML = usera[5];

    } else if (Ma === 4 && liNum === 9) {

        document.getElementById("name1").innerHTML = usera[6];
        document.getElementById("name2").innerHTML = usera[7];

    } else if (Ma === 1.2 && liNum === 9) {


        document.getElementById("name1").innerHTML = localStorage.getItem("Won1.1");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.1");

    } else if (Ma === 1.13 && liNum === 9) {


        document.getElementById("name1").innerHTML = localStorage.getItem("Won1.2");
        document.getElementById("name2").innerHTML = localStorage.getItem("Won2.2");

    } else if (Ma === 6) {
        alert("its 6");
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));

        document.getElementById("name1").innerHTML = usera[10];
        document.getElementById("name2").innerHTML = usera[11];
    } else if (Ma === 7) {
        alert("its 7");
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));

        document.getElementById("name1").innerHTML = usera[12];
        document.getElementById("name2").innerHTML = usera[13];
    } else if (Ma === 8) {
        alert("its 8");
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));

        document.getElementById("name1").innerHTML = usera[14];
        document.getElementById("name2").innerHTML = usera[15];
    } else if (Ma === 111) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[16];
        document.getElementById("name2").innerHTML = usera[17];
    }
    //ten man
    else if (Ma === 11110) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[3];
        document.getElementById("name2").innerHTML = usera[4];
    } else if (Ma === 111102) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[8];
        document.getElementById("name2").innerHTML = usera[9];
    } else if (Ma === 11210) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[0];
        document.getElementById("name2").innerHTML = localStorage.getItem("storeWinner11110");
    } else if (Ma === 112102) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[5];
        document.getElementById("name2").innerHTML = localStorage.getItem("storeWinner111102");
    } else if (Ma === 112102) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[5];
        document.getElementById("name2").innerHTML = localStorage.getItem("storeWinner111102");
    } else if (Ma === 21210) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[2];
        document.getElementById("name2").innerHTML = usera[3];;
    } else if (Ma === 212102) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[6];
        document.getElementById("name2").innerHTML = usera[7];;
    } else if (Ma === 11310) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = localStorage.getItem("storeWinner11210");
        document.getElementById("name2").innerHTML = localStorage.getItem("storeWinner21210");
    } else if (Ma === 113102) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = localStorage.getItem("storeWinner112102");
        document.getElementById("name2").innerHTML = localStorage.getItem("storeWinner212102");
    } else if (Ma === 910) {
        alert("fin");
        window.localStorage.getItem("nameArray");
        var userf = localStorage.getItem("storeWinner11310");
        var userg = localStorage.getItem("storeWinner113102");
        document.getElementById("name1").innerHTML = userf;
        document.getElementById("name2").innerHTML = userg;
    }
    //


    //11 man
    else if (Ma === 11111) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[0];
        document.getElementById("name2").innerHTML = usera[4];
    } else if (Ma === 111112) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[8];
        document.getElementById("name2").innerHTML = usera[9];
    } else if (Ma === 112112) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[5];
        var userga = localStorage.getItem("storeWinner111112");
        document.getElementById("name2").innerHTML = userga;
    } else if (Ma === 11211) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[0];
        var userg = localStorage.getItem("storeWinner11111");
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 21211) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name2").innerHTML = usera[1];
        var userg = localStorage.getItem("storeWinner2");
        document.getElementById("name1").innerHTML = userg;
    } else if (Ma === 212112) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[6];
        var userg = localStorage.getItem("storeWinner211112");
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 11311) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = localStorage.getItem("storeWinner11211");
        var userg = localStorage.getItem("storeWinner2");
        document.getElementById("name2").innerHTML = localStorage.getItem("storeWinner21211");
    } else if (Ma === 113112) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = localStorage.getItem("storeWinner112112");
        var userg = localStorage.getItem("storeWinner2");
        document.getElementById("name2").innerHTML = localStorage.getItem("storeWinner212112");
    } else if (Ma === 211112) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[7];
        var userg = localStorage.getItem("storeWinner2");
        document.getElementById("name2").innerHTML = usera[10];
    } else if (Ma === 911) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("storeWinner11311"));
        document.getElementById("name1").innerHTML = usera;
        var userg = localStorage.getItem("storeWinner113112");
        document.getElementById("name2").innerHTML = userg;
    }
    //
    //12man
    else if (Ma === 11112) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[4];

        document.getElementById("name2").innerHTML = usera[5];
    } else if (Ma === 111122) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[8];

        document.getElementById("name2").innerHTML = usera[9];
    } else if (Ma === 112122) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[6];

        var userga = localStorage.getItem("storeWinner111122");
        document.getElementById("name2").innerHTML = userga;
    } else if (Ma === 21112) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[2];

        document.getElementById("name2").innerHTML = usera[3];
    } else if (Ma === 211122) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[10];

        document.getElementById("name2").innerHTML = usera[11];
    } else if (Ma === 11212) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        var userg = localStorage.getItem("storeWinner11112");
        document.getElementById("name1").innerHTML = usera[0]
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 21212) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        var userg = localStorage.getItem("storeWinner21112");
        document.getElementById("name1").innerHTML = userg;
        document.getElementById("name2").innerHTML = usera[1];
    } else if (Ma === 212122) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        var userg = localStorage.getItem("storeWinner211122");
        document.getElementById("name1").innerHTML = userg;

        document.getElementById("name2").innerHTML = usera[7];
    } else if (Ma === 11312) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner11212");
        var userg = localStorage.getItem("storeWinner21112");
        document.getElementById("name1").innerHTML = usera;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 113122) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner112122");
        var userg = localStorage.getItem("storeWinner211122");
        document.getElementById("name1").innerHTML = usera;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 912) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("storeWinner11312"));
        document.getElementById("name1").innerHTML = usera;
        var userg = localStorage.getItem("storeWinner113122");
        document.getElementById("name2").innerHTML = userg;
    }
    //
    //13 man
    else if (Ma === 11113) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[4];

        document.getElementById("name2").innerHTML = usera[5];
    } else if (Ma === 111132) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[6];

        document.getElementById("name2").innerHTML = usera[7];
    } else if (Ma === 112132) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner111132");
        var userg = localStorage.getItem("storeWinner211132");
        document.getElementById("name1").innerHTML = usera;

        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 21113) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[2];

        document.getElementById("name2").innerHTML = usera[3];
    } else if (Ma === 211132) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[8];

        document.getElementById("name2").innerHTML = usera[9];
    } else if (Ma === 11213) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        var userg = localStorage.getItem("storeWinner11113");
        document.getElementById("name1").innerHTML = usera[0]
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 21213) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        var userg = localStorage.getItem("storeWinner21113");
        document.getElementById("name1").innerHTML = userg;
        document.getElementById("name2").innerHTML = usera[1];
    } else if (Ma === 212122) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        var userg = localStorage.getItem("storeWinner211132");
        document.getElementById("name1").innerHTML = userg;

        document.getElementById("name2").innerHTML = usera[7];
    } else if (Ma === 11313) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner11213");
        var userg = localStorage.getItem("storeWinner21213");
        document.getElementById("name1").innerHTML = usera;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 113132) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner112132");
        var userg = localStorage.getItem("storeWinner212132");
        document.getElementById("name1").innerHTML = usera;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 212132) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner311132");
        var userg = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera;
        document.getElementById("name2").innerHTML = userg[12];
    } else if (Ma === 311132) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[10];
        document.getElementById("name2").innerHTML = usera[11];
    } else if (Ma === 411132) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[12];

    } else if (Ma === 913) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("storeWinner11313"));
        document.getElementById("name1").innerHTML = usera;
        var userg = localStorage.getItem("storeWinner113132");
        document.getElementById("name2").innerHTML = userg;
    }
    //

    //14 man
    else if (Ma === 11114) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[0];

        document.getElementById("name2").innerHTML = usera[1];
    } else if (Ma === 111142) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[7];

        document.getElementById("name2").innerHTML = usera[8];
    } else if (Ma === 112142) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner111142");
        var userg = localStorage.getItem("storeWinner211142");
        document.getElementById("name1").innerHTML = usera;

        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 21114) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[2];

        document.getElementById("name2").innerHTML = usera[3];
    } else if (Ma === 211142) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[9];

        document.getElementById("name2").innerHTML = usera[10];
    } else if (Ma === 31114) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[4];

        document.getElementById("name2").innerHTML = usera[5];
    } else if (Ma === 11214) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner11114");
        var userg = localStorage.getItem("storeWinner21114");
        document.getElementById("name1").innerHTML = usera;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 21214) {
        window.localStorage.getItem("nameArray");
        var userg = localStorage.getItem("storeWinner31114");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = userg;
        document.getElementById("name2").innerHTML = usera[6];
    } else if (Ma === 212142) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        var userg = localStorage.getItem("storeWinner311142");
        document.getElementById("name1").innerHTML = userg;

        document.getElementById("name2").innerHTML = usera[13];
    } else if (Ma === 11314) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner11214");
        var userg = localStorage.getItem("storeWinner21214");
        document.getElementById("name1").innerHTML = usera;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 113142) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner112142");
        var userg = localStorage.getItem("storeWinner212142");
        document.getElementById("name1").innerHTML = usera;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 212142) {
        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner311142");
        var userg = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera;
        document.getElementById("name2").innerHTML = userg[12];
    } else if (Ma === 311142) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[11];
        document.getElementById("name2").innerHTML = usera[12];
    } else if (Ma === 411142) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[12];

    } else if (Ma === 914) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("storeWinner11314"));
        document.getElementById("name1").innerHTML = usera;
        var userg = localStorage.getItem("storeWinner113142");
        document.getElementById("name2").innerHTML = userg;
    }
    //


    //
    else if (Ma === 211) {
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[18];
        document.getElementById("name2").innerHTML = usera[19];
    } else if (Ma === 311) {
        alert("its 311");
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[20];
        document.getElementById("name2").innerHTML = usera[21];
    } else if (Ma === 411) {
        alert("its 12");
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[22];
        document.getElementById("name2").innerHTML = usera[23];
    } else if (Ma === 511) {
        alert("its 511");
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[24];
        document.getElementById("name2").innerHTML = usera[25];
    } else if (Ma === 611) {
        alert("its 14");
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));

        document.getElementById("name1").innerHTML = usera[26];
        document.getElementById("name2").innerHTML = usera[27];
    } else if (Ma === 711) {
        alert("its 15");
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[28];
        document.getElementById("name2").innerHTML = usera[29];
    } else if (Ma === 811) {
        alert("its 16");
        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[30];
        document.getElementById("name2").innerHTML = usera[31];
    } else if (Ma === 1.2) {
        alert("its 1.2");
        window.localStorage.getItem("nameArray");
        var userb = localStorage.getItem("storeWinner1");
        var userc = localStorage.getItem("storeWinner2");
        document.getElementById("name1").innerHTML = userb;
        document.getElementById("name2").innerHTML = userc;

    } else if (Ma === 112) { //MATCH 1 RD 2 B
        alert("its 1.2");
        window.localStorage.getItem("nameArray");
        var userb = localStorage.getItem("storeWinner1b");
        var userc = localStorage.getItem("storeWinner2b");
        document.getElementById("name1").innerHTML = userb;
        document.getElementById("name2").innerHTML = userc;
    } else if (Ma === 212) {
        alert("its 212B");
        window.localStorage.getItem("nameArray");
        var userd = localStorage.getItem("storeWinner3b");
        var usere = localStorage.getItem("storeWinner4b");
        document.getElementById("name1").innerHTML = userd;
        document.getElementById("name2").innerHTML = usere;
    } else if (Ma === 312) {
        alert("its 312B");
        window.localStorage.getItem("nameArray");
        var userd = localStorage.getItem("storeWinner5b");
        var usere = localStorage.getItem("storeWinner6b");
        document.getElementById("name1").innerHTML = userd;
        document.getElementById("name2").innerHTML = usere;
    } else if (Ma === 412) {
        alert("its 412B");
        window.localStorage.getItem("nameArray");
        var userd = localStorage.getItem("storeWinner7b");
        var usere = localStorage.getItem("storeWinner8b");
        document.getElementById("name1").innerHTML = userd;
        document.getElementById("name2").innerHTML = usere;
    } else if (Ma === 113) {
        alert("its 113");
        window.localStorage.getItem("nameArray");
        var userb = localStorage.getItem("storeWinner1.2b");
        var userc = localStorage.getItem("storeWinner2.2b");
        document.getElementById("name1").innerHTML = userb;
        document.getElementById("name2").innerHTML = userc;
    } else if (Ma === 114) {
        alert("its 114");
        window.localStorage.getItem("nameArray");
        var userb = localStorage.getItem("storeWinner1.3b");
        var userc = localStorage.getItem("storeWinner2.3b");
        document.getElementById("name1").innerHTML = userb;
        document.getElementById("name2").innerHTML = userc;
    }

    //9 MAN 
    else if (Ma === 1119) {
        alert("its 1119");

        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[7];
        document.getElementById("name2").innerHTML = usera[8];
    } else if (Ma === 1129) {
        alert("its 1129");

        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        var userb = localStorage.getItem("storeWinner1.19b");
        document.getElementById("name1").innerHTML = usera[4];
        document.getElementById("name2").innerHTML = userb;
    } else if (Ma === 2129) {
        alert("its 2129");

        window.localStorage.getItem("nameArray");
        var usera = JSON.parse(localStorage.getItem("nameArray"));
        document.getElementById("name1").innerHTML = usera[5];
        document.getElementById("name2").innerHTML = usera[6];
    } else if (Ma === 1139) {
        alert("its 1139");

        window.localStorage.getItem("nameArray");
        var usera = localStorage.getItem("storeWinner1.29b");
        var userb = localStorage.getItem("storeWinner2.29b");
        document.getElementById("name1").innerHTML = usera;
        document.getElementById("name2").innerHTML = userb;
    }
    //
    else if (Ma === 213) {
        alert("its 213");
        window.localStorage.getItem("nameArray");
        var userf = localStorage.getItem("storeWinner3.2b");
        var userg = localStorage.getItem("storeWinner4.2b");
        document.getElementById("name1").innerHTML = userf;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 2.2) {
        alert("its 2.2");
        window.localStorage.getItem("nameArray");
        var userd = localStorage.getItem("storeWinner3");
        var usere = localStorage.getItem("storeWinner4");
        document.getElementById("name1").innerHTML = userd;
        document.getElementById("name2").innerHTML = usere;
    } else if (Ma === 3.2) {
        alert("its 3.2");
        window.localStorage.getItem("nameArray");
        var userf = localStorage.getItem("storeWinner5");
        var userg = localStorage.getItem("storeWinner6");
        document.getElementById("name1").innerHTML = userf;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 4.2) {
        alert("its 4.2");
        window.localStorage.getItem("nameArray");
        var userf = localStorage.getItem("storeWinner7");
        var userg = localStorage.getItem("storeWinner8");
        document.getElementById("name1").innerHTML = userf;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 2.3) {
        alert("its 2.3");
        window.localStorage.getItem("nameArray");
        var useraa = JSON.parse(localStorage.getItem("storeWinner3.2"));
        var userbb = JSON.parse(localStorage.getItem("storeWinner4.2"));
        document.getElementById("name1").innerHTML = useraa;
        document.getElementById("name2").innerHTML = userbb;
    } else if (Ma === 1.3) {
        alert("its 1.3");
        window.localStorage.getItem("nameArray");
        var userf = localStorage.getItem("storeWinner1.2");
        var userg = localStorage.getItem("storeWinner2.2");
        document.getElementById("name1").innerHTML = userf;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 1.4) {
        alert("its 1.4");
        window.localStorage.getItem("nameArray");
        var userf = JSON.parse(localStorage.getItem("storeWinner1.3"));
        var userg = JSON.parse(localStorage.getItem("storeWinner2.3"));
        document.getElementById("name1").innerHTML = userf;
        document.getElementById("name2").innerHTML = userg;
    } else if (Ma === 99) {
        alert("fin");
        window.localStorage.getItem("nameArray");
        var userf = localStorage.getItem("storeWinner1.2");
        var userg = localStorage.getItem("storeWinner1.39b");
        document.getElementById("name1").innerHTML = userf;
        document.getElementById("name2").innerHTML = userg;
    }


};






let score1 = document.getElementById("score1");
//console.log(score1);

score1.addEventListener("onload", function (e) {
    document.getElementById("score1").innerHTML.value = "0";
});

// Person 1 Score 1
let pointsOne = document.getElementById("one");
pointsOne.addEventListener("click", function (e) {
    score1.value = 1 + parseFloat(score1.value);
});

// Person 1 Score 2
let pointsTwo = document.getElementById("two");
pointsTwo.addEventListener("click", function (e) {
    score1.value = 2 + parseFloat(score1.value);
});

// Person 1 Score 3

let pointsThree = document.getElementById("three");
pointsThree.addEventListener("click", function (e) {
    score1.value = 3 + parseFloat(score1.value);
});

// Person 1 Score 4
let pointsFour = document.getElementById("four");
pointsFour.addEventListener("click", function (e) {
    score1.value = 4 + parseFloat(score1.value);
});

let score2 = document.getElementById("score2");

score2.addEventListener("onload", function (e) {
    document.getElementById("score2").innerHTML.value = "0";
});

// Person 2Score 1
let pointscOne = document.getElementById("cone");
pointscOne.addEventListener("click", function (e) {
    score2.value = 1 + parseFloat(score2.value);
    //console.log(pointscOne);
});

// Person 2 Score 2
let pointscTwo = document.getElementById("ctwo");
pointscTwo.addEventListener("click", function (e) {
    score2.value = 2 + parseFloat(score2.value);
});

// Person 2 Score 3

let pointscThree = document.getElementById("cthree");
pointscThree.addEventListener("click", function (e) {
    score2.value = 3 + parseFloat(score2.value);
});

// Person 2 Score 4
let pointscFour = document.getElementById("cfour");
pointscFour.addEventListener("click", function (e) {
    score2.value = 4 + parseFloat(score2.value);
});

//Adv

let adv = document.getElementById("advbut");

adv.addEventListener("click", function (e) {
    advantage1.value = 1 + parseFloat(advantage1.value);
});

let adv2 = document.getElementById("cadvbut");
adv2.addEventListener("click", function (e) {
    advantage2.value = 1 + parseFloat(advantage2.value);
});

//X

let Sub = document.getElementById("sub");
sub.addEventListener("click", function (e) {
    score1.value = -1 + parseFloat(score1.value);
});

let cSub = document.getElementById("csub");
csub.addEventListener("click", function (e) {
    score2.value = -1 + parseFloat(score2.value);
});

//Person 2 Penalty
let penalty = document.getElementById("penbut");

penalty.addEventListener("click", function (e) {
    penalty1.value = 1 + parseFloat(penalty1.value);
});

let pen2 = document.getElementById("cpenbut");
pen2.addEventListener("click", function (e) {
    penalty2.value = 1 + parseFloat(penalty2.value);
});

let wbelt = document.getElementById("white");
wbelt.addEventListener("click", function (e) {
    document.getElementById("work-time").value = "5";
});

let blubelt = document.getElementById("blue");
blubelt.addEventListener("click", function (e) {
    document.getElementById("work-time").value = "6";
});

let pbelt = document.getElementById("purple");
pbelt.addEventListener("click", function (e) {
    document.getElementById("work-time").value = "7";
});

let brbelt = document.getElementById("brown");
brbelt.addEventListener("click", function (e) {
    document.getElementById("work-time").value = "8";
});

let blbelt = document.getElementById("black");
blbelt.addEventListener("click", function (e) {
    document.getElementById("work-time").value = "10";
    document.getElementById("info").value = "Black Belt";
});

// Competitors

function nameSubmit() {
    var x = document.getElementById("comp1").value;
    document.getElementById("name1").innerHTML = x;
}

function nameSubmit2() {
    var x = document.getElementById("comp2").value;
    document.getElementById("name2").innerHTML = x;
}

function setWeight() {
    var x = document.getElementById("weight").value;
    var z = document.getElementById("cat").label;
    document.getElementById("info").innerText = z + " " + x;
}

function selRound() {
    var x = document.getElementById("round").value;
    var z = document.getElementById("rd").label;
    document.getElementById("roundtype").innerText = x;
}

//clock

const start_button = document.getElementById("start-btn");
const keyframes = document.getElementById("keyframes");
const stop_button = document.getElementById("stop-btn");
const resume_button = document.getElementById("resume-btn");
const status = document.getElementById("status");
const clock_container = document.getElementById("clock-container");
let myReuseableStylesheet = document.createElement("style");
let clock,
    pause,
    addKeyFrames = null;

start_button.addEventListener("click", function () {
    resume_button.style.display = "none";
    stop_button.style.display = "inline-block";
    status.innerHTML = "MATCH TIME";
    stop_button.innerText = "Stop";
    let work_time = getWorkTime();
    let break_time = getBreakTime();
    clearInterval(clock);
    startTimer();
});

stop_button.addEventListener("click", function () {
    stop_button.style.display = "none";
    resume_button.style.display = "inline-block";
    clearInterval(clock);
});

resume_button.addEventListener("click", function () {
    let current_time = document.getElementById("timer").innerText;
    let work_time = current_time
        .split(":")
        .reduce((acc, time) => 60 * acc + +time);
    let check_break = status.innerText === "WORK TIME" ? false : true;
    resume_button.style.display = "none";
    stop_button.style.display = "inline-block";
    startTimer(work_time - 1, null, check_break);
});

function getWorkTime() {
    let work_time = parseInt(document.getElementById("work-time").value) * 60;
    return work_time;
}

function getBreakTime() {
    let break_time = parseInt(document.getElementById("break-time").value) * 60;
    return break_time;
}

function convertSeconds(sec) {
    if (sec <= 0) {
        return "00:00";
    } else {
        let minutes = Math.floor(sec / 60);
        let seconds = sec % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return minutes + ":" + seconds;
    }
}

function startTimer(counter = null, break_time = null, break_finished = false) {
    counter = counter != null ? counter : getWorkTime();
    break_time = break_time != null ? break_time : getBreakTime();
    let session = counter;
    let timer = document.getElementById("timer");
    clock = setInterval(timeIt, 1000); 

    function timeIt() {
        let liNum = JSON.parse(localStorage.getItem("liTotal"));
        let tWinB = localStorage.getItem("blueWon");
        let tWinO = localStorage.getItem("orangeWon");
        let blueWin = localStorage.getItem("blueWin");
        let orangeWin = localStorage.getItem("orangeWin");
        var Ma = JSON.parse(localStorage.getItem("matchname"));

        var x = document.getElementById("name1").innerHTML;
        var z = document.getElementById("name2").innerHTML;


        let score1v = parseInt(document.getElementById("score1").value) * 1;
        //  console.log(score1v);
        let score2v = parseInt(document.getElementById("score2").value) * 1;
        // console.log(score2v);
        timer.innerHTML = convertSeconds(counter);
        if (counter >= 0) {
            counter--;
        } else if (counter < 0 && break_finished === false) {
            var horn = new Audio("buzz.mp3");
            horn.play();
            let counter = 1;
            clearInterval(clock);
            console.log(score1v) 
            console.log(score2v)
            //winner
            if (score1v > score2v) {
           
                var x = document.getElementById("name1").innerHTML;
                var z = document.getElementById("name2").innerHTML;
                document.getElementById("winner").innerText = x;
                document.getElementById("loser").innerText = z;
                // PARSE Winner
                var m1 = document.getElementById("winner").innerText;
                var l1 = document.getElementById("loser").innerText;
                let liNum = JSON.parse(localStorage.getItem("liTotal"));
       
                
                console.log(m1);
                var a = document.createElement("a");
                var linkText = document.createTextNode("Continue...");
                a.appendChild(linkText);
                a.title = "Continue...";
                a.href = "bjjbrack.html";
                a.style.fontSize = "20px";
                a.style.color = "white";
                a.style.backgroundColor = "cornFlowerBlue";

                document.body.appendChild(a);
                counter = getWorkTime() - 1;
                session = getWorkTime();
                break_finished = false;
                timer.innerHTML = convertSeconds(session);
                status.innerHTML = "WORK TIME";
                clearInterval(clock);

                  //2 man
               if (Ma === 1 && liNum === 2) {
               checkBlue = localStorage.getItem("blueWon")
               checkOrange = localStorage.getItem("orangeWon")
               localStorage.setItem("storeWinnerFinal", (m1));
               localStorage.setItem("silver", (l1));
                      
                }

                //3 man
                if (Ma === 1 && liNum === 3) {
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("bronze1", (l1));
                }
                if (Ma === 1.2 && liNum === 3) {
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }


                //4 man
                if (Ma === 1 && liNum === 4) {
                    console.log("score2v");
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }

                if (Ma === 1 && liNum === 4 && blueWin === 1 && (score2v == score1v)) {
                    let m1 = document.getElementById("winner").innerText;
                    console.log("blue")
                    localStorage.setItem("blueWin", (1));
                    localStorage.setItem("orangeWin", (0));
                    var x = document.getElementById("name1").innerHTML;
                    var z = document.getElementById("name2").innerHTML;
                    document.getElementById("winner").innerText = x;
                    document.getElementById("loser").innerText = z;
                    localStorage.setItem("blueWon", (x));
                    localStorage.setItem("orangeWon", (0));
                    console.log('aye');
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                    localStorage.setItem("Won1.11", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }

                if (Ma === 1 && liNum === 4 && orangeWin === 1 && (score2v == score1v)) {
                    let m1 = document.getElementById("winner").innerText;
                    console.log("orange")
                    localStorage.setItem("blueWin", (0));
                    localStorage.setItem("orangeWin", (1));
                    var x = document.getElementById("name1").innerHTML;
                    var z = document.getElementById("name2").innerHTML;
                    document.getElementById("winner").innerText = z;
                    document.getElementById("loser").innerText = x;
                    localStorage.setItem("blueWon", (0));
                    localStorage.setItem("orangeWon", (z));
                    console.log('aye');
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                    localStorage.setItem("Won1.11", (m1));
                    localStorage.setItem("storeBronze1", (l1));

                }
                if (Ma === 2 && liNum === 4) {
                    console.log("ok");
                    localStorage.setItem("Won2.1", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }
                if (Ma === 1.2 && liNum === 4) {
                    console.log("ok");
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }



                //5 man
                if (Ma === 2 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 1.2 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("Won2.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 2.2 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }


                if (Ma === 1.13 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }

                //6 man
                if (Ma === 2 && liNum === 6) {

                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 3 && liNum === 6) {

                    localStorage.setItem("Won2.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 2.2 && liNum === 6) {

                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }


                if (Ma === 1.2 && liNum === 6) {

                    localStorage.setItem("Won1.2", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 1.13 && liNum === 6) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }



                //7 man
                if (Ma === 1 && liNum === 7) {

                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 2 && liNum === 7) {

                    localStorage.setItem("Won2.1", (m1));

                }
                if (Ma === 3 && liNum === 7) {

                    localStorage.setItem("Won3.1", (m1));

                }


                if (Ma === 4 && liNum === 7) {

                    localStorage.setItem("Won1.2", (m1));

                }
                if (Ma === 1.13 && liNum === 7) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }


                if (Ma === 2.2 && liNum === 7) {

                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 1.2 && liNum === 7) {

                    localStorage.setItem("Won1.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }



                //8 man
                if (Ma === 1 && liNum === 8) {

                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 2 && liNum === 8) {

                    localStorage.setItem("Won2.1", (m1));

                }
                if (Ma === 3 && liNum === 8) {

                    localStorage.setItem("Won3.1", (m1));

                }


                if (Ma === 4 && liNum === 8) {

                    localStorage.setItem("Won4.1", (m1));

                }
                if (Ma === 1.13 && liNum === 8) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }


                if (Ma === 2.2 && liNum === 8) {

                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }
                if (Ma === 1.2 && liNum === 8) {

                    localStorage.setItem("Won1.2", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }


                //9 man
                if (Ma === 1 && liNum === 9) {

                    localStorage.setItem("Won1.1", (m1));



                }
                if (Ma === 2 && liNum === 9) {

                    localStorage.setItem("Won2.1", (m1));

                }
                if (Ma === 3 && liNum === 9) {

                    localStorage.setItem("Won3.1", (m1));

                }


                if (Ma === 4 && liNum === 9) {

                    localStorage.setItem("Won4.1", (m1));

                }
                if (Ma === 1.13 && liNum === 9) {

                    localStorage.setItem("storeWinnerFinal", (m1));

                }


                if (Ma === 2.2 && liNum === 9) {

                    localStorage.setItem("Won2.2", (m1));

                }
                if (Ma === 1.2 && liNum === 9) {
                    localStorage.setItem("storeBronze1", (l1));
                    localStorage.setItem("Won1.2", (m1));

                }



                // 9 MAN BRACKET B
                if (Ma === 1119 && liNum === 9) {
                    localStorage.setItem("storeWinner1.19b", m1);
                }
                if (Ma === 1129 && liNum === 9) {
                    localStorage.setItem("storeWinner1.29b", m1);
                }
                if (Ma === 2129 && liNum === 9) {
                    localStorage.setItem("storeWinner2.29b", m1);
                }
                if (Ma === 1139 && liNum === 9) {
                    localStorage.setItem("storeBronze2", (l1));
                    localStorage.setItem("storeWinner1.39b", m1);
                }


                if (Ma === 99 && liNum === 9) {
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));

                }

            }
            if (score2v > score1v) {
                var x = document.getElementById("name1").innerHTML;
                var z = document.getElementById("name2").innerHTML;
                document.getElementById("winner").innerText = z;
                document.getElementById("loser").innerText = x;

                console.log(score1v);
                // PARSE Winner
                var m1 = document.getElementById("winner").innerText;
                var l1 = document.getElementById("loser").innerText;

                console.log(m1);
                var a = document.createElement("a");
                var linkText = document.createTextNode("Continue...");
                a.appendChild(linkText);
                a.title = "Continue...";
                a.href = "bjjbrack.html";
                a.style.fontSize = "20px";
                a.style.color = "white";
                a.style.backgroundColor = "cornFlowerBlue";

                document.body.appendChild(a);
                counter = getWorkTime() - 1;
                session = getWorkTime();
                break_finished = false;
                timer.innerHTML = convertSeconds(session);
                status.innerHTML = "WORK TIME";
                clearInterval(clock);

                  //2 man
                  if (Ma == 1 && liNum == 2) {
                    checkBlue = localStorage.getItem("blueWon")
                    checkOrange = localStorage.getItem("orangeWon")
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                   
                }

                //3 man
                if (Ma === 1 && liNum === 3) {
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("bronze1", (l1));
                }
                if (Ma === 1.2 && liNum === 3) {
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }

                //4 man
                if (Ma === 1 && liNum === 4) {
                    console.log("score2v");
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }

                if (Ma === 1 && liNum === 4 && blueWin === 1 && (score2v == score1v)) {
                    let m1 = document.getElementById("winner").innerText;
                    console.log("blue")
                    localStorage.setItem("blueWin", (1));
                    localStorage.setItem("orangeWin", (0));
                    var x = document.getElementById("name1").innerHTML;
                    var z = document.getElementById("name2").innerHTML;
                    document.getElementById("winner").innerText = x;
                    document.getElementById("loser").innerText = z;
                    localStorage.setItem("blueWon", (x));
                    localStorage.setItem("orangeWon", (0));
                    console.log('aye');
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                    localStorage.setItem("Won1.11", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }

                if (Ma === 1 && liNum === 4 && orangeWin === 1 && (score2v == score1v)) {
                    let m1 = document.getElementById("winner").innerText;
                    console.log("orange")
                    localStorage.setItem("blueWin", (0));
                    localStorage.setItem("orangeWin", (1));
                    var x = document.getElementById("name1").innerHTML;
                    var z = document.getElementById("name2").innerHTML;
                    document.getElementById("winner").innerText = z;
                    document.getElementById("loser").innerText = x;
                    localStorage.setItem("blueWon", (0));
                    localStorage.setItem("orangeWon", (z));
                    console.log('aye');
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                    localStorage.setItem("Won1.11", (m1));
                    localStorage.setItem("storeBronze1", (l1));

                }
                if (Ma === 2 && liNum === 4) {
                    console.log("ok");
                    localStorage.setItem("Won2.1", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }
                if (Ma === 1.2 && liNum === 4) {
                    console.log("ok");
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }



                //5 man
                if (Ma === 2 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 1.2 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("Won2.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 2.2 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }


                if (Ma === 1.13 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }

                //6 man
                if (Ma === 2 && liNum === 6) {

                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 3 && liNum === 6) {

                    localStorage.setItem("Won2.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 2.2 && liNum === 6) {

                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }


                if (Ma === 1.2 && liNum === 6) {

                    localStorage.setItem("Won1.2", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 1.13 && liNum === 6) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }



                //7 man
                if (Ma === 1 && liNum === 7) {

                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 2 && liNum === 7) {

                    localStorage.setItem("Won2.1", (m1));

                }
                if (Ma === 3 && liNum === 7) {

                    localStorage.setItem("Won3.1", (m1));

                }


                if (Ma === 4 && liNum === 7) {

                    localStorage.setItem("Won1.2", (m1));

                }
                if (Ma === 1.13 && liNum === 7) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }


                if (Ma === 2.2 && liNum === 7) {

                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 1.2 && liNum === 7) {

                    localStorage.setItem("Won1.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }



                //8 man
                if (Ma === 1 && liNum === 8) {

                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 2 && liNum === 8) {

                    localStorage.setItem("Won2.1", (m1));

                }
                if (Ma === 3 && liNum === 8) {

                    localStorage.setItem("Won3.1", (m1));

                }


                if (Ma === 4 && liNum === 8) {

                    localStorage.setItem("Won4.1", (m1));

                }
                if (Ma === 1.13 && liNum === 8) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }


                if (Ma === 2.2 && liNum === 8) {

                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }
                if (Ma === 1.2 && liNum === 8) {

                    localStorage.setItem("Won1.2", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }


                //9 man
                if (Ma === 1 && liNum === 9) {

                    localStorage.setItem("Won1.1", (m1));



                }
                if (Ma === 2 && liNum === 9) {

                    localStorage.setItem("Won2.1", (m1));

                }
                if (Ma === 3 && liNum === 9) {

                    localStorage.setItem("Won3.1", (m1));

                }


                if (Ma === 4 && liNum === 9) {

                    localStorage.setItem("Won4.1", (m1));

                }
                if (Ma === 1.13 && liNum === 9) {

                    localStorage.setItem("storeWinnerFinal", (m1));

                }


                if (Ma === 2.2 && liNum === 9) {

                    localStorage.setItem("Won2.2", (m1));

                }
                if (Ma === 1.2 && liNum === 9) {
                    localStorage.setItem("storeBronze1", (l1));
                    localStorage.setItem("Won1.2", (m1));

                }



                // 9 MAN BRACKET B
                if (Ma === 1119 && liNum === 9) {
                    localStorage.setItem("storeWinner1.19b", m1);
                }
                if (Ma === 1129 && liNum === 9) {
                    localStorage.setItem("storeWinner1.29b", m1);
                }
                if (Ma === 2129 && liNum === 9) {
                    localStorage.setItem("storeWinner2.29b", m1);
                }
                if (Ma === 1139 && liNum === 9) {
                    localStorage.setItem("storeBronze2", (l1));
                    localStorage.setItem("storeWinner1.39b", m1);
                }


                if (Ma === 99 && liNum === 9) {
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));

                }
            }

            if (score2v == score1v) {
                let m1 = document.getElementById("winner").innerText;
                console.log(m1);
                let a = document.createElement("a");
                var x = document.getElementById("name1").innerHTML;
                var modal = document.getElementById("myModal");
                var span = document.getElementsByClassName("close")[0];
                modal.style.display = "block";
                //Blue Ref Decision
                document.getElementById("choice1").onclick = function () {
                let m1 = document.getElementById("winner").innerText;
                console.log("blue")
                localStorage.setItem("blueWin", (1));
                localStorage.setItem("orangeWin", (0));
                var x = document.getElementById("name1").innerHTML;
                var z = document.getElementById("name2").innerHTML;
                document.getElementById("winner").innerText = x;
                document.getElementById("loser").innerText = z;
                localStorage.setItem("blueWon", (x));
                localStorage.setItem("orangeWon", (0));
                timeIt();
                score1.value = 1 + parseFloat(score1.value);
                   
                };
                //Orange Ref Decision
                document.getElementById("choice2").onclick = function () {

                localStorage.setItem("orangeWin", (1));
                localStorage.setItem("blueWin", (0));
                var x = document.getElementById("name1").innerHTML;
                var z = document.getElementById("name2").innerHTML;
                document.getElementById("winner").innerText = z;
                document.getElementById("loser").innerText = x;
                localStorage.setItem("orangeWon", (z));
                localStorage.setItem("blueWon", (0));
                timeIt();
                score2.value = 1 + parseFloat(score2.value);
                document.getElementById("winner").innerText = z;
                document.getElementById("loser").innerText = x;
                };
           
                window.onclick = function (event) {
                    if (event.target == modal) {

                    }
                }

                span.onclick = function () {
                    modal.style.display = "none";

                }


                var linkText = document.createTextNode("Continue...");
                a.appendChild(linkText);
                a.title = "Continue...";
                a.href = "bjjbrack.html";
                a.style.fontSize = "20px";
                a.style.color = "white";
                a.style.backgroundColor = "cornFlowerBlue";

                document.body.appendChild(a);
                counter = getWorkTime() - 1;
                session = getWorkTime();
                break_finished = false;
                timer.innerHTML = convertSeconds(session);
                clearInterval(clock);


            

                //2 man
                if (Ma == 1 && liNum == 2) {
                    checkBlue = localStorage.getItem("blueWon")
                    checkOrange = localStorage.getItem("orangeWon")
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                    console.log(x);
                    if (checkBlue === 1) {
                        localStorage.setItem("storeWinnerFinal", x);
                        localStorage.setItem("silver", z);
                        console.log('chkblue');
                        document.getElementById("winner").innerText = x;
                    }
                    if (checkOrange === z) {
                        localStorage.setItem("storeWinnerFinal", z);
                        localStorage.setItem("silver", x);
                        console.log('checkorange');
                        document.getElementById("winner").innerText = z;
                    }

                    span.onclick = function () {
                        modal.style.display = "none";


                    }

                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                            console.log('rheiadzn')

                        }
                    }
                }



                //
                //3 man
                if (Ma === 1 && liNum === 3) {
                    console.log("ok");
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("bronze1", (l1));
                }
                if (Ma === 1.2 && liNum === 3) {
                    console.log("ok");
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }


                //4 man
                if (Ma === 1 && liNum === 4) {
                    console.log("score2v");
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }

                if (Ma === 1 && liNum === 4 && blueWin === 1 && (score2v == score1v)) {
                    let m1 = document.getElementById("winner").innerText;
                    console.log("blue")
                    localStorage.setItem("blueWin", (1));
                    localStorage.setItem("orangeWin", (0));
                    var x = document.getElementById("name1").innerHTML;
                    var z = document.getElementById("name2").innerHTML;
                    document.getElementById("winner").innerText = x;
                    document.getElementById("loser").innerText = z;
                    localStorage.setItem("blueWon", (x));
                    localStorage.setItem("orangeWon", (0));
                    console.log('aye');
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                    localStorage.setItem("Won1.11", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }

                if (Ma === 1 && liNum === 4 && orangeWin === 1 && (score2v == score1v)) {
                    let m1 = document.getElementById("winner").innerText;
                    console.log("orange")
                    localStorage.setItem("blueWin", (0));
                    localStorage.setItem("orangeWin", (1));
                    var x = document.getElementById("name1").innerHTML;
                    var z = document.getElementById("name2").innerHTML;
                    document.getElementById("winner").innerText = z;
                    document.getElementById("loser").innerText = x;
                    localStorage.setItem("blueWon", (0));
                    localStorage.setItem("orangeWon", (z));
                    console.log('aye');
                    localStorage.setItem("Won1.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                    localStorage.setItem("Won1.11", (m1));
                    localStorage.setItem("storeBronze1", (l1));

                }
                if (Ma === 2 && liNum === 4) {
                    console.log("ok");
                    localStorage.setItem("Won2.1", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }
                if (Ma === 1.2 && liNum === 4) {
                    console.log("ok");
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }



                //5 man
                if (Ma === 2 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 1.2 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("Won2.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 2.2 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }


                if (Ma === 1.13 && liNum === 5) {
                    console.log("ok");
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }

                //6 man
                if (Ma === 2 && liNum === 6) {

                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 3 && liNum === 6) {

                    localStorage.setItem("Won2.1", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 2.2 && liNum === 6) {

                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }


                if (Ma === 1.2 && liNum === 6) {

                    localStorage.setItem("Won1.2", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 1.13 && liNum === 6) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }



                //7 man
                if (Ma === 1 && liNum === 7) {

                    localStorage.setItem("Won1.1", (m1));


                }
                if (Ma === 2 && liNum === 7) {

                    localStorage.setItem("Won2.1", (m1));

                }
                if (Ma === 3 && liNum === 7) {

                    localStorage.setItem("Won3.1", (m1));

                }


                if (Ma === 4 && liNum === 7) {
                    localStorage.setItem("Won1.2", (m1));

                }
                if (Ma === 1.13 && liNum === 7) {
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }


                if (Ma === 2.2 && liNum === 7) {
                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }
                if (Ma === 1.2 && liNum === 7) {
                    localStorage.setItem("Won1.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }


                //8 man
                if (Ma === 1 && liNum === 8) {
                    localStorage.setItem("Won1.1", (m1));
                }
                if (Ma === 2 && liNum === 8) {
                    localStorage.setItem("Won2.1", (m1));
                }
                if (Ma === 3 && liNum === 8) {
                    localStorage.setItem("Won3.1", (m1));
                }


                if (Ma === 4 && liNum === 8) {
                    localStorage.setItem("Won4.1", (m1));
                }
                if (Ma === 1.13 && liNum === 8) {
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }


                if (Ma === 2.2 && liNum === 8) {
                    localStorage.setItem("Won2.2", (m1));
                    localStorage.setItem("storeBronze2", (l1));
                }
                if (Ma === 1.2 && liNum === 8) {

                    localStorage.setItem("Won1.2", (m1));
                    localStorage.setItem("storeBronze1", (l1));
                }


                //9 man
                if (Ma === 1 && liNum === 9) {
                    localStorage.setItem("Won1.1", (m1));
                }
                if (Ma === 2 && liNum === 9) {
                    localStorage.setItem("Won2.1", (m1));
                }
                if (Ma === 3 && liNum === 9) {
                    localStorage.setItem("Won3.1", (m1));
                }


                if (Ma === 4 && liNum === 9) {

                    localStorage.setItem("Won4.1", (m1));

                }
                if (Ma === 1.13 && liNum === 9) {

                    localStorage.setItem("storeWinnerFinal", (m1));

                }


                if (Ma === 2.2 && liNum === 9) {

                    localStorage.setItem("Won2.2", (m1));

                }
                if (Ma === 1.2 && liNum === 9) {
                    localStorage.setItem("storeBronze1", (l1));
                    localStorage.setItem("Won1.2", (m1));

                }



                // 9 MAN BRACKET B
                if (Ma === 1119 && liNum === 9) {
                    localStorage.setItem("storeWinner1.19b", m1);
                }
                if (Ma === 1129 && liNum === 9) {
                    localStorage.setItem("storeWinner1.29b", m1);
                }
                if (Ma === 2129 && liNum === 9) {
                    localStorage.setItem("storeWinner2.29b", m1);
                }
                if (Ma === 1139 && liNum === 9) {
                    localStorage.setItem("storeBronze2", (l1));
                    localStorage.setItem("storeWinner1.39b", m1);
                }


                if (Ma === 99 && liNum === 9) {
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));

                }







                //10 man
                if (Ma === 11110) {
                    localStorage.setItem("storeWinner11110", m1);
                };
                if (Ma === 11210) {
                    localStorage.setItem("storeWinner11210", m1);
                };
                if (Ma === 21210) {
                    localStorage.setItem("storeWinner21210", m1);
                };
                if (Ma === 212102) {
                    localStorage.setItem("storeWinner212102", m1);
                };
                if (Ma === 11310) {
                    localStorage.setItem("storeWinner11310", m1);
                };
                if (Ma === 113102) {
                    localStorage.setItem("storeWinner113102", m1);
                };
                if (Ma === 111102) {
                    localStorage.setItem("storeWinner111102", m1);
                };
                if (Ma === 112102) {
                    localStorage.setItem("storeWinner112102", m1);

                };
                if (Ma === 910) {
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }
                if (Ma === 910) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }
                //


                //11 man
                if (Ma === 11111) {
                    localStorage.setItem("storeWinner11111", (m1));
                }
                if (Ma === 111112) {
                    localStorage.setItem("storeWinner111112", (m1));
                }
                if (Ma === 11211) {
                    localStorage.setItem("storeWinner11211", (m1));
                }
                if (Ma === 112112) {
                    localStorage.setItem("storeWinner112112", (m1));
                }
                if (Ma === 21211) {
                    localStorage.setItem("storeWinner21211", (m1));
                }
                if (Ma === 11311) {

                    localStorage.setItem("storeWinner11311", (m1));
                    localStorage.setItem("bronze1", (l1));
                }

                if (Ma === 211112) {
                    localStorage.setItem("storeWinner211112", (m1));
                }
                if (Ma === 212112) {
                    localStorage.setItem("storeWinner212112", (m1));
                }
                if (Ma === 113112) {
                    localStorage.setItem("storeWinner113112", (m1));
                    localStorage.setItem("bronze2", (l1));
                }
                if (Ma === 911) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }
                //

                //12man
                if (Ma === 11112) {
                    localStorage.setItem("storeWinner11112", m1);
                }
                if (Ma === 111122) {
                    localStorage.setItem("storeWinner111122", m1);
                }
                if (Ma === 21112) {
                    localStorage.setItem("storeWinner21112", m1);
                }
                if (Ma === 211122) {
                    localStorage.setItem("storeWinner211122", m1);
                }
                if (Ma === 21212) {
                    localStorage.setItem("storeWinner21212", m1);
                }
                if (Ma === 212122) {
                    localStorage.setItem("storeWinner212122", m1);
                }
                if (Ma === 11212) {
                    localStorage.setItem("storeWinner11212", m1);
                }
                if (Ma === 112122) {
                    localStorage.setItem("storeWinner112122", m1);
                }
                if (Ma === 11312) {
                    localStorage.setItem("storeWinner11312", m1);
                    localStorage.setItem("bronze1", (l1));
                }
                if (Ma === 113122) {
                    localStorage.setItem("storeWinner113122", m1);
                    localStorage.setItem("bronze2", (l1));
                }
                if (Ma === 912) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }
                //
                //13man
                if (Ma === 11113) {
                    localStorage.setItem("storeWinner11113", m1);
                }
                if (Ma === 111132) {
                    localStorage.setItem("storeWinner111132", m1);
                }
                if (Ma === 21113) {
                    localStorage.setItem("storeWinner21113", m1);
                }
                if (Ma === 211132) {
                    localStorage.setItem("storeWinner211132", m1);
                }
                if (Ma === 21213) {
                    localStorage.setItem("storeWinner21213", m1);
                }
                if (Ma === 212132) {
                    localStorage.setItem("storeWinner212132", m1);
                }
                if (Ma === 11213) {
                    localStorage.setItem("storeWinner11213", m1);
                }
                if (Ma === 112132) {
                    localStorage.setItem("storeWinner112132", m1);
                }
                if (Ma === 11313) {
                    localStorage.setItem("storeWinner11313", m1);
                    localStorage.setItem("bronze1", (l1));
                }
                if (Ma === 113132) {
                    localStorage.setItem("storeWinner113132", m1);
                    localStorage.setItem("bronze2", (l1));
                }

                if (Ma === 311132) {
                    localStorage.setItem("storeWinner311132", m1);
                    localStorage.setItem("bronze2", (l1));
                }
                if (Ma === 913) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }
                //
                //14man
                if (Ma === 11114) {
                    localStorage.setItem("storeWinner11114", m1);
                }
                if (Ma === 111142) {
                    localStorage.setItem("storeWinner111142", m1);
                }
                if (Ma === 21114) {
                    localStorage.setItem("storeWinner21114", m1);
                }

                if (Ma === 31114) {
                    localStorage.setItem("storeWinner31114", m1);
                }
                if (Ma === 211142) {
                    localStorage.setItem("storeWinner211142", m1);
                }
                if (Ma === 21214) {
                    localStorage.setItem("storeWinner21214", m1);
                }
                if (Ma === 212142) {
                    localStorage.setItem("storeWinner212142", m1);
                }
                if (Ma === 11214) {
                    localStorage.setItem("storeWinner11214", m1);
                }
                if (Ma === 112142) {
                    localStorage.setItem("storeWinner112142", m1);
                }
                if (Ma === 11314) {
                    localStorage.setItem("storeWinner11314", m1);
                    localStorage.setItem("bronze1", (l1));
                }
                if (Ma === 113142) {
                    localStorage.setItem("storeWinner113142", m1);
                    localStorage.setItem("bronze2", (l1));
                }
                if (Ma === 311142) {
                    localStorage.setItem("storeWinner311142", m1);
                    localStorage.setItem("bronze2", (l1));
                }
                if (Ma === 914) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }
                //

                //

                if (Ma === 112) {
                    localStorage.setItem("storeWinner1.2b", m1);
                }

                if (Ma === 2) {
                    localStorage.setItem("storeWinner2", m1);
                }
                if (Ma === 211) {
                    localStorage.setItem("storeWinner2b", JSON.stringify(m1));
                }
                if (Ma === 3) {
                    localStorage.setItem("storeWinner3", m1);
                }
                if (Ma === 311) {
                    localStorage.setItem("storeWinner3b", m1);
                }
                if (Ma === 312) {
                    localStorage.setItem("storeWinner3.2b", m1);
                }
                if (Ma === 4) {
                    localStorage.setItem("storeWinner4", m1);
                }
                if (Ma === 411) {
                    localStorage.setItem("storeWinner4b", m1);
                }
                if (Ma === 5) {
                    localStorage.setItem("storeWinner5", JSON.stringify(m1));
                }
                if (Ma === 511) {
                    localStorage.setItem("storeWinner5b", m1);
                }
                if (Ma === 6) {
                    localStorage.setItem("storeWinner6", JSON.stringify(m1));
                }
                if (Ma === 611) {
                    localStorage.setItem("storeWinner6b", JSON.stringify(m1));
                }
                if (Ma === 7) {
                    localStorage.setItem("storeWinner7", JSON.stringify(m1));
                }
                if (Ma === 711) {
                    localStorage.setItem("storeWinner7b", JSON.stringify(m1));
                }
                if (Ma === 8) {
                    localStorage.setItem("storeWinner8", JSON.stringify(m1));
                }
                if (Ma === 811) {
                    localStorage.setItem("storeWinner8b", JSON.stringify(m1));
                }

                if (Ma === 1.2) {
                    localStorage.setItem("storeWinner1.2", m1);
                }


                if (Ma === 2.2) {
                    localStorage.setItem("storeWinner2.2", m1);
                }
                if (Ma === 212) {
                    localStorage.setItem("storeWinner2.2b", JSON.stringify(m1));
                }
                if (Ma === 3.1) {
                    localStorage.setItem("storeWinner3.1", JSON.stringify(m1));
                }
                if (Ma === 3.2) {
                    localStorage.setItem("storeWinner3.2", JSON.stringify(m1));
                }

                if (Ma === 4.2) {
                    localStorage.setItem("storeWinner4.2", JSON.stringify(m1));
                }
                if (Ma === 412) {
                    localStorage.setItem("storeWinner4.2b", JSON.stringify(m1));
                }
                if (Ma === 2.3) {
                    localStorage.setItem("storeWinner2.3", JSON.stringify(m1));
                }
                if (Ma === 2.3) {
                    localStorage.setItem("storeWinner2.3", JSON.stringify(m1));
                }
                if (Ma === 1.3) {
                    localStorage.setItem("storeWinner1.3", m1);
                }
                if (Ma === 1.4) {
                    localStorage.setItem("storeWinner1.4", JSON.stringify(m1));
                }
                if (Ma === 113) {
                    localStorage.setItem("storeWinner1.3b", m1);
                }



                //

                if (Ma === 213) {
                    localStorage.setItem("storeWinner2.3b", JSON.stringify(m1));
                }
                if (Ma === 114) {
                    localStorage.setItem("storeWinner1.4b", JSON.stringify(m1));

                }
                if (Ma === 99) {
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (lost));
                } else {
                    var y = document.getElementById("name2").innerHTML;
                    var z = document.getElementById("name1").innerHTML;







                    if (Ma === 2) {
                        localStorage.setItem("storeWinner2", m1);
                    }
                    if (Ma === 3) {
                        localStorage.setItem("storeWinner3", m1);
                    }


                    if (Ma === 4) {
                        localStorage.setItem("storeWinner4", m1);
                    }


                    if (Ma === 5) {
                        localStorage.setItem("storeWinner5", JSON.stringify(m1));
                    }

                    if (Ma === 6) {
                        localStorage.setItem("storeWinner6", JSON.stringify(m1));
                    }

                    if (Ma === 7) {
                        localStorage.setItem("storeWinner7", JSON.stringify(m1));
                    }


                    if (Ma === 8) {
                        localStorage.setItem("storeWinner8", JSON.stringify(m1));
                    }



                    if (Ma === 1.2) {
                        localStorage.setItem("storeWinner1.2", m1);
                    }

                    if (Ma === 1.4) {
                        localStorage.setItem("storeWinner1.4", JSON.stringify(m1));
                    }
                    if (Ma === 1.4) {
                        localStorage.setItem("storeWinner1.4b", JSON.stringify(m1));
                    }
                    if (Ma === 2.2) {
                        localStorage.setItem("storeWinner2.2", m1);
                    }

                    if (Ma === 3.1) {
                        localStorage.setItem("storeWinner3.1", m1);
                    }

                    if (Ma === 3.2) {
                        localStorage.setItem("storeWinner3.2", JSON.stringify(m1));
                    }

                    if (Ma === 4.2) {
                        localStorage.setItem("storeWinner4.2", JSON.stringify(m1));
                    }
                    if (Ma === 2.3) {
                        localStorage.setItem("storeWinner2.3", JSON.stringify(m1));
                    }

                    if (Ma === 111) {
                        localStorage.setItem("storeWinner1b", m1);
                    }
                    if (Ma === 211) {
                        localStorage.setItem("storeWinner2b", m1);
                    }
                    if (Ma === 311) {
                        localStorage.setItem("storeWinner3b", JSON.stringify(m1));
                    }
                    if (Ma === 411) {
                        localStorage.setItem("storeWinner4b", m1);
                    }
                    if (Ma === 511) {
                        localStorage.setItem("storeWinner5b", JSON.stringify(m1));
                    }
                    if (Ma === 611) {
                        localStorage.setItem("storeWinner6b", JSON.stringify(m1));
                    }
                    if (Ma === 711) {
                        localStorage.setItem("storeWinner7b", JSON.stringify(m1));
                    }
                    if (Ma === 811) {
                        localStorage.setItem("storeWinner8b", JSON.stringify(m1));
                    }
                    //10 Man
                    if (Ma === 11110) {
                        localStorage.setItem("storeWinner11110", m1);
                    };
                    if (Ma === 11210) {
                        localStorage.setItem("storeWinner11210", m1);
                    };
                    if (Ma === 21210) {
                        localStorage.setItem("storeWinner21210", m1);
                    };
                    if (Ma === 11310) {
                        localStorage.setItem("storeWinner11310", m1);
                    };
                    if (Ma === 113102) {
                        localStorage.setItem("storeWinner113102", m1);
                    };
                    if (Ma === 111102) {
                        localStorage.setItem("storeWinner111102", m1);
                    };
                    if (Ma === 212102) {
                        localStorage.setItem("storeWinner212102", m1);

                    };
                    if (Ma === 112102) {
                        localStorage.setItem("storeWinner112102", m1);
                    }

                    //

                    //11 man
                    if (Ma === 11111) {
                        localStorage.setItem("storeWinner11111", (m1));
                    }
                    if (Ma === 111112) {
                        localStorage.setItem("storeWinner111112", (m1));
                    }
                    if (Ma === 11311) {
                        localStorage.setItem("storeWinner11311", (m1));
                        localStorage.setItem("bronze1", (l1));
                    }
                    if (Ma === 11211) {
                        localStorage.setItem("storeWinner11211", (m1));
                    }
                    if (Ma === 112112) {
                        localStorage.setItem("storeWinner112112", (m1));
                    }
                    if (Ma === 21211) {
                        localStorage.setItem("storeWinner21211", (m1));
                    }
                    if (Ma === 212112) {
                        localStorage.setItem("storeWinner212112", (m1));
                    }
                    if (Ma === 211112) {
                        localStorage.setItem("storeWinner211112", (m1));
                    }
                    if (Ma === 113112) {
                        localStorage.setItem("storeWinner113112", (m1));
                        localStorage.setItem("bronze2", (l1))
                    };
                    if (Ma === 911) {

                        localStorage.setItem("storeWinnerFinal", (m1));
                        localStorage.setItem("silver", (l1));
                    }
                }
                //


                //12man
                if (Ma === 11112) {
                    localStorage.setItem("storeWinner11112", m1);
                }
                if (Ma === 21112) {
                    localStorage.setItem("storeWinner21112", m1);
                }
                if (Ma === 211122) {
                    localStorage.setItem("storeWinner211122", m1);
                }
                if (Ma === 21212) {
                    localStorage.setItem("storeWinner21212", m1);
                }
                if (Ma === 11212) {
                    localStorage.setItem("storeWinner11212", m1);
                }
                if (Ma === 112122) {
                    localStorage.setItem("storeWinner112122", m1);
                }
                if (Ma === 11312) {
                    localStorage.setItem("storeWinner11312", m1);
                    localStorage.setItem("bronze1", (l1));
                }
                if (Ma === 111122) {
                    localStorage.setItem("storeWinner111122", m1);
                }
                if (Ma === 212122) {
                    localStorage.setItem("storeWinner212122", m1);
                }
                if (Ma === 113122) {
                    localStorage.setItem("storeWinner113122", m1);
                    localStorage.setItem("bronze2", (l1));
                }
                if (Ma === 912) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }
                //
                //13man
                if (Ma === 11113) {
                    localStorage.setItem("storeWinner11113", m1);
                }
                if (Ma === 111132) {
                    localStorage.setItem("storeWinner111132", m1);
                }
                if (Ma === 21113) {
                    localStorage.setItem("storeWinner21113", m1);
                }
                if (Ma === 211132) {
                    localStorage.setItem("storeWinner211132", m1);
                }
                if (Ma === 21213) {
                    localStorage.setItem("storeWinner21213", m1);
                }
                if (Ma === 212132) {
                    localStorage.setItem("storeWinner212132", m1);
                }
                if (Ma === 11213) {
                    localStorage.setItem("storeWinner11213", m1);
                }
                if (Ma === 112132) {
                    localStorage.setItem("storeWinner112132", m1);
                }
                if (Ma === 11313) {
                    localStorage.setItem("storeWinner11313", m1);
                    localStorage.setItem("bronze1", (l1));
                }
                if (Ma === 113132) {
                    localStorage.setItem("storeWinner113132", m1);
                    localStorage.setItem("bronze2", (l1));
                }
                if (Ma === 311132) {
                    localStorage.setItem("storeWinner311132", m1);
                    localStorage.setItem("bronze2", (l1));
                }
                if (Ma === 913) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }
                //

                //14man
                if (Ma === 11114) {
                    localStorage.setItem("storeWinner11114", m1);
                }
                if (Ma === 111142) {
                    localStorage.setItem("storeWinner111142", m1);
                }
                if (Ma === 21114) {
                    localStorage.setItem("storeWinner21114", m1);
                }
                if (Ma === 211142) {
                    localStorage.setItem("storeWinner211142", m1);
                }
                if (Ma === 21214) {
                    localStorage.setItem("storeWinner21214", m1);
                }
                if (Ma === 31114) {
                    localStorage.setItem("storeWinner31114", m1);
                }
                if (Ma === 212142) {
                    localStorage.setItem("storeWinner212142", m1);
                }
                if (Ma === 11214) {
                    localStorage.setItem("storeWinner11214", m1);
                }
                if (Ma === 112142) {
                    localStorage.setItem("storeWinner112142", m1);
                }
                if (Ma === 11314) {
                    localStorage.setItem("storeWinner11314", m1);
                    localStorage.setItem("bronze1", (l1));
                }
                if (Ma === 113142) {
                    localStorage.setItem("storeWinner113142", m1);
                    localStorage.setItem("bronze2", (l1));
                }
                if (Ma === 311142) {
                    localStorage.setItem("storeWinner311142", m1);
                    localStorage.setItem("bronze2", (l1));
                }
                if (Ma === 914) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (l1));
                }
                //
                //


                if (Ma === 112) {
                    localStorage.setItem("storeWinner1.2b", JSON.stringify(m1));
                }
                if (Ma === 212) {
                    localStorage.setItem("storeWinner2.2b", JSON.stringify(m1));
                }

                if (Ma === 312) {
                    localStorage.setItem("storeWinner3.2b", JSON.stringify(m1));
                }
                if (Ma === 412) {
                    localStorage.setItem("storeWinner4.2b", m1);
                }
                if (Ma === 113) {
                    localStorage.setItem("storeWinner1.3b", m1);
                }
                if (Ma === 910) {

                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (lost));
                }
                // 9 MAN BRACKET 
                if (Ma === 1119) {
                    localStorage.setItem("storeWinner1.19b", m1);
                }
                if (Ma === 1129) {
                    localStorage.setItem("storeWinner1.29b", m1);
                }
                if (Ma === 2129) {
                    localStorage.setItem("storeWinner2.29b", m1);
                }
                if (Ma === 1139) {
                    localStorage.setItem("storeWinner1.39b", m1);
                }

                //
                if (Ma === 213) {
                    localStorage.setItem("storeWinner2.3b", JSON.stringify(m1));
                }

                if (Ma === 114) {
                    localStorage.setItem("storeWinner1.4b", JSON.stringify(m1));
                }

                if (Ma === 99) {
                    localStorage.setItem("storeWinnerFinal", (m1));
                    localStorage.setItem("silver", (lost));
                }

            } else {
                var a = document.createElement("a");
                var linkText = document.createTextNode("Continue...");
                a.appendChild(linkText);
                a.title = "Continue...";
                a.href = "bjjbrack.html";
                a.style.fontSize = "20px";
                a.style.color = "white";
                a.style.backgroundColor = "cornFlowerBlue";

                //document.body.appendChild(a);
                counter = getWorkTime() - 1;
                session = getWorkTime();
                break_finished = false;
                timer.innerHTML = convertSeconds(session);
                status.innerHTML = "WORK TIME";
                clearInterval(clock);
            }
        }
    }
}

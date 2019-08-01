function test(page) {
    if (page == 'About') {
        document.getElementById('selfTexting').style.display = "None";
        document.getElementById('aboutPage').style.display = "Block";
        document.getElementById('portfolioPage').style.display = "None";
        document.getElementById('resumePage').style.display = "None";
        document.getElementById('HomeButton').className = "";
        document.getElementById('AboutButton').className = "active";
        document.getElementById('PortfolioButton').className = "";
        document.getElementById('ResumeButton').className = "";
        $('.nameText').text('Name: ');
        $('.ageText').text('Age: ');
        $('.emailText').text('Email: ');
        $('.courseText').text('Course: ');
        $('.educationText').text('Education: ');


        var string = "Seamus Woods";
        var splitstring = string.split('');
        type(splitstring, 0, 'nameText', 100);
        string = "21";
        splitstring = string.split('');
        type(splitstring, 0, 'ageText', 700);
        string = "Sewoods@tcd.ie";
        splitstring = string.split('');
        type(splitstring, 0, 'emailText', 150);
        string = "Computer Science";
        splitstring = string.split('');
        type(splitstring, 0, 'courseText', 150);
        string = "Trinity College Dublin";
        splitstring = string.split('');
        type(splitstring, 0, 'educationText', 160);

    } else if (page == 'Home') {
        document.getElementById('selfTexting').style.display = "flex";
        document.getElementById('aboutPage').style.display = "None";
        document.getElementById('portfolioPage').style.display = "None";
        document.getElementById('resumePage').style.display = "None";
        document.getElementById('HomeButton').className = "active";
        document.getElementById('AboutButton').className = "";
        document.getElementById('PortfolioButton').className = "";
        document.getElementById('ResumeButton').className = "";

    } else if (page == 'Portfolio') {
        document.getElementById('selfTexting').style.display = "None";
        document.getElementById('aboutPage').style.display = "None";
        document.getElementById('portfolioPage').style.display = "Block";
        document.getElementById('resumePage').style.display = "None";
        document.getElementById('HomeButton').className = "";
        document.getElementById('AboutButton').className = "";
        document.getElementById('PortfolioButton').className = "active";
        document.getElementById('ResumeButton').className = "";

    } else if (page == 'Resume') {
        document.getElementById('selfTexting').style.display = "None";
        document.getElementById('aboutPage').style.display = "None";
        document.getElementById('portfolioPage').style.display = "None";
        document.getElementById('resumePage').style.display = "Block";
        document.getElementById('HomeButton').className = "";
        document.getElementById('AboutButton').className = "";
        document.getElementById('PortfolioButton').className = "";
        document.getElementById('ResumeButton').className = "active";

        $('.jsSkill').text('= [ ');
        $('.javaSkill').text('= [ ');
        $('.cSkill').text('= [ ');
        $('.pythonSkill').text('= [ ');
        $('.armSkill').text('= [ ');
        $('.haskellSkill').text('= [ ');
        $('.x86Skill').text('= [ ');
        $('.terminal').text('> ');

        string = "loadResume()";
        splitstring = string.split('');
        type(splitstring, 0, 'terminal', 200, "");

        setTimeout(function () {
            $('.blinking').text('');
            string = ">";
            splitstring = string.split('');
            type(splitstring, 0, 'terminalDone', 200, "");
            string = "|";
            splitstring = string.split('');
            type(splitstring, 0, 'blinking2', 200, "");
        }, 3000);

        setTimeout(function () {

            string = "########################";
            splitstring = string.split('');
            typeSkill(splitstring, 0, 'jsSkill', 160, "________________________________________");

            string = "####################################";
            splitstring = string.split('');
            typeSkill(splitstring, 0, 'javaSkill', 100, "________________________________________");

            string = "################################";
            splitstring = string.split('');
            typeSkill(splitstring, 0, 'cSkill', 150, "________________________________________");

            string = "###############################";
            splitstring = string.split('');
            typeSkill(splitstring, 0, 'pythonSkill', 130, "________________________________________");

            string = "##################################";
            splitstring = string.split('');
            typeSkill(splitstring, 0, 'armSkill', 110, "________________________________________");


            string = "###########################";
            splitstring = string.split('');
            typeSkill(splitstring, 0, 'haskellSkill', 150, "________________________________________");


            string = "#########################";
            splitstring = string.split('');
            typeSkill(splitstring, 0, 'x86Skill', 170, "________________________________________");

        }, 4000);
    }
}


x = 0;

function type(splitstr, index, className, speed) {
    if (index < splitstr.length) {
        $('.' + className + '').append(splitstr[index]);
        index++;
        setTimeout(function () {
            type(splitstr, index, className, speed);
        }, speed);
    } else {

    }
}


function typeSkill(splitstr, index, className, speed, string) {
    var str = String(string);
    string = str.substr(0, index) + '#' + str.substr(index + 1);
    console.log(index);
    console.log(string);
    if (index < splitstr.length) {
        $('.' + className + '').text('= [' + string + ']');
        index++;
        setTimeout(function () {
            typeSkill(splitstr, index, className, speed, string);
        }, speed);
    } else {

    }
}

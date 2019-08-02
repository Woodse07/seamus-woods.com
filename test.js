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

        $('.proxy').text('');
        document.getElementById('proxy').style.display = "Block";
        string = "Proxy in Python";
        splitstring = string.split('');
        type(splitstring, 0, 'proxy', 100);

        $('.driveEncryption').text('');
        document.getElementById('driveEncryption').style.display = "Block";
        string = "Secure Cloud Storage Application";
        splitstring = string.split('');
        type(splitstring, 0, 'driveEncryption', 100);

        $('.githubNetwork').text('');
        document.getElementById('githubNetwork').style.display = "Block";
        string = "Github Degrees of Separation";
        splitstring = string.split('');
        type(splitstring, 0, 'githubNetwork', 100);

        $('.matrixConv').text('');
        document.getElementById('matrixConv').style.display = "Block";
        string = "Matrix Convolution in Arm Assembly (Edge Detection)";
        splitstring = string.split('');
        type(splitstring, 0, 'matrixConv', 100);

        $('.ukland').text('');
        document.getElementById('ukland').style.display = "Block";
        string = "UK Land Registry Project";
        splitstring = string.split('');
        type(splitstring, 0, 'ukland', 100);

    } else if (page == 'Resume') {
        document.getElementById('selfTexting').style.display = "None";
        document.getElementById('aboutPage').style.display = "None";
        document.getElementById('portfolioPage').style.display = "None";
        document.getElementById('resumePage').style.display = "Block";
        document.getElementById('HomeButton').className = "";
        document.getElementById('AboutButton').className = "";
        document.getElementById('PortfolioButton').className = "";
        document.getElementById('ResumeButton').className = "active";

        $('.name').text('Name: ');
        $('.age').text('Age: ');
        $('.location').text('Location: ');
        $('.contact').text('Contact: ');
        $('.level').text('Level: ');
        $('.course').text('Course: ');
        $('.university').text('University: ');
        $('.year').text('Year: ');
        $('.grade').text('Last Years Grade: ');
        $('.startEducation').text('Start Date: ');
        $('.endEducation').text('End Date: ');
        $('.jsSkill').text('');
        $('.javaSkill').text('');
        $('.cSkill').text('');
        $('.pythonSkill').text('');
        $('.armSkill').text('');
        $('.haskellSkill').text('');
        $('.x86Skill').text('');
        $('.company1').text('Company: ');
        $('.company2').text('Company: ');
        $('.position1').text('Position: ');
        $('.position2').text('Position: ');
        $('.startwork1').text('Start Date: ');
        $('.startwork2').text('Start Date: ');
        $('.endwork1').text('End Date: ');
        $('.endwork2').text('End Date: ');
        $('.languageLoading').text('Loading Language Proficiency');
        $('.educationLoading').text('Loading Education');
        $('.generalLoading').text('Loading General Information');
        $('.experienceLoading').text('Loading Experience');

        document.getElementById('generalLoading').style.display = "None";
        document.getElementById('name').style.display = "None";
        document.getElementById('age').style.display = "None";
        document.getElementById('location').style.display = "None";
        document.getElementById('contact').style.display = "None";

        document.getElementById('educationLoading').style.display = "None";
        document.getElementById('level').style.display = "None";
        document.getElementById('course').style.display = "None";
        document.getElementById('university').style.display = "None";
        document.getElementById('year').style.display = "None";
        document.getElementById('grade').style.display = "None";
        document.getElementById('startEducation').style.display = "None";
        document.getElementById('endEducation').style.display = "None";

        document.getElementById('languageLoading').style.display = "None";
        document.getElementById('jsSkill').style.display = "None";
        document.getElementById('javaSkill').style.display = "None";
        document.getElementById('cSkill').style.display = "None";
        document.getElementById('pythonSkill').style.display = "None";
        document.getElementById('armSkill').style.display = "None";
        document.getElementById('haskellSkill').style.display = "None";
        document.getElementById('x86Skill').style.display = "None";

        document.getElementById('experienceLoading').style.display = "None";
        document.getElementById('company1').style.display = "None";
        document.getElementById('company2').style.display = "None";
        document.getElementById('position1').style.display = "None";
        document.getElementById('position2').style.display = "None";
        document.getElementById('startwork1').style.display = "None";
        document.getElementById('startwork2').style.display = "None";
        document.getElementById('endwork1').style.display = "None";
        document.getElementById('endwork2').style.display = "None";


        document.getElementById('cvLink').style.display = "None";
        $('.blinking').text('|');
        $('.blinking2').text('');
        $('.blinking3').text('');
        $('.terminalDoneDone').text('');
        $('.terminalDone').text('');
        $('.terminal').text('> ');


        string = "echo $link_to_my_real_resume";
        splitstring = string.split('');
        type(splitstring, 0, 'terminal', 100, "");
        setTimeout(function () {
            document.getElementById('cvLink').style.display = "Block";
        }, 3500);

        setTimeout(function () {
            $('.blinking').text('');
            string = ">";
            splitstring = string.split('');
            type(splitstring, 0, 'terminalDone', 200, "");
            $('.blinking2').text('|');
            string = " loadResume --please";
            splitstring = string.split('');
            type(splitstring, 0, 'terminalDone', 100, "");
        }, 4000);


        setTimeout(function () {

                $('.blinking2').text('');
                string = ".....";
                splitstring = string.split('');
                document.getElementById('generalLoading').style.display = "Block";
                type(splitstring, 0, 'generalLoading', 600);
                setTimeout(function () {
                    string = "Seamus Woods";
                    splitstring = string.split('');
                    document.getElementById('name').style.display = "Block";
                    type(splitstring, 0, 'name', 20);
                    setTimeout(function () {
                        string = "21";
                        splitstring = string.split('');
                        document.getElementById('age').style.display = "Block";
                        type(splitstring, 0, 'age', 20);
                        setTimeout(function () {
                            string = "Ireland";
                            splitstring = string.split('');
                            document.getElementById('location').style.display = "Block";
                            type(splitstring, 0, 'location', 20);
                            setTimeout(function () {
                                string = "sewoods@tcd.ie";
                                splitstring = string.split('');
                                document.getElementById('contact').style.display = "Block";
                                type(splitstring, 0, 'contact', 20);


                                setTimeout(function () {
                                    string = ".....";
                                    splitstring = string.split('');
                                    document.getElementById('educationLoading').style.display = "Block";
                                    type(splitstring, 0, 'educationLoading', 600);
                                    setTimeout(function () {
                                        string = "Masters";
                                        splitstring = string.split('');
                                        document.getElementById('level').style.display = "Block";
                                        type(splitstring, 0, 'level', 20);
                                        setTimeout(function () {
                                            string = "Integrated Computer Science";
                                            splitstring = string.split('');
                                            document.getElementById('course').style.display = "Block";
                                            type(splitstring, 0, 'course', 20);
                                            setTimeout(function () {
                                                string = "Trinity College Dublin";
                                                splitstring = string.split('');
                                                document.getElementById('university').style.display = "Block";
                                                type(splitstring, 0, 'university', 20);
                                                setTimeout(function () {
                                                    string = "4th";
                                                    splitstring = string.split('');
                                                    document.getElementById('year').style.display = "Block";
                                                    type(splitstring, 0, 'year', 20);
                                                    setTimeout(function () {
                                                        string = "First (I)";
                                                        splitstring = string.split('');
                                                        document.getElementById('grade').style.display = "Block";
                                                        type(splitstring, 0, 'grade', 20);
                                                        setTimeout(function () {
                                                            string = "September 2016";
                                                            splitstring = string.split('');
                                                            document.getElementById('startEducation').style.display = "Block";
                                                            type(splitstring, 0, 'startEducation', 20);
                                                            setTimeout(function () {
                                                                string = "May 2021";
                                                                splitstring = string.split('');
                                                                document.getElementById('endEducation').style.display = "Block";
                                                                type(splitstring, 0, 'endEducation', 20);


                                                                setTimeout(function () {
                                                                    string = ".....";
                                                                    splitstring = string.split('');
                                                                    document.getElementById('languageLoading').style.display = "Block";
                                                                    type(splitstring, 0, 'languageLoading', 600);
                                                                    setTimeout(function () {
                                                                        string = "#################";
                                                                        splitstring = string.split('');
                                                                        document.getElementById('jsSkill').style.display = "Block";
                                                                        typeSkill(splitstring, 0, 'jsSkill', 20, "______________________________");
                                                                        setTimeout(function () {
                                                                            string = "#############################";
                                                                            splitstring = string.split('');
                                                                            document.getElementById('javaSkill').style.display = "Block";
                                                                            typeSkill(splitstring, 0, 'javaSkill', 20, "______________________________");
                                                                            setTimeout(function () {
                                                                                string = "##########################";
                                                                                splitstring = string.split('');
                                                                                document.getElementById('cSkill').style.display = "Block";
                                                                                typeSkill(splitstring, 0, 'cSkill', 20, "______________________________");
                                                                                setTimeout(function () {
                                                                                    string = "#########################";
                                                                                    splitstring = string.split('');
                                                                                    document.getElementById('pythonSkill').style.display = "Block";
                                                                                    typeSkill(splitstring, 0, 'pythonSkill', 20, "______________________________");
                                                                                    setTimeout(function () {
                                                                                        string = "###########################";
                                                                                        splitstring = string.split('');
                                                                                        document.getElementById('armSkill').style.display = "Block";
                                                                                        typeSkill(splitstring, 0, 'armSkill', 20, "______________________________");
                                                                                        setTimeout(function () {
                                                                                            string = "#####################";
                                                                                            splitstring = string.split('');
                                                                                            document.getElementById('haskellSkill').style.display = "Block";
                                                                                            typeSkill(splitstring, 0, 'haskellSkill', 20, "______________________________");
                                                                                            setTimeout(function () {
                                                                                                string = "####################";
                                                                                                splitstring = string.split('');
                                                                                                document.getElementById('x86Skill').style.display = "Block";
                                                                                                typeSkill(splitstring, 0, 'x86Skill', 20, "______________________________");


                                                                                                setTimeout(function () {
                                                                                                    string = ".....";
                                                                                                    splitstring = string.split('');
                                                                                                    document.getElementById('experienceLoading').style.display = "Block";
                                                                                                    type(splitstring, 0, 'experienceLoading', 600);
                                                                                                    setTimeout(function () {
                                                                                                        string = "UnitedHealth Group - Optum";
                                                                                                        splitstring = string.split('');
                                                                                                        document.getElementById('company1').style.display = "Block";
                                                                                                        type(splitstring, 0, 'company1', 20);
                                                                                                        setTimeout(function () {
                                                                                                            string = "TDP Intern (Software Engineer)";
                                                                                                            splitstring = string.split('');
                                                                                                            document.getElementById('position1').style.display = "Block";
                                                                                                            type(splitstring, 0, 'position1', 20);
                                                                                                            setTimeout(function () {
                                                                                                                string = "June 2018";
                                                                                                                splitstring = string.split('');
                                                                                                                document.getElementById('startwork1').style.display = "Block";
                                                                                                                type(splitstring, 0, 'startwork1', 20);
                                                                                                                setTimeout(function () {
                                                                                                                    string = "August 2018";
                                                                                                                    splitstring = string.split('');
                                                                                                                    document.getElementById('endwork1').style.display = "Block";
                                                                                                                    type(splitstring, 0, 'endwork1', 20);
                                                                                                                    setTimeout(function () {

                                                                                                                        string = "Hewlett Packard Enterprise (HPE)";
                                                                                                                        splitstring = string.split('');
                                                                                                                        document.getElementById('company2').style.display = "Block";
                                                                                                                        type(splitstring, 0, 'company2', 20);
                                                                                                                        setTimeout(function () {
                                                                                                                            string = "Cyber Security Intern";
                                                                                                                            splitstring = string.split('');
                                                                                                                            document.getElementById('position2').style.display = "Block";
                                                                                                                            type(splitstring, 0, 'position2', 20);
                                                                                                                            setTimeout(function () {
                                                                                                                                string = "June 2019";
                                                                                                                                splitstring = string.split('');
                                                                                                                                document.getElementById('startwork2').style.display = "Block";
                                                                                                                                type(splitstring, 0, 'startwork2', 20);
                                                                                                                                setTimeout(function () {
                                                                                                                                    string = "August 2019";
                                                                                                                                    splitstring = string.split('');
                                                                                                                                    document.getElementById('endwork2').style.display = "Block";
                                                                                                                                    type(splitstring, 0, 'endwork2', 20);

                                                                                                                                    setTimeout(function () {
                                                                                                                                        string = ">";
                                                                                                                                        splitstring = string.split('');
                                                                                                                                        type(splitstring, 0, 'terminalDoneDone', 200, "");
                                                                                                                                        string = "|";
                                                                                                                                        splitstring = string.split('');
                                                                                                                                        type(splitstring, 0, 'blinking3', 200, "");
                                                                                                                                    }, 500);

                                                                                                                                }, 500);
                                                                                                                            }, 500);
                                                                                                                        }, 500);
                                                                                                                    }, 500);
                                                                                                                }, 500);
                                                                                                            }, 500);
                                                                                                        }, 500);
                                                                                                    }, 3000);
                                                                                                }, 500);
                                                                                            }, 500);
                                                                                        }, 500);
                                                                                    }, 500);
                                                                                }, 500);
                                                                            }, 500);
                                                                        }, 500);
                                                                    }, 3000);
                                                                }, 500);
                                                            }, 500);
                                                        }, 500);
                                                    }, 500);
                                                }, 500);
                                            }, 500);
                                        }, 500);
                                    }, 3000);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 3000);
            }
            ,
            6500
        );
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
    if (index < splitstr.length) {
        $('.' + className + '').text('[' + string + ']' + " " + Math.floor((index / 30) * 100) + "% Skill");
        index++;
        setTimeout(function () {
            typeSkill(splitstr, index, className, speed, string);
        }, speed);
    } else {

    }
}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="../images/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../images/favicons/favicon-16x16.png">
    <link rel="manifest" href="../images/favicons/site.webmanifest">
    <script src="https://kit.fontawesome.com/9e43b5fe15.js" crossorigin="anonymous"></script>
    <title>MyLostFind.Com | Reunite with What's Lost, Embrace What's Found</title>
    <link rel="stylesheet" href="./all.css">
    <link rel="stylesheet" href="./manage.css">
</head>

<body>
    <header>
        <div class="mainlogo">
            <a href="../index.html">MyLostFind.Com|<span>Admin</span></a>
        </div>
        <div class="mobile-menu">
            <ul class="menu-items">
                <li><a href="../index.html">Home</a></li>
                <li><a href="../pages/recover.html">Recover Lost Items</a></li>
                <li><a href="../pages/submit.html">Submit Found Items</a></li>
                <li><a href="../pages/howto.html">Guide</a></li>
                <div class="account">
                    <!-- <img src="../images/user.png" alt=""> -->
                    <span><a href="../pages/account.html">Admin Derrick</a></span>
                </div>
            </ul>
        </div>
        <a href=""></a><a href="#"><i class="fa-solid fa-bars" id="toggleButton"></i></a>
    </header>

    <main>
        <div class="menupen" id="openmenu" onclick="menuOpen()">
            <b>☰</b>
        </div>
        <div class="sidebar" id="sidesection">
            <div class="flextop">
                <div class="sidelogo">
                    <a href="../index.html">MyLostFind.Com</a>
                </div>
                <div id="close" onclick="menuClose()"><b>X</b></div>
            </div>
            <a href="./admin.html" class="sidecontent activeside"><span>➤</span> Home</a>
            <a href="./lostsubmissions.html" class="sidecontent">Submitted Lost Items</a>
            <a href="./foundsubmissions.html" class="sidecontent">Submitted Found Items</a>
            <a href="./contactedpeople.html" class="sidecontent">Contacted People</a>
            <a href="./accountmanagement.html" class="sidecontent">Accounts &amp; Users</a>
            <a href="./systemstatus.html" class="sidecontent">System Status</a>
            <a href="../index.html" class="sidecontent">Logout</a>
        </div>
        <h1 class="salutation"><span id="greeting">Hello</span> Admin Derrick</h1>

        <div class="notifications">
            <h2 class="notitle">Quick Notifications</h2>
            <ol class="notitems">
                <li>5 new document Matches <a href="">Review Them Now</a></li>
                <li>12 New Lost Documents Declared <a href="">Check them</a></li>
                <li>3 New found items <a href="">check them</a></li>
                <li>12 contact messages <a href="">check messages</a></li>
                <li>5 pages are slow <a href="">fix them</a></li>
            </ol>
        </div>

        <h2 class="notitle">Sytem Actions Summary</h2>

        <div class="container-not">
            <div class="notBox notBox-1">
                <img src="../images/favicons/android-chrome-192x192.png" alt="">
                <div class="notBox-title">New Matches</div>
                <div class="realcontent">20 New Matches</div>
                <div class="center"><a href=""><button>More-Details</button></a></div>
            </div>
            <div class="notBox notBox-2">
                <img src="../images/favicons/android-chrome-192x192.png" alt="">
                <div class="notBox-title">Contacted Users</div>
                <div class="realcontent">2 Contacted Users</div>
                <div class="center"><a href="./contactedpeople.html"><button>More-Details</button></a></div>
            </div>
            <div class="notBox notBox-3">
                <img src="../images/favicons/android-chrome-192x192.png" alt="">
                <div class="notBox-title">Submitted Found Items</div>
                <div class="realcontent">20 Items</div>
                <div class="center"><a href="./foundsubmissions.html"><button>More-Details</button></a></div>
            </div>
            <div class="notBox notBox-4">
                <img src="../images/favicons/android-chrome-192x192.png" alt="">
                <div class="notBox-title">Declared Lost Items</div>
                <div class="realcontent">7 Items</div>
                <div class="center"><a href="./lostsubmissions.html"><button>More-Details</button></a></div>
            </div>
            <div class="notBox notBox-5">
                <img src="../images/favicons/android-chrome-192x192.png" alt="">
                <div class="notBox-title">Accounts</div>
                <div class="realcontent">5 new accounts</div>
                <div class="center"><a href="./accountmanagement.html"><button>More-Details</button></a></div>
            </div>
            <div class="notBox notBox-6">
                <img src="../images/favicons/android-chrome-192x192.png" alt="">
                <div class="notBox-title">Sytem Status</div>
                <div class="realcontent">Sytem ok</div>
                <div class="center"><a href="./systemstatus.html"><button>More-Details</button></a></div>
            </div>
        </div>

        <div class="discalimer">
            <p>*This is the admin section; if you are not an admin please <a href="../index.html">Log out immediately</a></p>
        </div>
    </main>

    <footer>
        <div class="ftdes">
            <div class="mainlogo">
                <a href="../index.html">MyLostFind.Com</a>
            </div>
            <p> <span><a href="../index.html">MyLostFind</a></span> is your trusted partner in reuniting you with your
                valuable
                belongings. We have started a movement of
                community-driven support, helping individuals recover what matters most. With dedication and innovation,
                we
                have
                successfully facilitated the retrieval of over a million lost documents and items. Work with us to
                submit
                found items, and be a hero in someone's journey to recover their cherished possessions. Together, let's
                make
                a difference. Together, let's bring smiles back by reuniting people with their lost treasures.</p>
        </div>

        <div class="usefulinks">
            <div class="ftitle">Useful Links</div>
            <ul>
                <li> <a href="../index.html">Home</a> </li>
                <li> <a href="../pages/recover.html">Recover Lost Documents</a> </li>
                <li> <a href="../pages/submit.html">Submit Found Documents</a> </li>
                <li> <a href="../pages/howto.html">Guide On How To Use</a> </li>
                <li> <a href="../pages/contact.html">Contact Us</a> </li>
                <li> <a href="../pages/helpcenter.html">Help Center</a> </li>
                <li> <a href="../pages/account.html">Manage Your Account</a> </li>
            </ul>
        </div>

        <div class="submit-connect">
            <div class="ftitle">Useful Buttons</div>
            <div class="fbuttons">
                <button class="cta"><a href="../pages/recover.html">Recover Lost Items</a></button>
                <button class="cta"><a href="../pages/submit.html">Submit Found Items</a></button>
            </div>
            <div class="ftitle">Connect With Us</div>
            <div class="socials">
                <a href="https://facebook.com/"><i class="fa-brands fa-facebook" style="color: #ffffff;"></i></a>
                <a href=""><i class="fa-brands fa-square-x-twitter" style="color: #ffffff;"></i></a>
                <a href=""><i class="fa-brands fa-square-instagram" style="color: #ffffff;"></i></a>
                <a href=""><i class="fa-brands fa-youtube" style="color: #ffffff;"></i></a>
                <a href=""><i class="fa-solid fa-envelope" style="color: #ffffff;"></i></a>
            </div>
        </div>
    </footer>
    <div class="copy">© 2023 MyLostFind.Com. All rights reserved.</div>
</body>
<script src="../app.js"></script>
<script src="./manage.js"></script>


</html>
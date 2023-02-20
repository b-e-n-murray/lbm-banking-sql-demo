# SQL Injection Attack Demo Website

<hr />
<p>This is the front-end repository for a full-stack application I built to demonstrate how SQL Injection attacks can be performed. The concept of this app is a fake banking website that deliberately lacks proper authentication and includes sql vulnerabilities on the backend. I also delivered a presentation on this project, the slides for which can be found in the link below:</p>
<a href="https://docs.google.com/presentation/d/1rBeQOZD_h6bLDL3jVN5v8S1303IfNL869tVSoXrRygU/edit?usp=sharing">Presentation Slides</a>
<h3>How to use</h3>
<p>Follow the link below (you may need to wait momentarily as the server wakes up)</p>
<a href="https://lbm-banking.netlify.app/">LBM Banking</a>
<hr />
<h3>SQL Injection 1:</h3>
<p>Try to login without a password. Type 'Username' into the username field (this is a verified username in the database). In the same field, without any spaces, append an inverted comma and two hyphens. Your username field should look look like this: Username'-- </p>
<p>Next, fill the password field with any input you want. If you have filled the username field correctly, the database will be queried without a password. See my presentation slides for visualisation on how this works</p>
<p>Before you click 'Login', open the browser's console (right click -> 'Inspect' -> 'Console'). Now click 'Login' and watch what happens. </p>
<p>Because the authentication only requires some form of user data to be returned, you will be verified for entry, and should see the user data for the 'Username' user. Further logins could now be done with their actual password!</p>
<hr />
<h3>SQL Injection 2:</h3>
<p>You can also break into website with absolutely zero knowledge of any user data to begin with. This time, by manipulating the conditions of the SQL query from the login page, we can retrieve all user data AND enter the website. Use the following entry for the username field to execute this: 'OR 1=1 -- </p>
<p>Once again, the password field requires an input, but this can be anything you want.</p>
<p>And voila! If you check your console, you should see the data for all the users! And if you were really sneaky, you might even now login with the admin account to see if there are any extra privileges...</p>


<p>**DISCLAIMER: All data used in this project is completely fake and was only created for the purposes of this demonstrative application. No real user data/money is at risk in the use of this app.</p>


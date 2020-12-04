# Intro
Have no idea why, but Cabify's Tableau doesn't save the session for more than 24h. This means that every morning when you open your first dashboard it asks you to enter your @cabify email.

> Every frikin' morning

## What does this extension do

After you install the extension and enter your email every time you navigate to `tableau.cabify.com` if will check if you got redirected to a `signin` page where you're asked to enter your credentials. Well, this extension will fill them for you and automatically log you in. Every time ;)


# Installation & Usage

Chrome store doesn't allow distributing private extensions and this one is really not for public eyes :-) so the installation process is as follows

1. Download this code as a .zip file
![Download extension](./github-assets/download-extension.gif)

2. Unzip it into any folder you like

3. In Chrome enter this URL `chrome://extensions`

4. Set the browser into _Developer mode_ (right top corner)

5. Click on the `Load Unpacked` button and navigate to the foder where you unzipped the extension.

6. You should see a new extension icon in your browser 


Now, click on that icon, enter your @cabify email and save it.

If you're logged out of Tableau and try to navigate toany Tableau dashboard you should see the magic happening

![Autofill](./github-assets/autofill.gif)

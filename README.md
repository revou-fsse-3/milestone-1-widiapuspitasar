![Header](readme-images/image.png)


<h1 align="left">Welcome to our Web Courses! <img src="https://raw.githubusercontent.com/muhammad-avicena/profile/master/wave.gif" width="30px" height="30px" /> </h1>

Hello, I'm Widia! Welcome to my web project focusing on class web and design. This website offers informative and beginner-friendly classes to help you learn new skills. Explore the diverse range of classes available to enhance your knowledge and expertise. Whether you're a novice or looking to expand your skills, we've got something for everyone. Happy learning!

Stay connected with me on social media for a wealth of knowledge! Join our community and unlock a treasure trove of informative classes. Be the first to discover and enroll in our latest offerings. Follow me now and embark on a learning adventure that will transform your skills and knowledge. Together, let's explore the world of education and empowerment!
Find me on:

[![Linkedin Badge](https://img.shields.io/badge/-Widia_Puspitasari-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/widiapuspitasari/)
[![Youtube Badge](https://img.shields.io/badge/-Widia_Puspitasari-darkred?style=flat-square&logo=youtube&logoColor=white)](https://www.youtube.com/)
[![Instagram Badge](https://img.shields.io/badge/-Widia_Puspitasari-purple?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/widiapuspitasar/)
[![Gmail Badge](https://img.shields.io/badge/-widpuspitasari@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:widpuspitasari@gmail.com)

## STRUCTURE 📰

- Header
  - Announcement
  - Navbar
- Main
  - Home section
  - Courses section
  - FAQ section
  - Testimonial section
- Footer

## Tools I USE 📜
- HTML
- CSS
- JavaScript
- External/Internal Source
  - Icon (Using awesome fonts)
  - Image (Search from unsplas.com and Google.com)


## HOW TO SET UP 📰
You will need a github account to clone this repository, make sure you're connected to github.

1. Clone this repository
```
git clone https://github.com/revou-fsse-3/milestone-1-widiapuspitasar.git
```
2. Navigate to the project directory: 
```
cd milestone-1-widiapuspitasar
```
3. Develop & modify the website with your personal information, once it's done you will need to push it.
```
git add .
git commit -m "push1" // make sure to give details commit message to get better logs
git push origin develop 
```
5. Once you're done, you can merge into main/master branch for production build.
```
git checkout main
git pull origin main // pull the latest version before commit merge
git merge develop // if there are any conflicts, you should resolve them manually
git commit -m "Merge develop into main"
git push origin main
```

## Progress of building this web 
The following is the initial appearance of creating a website before adding CSS
![First Page](/aseets/README/1.jpeg)


## DEPLOYMENT  ⚙️

The project has been successfully deployed using Netlify. You can access the production version of the website by following this link: [https://luxury-shop.avicena.dev](https://luxury-shop.avicena.dev) or [this link](https://www.luxury-shop.avicena.dev).
### Deployment status : 
[![Netlify Status](https://api.netlify.com/api/v1/badges/fd84e054-64dc-46b4-967d-198778bd6c8a/deploy-status)](https://app.netlify.com/sites/avicena-week5/deploys)

1. Connect your account to Netlify !

The first step to deploy in Netlify is creating a new account or use existing account. As a beginner progammer, I would prefer using GitHub account instead.

After you successfully login, you will be redirected to dashboard of Netlify app. In this scenario, you will need to import your existing project from github to netlify. Add new site -> Import existing project -> Connect via GitHub 

![Alt text](readme-images/2.png)

2. Auto Deploy with Netlify !

One of the benefit using your GitHub account connected to Netlify is that you don't have to worry about re-deploying your project manually, once there are changes that have been pushed in your repository, it will automatically re-deployed by Netlify within second.

![Alt text](readme-images/3.png)

3. Domain Registrar with NiagaHoster & Cloudfire !

Go to [https://niagahoster.co.id](https://niagahoster.co.id) and log in or create a new account. Check available domain that you wanted and make it yours.

After that, go to [https://dash.cloudflare.com/](https://dash.cloudflare.com/) and log in or create a new account. You will be redirected to dashboard, add the domain that you have bought previously.

![Alt text](readme-images/4.png)

4. Modify your project with favorite customize domain !

You're on the final step to bringing live your project with custom domain. Go to dashboard Cloudfire -> DNS Records -> CloudFire NameServer. You will see the information of Nameserver that is given to you.

```
Type  Value
NS    andronicus.ns.cloudflare.com
NS    paislee.ns.cloudflare.com
```
Copy these nameserver and jump into dashboard overview of NiagaHoster. You should replace it with NameServer of CloudFire.

After that, go to Netlify Dashboard -> open your project -> Custom domain -> Add domain that you have set previously. In thise case, you will see they're awaiting for external DNS. You will get some information such as IPv4 and domain name that you should input it to CloudFire.

Use subdomain :
```
Type  Value           Content Name
CNAME luxury-shop     avicena-week5.netlify.com
```

Final step, go to Dashboard Cloudfire -> DNS Records -> Add record domain -> set them accordingly.

![Alt text](readme-images/5.png)

5. Congratulations, You're done !

You should wait within 1x24 hours to let the NiagaHoster and Cloudfire setting up the DNS, it could be faster or slower depending on the provider internet that you're using.

Feel free to explore the website and try out the different features. I appreciate any feedback and suggestions to further improve the user experience.

Happy browsing!

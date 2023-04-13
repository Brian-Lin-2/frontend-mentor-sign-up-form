# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

Designed a basic form with that includes a first name, last name, email, and password.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

Desktop Design
</br><img width="500" alt="image" src="https://user-images.githubusercontent.com/19761406/231762532-81196325-a811-4cfa-bce3-034be0c20d1e.png">

Desktop Active State
</br><img width="500" alt="image" src="https://user-images.githubusercontent.com/19761406/231762606-5c5f0e2b-4f48-4274-9658-7ac2b4bed282.png">

Desktop Error State
</br><img width="500" alt="image" src="https://user-images.githubusercontent.com/19761406/231762725-629d85d7-08a5-451c-8565-c968edaaffcc.png">

Mobile Design
</br><img width="188" alt="image" src="https://user-images.githubusercontent.com/19761406/231762979-82dc78fa-9876-4e42-a663-82c77ba20800.png">

Mobile Error State
</br><img width="185" alt="image" src="https://user-images.githubusercontent.com/19761406/231763067-7db4a029-1528-44d2-8ba7-33b1e94a2844.png">



### Links

- Solution URL: https://github.com/Brian-Lin-2/frontend-mentor-sign-up-form
- Live Site URL: https://frontend-mentor-sign-up-form-ivgg14n3q-brian-lin-2.vercel.app

## My process

### Built with

- HTML5
- CSS
- JavaScript
- Flexbox
- Mobile-first workflow

### What I learned

I learned how <button> and <input> worked in relation to forms.
```html
<form class="signUp">
  <div class="signUp__firstName">
    <input class="input firstName" type="text" placeholder="First Name">
    <img class="signUp__error firstName__iconError hide" src="images/icon-error.svg" alt="">
  </div>
</form>
```

I learned how the event listener 'submit' worked.
```JavaScript
form.addEventListener('submit', (e) => {});
```

### Continued development

Moving forward, I would like more practice with forms and JavaScript functions.


## Author

- Frontend Mentor - [Brian-Lin-2](https://www.frontendmentor.io/profile/Brian-Lin-2)

# Document Management

A simple document management application, with a login page and simulated backend.

### Below is the complete list of features. The ones marked as 'MVP' are the one's that are essential - 

1. Screens:
  1. Login **- MVP**
  2. Landing **- MVP**
  3. Admin specific
  4. Priviledged user

2. User Restrictions - 
  1. 3 different kinds of users - Admin, Editor and Guest
  2. Only admin type users will be able to access the 'Admin' screen
  3. Admin and Editor type users will be able to access the 'Priviledged' screen
  4. All users can access 'Landing' screen **- MVP**

3. Authentication and Sessions - 
  1. An authenticated or unauthorized user should not be able to access secure pages **- MVP**
  2. Session based authentication
  3. Session timeouts

4. Landing screen details - 
  1. A table with a list of documents (PDF), and related information **- MVP**
  2. Clicking any document must open it in a modal dialog for viewing **- MVP**
  3. The table must have the bells and whistles like pagination **- MVP**
  4. Responsive design to cater to different devices
  5. Handling mobile devices is a plus

5. Browser Compatibility - 
  1. Chrome 50+
  2. Firefox 45+
  3. Safari 9+
  4. IE 10+
  5. Microsoft Edge

### TO-DO's 

1. Design screens -
  - [x] ~~Login **- MVP**~~
  - [x] ~~Landing **- MVP**~~
  - [ ] Admin specific
  - [ ] Priviledged

2. POC's - 
  - [x] ~~PDF in modal window **- MVP**~~
  - [x] ~~Client side authentication **- MVP**~~

3. Coding - 
  - [x] ~~Basic folder structure~~
  - [x] ~~Login screen~~
  - [x] ~~Handle authorized and unauthorized routing~~
  - [x] ~~Landing screen~~
  - [x] ~~Table view~~
  - [x] ~~Create mock services~~
  - [x] ~~Integrate mock services~~
  - [x] ~~PDF POC integration~~
  - [x] ~~Responsive layout~~

4. Testing - 
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] IE
  - [ ] Microsoft Edge

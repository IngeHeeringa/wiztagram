# Wiztagram

Wiztagram is a single page application built with React and the Redux pattern that fetches images from the Unsplash API based on predefined filter queries. The app allows you to browse through a gallery of magical images related to different filter categories.

<img src="images/wiztagram-desktop.png" alt="Screenshot of the homepage" width="value" width="400">

[Click here to see the live demo](https://wiztagram.vercel.app/)

![Vercel](https://vercelbadge.vercel.app/api/ingeheeringa/wiztagram)

#### SonarCloud Metrics

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=IngeHeeringa_wiztagram&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=IngeHeeringa_wiztagram)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=IngeHeeringa_wiztagram&metric=coverage)](https://sonarcloud.io/summary/new_code?id=IngeHeeringa_wiztagram)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=IngeHeeringa_wiztagram&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=IngeHeeringa_wiztagram)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=IngeHeeringa_wiztagram&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=IngeHeeringa_wiztagram)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

## Features

### Filter by category

Wiztagram allows users to filter through different categories of magical images such as dragons, castles, and spells. Simply click on the corresponding button on the home page to browse through the gallery of images for each category. This feature makes it easy for users to find the specific types of magical images they are looking for.

<p align="middle">
<img src="images/filter-castles.png" alt="Screenshot with active castles filter" width="value" height="400"> <img src="images/filter-dragons.png" alt="Screenshot with active dragons filter" width="value" height="400"><img src="images/filter-spells.png" alt="Screenshot with active spells filter" width="value" height="400">
</p>

### Responsive design

Wiztagram is designed to be fully responsive, ensuring that the application is accessible and easy to use on any device. One key aspect of this responsive design is the focus on image visibility. The app adjusts the size and layout of the images based on the device screen size, ensuring that the images are always visible and clear regardless of the device used. This ensures that users can browse through the gallery of magical images on their mobile devices, tablets, or desktops with ease, without having to zoom in or scroll horizontally to view the images.

<p align="middle">
<img src="images/detail-desktop.png" alt="Screenshot of detail page with desktop view" width="value" width="400"> <img src="images/detail.png" alt="Screenshot of details page with mobile view" width="value" height="400">
</p>

## Future implementations

- User authentication with JWT
- Save your favorite photos in a personal list
- Customizable themes
- Additional filters
- Link to the Unsplash detail page of each photo
- Download photos directly from the app

## Getting started

To use Wiztagram, follow these steps:

- Clone the repository to your local machine.
- Install the dependencies by running npm install in your terminal.
- Obtain an access key from the Unsplash API and replace the ACCESS_KEY constant in src/api/unsplash.js with your own access key.

### Running the application

To run the application, use the following command:

<code>npm start</code>

Open your browser and navigate to http://localhost:3000/.

### Testing

To run the tests, use the following command:

<code>npm run test</code>

import React from 'react'


const Home = () => {
  return (
    <div>
        <head>
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
</head>
<nav class="fixed mb-5 flex w-full justify-between bg-blue-800 px-5 py-5 text-white">
  <h1 class="font-burtons text-xl font-thin">Ayush</h1>
  <ul class="flex items-center">
    <li>
      <i class="bx bxs-moon bg"></i>
    </li>
    <li>
      <a class="ml-8 rounded-md border-none bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-white" href="#"> Resume </a>
    </li>
  </ul>
</nav>
<section class="min-h-screen bg-blue-500 pt-28">
  <div class="p-10 py-12 text-center ">
    <h2 class="py-2 text-5xl font-bold text-black md:text-6xl">Ayush Shrestha</h2>
    <h3 class="py-2 text-xl dark:text-white md:text-3xl">Front-end developer</h3>
    <p class="text-md mx-auto max-w-xl py-5 leading-5 text-gray-800 dark:text-gray-200 md:text-xl">I'm a dedicated front-end developer fueled by the excitement of crafting user-friendly and visually captivating web experiences</p>
    <div class="flex justify-center gap-5 py-3 text-4xl">
      <a href='' class="bx bxl-facebook-circle"></a>
      <a href='https://github.com/ayushstha123' class="bx bxl-github"></a>
      <a href='https://www.linkedin.com/in/ayush-shrestha-480a65194/' class="bx bxl-linkedin-square"></a>
    </div>
  </div>
  <div>
  <model-viewer src="./shiba.glb" camera-controls disable-pan shadow-intensity="1"  auto-rotate disable-tap  disable-zoom></model-viewer>
  </div>
</section>
<section class="bg-blue-300">

  <div class="px-10 py-10 text-center">
    <h3 class="py-4 text-3xl font-bold">Skills</h3>
    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">I offer from a wide range of services, including brand design, programming and teaching.</p>
    <div class="gap-10 lg:flex justify-center">
      
      <div class="my-8 max-w-xs flex-auto rounded-2xl p-6 text-center shadow-2xl dark:bg-white">
        <img class="mx-auto w-1/2 object-contain md:object-scale-down" src="https://img.freepik.com/premium-photo/windows-programming-code-3d-icon_307432-38.jpg?w=2000" width="50" height="50" alt="" />
        <h3 class="pb-2 pt-8 text-lg font-medium">Front End Development</h3>
        <p>Creating various interactive and responsive application with the help of front end programming language.</p>
        <div class="font-mono text-sm">
          <h4 class="py-2 pt-8 text-blue-800">Programming Languages I Use :</h4>
          <p class="py-1 text-gray-800">Html css javascript</p>
          <p class="py-1 text-gray-800">tailwind scsss react js</p>

        </div>
      </div>

      <div class="my-8 max-w-xs flex-auto rounded-2xl p-6 text-center shadow-2xl dark:bg-white">
        <img class="mx-auto mt-10 w-1/2 object-contain md:object-scale-down" src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" width="50" height="50" alt="" />
        <h3 class="pb-2 pt-8 text-lg font-medium">MERN STACK</h3>
        <p>Creating beautiful fully working website with mern stack.</p>
        <div class="font-mono text-sm">
          <h4 class="py-2 pt-8 text-blue-800">Design Tools I Use</h4>
          <p class="py-1 text-gray-800">MongoDB Express Reactjs Nodejs</p>
        </div>
      </div>

      <div class="my-8 max-w-xs flex-auto rounded-2xl p-6 text-center shadow-2xl dark:bg-white">
        <img class="mx-auto w-1/2 object-contain md:object-scale-down" src="https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5402863-4521476.png?f=webp" width="50" height="50" alt="" />
        <h3 class="pb-2 pt-8 text-lg font-medium">Back-end Development</h3>
        <p>Creating elegant designs suited for your needs following core design theory.</p>
        <div class="font-mono text-sm">
          <h4 class="py-2 pt-8 text-blue-800">Languages I Use</h4>
          <p class="py-1 text-gray-800">SQL</p>
          <p class="py-1 text-gray-800">Java</p>
          <p class="py-1 text-gray-800">PHP</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Home
<template>
    <div class="cover-image">
        <div class="cover">
            <div class="container mx-2 sm:mx-auto flex flex-col gap-8 translate-y-56 text-white font-semibold">
                <h1 class="text-6xl"><span class="text-color">Shape</span> Yourself</h1>
                <span class="sm:text-2xl lg:w-[50rem]">Welcome to Calisthenics Core, where strength, flexibility, and determination converge.
                     Discover the transformative power of this art form as we push boundaries, defy limitations, and unlock our full potential together.
                      Let's embark on this incredible journey of self-improvement and achievement.
                </span>
                <a href="#main-Explore"><button class="w-48 py-3 text-center text-lg rounded-sm bg-red-600 hover:bg-red-800 shadow-xl">Explore</button></a>
            </div>
        </div>
    </div>
    <div class="section2 bg-gradient-to-b from-purple-500 to-violet-800 pb-8">
        <div class="cover-bottom-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
        <div class="flex flex-wrap justify-evenly items-center gap-8 my-8" id="main-Explore">

            <section class="group card h-96 w-96 [perspective:1000px] my-4">
                <div class="relative h-full w-full rounded-xl shadow-purple-300 shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:shadow-none">
                    <div class="absolute inset-0">
                        <img class="w-full h-full rounded-xl object-cover shadow-xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Purple_website.svg/1200px-Purple_website.svg.png" alt="Introduction">
                    </div>
                    <div class="flex flex-col items-center gap-4 p-4 absolute insert-0 h-full w-full-rounded-xl text-center bg-zinc-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h1 class="text-2xl font-semibold text-violet-500">What is Calisthenics</h1>
                        <span class="text-lg text-white overflow-y-auto">
                            Calisthenics is a dynamic form of exercise that uses bodyweight movements to build strength,
                            flexibility, and endurance.
                            It focuses on functional movements and requires no equipment,
                            making it accessible to anyone looking to improve their fitness level and overall health.
                        </span>
                        <NuxtLink to="blog"><button class="bg-purple-500 hover:bg-purple-700 hover:shadow-violet-700 shadow-lg rounded-md w-32 py-2 text-xl text-white font-bold">Check out</button></NuxtLink>
                    </div>
                </div>
            </section>

            <section class="group card h-96 w-96 [perspective:1000px] my-4">
                <div class="relative h-full w-full rounded-xl shadow-violet-300 shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:shadow-none">
                    <div class="absolute inset-0">
                        <img class="w-full h-full rounded-xl object-cover shadow-xl" src="https://htmlcolorcodes.com/assets/images/colors/light-violet-color-solid-background-1920x1080.png" alt="Tips&Meals">
                    </div>
                    <div class="flex flex-col items-center gap-4 p-4 absolute insert-0 h-full w-full-rounded-xl text-center bg-zinc-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h1 class="text-2xl font-semibold text-purple-500">Routines and Tips</h1>
                        <span class="text-lg text-white overflow-y-auto">
                            Fuel your calisthenics journey with nutritious meals and smart tips.
                             Opt for lean proteins, whole grains, and plenty of fruits and vegetables to support muscle growth and recovery.
                              Stay hydrated, plan meals ahead, and prioritize balanced nutrition to optimize performance and achieve your fitness goals.
                        </span>
                        <div class="flex flex-wrap justify-center items-center gap-4">
                            <NuxtLink to="meals"><button class="bg-violet-500 hover:bg-violet-700 hover:shadow-purple-700 shadow-lg rounded-md w-32 py-2 text-xl text-white font-bold">Meal Plan</button></NuxtLink>
                            <NuxtLink to="tips"><button class="bg-violet-500 hover:bg-violet-700 hover:shadow-purple-700 shadow-lg rounded-md w-32 py-2 text-xl text-white font-bold">Tips & Tricks</button></NuxtLink>
                        </div>
                    </div>
                </div>
            </section>

            <section class="group card h-96 w-96 [perspective:1000px] my-4">
                <div class="relative h-full w-full rounded-xl shadow-indigo-300 shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:shadow-none">
                    <div class="absolute inset-0">
                        <img class="w-full h-full rounded-xl object-cover shadow-xl" src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-persian-indigo-solid-color-background.jpg" alt="CommunityCard">
                    </div>
                    <div class="flex flex-col items-center gap-4 p-4 absolute insert-0 h-full w-full-rounded-xl text-center bg-zinc-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h1 class="text-2xl font-semibold text-indigo-500">Achieve and Share</h1>
                        <span class="text-lg text-white overflow-y-auto">
                            Calisthenics is a dynamic form of exercise that uses bodyweight movements to build strength,
                            flexibility, and endurance.
                            It focuses on functional movements and requires no equipment,
                            making it accessible to anyone looking to improve their fitness level and overall health.
                        </span>
                        <NuxtLink to="community"><button class="bg-indigo-500 hover:bg-indigo-700 hover:shadow-blue-700 shadow-lg rounded-md w-32 py-2 text-xl text-white font-bold">Check out</button></NuxtLink>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>

const { $anime } = useNuxtApp()

onMounted(() => {

    const animation = $anime({
        targets: '.card',
        keyframes: [
            {translateX: -1000, scale: 0},
            {translateX: 0, scale: 1},
        ],
        easing: 'easeInOutSine',
        autoplay: false
    })

    const cardSection = document.querySelector(".section2")

    window.onscroll = function(e) {
        animation.seek(window.pageYOffset * 2)
    }

})

</script>

<style scoped>
.cover-bottom-wave {
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.cover-bottom-wave svg {
    display: block;
    width: calc(100% + 1.3px);
    height: 76px;
}

.cover-bottom-wave .shape-fill {
    fill: rgba(126, 34, 206, 0.66);
}

.text-color {
    color: #f5c842;
}

.cover-image {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-image: url(https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1298459380_4000x.jpg?v=1587914500);
    background-attachment: fixed;
}

@media only screen and (max-width: 1096px) {
    .cover-image {
        background-position: 30%;
    }   
}

@media only screen and (max-width: 843px) {
    .cover-image {
        background-position: 0%;
        background-size: cover;
        background-image: url(https://images.unsplash.com/photo-1593455026613-e30bfc0a54a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsaXN0aGVuaWNzfGVufDB8fDB8fHww&w=1000&q=80);
    }   
}

@media only screen and (max-width: 638px) {
    .cover-image {
        background-position: center;
        background-size: cover;
        background-image: url(https://longevity.technology/lifestyle/wp-content/uploads/2023/02/man-doing-Calisthenics-outdoors.jpg);
    }   
}

.cover {
    width: 100%;
    height: 100vh;
    background-color: rgba(126, 34, 206, 0.66);
}

</style>
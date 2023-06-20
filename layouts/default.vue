<template>
    <transition name="slide-fade">
        <div v-if="ToggleNav" class="fixed sm:hidden min-w-full min-h-[105%] bg-black/40 z-30">
            <div class="absolute right-0 bg-neutral-900 w-64 h-[105%] flex flex-col gap-8 text-white text-lg">
                <div class="p-2 bg-stone-900/10 border-b-2 flex flex-row-reverse justify-between items-center">
                    <div>
                        <Menu as="div" class="relative sm:inline-block text-left">
                            <div class="mx-2 my-1 translate-y-1">
                                <MenuButton>
                                    <img
                                    class="box-border rounded-full w-10 aspect-square object-cover border-2 hover:border-purple-600"
                                    src="https://i.pinimg.com/564x/c4/94/ef/c494effaad2d43ff658ddd58ed53690c.jpg"
                                    alt="Profile-Image"
                                    />
                                </MenuButton>
                            </div>
                            <transition 
                            enter-active-class="transition duration-100 ease-out" 
                            enter-from-class="transform scale-95 opacity-0" 
                            enter-to-class="transform scale-100 opacity-100" 
                            leave-active-class="transition duration-75 ease-in" 
                            leave-from-class="transform scale-100 opacity-100" 
                            leave-to-class="transform scale-95 opacity-0">
                                <MenuItems class="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <MenuItem v-slot="{ active }">
                                        <button :class="[active ? 'bg-purple-600 text-white' : 'text-purple-900', ' group flex w-full items-center rounded-md px-2 py-2 text-sm',]">Profile</button>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <button :class="[active ? 'bg-purple-600 text-white' : 'text-purple-900', ' group flex w-full items-center rounded-md px-2 py-2 text-sm',]">Account</button>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <button :class="[active ? 'bg-purple-600 text-white' : 'text-purple-900', ' group flex w-full items-center rounded-md px-2 py-2 text-sm',]">Prefrences</button>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <button :class="[active ? 'bg-purple-600 text-white' : 'text-purple-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm',]">Log out</button>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                    <button class="material-icons" @click="ToggleNav = !ToggleNav">close</button>
                </div>

                <nav class="flex flex-col gap-4">
                    <NuxtLink class="link-item mx-0 border-l-2" to="/"><span>Home</span></NuxtLink>
                    <NuxtLink class="link-item mx-0 border-l-2" to="blog"><span>Blog</span></NuxtLink>
                    <NuxtLink class="link-item mx-0 border-l-2" to="tips"><span>Tips</span></NuxtLink>
                    <NuxtLink class="link-item mx-0 border-l-2" to="meals"><span>Meals</span></NuxtLink>
                    <NuxtLink class="link-item mx-0 border-l-2" to="community"><span>Community</span></NuxtLink>
                </nav>
            </div>
        </div>
    </transition>
    <div class="flex justify-between items-center py-2 px-1 bg-neutral-900 text-white border-b-4 border-purple-500">
        <h1>LOGO</h1>
        <nav class="sm:flex hidden justify-evenly items-center gap-4 mx-2 text-lg">
            <NuxtLink class="link-item" to="/"><span>Home</span></NuxtLink>
            <NuxtLink class="link-item" to="blog"><span>Blog</span></NuxtLink>
            <NuxtLink class="link-item" to="tips"><span>Tips</span></NuxtLink>
            <NuxtLink class="link-item" to="meals"><span>Meals</span></NuxtLink>
            <NuxtLink class="link-item" to="community"><span>Community</span></NuxtLink>
        </nav>
        <div>
            <Menu as="div" class="hidden relative sm:inline-block text-left">
                <div class="mx-2 my-1 translate-y-1">
                    <MenuButton>
                        <img
                        class="box-border rounded-full w-8 aspect-square object-cover border-2 hover:border-purple-600"
                        src="https://i.pinimg.com/564x/c4/94/ef/c494effaad2d43ff658ddd58ed53690c.jpg"
                        alt="Profile-Image"
                        />
                    </MenuButton>
                </div>
                <transition 
                enter-active-class="transition duration-100 ease-out" 
                enter-from-class="transform scale-95 opacity-0" 
                enter-to-class="transform scale-100 opacity-100" 
                leave-active-class="transition duration-75 ease-in" 
                leave-from-class="transform scale-100 opacity-100" 
                leave-to-class="transform scale-95 opacity-0">
                    <MenuItems class="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem v-slot="{ active }">
                            <button :class="[active ? 'bg-purple-600 text-white' : 'text-purple-900', ' group flex w-full items-center rounded-md px-2 py-2 text-sm',]">Profile</button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <button :class="[active ? 'bg-purple-600 text-white' : 'text-purple-900', ' group flex w-full items-center rounded-md px-2 py-2 text-sm',]">Account</button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <button :class="[active ? 'bg-purple-600 text-white' : 'text-purple-900', ' group flex w-full items-center rounded-md px-2 py-2 text-sm',]">Prefrences</button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <button :class="[active ? 'bg-purple-600 text-white' : 'text-purple-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm',]">Log out</button>
                        </MenuItem>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
        <button class="block sm:hidden material-icons" @click="ToggleNav = !ToggleNav">menu</button>
    </div>

    <div>
        <NuxtPage></NuxtPage>
    </div>
</template>
  
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const ToggleNav = ref(null)

</script>
  
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.router-link-exact-active {
    color: rgb(126, 34, 206);
}
</style>  
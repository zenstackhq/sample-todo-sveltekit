<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';

    export let form: ActionData;
</script>

<div>
    <div
        class="flex flex-col items-center justify-center px-6 pt-4 lg:pt-8 mx-auto h-screen bg-cover bg-[url('/auth-bg.jpg')]"
    >
        <a href="/">
            <div class="flex space-x-4 items-center mb-6 lg:mb-10">
                <img src="/logo.png" width={42} height={42} alt="logo" />
                <h1 class="text-4xl text-white">Welcome to Todo</h1>
            </div>
        </a>
        <div
            class="items-center justify-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-md xl:p-0"
        >
            <div class="w-full p-6 space-y-8 sm:p-8 lg:p-16">
                <h2 class="text-2xl font-bold text-gray-900 lg:text-3xl">
                    Create a Free Account
                </h2>
                <form class="mt-8" action="#" method="post" use:enhance>
                    {#if form?.dup}
                        <p class="text-red-600 my-2">
                            Email aready registered!
                        </p>
                    {/if}
                    <div class="mb-6">
                        <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="Email address"
                            value={form?.email ?? ''}
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            value={form?.password ?? ''}
                            required
                        />
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                name="remember"
                                type="checkbox"
                                class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                required
                            />
                        </div>
                        <div class="ml-3 text-sm">
                            <label
                                for="remember"
                                class="font-medium text-gray-900"
                            >
                                I accept the{' '}
                                <!-- svelte-ignore a11y-invalid-attribute -->
                                <a
                                    href="#"
                                    class="text-primary-700 hover:underline"
                                >
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                    </div>
                    <button class="btn btn-primary mt-4" type="submit">
                        Create account
                    </button>
                    <div class="mt-4 text-sm font-medium text-gray-500">
                        Already have an account?{' '}
                        <a href="/signin" class="text-primary-700">
                            Login here
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

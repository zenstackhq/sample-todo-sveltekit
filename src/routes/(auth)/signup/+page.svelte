<script lang="ts">
    import { goto } from '$app/navigation';
    import { useCreateUser } from '$lib/hooks';

    let email = '';
    let password = '';
    const createUser = useCreateUser();

    function onCreateUser() {
        $createUser.mutate({
            data: { email, password },
        });
    }

    $: if ($createUser.isSuccess) {
        // login after a successful signup
        fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => {
            if (res.ok) {
                goto('/');
            }
        });
    }

    function formatError(err: any) {
        if (!err) {
            return '';
        }
        if (err?.info?.code === 'P2002') {
            return 'Email already registered!';
        } else {
            return err?.info?.message || err?.message;
        }
    }

    $: errMsg = formatError($createUser.error);
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
                <form
                    class="mt-8"
                    action="#"
                    method="post"
                    on:submit|preventDefault={onCreateUser}
                >
                    <p class="text-red-600 my-2">{errMsg}</p>
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
                            bind:value={email}
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
                            bind:value={password}
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
                                <a
                                    href="#"
                                    class="text-primary-700 hover:underline"
                                >
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                    </div>
                    <button
                        class="btn btn-primary mt-4"
                        class:loading={$createUser.isLoading}
                        class:btn-disabled={$createUser.isLoading}
                        type="submit"
                    >
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

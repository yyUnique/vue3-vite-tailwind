<template>
    <!--
      This example requires updating your template:

      ```
      <html class="h-full bg-gray-50">
      <body class="h-full">
      ```
    -->
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
                <img alt="Workflow" class="mx-auto h-12 w-auto"
                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"/>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    {{ ' ' }}
                    <a class="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                        start your 14-day free trial
                    </a>
                </p>
            </div>
            <form action="#" class="mt-8 space-y-6" method="POST">
                <input name="remember" type="hidden" value="true"/>
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label class="sr-only" for="email-address">Email address</label>
                        <input autocomplete="email"
                               class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                               id="email-address" name="email" placeholder="Email address" required="" type="email"/>
                    </div>
                    <div>
                        <label class="sr-only" for="password">Password</label>
                        <input autocomplete="current-password"
                               class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                               id="password" name="password" placeholder="Password" required="" type="password"/>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                               id="remember-me" name="remember-me" type="checkbox"/>
                        <label class="ml-2 block text-sm text-gray-900" for="remember-me">
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a class="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div>
                    <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            type="submit">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"/>
                        </span>
                        Sign in
                    </button>
                    <el-button type="primary" @click="$router.push('/home')">Primary</el-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {LockClosedIcon} from '@heroicons/vue/solid'

    export default {
        components: {
            LockClosedIcon,
        },
    }
</script>

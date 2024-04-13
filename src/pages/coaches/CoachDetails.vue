<template>
  <TheContainer class="pt-36">
    <div class="lg:flex-row gap-16 flex flex-col justify-between">
      <div class="w-full lg:max-w-lg lg:flex-auto">
        <p class="text-heading3 font-bold">We’re always looking for awesome people to join us</p>
        <p class="mt-3 text-heading6 font-light text-neutral-600">
          Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non
          placerat nam arcu. Cras purus nibh cursus sit eu in id.
        </p>
        <img
          src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
          alt=""
          class="mt-16 aspect-[6/5] w-full bg-neutral-100 object-cover lg:aspect-auto lg:h-[34.5rem]"
        />
      </div>
      <div class="w-full lg:max-w-xl lg:flex-auto">
        <h3 class="sr-only">Job openings</h3>
        <ul class="-my-8 divide-y divide-neutral-100">
          <li v-for="opening in jobOpenings" :key="opening.id" class="py-8">
            <dl class="relative flex flex-wrap gap-x-3">
              <dt class="sr-only">Role</dt>
              <dd class="w-full flex-none text-lg font-semibold tracking-tight text-neutral-900">
                <a :href="opening.href">
                  {{ opening.role }}
                  <span class="absolute inset-0" aria-hidden="true" />
                </a>
              </dd>
              <dt class="sr-only">Description</dt>
              <dd class="mt-2 w-full flex-none text-base leading-7 text-neutral-600">
                {{ opening.description }}
              </dd>
              <dt class="sr-only">Salary</dt>
              <dd class="mt-4 text-base font-semibold leading-7 text-neutral-900">
                {{ opening.salary }}
              </dd>
              <dt class="sr-only">Location</dt>
              <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-neutral-500">
                <svg
                  viewBox="0 0 2 2"
                  class="h-0.5 w-0.5 flex-none fill-neutral-300"
                  aria-hidden="true"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {{ opening.location }}
              </dd>
            </dl>
          </li>
        </ul>
        <div class="mt-8 flex border-t border-neutral-100 pt-8">
          <a href="#" class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >View all openings <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
    </div>
  </TheContainer>
</template>

<script setup>
import TheContainer from '@/layouts/container/TheContainer.vue';

const jobOpenings = [
  {
    id: 1,
    role: 'Full-time designer',
    href: '#',
    description:
      'Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.',
    salary: '$75,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    role: 'Laravel developer',
    href: '#',
    description:
      'Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.',
    salary: '$125,000 USD',
    location: 'San Francisco, CA',
  },
  {
    id: 3,
    role: 'React Native developer',
    href: '#',
    description:
      'Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.',
    salary: '$105,000 USD',
    location: 'San Francisco, CA',
  },
];
</script>

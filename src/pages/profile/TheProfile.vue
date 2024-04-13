<template>
  <div class="mx-auto min-h-screen w-full max-w-[1200px] px-8 py-6 font-mono">
    <div class="mb-10 flex flex-grow flex-col gap-10">
      <ProfileHeader />
      <ProfileTechstack />
      <ProfileDevelopment />
      <ProfileLibraries />
      <ProfileExperience />
      <ProfileProjects />
      <ProfileCertifications />
      <ProfileEducation />
      <ProfileCommunity />
    </div>
  </div>
</template>
<script setup lang="ts">
import ProfileCertifications from './ProfileCertifications.vue';
import ProfileCommunity from './ProfileCommunity.vue';
import ProfileDevelopment from './ProfileDevelopment.vue';
import ProfileEducation from './ProfileEducation.vue';
import ProfileExperience from './ProfileExperience.vue';
import ProfileHeader from './ProfileHeader.vue';
import ProfileLibraries from './ProfileLibraries.vue';
import ProfileProjects from './ProfileProjects.vue';
import ProfileTechstack from './ProfileTechstack.vue';
</script>

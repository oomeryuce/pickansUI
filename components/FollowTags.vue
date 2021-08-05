<template>
  <PickansCard>
    <div slot="header" class="flex flex-row items-center justify-between">
      <h2 class="flex flex-row items-center text-xl font-extrabold">
        <span>Tags to follow</span>
      </h2>
    </div>
    <template #content>
      <div class="h-56 overflow-auto" tabindex="0">
        <div class="flex flex-row flex-wrap">
          <a
            href="#"
            class="
              relative
              flex flex-col
              items-center
              w-1/2
              p-3
              hover:bg-bluish-gray-100
              dark:hover:bg-brand-dark-grey-900
              undefined
            "
            ><div class="flex-shrink-0 w-10 h-10 mb-3">
              <img
                alt="Crazy Blogger"
                class="block w-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1606289975354/LJvLIwI0A.png?auto=compress"
              />
            </div>
            <p
              class="
                text-sm
                font-medium
                tracking-tight
                text-center text-brand-grey-800
                dark:text-brand-grey-200
                overflow-ellipsis
              "
            >
              Crazy Blogger
            </p></a
          ><a
            href="#"
            class="
              relative
              flex flex-col
              items-center
              w-1/2
              p-3
              hover:bg-bluish-gray-100
              dark:hover:bg-brand-dark-grey-900
              undefined
            "
            ><div class="flex-shrink-0 w-10 h-10 mb-3">
              <img
                alt="Word Warrior"
                class="block w-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1606290664793/u20p_tVVO.png?auto=compress"
              />
            </div>
            <p
              class="
                text-sm
                font-medium
                tracking-tight
                text-center text-brand-grey-800
                dark:text-brand-grey-200
                overflow-ellipsis
              "
            >
              Word Warrior
            </p></a
          ><a
            href="#"
            class="
              relative
              flex flex-col
              items-center
              w-1/2
              p-3
              hover:bg-bluish-gray-100
              dark:hover:bg-brand-dark-grey-900
              undefined
            "
            ><div class="flex-shrink-0 w-10 h-10 mb-3">
              <img
                alt="Talk of the town"
                class="block w-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1606290543116/YLi4z0Voa.png?auto=compress"
              />
            </div>
            <p
              class="
                text-sm
                font-medium
                tracking-tight
                text-center text-brand-grey-800
                dark:text-brand-grey-200
                overflow-ellipsis
              "
            >
              Talk of the town
            </p></a
          ><a
            href="#"
            class="
              relative
              flex flex-col
              items-center
              w-1/2
              p-3
              hover:bg-bluish-gray-100
              dark:hover:bg-brand-dark-grey-900
              undefined
            "
            ><div class="flex-shrink-0 w-10 h-10 mb-3">
              <img
                alt="Self Starter"
                class="block w-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1606289025001/A5SrhGcq7.png?auto=compress"
              />
            </div>
            <p
              class="
                text-sm
                font-medium
                tracking-tight
                text-center text-brand-grey-800
                dark:text-brand-grey-200
                overflow-ellipsis
              "
            >
              Self Starter
            </p></a
          ><a
            href="#"
            class="
              relative
              flex flex-col
              items-center
              w-1/2
              p-3
              hover:bg-bluish-gray-100
              dark:hover:bg-brand-dark-grey-900
              undefined
            "
            ><div class="flex-shrink-0 w-10 h-10 mb-3">
              <img
                alt="#2Articles1Week Challenge"
                class="block w-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1606287626442/J2KjyfCP8.png?auto=compress"
              />
            </div>
            <p
              class="
                text-sm
                font-medium
                tracking-tight
                text-center text-brand-grey-800
                dark:text-brand-grey-200
                overflow-ellipsis
              "
            >
              #2Articles1Week Challenge
            </p></a
          >
        </div>
      </div></template
    >
  </PickansCard>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import PickansCard from "~/components/UI/PickansCard.vue";

export default defineComponent({
  name: "FollowTags",
  components: { PickansCard },
});
</script>

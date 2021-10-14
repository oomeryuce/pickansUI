<template>
  <div>
    <DefaultStructure :right="false">
      <div
        class="
          relative
          grid grid-cols-12
          gap-2
          px-2
          mx-auto
          md:gap-4
          xl:grid-cols-8
          2xl:px-5
          overflow-y-auto
        "
      >
        <PlaceHolderLoading v-if="loading" class="col-span-12" />
        <div class="col-span-12 md:pt-2 md:col-span-8 xl:col-span-6">
          <AskQuestion v-if="!settingsPage && !loading" :data="questionData" />
          <QuestionSettings
            v-if="settingsPage && !loading"
            :active-tab="activeTab"
            :data="questionData"
          />
        </div>
        <div class="col-span-12 md:pt-2 md:col-span-4 xl:col-span-2">
          <QuestionDetails
            v-if="!settingsPage && !loading"
            :data="questionData"
            @open-settings="settingsPage = true"
          />
          <PickansCard v-if="settingsPage && !loading">
            <template #header>
              <h2 class="text-xl font-bold">Question Settings</h2>
            </template>
            <template #content>
              <div
                class="flex flex-col items-center justify-center p-4 space-y-3"
              >
                <span class="text-center">
                  Change your question's incoming fees and other settings.
                </span>
                <div class="tabs tabs-boxed w-max">
                  <a
                    class="tab"
                    :class="activeTab === 1 ? 'tab-active' : ''"
                    @click="activeTab = 1"
                  >
                    Tab 1
                  </a>
                  <a
                    class="tab"
                    :class="activeTab === 2 ? 'tab-active' : ''"
                    @click="activeTab = 2"
                  >
                    Tab 2
                  </a>
                </div>
                <span class="text-center">
                  When you are done with settings please click button down below
                </span>
                <button
                  id="finishSettings"
                  type="button"
                  class="btn btn-primary my-3"
                  @click="settingsPage = false"
                >
                  Finish
                </button>
              </div>
            </template>
          </PickansCard>
        </div>
      </div>
    </DefaultStructure>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DefaultStructure from "~/components/DefaultStructure";
import AskQuestion from "~/components/question/AskQuestion";
import QuestionDetails from "~/components/question/QuestionDetails";
import QuestionSettings from "~/components/question/QuestionSettings";
import PickansCard from "~/components/UI/PickansCard";
export default {
  name: "Index",
  components: {
    AskQuestion,
    DefaultStructure,
    QuestionDetails,
    QuestionSettings,
    PickansCard,
  },

  data() {
    return {
      activeTab: 1,
      settingsPage: false,
    };
  },

  computed: {
    ...mapGetters({
      questionData: "questions/questionData",
      loading: "shared/loading",
    }),
  },

  methods: {},
};
</script>

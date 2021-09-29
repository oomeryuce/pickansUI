<template>
  <div>
    <QuestionLayout>
      <AskQuestion v-if="!settingsPage && !loading" :data="questionData" />
      <QuestionSettings
        v-if="settingsPage && !loading"
        :active-tab="activeTab"
        :data="questionData"
      />
      <template #rightSide>
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
      </template>
      <PlaceHolderLoading v-if="loading" />
    </QuestionLayout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AskQuestion from "~/components/question/AskQuestion";
import QuestionLayout from "~/components/question/QuestionLayout";
import QuestionDetails from "~/components/question/QuestionDetails";
import QuestionSettings from "~/components/question/QuestionSettings";
import PickansCard from "~/components/UI/PickansCard";
export default {
  name: "Index",
  components: {
    AskQuestion,
    QuestionLayout,
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

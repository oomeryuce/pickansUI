<template>
  <div>
    <div v-show="activeTab === 1">
      <div class="p-4">
        <label>Difficulty</label>
        <div class="bg-base-100 rounded-box shadow-md p-4 m-4">
          <p class="mb-3">
            What is your offer to question difficulty level and price?
          </p>
          <div class="btn-group">
            <button
              data-tip="5$"
              type="button"
              class="btn capitalize tooltip tooltip-bottom"
              :class="difficulty === 5 ? 'btn-active' : ''"
              @click="difficulty = 5"
            >
              Easy
            </button>
            <button
              data-tip="10$"
              type="button"
              class="btn capitalize tooltip tooltip-bottom"
              :class="difficulty === 10 ? 'btn-active' : ''"
              @click="difficulty = 10"
            >
              Medium
            </button>
            <button
              data-tip="20$"
              type="button"
              class="btn capitalize tooltip tooltip-bottom"
              :class="difficulty === 20 ? 'btn-active' : ''"
              @click="difficulty = 20"
            >
              Hard
            </button>
            <button
              data-tip="Offer to expert"
              type="button"
              class="btn capitalize tooltip tooltip-bottom"
              :class="difficulty === 'offer' ? 'btn-active' : ''"
              @click="difficulty = 'offer'"
            >
              Offer
            </button>
          </div>
        </div>
      </div>
      <div class="p-4">
        <label>Preview Price Ratio</label>
        <div class="bg-base-100 rounded-box shadow-md p-4 m-4">
          <p class="mb-3">Sharing of the each preview income</p>
          <div class="grid grid-cols-4 flex items-center">
            <input
              v-model="priceRatio"
              type="range"
              max="33.3"
              step="0.1"
              min="10"
              class="range range-primary col-span-3 p-3"
            />
            <div class="stat">
              <div class="stat-title">Price Ratio</div>
              <div class="stat-value">{{ priceRatio }}%</div>
              <div class="stat-desc">
                {{
                  Number.isInteger(difficulty)
                    ? Number(((difficulty / 100) * priceRatio).toFixed(2))
                    : "Offer"
                }}$
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4">
        <label>Preview</label>
        <div class="bg-base-100 rounded-box shadow-md p-4 m-4">
          <p class="mb-3">How many people preview your answer</p>
          <div class="btn-group">
            <button
              :data-tip="calculatePrice(200) + '$'"
              type="button"
              class="btn capitalize tooltip tooltip-bottom"
              :class="preview === 1 ? 'btn-active' : ''"
              @click="preview = 1"
            >
              0 - 200
            </button>
            <button
              :data-tip="calculatePrice(1000) + '$'"
              type="button"
              class="btn capitalize tooltip tooltip-bottom"
              :class="preview === 2 ? 'btn-active' : ''"
              @click="preview = 2"
            >
              200 - 1000
            </button>
            <button
              :data-tip="calculatePrice(5000) + '$'"
              type="button"
              class="btn capitalize tooltip tooltip-bottom"
              :class="preview === 3 ? 'btn-active' : ''"
              @click="preview = 3"
            >
              1000 - 5000
            </button>
            <button
              :data-tip="calculatePrice(10000) + '$'"
              type="button"
              class="btn capitalize tooltip tooltip-bottom"
              :class="preview === 4 ? 'btn-active' : ''"
              @click="preview = 4"
            >
              5000 - 10000
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="activeTab === 2">
      <div class="p-4">
        <label>Answer Type</label>
        <div class="bg-base-100 rounded-box shadow-md p-4 m-4">
          <p class="mb-3">Choose answer type of question</p>
          <div class="btn-group">
            <button
              type="button"
              class="btn capitalize"
              :class="answerType === 'text' ? 'btn-active' : ''"
              @click="answerType = 'text'"
            >
              Text
            </button>
            <button
              type="button"
              class="btn capitalize"
              :class="answerType === 'media' ? 'btn-active' : ''"
              @click="answerType = 'media'"
            >
              Media
            </button>
            <button
              type="button"
              class="btn capitalize"
              :class="answerType === 'audio' ? 'btn-active' : ''"
              @click="answerType = 'audio'"
            >
              Audio
            </button>
          </div>
        </div>
      </div>
      <div class="p-4">
        <label>Deadline</label>
        <div class="bg-base-100 rounded-box shadow-md p-4 m-4">
          <p class="mb-3">Deadline of the answering question</p>
          <div class="grid grid-cols-4 flex items-center">
            <input
              v-model="deadLine"
              type="range"
              max="500"
              min="48"
              class="range range-primary col-span-3 p-3"
            />
            <div class="stat">
              <div class="stat-title">Deadline</div>
              <div class="stat-value">
                {{ deadLine === "500" ? "∞" : deadLine }}
              </div>
              <div class="stat-desc">Hours</div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4">
        <label>Donate</label>
        <div class="bg-base-100 rounded-box shadow-md p-4 m-4">
          <div class="grid grid-cols-4">
            <span class="col-span-3 flex items-center">
              Do you want to donate your question preview income to charities?
            </span>
            <div class="flex justify-end">
              <input
                v-model="donate"
                type="checkbox"
                class="toggle toggle-primary toggle-lg"
              />
            </div>
            <div v-show="donate" class="col-span-4 space-y-3 mt-3">
              <select
                v-model="donateTo"
                class="select select-bordered select-primary w-full"
              >
                <option :value="null" disabled="disabled" selected="selected">
                  Charities
                </option>
                <option :value="1">Charitie 1</option>
                <option :value="2">Charitie 2</option>
                <option :value="3">Charitie 3</option>
              </select>
              <div class="grid grid-cols-4 flex items-center">
                <div class="col-span-3 flex flex-col">
                  <span>Sharing of the income with charities</span>
                  <input
                    v-model="donateRatio"
                    type="range"
                    max="100"
                    min="0"
                    class="range range-primary"
                  />
                  <div class="flex justify-between">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>
                <div class="stat">
                  <div class="stat-title">Donate Ratio</div>
                  <div class="stat-value">{{ donateRatio }}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "QuestionSettings",
  props: {
    activeTab: {
      type: Number,
      default: 1,
    },

    data: {
      type: Object,
      default: null,
      required: true,
    },
  },

  data() {
    return {
      difficulty: 10,
      priceRatio: 10,
      preview: 3,
      answerType: "media",
      deadLine: 48,
      donate: false,
      donateTo: null,
      donateRatio: 0,
    };
  },

  mounted() {
    const finishButton = document.getElementById("finishSettings");
    finishButton.addEventListener("click", this.saveData);
    if (this.data) {
      this.difficulty = this.data.difficulty;
      this.priceRatio = this.data.priceRatio;
      this.preview = this.data.preview;
      this.answerType = this.data.answerType;
      this.deadLine = this.data.deadLine;
      this.donate = this.data.donate;
      this.donateTo = this.data.donateTo;
      this.donateRatio = this.data.donateRatio;
    }
  },

  methods: {
    ...mapActions({
      updateQuestionData: "questions/updateQuestionData",
    }),

    calculatePrice(ratio) {
      if (Number.isInteger(this.difficulty)) {
        return Number(
          ((this.difficulty / 100) * this.priceRatio * ratio).toFixed(2)
        );
      } else {
        return "offer";
      }
    },

    async saveData() {
      const payload = {
        data: {
          question: this.data.question,
          attachments: this.data.attachments,
          privacy: this.data.privacy,
          difficulty: this.difficulty,
          priceRatio: this.priceRatio,
          preview: this.preview,
          answerType: this.answerType,
          deadLine: this.deadLine,
          donate: this.donate,
          donateTo: this.donateTo,
          donateRatio: this.donateRatio,
        },
      };
      await this.updateQuestionData(payload);
    },
  },
};
</script>

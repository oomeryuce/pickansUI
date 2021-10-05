<template>
  <PickansCard v-if="data">
    <template #header>
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold">Details</h2>
        <button
          type="button"
          class="btn btn-primary btn-sm py-0"
          @click="$emit('open-settings')"
        >
          Settings
        </button>
      </div>
    </template>
    <template #content>
      <div class="px-4 py-3">
        <ul class="divide-y divide-gray-100">
          <li class="py-3 flex justify-between items-center">
            <span>Privacy</span>
            <div
              class="badge badge-outline"
              :class="details.privacy ? 'badge-error' : 'badge-success'"
            >
              {{ details.privacy ? "Private" : "Public" }}
            </div>
          </li>
          <li class="py-3 flex justify-between items-center">
            <span>Difficulty</span>
            <div
              class="badge"
              :class="
                details.difficulty === 5
                  ? 'badge-info'
                  : details.difficulty === 10
                  ? 'badge-warning'
                  : details.difficulty === 20
                  ? 'badge-error'
                  : 'badge-success'
              "
            >
              {{
                details.difficulty === 5
                  ? "Easy"
                  : details.difficulty === 10
                  ? "Medium"
                  : details.difficulty === 20
                  ? "Hard"
                  : "Offer"
              }}
            </div>
          </li>
          <li class="py-3 flex justify-between items-center">
            <span>Deadline</span>
            <div
              class="badge badge-outline"
              :class="
                details.deadLine < 100
                  ? 'badge-info'
                  : details.deadLine < 200
                  ? 'badge-success'
                  : details.deadLine < 300
                  ? 'badge-warning'
                  : 'badge-error'
              "
            >
              {{ details.deadLine }}h
            </div>
          </li>
          <li class="py-3 flex justify-between items-center">
            <span>Price</span>
            <div
              class="badge badge-outline capitalize"
              :class="
                details.difficulty < 5
                  ? 'badge-info'
                  : details.difficulty < 10
                  ? 'badge-success'
                  : details.difficulty < 15
                  ? 'badge-warning'
                  : 'badge-error'
              "
            >
              {{ details.difficulty + (details.difficulty > 0 ? "$" : "") }}
            </div>
          </li>
          <li class="py-3 flex justify-between items-center">
            <span>Estimated Preview Income</span>
            <div
              class="badge badge-outline"
              :class="
                previewIncome < 5
                  ? 'badge-info'
                  : previewIncome < 10
                  ? 'badge-success'
                  : previewIncome < 15
                  ? 'badge-warning'
                  : 'badge-error'
              "
            >
              {{ previewIncome + (previewIncome > 0 ? "$" : "") }}
            </div>
          </li>
          <li class="py-3 flex justify-between items-center">
            <span>Donate</span>
            <div
              class="badge badge-outline"
              :class="details.donate ? 'badge-success' : 'badge-warning'"
            >
              {{ details.donate ? "Yes" : "No" }}
            </div>
          </li>
        </ul>
      </div>
    </template>
  </PickansCard>
  <PlaceHolderLoading v-else />
</template>

<script>
import PlaceHolderLoading from "~/components/PlaceHolderLoading";
import PickansCard from "~/components/UI/PickansCard";
export default {
  name: "QuestionDetails",
  components: { PickansCard, PlaceHolderLoading },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      details: {
        privacy: null,
        difficulty: null,
        priceRatio: null,
        answerType: null,
        deadLine: null,
        donate: null,
        donateTo: null,
        donateRatio: null,
      },
    };
  },

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    previewIncome() {
      if (this.data && this.data.difficulty > 0) {
        return (
          this.data.difficulty -
          (this.data.difficulty / 100) * this.data.priceRatio
        );
      } else {
        return "Offer";
      }
    },
  },

  beforeMount() {
    if (this.data) {
      this.details.privacy = this.data.privacy;
      this.details.difficulty = this.data.difficulty;
      this.details.priceRatio = this.data.priceRatio;
      this.details.answerType = this.data.answerType;
      this.details.deadLine = this.data.deadLine;
      this.details.donate = this.data.donate;
      this.details.donateTo = this.data.donateTo;
      this.details.donateRatio = this.data.donateRatio;
    }
  },
};
</script>

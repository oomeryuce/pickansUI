<template>
  <PickansCard v-if="data">
    <template #header>
      <h2 class="text-xl font-bold">Ask Question</h2>
    </template>
    <template #content>
      <div class="grid grid-cols-1 gap-4 p-4 space-y-4">
        <FormInputs
          :value="description"
          input-type="textarea"
          label="Description"
          placeholder="Describe your question..."
          :required="true"
        />
        <div class="flex flex-col space-y-3">
          <span class="text-sm">Attachments</span>
          <div v-if="atachments.length > 0" class="grid grid-cols-6 gap-4">
            <div
              v-for="(file, index) in atachments"
              :key="index"
              class="
                avatar
                relative
                mr-3
                flex flex-col
                col-span-3
                sm:col-span-2
                lg:col-span-1
              "
            >
              <div class="w-24 h-24 mask mask-squircle bg-base-300">
                <img
                  :id="'attachment_' + index"
                  :src="fileToSrc(file, index)"
                  :alt="file.name"
                />
              </div>
              <button
                type="button"
                class="btn btn-circle glass btn-xs absolute top-0 right-0"
                @click="deleteAttachment(index)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-4 h-4 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <small class="text-center text-primary">
                {{ file.name }}
              </small>
            </div>
          </div>
          <p v-else class="text-xs">No attachment(s) added yet.</p>
          <label class="btn btn-primary w-full lg:w-1/2 xl:w-1/3">
            <span class="text-base leading-normal">
              Add Attachment(<span class="lowercase">s</span>)
            </span>
            <input
              type="file"
              accept="image/*"
              multiple
              hidden
              @change="addFiles"
            />
          </label>
        </div>
        <div class="flex justify-end">
          <button type="button" class="btn btn-primary">Ask</button>
        </div>
      </div>
    </template>
  </PickansCard>
  <PlaceHolderLoading v-else />
</template>

<script>
import PickansCard from "~/components/UI/PickansCard";
import FormInputs from "~/components/UI/FormInputs";
import PlaceHolderLoading from "~/components/PlaceHolderLoading";
export default {
  name: "AskQuestion",
  components: { PickansCard, FormInputs, PlaceHolderLoading },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      description: null,
      atachments: [],
    };
  },

  beforeMount() {
    this.description = this.data.question;
  },

  methods: {
    addFiles(event) {
      for (const item of event.target.files) {
        this.atachments.push(item);
      }
    },

    fileToSrc(file, index) {
      const reader = new FileReader();
      reader.onload = function (file) {
        document
          .getElementById(`attachment_${index}`)
          .setAttribute("src", file.target.result);
      };
      reader.readAsDataURL(file);
    },

    deleteAttachment(index) {
      this.atachments.splice(index, 1);
    },
  },
};
</script>

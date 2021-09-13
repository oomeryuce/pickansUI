<template>
  <div>
    <div class="form-control" :class="{ 'form-group--error': error }">
      <label v-if="label !== ''" :for="slugify(label)" class="label">
        <span class="text-sm font-medium">{{ label }}</span>
        <span v-show="required" class="label-text-alt">* Required</span>
      </label>
      <input
        v-if="inputType === 'text'"
        :id="slugify(label)"
        v-model="content"
        type="text"
        :placeholder="placeholder"
        class="w-full input bg-base-200"
        :class="error ? 'input-error' : 'input-info'"
        @input="handleInput"
      />
      <textarea
        v-else-if="inputType === 'textarea'"
        :id="slugify(label)"
        v-model="content"
        class="textarea h-24 textarea-bordered bg-base-200"
        :class="error ? 'textarea-error' : 'textarea-info'"
        :placeholder="placeholder"
        @input="handleInput"
      ></textarea>
      <div v-else-if="inputType === 'username'" class="relative">
        <span
          class="absolute top-0 left-0 rounded-r-none btn"
          :class="error && errorMessage !== '' ? 'btn-error' : 'btn-primary'"
          >@</span
        >
        <input
          :id="slugify(label)"
          v-model="content"
          type="text"
          :placeholder="placeholder"
          class="w-full pl-20 input bg-base-200"
          :class="error ? 'input-error' : 'input-info'"
          @input="handleInput"
        />
      </div>
      <label v-if="error && errorMessage !== ''" class="label pb-0">
        <span class="label-text-alt text-error">{{ errorMessage }}</span>
      </label>
    </div>
    <p
      v-if="description !== ''"
      class="mt-2 text-xs text-theme-base-300 dark:text-theme-base-700"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "FormInputs",
  props: {
    value: {
      type: String,
      default: "",
    },

    inputType: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      default: "",
    },

    placeholder: {
      type: String,
      default: "",
    },

    error: {
      type: Boolean,
      default: false,
    },

    errorMessage: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    required: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      content: this.value,
    };
  },

  methods: {
    slugify(str) {
      str = str.replace(/^\s+|\s+$/g, ""); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
      const to = "aaaaeeeeiiiioooouuuunc------";
      for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
      }

      str = str
        .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-"); // collapse dashes

      return str;
    },

    handleInput(e) {
      this.$emit("input", this.content);
    },
  },
};
</script>

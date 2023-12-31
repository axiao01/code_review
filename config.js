const config = [
  {
    md5sum: "81a09a0ddf89690372fc296ff7f625af",
    filename: "ggml-gpt4all-j-v1.3-groovy.bin",
    filesize: "3785248281",
    isDefault: "true",
    bestGPTJ: "true",
    description:
      "GPT-J 6B finetuned by Nomic AI on the latest GPT4All dataset.<br>- Licensed for commercial use.<br>- Fast responses.",
  },
  {
    md5sum: "11d9f060ca24575a2c303bdc39952486",
    filename: "GPT4All-13B-snoozy.ggmlv3.q4_0.bin",
    filesize: "8136770688",
    requires: "2.4.7",
    isDefault: "true",
    bestLlama: "true",
    description:
      "LLaMA 13B finetuned by Nomic AI on the latest GPT4All dataset.<br>- Cannot be used commercially.<br>- Slower responses but higher quality.",
    url: "https://huggingface.co/TheBloke/GPT4All-13B-snoozy-GGML/resolve/main/GPT4All-13B-snoozy.ggmlv3.q4_0.bin",
  },
  {
    md5sum: "756249d3d6abe23bde3b1ae272628640",
    filename: "ggml-mpt-7b-chat.bin",
    filesize: "4854401050",
    isDefault: "true",
    bestMPT: "true",
    requires: "2.4.1",
    description:
      "MPT 7B chat model trained by Mosaic ML.<br>- Cannot be used commercially.<br>- Fast responses.",
  },
  {
    md5sum: "4acc146dd43eb02845c233c29289c7c5",
    filename: "nous-hermes-13b.ggmlv3.q4_0.bin",
    filesize: "8136777088",
    requires: "2.4.7",
    description:
      "LLaMa 13B finetuned on over 300,000 curated and uncensored instructions.<br>- Cannot be used commercially.<br>- Best finetuned LLaMA model.<br>- This model was fine-tuned by Nous Research, with Teknium and Karan4D leading the fine tuning process and dataset curation, Redmond AI sponsoring the compute, and several other contributors. The result is an enhanced Llama 13b model that rivals GPT-3.5-turbo in performance across a variety of tasks. This model stands out for its long responses, low hallucination rate, and absence of OpenAI censorship mechanisms.",
    url: "https://huggingface.co/TheBloke/Nous-Hermes-13B-GGML/resolve/main/nous-hermes-13b.ggmlv3.q4_0.bin",
  },
  {
    md5sum: "29119f8fa11712704c6b22ac5ab792ea",
    filename: "ggml-vicuna-7b-1.1-q4_2.bin",
    filesize: "4212859520",
    description:
      "LLaMA 7B finetuned by teams from UC Berkeley, CMU, Stanford, MBZUAI, and UC San Diego.<br>- Cannot be used commercially.",
  },
  {
    md5sum: "95999b7b0699e2070af63bf5d34101a8",
    filename: "ggml-vicuna-13b-1.1-q4_2.bin",
    filesize: "8136770688",
    description:
      "LLaMA 13B trained by teams from UC Berkeley, CMU, Stanford, MBZUAI, and UC San Diego.<br>- Cannot be used commercially.",
  },
  {
    md5sum: "99e6d129745a3f1fb1121abed747b05a",
    filename: "ggml-wizardLM-7B.q4_2.bin",
    filesize: "4212864640",
    description:
      "LLaMA 7B finetuned by Microsoft and Peking University.<br>- Cannot be used commercially.",
  },
  {
    md5sum: "6cb4ee297537c9133bddab9692879de0",
    filename: "ggml-stable-vicuna-13B.q4_2.bin",
    filesize: "8136777088",
    description:
      "LLaMa 13B finetuned with RLHF by Stability AI.<br>- Cannot be used commercially.",
  },
  {
    md5sum: "120c32a51d020066288df045ef5d52b9",
    filename: "ggml-mpt-7b-base.bin",
    filesize: "4854401028",
    requires: "2.4.1",
    description:
      "MPT 7B pre-trained by Mosaic ML. Trained for text completion with no assistant finetuning.<br>- Licensed for commercial use.",
  },
  {
    md5sum: "d5eafd5b0bd0d615cfd5fd763f642dfe",
    filename: "ggml-nous-gpt4-vicuna-13b.bin",
    filesize: "8136777088",
    description:
      "LLaMa 13B fine-tuned on ~180,000 instructions by Nous Research.<br>- Cannot be used commercially.",
  },
  {
    md5sum: "1cfa4958f489f0a0d1ffdf6b37322809",
    filename: "ggml-mpt-7b-instruct.bin",
    filesize: "4854401028",
    requires: "2.4.1",
    description:
      "MPT 7B instruction finetuned by Mosaic ML.<br>- Licensed for commercial use.",
  },
  {
    md5sum: "489d21fd48840dcb31e5f92f453f3a20",
    filename: "wizardLM-13B-Uncensored.ggmlv3.q4_0.bin",
    filesize: "8136777088",
    requires: "2.4.7",
    description:
      "LLaMa 13B finetuned on the uncensored assistant and instruction data.<br>- Cannot be used commercially.",
    url: "https://huggingface.co/TheBloke/WizardLM-13B-Uncensored-GGML/resolve/main/wizardLM-13B-Uncensored.ggmlv3.q4_0.bin",
  },
  {
    md5sum: "615890cb571fcaa0f70b2f8d15ef809e",
    filename: "ggml-replit-code-v1-3b.bin",
    filesize: "5202046853",
    requires: "2.4.7",
    description:
      "Replit 3B code model trained on subset of the Stack.s<br>- Licensed for commercial use.",
    url: "https://huggingface.co/nomic-ai/ggml-replit-code-v1-3b/resolve/main/ggml-replit-code-v1-3b.bin",
  },
];

import gpt4all
#with open('C:\\Users\\dxiao\\Documents\\GitHub\\pitch_recognizer\\src\\service\\ProductService.js', 'r') as file:
with open('C:\\Users\\dxiao\\Documents\\GitHub\\request-ntlm\\src\\ntlm.ts', 'r') as file:

    data = "Can you high light the code with bug and need fix. Here is the code: ```" + file.read().rstrip() + "```"
    print(data)
    gptj = gpt4all.GPT4All("ggml-replit-code-v1-3b.bin")
    messages = [{"role": "user", "content": data}]
    response = gptj.chat_completion(messages)
#gptj.generate('Name three colors.')
export default function Info() {
    return (
        <>
            <h1>LensGPT</h1>
            <div>
                Explore the insides of GPT! This tool uses <a href="https://www.lesswrong.com/posts/AcKRB8wDpdaN6v6ru/interpreting-gpt-the-logit-lens">logit lens</a> to get outputs from intermediate layers inside the model. Lens techniques map these intermediate layers to the output space, allowing us to track the evolution of an output through the model. Try it out! Select a layer below.
            </div>
        </>
    );
}
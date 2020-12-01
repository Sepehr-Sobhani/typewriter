const sentence = "hello there from lighthouse labs";

const animationTyping = () => {
  let timer = 1000;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, (timer += 50));
  }
  setTimeout(() => {
    console.log();
  }, 2800);
};

animationTyping();

const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++)
  }
  return displayCount;
};

const counter = buildCount(1);
counter()
counter()
counter()


const otherCounter = buildCount(10);
otherCounter()
otherCounter()


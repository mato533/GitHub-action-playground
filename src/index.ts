import path from "path";
export default () => {
  const testVar: string = "test";


  
  const dir = path.join("/u01", testVar);
  console.log(dir);
};

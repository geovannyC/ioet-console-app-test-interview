const modules = require("./modules");
const fs = require("fs");
const filePath = `${__dirname}/../../example-files/file.txt`;
const filePath2 = `${__dirname}/../../example-files/file2.txt`;
const filePath3 = `${__dirname}/../../example-files/file3.txt`;
const filePath4 = `${__dirname}/../../example-files/file4.txt`;
const filePath5 = `${__dirname}/../../example-files/file5.txt`;

const readerFile = (param_filepath) => {
  fs.readFile(param_filepath, "utf8", function read(err, data) {
    if (err) {
      throw err;
    } else {
      const content = data;
      processFile(content);
    }
  });
};
const processFile = async (content) => {
  const text = await modules.handleManageDataFile(content);
  console.log(`The amount to pay ${text.name} is: ${text.total_cost} USD`);
  return content;
};
readerFile(filePath);
readerFile(filePath2);
readerFile(filePath3);
readerFile(filePath4);
readerFile(filePath5);

const { fs } = require("mz");
const modules = require("./components/content-card/modules"),
  format_constructor = require("./components/content-card/data-time");
describe("Teting for the function in the modules.js", () => {
  //testing for choseFormat function
  test("should to print 270 the hour: 0-12 and the stage mon_fri", () => {
    let sh = 0;
    let eh = 12;
    let day = format_constructor.format.mon_fri;
    const getPrice = modules.choseFormat(sh, eh, day);
    let expected = 270;
    expect(getPrice).toBe(expected);
  });
  test("should to print 0 the hour: 0-0 and the stage mon_fri", () => {
    let sh = 0;
    let eh = 0;
    let day = format_constructor.format.mon_fri;
    const getPrice = modules.choseFormat(sh, eh, day);
    let expected = 0;
    expect(getPrice).toBe(expected);
  });
  test("should to print 0 the hour: 0--1 and the stage mon_fri", () => {
    let sh = 0;
    let eh = -1;
    let day = format_constructor.format.mon_fri;
    const getPrice = modules.choseFormat(sh, eh, day);
    let expected = 0;
    expect(getPrice).toBe(expected);
  });
  test("should to print 330 the hour: 0-12 and the stage weekend", () => {
    let sh = 0;
    let eh = 12;
    let day = format_constructor.format.weekend;
    const getPrice = modules.choseFormat(sh, eh, day);
    let expected = 330;
    expect(getPrice).toBe(expected);
  });
  test("should to print 0 the hour: 0-0 and the stage weekend", () => {
    let sh = 0;
    let eh = 0;
    let day = format_constructor.format.weekend;
    const getPrice = modules.choseFormat(sh, eh, day);
    let expected = 0;
    expect(getPrice).toBe(expected);
  });
  test("should to print 0 the hour: 0--0 and the stage weekend", () => {
    let sh = 0;
    let eh = -1;
    let day = format_constructor.format.weekend;
    const getPrice = modules.choseFormat(sh, eh, day);
    let expected = 0;
    expect(getPrice).toBe(expected);
  });
  //testing for payPerHour function
  test('should to print 125 set the hour "04:00" to "09:00" and the day set on Tuesday ', () => {
    let sh = "04:00";
    let eh = "09:00";
    let day = "Tuesday";
    const getPayPerHour = modules.payPerHour(sh, eh, day);
    let expected = 125;
    expect(getPayPerHour).toBe(expected);
  });
  test('should to print 150 set the hour "04:00" to "09:00" and the day set on Saturday ', () => {
    let sh = "04:00";
    let eh = "09:00";
    let day = "Saturday";
    const getPayPerHour = modules.payPerHour(sh, eh, day);
    let expected = 150;
    expect(getPayPerHour).toBe(expected);
  });
  //Testing for findDay Function
  test("should to find the day with a part of a word in the days Array, set MoN must be Monday and Su must be Sunday", async () => {
    let day = "MoN";
    let day2 = "Su";
    let expected = "Monday";
    let expected2 = "Sunday";
    const getDayMonday = await modules.findDay(day);
    const getDaySunday = await modules.findDay(day2);
    expect(getDayMonday).toBe(expected);
    expect(getDaySunday).toBe(expected2);
  });
  //Testing for buildFormat function
  test('should to print a object with cost, day, end and start hour, passing a array with the next format ["MO10:00-12:00", "SA10:00-14:00"]', async () => {
    let arrDays = ["MO10:00-12:00", "SA10:00-14:00"];
    let expected = [
      {
        cost: 30,
        day: "Monday",
        end_hour: "12:00",
        start_hour: "10:00",
      },
      {
        cost: 80,
        day: "Saturday",
        end_hour: "14:00",
        start_hour: "10:00",
      },
    ];
    const getFormat = await modules.buildFormat(arrDays);
    expect(getFormat).toStrictEqual(expected);
  });
  //Testing for calcTotalCost function
  test("Should to calc the total cost from objects array and return 110", async () => {
    let arr = [
      {
        cost: 30,
        day: "Monday",
        end_hour: "12:00",
        start_hour: "10:00",
      },
      {
        cost: 80,
        day: "Saturday",
        end_hour: "14:00",
        start_hour: "10:00",
      },
    ];
    let expected = 110;
    const fnCalTotalCost = await modules.calcTotalCost(arr);
    expect(fnCalTotalCost).toStrictEqual(expected);
  });
  //test for handleManageDataFile function
  test("should to returns a object format with the next entrance JEORGE=SA13:00-12:00,SU12:00-14:00,SU20:00-21:00", async () => {
    let txt = "JEORGE=SA13:00-12:00,SU12:00-14:00,SU20:00-21:00";
    let expected = {
      arrDaysWorked: [
        { cost: 0, day: "Saturday", end_hour: "12:00", start_hour: "13:00" },
        {
          cost: 40,
          day: "Sunday",
          end_hour: "14:00",
          start_hour: "12:00",
        },
        {
          cost: 25,
          day: "Sunday",
          end_hour: "21:00",
          start_hour: "20:00",
        },
      ],
      name: "JEORGE",
      total_cost: 65,
    };
    const fnHandleMngDF = await modules.handleManageDataFile(txt);
    expect(fnHandleMngDF.arrDaysWorked).toStrictEqual(expected.arrDaysWorked);
  });
});
describe("Upload Example File Testing", () => {
  test("should to find and catch the file.txt", async () => {
    const filePath = `${__dirname}/example-files/file.txt`;
    let expected =
      "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00";
    await fs.exists(filePath).then((exists) => {
      if (exists) {
        fs.readFile(filePath, "utf8", (err, data)=> {
          if (err) {
            throw new Error("file does not exist");
          } else {
            expect(data).toBe(expected);
            return data;
          }
        });
      } else {
        throw new Error("file does not exist");
      }
    })
  });
  test('should to print ', () => {
      
  });
});
